import Image from "react-bootstrap/Image";
import { BsGeoAltFill, BsLinkedin } from "react-icons/bs";
import { HiUsers } from "react-icons/hi";

export function ProfileGithub({ profile }) {
  return (
    <>
      <div style={{ margin: "auto", fontFamily: "arial", marginTop: "20px" }}>
        <Image
          style={{ borderRadius: "50%", width: "80%" }}
          src={profile.avatar_url}
          alt="Avatar"
        />
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
