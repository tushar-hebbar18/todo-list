import logo from './logo.svg';
import './App.css';
import {Fragment, useEffect, useState} from "react";
import TodoArrayItems from './components/todoArrayItems';

function App() {

  const [todoArrays, setTodoArray] = useState(null);

  useEffect(() => {
    if(!todoArrays){
      fetch('http://localhost:8080/api/todoArrayItems')
        .then((response) => response.json())
        .then((data) => {

          setTodoArray(data);
        });
    }
  
  },[todoArrays]);
  
  function addNewTodoItem() {
    fetch("http://localhost:8080/api/todoArrayItems", {
      headers: {
        "content-type":"application/json",
      },
      method: "POST",
    })
        .then((response) => response.json())
        .then((aData) => {
          
          setTodoArray([...todoArrays,aData]);
        });
  }
  function handleDeleteTodoItem(item){
    const updateTodoItems = todoArrays.filter(
        (aData) => aData.id !== item.id
    );
    setTodoArray([...updateTodoItems]);
}
  return (
    <>
    <div>
      <button onClick={addNewTodoItem}>Add Tasks</button>
    </div>
    <div>
      {todoArrays
        ? todoArrays.map((todoArrayItems) => {
            return <TodoArrayItems key={todoArrayItems.id} data={todoArrayItems} emitDeleteItem={handleDeleteTodoItem} />;
        })
        : "loading div"}
    </div>
    </>
  );
}

export default App;
 