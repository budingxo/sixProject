import style from '../css/one.module.css'
import axios from 'axios'
import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading } from '@nutui/nutui-react'

const App: React.FC = () => {
	const [data, setData] = React.useState([]);

	const gitList = async () => {
		const res = await axios.get('http://localhost:3000/users/getlist')
		setData(res.data.data);
	}

	useEffect(() => {
		gitList();
	}, [])
	return (
		<div className={style.boxs}>
			<div className={style.bigimg}>
				<img src="https://img2.bianews.com/image/bianews/news/img/1621426717826.jpeg?imageView2/0/format/jpg/q/75" alt="" />
				<div className={style.text}>
					<img src="https://img.chajianxw.com/chajian/1636870129084.jpg" alt="" />
				</div>
			</div>
			<div className={style.box}>
				<div>番剧</div>
				<div>综艺</div>
				<div>游戏</div>
				<div>娱乐</div>
				<div>科技</div>
				<div>美食</div>
				<div>汽车</div>
				<div>运动</div>
				<div>电影</div>
				<div>时尚</div>
			</div>
			<div className={style.imgboxs}>
				{data.map((item) => {
					return (
						<div key={item._id} className={style.imgbox}>
							<img src={item.img} alt="" />
							<div>{item.name}</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
export default App;