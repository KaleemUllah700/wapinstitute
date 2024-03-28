const Hero = ()=>{
    return (
        <div className="grid md:grid-cols-2 pt-10 flex md:gap-16 gap-8">
           <div className="flex flex-col gap-4 pl-4">
                <h1 className="text-3xl font-bold">Rs.1,000 Monthly</h1>
                <p className="md:text-md text-xs font-semibold opacity-90">Read Html, Css, Bootstrap, JavaScript, Angular, React, Python, NodeJs, Php, Laravel, .Net, MongoDb, Aws Cloud, C++, Java.</p>
                <h1 className="md:text-5xl text-4xl font-bold">Advanced Diploma In</h1>
                <h1 className="md:text-5xl text-4xl font-bold text-[#3DA8E9]">In Software Engineering</h1>
           </div>
           <div className="bg-[#F9C6F3] p-6 w-[530px] h-[350px] rounded-md">
                <h1 className="text-xl font-semibold">Apply for admission</h1>
                <span className="text-md font-semibold opacity-50">(+92) 3019415211</span>
                <form className="flex flex-col gap-4 text-md font-semibold">
                    <div>
                        <label>Fullname</label><br />
                        <input type="text" placeholder="fullname" className="w-[450px] h-[40px] focus:outline-0 bg-[#E4E4E4] pl-2 rounded" />
                    </div>
                    <div>
                        <label>Email</label><br />
                        <input type="email" placeholder="email" className="w-[450px] h-[40px] focus:outline-0 bg-[#E4E4E4] pl-2 rounded" />
                    </div>
                    <div>
                        <label>Password</label><br />
                        <input type="password" placeholder="password" className="w-[450px] h-[40px] focus:outline-0 bg-[#E4E4E4] pl-2 rounded" />
                    </div>
                    <button type="submit" >Signup Now</button>
                </form>
           </div>
        </div>
    )
}

export default Hero;