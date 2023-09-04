import React from "react";

import PeopleCard from "../../components/PeopleCard";
import ProfileCard from "../../components/ProfileCard";
import { ColumnContainer, Container, RowContainer } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <RowContainer gutter={15}>
        <ColumnContainer span={6}>
          <ProfileCard />
        </ColumnContainer>
        <ColumnContainer span={10}>
          <h1>Home</h1>
        </ColumnContainer>
        <ColumnContainer span={6}>
          <PeopleCard />
        </ColumnContainer>
      </RowContainer>
    </Container>
  );
};

export default Home;
