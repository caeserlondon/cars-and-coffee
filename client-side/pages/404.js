import Layout from '../components/Layout'
import styles from '../styles/404.module.css'
import Link from 'next/link'
import { GiTerror } from 'react-icons/gi'

export default function NotFoundPage() {
	return (
		<Layout title='Page Not Found'>
			<div className={styles.error}>
				<h1>
					<GiTerror />
					404
				</h1>
				<h3>We are sorry, But the page you are looking for does not exist. </h3>
				<Link href='/'>
					<a className='btn-grad'>Back To The Main Page</a>
				</Link>
			</div>
		</Layout>
	)
}
