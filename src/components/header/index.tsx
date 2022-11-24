/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 15:57:52
 * @LastEditTime: 2022-11-12 20:12:05
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo, useRef, useState} from 'react';

import {useAppSelector} from '@/hooks/storeHooks';
import HeaderCenter from './center';
import HeaderLeft from './left';
import HeaderRight from './right';
import {HeaderExtendWarpper, HeaderWarpper} from './style';
import {useScrollPosition} from '@/hooks/useScrollPosition';
import {ThemeProvider} from 'styled-components';
const Header = memo(() => {
	const {isFixed, isSetAlpha} = useAppSelector((state) => state.main);
	const [isShow, setIsShow] = useState(false);
	const [isTopAlpha, setIsTopAlpha] = useState(false);
	const preY = useRef(0);
	const {scrollY} = useScrollPosition();
	const handleShowExtend = () => {
		setIsShow(true);
	};
	const handleHiddenExtend = () => {
		setIsShow(false);
		setIsTopAlpha(false);
	};
	if (!isShow) preY.current = scrollY;
	if (Math.abs(scrollY - preY.current) > 30 && isShow) {
		setIsShow(false);
		setIsTopAlpha(false);
	}
	if (isSetAlpha && scrollY === 0 && !isShow) {
		setIsTopAlpha(true);
		setIsShow(true);
	}
	return (
		<ThemeProvider theme={{isAlpha: isTopAlpha}}>
			<HeaderWarpper isFixed={isFixed}>
				<div className='outer'>
					<div className='content'>
						<HeaderLeft />
						<HeaderCenter
							ClickCallBack={handleShowExtend}
							isExtend={isTopAlpha || isShow}
						/>
						<HeaderRight />
					</div>
					<HeaderExtendWarpper isExtend={isTopAlpha || isShow} />
				</div>
				{!isTopAlpha && isShow && (
					<div className='cover' onClick={handleHiddenExtend} />
				)}
			</HeaderWarpper>
		</ThemeProvider>
	);
});

export default Header;
