const Projects = ()=>{

    const projectname = [
        {
            title: 'Video Player',
            description: 'Learn to build html5 custom video player',
            lang: 'JavaScript'
        },
        {
            title: 'Video Player',
            description: 'Learn to build html5 custom video player',
            lang: 'JavaScript'
        },
        {
            title: 'Video Player',
            description: 'Learn to build html5 custom video player',
            lang: 'Reactjs'
        }
    ]

    return (
        <div>
            <div className="flex flex-col gap-4 text-center px-24">
                <h1 className="md:text-4xl text-md font-bold">Projects In Software Engineering Course</h1>
                <p className="md:text-lg text-sm font-semibold opacity-80">For building logics in programming languages we will develop lots of Websites, Mobile apps, Desktop apps, Server programs, Video streaming engine, Network centric apps, Audio Video chat apps and much more</p>
            </div>
                <div className="grid md:grid-cols-3 p-4 flex md:gap-8 gap-4">
                    {
                        projectname.map((project, index)=>(
                            <div className="flex flex-col items-center justify-center gap-2 w-[100%] h-[200px] border shadow-md text-center rounded-md px-4" key={index}>
                                <h1 className="md:text-3xl text-xl font-bold">{project.title}</h1>
                                <span className="block md:text-md text-sm font-semibold opacity-80">{project.description}</span>
                                <button className="text-[orange] text-lg font-semibold">{project.lang}</button>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Projects;