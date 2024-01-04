import TodoItem from "./TodoItem"
import CrossIcon from "./icons/IconCross"

const TodoList = ({todos, updateTodo, removeTodo}) => { 
    return (
        <div className="bg-white rounded-md mt-6">

        {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} updateTodo={updateTodo} removeTodo={removeTodo}/>
        ))}

        </div>
    )
}

export default TodoList