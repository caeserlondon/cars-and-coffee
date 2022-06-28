import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { API_URL } from '@/config/index'
import styles from '@/styles/event.module.css'
import { FaPencilAlt, FaTimes } from 'react-icons/fa'

export default function EventPage({ evt }) {
	const deleteEvent = (e) => {
		console.log('deleted')
	}

	return (
		<Layout>
			<div className={styles.event}>
				<div className={styles.controls}>
					{/* <Link href={`/events/edit/${evt.id}`}>
						<a>
							<FaPencilAlt />
							Edit Event
						</a>
					</Link> */}
					{/* <a href='#' className={styles.delete} onClick={deleteEvent}>
						<FaTimes /> Delete Event
					</a> */}
				</div>
				<span>
					{evt.date} at {evt.time}
				</span>
				<h1>{evt.name}</h1>
				{evt.image && (
					<div className={styles.image}>
						<Image src={evt.image} width={960} height={600} />
					</div>
				)}

				<h3>Theme: </h3>
				<p>{evt.theme}</p>
				<h3>Description:</h3>
				<p>{evt.description}</p>
				<h3>Venue: {evt.venue}</h3>
				<p>{evt.address}</p>
				<Link href='/events'>
					<a className='btn-block'>Back To Events</a>
				</Link>
			</div>
		</Layout>
	)
}

// USING SERVER SIDE PROPS (DYNAMIC)
export async function getServerSideProps({ query: { slug } }) {
	// this will log in the server side
	// console.log(slug)

	//this will give me an array of events that have one event
	const res = await fetch(`${API_URL}/api/events/${slug}`)

	const events = await res.json()

	return {
		props: { evt: events[0] },
	}
}

// USING STATIC PROPS (the request will be made at build time)
// // First we generate the paths
// export async function getStaticPaths() {
// 	const res = await fetch(`${API_URL}/api/events`)
// 	const events = await res.json()

// 	const paths = events.map((evt) => ({
// 		params: { slug: evt.slug },
// 	}))
// 	// the above should return data { paths:[{params: {slug:1}},{params:{slug:2}}]}

// 	return {
// 		paths,
// 		fallback: true,
// 		// true fallback will look for the path even if it is not generated at the build time / false will take us to 404 page
// 	}
// }

// // second we use them
// export async function getStaticProps({ params: { slug } }) {
// 	//this will give me an array of events that have one event
// 	const res = await fetch(`${API_URL}/api/events/${slug}`)

// 	const events = await res.json()

// 	return {
// 		props: { evt: events[0] },
// 		revalidate: 1,
// 	}
// }
