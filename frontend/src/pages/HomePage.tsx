import { SectionHeading } from '@/components/headings'
import { Footer, Header, Sidebar } from '@/layouts'
import React from 'react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='flex'>
            <Sidebar />

            <main className='w-full flex flex-col'>
                <Header />
                <section className="flex-1">
                    {/* <div className='container mt-5'>
                    <SectionHeading title='Dashboard' />
                    </div> */}
                    <Outlet />
                </section>
                <Footer />
            </main>
        </div>
    )
}

export default HomePage