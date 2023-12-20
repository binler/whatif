import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <h2>Not found</h2>
            <p>Could not find resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}
