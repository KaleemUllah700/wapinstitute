import { Link } from 'react-router-dom'
import Logo from '../logo'

const Layout = ()=>{

const verifications = [
    {
        label: 'Contact Us',
        path: 'contact-us',
        icon: 'fa fa-address-card-o'
    },
    {
        label: 'Verified',
        path: '/verified',
        icon: 'fa fa-user-o'
    }
]

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

const authentications = [
    {
        label: 'Login',
        path: '/login'
    },
    {
        label: 'Signup',
        path: '/signup'
    }
]

const socials = [
    {
        icon: 'fa fa-youtube-play text-[red]',
        link: 'https://youtube.com'
    },
    {
        icon: 'fa fa-linkedin-square text-[#1506AA]',
        link: 'https://linkedin.com'
    },
    {
       
        icon: 'fa fa-facebook-square text-[#5748EC]',
        link: 'https//facebook.com'
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
                    {
                        verifications.map((verification, index)=>(
                            <div>
                                <Link to={verification.path} className="flex gap-2 items-center" key={index}>
                                    <i className={verification.icon}></i>
                                    <span>{verification.label}</span>
                                </Link>
                            </div>
                        ))
                    }
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
                    {
                        authentications.map((authentication, index)=>(
                            <button className='flex gap-2 items-center justify-center w-[90px] h-[40px] border bg-[#911287] font-semibold opacity-90 rounded text-[white]' key={index}>
                                <li><Link to={authentication.path}>{authentication.label}</Link></li>
                            </button>
                        ))
                    }
                </ul>
            </nav>
            <section></section>
            <footer>
                <div className='grid grid-cols-4 bg-[white] mx-8 px-4'>
                    <div className='flex flex-col gap-4'>
                        <Logo />
                        <div className='flex items-center gap-4'>
                            <button className='w-[40px] h-[40px] bg-[#F7E8F6] rounded-full text-lg'>
                                <i className='fa fa-phone text-[red]'></i>
                            </button>
                            <span>+923019415211</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            {
                                socials.map((social, index)=>(
                                    <button key={index} className='w-[40px] h-[40px] bg-[#E8EBF7] rounded-full text-lg'>
                                       <a href={social.link}><i className={social.icon}></i></a>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;