import { useContext, useState } from "react";
import * as C from "./style";
import { ListContext } from "../../context/ListContext";

export const DeleteAll = () => {
  const [list, setList] = useContext(ListContext);
  const [modal, setModal] = useState(false);

  const deleteAll = () => {
    if (list !== "") {
      setList([]);
      hideModal();
    }
  };

  const hideModal = () => {
    if (modal) {
      setModal(false);
    }
  };
  const showModal = () => {
    setModal(true);
  };

  return (
    <C.Container>
      <div onClick={showModal} className="btn">
        <div className="trash"></div>
      </div>
      <div className={modal ? "modal show" : "modal"}>
        <div className="modal-content">
          <h2>Deseja deletar todos os itens?</h2>

          <button onClick={deleteAll} className="btn_y">
            SIM
          </button>
          <button onClick={hideModal}>NÃO</button>
        </div>
      </div>
    </C.Container>
  );
};
