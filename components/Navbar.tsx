'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from '@/styles/nav.module.css'
import { HiMenu } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { BsCartCheck } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { navLinks } from './Model';
import { usePathname } from 'next/navigation';



export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const navLinks: navLinks[] = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Shop',
            link: '/shop'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
    ]
    return (
        <nav className={styles.nav__container}>
            {/* dropdown navbar */}
            <button
                className={styles.menu__btn}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? < RxCross2 /> : <HiMenu />}
            </button>
            <div className={menuOpen ? `${styles.dropdown__menu__container} ${styles.active}` : styles.dropdown__menu__container}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.link;
                    return (
                        <Link
                            className={isActive ? styles.single__NavLink__Active : styles.single__NavLink__Deactive}
                            href={link.link}
                            key={link.name}
                            onClick={() => { setMenuOpen(!menuOpen) }}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </div>

            {/* main navbar start */}
            <div className={styles.branding__module}>
                <div><Link href='/' className={styles.brand}>Innova XI</Link></div>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.nav__menus__module}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.link;
                    return (
                        <Link
                            className={isActive ? styles.single__NavLink__Active : styles.single__NavLink__Deactive}
                            href={link.link}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    )
                })}
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
