import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.scss'
import { Container, Card, Row, Col, ListGroup, Button } from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Go React Movie List</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Row>
          <h1 className="mt-3">Go React Movie Project!</h1>
          <hr className="mb-3" />
        </Row>
        <Row>
          <Col xs={2}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
          </Col>
          <Col xs={10}>
            <Row xs={3} md={3} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>Special title treatment</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
