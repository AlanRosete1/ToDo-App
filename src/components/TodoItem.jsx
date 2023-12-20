import CrossIcon from "./icons/CrossIcon"

const TodoItem = ({todo}) => { 

    const {id, title, completed} = todo

    return (
        <article className="flex gap-4 py-4 border-b-[0.5px] border-b-gray-400 px-4">

        <button className="h-5 w-5 rounder-full border-2 rounded-2xl inline-block"></button>
        <p className="text-gray-600 grow">{title}</p>
        <button className=""><CrossIcon/></button>

        </article>
    )
 }

export default TodoItem