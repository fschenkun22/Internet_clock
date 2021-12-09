import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const login = () => {
        navigate('/user')
    }

    return (
        <div>
            login
            <Button onClick={login}>登录</Button>
        </div>
    )
}

export default Login
