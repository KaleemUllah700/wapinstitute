import Hero from '../homepage/hero'
import Layout from '../shared/layout'
import Certification from './certification';
import CoursesFee from './coursesfee';
import Projects from './projects';
import Syllabus from './syllabus';

const Homepage = ()=>{
    return (
        <Layout>
            <div className='flex flex-col gap-12'>
                <Hero />
                <Syllabus />
                <CoursesFee />
                <Certification />
                <Projects />
            </div>
        </Layout>
    )
}

export default Homepage;