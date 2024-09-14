import Image from "next/image";
import { shortUrlAction } from "./serverActions/serverAction";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-400 p-8 sm:p-20 font-geist-sans">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">
        URL Shortener
      </h1>
      <form
        action={shortUrlAction}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <label
          htmlFor="url"
          className="block text-lg font-semibold text-gray-700 mb-2"
        >
          Enter a URL to shorten
        </label>
        <input
          type="url"
          name="url"
          id="url"
          placeholder="https://example.com"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-4"
        />
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-md shadow-md transition duration-300 ease-in-out"
        >
          Shorten URL
        </button>
      </form>
      <footer className="mt-auto text-white text-sm">
        Built by Ankush Banerjee
      </footer>
    </div>
  );
}
