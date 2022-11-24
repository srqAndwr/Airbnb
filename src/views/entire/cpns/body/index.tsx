/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 11:42:32
 * @LastEditTime: 2022-10-23 15:29:12
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import React, {memo} from 'react';

import SectionBody from '@/components/section/body';
import {EntireBodyWarrper} from './style';
import {roomInfo} from '@/model/types/common';
import {useAppSelector} from '@/hooks/storeHooks';
import {shallowEqual} from 'react-redux';

const EntireBody = memo((props: propsType) => {
	const {isLoading} = useAppSelector((state) => state.entire, shallowEqual);
	const {roomList, totalCount} = props;
	return (
		<EntireBodyWarrper>
			<div className='header'>{totalCount}&nbsp;多处住宿</div>
			<div className='section'>
				{roomList?.map((room) => {
					return (
						<SectionBody
							section={room}
							key={room.id}
							sectionItemWidth='20%'
						/>
					);
				})}
			</div>
			{isLoading && <div className='cover' />}
		</EntireBodyWarrper>
	);
});

interface propsType {
	totalCount: number;
	roomList: roomInfo[];
}

export default EntireBody;
