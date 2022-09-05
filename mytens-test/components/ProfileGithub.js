import Image from "next/image";
import Link from "next/link";
import { BsGeoAltFill, BsLinkedin } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

export function ProfileGithub({ profile }) {
  const src = profile.avatar_url || "";
  return (
    <>
      <div style={{ margin: "auto", fontFamily: "arial", marginTop: "20px" }}>
        <Link href={profile.html_url || ""} passHref>
          <a>
            {src ? (
              <Image
                priority
                style={{ borderRadius: "50%" }}
                loader={() => src}
                src={src}
                width={300}
                height={300}
                unoptimized={true}
                alt="Avatar"
              />
            ) : null}
          </a>
        </Link>
        <h4 style={{ marginTop: "20px", fontWeight: "bold" }}>
          {profile.name}
        </h4>
        <h5 style={{ color: "#505754" }}>{profile.login}</h5>
        <h6 style={{ marginTop: "20px" }}>{profile.bio}</h6>
        <h6 style={{ marginTop: "20px", fontSize: "14px" }}>
          <HiUsers /> {profile.followers} Followers | {profile.following}{" "}
          Following
        </h6>
        <h6 style={{ fontSize: "14px" }}>
          <BsGeoAltFill /> {profile.location}
        </h6>
        <h6 style={{ fontSize: "14px" }}>
          <BsLinkedin /> {profile.blog}
        </h6>
      </div>
    </>
  );
}
