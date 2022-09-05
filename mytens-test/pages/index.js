import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProfileGithub } from "../components/ProfileGithub";
import { fetchProfile, fetchRepos } from "../store/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  const dispatch = useDispatch();

  const repos = useSelector((state) => state.repos);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(fetchRepos());
    dispatch(fetchProfile());
  }, []);
  // console.log(repos);
  // let avatar = repos.map((repo) => repo.owner.avatar_url);
  return (
    <div className={styles.container}>
      <Container>
        <Row>
          <Col xxl={{ span: 3, offset: 1 }}>
            <ProfileGithub key={profile.id} profile={profile} />
          </Col>
          <Col md={{ span: 5, offset: 3 }}>
            <ProfileGithub key={profile.id} profile={profile} />
          </Col>
        </Row>
      </Container>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
