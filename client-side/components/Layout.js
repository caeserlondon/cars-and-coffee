import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ title, description, keywords, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
				{/* <link rel={rel} href={href} /> */}
			</Head>
			<Header />
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	title: 'Cars And Coffee',
	description: 'We love cars and we love coffee',
	keywords: 'Welcome to cars and coffee',
}
