const TodoFilter = () => { 
    return (
        <section className="container mx-auto px-4 mt-8">

            <div className="bg-white flex justify-center p-4 rounded-md gap-4">
            <button className="text-blue-600">All</button>
            <button className="hover:text-blue-600">Active</button>
            <button className="hover:text-blue-600">Complete</button>
            </div>
            
        </section>
    )
 }

export default TodoFilter