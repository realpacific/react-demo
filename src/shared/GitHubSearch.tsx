import React from 'react';
import {Button, Form, Input} from 'antd';
import {Store} from 'antd/lib/form/interface';
import {Profile} from "./ProfileCard";

type SubmitAction = {
    onSubmit: (profile: Profile) => void;
}

export function GitHubSearch(props: SubmitAction) {

    const onFinish = async (values: Store) => {
        const data = await fetch(`https://api.github.com/users/${values.username}`);
        if (data.ok) {
            const response = await data.json();
            const profile: Profile = {
                username: values.username,
                name: response.name,
                imageUrl: response.avatar_url
            };
            props.onSubmit(profile)
        }
    };


    return (
        <Form
            layout="inline"
            name="basic"
            initialValues={{username: ''}}
            onFinish={onFinish}>

            <Form.Item name="username">
                <Input style={{width: 400}} size="large" placeholder="Username"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" size={"large"} htmlType="submit">+</Button>
            </Form.Item>

        </Form>
    )
}
