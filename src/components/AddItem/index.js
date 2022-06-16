import * as C from "./style";
import { useContext, useState } from "react";
import { ListContext } from "../../context/ListContext";
import Item from "./Item";

export const AddItem = () => {
  const [list, setList] = useContext(ListContext);
  const [inputText, setInputText] = useState("");
  const lastId = Number(localStorage.getItem("lastId") || 0);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && inputText !== "") {
      let item = new Item(inputText, lastId);
      setList([...list, item]);
      setInputText("");
    }
  };

  return (
    <C.Container className="border-gradient">
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicionar uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      ></input>
    </C.Container>
  );
};
