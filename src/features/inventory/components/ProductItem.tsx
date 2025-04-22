
interface ProductProps {
    name: string
    date: string
    time: string
    quantity: number
}

export const ProductItem = ({ name, date, time, quantity }: ProductProps ) => {
  return (
    <div className="flex justify-between p-3 hover:bg-gray-100 rounded-lg">
        <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-sm text-gray-500">{date} - {time}</p>
        </div>
        <span className="text-lg font-semibold">{quantity}</span>
    </div>
  )
}
