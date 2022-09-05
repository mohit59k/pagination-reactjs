import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
	const { loading, data } = useFetch()
	const [pages, setPages] = useState(0)
	const [follower, setFollower] = useState([])
	useEffect(() => {
		if (loading) {
			return
		} else {
			return setFollower(data[pages])
		}
	}, [loading, pages])
	return (
		<main>
			<div className='section-title'>
				<h2>{loading ? 'loading ...' : 'Pagination'}</h2>
				<p className='underline'></p>
			</div>
			<div className='followers'>
				<div className='container'>
					{follower.map((dataItems) => {
						return <Follower dataItems={dataItems} key={dataItems.id} />
					})}
				</div>
				{!loading && (
					<div className='btn-container'>
						<button
							className='prev-btn'
							onClick={() => {
								if (pages <= 11 && pages > 0) {
									setPages((prevPageVal) => {
										return prevPageVal - 1
									})
								}
							}}
						>
							prev
						</button>
						{data.map((val, index) => {
							return (
								<button
									className={`page-btn ${index == pages ? 'active-btn' : null}`}
									key={index}
									onClick={() => {
										setPages(index)
									}}
								>
									{index + 1}
								</button>
							)
						})}
						<button
							className='next-btn'
							onClick={() => {
								if (pages >= 0 && pages < 11) {
									setPages((prevPageVal) => {
										return prevPageVal + 1
									})
								}
							}}
						>
							next
						</button>
					</div>
				)}
			</div>
		</main>
	)
}

export default App
