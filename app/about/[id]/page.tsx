import React from 'react'

export default function AboutwithID({ params }: { params: { id: string } }) {
    return (
        <div>About page with ID: {params.id}</div>
    )
}
