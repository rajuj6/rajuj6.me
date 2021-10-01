import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

// local dependencies
import { About } from 'components/routes/about';
import { Contact } from 'components/routes/contact';
import { Projects } from 'components/routes/projects';
import { Posts } from 'components/routes/posts';

// app component view
export const AppView = () => {
    return (
        <div className='ui-app'>

            {/* logo/header */}
            <div className='ui-app__logo'>
                Raju Ram
            </div>

            {/* navigation */}
            <div className='ui-app__nav'>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' exact to='/'>About</Link>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' to='/posts'>Posts</Link>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' to='/projects'>Projects</Link>
                <Link className='ui-app__nav__item' activeClassName='ui-app__nav__item--active' to='/contact'>Contact</Link>
            </div>

            {/* routes */}
            <div className='ui-app__routes'>
                <Switch>
                    <Route path='/posts' component={ Posts } />
                    <Route path='/projects' component={ Projects } />
                    <Route path='/contact' component={ Contact } />
                    <Route path='/' component={ About } />
                </Switch>
            </div>

            {/* footer */}
            <div className='ui-app__footer'>
                <div className='ui-app__footer__links'>
                    <a className='ui-app__footer__links__link' href='https://medium.com/@rajuj6' target='_blank'>Medium</a>
                    <a className='ui-app__footer__links__link' href='https://github.com/rajuj6' target='_blank'>GitHub</a>
                    <a className='ui-app__footer__links__link' href='https://twitter.com/rajuj6' target='_blank'>Twitter</a>
                    <a className='ui-app__footer__links__link' href='https://instagram.com/rajuj6' target='_blank'>Instagram</a>
                </div>

                <div className='ui-app__footer__source-code'>
                    <a className='ui-app__footer__source-code__link' href='https://github.com/rajuj6/rajuj6.me' target='_blank'>(Source Code)</a>
                </div>
            </div>
        </div>
    );
};

// default props
AppView.defaultProps = {};

// set display name
AppView.displayName = 'AppView';
