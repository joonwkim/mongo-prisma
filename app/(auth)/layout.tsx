
export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="pb-4 mt-3">
            <div className='bg-white'>
                <section className='w-100 p-4 d-flex justify-content-center pb-4'>
                    <div className="border border-round p-3">
                        {children}
                    </div>
                </section>
            </div>
        </section>
    )
}
