import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import Head from 'next/head'
import { API_URL } from '@/config/index'

export default function EventsPage({ events }) {
	// this will log in the client side
	// console.log(events)

	return (
		<Layout>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<h1>Events</h1>

			{events.length === 0 && <h2>No New Events</h2>}

			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}
		</Layout>
	)
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`)

	const events = await res.json()

	// this will log in the server side.
	// console.log(events)

	return {
		props: { events },
		revalidate: 1,
	}
}
