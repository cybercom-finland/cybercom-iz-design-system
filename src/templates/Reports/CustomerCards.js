import React from "react";
import styled from "styled-components";
import { CustomerCard } from "../../components/CustomerCard";

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 30px;
  margin-left: -30px;
`;

const Card = styled.div`
  margin-top: 35px;
  margin-right: 37px;
`;

export const CustomerCards = ({ cards }) => {
  return (
    <CardsContainer>
      {cards.map((card, index) => {
        return (
          <Card key={index}>
            <CustomerCard item={card} />
          </Card>
        );
      })}
    </CardsContainer>
  );
};
