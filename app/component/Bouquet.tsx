"use client";

import Image from "next/image";

const images = [
  // bottom layer
  { src: "/IMG_01.jpg", top: "-10px", left: "-10px" },
  { src: "/IMG_02.jpg", top: "-40px", left: "40px" },
  { src: "/IMG_03.jpg", top: "-45px", left: "90px" },
  { src: "/IMG_04.jpg", top: "-30px", left: "140px" },
  { src: "/IMG_05.jpg", top: "-3px", left: "190px" },

  // middle layer
  { src: "/IMG_06.jpg", top: "-90px", left: "0px" },
  { src: "/IMG_07.jpg", top: "-100px", left: "50px" },
  { src: "/IMG_08.jpg", top: "-105px", left: "100px" },
  { src: "/IMG_09.jpg", top: "-100px", left: "150px" },
  { src: "/IMG_10.jpg", top: "-95px", left: "200px" },

  // top layer
  { src: "/IMG_11.jpg", top: "-160px", left: "60px" },
  { src: "/IMG_12.jpg", top: "-170px", left: "110px" },
  { src: "/IMG_13.jpg", top: "-165px", left: "160px" },
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