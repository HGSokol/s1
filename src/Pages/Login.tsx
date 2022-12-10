import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { AiOutlineEye } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
import { HeaderForm } from "../components/HeaderForm";
import { Link } from "react-router-dom";

interface IFormInputs {
  email: string
  password: number
}

const schema = yup.object({
  email: yup.string().email('Не правильный email').required(),
  password: yup.string()
  .required('Обязательное поле') 
  .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
  .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters.')
}).required();

const Login = () => {
  const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInputs) => {
      alert(JSON.stringify(data))
      reset()
  };

  return (
    <div className='mx-[16px]'>
      <HeaderForm />
      <h1 className='font-serif font-600 text-[22px] leading-[26.25px] text-center mb-[32px]'>Вход</h1>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-[10px]'>
        <div className=''>
          <input 
            placeholder='Введите e-mail'
            type='text' 
            {...register("email")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA]' />
            <p className='text-red-600'>{errors.email?.message}</p>
        </div>
        <div className='relative mb-[14px]'>
          <div className='absolute translate-x-[250px] translate-y-[14px] '><AiOutlineEye size='20px' color='#AAAAAA'/></div>
          <input 
            placeholder='Введите пароль' 
            type='password' 
            {...register("password")} 
            className='outline-none w-full h-[48px] px-[16px] rounded-[8px] bg-white border-[1px] border-[#1F211714] placeholder:text-[12px] placeholder:font-[400] placeholder:text-[#AAAAAA]'/>
            <p className='text-red-600'>{errors.password?.message}</p>
        </div> 
        <Link to='/' className='mb-[32px]'>
          <p className='text-[12px] text-[#777872] font-[600] text-end'>Забыли пароль?</p>
        </Link>  
        <div className='mb-[36px]'>
          <button type="submit" disabled={!isValid} className={`${ isValid === true ? ' bg-[#FFB700]': ' bg-[#FFB700]/40'} mb-[20px] w-full h-[42px] py-[14px] px-[18px] text-[12px] text-white font-[600] rounded-[40px]`}>
            Войти
          </button>
          <div className='flex flex-row justify-center px-[8.5px] gap-[8px]'>
            <p className='text-[12px] text-[#777872] font-[400]'>У вас уже есть аккаунт? </p>
            <Link to='/registration'>
              <p className='text-[12px] text-[#000000] font-[600]'>Зарегистрироваться</p>
            </Link>
          </div>
        </div>
        <div className='mb-[162px]'>
          <h4 className='text-center text-[12px] text-[#777872] font-[400] mb-[14px]'>Войти с помощью</h4>
          <div className='flex flex-row gap-[30px] justify-center'>
            <div className='w-[50px] h-[50px] rounded-[10px] bg-[#1877F2] grid place-content-center'><FaFacebook size='24px' fill='white'/></div>
            <div className='w-[50px] h-[50px] rounded-[10px] bg-white border-[1px] grid place-content-center'><FcGoogle size='24px' /></div>
            <div className='w-[50px] h-[50px] rounded-[10px] bg-black grid place-content-center'><BsApple size='24px' fill='white'/></div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login