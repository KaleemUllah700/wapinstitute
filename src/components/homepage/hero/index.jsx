import { Link } from "react-router-dom";

const Hero = ()=>{
    return (
        <div className="grid md:grid-cols-2 md:pt-10 pt-6 flex md:gap-16 gap-8">
           <div className="flex flex-col gap-6 pl-4">
                <h1 className="text-3xl font-bold">Rs.1,000 Monthly</h1>
                <p className="md:text-md md:text-lg text-xs font-semibold opacity-90">Read Html, Css, Bootstrap, JavaScript, Angular, React, Python, NodeJs, Php, Laravel, .Net, MongoDb, Aws Cloud, C++, Java.</p>
                <h1 className="md:text-5xl text-4xl font-bold">Advanced Diploma</h1>
                <h1 className="md:text-5xl text-4xl font-bold text-[#3DA8E9]">In Software Engineering</h1>
           </div>
           <div className="bg-[#F9C6F3] md:p-6 p-4 md:w-[530px] w-[450px] h-[400px] rounded-md">
                <h1 className="md:text-xl text-lg font-semibold">Apply for admission</h1>
                <span className="text-md font-semibold opacity-50">(+92) 3019415211</span>
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
    )
}

export default Hero;