import React, { useContext, useState } from 'react'
import logo from '../assets/finalProject assets/freshcart-logo.svg'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../contexts/AuthContext'






export default function Navbar() {
    let navigate = useNavigate();



    let { setLogin, isLogin } = useContext(auth)
    let [open, setOpen] = useState(false)

    function toggle() {
        setOpen(!open)
    }

    function logOut() {
        localStorage.removeItem('userToken')
        setLogin(null)
        navigate('/login')
    }


    return (

        <header className="bg-gray-800 z-50  fixed top-0 left-0 w-full">
            <nav className="container mx-auto  py-5 ">
                <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-xl">
                        <Link to={'/'}><a href="">Fresh Cart</a></Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex text-white items-center lg:space-x-8 md:space-x-4">
                            <li >
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/products'}>Products</NavLink>
                            </li>

                            <li>
                                <NavLink to={'/brands'}>Brands</NavLink>
                            </li>

                            <li>
                                <NavLink to={'/categories'}>Categories</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/cart'}>Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/wish'}>WishList</NavLink>
                            </li>

                        </ul>


                    </div>
                    <div>
                        <ul className="hidden md:block text-white" >


                            <div className='flex md:space-x-8"'>
                                {isLogin ? <li onClick={logOut}>
                                    <span className='cursor-pointer'>Logout</span>
                                </li> : <>
                                    <li className='px-3'> 
                                        <NavLink to={'/login'}>Login</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={'/register'}>Register</NavLink>
                                    </li>
                                </>}





                                <li className='flex gap-4 pl-5 text-xl'>
                                    <i className="fa-brands fa-facebook "></i>
                                    <i className="fa-brands fa-twitter"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    <i className="fa-brands fa-youtube"></i>
                                    <i className="fa-brands fa-tiktok"></i>
                                </li>
                            </div>


                        </ul>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggle} className="outline-none mobile-menu-button">
                            <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={open ? 'mobile-menu md:hidden' : 'mobile-menu md:hidden hidden'}>
                    <ul className="mt-4 space-y-4 text-white">
                        <li >
                            <NavLink to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'}>Products</NavLink>
                        </li>

                        <li>
                            <NavLink to={'/brands'}>Brands</NavLink>
                        </li>


                        <li>
                            <NavLink to={'/categories'}>Categories</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/cart'}>Cart</NavLink>
                        </li>
                        <li>
                            <NavLink to={'/wish'}>WishList</NavLink>
                        </li>

                        {isLogin ? <li onClick={logOut}>
                            <span className='cursor-pointer text-white'>Logout</span>
                        </li> : <>
                            <li>
                                <NavLink to={'/login'}>Login</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/register'}>Register</NavLink>
                            </li>
                        </>}
                    </ul>
                </div>

            </nav>
        </header>



    )
}
