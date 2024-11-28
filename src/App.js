import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import dataCard from './dataCard.json'
import sty from './AppStyle.module.css'
import awdad from './global.module.css'
import Header from './components/header/header'
const App = () => {
	const [socondrender, setSocondrender] = useState(true)
	const [caedkist, setCaedkist] = useState([])
	const [falling, setFalling] = useState(false)
	const [invVis, setInvVis] = useState(false)
	const [listItem, setListItem] = useState([])
	useEffect(() => {
		if (socondrender) {
			setSocondrender(false)
			setCaedkist(dataCard.cards)
		}
	})
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
		const btnRundRush = document.getElementById('btnRund')
		btnRundRush.setAttribute('disabled', 'disabled')

		setTimeout(() => {
			btnRundRush.removeAttribute('disabled')
		}, 1000)

		handleFall()
		const totalChance = chances.reduce((sum, chance) => sum + chance.chans, 0)
		const random = Math.random() * totalChance
		let cumulativeChance = 0

		for (let i = 0; i < chances.length; i++) {
			cumulativeChance += chances[i].chans
			if (random < cumulativeChance) {
				setTimeout(() => {
					document.getElementById('imgRund').src = chances[i].photo
					document.getElementById('TitleRund').textContent = chances[i].namePrs
					document.getElementById(
						'AnimeNameRund'
					).textContent = `Anime name: ${chances[i].AnimeName}`
					document.getElementById(
						'PointRund'
					).textContent = `points: ${chances[i].point}`
					document.getElementById('chansesRund').textContent = `1/${chansIn(
						chances[i].chans
					)}`
				}, 400)

				return setListItem([...listItem, chances[i]])
			}
		}
	}
	const mystyle = falling
		? { transform: 'translateY(`300px`) rotate(45deg)', opacity: '0' }
		: {}
	const falg = {
		transform: 'translateY(`300px`) rotate(45deg)',
		opacity: '0',
	}
	return (
		<div className={sty.glawBox}>
			<Header setInvVis={setInvVis} invVis={invVis}></Header>
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
				<ul style={{ display: 'none' }}>
					{caedkist.map((imt) => {
						return (
							<li key={nanoid()}>
								<p>chanse {imt.chans}%</p>
								<p>txt{imt.txt}</p>
								<img width="200px" src={imt.photo}></img>
							</li>
						)
					})}
				</ul>
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
					<button id="btnRund" onClick={() => getRandomWithChance(caedkist)}>
						rand
					</button>
				</div>
			</div>
			{invVis && (
				<div className={sty.invBoxModalBackdrop}>
					<div>
						<h1>hi</h1>
					</div>
				</div>
			)}
		</div>
	)
}

export default App
