import styles from './NavbarItem.module.css';

const NavbarItem = ({ text, url, hasDropdown }) => {
    return (
        <div className={styles.item}>
            <li className={styles.navItem}>
                <a
                    href={url}
                    className={styles.navLink}
                >
                    {text}
                </a>
            </li>
            <div className={styles.dropdownArrow} />
        </div>
    );
};

export default NavbarItem;