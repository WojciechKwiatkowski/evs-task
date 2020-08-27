import React from 'react';
import './TopMenu.css';
import { Redirect } from 'react-router-dom';
import Button from '../PageElements/Button/Button';

const TopMenu = (props) => {
    const [redirect, setRedirect] = React.useState(false);
    const [redirectPath, setRedirectPath] = React.useState(null)

    const renderRedirect = (link) => {
        setRedirect(true);
        setRedirectPath(link);
    };

    let redirectElement = null;
    if (redirect !== false) {
        redirectElement = <Redirect to={redirectPath}></Redirect>
    }

    return (
        <nav className="topMenu">
            {redirectElement}
            <div className="topMenuHomeLinkContainer">
                <Button onClickHandler={() => renderRedirect('/')}>Home</Button>
            </div>
            <div className="topMenuSpaceFiller"> </div>
            <div className="topMenuLinks">
                <ul>
                    {props.links.map(link => {
                        return (
                            <li key={link.id}>
                                <Button onClickHandler={() => renderRedirect(link.redirectAddress)}>
                                    {link.text}
                                </Button>
                            </li>
                        );
                    })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;