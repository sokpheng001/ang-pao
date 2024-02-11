// components/InputPopup.js
"use client";
import React, { useState } from "react";
import styles from "./Popup.module.css";
import FireworkComponent from "../firework/ForworkComponent";

const InputPopup = ({ isOpen, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const [anima, setAnima] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = () => {
    if (inputValue !== "") {
      setDisabled(true);
      // set anima to kung fu image
      setAnima("animate-spin");
      setTimeout(() => {
        onSubmit(inputValue);
        setInputValue("");
        // onClose();
      }, 2000);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputValue !== "") {
        // set anima to kung fu image
        setAnima("animate-spin");
        //
        setDisabled(true);
        setTimeout(() => {
          onSubmit(inputValue);
          setInputValue("");
          // onClose();
        }, 2000);
      }
    }
  };
  //  set animation to kung fu image
  return (
    isOpen && (
      <div
        className={
          styles.overlay +
          " top-0 fixed left-0 w-screen h-screen backdrop-blur-md bg-white/30 flex justify-center items-center duration-200"
        }
      >
        <div className="flex md:flex-row flex-col gap-4 justify-center items-center">
          <FireworkComponent />
          <img
            security="restricted"
            src="/images/Chinese_Envelope.png"
            className="w-60 focus:outline-none md:flex hidden"
          />
          {/* kung fu */}
          <img
            security="restricted"
            src="/images/Yin_Yang.png"
            className={"w-60 focus:outline-none md:hidden flex " + anima}
          />
          <div className={"flex justify-center flex-col gap-4"}>
            <button
              className={
                styles.closeButton +
                " active:bg-red-400 bg-white/30 p-2 rounded-sm duration-75"
              }
              onClick={onClose}
            >
              Close
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="បញ្ជូល​ ឈ្មោះ"
              onKeyDown={handleKeyDown}
              className="font-mono p-3 rounded-sm w-72 md:w-96 outline-none focus:ring-0 text-black font-thin"
              disabled={disabled}
            />
            <button
              onClick={handleSubmit}
              className={
                disabled === true
                  ? "border rounded-sm p-3 active:backdrop:blur-lg active:bg-white/30 duration-75 hidden"
                  : "border rounded-sm p-3 active:backdrop:blur-lg active:bg-white/30 duration-75 "
              }
              disabled={disabled}
            >
              Get អាំងប៉ាវ
            </button>
            <button
              onClick={handleSubmit}
              className={
                disabled === true
                  ? "border rounded-sm p-3 bg-red-400 duration-75 animate-pulse hover:cursor-not-allowed"
                  : "border rounded-sm p-3 bg-red-400 duration-75 hidden animate-pulse hover:cursor-not-allowed "
              }
              disabled={true}
            >
              Loading អាំងប៉ាវ
            </button>
          </div>
          <FireworkComponent />
        </div>
      </div>
    )
  );
};

export default InputPopup;
