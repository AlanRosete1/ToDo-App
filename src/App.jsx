import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = ()=> {
    return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen bg-gray-300">

        {/* HeaderTodo */}        
        <header className="container mx-auto px-4">

            <div className="container mx-auto px-4 flex justify-between pt-8">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">Todo</h1>
                <button className=""><MoonIcon className="fill-white-400"/></button>
            </div>  
            
        </header>

        <main className="container mx-auto px-4 mt-6">

            {/* TodoCreate */}
            <form className="overflow-hidden flex items-center rounded-md bg-white py-4 px-4 gap-4 mt-8">
                <span className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"></span>
                <input className="outline-0 w-full text-gray-400" type="text" placeholder="Create a new todo.."></input>
            </form>

            {/* TodoList (TodoItem) TodoUpdate And Todo Delete */}
            <div className="bg-white rounded-md mt-6">
            <article className="flex gap-4 py-4 border-b-[0.5px] border-b-gray-400 px-4">
                <button className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"></button>
                <p className="text-gray-600 grow">Tarea numero uno</p>
                <button className=""><CrossIcon/></button>
            </article>

            <article className="flex gap-4 py-4 px-4">
                <button className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"></button>
                <p className="text-gray-600 grow">Tarea numero dos</p>
                <button className="ml-auto"><CrossIcon/></button>
            </article>

            <article className="flex gap-4 py-4 px-4">
                <button className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"></button>
                <p className="text-gray-600 grow">Tarea numero tres</p>
                <button className="ml-auto"><CrossIcon/></button>
            </article>
            
            {/* TodoComputed */}
            <section className="py-4 px-4 flex justify-between">
                <span className="text-gray-400">3 items left</span>
                <button className="text-gray-400">Clear Tasks</button>
            </section>

            </div>

            {/* TodoFilter */}        
            <section className="container mx-auto px-4 mt-8">
                <div className="bg-white flex justify-center p-4 rounded-md gap-4">
                <button className="text-blue-600">All</button>
                <button className="hover:text-blue-600">Active</button>
                <button className="hover:text-blue-600">Complete</button>
                </div>
            </section>
        </main>

    </div>
    );
}

export default App