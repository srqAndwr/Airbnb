/*
 * @Author: shiruiqiang
 * @Date: 2022-10-15 11:18:47
 * @LastEditTime: 2022-10-15 11:22:49
 * @LastEditors: shiruiqiang
 * @FilePath: style.ts
 * @Description: 
 */
import styled from "styled-components";

export const HomeWarrper = styled.div`
    .banner{
        background-image: linear-gradient(to bottom,rgba(0, 0, 0, .3) 0%,rgba(0, 0, 0, .0) 300px,rgba(0, 0, 0, 0) 100%),url('./assets/img/home-cover.jpeg');
    }
    img{
        width: 100%;
        height: 100%;
    }
`;