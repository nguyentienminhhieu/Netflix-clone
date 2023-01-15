import { async } from '@firebase/util'
import React,{useState} from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/')
        } catch (error) {
            // alert
            console.log(error);
        }
    }
  return (
    <>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/e89c9679-2f5f-491d-924c-c58924a8ee4b/b059ba59-7ad6-4d88-9d0d-41262a5072ff/VN-vi-20221121-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-none' type="email" placeholder='Email ' autoComplete='email' />
                        <input onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded outline-none' type="password" placeholder='Password' autoComplete='current-password'/> 
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input className='mr-2' type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-6 '><span className='px-2 text-sm text-gray-600'>Already subscribed to Netflix?</span>
                        <Link to='/login'>
                         Sign In
                        </Link>
                         </p>
                    </form>
                </div>
            </div>
        </div>


        {/* <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[900px] h-[600px] mx-auto bg-black/75 text-white'> 
                <div className='mx-auto py-32 text-center' >
                    <h1 className='text-6xl font-bold'>Unlimited movies, TV <br></br>shows, and more.</h1>
                    <h3 className='text-2xl py-6'>Watch anywhere. Cancel anytime</h3>
                    <h3 className='text-lg py-5'>Ready to watch? Enter your email to create or restart your membership.</h3>
                    <form onSubmit={handleSubmit} className='w-4/6 flex flex-col px-24'>
                        <input onChange={(e) => setEmail(e.target.value)} className='p-5 my-2 bg-white-700 text-black rounded outline-none' type="email" placeholder='Email ' autoComplete='email' />
                        <button className='bg-red-600 p-5 rounded font-bold'>Sign Up</button>
                    </form>
                </div>  
            </div>
        </div> */}
    </div>
    </>
  )
}

export default Signup