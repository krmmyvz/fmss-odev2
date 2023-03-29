import React from 'react'
import { FaHeart } from 'react-icons/fa'

function Header() {
    const date = new Date();
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }; // Yıl, ay ve gün bilgileri format olarak tanımlanır.

    const formattedDate = date.toLocaleDateString('tr-TR', options);
    return (
        <div id='header'>
            <div>
                <h2>To Do App</h2>
                <h4>{formattedDate}</h4>
            </div>

            <a href='https://github.com/krmmyvz' target='_blank' rel="noreferrer">Made with<br /><FaHeart /></a>
        </div>
    )
}

export default Header