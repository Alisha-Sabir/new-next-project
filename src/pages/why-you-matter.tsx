import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

const WhyYouMatter = () => {
  const router = useRouter();

  const text =
    "The moment you checked on me when I was feeling low, you need to know from that very day, you began living in my prayers, and you always will. You don’t just listen to me you understand the things I can’t even put into words, and that’s exactly why you matter so much to me. I come to you for advices because deep down, I know you’ll always guide me toward what’s truly best for me. I don’t get khafa with everyone, my this side is only for my family or for the people who feel like family to me. I hope you know that. I’m genuinely blessed to have you as my mentor. I don’t call someone my family unless I feel safe with them, unless there is trust, respect, and comfort. And you’ve given me all of that. Whenever I feel something is troubling you, or that you’re feeling low, I want to know why. Even if you say nothing’s wrong, I want to keep asking, gently, until I can feel that you’re truly okay. You matter, just by being here. It's something very pure for me, you can't even imagine.";

  return (
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
        src="/images/flower_left.png"
        alt="Pattern"
        width={170}
        height={700}
        className="img-fluid p-0"
        style={{ position: "absolute", left: 0, top: 0 }}
      />

      <div className="container text-center position-relative">
        <Row className="align-items-start justify-content-center">
          <Col md={4}>
            {/* <div>
              <div className="position-relative">
                <Image
                  src="/images/banner.png"
                  alt="banner"
                  width={400}
                  height={250}
                  className="img-fluid pb-5"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: 35,
                  left: "550px",
                  // fontFamily: "Times New Roman, Times, serif",
                  color: "white",
                }}
                className="fs-3 caveat letter-matter-head"
              >
                Why You Matter
              </div>
            </div> */}
            <div
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
                >
                  Why You Matter
                </h2>
              </div>
            </div>
          </Col>
          <Col md={9}>
            {/* <div
              style={{
                height: "50vh",
                backgroundColor: "#ccb8d9",
                border: "2px solid rgba(116, 105, 123, 0.46)",
                // backdropFilter: "blur(12px)",
                color: "white",
                // fontFamily: "Times New Roman, Times, serif",
              }}
              className="rounded-3 fs-4 paragraph-txt caveat px-3 py-2 shadow-lg"
            > */}
            <div
              style={{
                position: "relative",
                width: "1000px",
                height: "550px",
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
                  fontFamily: "Times New Roman, Times, serif",
                }}
                // className="p-5 playwrite-nz-guides-regular"
                className="p-5"
              >
                {/* <p className="letter-matter fs-3">
                  The moment you checked on me when I was feeling low, you need
                  to know that from that very day, you began living in my
                  prayers, and you always will. You don’t just listen to me you
                  understand the things I can’t even put into words, and that’s
                  exactly why you matter so much to me. I come to you for advice
                  because deep down, I know you’ll always guide me toward what’s
                  truly best for me. I don’t get khafa with everyone, my this
                  side is only for my family or for the people who feel like
                  family to me. I hope you know that. I’m genuinely blessed to
                  have you as my mentor. I don’t call someone my family unless I
                  feel safe with them, unless there is trust, respect, and
                  comfort. And you’ve given me all of that. You matter, just by
                  being here. And I want you to know that, fully and clearly.
                </p> */}
                <div
                  style={{
                    transform: "rotate(-2deg)",
                  }}
                  className="text-center"
                >
                  {text.split(" ").map((word, index) => (
                    <span
                      key={index}
                      style={{
                        fontFamily: "Times New Roman, Times, serif",
                        color: "#9c72a7ff",
                        // transform: "rotate(-deg)",
                        whiteSpace: "pre-wrap",
                        display: "inline-block",
                        opacity: 0,
                        animation: "fadeIn 0.5s forwards",
                        animationDelay: `${index * 0.1}s`,
                        // animationDelay: `${index * 0.1}s`,
                      }}
                      className="fs-4 text-center"
                    >
                      {/* Even when you attend meetings the whole day and I get some time to
              brief you about work, I feel grateful that you’re there to listen.
              The way you notice the bad energy coming from others toward me and
              handle it on your own without letting me know - I just want you to
              remember that nothing goes unnoticed. I appreciate you, always. At
              First You were just a senior for me , then you became not just a
              colleague, but a genuinely good one, but somewhere along the way
              you stopped being just a supportive senior and became my family -
              my go‑to person, my safe place where I feel comfortable. You make
              even the toughest workdays easier to get through. It feels like
              You and I are simply in the right place at the right time. You
              give so much of yourself even when you're tired, even when no one
              says thank you, You still show up, and you still care. I notice it
              all the time. I do notice everything even if i don't talk about
              it, And it means more than you know to see how you worry nowadays,
              afraid of even the slightest chance that I might get khafa with
              you. */}
                      {word + " "}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <Image
        src="/images/flower_right.png"
        alt="Pattern Reversed"
        width={170}
        height={700}
        className="img-fluid p-0"
        style={{
          // transform: "rotate(180deg)",
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      />
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

export default WhyYouMatter;
