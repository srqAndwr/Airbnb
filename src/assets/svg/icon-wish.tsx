/*
 * @Author: shiruiqiang
 * @Date: 2022-10-22 17:52:33
 * @LastEditTime: 2022-10-22 17:56:40
 * @LastEditors: shiruiqiang
 * @FilePath: icon-wish.tsx
 * @Description:
 */
import React, {memo} from 'react';
import {styleStrToObject} from './utils';

const IconWish = memo(() => {
	return (
		<svg
			viewBox='0 0 24 24'
			fill='#484848'
			fillOpacity='0.5'
			stroke='#ffffff'
			strokeWidth='2'
			focusable='false'
			aria-label='添加房源到心愿单'
			role='img'
			strokeLinecap='round'
			strokeLinejoin='round'
			style={styleStrToObject(
				'height: 28px; width: 28px; display: block; overflow: visible;'
			)}
		>
			<path
				d='m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6'
				strokeLinejoin='round'
			></path>
		</svg>
	);
});

export default IconWish;
