import React, { useState, useEffect } from "react";
import { Search, ArrowLeft, Send } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const genAI = process.env.NEXT_PUBLIC_GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY)
  : null;

// Simple prompt without formatting instructions
const SYSTEM_PROMPT =
  "Provide a comprehensive response to the following query:";

const formatResponse = (text: string): string => {
  return (
    text
      // Handle bold text with double asterisks
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Handle italics with single asterisks
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Convert newlines to <br/> tags
      .replace(/\n/g, "<br/>")
      // Clean up multiple consecutive <br/> tags
      .replace(/<br\/><br\/><br\/>/g, "<br/><br/>")
  );
};

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setShowResults(true);
    setError(null);

    try {
      if (!genAI) {
        throw new Error("API not initialized");
      }

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = `${SYSTEM_PROMPT}\n\nQuery: ${query}`;
      const result = await model.generateContent(prompt);
      const text = result.response.text();

      // Format the response before adding to chat history
      const formattedResponse = formatResponse(text);

      const newUserMessage: Message = {
        role: "user",
        content: query,
      };
      const newAssistantMessage: Message = {
        role: "assistant",
        content: formattedResponse,
      };

      setChatHistory((prev) => [...prev, newUserMessage, newAssistantMessage]);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred";
      setError(errorMessage);

      const newUserMessage: Message = {
        role: "user",
        content: query,
      };
      const newErrorMessage: Message = {
        role: "assistant",
        content: `Error: ${errorMessage}`,
      };

      setChatHistory((prev) => [...prev, newUserMessage, newErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSearch();
    }
  };

  const handleBack = () => {
    setShowResults(false);
    setQuery("");
    setChatHistory([]);
    setError(null);
  };

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
      setError("API key not configured");
    }
  }, []);

  return (
    <>
      <div className="w-full h-full relative z-10">
        <div className="relative w-full h-full flex items-center px-4">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={
                error
                  ? "API key not configured correctly"
                  : "Ask Gemini anything..."
              }
              className="w-full pl-12 pr-12 py-3 bg-zinc-900 border border-zinc-800 rounded-lg 
                       text-white placeholder-gray-400 focus:outline-none focus:border-zinc-600
                       transition-all"
              disabled={!!error}
            />
            <button
              onClick={handleSearch}
              className="absolute right-4 text-gray-400 hover:text-white transition-colors"
              disabled={isLoading || !!error}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {showResults && (
        <div className="fixed inset-0 bg-black/95 z-50 transition-all duration-300">
          <div className="w-full h-full flex flex-col">
            <div className="flex items-center p-4 border-b border-zinc-800">
              <button
                onClick={handleBack}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask Gemini anything..."
                className="flex-1 ml-4 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg 
                         text-white placeholder-gray-400 focus:outline-none focus:border-zinc-600"
                disabled={isLoading}
              />
              <button
                onClick={handleSearch}
                className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
                disabled={isLoading}
              >
                <Send size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-6">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : (
                <div className="max-w-3xl mx-auto space-y-6">
                  {chatHistory.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`  rounded-full ${
                          message.role === "user"
                            ? "bg-zinc-800 text-white"
                            : "bg-zinc-900 text-gray-200"
                        }`}
                      >
                        <p
                          className="whitespace-pre-wrap"
                          dangerouslySetInnerHTML={{ __html: message.content }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
