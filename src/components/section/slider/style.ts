/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 20:17:44
 * @LastEditTime: 2022-11-12 21:30:36
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const SliderWarpper = styled.div`
    width: 100%;
    height: 100%;
    .imgs{
        position: relative;
        width: 100%;
        height: 100%;
        &:hover > .slide-arrow{
            display: flex;
        }
        .wish{
            position: absolute;
            top: 16px;
            right: 16px;
            z-index: 2;
        }
        .slide-arrow{
            position: absolute;
            top: 0;
            left: 0;
            display: none;
            justify-content: space-between;
            width: 100%;
            height: 100%;
            z-index: 1;
            color: #fff;
            .left,.right{
                width: 20%;
                padding-left: 5%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 800;
                > svg{
                    transform: translateY(7.5px);
                }
            }
            .left{
                transform: rotate(180deg);
                background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
                > svg{
                    transform: translateY(5px);
                }
            }
            .right{
                background: linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.25) 100%);
                
            }
        }
        .indicator {
            position: absolute;
            z-index: 9;
            bottom: 10px;
            left: 0;
            right: 0;
            width: 40%;
            margin: 0 auto;
            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 14%;
                .dot {
                    width: 6px;
                    height: 6px;
                    background-color: rgba(255,255,255,0.8);
                    border-radius: 50%;
                    &.active {
                        background-color: #fff;
                        width: 8px;
                        height: 8px;
                    }
                }
            }
        }
    }
`;