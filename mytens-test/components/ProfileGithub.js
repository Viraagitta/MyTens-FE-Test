import Image from "react-bootstrap/Image";
import { BsGeoAltFill, BsLinkedin } from "react-icons/bs";

export function ProfileGithub({ profile }) {
  // let followers = profile.followers_url?.length;
  return (
    <>
      <div style={{ margin: "auto", fontFamily: "arial" }}>
        <Image
          style={{ borderRadius: "50%", width: "95%" }}
          src={profile.avatar_url}
          alt="Avatar"
        />
        <h4 style={{ marginTop: "20px", fontWeight: "bold" }}>
          {profile.name}
        </h4>
        <h5 style={{ color: "#505754" }}>{profile.login}</h5>
        <h6 style={{ marginTop: "20px" }}>{profile.bio}</h6>
        {/* <h4>{followers}</h4> */}
        <h7>
          <BsGeoAltFill /> {profile.location}
        </h7>
        <br></br>
        <h7>
          <BsLinkedin /> {profile.blog}
        </h7>
      </div>
    </>
  );
}
