import React from "react";

function ProfilePage() {
  return (
    <div className="bg-black text-white p-6">
      <h2 className="text-4xl text-white font-bold underline">Sample User</h2>
      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src="https://waterlooblockchain.ca/_next/image?url=%2Fgoose.png&w=1920&q=75"
          alt="Profile"
          style={{ width: "100px", height: "100px" }}
          className="w-10 h-100"
        />
      </div>
      {/* Biography */}
      <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra
        ipsum nunc aliquet bibendum. Sagittis purus sit amet volutpat. Amet
        commodo nulla facilisi nullam vehicula ipsum a arcu
      </p>

      {/* Links */}
      <ul>
        <li className="bg-emerald-500 text-white px-4 py-2 my-5 rounded-lg text-center">
          <a href="link1">Twitter</a>
        </li>
        <li className="bg-emerald-500 text-white px-4 py-2 my-5 rounded-lg text-center">
          <a href="link2">DevPost</a>
        </li>
        <li className="bg-emerald-500 text-white px-4 py-2 my-5 rounded-lg text-center">
          <a href="link3">Instagram</a>
        </li>
        <li className="bg-emerald-500 text-white px-4 py-2 my-5 rounded-lg text-center">
          <a href="link4">LinkedIn</a>
        </li>
        <li className="bg-emerald-500 text-white px-4 py-2 my-5 rounded-lg text-center">
          <a href="link5">Wallet</a>
        </li>
      </ul>
    </div>
  );
}

export default ProfilePage;
