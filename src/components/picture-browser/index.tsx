/*
 * @Author: shiruiqiang
 * @Date: 2022-10-26 09:25:25
 * @LastEditTime: 2022-10-26 17:26:16
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */

import React, {memo, useEffect, useState} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';

import {PictureBrowserWarpper} from './style';
import IconClose from '@/assets/svg/icon-close';
import IconSwitch from '@/assets/svg/icon-switch';
import IconTriangle from '@/assets/svg/icon-triangle';
import SliderDots from '../section/slider-dots';
import classNames from 'classnames';
enum Dir {
	'pre',
	'next',
}
const PictureBrowser = memo((props: propsType) => {
	const {pictures, setShowPictureBrowser} = props;
	const [selectIndex, setSelectIndex] = useState(0);
	const [isShowPreview, setIsShowPreview] = useState(true);
	const [isNext, setIsNext] = useState(true);
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	const handleSwitch = (dir: Dir) => {
		if (dir === Dir.pre) setIsNext(false);
		else setIsNext(true);
		let newIndex = dir === Dir.pre ? selectIndex - 1 : selectIndex + 1;
		if (newIndex < 0) newIndex = pictures.length - 1;
		if (newIndex > pictures.length - 1) newIndex = 0;
		setSelectIndex(newIndex);
	};
	const handleClickPreview = (index: number) => {
		if (index < selectIndex) {
			setIsNext(false);
		} else {
			setIsNext(true);
		}
		setSelectIndex(index);
	};
	return (
		<PictureBrowserWarpper isNext={isNext}>
			<div className='header'>
				<div
					className='close'
					onClick={() => setShowPictureBrowser(false)}
				>
					<IconClose />
				</div>
			</div>
			<div className='body'>
				<div
					className='switch pre'
					onClick={() => handleSwitch(Dir.pre)}
				>
					<IconSwitch />
				</div>
				<div className='content'>
					<SwitchTransition mode='in-out'>
						<CSSTransition
							classNames='fade'
							key={selectIndex}
							timeout={150}
						>
							<img src={pictures[selectIndex]} alt='' />
						</CSSTransition>
					</SwitchTransition>
				</div>
				<div
					className='switch next'
					onClick={() => handleSwitch(Dir.next)}
				>
					<IconSwitch />
				</div>
			</div>
			<div className='footer'>
				<div className='outer'>
					<div className='top'>
						<div className='info'>
							{selectIndex + 1}/{pictures.length}：room
							Apartment图片
							{selectIndex + 1}
						</div>
						<div
							className='toggle'
							onClick={() => setIsShowPreview(!isShowPreview)}
						>
							隐藏照片列表
							<IconTriangle />
						</div>
					</div>
					<div
						className='bottom'
						style={{height: isShowPreview ? '67px' : '0px'}}
					>
						<SliderDots selectedIndex={selectIndex}>
							{pictures.map((item, index) => {
								return (
									<div
										className={classNames('item', {
											active: selectIndex === index,
										})}
										key={item}
										onClick={() =>
											handleClickPreview(index)
										}
									>
										<img src={item} alt='' />
									</div>
								);
							})}
						</SliderDots>
					</div>
				</div>
			</div>
		</PictureBrowserWarpper>
	);
});

interface propsType {
	pictures: string[];
	setShowPictureBrowser: (flag: boolean) => void;
}

export default PictureBrowser;
