import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Image from "next/image";
import Petal from "@/components/Petal";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const [petals, setPetals] = useState([]);

  const router = useRouter();

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

  const text = "Happy Birthday Shafiq Sir";

  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <section
        className="min-vh-100 d-flex flex-column justify-content-center position-relative"
        style={{ backgroundColor: "#dedaf1" }}
      >
        {/* Purple petals */}
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

        <Image
          src="/images/hero_left_pattern.png"
          alt="Pattern"
          width={170}
          height={700}
          className="img-fluid p-0"
          style={{ position: "absolute", left: 0, top: 0 }}
        />

        <div className="container text-center position-relative mt-5 pt-5">
          <Row className="align-items-center justify-content-center mt-5">
            <Col md={9} className="text-end">
              {/* <h2 className="display-5 text">Happy Birthday My Family</h2> */}
              <h2 className="display-5 text">
                {text.split("").map((char, index) => (
                  <span
                    key={index}
                    className="letter"
                    style={{ animationDelay: `${index * 0.07}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </h2>
            </Col>
            <Col md={3}>
              <Image
                src="/images/balloons.png"
                alt="Balloons"
                width={250}
                height={250}
                className="img-fluid p-0 ms-3"
              />
            </Col>
          </Row>

          <Row className="justify-content-end mt-4">
            <Col md={6} className="text-end">
              <Image
                src="/images/cake.png"
                alt="Cake"
                width={300}
                height={300}
                className="img-fluid p-0"
              />
            </Col>
          </Row>
        </div>

        <Image
          src="/images/hero_left_pattern.png"
          alt="Pattern Reversed"
          width={170}
          height={700}
          className="img-fluid p-0"
          style={{
            transform: "rotate(180deg)",
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </section>
      {/* btns */}
      <section
        id="pick-fvrt"
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: "#dedaf1",
        }}
      >
        <div>
          <Image
            src="/images/bow.png"
            alt="Pattern Reversed"
            width={100}
            height={700}
            className="img-fluid p-0"
          />
        </div>

        <h2 className="mb-4 text">Pick Your Most Favorite First</h2>
        <div className="d-flex gap-3">
          <button
            className="btn-primary w-100"
            onClick={() => router.push("/wish")}
          >
            Wish For You
          </button>
          <button
            className="btn-primary w-100"
            onClick={() => router.push("/why-you-matter")}
          >
            Why You Matter
          </button>
        </div>
        <div className="d-flex gap-3 pt-3">
          <button
            className="btn-primary w-100"
            onClick={() => router.push("/promise")}
          >
            My Promises
          </button>
          <button
            className="btn-primary w-100"
            onClick={() => router.push("/complaints")}
          >
            My Complaints
          </button>
        </div>
      </section>
      {/* Grateful */}
      <section
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
        style={{
          backgroundColor: "#dedaf1",
        }}
      >
        {/* <div
          style={{
            position: "relative",
            // width: "900px",
            // height: "500px",
            // border: "2px solid rgba(255, 255, 255, 0.3)",
            border: "4px solid #937ea0",
            // borderRadius: "20px",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
            // textAlign: "center",
          }}
          className="mb-5"
        >
          <div
            style={{
              // width: "100%",
              // height: "100%",
              border: "4px solid #937ea0",
              background: "rgba(255, 255, 255, 0.05)",
              // backdropFilter: "blur(12px)",
              // WebkitBackdropFilter: "blur(12px)",

              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",

              transform: "rotate(3deg)",
              // color: "#9352a4",
              color: "#9c72a7ff",
              // position: "absolute",
              // top: 0,
              // left: 0,
            }}
            // className="p-5 playwrite-nz-guides-regular"
            className="p-3"
          >
            <h2
              style={{
                color: "#9c72a7ff",
              }}
              className=" text"
            > */}
        <button
          className="btn-primary"
          onClick={() => router.push("/grateful")}
        >
          Things I'm Grateful For
        </button>
        <Image
          src="/images/green.png"
          alt="Pattern"
          width={200}
          height={500}
          className="img-fluid p-0"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            transform: "rotate(270deg)",
          }}
        />
        <Image
          src="/images/thinking.png"
          alt="Pattern"
          width={300}
          height={500}
          className="img-fluid p-0"
          style={{ position: "absolute", right: 0, bottom: 0 }}
        />
        {/* </h2>
          </div>
        </div> */}
      </section>

      {/* Choice */}
      {/* <section
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundColor: "#dedaf1",
        }}
      >
        {petals.map((style, index) => (
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
        <div
          style={{
            position: "relative",
            width: "600px",
            height: "550px",
            alignContent: "center",
            // border: "2px solid rgba(255, 255, 255, 0.3)",
            // border: "4px solid #937ea0",
            // // borderRadius: "20px",
            // background: "rgba(255, 255, 255, 0.05)",
            // backdropFilter: "blur(12px)",
            // WebkitBackdropFilter: "blur(12px)",
            // boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
            // textAlign: "center",
            fontFamily: "Times New Roman, Times, serif",
          }}
        >
          <h2 className="display-5 text">
            {choose.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <h2 className="display-5 text">
            {bestChoice.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <h2 className="display-5 text">
            {choice.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          <h2 className="display-5 text">
            {blessed.split("").map((char, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h2>
          Whenever I feel something is troubling you, or that you’re feeling
          low, I want to know why. Even if you say nothing’s wrong, I want to
          keep asking, gently, until I can feel that you’re truly okay.
        </div>
      </section> */}

      {/*  ********************** */}
    </div>
  );
};

export default HeroSection;
