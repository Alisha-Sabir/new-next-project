import React from "react";
import { useRouter } from "next/router";

const Grateful = () => {
  const text =
    "Even when you attend meetings the whole day and I get some time to brief you about work, I feel grateful that you’re there to listen. The way you notice the bad energy coming from others toward me and handle it on your own without letting me know - I just want you to remember that nothing goes unnoticed. I appreciate you, always. At first you were just a senior for me , then you became not just a colleague but genuinely a good one. But somewhere along the way you stopped being just a supportive senior and became my family - my go‑to person, my safe place where I feel comfortable. You make even the toughest workdays easier to get through. You give so much of yourself even when you're tired, even when no one says thank you, You still show up, and you still care. I notice it all the time. I do notice everything even if i don't talk about it. And it means more than you know to see how you worry nowadays, afraid of even the slightest chance that I might get khafa with you. It feels like You and I are simply in the right place at the right time.";

  const router = useRouter();

  return (
    <div style={{ overflowY: "auto", height: "100vh" }}>
      <section
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative"
        style={{ backgroundColor: "#dedaf1" }}
      >
        <div
          style={{
            position: "relative",
            width: "1300px",
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
            }}
            // className="p-5 playwrite-nz-guides-regular"
            className="p-5 caveat"
          >
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
                  className="fs-3 text-center"
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
      </section>
      <button
        className="px-4 rounded-3 border-0"
        onClick={() => router.push("/best")}
        style={{
          position: "absolute",
          right: "20px",
          bottom: "50px",
          fontSize: "30px",
          color: "white",
          backgroundColor: "#9b59b6",
          transform: "rotate(180deg)",
        }}
      >
        &#8592;
      </button>
    </div>
  );
};

export default Grateful;
