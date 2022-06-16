import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px;
  margin: 20px 0;
  align-items: center;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;

  input {
    background: transparent;
    border: none;
    outline: none;
    flex: 1;
    font-size: 20px;
  }

  .image {
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
`;
