import { useForm, SubmitHandler } from "react-hook-form"

type FormValues = {
    username: string
}

function LoginForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
            <div className='formText'>
                <label htmlFor="username">Username</label>
                <input {...register("username", { required: true })} type="text" id="username" />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm