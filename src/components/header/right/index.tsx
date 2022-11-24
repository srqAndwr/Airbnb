/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:54:51
 * @LastEditTime: 2022-10-15 10:43:58
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import IconAvatar from '@/assets/svg/icon-avatar';
import IconGlobal from '@/assets/svg/icon-global';
import IconMenu from '@/assets/svg/icon-menu';
import React, {memo, useEffect, useState, MouseEvent} from 'react';
import {RightWarpper} from './style';
const HeaderRight = memo(() => {
	const [showDropDown, setShowDropDown] = useState(false);
	useEffect(() => {
		const handleClick = () => {
			setShowDropDown(false);
		};
		document.addEventListener('click', handleClick, false);
		return () => {
			document.removeEventListener('click', handleClick);
		};
	}, []);
	const handleMenuShow = (e: MouseEvent) => {
		e.stopPropagation();
		setShowDropDown(true);
	};
	return (
		<RightWarpper>
			<ul className='nav'>
				<li className='nav-item'>登录</li>
				<li className='nav-item'>注册</li>
				<li className='nav-item'>
					<IconGlobal />
				</li>
			</ul>
			<div
				className='menu'
				onClick={(e) => {
					handleMenuShow(e);
				}}
			>
				<div className='box'>
					<IconMenu />
					<div className='avatar'>
						<IconAvatar />
					</div>
				</div>
			</div>
			{showDropDown && (
				<div className='drop-down'>
					<div className='top'>
						<span className='item register'>注册</span>
						<span className='item'>登录</span>
					</div>
					<div className='line' />
					<div className='bottom'>
						<span className='item'>出租房源</span>
						<span className='item'>开展体验</span>
						<span className='item'>帮助</span>
					</div>
				</div>
			)}
		</RightWarpper>
	);
});

export default HeaderRight;
