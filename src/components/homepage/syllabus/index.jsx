const Syllabus = ()=>{

    const Semester_1 = [
        {
            img: 'images/s1_pic1.webp',
            label: 'Software Engineering Fundamentals'
        },
        {
            img: 'images/s1_pic2.webp',
            label: 'Computer Fundamentals'
        },
        {
            img: 'images/s1_pic3.webp',
            label: 'Pc Configuration And Setups'
        },
        {
            img: 'images/s1_pic4.webp',
            label: 'HTML 4 And Photoshop'
        },
        {
            img: 'images/s1_pic5.webp',
            label: 'CSS 3 And Photoshop'
        },
        {
            img: 'images/s1_pic6.webp',
            label: 'Javascript'
        },
        {
            img: 'images/s1_pic7.webp',
            label: 'Bootstrap'
        }
    ]

    
    const Semester_2 = [
        {
            img: 'images/s2_pic1.webp',
            label: 'Sql Language'
        },
        {
            img: 'images/s2_pic2.webp',
            label: 'Php And Mysql'
        },
        {
            img: 'images/s2_pic3.webp',
            label: 'Api Training'
        },
        {
            img: 'images/s2_pic4.webp',
            label: 'Wordpress'
        },
        {
            img: 'images/s2_pic5.webp',
            label: 'Laravel'
        }
    ]

    return (
        <div>
            <h1 className="md:text-4xl text-3xl font-bold">Software Engineering Syllabus</h1>
            <div className="grid md:grid-cols-2 p-4 pt-8">
                <div className="flex flex-col gap-4 w-[99%] h-[400px] p-4 border border-md shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center">Semester 1</h1>
                {
                    Semester_1.map((semester, index)=>(
                    <div className="flex flex-col gap-4" key={index}>
                        <div className="flex items-center gap-4 text-md font-semibold">
                            <img src={semester.img} alt="s1_pic" />
                            <span>{semester.label}</span>
                        </div>
                    </div>
                    ))
                }  
                </div>
                <div className="flex flex-col gap-4 w-[99%] h-[320px] p-4 border border-md shadow-md rounded-lg">
                <h1 className="text-2xl font-bold text-center">Semester 2</h1>
                    {
                    Semester_2.map((semester, index)=>(
                    <div className="flex flex-col gap-4" key={index}>
                        <div className="flex items-center gap-4 text-md font-semibold">
                            <img src={semester.img} alt="s2_pic" />
                            <span>{semester.label}</span>
                        </div>
                    </div>
                    ))
                } 
                </div>
            </div>
        </div>
    )
}

export default Syllabus;