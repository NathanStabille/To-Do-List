import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1.4rem;

  .modal {
    user-select: none;
    display: none;
    background: rgba(8, 16, 87, 0.24);
    backdrop-filter: blur(5.5px);
    -webkit-backdrop-filter: blur(5.5px);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    transition: 0.5;
  }
  .modal-content {
    background-color: rgba(133, 163, 206, 1);
    border-radius: 16px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 1);
    border-radius: 10px;
    color: #20212c;
    margin: 10% auto;
    max-width: 50%;
    width: 500px;
    height: 300px;
    text-align: center;

    button {
      background-color: #20212c;
      color: white;
      font-weight: bold;
      font-size: 15px;
      width: 120px;
      height: 50px;
      border: none;
      border-radius: 5px;
      margin: 20px;
      margin-top: 50px;
      cursor: pointer;
    }

    button:hover {
      filter: contrast(200%);
    }
    .btn_y {
      background-color: rgba(175, 19, 19);
    }

    h2 {
      padding-top: 20%;
    }
  }
  .show {
    display: block;
  }
  .trash {
    background: #fff;
    width: 40px;
    height: 40px;
    margin: auto;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    position: absolute;
    left: 0;
    right: 0;
    top: 40px;
  }
  .trash:after,
  .trash:before {
    content: "";
    position: absolute;
    transition: ease-out 0.3s;
  }
  .trash:after {
    height: 10px;
    background: #fff;
    width: 120%;
    left: -10%;
    top: -13px;
    -webkit-animation: demoAft 0.3s ease-out 0.5s 2 alternate;
    animation: demoAft 0.3s ease-out 0.5s 2 alternate;
  }
  .trash:before {
    top: -23px;
    left: 4px;
    border: 5px solid transparent;
    border-bottom-color: #fff;
    /* z-index: 5; */
    width: 20px;
    -webkit-animation: demoBfr 0.3s ease-out 0.5s 2 alternate;
    animation: demoBfr 0.3s ease-out 0.5s 2 alternate;
  }

  .btn {
    width: 100px;
    height: 100px;
    background: #20212c;
    border-radius: 100%;

    overflow: hidden;
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .btn:active {
    cursor: -webkit-grab;
    cursor: grab;
  }
  .btn:hover .trash:after {
    transform: translate(-3px, -8px) rotate(-15deg);
  }
  .btn:hover .trash:before {
    transform: translate(-6px, -7px) rotate(-15deg);
  }
  @-webkit-keyframes demoAft {
    to {
      transform: translate(-3px, -8px) rotate(-15deg);
    }
  }
  @keyframes demoAft {
    to {
      transform: translate(-3px, -8px) rotate(-15deg);
    }
  }
  @-webkit-keyframes demoBfr {
    to {
      transform: translate(-6px, -7px) rotate(-15deg);
    }
  }
  @keyframes demoBfr {
    to {
      transform: translate(-6px, -7px) rotate(-15deg);
    }
  }
`;
