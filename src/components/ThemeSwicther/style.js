import styled from "styled-components";

export const BtnContainer = styled.div`
  font-size: 5px;
  .toggle-switch {
    position: relative;
    width: 11em;
    height: 5em;
    background-image: linear-gradient(90deg, #161e54 50%, skyblue 50%);
    background-size: 200% 100%;
    background-position: 100% 100%;
    box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.1) inset;
    padding: 0;
    border-radius: 2.5em;
    display: flex;
    align-items: center;
    transition: 0.7s;
  }
  .toggle-switch input {
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
    opacity: 0;
    z-index: 999;
  }
  .toggle-switch .round-button {
    position: relative;
    transform: translateX(-5%);
    height: 100%;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    transition: 0.4s;
    transition-timing-function: ease-in-out;
  }
  .toggle-switch .round-button .button-body {
    position: absolute;
    z-index: 0;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-image: radial-gradient(#ffcc33 30%, #fc9601);
    box-shadow: 0 0 20px #ffcc33;
  }
  .toggle-switch .round-button div:nth-child(1) {
    height: 90%;
    aspect-ratio: 1;
    position: absolute;
    z-index: 1;
    background-image: radial-gradient(transparent 80%, #fc9601);
    transform: rotateZ(30deg);
    transition: 0.4s;
  }
  .toggle-switch .round-button div:nth-child(2) {
    height: 90%;
    aspect-ratio: 1;
    position: absolute;
    z-index: 1;
    background-image: radial-gradient(transparent 80%, #fc9601);
    transform: rotateZ(60deg);
    transition: 0.4s;
  }
  .toggle-switch .round-button div:nth-child(3) {
    height: 90%;
    aspect-ratio: 1;
    position: absolute;
    z-index: 1;
    background-image: radial-gradient(transparent 80%, #fc9601);
    transform: rotateZ(90deg);
    transition: 0.4s;
  }
  .toggle-switch input:checked ~ .round-button {
    transform: translateX(calc(11em - 95%));
  }
  .toggle-switch input:checked ~ .round-button .button-body {
    background-image: radial-gradient(#f4f4f4, #cacaca);
    box-shadow: 0 0 20px #f4f4f4;
  }
  .toggle-switch input:checked ~ .round-button div:nth-child(1) {
    height: 5%;
    aspect-ratio: 1;
    transform: rotateZ(90deg) translate(-1em, 0.5em) !important;
    border-radius: 50%;
    background-color: #cacaca;
    transform: rotateZ(180deg);
  }
  .toggle-switch input:checked ~ .round-button div:nth-child(2) {
    height: 10%;
    aspect-ratio: 1;
    transform: rotateZ(90deg) translate(0em, 1em) !important;
    border-radius: 50%;
    background-color: #cacaca;
    transform: rotateZ(180deg);
  }
  .toggle-switch input:checked ~ .round-button div:nth-child(3) {
    height: 15%;
    aspect-ratio: 1;
    transform: rotateZ(90deg) translate(-1em, 1.5em) !important;
    border-radius: 50%;
    background-color: #cacaca;
    transform: rotateZ(180deg);
  }
`;
