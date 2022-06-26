import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
	const footerYear = new Date().getFullYear()

	return (
		<footer className={styles.footer}>
			<hr />
			<p>Copyright &copy; {footerYear} | Cars And Coffee</p>
			<Link href='/about'>
				<a>About This Project</a>
			</Link>
		</footer>
	)
}
