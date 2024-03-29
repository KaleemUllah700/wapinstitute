import Hero from '../homepage/hero'
import Layout from '../shared/layout'
import Certification from './certification';
import CoursesFee from './coursesfee';
import Syllabus from './syllabus';

const Homepage = ()=>{
    return (
        <Layout>
            <div className='flex flex-col gap-8'>
                <Hero />
                <Syllabus />
                <CoursesFee />
                <Certification />
            </div>
        </Layout>
    )
}

export default Homepage;