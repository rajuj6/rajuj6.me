import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

// about route component
export const AboutView = () => {
    return (
        <div className='ui-about'>

            {/* avatar */}
            <div className='ui-about__avatar'>
                <img className='ui-about__avatar__img' src='/assets/images/avatar.png' />
            </div>

            {/* bio */}
            <div className='ui-about__bio'>
                I am a full-stack web developer and general-purpose software developer with a vision to build easy-to-use and easy-to-maintain applications. With a professional work experience of more than 10 years. I am passionate about developing products that simplify our lives. I love challenging and complex tasks. Always keen to meet new people, learn from them, and help them to achieve common goals.
            </div>

            {/* request CV */}
            <a href='mailto:hello@rajuj6.me' className='ui-about__request-cv'>
                Request CV
            </a>
        </div>
    );
};

// default props
AboutView.defaultProps = {};

// set display name
AboutView.displayName = 'AboutView';
