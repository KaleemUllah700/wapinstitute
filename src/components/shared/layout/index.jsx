import { Link } from 'react-router-dom'
import Logo from '../logo'

const Layout = ({children})=>{

const verifications = [
    {
        label: 'Contact Us',
        path: '/contact-us',
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
        path: '/homepage'
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

const youtubes = [
    {
        label: 'Python tutorial for beginners in hindi',
        link: ''
    },
    {
        label: 'Host Php Mysql website on Aws Cloud Ec2 in hindi',
        link: ''
    },
    {
        label: 'Can i get jobs after reading c and c++',
        link: ''
    },
    {
        label: 'Software developer salary salary of a programmer',
        link: ''
    },
    {
        label: 'How to copy windows in pendrive',
        link: ''
    }
]

const devtools = [
    {
        label: 'Hosting checker',
        link: ''
    },
    {
        label: 'Dns checker',
        link: ''
    },
    {
        label: 'Stackoverflow',
        link: ''
    },
    {
        label: 'Secret key generator',
        link: ''
    },
    {
        label: 'Coding solutions',
        link: ''
    }
]

const privacies = [
    {
        label: 'Privacy',
        link: '/privacy'
    },
    {
        label: 'Terms',
        link: '/terms'
    },
    {
        label: 'Refund Policy',
        link: '/refund-policy'
    }
]

    return(
        <div>
            <header className="grid md:grid-cols-2 flex gap-4 md:px-8 px-4 py-2 text-sm shadow">
                <div className="flex md:justify-start justify-center gap-6 sans-serif">
                    <a href="https://youtube.com"><i className="fa fa-youtube"></i></a>
                    <span>+923019415211</span>
                </div>
                <div className="flex md:justify-end justify-center gap-6">
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
            <nav className='md:flex justify-between items-center md:px-8 px-4 py-2 shadow-md'>
                <span className='flex justify-center mt-4'><Logo /></span>
                <ul className='grid grid-col-4 md:flex md:gap-8 gap-2 mt-4'>
                    {
                        menus.map((menu, index)=>(
                            <button key={index}>
                                <li className='text-[black] font-semibold opacity-90'><Link to={menu.path}>{menu.label}</Link></li>
                            </button>
                        ))
                    }
                    {
                        authentications.map((authentication, index)=>(
                            <div className='flex justify-center'>
                            <button className='w-[90px] h-[40px] bg-[#911287] font-semibold opacity-90 rounded text-[white]' key={index}>
                                <li><Link to={authentication.path}>{authentication.label}</Link></li>
                            </button>
                            </div>
                        ))
                    }
                </ul>
            </nav>
            <section className='md:mx-8 mx-4 py-4'>
                {
                    children
                }
            </section>
            <footer>
                <div className='grid md:grid-cols-4 bg-[white] md:mx-8 mx-4 px-4'>
                    <div className='flex flex-col gap-4 p-4'>
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
                    <div className='flex flex-col gap-2 p-4'>
                        <h1 className='text-lg font-semibold'>Navlinks</h1>
                        {
                            menus.map((menu, index)=>(
                                    <Link to={menu.path} key={index}>{menu.label}</Link>
                            ))
                        }
                    </div>
                    <div className='flex flex-col gap-2 p-4'>
                    <h1 className='text-lg font-semibold'>YouTube videos</h1>
                        {
                            youtubes.map((youtube, index)=>(
                                <Link to={youtube.link} key={index}>{youtube.label}</Link>
                            ))
                        }
                    </div>
                    <div className='flex flex-col gap-2 p-4'>
                        <h1 className='text-lg font-semibold'>Devtools</h1>
                        {
                            devtools.map((devtool, index)=>(
                                <Link to={devtool.link} key={index}>{devtool.label}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className='grid md:grid-cols-2 md:mx-8 mx-4 md:py-4 py-2 md:text-sm text-[12px] font-semibold md:text-left text-center flex gap-2'>
                    <div>
                        <i className='fa fa-home'></i>
                        <span>Nodewap It Solutions | All Right Reserved</span>
                    </div>
                    <div className='flex gap-4 md:justify-end justify-center'>
                      {
                        privacies.map((privacy,index)=>(
                            <Link to={privacy.link} key={index}>{privacy.label}</Link>
                        ))
                      }  
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Layout;