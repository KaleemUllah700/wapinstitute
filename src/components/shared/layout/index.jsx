import { Link } from 'react-router-dom'
import Logo from '../logo'

const Layout = ()=>{

const menus = [
    {
        label: 'Home',
        path: '/home'
    },
    {
        label: 'Software Engineering',
        path: '/software-engineering'
    },
    {
        label: 'Courses',
        path: '/courses'
    },
    {
        label: 'Reviews',
        path: '/reviews'
    }
]

    return(
        <div>
            <header className="flex justify-between px-8 py-2 text-sm shadow">
                <div className="flex gap-6 sans-serif">
                    <a href="https://youtube.com"><i className="fa fa-youtube"></i></a>
                    <span>+923019415211</span>
                </div>
                <div className="flex gap-6">
                    <div>
                        <button className="flex gap-2 items-center">
                            <i className="fa fa-address-card-o"></i>
                            <span>Contact Us</span>
                        </button>
                    </div>
                    <div>
                        <button className="flex gap-2 items-center">
                            <i className="fa fa-user-o"></i>
                            <span>Certified</span>
                        </button>
                    </div>
                </div>
            </header>
            <nav className='flex justify-between items-center px-8 py-2 shadow-md'>
                <Logo />
                <ul className='flex gap-8'>
                    {
                        menus.map((menu, index)=>(
                            <button key={index}>
                                <li className='text-[black] font-semibold opacity-90'><Link to={menu.path}>{menu.label}</Link></li>
                            </button>
                        ))
                    }
                    <button className='flex gap-2 items-center justify-center w-[90px] h-[40px] border border-[blue] font-semibold opacity-90 rounded'>
                        <li className='fa fa-user-o'></li>
                        <span>login</span>
                    </button>

                    <button className='flex gap-2 items-center justify-center w-[90px] h-[40px] border border-[blue] font-semibold opacity-90 rounded'>
                        <li className='fa fa-user-o'></li>
                        <span>signup</span>
                    </button>
                </ul>
            </nav>
            <section></section>
            <footer></footer>
        </div>
    )
}

export default Layout;