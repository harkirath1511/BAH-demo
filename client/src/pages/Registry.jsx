import React from "react";

const dummyEntries = [
  {
    id: 1,
    hash: "e3b0c44298fc1c149afbf4c8996fb924...",
    cid: "bafybeibmj3q7qmd7mwrbxv...",
    location: "Tycho Crater",
    azimuth: "120°",
    timestamp: "2025-07-01 14:25 UTC",
  },
  {
    id: 2,
    hash: "b4cfa76c98bd9c9238b1f3ea6de0d823...",
    cid: "bafybeihvgg2p2nrxvgr2b...",
    location: "Mare Serenitatis",
    azimuth: "98°",
    timestamp: "2025-06-28 11:52 UTC",
  },
  {
    id: 3,
    hash: "df23a478b5a8328cd99f763ceda9832c...",
    cid: "bafybeifd7hguo4bp43ldq...",
    location: "Copernicus Crater",
    azimuth: "145°",
    timestamp: "2025-06-30 09:10 UTC",
  },
];

const Registry = () => {
  return (
    <div className="min-h-screen bg-[url('https://cdn.mos.cms.futurecdn.net/HuGGeENt6kGyixe3hT9tnY.jpg')] bg-cover bg-center bg-no-repeat bg-black/70 bg-blend-darken"
>
      <h2 className="text-3xl font-bold mb-8 text-center">DEM Registry</h2>

      {/* Search Bar (non-functional) */}
      <div className="max-w-3xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by location, hash, or CID..."
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
        />
      </div>

      {/* Registry Entries */}
      <div className="grid gap-6 max-w-5xl mx-auto">
        {dummyEntries.map((entry) => (
          <div
            key={entry.id}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
          >
            <p><strong>SHA-256 Hash:</strong> <span className="text-green-400">{entry.hash}</span></p>
            <p><strong>IPFS CID:</strong> <span className="text-blue-400">{entry.cid}</span></p>
            <p><strong>Location:</strong> {entry.location}</p>
            <p><strong>Azimuth:</strong> {entry.azimuth}</p>
            <p><strong>Timestamp:</strong> {entry.timestamp}</p>
            <button className="mt-4 bg-purple-600 hover:bg-purple-700 px-5 py-2 rounded font-semibold">
              View DEM
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registry;
