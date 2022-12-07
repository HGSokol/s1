import React, {useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'

interface Data {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
}

type PopupClick = MouseEvent & {
  path: Node[]
}

const Register = () => {
  // контролируемый инпут
  const [value, setValue] = useState<Data>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [dataForm ,setDataForm]  = useState<Data>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [active, setActive] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
  })
  const sortRef1 = useRef<HTMLInputElement | null>(null)
  const sortRef2 = useRef<HTMLInputElement | null>(null)
  const sortRef3 = useRef<HTMLInputElement | null>(null)
  const sortRef4 = useRef<HTMLInputElement | null>(null)
  
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, tag: string) => {
    setValue({
      firstName: tag === 'firstName'? event.target.value: value.firstName,
      lastName: tag === 'lastName'? event.target.value: value.lastName,
      email: tag === 'email'? event.target.value: value.email,
      password: tag === 'password'? event.target.value: value.password,
    });
  }
  
  // отправка данных
  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(value.firstName.length !== 0 || value.lastName.length !== 0 || value.email.length !== 0 || value.password.length !== 0){
      setDataForm({
        ...value
      })
        // f send
      // const dataFrom: Data = {
        //   email: e.currentTarget.email.value,
        //   password: e.currentTarget.password.value
        // }
        // setValue(dataFrom)
        // console.log(dataFrom,'otpavka')
        
        e.currentTarget.reset()
        setActive({
          input1: false,
          input2: false,
          input3: false,
          input4: false,
        })
        setValue({
          firstName: '',
          lastName: '',
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
            input2: value.lastName.length > 0? true: false,
            input3: value.email.length > 0? true: false,
            input4: value.password.length > 0? true: false,
          })
        } else if(sortRef2.current && _event.path.includes(sortRef2.current) ){
          setActive({
            input1: value.firstName.length > 0? true: false,
            input2: true,
            input3: value.email.length > 0? true: false,
            input4: value.password.length > 0? true: false,
          })
        }else if(sortRef3.current && _event.path.includes(sortRef3.current) ){
          setActive({
            input1: value.firstName.length > 0? true: false,
            input2: value.lastName.length > 0? true: false,
            input3: true,
            input4: value.password.length > 0? true: false,
          })
        } else if(sortRef4.current && _event.path.includes(sortRef4.current) ){
          setActive({
            input1: value.firstName.length > 0? true: false,
            input2: value.lastName.length > 0? true: false,
            input3: value.email.length > 0? true: false,
            input4: true,
          })
        } else {
          setActive({
            input1: value.firstName.length > 0? true: false,
            input2: value.lastName.length > 0? true: false,
            input3: value.email.length > 0? true: false,
            input4: value.password.length > 0? true: false,
          })
        }
      }
      
      document.body.addEventListener('click', handleClickOutside)
      return () => document.body.removeEventListener('click', handleClickOutside)
    }, [value])
      
    useEffect(() =>{
      console.log(dataForm, 'данные из формы')
      
    },[dataForm])

  return(
    <div className='mx-auto max-w-sm text-center px-4 relative'>
      <h1 className='font-bold text-3xl mt-20 mb-10'>Health Project</h1>
      <h2 className='font-semibold text-xl mb-5'>Train, Eat & Live better with Chris Hemsworth's team</h2>
      <p className='mb-5'>Save 25% with our Cyber offer on a 12-month plan. Start today with 7 days free.</p>
      <form 
        className='flex flex-col justify-center'
        onSubmit={e => sendForm(e)}>
          <input 
            ref={sortRef1}
            required
            type='text' 
            name='firstName' 
            className='border-2 rounded-md mb-8 h-14 p-3.5'
            value={value.firstName}
            onChange={(event) => onChangeInput(event, 'firstName')}
          />
          <div className={`bg-white w-24 absolute translate-x-4 animate ${active.input1 ?'-translate-y-finput-s text-black scale-75': '-translate-y-finput text-slate-400 '}`}>First name</div>
          <input 
            ref={sortRef2}
            required
            type='text' 
            name='lastName' 
            className='border-2 rounded-md mb-8 h-14 p-3.5'
            value={value.lastName}
            onChange={(event) => onChangeInput(event, 'lastName')}
          />
          <div className={`bg-white w-24 absolute translate-x-4 -translate-y-sinput-s ${active.input2 ?'-translate-y-sinput-s text-black scale-75': '-translate-y-sinput text-slate-400'}`}>Last name</div>
          <input 
            ref={sortRef3}
            required
            type='email' 
            name='email' 
            className='border-2 rounded-md mb-8 h-14 p-3.5'
            value={value.email}
            onChange={(event) => onChangeInput(event, 'email')}
          />
          <div className={`bg-white w-14 absolute translate-x-5 -translate-y-tinput-s ${active.input3 ?'-translate-y-tinput-s text-black scale-75': 'translate-y-tinput text-slate-400'}`}>Email</div>
          <input 
            ref={sortRef4}
            required
            type='password' 
            name='password' 
            className='border-2 rounded-md mb-8 h-14 p-3.5'
            value={value.password}
            onChange={(event) => onChangeInput(event, 'password')}
          />
          <div className={`bg-white w-20 absolute ${active.input4 ?'translate-y-frinput-s text-black scale-75': 'translate-y-frinput text-slate-400'} translate-x-5`}>Password</div>
        <button className='bg-yellow-200 rounded-md mb-4 h-8 hover:bg-yellow-100'>CREATE ACCOUNT</button>
    </form>
    <p>
      Already have an ccount?
      <Link to='/' className='text-blue-400 font-medium hover:text-blue-300'> Log In</Link>
    </p>
  </div>
  )
}

export default Register