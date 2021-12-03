import React from 'react';
import './styles.scss';
import Giftbox from './../../assets/Giftbox.png';

const UserProfile = props => {
    const { currentUser } = props;
    const { displayName } = currentUser;

    return (
        <div className="userProfile">
            <ul>
                <li>
                    <div className="img">
                        <img src={Giftbox} />
                    </div>
                </li>
                <li>
                    <span className="displayName">
                        {displayName && displayName}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default UserProfile; 