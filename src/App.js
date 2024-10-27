import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import dataCard from './dataCard.json'

const App = () => {
	const [listItem, setListItem] = useState([])
	function getRandomWithChance(chances) {
		const totalChance = chances.cards.reduce(
			(sum, chance) => sum + chance.chans,
			0
		)
		const random = Math.random() * totalChance
		let cumulativeChance = 0

		for (let i = 0; i < chances.cards.length; i++) {
			cumulativeChance += chances.cards[i].chans
			if (random < cumulativeChance) {
				return setListItem([...listItem, chances.cards[i]])
			}
		}
	}

	return (
		<div>
			<button onClick={() => getRandomWithChance(dataCard)}>rand</button>
			<ul>
				{listItem.map((imt) => {
					return (
						<li key={nanoid()}>
							<p>chanse{imt.chans}</p>
							<p>txt{imt.txt}</p>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default App
