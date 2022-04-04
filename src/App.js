import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  const [complete, setComplete] = useState([]);
  const instance = axios.create({ baseURL: 'http://localhost:3001' });

  const removeItem = (key) => {
    setTodos(toDos.filter((value, index) => index !== key));
  };
  const completedTask = (ind) => {
    const completeTask = toDos.filter((item, index) => index === ind);

    setComplete([...complete, completeTask]);

    setTodos(toDos.filter((value, index) => index !== ind));
  };
  return (
    <div className='app'>
      <div className='subHeading'>
        <br />
        <h1>ToDo List </h1>
      </div>

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
                    removeItem(index);
                  }}
                  className='btn btn-primary '
                >
                  Delete
                </button>
                <button
                  onClick={() => completedTask(index)}
                  className='btn btn-primary donebtn'
                >
                  Done
                </button>
              </li>
            </ul>
          </div>
        );
      })}

      <h2>Completed Task</h2>
      {complete.map((value, index) => {
        return (
          <ul>
            <li>{value}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
