import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [

    {id: 1, title: "Prueba React 1", completed: true},
    {id: 2, title: "Prueba React 2", completed: false},
    {id: 3, title: "Prueba React 3", completed: false},
    {id: 4, title: "Prueba React 4", completed: false},

]

const App = ()=> {

    const [todos, setTodos] = useState(initialStateTodos)

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo])
    }

    return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">
   
        <Header />

        <main className="container mx-auto px-4 mt-6">

            <TodoCreate createTodo={createTodo} />

            <TodoList todos={todos}/>

            <TodoComputed />
     
            <TodoFilter />

        </main>

    </div>
    );
}

export default App