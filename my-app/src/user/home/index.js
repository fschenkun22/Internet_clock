import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            home
            <ul>
                <li><Link to={'/user/detail/1'}>用户1详情</Link></li>
                <li><Link to={'/user/detail/2'}>用户2详情</Link></li>
                <li><Link to={'/user/detail/3'}>用户3详情</Link></li>
                <li><Link to={'/user/detail/4'}>用户4详情</Link></li>

            </ul>
        </div>
    )
}
