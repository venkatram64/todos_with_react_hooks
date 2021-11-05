import React, {useContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import 'tailwindcss/dist/tailwind-dark.min.css';



const App = () =>{

  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      <TodoForm />
      <TodoList/>
    </TodosContext.Provider>
  )

}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

