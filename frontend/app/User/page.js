"use client";
import axios from "axios";
import { RSC_ACTION_CLIENT_WRAPPER_ALIAS } from "next/dist/lib/constants";
import React, { useEffect, useState } from "react";

const page = () => {
  const [img, setImg] = useState("");
  const [id, setId] = useState("");

  async function getdata() {
    const res = await axios.post(`https://hackend.vercel.app/image/?id=${id}`);
    setImg(res.data.data);
  }

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div>
        <img src={img ? img : ""} className="h-72 w-72" />
        <input
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="enter id"
          type="text"
          className="h-12 rounded-lg  w-full my-5 px-4"
        />
        <div className="text-center">
          <button
            className="w-24 p-2  text-white bg-gray-600 rounded-lg"
            onClick={getdata}
          >
            get image
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
