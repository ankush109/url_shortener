const FetchUrls = async () => {
  const response = await fetch(
    `${process.env.NEXT_PULIC_BASE_URL}/api/shorten`,
    {
      cache: "no-cache",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to get URLs!");
  }
  return response.json();
};

import React from "react";

const Page = async () => {
  let urls = await FetchUrls();
  console.log(urls, "urls");
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-8 sm:p-20 font-geist-sans  text-black h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-black font-bold mb-4">Shorten URLs</h1>
        <table className="min-w-full table-auto ">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left">Original URL</th>
              <th className="px-4 py-2 text-left">Shorten URL</th>
            </tr>
          </thead>
          <tbody>
            {urls.urls.map((u: any, index: number) => (
              <tr key={index} className="border-t border-gray-300">
                <td className="px-4 py-2">{u.originalUrl}</td>
                <td className="px-4 py-2">
                  <a
                    href={`/url/${u.shortUrl}`}
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`${process.env.NEXT_PULIC_BASE_URL}/url/${u.shortUrl}`}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
