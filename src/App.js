import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  removeItem = (key) => {
    setTodos();
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

      {toDos.map((value, key) => {
        return (
          <div>
            <ul>
              <li>
                {value}
                <button
                  onClick={() => {
                    removeItem(key);
                  }}
                  className='btn btn-primary '
                >
                  Delete
                </button>{' '}
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
