import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/NavBar";
import Image from "next/image";
import hero from "../public/heroImage.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className={styles.container}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <NavBar />
      <div style={{ position: "absolute", top: 70, left: 0 }}>
        <Image alt="Vercel logo" src={hero} width={5000} height={1500} />
      </div>
      <div
        style={{
          width: 175,
          height: 70,
          borderRadius: 20,
          backgroundColor: "#AB82AE",
          opacity: "0.9",
          zIndex: "50",
          position: "absolute",
          top: 220,
          left: 600,
          boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.7)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href="/haiku" passHref>
          <a>Make Haiku</a>
        </Link>
      </div>
    </div>
  );
}
