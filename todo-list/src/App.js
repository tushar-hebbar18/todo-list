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
          console.log("todo list:",data);
          setTodoArray(data);
        });
    }
  
  },[todoArrays]);
  
  return (
    <div>
      {todoArrays
        ? todoArrays.map((todoArrayItems) => {
            return <TodoArrayItems key={todoArrayItems.id} data={todoArrayItems} />;
        })
        : "loading div"}
    </div>
  );
}

export default App;
 