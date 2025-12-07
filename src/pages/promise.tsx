import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

const promise = () => {
  const router = useRouter();

  const text =
    "You should know that I’ll be there for you when nobody else feels kind - I will. I may not be beside you every day, but I’ll always be in your corner, softly cheering for your success and loudly believing in you. I’m not good with words or expressing my feelings, but I hope you still understand how I feel. I keep checking on you because I prayed for you once, still pray for you now, and i'll keep praying for your happiness and your family’s peace and happiness. You never have to filter your thoughts when you talk to me. I’m here to listen without judgment. I’ll hold your words gently, protect your secrets, and be the kind of person you can always rely on. I’ll always support you - not because you need it, but because watching you rise makes me happy. I will always be the person who prays for your success as if it were my own, and who quietly claps for you from the corner.";
  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <section
        className="min-vh-100 d-flex flex-column"
        style={{
          backgroundColor: "#dedaf1",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          src="/images/promise-left.png"
          alt="Pattern"
          width={100}
          height={100}
          className="img-fluid p-0"
          style={{ position: "absolute", left: 0, top: 0 }}
        />
        <Image
          src="/images/repunzle.png"
          alt="Pattern"
          width={250}
          height={100}
          className="img-fluid p-0"
          style={{ position: "absolute", left: -10, top: "40%" }}
        />
        <Image
          src="/images/promise-left.png"
          alt="Pattern"
          width={90}
          height={100}
          className="img-fluid p-0"
          style={{ position: "absolute", left: 0, bottom: 0 }}
        />

        <div className="container text-center position-relative">
          <Row className="align-items-start justify-content-center">
            {/* <Col md={8}>
              <div
                style={{
                  height: "50vh",
                  backgroundColor: "#ccb8d9",
                  border: "2px solid rgba(116, 105, 123, 0.46)",
                  // backdropFilter: "blur(12px)",
                  color: "white",
                  // fontFamily: "Times New Roman, Times, serif",
                }}
                className="rounded-3 fs-4 paragraph-txt caveat px-3 py-2"
              >
                You should know that I’ll be there for you when nobody else
                feels kind—I will. I may not be beside you every day, but I’ll
                always be in your corner, softly cheering for your success and
                loudly believing in you. I’m not the best with words or
                expressing my feelings, but I hope you still understand how I
                feel. I keep checking on you because I prayed, still pray, and
                will continue to pray forever for you and your family’s peace
                and happiness. You never have to filter anything you’re thinking
                when you talk to me. I’m here to listen without judgment. I’ll
                hold your words gently, protect your secrets, and be the kind of
                friend you can always rely on. I’ll always support you—not
                because you need it, but because I love watching you rise. I
                will always be the person who prays for your success as if it
                were my own, and who quietly claps for you from the corner.
              </div>
            </Col> */}
            <div
              style={{
                position: "relative",
                width: "900px",
                height: "530px",
                // border: "2px solid rgba(255, 255, 255, 0.3)",
                border: "4px solid #937ea0",
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
                className="p-5 caveat"
              >
                <p
                  style={{
                    fontFamily: "Times New Roman, Times, serif",
                    color: "#9c72a7ff",
                    transform: "rotate(-2deg)",
                    whiteSpace: "pre-wrap", // preserve spaces
                    display: "inline-block",
                    lineHeight: "1.5",
                  }}
                  className="fs-4"
                >
                  {text.split(" ").map((word, index) => (
                    <span
                      key={index}
                      style={{
                        display: "inline-block",
                        opacity: 0,
                        animation: "fadeIn 0.5s forwards",
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      {word} {/* space after word is preserved */}
                    </span>
                  ))}
                </p>
              </div>

              {/* <div
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
              </div> */}
            </div>
          </Row>
        </div>

        <Image
          src="/images/promise-right.png"
          alt="Pattern Reversed"
          width={232}
          height={700}
          className="img-fluid p-0"
          style={{
            // transform: "rotate(180deg)",
            position: "absolute",
            right: 0,
            // bottom: 0,
          }}
        />
        <button
          className="px-4 rounded-3 border-0"
          onClick={() => router.push("/#pick-fvrt")}
          style={{
            position: "absolute",
            left: "30px",
            bottom: "50px",
            fontSize: "30px",
            color: "white",
            backgroundColor: "#9b59b6",
          }}
        >
          &#8592;
        </button>
      </section>
    </div>
  );
};

export default promise;
