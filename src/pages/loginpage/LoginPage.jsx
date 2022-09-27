import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [user, setUser] = useState({})
    const admin = {
        username: 'admin',
        password: '1234'
    }

    const login = (e) => {
        let newUser = {
            ...user,
            [e.target.name]: e.target.value
        }
        setUser(newUser)
    }

    const navigate = useNavigate()

    const checkUser = () => {
        if (user.username === admin.username && user.password === admin.password) {
            navigate('/semifinished')
        } else {
            alert('Please try again!')
        }
    }

    return (
        <div className='login-page'>
            <div className="login-body">
                <div className="login-body-header">
                    <h1>Система учёта товаров</h1>
                    <p>Please enter your user information</p>
                    <p>Пожалуйста, введите свои учетные данные</p>
                </div>
                <div className="login-body-form">
                    <form onSubmit={() => checkUser()}>
                        <input type="text" name="username" placeholder="Username" onChange={login} />
                        <input type="password" name="password" placeholder="Password" onChange={login} />
                        <button>SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;