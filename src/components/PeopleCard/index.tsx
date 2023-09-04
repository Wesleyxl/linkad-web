import { Button } from "antd";
import React from "react";

import DefaultImage from "../../assets/defaultImage.jpeg";
import { Container, PeopleComponent } from "./styles";

const People: React.FC = () => {
  return (
    <PeopleComponent>
      <div className="img-area">
        <img src={DefaultImage} alt="Linkad" />
      </div>
      <div className="text-area">
        <p>
          <strong>Wesley Alves</strong>
        </p>
        <span>
          <small>Programador</small>
        </span>
      </div>
      <div className="btn">
        <Button>Connect</Button>
      </div>
    </PeopleComponent>
  );
};

const PeopleCard: React.FC = () => {
  return (
    <Container>
      <div className="title">
        <p>People you may know:</p>
      </div>
      <People />
      <div className="see-all">
        <a href="/see-all">See All</a>
      </div>
    </Container>
  );
};

export default PeopleCard;
