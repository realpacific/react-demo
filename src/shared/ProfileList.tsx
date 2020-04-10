import {Col, Row} from "antd";
import React from "react";
import {Profile, ProfileCard} from "./ProfileCard";

type ProfileList = {
    items: Profile[]
}

export const CardList = (props: ProfileList) => {
    return <Row gutter={16}>
        {
            props.items.map(profile => {
                return (
                    <>
                        <Col className="gutter-row" span={5}>
                            <ProfileCard {...profile}/>
                        </Col>
                    </>
                )
            })
        }
    </Row>
};
