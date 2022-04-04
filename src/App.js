import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState('');
  const [complete, setComplete] = useState([]);
  const instance = axios.create({ baseURL: 'http://localhost:3001' });

  const add = (e) => {
    setTodo(e.target.value);

    instance
      .post('/test', {
        toDo,
      })
      .then((res) => {
        setTodos([...toDos, res.data]);
      });
  };

  const removeItem = (key) => {
    setTodos(toDos.filter((value, index) => index !== key));
    instance.delete('/delete', {});
  };
  const completedTask = (ind) => {
    const completeTask = toDos.filter((item, index) => index === ind);

    setComplete([...complete, completeTask]);
    instance
      .post('/complete', {
        ind,
      })
      .then((res) => {
        setComplete([...completedTodoTask, res.data]);

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
          name='Todo'
          value={toDo}
          onChange={add}
          type='text'
          placeholder='🖊️ Add item...'
        />
      </div>
      <br />
      <button
        onClick={() =>
          setTodos(
            [...toDos, toDo],
            instance.post('/test', {
              toDo,
            })
          )
        }
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
