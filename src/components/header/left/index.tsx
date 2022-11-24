/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:53:24
 * @LastEditTime: 2022-10-15 09:43:45
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import IconLogo from '@/assets/svg/icon-logo';
import React, {memo} from 'react';
import {useNavigate} from 'react-router-dom';
import {LeftWarpper} from './style';
const HeaderLeft = memo(() => {
	const navigate = useNavigate();
	const handleNavigeteToHome = () => {
		navigate('/');
	};
	return (
		<LeftWarpper onClick={() => handleNavigeteToHome()}>
			<IconLogo />
		</LeftWarpper>
	);
});

export default HeaderLeft;
