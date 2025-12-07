import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Petal from "@/components/Petal";

export default function Best() {
  const blessed = "- Blessed  To  Have You Senior Sir! -";
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalsArray: any = [];
    for (let i = 0; i < 15; i++) {
      // number of petals
      petalsArray.push({
        left: Math.random() * 90 + "vw",
        animationDuration: 5 + Math.random() * 5 + "s",
        animationDelay: Math.random() * 5 + "s",
      });
    }
    setPetals(petalsArray);
  }, []);

  return (
    <section
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#dedaf1",
      }}
    >
      {petals.map((style: any, index: any) => (
        <Petal
          key={index}
          style={{
            left: style.left,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
            overflowX: "hidden",
            animationIterationCount: 1,
            // height: "2px",
          }}
        />
      ))}
      <h5
        className="fs-1 mb-5 text "
        style={{
          fontFamily: "Times New Roman, Times, serif",
        }}
      >
        - I Choose people wisely and definitely I know i made a good choice -
      </h5>
      <h2 className="display-3 text">
        {blessed.split("").map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{ animationDelay: `${index * 0.07}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    </section>
  );
}
