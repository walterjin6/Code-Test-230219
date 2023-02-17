import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const userRef = useRef<any>()
  const errRef = useRef<any>()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [username, password])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

  }

  const handleUserInput = (e: React.FormEvent<HTMLInputElement>) =>
    setUsername(e.currentTarget.value)
  const handlePwdInput = (e: React.FormEvent<HTMLInputElement>) =>
    setPassword(e.currentTarget.value)
  const handleBack = () => navigate(-1)
  const errClass = errMsg
    ? 'text-xl font-bold text-red-700 justify-center items-center text-center'
    : 'hidden'

  //if (isLoading) return <PulseLoader color={"#FFF"} />

  const content = (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <button
            className='w-[150px] border px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
            onClick={handleBack}
          >
            BACK
          </button>
        </section>
      ) : (
        <section className='flex flex-col items-center justify-around px-6 pt-6 mx-auto  lg:py-0'>
          <header>
            <h1 className='text-xl font-bold '>User Login</h1>
          </header>
          <main className='login'>
            <p ref={errRef} className={errClass} aria-live='assertive'>
              {errMsg}
            </p>

            <form
              className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'
              onSubmit={handleSubmit}
            >
              <label htmlFor='username' className='py-2'>
                Username: [input "admin" for testing purpose]
              </label>
              <input
                className=' border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 '
                type='text'
                id='username'
                ref={userRef}
                value={username}
                onChange={handleUserInput}
                autoComplete='off'
                aria-label='username'
                required
              />

              <label htmlFor='password' className='py-2'>
                Password: [input "12345" for testing purpose]
              </label>
              <input
                className=' border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                type='password'
                id='password'
                onChange={handlePwdInput}
                value={password}
                autoComplete='off'
                aria-label='password'
                required
              />
              <div className='flex justify-between gap-10'>
                <button
                  className='w-1/2 px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
                  type='submit'
                  role='button'
                  name='submit'
                >
                  SUBMIT
                </button>
                <button
                  className='w-1/2 border px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900'
                  onClick={handleBack}
                >
                  CANCEL
                </button>
              </div>
            </form>
          </main>
        </section>
      )}
    </>
  )

  return content
}
export default Login
