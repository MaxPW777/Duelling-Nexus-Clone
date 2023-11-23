import { useForm, SubmitHandler } from "react-hook-form"
import CryptoJS from 'crypto-js';
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
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(JSON.stringify({user : data}))
        fetch(`http://localhost:3001/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user : data }), // Envelopper les données dans un objet
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                console.log(data);
                // Chiffrez l'ID de l'utilisateur avant de le stocker dans le localStorage
                const encryptedUserId = CryptoJS.AES.encrypt(data.user.ID.toString(), 'your-secret-key').toString();
                localStorage.setItem('userId', encryptedUserId);          
                // Récupérez l'ID chiffré depuis le localStorage
            }
            
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
            <div className='formText'>
                <label htmlFor="username">Username</label>
                <input {...register("username", { required: true })} type="text" id="username" />
            </div>
            <button className="loginSubmitButton" type="submit">Login</button>
        </form>
    )
}

export default LoginForm