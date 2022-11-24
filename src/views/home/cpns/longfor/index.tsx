/*
 * @Author: shiruiqiang
 * @Date: 2022-11-12 22:36:47
 * @LastEditTime: 2022-11-13 11:42:01
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import ScrollView from '@/components/scroll-view';
import SectionHeader from '@/components/section/header';
import {longfor} from '@/model/types/longfor';
import React, {memo} from 'react';
import {LongForWarpper} from './style';

const LongFor = memo((props: PropsType) => {
	const {longforInfo} = props;

	return (
		<LongForWarpper>
			<SectionHeader
				title={longforInfo?.title}
				subtitle={longforInfo?.subtitle}
				isShowArrow={false}
			/>
			<div className='section-body'>
				<div className='scroll-view'>
					<ScrollView>
						{longforInfo?.list.map((item, index) => {
							return (
								<div className='item' key={item.city}>
									<img src={item.picture_url} alt='' />
									<div className='bg-cover'></div>
									<div className='desc'>
										<div className='city'>{item.city}</div>
										<div className='price'>
											均价&nbsp;{item.price}
										</div>
									</div>
								</div>
							);
						})}
					</ScrollView>
				</div>
			</div>
		</LongForWarpper>
	);
});

interface PropsType {
	longforInfo?: longfor;
}

export default LongFor;
