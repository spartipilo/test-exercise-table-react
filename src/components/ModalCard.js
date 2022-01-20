import React from "react";
import { Modal, Button, Col, Row, Container } from "react-bootstrap";
import { singleUser } from "../dataSingleUser";
import "../styles/modalCard.css";

function ModalCard({ show, detailUser, isClosed }) {
  return (
    <div className="container__modalCard">
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>User details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {singleUser(detailUser).map((el, index) => (
              <Row key={index}>
                <Col className="my-2 col-sm-4 header">{el.header}</Col>
                <Col className="my-2">{el.value}</Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => isClosed(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCard;
