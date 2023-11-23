import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
    username: string
    password: string
}

function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
            <div className='formText'>
                <label htmlFor="username">Username</label>
                <input {...register("username", { required: true })} type="text" id="username" />
            </div>
            <div className='formText'>
                <label htmlFor="password">Password</label>
                <input {...register("password", { required: true })} type="password" id="password" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm