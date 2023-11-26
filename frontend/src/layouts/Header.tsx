import React from 'react'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <div className="flex-1  flex flex-col">
                <nav className="w-full bg-slate-300 z-20  py-5 pr-4">
                    <ul className="flex gap-x-4 justify-end">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header