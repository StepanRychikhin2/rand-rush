import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import dataCard from './dataCard.json'
import sty from './AppStyle.module.css'
import awdad from './global.module.css'
import Header from './components/header/header'
const App = () => {
	const [falling, setFalling] = useState(false)
	const [listItem, setListItem] = useState([])
	const handleFall = () => {
		setFalling(true)
		setTimeout(() => {
			setFalling(false)
		}, 400)
	}
	function chansIn(divisor) {
		const total = 100
		const result = Math.floor(total / divisor)
		return result
	}

	function getRandomWithChance(chances) {
		handleFall()
		const totalChance = chances.cards.reduce(
			(sum, chance) => sum + chance.chans,
			0
		)
		const random = Math.random() * totalChance
		let cumulativeChance = 0

		for (let i = 0; i < chances.cards.length; i++) {
			cumulativeChance += chances.cards[i].chans
			if (random < cumulativeChance) {
				setTimeout(() => {
					document.getElementById('imgRund').src = chances.cards[i].photo
				document.getElementById('TitleRund').textContent =
					chances.cards[i].namePrs
				document.getElementById(
					'AnimeNameRund'
				).textContent = `Anime name: ${chances.cards[i].AnimeName}`
				document.getElementById(
					'PointRund'
				).textContent = `points: ${chances.cards[i].point}`
				document.getElementById('chansesRund').textContent = `1/${chansIn(
					chances.cards[i].chans
				)}`
				}, 400)
				
				return setListItem([...listItem, chances.cards[i]])
			}
		}
	}
	const mystyle = falling
		? {transform: "translateY(`300px`) rotate(45deg)",
			 opacity: "0"}
		: {}
		const falg = {
			transform: "translateY(`300px`) rotate(45deg)",
			 opacity: "0"
		}
	return (
		<div className={sty.glawBox}>
			<Header></Header>
			<div className={sty.boxCartRand}>
				{/* <ul>
					{listItem.map((imt) => {
						return (
							<li key={nanoid()}>
								<p>chanse {imt.chans}%</p>
								<p>txt{imt.txt}</p>
								<img width="200px" src={imt.photo}></img>
							</li>
						)
					})}
				</ul> */}
				<div id="card-container" className={sty.cart}>
					<div style={mystyle} className={sty.card}>
						<img
							className={sty.imgRund}
							width="200px"
							id="imgRund"
							src="aw"
						></img>
						<h2 id="TitleRund"></h2>
						<p id="AnimeNameRund"></p>
						<p id="PointRund"></p>
						<p id="chansesRund"></p>
					</div>
				</div>
				<div>
					<button onClick={() => getRandomWithChance(dataCard)}>rand</button>
				</div>
			</div>
		</div>
	)
}

export default App
