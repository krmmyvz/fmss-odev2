import React from 'react'
import { FaHeart } from 'react-icons/fa'

function Header() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Ay değeri 0-11 arasında olduğu için 1 eklememiz gerekiyor.
    const year = date.getFullYear();
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

            <a href='https://github.com/krmmyvz' target={'_blank'}>Made with<br /><FaHeart /></a>
        </div>
    )
}

export default Header