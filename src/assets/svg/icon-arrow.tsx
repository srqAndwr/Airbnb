/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 16:02:15
 * @LastEditTime: 2022-10-26 15:04:39
 * @LastEditors: shiruiqiang
 * @FilePath: icon-arrow.tsx
 * @Description:
 */
import React, {memo} from 'react';
import {styleStrToObject} from './utils';

const iconArrow = memo((props: propsType) => {
	const {width = 16, heigth = 16, isBlod = false} = props;
	return (
		<svg
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			role='presentation'
			focusable='false'
			style={styleStrToObject(
				`display: block; fill: none; height: ${heigth}px; width: ${width}px; stroke: currentcolor; stroke-width: 2; overflow: visible;`
			)}
		>
			<g fill='none'>
				{!isBlod && (
					<path d='m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932'></path>
				)}
				{isBlod && (
					<path d='m 4.29 1.71 a 1 1 0 1 1 1.42 -1.41 l 8 8 a 1 1 0 0 1 0 1.41 l -8 8 a 1 1 0 1 1 -1.42 -1.41 l 7.29 -7.29 Z'></path>
				)}
			</g>
		</svg>
	);
});

interface propsType {
	width?: string;
	heigth?: string;
	isBlod?: boolean;
}

export default iconArrow;
