
"use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Profile() {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#141414",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "6vw", left: "7vw", zIndex: "5" }}>
        <Image
          alt=""
          width={50}
          height={50}
          src="/backBtn.png"
          style={{ height: "5vw", width: "auto" }}
          onClick={() => {router.back()}}
        ></Image>
      </div>
      <div style={{ position: "relative" }}>
        <Image
          alt=""
          width={500}
          height={300}
          src="/waves.png"
          style={{ width: "100vw", height: "45vh", objectFit: "cover" }}
        ></Image>
        <div
          style={{
            position: "absolute",
            width: "70vw",
            left: "15vw",
            display: "flex",
            flexDirection: "column",
            top: "10vh",
            alignItems: "center",
            gap: "1vh",
          }}
        >
          <Image
            src="/profilePic.png"
            width={100}
            height={100}
            alt=""
            style={{ width: "30vw", height: "auto", marginBottom: "2vh" }}
          ></Image>
          <p style={{ fontSize: "6vw", lineHeight: "1" }}>Shyamak Seth</p>
          <p style={{ fontSize: "4vw", color: "#aaa", lineHeight: "1" }}>
            @J0xn_d03 &nbsp;|&nbsp; Hyper Constructions Inc.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vw",
          marginLeft: "10vw",
          marginBottom: "6vw",
          marginTop: "7vw"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
          <Image
            src="/textIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6vw" }}
          ></Image>
          <p style={{ fontSize: "4.5vw" }}>View certification</p>
        </div>
        <Image
          src="/forwardBtn.png"
          alt=""
          width={50}
          height={50}
          style={{ width: "2vw", height: "auto" }}
        ></Image>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vw",
          marginLeft: "10vw",
          marginBottom: "6vw"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
          <Image
            src="/textIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6vw" }}
          ></Image>
          <p style={{ fontSize: "4.5vw" }}>Change Language</p>
        </div>
        <Image
          src="/forwardBtn.png"
          alt=""
          width={50}
          height={50}
          style={{ width: "2vw", height: "auto" }}
        ></Image>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vw",
          marginLeft: "10vw",
          marginBottom: "6vw"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
          <Image
            src="/textIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6vw" }}
          ></Image>
          <p style={{ fontSize: "4.5vw" }}>Forums</p>
        </div>
        <Image
          src="/forwardBtn.png"
          alt=""
          width={50}
          height={50}
          style={{ width: "2vw", height: "auto" }}
        ></Image>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vw",
          marginLeft: "10vw",
          marginBottom: "6vw"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
          <Image
            src="/textIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6vw" }}
          ></Image>
          <p style={{ fontSize: "4.5vw" }}>Connection Settings</p>
        </div>
        <Image
          src="/forwardBtn.png"
          alt=""
          width={50}
          height={50}
          style={{ width: "2vw", height: "auto" }}
        ></Image>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vw",
          marginLeft: "10vw",
          marginBottom: "6vw"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
          <Image
            src="/textIcon.png"
            alt=""
            width={50}
            height={50}
            style={{ width: "6vw" }}
          ></Image>
          <p style={{ fontSize: "4.5vw" }}>Schedule Appointment</p>
        </div>
        <Image
          src="/forwardBtn.png"
          alt=""
          width={50}
          height={50}
          style={{ width: "2vw", height: "auto" }}
        ></Image>
      </div>
    </div>
  );
}

export default Profile;
