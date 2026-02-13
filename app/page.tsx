"use client";

import { useState } from "react";
import Bouquet from "./component/Bouquet";
import { Itim } from "next/font/google";

const itimFont = Itim({ subsets: ["latin"], weight: "400" });

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [floatingTexts, setFloatingTexts] = useState<any[]>([]);
  const [showFinalPopup, setShowFinalPopup] = useState(false);

  const messages = [
    "Love you 💕",
    "อ้วนนน",
    "My Valentine 💖",
    "อยู่ด้วยกันไปนานๆ นะะ 🌷",
  ];

  const imagesLength = 13;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // เพิ่มรูปจาก bouquet
    setCurrentIndex((prev) => prev + 1);

    // สุ่มข้อความ
    const randomText = messages[Math.floor(Math.random() * messages.length)];

    const newText = {
      id: Date.now(),
      text: randomText,
      x: e.clientX,
      y: e.clientY,
    };

    setFloatingTexts((prev) => [...prev, newText]);

    // ลบข้อความหลัง 1 วิ
    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((item) => item.id !== newText.id));
    }, 1000);

    if (currentIndex + 2 === imagesLength) {
      setShowFinalPopup(true);

      // setTimeout(() => {
      //   setShowFinalPopup(false);
      // }, 1000);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative h-screen overflow-hidden cursor-pointer ${itimFont.className}`}
    >
      {/* Floating Texts */}
      {floatingTexts.map((item) => (
        <div
          key={item.id}
          className="absolute z-50 text-pink-600 font-bold animate-[floatUp_0.1s_ease-out] pointer-events-none"
          style={{ left: item.x, top: item.y }}
        >
          {item.text}
        </div>
      ))}

      {/* Bouquet */}
      <div className="flex justify-center items-end h-full pb-[10vh]">
        <Bouquet currentIndex={currentIndex} />
      </div>

      {/* Final Full Screen Popup */}
      {showFinalPopup && (
        <div className="absolute inset-0 z-[999] flex flex-col items-center justify-center bg-pink-300 animate-[fadeIn_0.3s_ease-out]">
          <h1 className="text-4xl font-bold text-white animate-[scaleUp_0.5s_ease-out]">
            Happy Valentine
          </h1>
          <p className="pt-10 text-white text-lg">เค้ารักเธอมากๆๆๆๆ จุ้บๆๆๆ</p>
        </div>
      )}
    </div>
  );
}
