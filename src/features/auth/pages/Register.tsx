import { InputComp } from "../../../components/Input"

export const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-xl shadow-lg flex w-full max-w-4xl">

                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Crear Cuenta</h2>

                    <form>
                        <div className="mb-4">
                            <InputComp label="Usuario" type="text" placeholder="Nombre de Usuario" />
                        </div>

                        <div className="mb-4">
                            <InputComp label="Correo" type="mail" placeholder="Ingresa Tú Correo" />
                        </div>

                        <div className="mb-4">
                            <InputComp label="Contraseña" type="password" placeholder="Ingresa una Contraseña" />
                        </div>

                        <button className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600">
                            Registrarse
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        ¿Ya tienes una cuenta? <a className="text-blue-500">Ingresa Aquí</a>
                    </p>
                </div>

                <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-12 text-white items-center justify-center text-center rounded-r-xl">
                    <div>
                        <h3 className="text-2xl font-bold">Sistema de Control de Inventario</h3>
                        <p className="text-blue-100 mt-4">
                            Optimice su proceso de inventario con nuestra solución de gestión integral.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}
