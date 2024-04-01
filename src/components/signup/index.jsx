import { Link } from "react-router-dom";
import Logo from '../shared/logo'
import Layout from '../shared/layout'

const SignUp = ()=>{
    return (
        <Layout>
        <div className="flex flex-col items-center justify-center md:py-8 gap-2">
            <div className="flex flex-col items-center justify-center bg-[white] border border-xl shadow-lg md:p-6 p-4 md:w-[530px] w-[450px] h-[450px] rounded-md">
            <div className="flex flex-col items-center justify-center gap-2">
                <Logo />
                <span className="text-md font-semibold opacity-50">(+92) 3019415211</span>
            </div>
            <form className="flex flex-col md:gap-4 gap-4 md:text-md text-sm font-semibold">
                <div>
                    <label>Fullname</label><br />
                    <input type="text" placeholder="fullname" className="md:w-[450px] w-[420px] h-[40px] focus:outline-0 bg-[#E4E4E4] pl-2 rounded" />
                </div>
                <div>
                    <label>Email</label><br />
                    <input type="email" placeholder="email" className="md:w-[450px] w-[420px] h-[40px] focus:outline-0 bg-[#E4E4E4] pl-2 rounded" />
                </div>
                <div>
                    <label>Password</label><br />
                    <input type="password" placeholder="password" className="md:w-[450px] w-[420px] h-[40px] focus:outline-0 bg-[#E4E4E4] pl-2 rounded" />
                </div>
                <div>
                    <button type="submit" className="bg-[#911287] p-[10px] rounded text-white text-sm font-semibold">Signup Now</button>
                </div>
            </form>
            <div className="flex items-center gap-4 text-md">
                <h1 className="text-md py-4">Already have an account ?</h1>
                <span><Link to="/login" className="font-bold">Login</Link></span>
            </div>
            </div>
        </div>
        </Layout>
    )
}

export default SignUp;