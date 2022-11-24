/*
 * @Author: shiruiqiang
 * @Date: 2022-11-12 16:57:27
 * @LastEditTime: 2022-11-12 16:57:43
 * @LastEditors: shiruiqiang
 * @FilePath: icon-tab-arrow-right.tsx
 * @Description:
 */
import React, {memo} from 'react';
import {styleStrToObject} from './utils';

const IconTabArrowRight = memo(() => {
	return (
		<svg
			viewBox='0 0 18 18'
			role='img'
			aria-hidden='false'
			aria-label='next'
			focusable='false'
			style={styleStrToObject(
				'height: 12px; width: 12px; display: block; fill: currentcolor;'
			)}
		>
			<path
				d='m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z'
				fillRule='evenodd'
			></path>
		</svg>
	);
});

export default IconTabArrowRight;