

export default function reducer(state, action){

    switch(action.type){
        case "ADD_TODO":
            if(!action.payload || action.payload.trim().length === 0){
                return state;
            }
            if(state.todos.findIndex(t => t.text === action.payload) > -1){
                return state;
            }
            const newTodos = {
                id: Math.random(),
                text: action.payload,
                complete: false
            };
            const addedTodo = [...state.todos, newTodos]
            return {
                ...state,
                todos: addedTodo
            }
        case "SET_CURRENT_TODO":
            return {
                ...state,
                currentTodo: action.payload
            }
        case "UPDATE_TODO":
            if(!action.payload || action.payload.trim().length === 0){
                return state;
            }
            if(state.todos.findIndex(t => t.text === action.payload) > -1){
                return state;
            }
            const updatedTodo = {...state.currentTodo, text: action.payload}

            const updatedTodoIndex = state.todos.findIndex(
                t => t.id === state.currentTodo.id
            )

            const updatedTodos = [
                ...state.todos.slice(0, updatedTodoIndex),
                updatedTodo,
                ...state.todos.slice(updatedTodoIndex + 1)
            ]

            return {
                ...state,
                currentTodo: {},
                todos: updatedTodos
            }

        case "TOGGLE_TODO":
            const toggledTodos = state.todos.map(t => 
                t.id === action.payload.id ?
                        {...action.payload, complete: !action.payload.complete} : t
            );
            return {
                ...state,
                todos: toggledTodos
            };
        case "REMOVE_TODO":
            const filteredTodos = state.todos.filter(t => t.id !== action.payload.id)
            const isRemovedTodo = state.currentTodo.id === action.payload.id ? {} : state.currentTodo;
            return{
                ...state,
                currentTodo: isRemovedTodo,
                todos: filteredTodos
            }
        default:
            return state;
    }
}