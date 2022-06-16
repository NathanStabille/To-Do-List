import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  align-items: center;

  .done {
    text-decoration: line-through;
  }

  .btnImg {
    position: relative;
    width: 35px;
    height: 35px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    margin-right: 8px;
    margin-left: 5px;
    border-radius: 50%;
    top: 0.5rem;
  }
  img {
    position: relative;
    margin: auto;
    width: 31px;
    height: 31px;
    right: 0.45rem;
    bottom: 0.1rem;
  }

  input {
    cursor: pointer;
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  label {
    font-size: 25px;
  }

  .btn {
    width: 40px;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    background-color: #17181f;
    outline: none;
    text-align: center;
    border-radius: 20px;
    border: 1px solid;
  }
  .btn:hover {
    border: 1px solid white;
    transition: 0.5s;
    cursor: pointer;
  }
`;
