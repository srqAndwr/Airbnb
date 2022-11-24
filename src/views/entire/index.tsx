/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:07:39
 * @LastEditTime: 2022-11-12 20:11:55
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo, useEffect} from 'react';

import {EntireWarpper} from './style';
import EntireTabs from './cpns/tabs';
import {useAppDispatch, useAppSelector} from '@/hooks/storeHooks';
import {fetchEntireData} from '@/model/entire/asyncThunk';
import EntireBody from './cpns/body';
import filterData from '@/contants/filter_data.json';
import PaginationCpn from './cpns/pagination';
import {changOffset} from '@/model/entire';
import {shallowEqual} from 'react-redux';
import {changIsFixed} from '@/model/main';

const Entire = memo(() => {
	const dispatch = useAppDispatch();
	const {roomList, totalCount, size, offset} = useAppSelector(
		(state) => state.entire,
		shallowEqual
	);
	const {isFixed} = useAppSelector((state) => state.main, shallowEqual);
	useEffect(() => {
		dispatch(changIsFixed(true));
	}, [dispatch]);
	useEffect(() => {
		dispatch(fetchEntireData());
	}, [dispatch, offset]);

	const page = Math.ceil(totalCount / size);
	const pageStart = offset * size + 1;
	const pageEnd = (offset + 1) * size;
	const handlePageChange = (e: any, pageSize: number) => {
		window.scroll(0, 0);
		dispatch(changOffset(pageSize - 1));
	};
	return (
		<EntireWarpper>
			<EntireTabs tabs={filterData} isFixed={isFixed} />
			<EntireBody roomList={roomList!} totalCount={totalCount} />
			<PaginationCpn
				totalCount={totalCount}
				page={page}
				pageStart={pageStart}
				pageEnd={pageEnd}
				onChange={handlePageChange}
			/>
		</EntireWarpper>
	);
});

export default Entire;
