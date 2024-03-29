import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context/auth";

const Login = () => {

    const {setIsAuth} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
           <h1>Page for log in</h1>

            <form onSubmit={login}>
                <MyInput type="text" placeholder="Enter your login"/>
                <MyInput type="password" placeholder="Enter your password"/>
                <MyButton>Log in</MyButton>
            </form>

        </div>
    );
};

export default Login;