import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
    return (

        <aside className='flex flex-row'>
            

            <section className="flex flex-col items-start w-64 h-screen p-6 bg-white">
                <Link className="text-3xl" to="/">Inventario</Link>
                <nav className="flex flex-col gap-y-6 mt-6 w-full">

                    <NavLink
                        className={ ({isActive}) => `w-full flex items-center p-3 hover:bg-gray-100 rounded-lg ${ isActive ? 'active' : '' }` }
                        to="home"
                    >
                        Inicio
                    </NavLink>
                    
                </nav>

            </section>

        </aside>



    )
}
