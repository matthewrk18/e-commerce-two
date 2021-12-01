import React from 'react';
import Giftbox from './../../assets/Giftbox.png'
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div className="item">
                    <a href="">
                        Shop Womens
                    </a>
                </div>

                <div className="item">
                    <a href="">
                        Shop Mens
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;