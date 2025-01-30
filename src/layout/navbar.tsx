import { HomeIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="navbar bg-[#121212] pl-10">
            <div className="w-full gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered bg-[#1e1e1e] h-[40px] text-white w-24 md:w-auto" />
                </div>
                <div className='flex justify-center w-[60%]'>
                    <Link to={"/"}>
                        <HomeIcon />
                    </Link>
                </div>
                {/* <div className="dropdown dropdown-end">
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}
