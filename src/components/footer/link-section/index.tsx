/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 16:33:39
 * @LastEditTime: 2022-10-20 17:38:18
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import {linkSection} from 'model/types/common';
import React, {memo} from 'react';
import {LinkSectionWarrper} from './style';

const LinkSection = memo((props: propsType) => {
	const {sectionInfo} = props;
	return (
		<LinkSectionWarrper>
			<h4 className='title'>{sectionInfo.title}</h4>
			<ul>
				{sectionInfo.list.map((item) => {
					return (
						<li key={item.text}>
							<div className='text'>{item.text}</div>
							{item.isExtra && (
								<div className='extra'>新推出</div>
							)}
						</li>
					);
				})}
			</ul>
		</LinkSectionWarrper>
	);
});

interface propsType {
	sectionInfo: linkSection;
}

export default LinkSection;
