import { RecentProducts } from '../components/RecentProducts'
import { InputComp } from '../../../components/Input'
import { SummaryCard } from '../components/SummaryCard'


export const Home = () => {
  return (
    <div className='flex min-h-screen'>

      <main className='flex-1 p-6 bg-gray-100 '>

        <InputComp type='text' placeholder='Buscar Producto... ' />

        <div className="grid grid-cols-3 gap-4 mt-4">
          <SummaryCard icon="📦" title="Total Productos" value={156} />
          <SummaryCard icon="⚠️" title="Stock por Finalizar" value={23} />
          <SummaryCard icon="⏳" title="Última Actualización" value={315} />
        </div>

        <RecentProducts />

      </main>
      
    </div>



    // 📊 Resumen del inventario: Cantidad total de productos, productos en stock bajo, últimas modificaciones.
    // 📌 Accesos rápidos: Botones para agregar productos, ver lista de productos, generar reportes.
    // 🔍 Barra de búsqueda: Para buscar productos fácilmente.
    // 📜 Lista de productos recientes: Últimos productos agregados o modificados.
    // ⚙️ Configuración: Acceso a marcas, reportes y gestión general.


  )
}
