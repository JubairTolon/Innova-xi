import Link from 'next/link'
import React from 'react'
import styles from '../styles/modules/nav.module.css'
import { BsCartCheck } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';



export default function Navbar() {
    return (
        <nav className={styles.nav__container}>
            <div className={styles.branding__module}>
                <div><Link href='/' className={styles.brand}>Innova XI</Link></div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.nav__menus__module}>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/shop'>Shop</Link></li>
                    <li><Link href='/blog'>Blogs</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
                {/* <Link href='/about/us'>About Us</Link> */}
                {/* <Link href='/about/someone'>About Someone</Link> */}


            </div>
            <div className={styles.user__module}>
                <span className='text-2xl'><AiFillHeart /></span>
                <span className='text-2xl'><BsCartCheck /></span>
                <button>Sign Up</button>
            </div>

        </nav >
    )
}
