import Button from '../Button/Button';
import styles from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';

const navbarData = [
    {
        id: 1,
        name: 'Product',
        url: '#',
        hasDropdown: true
    },
    {
        id: 2,
        name: 'Templates',
        url: '#',
        hasDropdown: true
    },
    {
        id: 3,
        name: 'Pricing',
        url: '#',
        hasDropdown: false
    },
    {
        id: 4,
        name: 'Reviews',
        url: '#',
        hasDropdown: false
    }
];

const Navbar = () => {
    return (
        <header className={styles.header}>
                <img
                    src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
                    alt="Bonsai logo"
                    className={styles.logo}
                />
            <nav className={styles.nav}>
                <div className={styles.navLeft}>
                    <ul className={styles.navigationLinks}>
                        {navbarData.map(item => (
                            <NavbarItem
                                text={item.name}
                                url={item.url}
                                hasDropdown={item.hasDropdown}
                            />
                        ))}
                    </ul>
                </div>
                <div className={styles.navRight}>
                    <Button text="Log In" type="inverted" />
                    <Button text="Start Free" />
                </div>
            </nav>
        </header>
    );
}

export default Navbar;