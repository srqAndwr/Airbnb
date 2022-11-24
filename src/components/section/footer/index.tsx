/*
 * @Author: shiruiqiang
 * @Date: 2022-10-18 11:47:29
 * @LastEditTime: 2022-11-12 20:10:59
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import IconArrow from '@/assets/svg/icon-arrow';
import {useAppDispatch} from '@/hooks/storeHooks';
import {changIsAlpha} from '@/model/main';
import React, {memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {SectionFooterWarpper} from './style';

const SectionFooter = memo((props: propsType) => {
	const {name = undefined, color = undefined} = props;
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const handleClick = () => {
		navigate('/entire');
	};
	const handleNavEntireClick = () => {
		dispatch(changIsAlpha(false));
	};
	return (
		<SectionFooterWarpper color={color} onClick={handleClick}>
			<span className='content' onClick={handleNavEntireClick}>
				<span className='text'>
					{name ? `查看${name}房源` : '显示全部'}
				</span>
				<IconArrow />
			</span>
		</SectionFooterWarpper>
	);
});

interface propsType {
	name?: string;
	color?: string;
}

export default SectionFooter;
