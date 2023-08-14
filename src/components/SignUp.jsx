import React from 'react'
import { CrossIcon } from './icon';
import { closeModal } from '../features/modalSlicer';
import { useDispatch } from 'react-redux';


const SignUp = () => {
    const dispatch = useDispatch()
    document.title = "Sign up for Twitter / X"

    const currentYear = new Date().getFullYear()
    const yearOptions = [];
    for (let year = currentYear; year >= 1900; year--) {
        yearOptions.push(<option key={year} value={year}>{year}</option>);
    }

    const startDate = 1
    const endDate = 31
    const date = []
    for (let day = startDate; day <= endDate; day++) {
        date.push(<option key={day} value={day}> {day} </option>)
    }

    return (
        <aside className='modal-container'>
            <div className='modal bg-white rounded-[20px] w-[40rem] relative h-[700px] flex flex-col'>
                <h3 className='font-bold text-xl mt-1 ml-16'>Step 1 of 5</h3>
                <h4 className='font-bold text-3xl mt-20  ml-28'>Create your account</h4>
                <form action="" className='flex flex-col  items-start ml-28 mt-9'>
                    <input className='border border-gray-500 rounded py-3 w-100 w-[450px] px-3 focus:outline-none focus:ring focus:border-sky-500 ' type="text" placeholder='Name' />
                    <input className='border border-gray-500 rounded py-3 mt-7 w-100 w-[450px] px-3 focus:outline-none focus:ring focus:border-sky-500' type="Email" placeholder='Email' />
                    <div className='mt-10'>
                        <p className='font-bold'>Date of birth</p>
                        <p className='text-gray-500 w-[450px] my-2 '>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</p>
                        <div className='mt-5'>
                            <select name="" id="" className='months border  border-gray-500 rounded py-3 w-100 w-[180px] px-3 cursor-pointer focus:outline-none focus:ring focus:border-sky-500'>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                            <select name="" id="" className='border border-gray-500 rounded mx-3 py-3 w-100 w-[70px] px-3 cursor-pointer focus:outline-none focus:ring focus:border-sky-500'>
                                {date}
                            </select>
                            <select name="" id="" className='border border-gray-500 rounded py-3 w-100 w-[100px] px-3 cursor-pointer focus:outline-none focus:ring focus:border-sky-500'>
                                {yearOptions}
                            </select>
                        </div>
                    </div>
                    <div className="flex   justify-center">
                        <button
                            type='submit'
                            disabled
                            className='bg-black disabled:bg-gray-500  w-[440px] text-white mt-32  rounded-full py-3 font-bold text-center'
                        >
                            Next
                        </button>
                    </div>
                </form>



                <button
                    type='button'
                    className='absolute flex top-2 left-2 hover:bg-gray-200 hover:rounded-full '
                    onClick={() => {
                        dispatch(closeModal());
                    }}
                >
                    <CrossIcon />
                </button>

            </div>
        </aside>
    )
}

export default SignUp
