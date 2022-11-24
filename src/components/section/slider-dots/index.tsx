/*
 * @Author: shiruiqiang
 * @Date: 2022-10-22 11:04:10
 * @LastEditTime: 2022-10-26 16:24:06
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {
	memo,
	useEffect,
	useRef,
	useState,
	PropsWithChildren,
} from 'react';
import {SliderDotsWapper} from './style';

const SliderDots = memo((props: PropsWithChildren<propsType>) => {
	const {selectedIndex} = props;
	const [translateDistance, setTranslateDistance] = useState(0);
	const dotsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const selectedItemEl = dotsRef.current!.children[selectedIndex];
		const itemOffset = (selectedItemEl as any)!.offsetLeft;
		const itemWidth = selectedItemEl?.clientWidth;
		const contentWidth = dotsRef.current?.clientWidth;
		const contentScroll = dotsRef.current?.scrollWidth;
		let distance = itemOffset! + itemWidth! * 0.5 - contentWidth! * 0.5;
		// 4.特殊情况的处理
		if (distance < 0) distance = 0; // 左边的特殊情况处理
		const totalDistance = contentScroll! - contentWidth!;
		if (distance > totalDistance) distance = totalDistance; // 右边的特殊情况处理
		setTranslateDistance(distance);
	}, [selectedIndex]);
	useEffect(() => {
		dotsRef.current!.style.transform = `translate(${-translateDistance}px)`;
	}, [translateDistance]);
	return (
		<SliderDotsWapper>
			<div className='dots' ref={dotsRef}>
				{props.children}
			</div>
		</SliderDotsWapper>
	);
});
interface propsType {
	selectedIndex: number;
}
export default SliderDots;
