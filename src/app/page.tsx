import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div style={{ position: "fixed", top: "6vw", left: "7vw" }}>
        <Image
          alt=""
          width={50}
          height={50}
          src="/backBtn.png"
          style={{ height: "5vw", width: "auto" }}
        ></Image>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "6vw",
          gap: "2vw",
        }}
      >
        <Image
          alt=""
          width={50}
          height={50}
          src="/profileIcon.png"
          style={{ width: "6vw" }}
        ></Image>
        <p style={{ fontSize: "4vw", lineHeight: "1" }}>J0xn_d03</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5vw",
          marginTop: "6.7vh",
        }}
      >
        <Image
          alt=""
          width={50}
          height={50}
          src="/leftButton.png"
          style={{ width: "6vw" }}
        ></Image>
        <div>
          <Image
            alt=""
            width={200}
            height={400}
            src="/bhavit-grover.png"
            style={{ width: "67vw" }}
          ></Image>
        </div>
        <Image
          alt=""
          width={50}
          height={50}
          src="/rightButton.png"
          style={{ width: "6vw" }}
        ></Image>
      </div>
      <div
        style={{
          position: "relative",
          width: "60vw",
          height: "12vw",
          marginLeft: "20vw",
          display: "flex",
          alignItems: "center",
          marginTop: "1.5vh",
        }}
      >
        <Image
          src="/dottedLine.png"
          width={200}
          height={10}
          alt=""
          style={{ width: "60vw" }}
        ></Image>
        <Image
          src="/slider.png"
          width={50}
          height={50}
          alt=""
          style={{
            height: "12vw",
            width: "auto",
            position: "absolute",
            left: "24vw",
          }}
        ></Image>
      </div>
      <div
        style={{
          position: "absolute",
          height: "25vh",
          bottom: "0",
          width: "104vw",
          left: "-2vw",
        }}
      >
        <Image
          alt=""
          width={300}
          height={200}
          src="/tedhiMedhiPhotu.png"
          style={{ width: "104vw", height: "auto", position: "absolute", bottom: "0" }}
        ></Image>
      </div>
    </div>
  );
}
