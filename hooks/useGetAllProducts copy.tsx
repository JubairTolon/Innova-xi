
export default async function getAllProduct() {
    const res = await fetch('.......');

    if (!res.ok) {
        throw new Error('failed to fetch user')
    }
    return res.json()
}