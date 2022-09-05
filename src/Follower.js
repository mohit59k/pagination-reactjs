import React from 'react'

const Follower = ({ dataItems }) => {
	const { avatar_url: userImg, login: name } = dataItems
	return (
		<article className='card'>
			<img src={userImg} alt={name} />
			<h4>{name}</h4>
			<button
				className='btn'
				onClick={(e) => {
					const a = { name }
					console.log(a)
				}}
			>
				View Profile
			</button>
		</article>
	)
}

export default Follower
