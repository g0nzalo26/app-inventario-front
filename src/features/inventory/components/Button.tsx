
interface ButtonProps {
    label: string,
}

export const Button = ({ label } : ButtonProps) => {
  return (
    <button className="w-full flex items-center p-3 hover:bg-gray-100 rounded-lg">{ label }</button>

  )
}
