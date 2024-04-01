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
        },
        {
            title: 'E-Commerce',
            description: 'Learn to build html5 custom video player',
            lang: 'Reactjs'
        },
        {
            title: 'Build maj',
            description: 'Learn to build html5 custom video player',
            lang: 'Nodedjs'
        }
    ]

    return (
        <div>
            <div className="flex flex-col gap-4 text-center px-24">
                <h1 className="text-4xl font-bold">Projects In Software Engineering Course</h1>
                <p className="text-lg font-semibold opacity-80">For building logics in programming languages we will develop lots of Websites, Mobile apps, Desktop apps, Server programs, Video streaming engine, Network centric apps, Audio Video chat apps and much more</p>
            </div>
                <div className="p-4 flex gap-8">
                    {
                        projectname.map((project, index)=>(
                            <div className="flex flex-col items-center justify-center gap-2 w-[100%] h-[200px] border shadow-md text-center rounded-md px-4" key={index}>
                                <h1 className="text-3xl font-bold">{project.title}</h1>
                                <span className="block text-md font-semibold opacity-80">{project.description}</span>
                                <button className="text-[orange] text-lg font-semibold">{project.lang}</button>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Projects;