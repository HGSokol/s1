import React, { useEffect ,useState, useRef } from 'react'
import { Link } from "react-router-dom"

interface Data {
  email: string,
  password: string,
}

type PopupClick = MouseEvent & {
  path: Node[]
}

const Login = () => {
  // контролируемый инпут
  const [dataForm ,setDataForm]  = useState<Data>({
    email: '',
    password: '',
  })
  const [value, setValue] = useState<Data>({
    email: '',
    password: '',
  })
  const [active, setActive] = useState({
    input1: false,
    input2: false
  })
  const sortRef1 = useRef<HTMLInputElement | null>(null)
  const sortRef2 = useRef<HTMLInputElement | null>(null)

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, tag: string) => {
    setValue({
      email: tag === 'email'? event.target.value: value.email,
      password: tag === 'password'? event.target.value: value.password,
    });
  }

// отправка данных
  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(value.email.length !== 0 || value.password.length !== 0){
  
      setDataForm({
        ...value
      })

      // fetch(`http://localhost:3000`,{
      //   method: "POST",
      //   headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({...dataForm}),
      // })
        
        e.currentTarget.reset()
        setActive({
          input1: false,
          input2: false,
        })
        setValue({
          email: '',
          password: '',
        })
      }
    }
    
    // на инпуте или нет
    useEffect(() => { 
      const handleClickOutside = (e: MouseEvent) => {
        const _event = e as PopupClick
        
        if(sortRef1.current && _event.path.includes(sortRef1.current) ){
          setActive({
            input1: true,
            input2: value.password.length > 0? true: false,
        })
        } else if(sortRef2.current && _event.path.includes(sortRef2.current) ){
        setActive({
          input1: value.email.length > 0? true: false,
          input2: true,
        })
      } else {
        setActive({
          input1: value.email.length > 0? true: false,
          input2: value.password.length > 0? true: false,
        })
      }
    }
    
    document.body.addEventListener('click', handleClickOutside)
    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [value])
  
  useEffect(() =>{
    console.log(dataForm, 'данные из формы')
  },[dataForm])
 return (
  <div className='mx-auto max-w-sm text-center px-4 relative'>
    <h1 className='font-bold text-3xl mt-20 mb-10'>Health Project</h1>
    <h2 className=' font-semibold text-xl mb-10'>Welcome Back</h2>
    <form 
      className='flex flex-col justify-center'
      onSubmit={e => sendForm(e)}>
        <input 
          ref={sortRef1}
          required
          type='email' 
          name='email' 
          className='border-2 rounded-md mb-8 h-14 p-3.5'
          value={value.email}
          onChange={(event) => onChangeInput(event, 'email')}
        />
        <div className={`bg-white w-12 absolute ${active.input1 ?'-translate-y-two text-black scale-75': '-translate-y-one text-slate-400'} translate-x-4 animate duration-[300ms]`}
        onClick={() => {
          sortRef1.current?.focus()
          setActive({
            input1: true,
            input2: value.password.length > 0? true: false,
        })}}>Email</div>
        <input 
          ref={sortRef2}
          required
          type='password' 
          name='password' 
          className='border-2 rounded-md mb-8 h-14 p-3.5'
          value={value.password}
          onChange={(event) => onChangeInput(event, 'password')}
        />
        <div className={`bg-white w-20 absolute ${active.input2 ?'-translate-y-6 text-black scale-75 ': 'translate-y-1 text-slate-400'} translate-x-3 duration-[300ms]`}>Password</div>
        <button className='bg-yellow-200 rounded-md mb-4 h-8 hover:bg-yellow-100 duration-[700ms]'>LOG IN</button>
    </form>
    <p>
      Don't have an account? 
      <Link to='/registration' className='text-blue-400 font-medium hover:text-blue-300'> Sign Up</Link>
    </p>
  </div>
 )
}

export default Login