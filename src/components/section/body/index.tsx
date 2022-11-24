/*
 * @Author: shiruiqiang
 * @Date: 2022-10-18 08:52:56
 * @LastEditTime: 2022-10-29 09:58:12
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import {roomInfo} from '@/model/types/common';
import React, {memo} from 'react';
import {Rating} from '@mui/material';

import {SectionBodyWarpper} from './style';
import CoverSlider from '../slider';
import {useAppDispatch} from '@/hooks/storeHooks';
import {changeRoomInfo} from '@/model/detail';
import {useNavigate} from 'react-router-dom';

const SectionBody = memo((props: propsType) => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const {section, sectionItemWidth = '25%'} = props;
	const pictureUrls = section.picture_urls ?? [];
	const handleToNavigate = () => {
		dispatch(changeRoomInfo(section));
		navigate('/detail');
	};
	return (
		<SectionBodyWarpper
			sectionItemWidth={sectionItemWidth}
			verifyInfoColor={section?.verify_info?.text_color}
			rateStyle={{
				color: section?.bottom_info?.content_color,
				size: section?.bottom_info?.font_size,
			}}
		>
			<div className='cover'>
				{pictureUrls.length !== 0 && (
					<CoverSlider
						pictureUrls={pictureUrls}
						handleClick={handleToNavigate}
					/>
				)}
				<img src={section.picture_url} alt='' />
			</div>
			<div className='description'>
				<div className='verify-info'>
					{section?.verify_info?.messages?.includes('已验证') && (
						<div className='plus-box'>PLUS</div>
					)}
					{section?.verify_info?.messages?.join(' · ')}
				</div>
				<div className='name' title={section?.name}>
					{section?.name}
				</div>
				<div className='price'>{section?.price_format}/晚</div>
				<div className='rate'>
					<Rating
						value={section?.star_rating ?? 4.5}
						precision={0.5}
						readOnly
						sx={{
							zIndex: -10,
							fontSize: '12px',
							color: section.star_rating_color,
						}}
					/>
					<div className='review'>
						{section?.reviews_count}
						{section?.bottom_info?.content && (
							<span>
								&nbsp;·&nbsp;{section?.bottom_info?.content}
							</span>
						)}
					</div>
				</div>
			</div>
		</SectionBodyWarpper>
	);
});

interface propsType {
	section: roomInfo;
	sectionItemWidth?: string;
}

export default SectionBody;
