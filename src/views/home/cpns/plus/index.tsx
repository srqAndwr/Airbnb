/*
 * @Author: shiruiqiang
 * @Date: 2022-11-13 20:30:22
 * @LastEditTime: 2022-11-13 20:46:39
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import ScrollView from '@/components/scroll-view';
import SectionBody from '@/components/section/body';
import SectionHeader from '@/components/section/header';
import {plus} from '@/model/types/plus';
import React, {memo} from 'react';
import {PlusWapper} from './style';

const Plus = memo((props: PropsType) => {
	const {plusInfo} = props;
	return (
		<PlusWapper>
			<SectionHeader
				title={plusInfo?.title}
				subtitle={plusInfo?.subtitle}
			/>
			<div className='section-body'>
				<ScrollView>
					{plusInfo?.list?.map((item) => {
						return (
							<SectionBody
								section={item}
								key={item.id}
								sectionItemWidth='20%'
							/>
						);
					})}
				</ScrollView>
			</div>
		</PlusWapper>
	);
});

interface PropsType {
	plusInfo?: plus;
}

export default Plus;
