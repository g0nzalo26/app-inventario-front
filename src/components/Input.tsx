import { InputHTMLAttributes } from "react"

interface InputCompProps extends InputHTMLAttributes<HTMLInputElement>{
    label?: string
    type: string
    placeholder: string
    icon?: string
}


export const InputComp = ({ label, type, placeholder, icon, ...rest }: InputCompProps) => {
    return (
        <div className="mb-4w-full">

            {
                label && <label className="block text-sm font-medium mb-1">{label}</label>
            }
            <div className="relative">
                {
                    icon && <span className="absolute left-3 top-1/2 transform -translate-y-1/2 ">{icon}</span>
                }
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`w-full pl-${icon ? '10' : '4'} p-2 rounded-lg border bg-white`}
                    
                    {...rest}
                />
            </div>

        </div>
    )
}
