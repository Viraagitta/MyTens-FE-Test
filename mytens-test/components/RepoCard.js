import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
function RepoCard({ repo }) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return (
    <Card style={{ width: "23rem" }} className="box">
      <Link href={repo.html_url} passHref>
        <Card.Body as="a" style={{ textDecoration: "none" }}>
          <Row>
            <Col sm={8}>
              <Card.Title>{repo.name}</Card.Title>
            </Col>
            <Col sm={4}>
              <Badge bg="secondary">{repo.visibility}</Badge>
            </Col>
          </Row>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
          {repo.language === "Vue" ? (
            <Badge bg="success">{repo.language}</Badge>
          ) : repo.language === "HTML" ? (
            <Badge bg="danger">{repo.language}</Badge>
          ) : (
            <Badge bg="warning">{repo.language}</Badge>
          )}
          <Card.Text style={{ fontSize: "12px", marginTop: "20px" }} as="div">
            <div>
              Created At:{" "}
              {new Date(repo.created_at).toLocaleDateString("en-EN", options)}
            </div>
            <div>
              Updated At:{" "}
              {new Date(repo.updated_at).toLocaleDateString("en-EN", options)}
            </div>
          </Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default RepoCard;
