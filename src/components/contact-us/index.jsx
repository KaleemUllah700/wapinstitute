import Layout from '../shared/layout'

const ContactUs = ()=>{

    const contact = [
        {
            icon: 'fa fa-phone text-[red]',
            contact: '(+92) 03019415211'
        },
        {
            icon: 'fa fa-address-book-o text-[blue]',
            contact: 'District Lakki Marwat, KPK'
        },
        {
            icon: 'fa fa-envelope-o text-[orange]',
            contact: 'lakki@gmail.com'
        }
    ] 

    return (
        <Layout>
            <div className='flex items-center justify-center min-h-screen'>
                    <div className='flex flex-col gap-6 md:w-[35%] w-[90%] h-[290px] bg-[#F7DDF6] rounded-md p-8 shadow-xl'>
                        <h1>Contact Us</h1>
                        
                        {
                            contact.map((cont, index)=>(
                                <div className='flex items-center gap-6' key={index}>
                                    <button className='w-[40px] h-[40px] bg-[#FCE1C1] rounded-full'><i className={cont.icon}></i></button>
                                    <span className='text-lg'>{cont.contact}</span>
                                </div>
                            ))
                        }

                    </div>                    
            </div>
        </Layout>
    )
}

export default ContactUs;