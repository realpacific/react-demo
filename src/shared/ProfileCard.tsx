import React from 'react';
import {Card} from "antd";

export interface Profile {
    imageUrl: string;
    name: string;
    username: string;

}

export function ProfileCard(props: Profile) {
    return (
        <Card
            hoverable
            style={{margin: 10, width: 360, height: 400}}
            cover={
                <img height={300} width={360} alt="example" src={props.imageUrl}/>
            }>
            <p><strong>{props.name}</strong></p>
            <p>@{props.username}</p>
        </Card>
    )
}
