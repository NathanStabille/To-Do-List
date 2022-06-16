import * as C from "./styles/App.style";
import { AddItem } from "./components/AddItem";
import { ListItem } from "./components/ListItem";
import { ListContext } from "./context/ListContext";
import { DeleteAll } from "./components/DeleteAll";
import { ThemeSwicther } from "./components/ThemeSwicther";
import { useContext } from "react";

function App() {
  const [list] = useContext(ListContext);

  return (
    <C.Container>
      <C.Area>
        <ThemeSwicther />
        <C.Header>LISTA DE TAREFAS</C.Header>
        <AddItem />
        {list.map((item) => {
          return (
            <ListItem
              key={item.id}
              item={item.text}
              itemDel={item}
              done={item.done}
            ></ListItem>
          );
        })}
        <DeleteAll />
      </C.Area>
    </C.Container>
  );
}

export default App;
