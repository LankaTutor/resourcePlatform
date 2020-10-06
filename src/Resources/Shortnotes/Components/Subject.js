import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

import "./Subject.scss";

export default class Subject extends Component {
  render() {
    const SUBJECTS = [
      {
        title: "Mathematics",
        units: [
          "Basic Math",
          "Trignometry",
          "Algebra",
          "Vectors",
          "statics",
          "Kinematics",
          "Calculas",
          "Geometry",
          "Probability & statistics",
        ],
      },
      {
        title: "Physics",
        units: [
          "Measurement",
          "Mechanics",
          "Waves and Motions",
          "Thermodynamics",
          "Gravitational Fields",
          "Electric fields",
          "Electricity",
          "Electronics",
          "Properties of matter",
        ],
      },
    ];
    return (
      <div className="subject-container container mt-5">
        <Card className="mr-3">
          <Card.Header className="bg-danger text-white">
            Mathematics
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item action href="/shortnotes/basicmath">
                Basic Math
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Trignometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Algebra
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Vectors
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Statics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Kinematics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Calculas
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Geometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Probability & Statistics
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="bg-danger text-white">
            Mathematics
          </Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item action href="/shortnotes/basicmath">
                Basic Math
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Trignometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Algebra
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Vectors
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Statics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Kinematics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Calculas
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Geometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Probability & Statistics
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card className="mr-3">
          <Card.Header className="bg-success text-white">Physics</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item action href="/shortnotes/basicmath">
                Basic Math
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Trignometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Algebra
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Vectors
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Statics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Kinematics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Calculas
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Geometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Probability & Statistics
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header className="bg-primary text-white">Chemistry</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item action href="/shortnotes/basicmath">
                Basic Math
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Trignometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Algebra
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Vectors
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Statics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Kinematics
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Calculas
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Geometry
              </ListGroup.Item>
              <ListGroup.Item action href="/">
                Probability & Statistics
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
