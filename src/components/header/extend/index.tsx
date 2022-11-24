/*
 * @Author: shiruiqiang
 * @Date: 2022-10-31 10:52:14
 * @LastEditTime: 2022-11-04 11:47:22
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import IconSearch from '@/assets/svg/icon-search';
import React, {Fragment, memo} from 'react';
import {HeaderExtendWarpper} from './style';

const HeaderExtend = memo((props: PropsType) => {
	const {searchInfo} = props;
	return (
		<HeaderExtendWarpper>
			<div className='section'>
				{searchInfo.map((item, index) => {
					return (
						<Fragment key={item.title}>
							<div className='item'>
								<div className='title'>{item.title}</div>
								<div className='desc'>{item.desc}</div>
								{index === searchInfo.length - 1 && (
									<div className='search'>
										<IconSearch
											width={16}
											height={16}
											strong={4}
										/>
									</div>
								)}
							</div>
							{index !== searchInfo.length - 1 && (
								<div className='split' />
							)}
						</Fragment>
					);
				})}
			</div>
		</HeaderExtendWarpper>
	);
});

interface PropsType {
	searchInfo: Array<{title: string; desc: string}>;
}

export default HeaderExtend;
