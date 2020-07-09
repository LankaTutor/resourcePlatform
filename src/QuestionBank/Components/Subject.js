import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

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
      <Card className="text-center">
        <Card.Header className="bg-danger text-white">Mathematics</Card.Header>
        <Card.Body>
          <ListGroup>
            {SUBJECTS.map((subject) => {
              subject.units.map((unit) => {
                console.log(unit);
                return (
                  <ListGroup.Item action href="/">
                    {unit}
                  </ListGroup.Item>
                );
              });
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }
}
