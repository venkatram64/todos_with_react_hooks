import React, {useState, useEffect, useContext, useRef} from 'react';
import TodosContext from '../context';

export default function TodoForm(){

    const [todo, setTodo] = useState("");
    const {state: {currentTodo={}}, dispatch} = useContext(TodosContext);
    const todoInputRef = useRef();

    useEffect(() => {
        //this is for updation
        if(currentTodo.text){
            setTodo(currentTodo.text)
        }else{
            setTodo("")
        }
    },[currentTodo.id])

    const handleSubmit = (event) =>{
        event.preventDefault();
        //for updation
        if(currentTodo.text){
            dispatch({type: "UPDATE_TODO", payload: todo});
        }else{
            //will dispatch into reducer function
            dispatch({type:"ADD_TODO", payload: todo});
        }
        setTodo("");
        todoInputRef.current.focus();
    }

    return (
        <form onSubmit={handleSubmit} className="flex justify-center p-5">
            <input 
                type="text"
                className="p-1 border-black border-solid border-2 rounded"
                onChange={event =>setTodo(event.target.value)}
                value={todo}
                ref={todoInputRef}
            />
            <button className="m-2 p-2 border-black border-solid border-2" type="submit">Submit</button>
        </form>
    )

}