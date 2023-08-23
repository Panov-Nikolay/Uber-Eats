import React from 'react'
import { GrLanguage } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../../db'
import styles from './Info.module.css'

const list1 = [
	'Об UberEats',
	'Станьте партнером по доставке',
	'Станьте партнером-рестораном',
]
const list2 = ['Все города', 'Цены', 'Помощь', 'FAQs']

export const Info = () => {
	return (
		<div className={styles.Info}>
			<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
				<div className={styles.select}>
					<GrLanguage />
					<select name='' id=''>
						<option value='RU'>Русский</option>
						<option value='EU'>English</option>
					</select>
				</div>

				<a className={styles.hashtag}>
					<span style={{ color: 'green' }}>#</span>UberEats
				</a>

				<div className={styles.socials}>
					<Link>
						<img src={`${BASE_URL}/assets/facebook.png`} alt='facebook' />
					</Link>
					<Link>
						<img src={`${BASE_URL}/assets/twitter.png`} alt='twitter' />
					</Link>
					<Link>
						<img src={`${BASE_URL}/assets/instagram.png`} alt='instagram' />
					</Link>
				</div>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
				{list1.map((text, index) => {
					return (
						<Link to='/restaurants' key={index} style={{ color: 'white' }}>
							{text}
						</Link>
					)
				})}
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
				{list2.map((text, index) => {
					return (
						<Link to='/restaurants' key={index} style={{ color: 'white' }}>
							{text}
						</Link>
					)
				})}
			</div>
		</div>
	)
}
