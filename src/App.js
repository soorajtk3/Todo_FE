import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  const removeItem = (index) => {
    setTodos(toDos.filter((item,index)=>index!==index));
  };
  return (
    <div className='app'>
      <div className='subHeading'>
        <br />
        <h2>ToDo List </h2>
      </div>
      <h1>Todo List</h1>

      <div className='input form-control'>
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type='text'
          placeholder='🖊️ Add item...'
        />
      </div>
      <br />
      <button
        onClick={() => setTodos([...toDos, toDo])}
        className='b1 btn btn-primary '
      >
        Add
      </button>

      {toDos.map((value, index) => {
        return (
          <div>
            <ul>
              <li>
                {value}
                <button
                  onClick={() => {
                  removeItem(index)
                  }}
                  className='btn btn-primary '
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
