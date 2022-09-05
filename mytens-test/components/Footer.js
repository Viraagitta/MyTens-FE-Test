import Image from "next/image";
import styles from "../styles/Home.module.css";

function Footer() {
  const src = "https://cdn-icons-png.flaticon.com/512/25/25231.png" || "";

  return (
    <footer className={styles.footer}>
      {/* <span className={styles.logo}> */}
      {src ? (
        <Image
          loader={() => src}
          src={src}
          alt="github Logo"
          width={30}
          height={30}
          unoptimized={true}
        />
      ) : null}
      {/* </span> */}
      <p style={{ fontSize: "14px", paddingTop: "15px", marginLeft: "20px" }}>
        {" "}
        © 2022 GitHub, Inc.
      </p>
    </footer>
  );
}

export default Footer;
