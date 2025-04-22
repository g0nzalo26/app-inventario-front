
interface CardProps {
    icon?: string,
    title: string,
    value?: number
}

export const SummaryCard = ({ icon, title, value }: CardProps) => {
    return (
        <section className="rounded-lg shadow p-6 bg-white">

            <div className="flex items-center">

                <div className="size-8">{icon}</div>

                <div className="ml-4">
                    <h3 className="text-sm">{title}</h3>
                    <p className="text-sm text-gray-500">{value}</p>
                </div>
            </div>

        </section>
    )
}
