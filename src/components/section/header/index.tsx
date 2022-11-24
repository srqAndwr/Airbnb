/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 15:34:39
 * @LastEditTime: 2022-10-19 16:42:09
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import IconArrow from '@/assets/svg/icon-arrow';
import React, {memo} from 'react';

import {HeaderWarpper} from './style';
const SectionHeader = memo((props: propsType) => {
	const {title, subtitle, isShowArrow = true} = props;
	return (
		<HeaderWarpper>
			<div className='title-box'>
				<h2 className='title'>{title}</h2>
				{subtitle && <div className='subtitle'>{subtitle}</div>}
			</div>
			{isShowArrow && (
				<div className='arrow'>
					<IconArrow />
				</div>
			)}
		</HeaderWarpper>
	);
});

interface propsType {
	title?: string;
	subtitle?: string;
	isShowArrow?: boolean;
}

export default SectionHeader;
