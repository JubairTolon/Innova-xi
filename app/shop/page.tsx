'use client'

import React from 'react'

function Shop() {
    return (
        <div>Shop</div>
    )
}

export default Shop

// const getPostData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json();
// };
// const getUserData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     return res.json();
// };

// export default async function Shop() {
//     // const [posts, users] = await Promise.all([getPostData(), getUserData()]);
//     return (
//         <div>
//             shop
//             {/* {posts.map((p: any) => {
//                 return <h1 key={p._id}>{p.title}</h1>
//             })} */}
//         </div>
//     )
// }