/*
 * @Author: shiruiqiang
 * @Date: 2022-11-12 22:36:59
 * @LastEditTime: 2022-11-13 12:17:02
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const LongForWarpper = styled.div`
    margin:40px auto;
    padding:0 24px;
    max-width: 1080px;
    .section-body{
        margin: 0 -8px;
        .item{
            position: relative;
            padding: 8px;
            flex-shrink: 0;
            flex-basis: 20%;
            box-sizing: border-box;
            >img {
                object-fit: cover;
            }
            .bg-cover {
                position: absolute;
                left: 8px;
                right: 8px;
                bottom: 8px;
                height: 60%;
                background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%)
            }
            .desc {
                position: absolute;
                left: 8px;
                right: 8px;
                bottom: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 0 24px 32px;
                color: #fff;

                .city {
                    font-size: 18px;
                    font-weight: 600;
                }

                .price {
                    font-size: 14px;
                    margin-top: 5px;
                }
            }
        }
    }
`;