'use client'

import React, {ChangeEvent, useState, useContext, useEffect} from 'react'
import {API_URL} from '../../../constants'
import { useRouter } from 'next/router'
import {AuthContext,UserInfo} from '../../../modules/auth_provider'

const index = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const {authenticated } = useContext(AuthContext)

  useEffect(()=>{
    if (authenticated) {
      router.push('/')
      return
    }
  }, [authenticated])

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    console.log(value)
    setEmail(value)
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value
    console.log(value)
    setPassword(value)
  }

  const submitHanlder = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    try {
      const res = await fetch(`${API_URL}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      })

      const data = await res.json()
      if (res.ok) {
        const user: UserInfo = {
          username: data.username,
          id: data.id
        }

        localStorage.setItem('user_info', JSON.stringify(user))
        return router.push('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex items-center justify-center min-w-full min-h-screen'>
      <form className='flex flex-col md:w-1/5'>
        <input type="text" placeholder='email' className='p-3 mt-8 rounded-md border-2 border-border-grey focus:outline-none focus:border-blue' value={email} onChange={handleEmailChange}/>
        <input type="password" placeholder='password' className='p-3 mt-4 rounded-md border-2 border-border-grey focus:outline-none focus:border-blue' value={password} onChange={handlePasswordChange}/>
        <button className='p-3 mt-6 rounded-md bg-blue font-bold text-white' onClick={submitHanlder}>Login</button>
      </form>
    </div>
  )
}

export default index