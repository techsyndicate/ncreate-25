"use client";
import Image from "next/image";
import JaiWalaCircle from "@/components/JaiWalaCircle";
import ChhotaSlider from "@/components/ChhotaSlider";
import { useRouter } from "next/navigation";

function Panel() {
  const router = useRouter()
  return (
    <div style={{ width: "100vw", minHeight: "100vh", background: "#141414" }}>
      <div style={{ position: "absolute", top: "6vw", left: "7vw" }}>
        <Image
          alt=""
          width={50}
          height={50}
          src="/backBtn.png"
          style={{ height: "5vw", width: "auto" }}
          onClick={() => {router.back()}}
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
        <p style={{ fontSize: "5.3vw", lineHeight: "1" }}>Control Panel</p>
      </div>
      <div style={{ position: "relative", padding: "5vw" }}>
        <Image
          alt=""
          width={500}
          height={300}
          src="/backpack-doc.png"
          style={{ width: "90vw", height: "auto" }}
        ></Image>
        <JaiWalaCircle top="19.5vw" left="21.5vw" content="1"></JaiWalaCircle>
        <JaiWalaCircle top="21.5vw" left="76vw" content="2"></JaiWalaCircle>
        <JaiWalaCircle top="61vw" left="18vw" content="3"></JaiWalaCircle>
        <JaiWalaCircle top="80vw" left="76vw" content="4"></JaiWalaCircle>
      </div>
      <div
        style={{
          padding: "0 5vw",
          marginTop: "-4vw",
          gap: "2vw",
          display: "flex",
          flexDirection: "column",
          paddingBottom: "10vw"
        }}
      >
        <h1 style={{ fontFamily: "var(--font-futura)", fontSize: "6.5vw", marginBottom: "4vw" }}>
          Editing Selected Arms
        </h1>
        <p style={{ fontSize: "4vw", color: "#bbb", lineHeight: "1" }}>/sensitivity</p>
        <ChhotaSlider></ChhotaSlider>
        <p style={{ fontSize: "4vw", color: "#bbb", lineHeight: "1" }}>/grip strength</p>
        <ChhotaSlider></ChhotaSlider>
        <p style={{ fontSize: "4vw", color: "#bbb", lineHeight: "1" }}>/accuracy</p>
        <ChhotaSlider></ChhotaSlider>
      </div>
    </div>
  );
}

export default Panel;
