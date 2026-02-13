"use client";

import Image from "next/image";

const images = [
  // bottom layer
  { src: "/mock1.jpg", top: "-10px", left: "-10px" },
  { src: "/mock2.jpg", top: "-20px", left: "40px" },
  { src: "/mock3.jpg", top: "-15px", left: "90px" },
  { src: "/mock4.jpg", top: "-7px", left: "140px" },
  { src: "/mock4.jpg", top: "-3px", left: "190px" },

  // middle layer
  { src: "/mock2.jpg", top: "-60px", left: "0px" },
  { src: "/mock3.jpg", top: "-70px", left: "50px" },
  { src: "/mock4.jpg", top: "-75px", left: "100px" },
  { src: "/mock1.jpg", top: "-70px", left: "150px" },
  { src: "/mock2.jpg", top: "-65px", left: "200px" },

  // top layer
  { src: "/mock4.jpg", top: "-100px", left: "60px" },
  { src: "/mock1.jpg", top: "-120px", left: "110px" },
  { src: "/mock2.jpg", top: "-115px", left: "160px" },
];

function Bouquet({ currentIndex }: any) {
  return (
    <div className="relative w-64 h-64">
      
      {/* Images */}
      {images.slice(0, currentIndex).map((img, index) => (
        <div
          key={index}
          className="absolute w-24 h-24 animate-[scaleUp_0.4s_ease-out]"
          style={{ top: img.top, left: img.left }}
        >
          <Image
            src={img.src}
            alt="memory"
            fill
            className="rounded-full object-cover shadow-lg"
          />
        </div>
      ))}

      {/* Bouquet */}
      <Image
        src="/bouquet.png"
        alt="Bouquet"
        fill
        className="object-contain relative z-10"
      />
    </div>
  );
}

export default Bouquet;