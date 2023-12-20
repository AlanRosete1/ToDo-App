const TodoCreate = () => { 
    return (
        <form className="overflow-hidden flex items-center rounded-md bg-white py-4 px-4 gap-4 mt-8">

            <span className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"></span>
            <input className="outline-0 w-full text-gray-400" type="text" placeholder="Create a new todo.."></input>
        
        </form>

    )
}

export default TodoCreate

