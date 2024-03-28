import Hero from '../homepage/hero'
import Layout from '../shared/layout'
import Syllabus from './syllabus';

const Homepage = ()=>{
    return (
        <Layout>
            <div className='flex flex-col gap-6'>
                <Hero />
                <Syllabus />
            </div>
        </Layout>
    )
}

export default Homepage;