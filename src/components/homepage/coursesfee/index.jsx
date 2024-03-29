const CoursesFee = ()=>{

    const monthlyfee = [
        {
            label: 'Daily video limit 2',
            icon: 'fa fa-check'
        },
        {
            label: 'Downloadable video content',
            icon: 'fa fa-check'
        },
        {
            label: 'Help & Ticket Supports',
            icon: 'fa fa-check'
        },
        {
            label: 'Lifetime profile access',
            icon: 'fa fa-check'
        },
        {
            label: '6 Months free internship',
            icon: 'fa fa-check'
        }
    ]

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-center">
                <h1 className="md:text-4xl text-3xl font-bold">Software Engineering Course Fee</h1>
                <p className="md:text-md text-sm font-semibold opacity-80">Compare features with all plans and make the right decision, if you are a beginner in coding then choose a monthly plan</p>
            </div> 
            <div className="grid md:grid-cols-3 flex flex-col gap-4">
                    <div className="flex flex-col items-center">
                        <img src="images/coursefee1.webp" alt="coursefee1" />
                    </div>
                    <div>

                        <div className="w-[100%] h-[600px] bg-[#3BFDA8] rounded-md">
                            <div className="flex flex-col gap-4 w-[100%] h-[600px] bg-[white] rounded-[30%] py-12">
                                <h1 className="text-4xl text-center font-semibold">Easy Monthly Fee</h1>
                                {
                                    monthlyfee.map((monthly, index)=>(
                                        <div className="flex items-center py-2 mx-8" key={index}>
                                            <div className="flex items-center justify-center gap-4">
                                                <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#3BFDA8] rounded-full text-2xl text-white">
                                                    <i className={monthly.icon}></i>
                                                </div>
                                                <span className="text-lg font-semibold">{monthly.label}</span>
                                            </div>
                                        </div>
                                    ))
                                }
                            <h1 className="text-4xl font-bold text-center">PKR 1,000</h1>
                            <span className="text-2xl font-bold text-center">Monthly</span>
                            </div>
                        </div>

                    </div>
                    <div className="flex flex-col items-center">
                        <img src="images/coursefee2.webp" alt="coursefee2" />
                    </div>
            </div> 
        </div>
    )
}

export default CoursesFee;