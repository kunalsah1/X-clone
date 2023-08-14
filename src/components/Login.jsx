import React from 'react'
import { useDispatch } from 'react-redux';
import { CrossIcon } from './icon';
import { closeLoginModal } from '../features/loginModal';
import { openModal } from '../features/modalSlicer';



const Login = () => {
    const dispatch = useDispatch()
    document.title = "Log in to Twitter / X"

    return (
        <aside className='modal-container'>
            <div className='modal bg-white rounded-[20px] w-[40rem] relative h-[700px] flex  flex-col items-center '>

                <h4 className='font-bold text-3xl mt-20  '>Sign in to X</h4>
                <form action="" className='flex flex-col items-center justify-center  mt-9'>
                    <input className='border border-gray-500 rounded py-3 mt-7  w-[300px] px-3 focus:outline-none focus:ring focus:border-blue-400' type="Email" placeholder='Phone,Email, or Username' />

                    <div className="flex flex-col  ">
                        <button
                            type='submit'
                            className=' bg-black w-[300px] text-white mt-11  rounded-full py-2 font-bold text-center'
                        >
                            Next
                        </button>
                        <button className='rounded-full w-[300px] h-10 font-bold hover:bg-gray-200  mt-10 border border-neutral-300'>Forget password?</button>
                    </div>

                    <p className='mt-[100px]  w-[300px] text-gray-500'>Don't have an account? <a href="#" className='text-blue-600 hover:underline' onClick={() => {
                        dispatch(openModal())
                        dispatch(closeLoginModal())
                    }} >Sign up</a> </p>
                </form>

                <button
                    type='button'
                    className='absolute flex top-2 left-2 hover:bg-gray-200 hover:rounded-full '
                    onClick={() => {
                        dispatch(closeLoginModal());
                    }}
                >
                    <CrossIcon />
                </button>

            </div>
        </aside>
    )
}

export default Login
