// pages/InputPopupPage.js
"use client";
import React, { useState } from "react";
import InputPopup from "./PopUp";
import { useRouter } from "next/navigation";
import { giveGiftBasedOnName } from "@/utils/Name";

const PopUpComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const router = useRouter();
  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
  };

  const handleSubmit = (text) => {
    // console.log("Submitted text:", text);
    setInputText(text);
  };
  if (inputText != "") {
    // console.log(giveGiftBasedOnName(inputText));
    router.push(`/angpav-random/${inputText}`);
  }
  return (
    <div>
      <button
        onClick={handleOpenPopup}
        className="flex  justify-center gap-2 border p-3 rounded-sm md:w-72 lg:w-80 w-56"
      >
        <p className="font-mono ">Random</p> <p className="">អាំងប៉ាវ</p>
      </button>
      <InputPopup
        isOpen={isOpen}
        onClose={handleClosePopup}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default PopUpComponent;
