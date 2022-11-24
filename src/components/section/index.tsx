/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 16:09:21
 * @LastEditTime: 2022-10-20 15:58:28
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import {roomInfo} from '@/model/types/common';
import React, {memo} from 'react';
import SectionBody from './body';
import SectionFooter from './footer';
import SectionHeader from './header';
import {SectionWarpper} from './style';
import SectionTabs from './tabs';

const Section = memo((props: propsType) => {
	const {
		sectionInfo,
		title,
		subtitle = undefined,
		isShowArrow,
		sectionItemWidth,
		sectionFooter = {},
		tabs = [],
		changTab,
	} = props;
	return (
		<SectionWarpper>
			<SectionHeader
				title={title}
				subtitle={subtitle}
				isShowArrow={isShowArrow}
			/>
			{tabs.length !== 0 && (
				<div className='tabs'>
					<SectionTabs tabs={tabs!} changTab={changTab!} />
				</div>
			)}
			<div className='section-body'>
				{sectionInfo?.map((section, index) => {
					if (index < 8) {
						return (
							<SectionBody
								key={section.id}
								section={section}
								sectionItemWidth={sectionItemWidth}
							/>
						);
					} else return null;
				})}
			</div>
			<SectionFooter {...sectionFooter} />
		</SectionWarpper>
	);
});

interface propsType {
	sectionInfo?: roomInfo[];
	title?: string;
	subtitle?: string;
	sectionItemWidth?: string;
	sectionFooter?: {
		name: string;
		color?: string;
	};
	isShowArrow?: boolean;
	tabs?: string[];
	changTab?: (index: number, payload: string) => void;
}

export default Section;
