import React, {useState} from 'react';
import './App.css';
import {PageHeader} from "antd";
import {Profile} from "./shared/ProfileCard";
import {GitHubSearch} from "./shared/GitHubSearch";
import {CardList} from './shared/ProfileList';


function App() {
    const [profiles, setProfiles] = useState([] as Profile[]);
    const addNewProfile = (profile: Profile) => {
        const newState = [...profiles, profile];
        setProfiles(newState);
    };

    return (
        <div className="App">
            <PageHeader
                className="site-page-header"
                title="GitHub App"
                subTitle="made with React"
            />

            <GitHubSearch onSubmit={addNewProfile}/>

            <CardList items={profiles}/>
        </div>
    );
}

export default App;
