import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

// contact route component
export const ContactView = () => {
    return (
        <div className='ui-contact'>
            {/* email */}
            <a href='mailto:hello@rajuj6.me' className='ui-contact__section'>
                <div className='ui-contact__section__title'>Email</div>
                <div className='ui-contact__section__value'>hello@rajuj6.me</div>
            </a>

            {/* medium */}
            <a href='https://medium.com/@rajuj6' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>medium</div>
                <div className='ui-contact__section__value'>@rajuj6</div>
            </a>

            {/* github */}
            <a href='https://github.com/rajuj6' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>github</div>
                <div className='ui-contact__section__value'>@rajuj6</div>
            </a>

            {/* twitter */}
            <a href='https://twitter.com/rajuj6' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>twitter</div>
                <div className='ui-contact__section__value'>@rajuj6</div>
            </a>

            {/* instagram */}
            <a href='https://instagram.com/rajuj6' target='_blank' className='ui-contact__section'>
                <div className='ui-contact__section__title'>instagram</div>
                <div className='ui-contact__section__value'>@rajuj6</div>
            </a>

        </div>
    );
};

// default props
ContactView.defaultProps = {};

// set display name
ContactView.displayName = 'ContactView';
