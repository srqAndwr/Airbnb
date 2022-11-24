/*
 * @Author: shiruiqiang
 * @Date: 2022-11-12 20:25:17
 * @LastEditTime: 2022-11-13 12:16:41
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import IconTabArrowLeft from '@/assets/svg/icon-tab-arrow-left';
import IconTabArrowRight from '@/assets/svg/icon-tab-arrow-right';
import React, {
	Fragment,
	memo,
	PropsWithChildren,
	useEffect,
	useRef,
	useState,
} from 'react';
import {ScrollViewWarpper} from './style';

const ScrollView = memo((props: PropsWithChildren<PropsType>) => {
	const {isShowCover = false} = props;
	/** 记录正在显示的是哪一个 */
	const [posIndex, setPosIndex] = useState(0);
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(true);
	const scrollRef = useRef<HTMLDivElement>(null);
	const totalDistanceRef = useRef(0);
	useEffect(() => {
		const scrollWidth = scrollRef.current?.scrollWidth ?? 0;
		const clientWidth = scrollRef.current?.clientWidth ?? 0;
		totalDistanceRef.current = scrollWidth - clientWidth;
		setShowRight(totalDistanceRef.current > 0);
	}, [props.children]);
	/** 事件处理 */
	function leftClickHandle() {
		scrollPosition(posIndex - 1);
	}

	function rightClickHandle() {
		scrollPosition(posIndex + 1);
	}

	function scrollPosition(index: number) {
		const scrollLeft = (scrollRef.current?.children[index] as any)
			.offsetLeft;
		scrollRef.current!.style.transform = `translate(-${scrollLeft}px)`;
		setPosIndex(index);
		setShowRight(totalDistanceRef.current > scrollLeft);
		setShowLeft(scrollLeft > 0);
	}
	return (
		<ScrollViewWarpper>
			<div className='btn'>
				{showLeft && (
					<Fragment>
						{isShowCover && <div className='left-cover' />}
						<div className='arrow left'>
							<div className='circle' onClick={leftClickHandle}>
								<IconTabArrowLeft />
							</div>
						</div>
					</Fragment>
				)}
				{showRight && (
					<Fragment>
						{isShowCover && <div className='right-cover' />}
						<div className='arrow right'>
							<div className='circle' onClick={rightClickHandle}>
								<IconTabArrowRight />
							</div>
						</div>
					</Fragment>
				)}
			</div>
			<div className='content'>
				<div className='tabs' ref={scrollRef}>
					{props.children}
				</div>
			</div>
		</ScrollViewWarpper>
	);
});

interface PropsType {
	isShowCover?: boolean;
}

export default ScrollView;
