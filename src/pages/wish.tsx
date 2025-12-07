import React from "react";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";
import { useRouter } from "next/router";

const wish = () => {
  const router = useRouter();
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Container className="d-flex align-items-center">
        <Col md={3}>
          <Image
            src="/images/bear.png"
            alt="Color Corner"
            width={300}
            height={300}
            className="img-fluid p-0"
          />
        </Col>
        {/* <Col md={1} /> */}
        <Col md={7}>
          {/* <div
            style={{
              position: "relative",
              // bottom: 0,
              width: "900px",
              height: "500px",
              border: "4px solid #9352a4",
              backgroundColor: "red",
              
            }}
          > */}
          <div
            style={{
              position: "relative",
              width: "1000px",
              height: "620px",
              // border: "2px solid rgba(255, 255, 255, 0.3)",
              border: "4px solid #9352a4",
              // borderRadius: "20px",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(31, 38, 135, 0.2)",
              // textAlign: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "4px solid #9352a4",
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
              className="p-5 caveat"
            >
              <p
                style={{
                  transform: "rotate(-2deg)",
                  fontFamily: "Times New Roman, Times, serif",
                }}
                className="fs-4 letter"
              >
                May Allah be with you in every step you take, guide you to what
                is best for you and remove all your worries. May He shower you
                with mercy and grant you success in this world and the next. May
                Allah provide you strength, because you carry the weight like
                it’s nothing even though it is everything. May Allah protect
                your respect, protect you from anything that could touch even
                the tiniest part of you with harm and keep you secure wherever
                you go. I will always pray for your safety and honor, even if
                I’m not there with you. May every good thing find its way to
                you. May you wake up smiling every day. I pray that every door
                you knock on opens, and every moment ahead becomes brighter than
                the last. Ameen. You are the best Senior I could have found in a
                world of 8 billion. Unfortunately, I do care deeply about the
                people around me, and whenever you seem off, I get worried. For
                you, I will pray in every prayer and always wish for your
                happiness. I hope my prayers reach you even when I’m not here
                anymore. And if I can’t be there with you, I still wish for you
                to smile and have peace in your heart. Thank you for being you
                in the most genuine way, and for protecting me with such care.
              </p>
            </div>

            <div
              className=" position-absolute ps-5"
              style={{
                right: " -60px",
                top: "-40px",
              }}
            >
              <Image
                src="/images/bow.png"
                alt="Color Corner"
                width={200}
                height={200}
                className="img-fluid ps-5"
              />
            </div>
          </div>
        </Col>
      </Container>
      <button
        className="px-4 rounded-3 border-0"
        onClick={() => router.push("/#pick-fvrt")}
        style={{
          position: "absolute",
          left: "20px",
          bottom: "50px",
          fontSize: "30px",
          color: "white",
          backgroundColor: "#9b59b6",
        }}
      >
        &#8592;
      </button>
    </section>
  );
};

export default wish;
