/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 20:17:36
 * @LastEditTime: 2022-10-23 15:04:15
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo, useRef, useState} from 'react';
import Slider, {Settings} from 'react-slick';

import IconArrow from '@/assets/svg/icon-arrow';
import {SliderWarpper} from './style';
import SliderDots from '@/components/section/slider-dots';
import classNames from 'classnames';
import IconWish from '@/assets/svg/icon-wish';
enum ArrowType {
	'left',
	'tight',
}
const CoverSlider = memo((props: propsType) => {
	const {pictureUrls = [], handleClick = () => {}} = props;
	const [selectedIndex, setSelectedIndex] = useState(0);
	const coversSlideSetting: Settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		beforeChange: (current, next) => setSelectedIndex(next),
	};
	const slideRef = useRef<Slider>(null);
	const handleArrow = (e: any, type: ArrowType) => {
		e.stopPropagation();
		if (type === ArrowType.left) {
			slideRef.current && slideRef.current?.slickPrev();
		} else {
			slideRef.current && slideRef.current?.slickNext();
		}
	};
	return (
		<SliderWarpper>
			{pictureUrls.length !== 0 && (
				<div className='imgs' onClick={handleClick}>
					<div className='wish'>
						<IconWish />
					</div>
					<div className='slide-arrow'>
						<div
							className='left'
							onClick={(e) => handleArrow(e, ArrowType.left)}
						>
							<IconArrow width='30' heigth='30' isBlod={true} />
						</div>
						<div
							className='right'
							onClick={(e) => handleArrow(e, ArrowType.tight)}
						>
							<IconArrow width='30' heigth='30' isBlod={true} />
						</div>
					</div>
					<div className='indicator'>
						<SliderDots selectedIndex={selectedIndex}>
							{pictureUrls.map((item, index) => {
								return (
									<div className='item' key={item}>
										<span
											className={classNames('dot', {
												active: selectedIndex === index,
											})}
										></span>
									</div>
								);
							})}
						</SliderDots>
					</div>
					<div className='slider'>
						<Slider {...coversSlideSetting} ref={slideRef}>
							{pictureUrls.map((picture) => {
								return (
									<img src={picture} key={picture} alt='' />
								);
							})}
						</Slider>
					</div>
				</div>
			)}
		</SliderWarpper>
	);
});

interface propsType {
	pictureUrls: string[];
	handleChange?: (...args: any) => void;
	handleClick?: () => void;
}

export default CoverSlider;
