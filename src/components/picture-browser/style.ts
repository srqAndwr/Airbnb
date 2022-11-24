/*
 * @Author: shiruiqiang
 * @Date: 2022-10-26 09:25:29
 * @LastEditTime: 2022-10-26 17:32:51
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const PictureBrowserWarpper = styled.div<{
    isNext: boolean;
}>`
    position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	background-color: rgb(33, 33, 33);
	opacity: 1;
	z-index: 999;
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
    .header{
        padding: 66px 15px 20px;
        .close{
            position: absolute;
            top: 0;
            right: 0;
            padding: 16px 28px 8px;
            cursor: pointer;
        }
    }
    .body{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        color: #fff;
        .switch{
            display: flex;
            align-items: center;
            width: 75px;
            height: 100%;
            cursor: pointer;
        }
        .next{
            transform: rotate(-180deg);
        }
        .content{
            position: relative;
			height: 100%;
			overflow: hidden;
			width: 100% !important;
			max-width: 105vh !important;
            
            img{
                position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
                object-fit: contain;
            }

            .fade-enter{
                transform: translate(${props => props.isNext ? "100%" : "-100%"});
                opacity: 0;
            }
            .fade-enter-active{
                transform: translate(0);
                opacity: 1;
                transition: transform 150ms ease;
            }
            .fade-exit{
                opacity: 1;
            }
            .fade-exit-active{
                opacity: 0;
                transition: opacity 150ms ease;
            }
        }
    }
    .footer{
        display: flex;
		justify-content: center;
		height: 100px;
		margin-top: 10px;
        font-size: 14px;
        font-weight: 500;
        .outer{
            position: absolute;
			bottom: 10px;
			max-width: 105vh;
			color: #fff;
            .top{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .toggle{
                    cursor: pointer;
                }
            }
            .bottom{
                margin-top: 5px;
				transition: height 300ms ease;
                overflow: hidden;
                .item{
                    margin-right: 10px;
                    width: 100px;
                    height: 67px;
                    cursor: pointer;
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        opacity: .5;
                    }
                    &.active{
                        img{
                            opacity: 1;
                        }
                    }
                }
            }
        }
        
    }
`;