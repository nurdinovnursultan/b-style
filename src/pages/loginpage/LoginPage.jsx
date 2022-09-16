import React from 'react';

const LoginPage = () => {
    return (
        <div className='login-page'>
            <div className="login-body">
                <div className="login-body-header">
                    <h1>Система учёта товаров</h1>
                    <p>Please enter your user information</p>
                    <p>Пожалуйста, введите свои учетные данные</p>
                </div>
                <div className="login-body-form">
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button>SIGN IN</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;