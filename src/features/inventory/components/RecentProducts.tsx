import { ProductItem } from "./ProductItem";


const productos = [
  { name: "Teclado Mecánico", date: "2025-03-01", time: "14:30", quantity: 10 },
  { name: "Mouse Gamer", date: "2025-03-01", time: "14:00", quantity: 5 },
  { name: "Monitor 24''", date: "2025-02-28", time: "18:45", quantity: 2 },
  { name: "Audífonos Inalámbricos", date: "2025-02-27", time: "12:15", quantity: 8 }
];


export const RecentProducts = () => {
  return (
    <section className="bg-white p-6 rounded-lg shadow mt-6">
      <h1 className="text-xl font-semibold mb-4">Productos recientes</h1>

      <div className="divide-y divide-gray-200">
        {
          productos.map((producto, index) => (
            <ProductItem key={index} {...producto} />
          ))
        }
      </div>
    </section>
  )
}
