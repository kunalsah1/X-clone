import React from 'react'
import { openModal } from './features/modalSlicer';
import { openLoginModal } from './features/loginModal';
import { useDispatch } from 'react-redux';
import { MainLogo } from './components/icon';

const Twitter = () => {
    const dispatch = useDispatch()
    document.title = "Twitter. It's what's happening / X"
    return (
        <>
            <div className='container-1 flex  justify-around items-center h-screen' >

                <div className="logo w-96">
                    <MainLogo />
                </div>
                <div className='page-content py-10 h-full flex flex-col  justify-start items-start'>
                    <h1 className=' font-extrabold text-6xl mt-[150px] '>Happening now</h1>
                    <h3 className='text-3xl font-extrabold my-14'>Join today.</h3>
                    <button className='rounded-full w-72 hover:bg-sky-600 hover:text-white text-white font-bold h-10 bg-sky-500'
                        onClick={() => { dispatch(openModal()) }}>Create account</button>
                    <p className='terms text-[12px] text-gray-500 w-96 mt-1'>By signing up, you agree to the <a href="#" className='text-sky-500 hover:underline'> Terms of Service</a> and <a href="#" className='text-sky-500 hover:underline'> Privacy Policy </a>, <a href="#" className='text-sky-500 hover:underline'> including Cookie Use</a>.</p>
                    <p className='font-bold mt-16'>Already have an account?</p>
                    <button className='rounded-full w-72 h-10 font-bold hover:bg-blue-50 text-sky-500 mt-5 border border-neutral-300' onClick={() => { dispatch(openLoginModal()) }}>Sign in</button>
                </div>
            </div>
        </>
    )
}

export default Twitter
