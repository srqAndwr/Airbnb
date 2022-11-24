/*
 * @Author: shiruiqiang
 * @Date: 2022-10-21 18:49:55
 * @LastEditTime: 2022-10-27 10:29:15
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const DetailWarpper = styled.div`
    .pictures{
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: -ms-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, -webkit-transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 450ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s !important;;
        }
        .item{
            position: relative;
            display: flex;
            align-items: center;
            background-color: #000;
            width: 100%;
            height: 100%;
            border: 1px solid;
            overflow: hidden;
            cursor: pointer;
            .cover{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,.3);
                opacity: 1;
                z-index: 1;
                transition: opacity 200ms ease;
            }
            &:hover > img{
                transform: scale(1.1);
            }
            &:hover > .cover{
                opacity: 0;
            }
        }
        .left{
            display: flex;
            align-items: center;
            width: 50%;
            height: 442px;
        }
        .right{
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            height: 442px;
            .item{
                width: 50%;
                height: 50%;
            }
        }
    }
    
`;