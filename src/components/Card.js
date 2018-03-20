import React from 'react';

const Card = ({ name, userName, email, id }) => {
	return (
		<div className='bg-light-green dib ma2 pa3 br3 shadow-5 grow'>
			<img alt='robots' src={`https://robohash.org/${id}?size=250x250`} />
			<div className='tc'>
				<h2>{name}</h2>
				<h3>{userName}</h3>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;