import Layout from '../shared/layout'

const Courses = ()=>{

    const courses = [
        {
            img: 'images/react',
            title: '',
            oldprice: '',
            discount: '',
            newprice: ''
        }
    ]

    return (
        <Layout>
            <div className='grid grid-cols-4 py-16 mx-12'>

                <div className='w-[280px] h-[240px] flex flex-col gap-2 border border-lg shadow-xl pb-4'>
                    <img src='images/react.webp' alt='course1' className='w-[280px] h-[250px]' />
                    <span className='text-lg font-semibold pl-2'>Reactjs And Nextjs</span>
                    <div className='flex gap-2 text-md font-semibold pl-2'>
                        <span>Rs.2799</span>
                        <span><del>Rs.4000</del></span>
                        <span>(30% OFF)</span>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default Courses;
