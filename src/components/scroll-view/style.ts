/*
 * @Author: shiruiqiang
 * @Date: 2022-11-12 20:25:25
 * @LastEditTime: 2022-11-13 20:58:02
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const ScrollViewWarpper = styled.div`
    position: relative;
    padding: 8px 0;
    .btn{
        .left-cover,
        .right-cover{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 48px;
            height: 68px;
            z-index: 19;
        }
        .left-cover{
            left: 0px;
            background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);
        }
        .right-cover{
            right: 0px;
            background: linear-gradient(270deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 17%, rgba(255, 255, 255, 0) 100%);
        }
        .arrow{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 48px;
            width: 48px;
            z-index: 99;
            .circle{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 10px;
                width: 28px;
                height: 28px;
                border-radius: 100%;
                border-style: 2px solid;
                background-color: #fff;
                cursor: pointer;
                box-shadow: rgb(0 0 0 / 14%) 0px 1px 2px 1px;
            }
        }
        .left{
            left: -14px;
        }
        .right{
            right: -14px; 
            display: flex;
            justify-content: flex-end;
            .circle{
                box-shadow: rgb(0 0 0 / 14%) 0px 1px 2px 1px;
            }
        }
    }
    .content{
        overflow-x: hidden;
        z-index: 9;
        .tabs{
            display: flex;
            transition: -ms-transform 0.5s,-webkit-transform 0.5s,transform 0.5s ;
        }
    }
`;