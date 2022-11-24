/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 15:56:50
 * @LastEditTime: 2022-11-13 20:34:28
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from 'hooks/storeHooks';
import {fetchHomePrice} from 'model/home/asyncThunk';
import {HomeWarrper} from './style';
import {shallowEqual} from 'react-redux';
import Section from '@/components/section';
import HotRecommed from './cpns/hot-recommed';
import {isEmptyObj} from '@/utils';
import Discount from './cpns/discount';
import {changIsAlpha, changIsFixed} from '@/model/main';
import LongFor from './cpns/longfor';
import Plus from './cpns/plus';
const homeCover = require('./assets/img/home-cover.jpeg');
const Home = memo(() => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchHomePrice());
		dispatch(changIsFixed(true));
		dispatch(changIsAlpha(true));
	}, [dispatch]);
	const {hotRecommend, discount, goodPrice, highScore, plus, longFor} =
		useAppSelector((s) => s.home, shallowEqual);
	return (
		<HomeWarrper>
			<div className='banner'>
				<img src={homeCover} alt='Airbnb' />
			</div>
			{!!isEmptyObj(hotRecommend?.dest_list) && (
				<div className='hot-recommend'>
					<HotRecommed hotRecommendInfo={hotRecommend} />
				</div>
			)}
			{!!isEmptyObj(discount?.dest_list) && (
				<div className='discount'>
					<Discount discountInfo={discount} />
				</div>
			)}
			{!!isEmptyObj(longFor?.list) && (
				<div className='longfor'>
					<LongFor longforInfo={longFor} />
				</div>
			)}
			{!!isEmptyObj(goodPrice?.list) && (
				<div className='good-price'>
					<Section
						sectionInfo={goodPrice?.list}
						title={goodPrice?.title}
						subtitle={goodPrice?.subtitle}
					/>
				</div>
			)}
			{!!isEmptyObj(highScore?.list) && (
				<div className='high-score'>
					<Section
						sectionInfo={highScore?.list}
						title={highScore?.title}
						subtitle={highScore?.subtitle}
					/>
				</div>
			)}
			{!!isEmptyObj(plus?.list) && (
				<div className='plus'>
					{/* <Section
						sectionInfo={plus?.list}
						title={plus?.title}
						subtitle={plus?.subtitle}
					/> */}
					<Plus plusInfo={plus} />
				</div>
			)}
		</HomeWarrper>
	);
});

export default Home;
