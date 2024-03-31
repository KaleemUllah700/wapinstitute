import Logo from '../shared/logo'

const Verfication = ()=>{
    return (
        <div className='flex flex-col items-center justify-center h-min-screen py-24'>
            <div className='w-[400px] h-[280px] border border-md shadow-md'>
                <div className='shadow p-2'>
                    <Logo />
                </div>
                <div className='flex flex-col gap-2 mt-8 mx-[5%]'>
                    <h1 className='text-xl font-semibold opacity-80'>Certificate Verification</h1>
                    <input type='text' className='w-[95%] h-[45px] border border-xl px-2' placeholder='Enter Reg/id' />
                    <div>
                        <button type='submit' className='bg-[#596FEB] px-4 py-2 mt-4 text-white font-semibold'>VERIFY</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verfication;