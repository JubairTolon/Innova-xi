'use client'
// import React, { useState } from 'react'
import { navLinks } from '../types/Model'
import styles from '@/styles/category.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Categories() {
    const pathname = usePathname();
    // const [categoryActive, setCategoryActive] = useState<boolean>(false);
    const categoriesLinks: navLinks[] = [
        {
            title: 'Fresh',
            path: '/fresh'
        },
        {
            title: 'Today’s Deals',
            path: '/todaysDeals'
        },
        {
            title: 'Mobiles',
            path: '/mobiles'
        },
        {
            title: 'Gift Cards',
            path: '/giftCards'
        },
        {
            title: 'Women Clothing',
            path: '/womenClothing'
        },
        {
            title: 'Men Clothing',
            path: '/menClothing'
        },
        {
            title: 'Kids Clothing',
            path: '/kidsClothing'
        },
        {
            title: 'Health',
            path: '/health'
        },
        {
            title: 'Pet corner',
            path: '/petCorner'
        },
        {
            title: 'Cloth Booksing',
            path: '/clothBooksing'
        },
        {
            title: 'Beauty',
            path: '/beauty'
        },
        {
            title: 'Kitchen',
            path: '/kitchen'
        },
        {
            title: 'Bed Room',
            path: '/bedRoom'
        },
        {
            title: 'Sport',
            path: '/sport'
        },
        {
            title: 'Bags',
            path: '/bags'
        },
    ]
    return (
        <div className={styles.category__container}>
            {/* {categoriesLinks.map((item, index) => {
                return (
                    <Link
                        // onClick={() => setCategoryActive(!categoryActive)}
                        // className={categoryActive ? styles.single__NavLink__Active : styles.single__NavLink__Deactive}
                        key={index}
                        className={pathname === item.path ? styles.single__NavLink__Active : styles.single__NavLink__Deactive}
                        href={item.path}
                    >
                        {item.title}
                    </Link>
                )
            })} */}
            {/* <Link href='/about/us'>About Us</Link> */}
            {/* <Link href='/about/someone'>About Someone</Link> */}
        </div>
    )
}