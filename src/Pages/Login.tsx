import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { HeaderForm } from "../components/HeaderForm";

interface IFormInputs {
  email: string
  password: number
}

const schema = yup.object({
  email: yup.string().email('Не правильный email'),
  password: yup.string()
  .required('Обязательное поле') 
  .min(8, 'Пароль слишком короткий - минимум 8 знаков.')
  .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters.')
}).required();

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => {
      console.log(JSON.stringify(data))
    };

  return (
    <>
      <HeaderForm />
      <form onSubmit={handleSubmit(onSubmit)} className='bg-slate-400 w-min mx-auto'>
        <div className='px-[10px] mb-[37px]'>
          <p className='font-[600] text-[20px] text-[#443E3E] leading-[23.87px] mb-[10px]'>E-mail</p>
          <input 
            placeholder='Введите имя' 
            type='text' 
            {...register("email")} 
            className='outline-none w-[412px] h-[60px] py-[18px] px-[20px] rounded-[7px]' />
          <p className='text-red-600'>{errors.email?.message}</p>
        </div>
        <div className='px-[10px] mb-[37px]'>
          <p className='font-[600] text-[20px] text-[#443E3E] leading-[23.87px] mb-[10px]' >Пароль</p>
          <input 
            placeholder='Введите имя' 
            type='password' 
            {...register("password")} 
            className='outline-none w-[412px] h-[60px] py-[18px] px-[20px] rounded-[7px]'/>
          <p className='text-red-600'>{errors.password?.message}</p>
        </div>        
        <input type="submit" />
      </form>
    </>
  );
}

export default Login