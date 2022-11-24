/*
 * @Author: shiruiqiang
 * @Date: 2022-10-17 12:17:27
 * @LastEditTime: 2022-10-20 17:38:02
 * @LastEditors: shiruiqiang
 * @FilePath: common.ts
 * @Description: 
 */
export interface review{
    comments?: string;
    create_at?: string;
    is_translated?: boolean;
    localized_date?: string;
    reviewer_image_url?: string;
    review_id: string;
}

export interface bottomInfo {
    content?: string;
    content_color?: string;
    font_size?: string;
    visibility?: string;
};

export interface verifyInfo{
    messages?: string[];
    text_color?: string;
}

export interface addressInfo{
    name: string;
    homes?: string[];
}

export interface roomInfo{
    id: string;
    picture_url?: string;
    picture_urls?: string[];
    verify_info?: verifyInfo;
    name: string;
    price: number;
    price_format?: string;
    star_rating?: number;
    star_rating_color?: string;
    reviews_count?: number;
    reviews?: review[];
    bottom_info?: bottomInfo;
    lat?: number;
    lng?: number;
    image_url?: string;
}

export interface linkSection{
    id: number;
    title: string;
    list: Array<{ text: string; isExtra:boolean}>
}