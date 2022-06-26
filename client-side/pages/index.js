import Layout from '@/components/Layout'
import Head from 'next/head'

export default function Home() {
	return (
		<Layout>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>home</h1>
		</Layout>
	)
}
