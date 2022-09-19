import React from 'react';

const Header = ({ status }) => {
    return (
        <div className={status ? 'header' : 'header__move'}>
            <div className="header__body">
                <h1>Фабрика обуви</h1>
                <div className="header__avatar"></div>
            </div>
        </div>
    );
};

export default Header;