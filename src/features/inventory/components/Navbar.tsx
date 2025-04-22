import { Button } from './Button'

const botones = [
    { label: 'Inicio' },
    { label: 'Productos' },
    { label: 'Reportes' },
    { label: 'Configuración' },
    { label: 'LogOut' },

]

export const Navbar = () => {
    return (
        <aside className='flex flex-row'>

            <section className="flex flex-col items-start w-64 h-screen p-6 bg-white">

                <h1 className="text-3xl">Inventario</h1>

                <nav className="flex flex-col gap-y-6 mt-6 w-full">

                    {
                        botones.map((boton, index) => (
                            <Button key={index} label={boton.label} />
                        ))
                    }

                </nav>

            </section>

        </aside>
    )
}
