import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
    }
  return (
    <>
    <div className='bg-[url(https://t4.ftcdn.net/jpg/04/39/13/37/360_F_439133763_FrLdhZsd5aGC23r9ATARuKJBr8ifZjIe.jpg)] bg-no-repeat bg-center bg-cover flex items-center justify-start h-screen w-screen'>
        <div className='p-20  m-20 border-blue-200'>
            <form 
            onSubmit={(e)=>{
                handleSubmit(e)
            }}
            className='flex flex-col items-center justify-center'>
            <input value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className='mt-15  text-white bg-transparent rounded-md  w-full px-1 py-2 border-2 border-blue-600 text-center' type="email" placeholder='Enter your email' />
            <input value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='mt-3 text-white bg-transparent rounded-md  w-full px-1 py-2 border-2 border-blue-600 text-center' type="password" placeholder='Enter your password' />
            <button 
            className='border-2 border-blue-600 mt-5 w-full rounded-md bg-blue-500 px-1 py-2 text-white'>Login</button>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login
