/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 15:48:06
 * @LastEditTime: 2022-10-21 15:56:04
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import {Pagination} from '@mui/material';
import React, {memo} from 'react';
import {PaginationWarrper} from './style';

const PaginationCpn = memo((props: propsType) => {
	const {page, pageStart, pageEnd, totalCount, onChange} = props;
	return (
		<PaginationWarrper>
			<Pagination count={page} onChange={onChange} />
			<div className='tip'>
				第&nbsp;{pageStart}&nbsp;-&nbsp;{pageEnd}
				&nbsp;个房源，共超过&nbsp;{totalCount}&nbsp;个
			</div>
		</PaginationWarrper>
	);
});

interface propsType {
	page: number;
	pageStart: number;
	pageEnd: number;
	totalCount: number;
	onChange?: (...arg: any) => void;
}

export default PaginationCpn;
