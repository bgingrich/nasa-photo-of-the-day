import React from "react";
import {UncontrolledPopover} from 'reactstrap';
import styled from "styled-components";

const Button1 = styled.button`
  width: 100%;
  font-size: 20px;
  height: 30px;
  background: ${props => (props.primary ? "#fff" : "#2a2223")};
  color: ${props => (props.primary ? "#2a2223" : "#fff")};
  border: 0;
  margin: 5px 10px;
`;

const PopoverBody = styled.div`
    margin-left:25%;
    text-align: center;
    background: white;
    border: 2px black solid;
    width: 50%;
    height: 20%;
    padding: 5px 5px;
`;

const BottomCard = props => {

  return (
    <div>
      <Button1 id="PopoverLegacy" type="button">
       Explanation
      </Button1>
    <UncontrolledPopover trigger="legacy" placement="bottom-start" target="PopoverLegacy">
        <PopoverBody>{props.explanation}</PopoverBody>
      </UncontrolledPopover>
    </div>
  );
}

export default BottomCard