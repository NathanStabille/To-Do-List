import * as C from "./style";
import { ListContext } from "../../context/ListContext";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export const ListItem = (props) => {
  const [list, setList] = useContext(ListContext);
  const [theme] = useContext(ThemeContext);

  const DoneImg = () => {
    if (props.done) {
      if (theme === "dark") {
        return (
          <img
            alt="done"
            src={require("../../assets/white_onChecked.png")}
          ></img>
        );
      } else {
        return (
          <img
            alt="done"
            src={require("../../assets/black_onChecked.png")}
          ></img>
        );
      }
    } else {
      if (theme === "dark") {
        return (
          <img alt="done" src={require("../../assets/white_check.png")}></img>
        );
      } else {
        return (
          <img alt="done" src={require("../../assets/black_check.png")}></img>
        );
      }
    }
  };

  const onDone = (item) => {
    let updateItems = list.map((it) => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setList(updateItems);
  };

  const deleteItem = (item) => {
    let filteredItems = list.filter((it) => it.id !== item.id);
    setList(filteredItems);
  };

  return (
    <C.Container className="listItem">
      <div>
        <button
          onClick={() => {
            onDone(props.itemDel);
          }}
          className="btnImg"
        >
          <DoneImg />
        </button>
        <label className={props.done ? "done" : ""}>{props.item}</label>
      </div>

      <div>
        <button className="btn" onClick={() => deleteItem(props.itemDel)}>
          🗑️
        </button>
      </div>
    </C.Container>
  );
};
