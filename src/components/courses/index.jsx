import Layout from '../shared/layout'

const Courses = ()=>{

    const courses = [
        {
            img: 'images/react.webp',
            title: 'reactjs and nextjs',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/reactjs.webp',
            title: 'reactjs and nextjs',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/js.webp',
            title: 'JavaScript',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/webdev.webp',
            title: 'Web Development',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/mern.webp',
            title: 'Advance MERN',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/java.webp',
            title: 'Advance JAVA',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/angular.webp',
            title: 'Angularjs and Vuejs',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/aws.webp',
            title: 'AWS Cloud Computing',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/se.webp',
            title: 'Software Engineering',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/laravel.webp',
            title: 'Complete Laravel',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/nodejs.webp',
            title: 'Nodejs with Projects',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/php.webp',
            title: 'PHP and MYSQL',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/python.webp',
            title: 'Python and DS',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/git.webp',
            title: 'Git and Github',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        },
        {
            img: 'images/rn.webp',
            title: 'React and Native',
            oldprice: 'RS.4000',
            discount: '(30% OFF)',
            newprice: 'RS.2799'
        }

    ]

    return (
        <Layout>
            <div>
                <h1 className='md:text-4xl text-xl font-bold text-[#F16B0E] text-center md:pt-12 pt-8'>MOST TRENDING COURSE IN IT INDUSTRY</h1>
                <div className='grid md:grid-cols-4 md:py-16 py-8 md:mx-12 mx-8 flex flex-col md:gap-16 gap-8'>
                    {
                        courses.map((course, index)=>(
                            <div className='w-[280px] h-[240px] flex flex-col gap-2 border border-lg shadow-xl pb-4' key={index}>
                                <img src={course.img} alt='course1' className='w-[280px] h-[250px]' />
                                <span className='text-lg font-semibold pl-2'>{course.title}</span>
                                <div className='flex gap-2 text-md font-semibold pl-2'>
                                    <span>{course.newprice}</span>
                                    <span><del>{course.oldprice}</del></span>
                                    <span>{course.discount}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Courses;
