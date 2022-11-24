/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 17:32:53
 * @LastEditTime: 2022-11-04 09:59:51
 * @LastEditors: shiruiqiang
 * @FilePath: icon-search.tsx
 * @Description:
 */
import React, {memo} from 'react';
import {styleStrToObject} from './utils';

const IconSearch = memo((props: PropsType) => {
	const {width = 12, height = 12, strong = 5.3333333} = props;
	return (
		<svg
			viewBox='0 0 32 32'
			xmlns='http://www.w3.org/2000/svg'
			style={styleStrToObject(
				`display:block;fill:none;height:${height}px;width:${width}px;stroke:currentColor;stroke-width:${strong};overflow:visible`
			)}
			aria-hidden='true'
			role='presentation'
			focusable='false'
		>
			<g fill='none'>
				<path d='m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9'></path>
			</g>
		</svg>
	);
});

interface PropsType {
	width?: number;
	height?: number;
	strong?: number;
}

export default IconSearch;
