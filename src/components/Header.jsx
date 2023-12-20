import MoonIcon from "./icons/MoonIcon"

const Header = () => { 
    return (
        <header className="container mx-auto px-4">

        <div className="container mx-auto px-4 flex justify-between pt-8">
            <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.4em]">Todo</h1>
            <button className=""><MoonIcon className="fill-white-400"/></button>
        </div>  
        
        </header>
    )
 }

export default Header