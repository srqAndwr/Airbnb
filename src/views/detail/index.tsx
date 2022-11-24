/*
 * @Author: shiruiqiang
 * @Date: 2022-10-14 16:20:41
 * @LastEditTime: 2022-11-05 22:05:33
 * @LastEditors: shiruiqiang
 * @FilePath: index.tsx
 * @Description:
 */
import PictureBrowser from '@/components/picture-browser';
import {useAppDispatch, useAppSelector} from '@/hooks/storeHooks';
import {changIsAlpha, changIsFixed} from '@/model/main';
import React, {memo, useEffect, useState} from 'react';
import {shallowEqual} from 'react-redux';
import {DetailWarpper} from './style';
const Detail = memo(() => {
	const {roomInfo} = useAppSelector((state) => state.detail, shallowEqual);
	const [showPictureBrowser, setShowPictureBrowser] = useState(false);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(changIsFixed(false));
		dispatch(changIsAlpha(false));
	}, [dispatch]);
	return (
		<DetailWarpper>
			{showPictureBrowser && (
				<PictureBrowser
					pictures={roomInfo?.picture_urls ?? []}
					setShowPictureBrowser={(flag) =>
						setShowPictureBrowser(flag)
					}
				/>
			)}
			<div className='pictures'>
				<div className='left'>
					<div
						className='item'
						onClick={(e) => setShowPictureBrowser(true)}
					>
						<img src={roomInfo?.picture_urls?.[0]} alt='' />
						<div className='cover' />
					</div>
				</div>
				<div className='right'>
					{roomInfo?.picture_urls?.slice(1, 5).map((picture) => {
						return (
							<div
								className='item'
								key={picture}
								onClick={(e) => setShowPictureBrowser(true)}
							>
								<img src={picture} alt='' />
								<div className='cover' />
							</div>
						);
					})}
				</div>
			</div>
		</DetailWarpper>
	);
});

export default Detail;
