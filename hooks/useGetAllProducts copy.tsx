import data from '@/public/demoData.json'
export default async function getServerSideProps() {
    const query = await fetch(`${data}`);

    if (!query.ok) {
        throw new Error('failed to fetch user')
    }
    const res = await query.json();
    return {
        props: {
            productInfo: res
        }
    }
}