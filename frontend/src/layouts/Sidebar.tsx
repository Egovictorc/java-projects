import navConfig from '@/config-navigation'
import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <aside className=" pb-14 h-screen bg-slate-300 border-r-2">
            <nav className=" z-20 transparent py-5 ">
                <Link to="/" className="block font-bold text-2xl text-center">
                    Helen_SMS
                </Link>
                <p className="my-4 capitalize font-semibold text-center">Hi User</p>
                <ul className="flex flex-col w-60">
                    {
                        navConfig.map(({ header, children }, i) => (
                            <React.Fragment key={header}>
                                <h4 className='p-4 font-semibold mt-4'> {header} </h4>
                                {
                                    children.map(({ path, title }, i) => (
                                        <li className="border-b-2 hover:bg-slate-400 " key={title}><Link to={path}
                                            className="text-slate-700 hover:text-slate-600 duration-200 block py-4 pl-12">{title} </Link>
                                        </li>

                                    ))
                                }
                            </React.Fragment>


                        ))
                    }
                </ul>

            </nav>
        </aside>
    )
}

export default Sidebar