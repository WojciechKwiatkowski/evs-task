import React from 'react';
import InformationBox from '../../Layout/PageElements/InformationBox/InformationBox'
import './HomePage.css'

const HomePage = (props) => {
    return (
        <div className="homePage">
            <div className="homePageBoxContainer">
                <InformationBox margin="auto">
                    {props.children}
                </InformationBox>
            </div>
        </div>
    );
}

export default HomePage;