import IconCheck from "./icons/IconCheck"
import IconCross from "./icons/IconCross"


const TodoItem = ({todo}) => { 

    const {id, title, completed} = todo

    return (
        <article className="flex gap-4 py-4 border-b-[0.5px] border-b-gray-400 px-4">
        {/* <button className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"><IconCheck /> </button> */}
        <button className="h-5 w-5 rounder-full border-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"><IconCheck /> </button>
        <p className="text-gray-600 grow">{title}</p>
        <button className=""><IconCross/></button>

        </article>
    )
 }

export default TodoItem