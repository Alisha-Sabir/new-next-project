import { useRouter } from "next/router";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // position: "relative",
        backgroundColor: "#dedaf1",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen text-center px-6">
        <Image
          src="/images/sad-repunzle.png"
          alt="Pattern"
          width={300}
          height={300}
          className="img-fluid p-0"
          style={{ position: "absolute", left: 0, bottom: 0 }}
        />
        <h1
          style={{
            color: "#7c4389",
            fontWeight: 700,
            fontSize: "100px",
            textShadow: "1px 2px #050107ff",
          }}
          // className="fw-bold mb-0 caveat display-1"
          className="fw-bold mb-0 caveat"
        >
          {/* 404 */} Not Found
          <Image
            src="/images/question.png"
            alt="Pattern Reversed"
            width={150}
            height={100}
            className="img-fluid p-0"
          />
        </h1>
        {/* <h1
          style={{
            color: "purple",
            fontWeight: 700,
            textShadow: "1px 2px #ccb8d9",
          }}
          className="fw-bold mb-3 caveat display-1"
        >
          Page Not Found
        </h1> */}
        <p
          style={{
            color: "#7c4389",
            fontWeight: 700,
            // textShadow: "1px 2px #ccb8d9",
          }}
          className="fw-bold mb-0 caveat fs-5"
        >
          Looks like this page doesn't exist... <br /> Maybe it disappeared
          because of all the complaints
        </p>
        <button
          className="btn-back caveat mt-4"
          onClick={() => router.push("/#pick-fvrt")}
        >
          Go Back Ungrateful Sir ji
        </button>
      </div>
    </section>
  );
}
