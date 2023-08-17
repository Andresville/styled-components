import React from "react";
import styled from "styled-components";
import Title from "../Title";
import Account from "../Account";
import { fondoClaro } from "../UI/variables";

const StyledContainer = styled.div`
  background-color: ${fondoClaro};
  min-height: 90vh; 
  padding: 0px 15vw;
`

const StyledContent = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 800px) {
    flex-direction: column;
}

`

const Container = () => {
  return (
    <StyledContainer>
      <Title>Smart Bank</Title>
      <StyledContent>
        <Account />
      </StyledContent>
    </StyledContainer>
  );
};

export default Container;
