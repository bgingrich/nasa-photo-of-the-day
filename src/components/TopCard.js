import React from "react";
import styled from "styled-components";

const APODCard = styled.div`
  background: #ff5e04;
  color: black;
  width: 100%;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const TopCard = (props) => {
  return (
    <APODCard>
      <h1>Welcome to NASA's Astronomy Photo of the Day by Billy!</h1>
      <h2>{props.title}</h2>
    </APODCard>
  )
}

export default TopCard