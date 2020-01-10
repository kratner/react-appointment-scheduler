import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import styled from "styled-components";

const AddIcon = styled(IoIosAddCircleOutline)`
  color: #ffffff;
  cursor: pointer;
  &:hover {
    color: #00ffff;
  }
`;

export default props => {
  return (
    <div>
      <AddIcon
        onClick={props.onShowFormClick}
        title={props.formVisible ? `Hide Form` : `Show Form`}
      />
    </div>
  );
};
