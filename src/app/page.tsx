"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";

function Home() {
  const router = useRouter();
  const [navbarShown, setNavbarShown] = useState(false);
  const handleCloseClick = () => {
    setNavbarShown(false);
  };
  const handleMenuClick = () => {
    setNavbarShown(true);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#0b0b0b",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div
        style={{
          background: "rgba(33, 33, 33, 0.98)",
          position: "absolute",
          zIndex: "10",
          height: "62vw",
          top: `${navbarShown ? "0vh" : "-62vw"}`,
          left: "0",
          width: "100vw",
          padding: "7vw",
          display: "flex",
          flexDirection: "column",
          gap: "1vw",
          transition: "0.45s",
        }}
      >
        <div style={{ marginBottom: "3vw" }}>
          <Image
            src="/crossIcon.png"
            alt=""
            width={50}
            height={25}
            style={{ width: "6.7vw", height: "auto" }}
            onClick={handleCloseClick}
          ></Image>
        </div>
        <div style={{ fontSize: "6.2vw" }}>HOME</div>
        <Link href="/product/1" style={{ fontSize: "6.2vw", color: "#888" }}>
          PRODUCTS
        </Link>
        <Link href="/profile" style={{ fontSize: "6.2vw", color: "#888" }}>
          PROFILE
        </Link>
        <Link href="/panel" style={{ fontSize: "6.2vw", color: "#888" }}>
          CONTROL PANEL
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "6vw",
        }}
      >
        <Image
          src="/menuBar.png"
          alt=""
          width={50}
          height={20}
          style={{ height: "1.5vh", width: "auto" }}
          onClick={handleMenuClick}
        ></Image>
        <Image
          src="/profileIcon.png"
          alt=""
          width={50}
          height={20}
          style={{ height: "3vh", width: "auto" }}
          onClick={() => {router.push('/profile')}}
        ></Image>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3vw",
          alignItems: "center",
          marginTop: "2vh",
        }}
      >
        <p style={{ fontSize: "4vh", lineHeight: "1" }}>X-Orbs</p>
        <div>
          <Image
            src="/batteryIcon.png"
            alt=""
            width="68"
            height="40"
            style={{ height: "1.5vh", width: "auto" }}
          ></Image>
          <p
            style={{ fontSize: "1.15vh", lineHeight: "1", marginTop: "0.3vh" }}
          >
            74%
          </p>
        </div>
      </div>
      <Image
        src="/backpack-doc.png"
        alt=""
        width={319}
        height={292}
        style={{
          width: "65vw",
          marginTop: "4vh",
          alignSelf: "center",
          zIndex: "5",
        }}
      ></Image>
      <div style={{ marginTop: "-40vw", position: "relative" }}>
        <Image
          src="/something.png"
          alt=""
          width={500}
          height={500}
          style={{ width: "100vw", height: "auto" }}
        ></Image>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "6vw",
            top: "23.67vw",
            alignItems: "center",
          }}
        >
          <Image
            src="/heartIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6.1vw", height: "auto", marginRight: "1vw" }}
          ></Image>
          <p style={{ fontSize: "7vw", lineHeight: "1", marginRight: "0.5vw" }}>
            85
          </p>
          <p
            style={{
              fontSize: "2.5vw",
              alignSelf: "flex-end",
              color: "#999",
              lineHeight: "1.6",
            }}
          >
            BPM
          </p>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "73vw",
            top: "23.67vw",
            alignItems: "center",
          }}
        >
          <Image
            src="/personIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6.1vw", height: "auto", marginRight: "1vw" }}
          ></Image>
          <p style={{ fontSize: "7vw", lineHeight: "1", marginRight: "0.5vw" }}>
            18
          </p>
          <p
            style={{
              fontSize: "2.5vw",
              alignSelf: "flex-end",
              color: "#999",
              lineHeight: "1.6",
            }}
          >
            mV
          </p>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "19vw",
            top: "58vw",
            alignItems: "center",
          }}
        >
          <Image
            src="/oxygenIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6.1vw", height: "auto", marginRight: "2vw" }}
          ></Image>
          <p style={{ fontSize: "7vw", lineHeight: "1", marginRight: "0.5vw" }}>
            96
          </p>
          <p
            style={{
              fontSize: "2.5vw",
              alignSelf: "flex-end",
              color: "#999",
              lineHeight: "1.6",
            }}
          >
            %
          </p>
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "61.67vw",
            top: "58vw",
            alignItems: "center",
          }}
        >
          <Image
            src="/temperatureIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "2.8vw", height: "auto", marginRight: "2vw" }}
          ></Image>
          <p
            style={{ fontSize: "7vw", lineHeight: "1", marginRight: "0.67vw" }}
          >
            98
          </p>
          <p
            style={{
              fontSize: "2.5vw",
              alignSelf: "flex-end",
              color: "#999",
              lineHeight: "1.6",
            }}
          >
            °F
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
