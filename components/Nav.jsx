import Link from 'next/link'

const Nav = () => {
    return <nav className="navigation__container">
        <Link href="/" passHref>
            <a>Bozidar Siljanoski</a>
        </Link>
        <Link href="/bio" passHref>
            <a>Background</a>
        </Link>
    </nav>
}

export default Nav