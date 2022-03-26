import logo from './logo.svg';
import './App.css';
import {Fragment, useEffect, useState} from "react";

function App() {

  const [todoArrays, setTodoArray] = useState(null);

  useEffect(() => {
    if(!todoArrays){
      fetch('http://localhost:8080/api/todoArrayItems')
        .then((response) => response.json())
        .then((data) => {
          console.log("todo list:",data);
          setTodoArray(data);
        });
    }
  
  },[todoArrays]);
  
  return (
    <div>
      {todoArrays
        ? todoArrays.map((todoArrayItems) => {
            return (
              <Fragment key={todoArrayItems.id}>
                <input type="checkbox" checked={todoArrayItems.isDone}/>
                <span>{todoArrayItems.taskName}</span>
                </Fragment>
            );
        })
        : "loading div"}
    </div>
  );
}

export default App;
 