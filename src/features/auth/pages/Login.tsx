import { InputComp } from '../../../components/Input'
import { useForm } from '../hooks/useForm'

export const Login = () => {

    const { formState, onInputChange } = useForm({
        usuario: "",
        contrasenia: "",
    })

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        console.log('Datos del Formulario:' , JSON.stringify(formState, null, 2))
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white rounded-xl shadow-lg flex w-full max-w-4xl">

                <div className="w-1/2 p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">Bienvenido de Vuelta</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <InputComp
                                label="Usuario" 
                                type="text" 
                                placeholder="Ingrese Su Usuario" 
                                name="usuario"
                                value={formState.usuario}
                                onChange={onInputChange}
                            />
                        </div>

                        <div className="mb-4">
                            <InputComp 
                                label="Contraseña" 
                                type="password" 
                                placeholder="Ingrese Su Contraseña" 
                                name="contrasenia"
                                value={formState.contrasenia}
                                onChange={onInputChange}
                            />
                        </div>

                        <button type='submit' className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600">
                            Iniciar Sesión
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        ¿No tienes una cuenta? <a className="text-blue-500">Regístrate</a>
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
