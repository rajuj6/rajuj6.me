import React from 'react';
import {NavLink as Link, Switch, Route} from 'react-router-dom';

// local dependencies
import { About } from 'components/routes/about';
import { Contact } from 'components/routes/contact';
import { Projects } from 'components/routes/projects';
import { Posts } from 'components/routes/posts';

import { updateUIMode } from 'store/actions/ui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// app component view
export const AppComponent = ( props ) => {
	return (
		<div className="ui-app">
			<div className="ui-app__bg__container">
				<div className="ui-app__bg"/>
				<div className="ui-app__bg ui-app__bg__2"/>
			</div>
			<div className="ui-mode-switch">
				<button onClick={() => {
					const value = ( 'dark' === props.mode || '' === props.mode || null === props.mode ) ? 'light' : 'dark';
					props.updateUIMode( value );
				}} type="button" title="Use light theme"><span>

					{'dark' === props.mode || '' === props.mode || null === props.mode ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6.995 12C6.995 14.761 9.241 17.007 12.002 17.007C14.763 17.007 17.009 14.761 17.009 12C17.009 9.239 14.763 6.993 12.002 6.993C9.241 6.993 6.995 9.239 6.995 12ZM11 19H13V22H11V19ZM11 2H13V5H11V2ZM2 11H5V13H2V11ZM19 11H22V13H19V11Z" fill="#333" /><path d="M5.63702 19.778L4.22302 18.364L6.34402 16.243L7.75802 17.657L5.63702 19.778Z" fill="#333" /><path d="M16.242 6.34405L18.364 4.22205L19.778 5.63605L17.656 7.75805L16.242 6.34405Z" fill="#333" /><path d="M6.34402 7.75902L4.22302 5.63702L5.63802 4.22302L7.75802 6.34502L6.34402 7.75902Z" fill="#333" /><path d="M19.778 18.3639L18.364 19.7779L16.242 17.6559L17.656 16.2419L19.778 18.3639Z" fill="#333" />
					</svg>
						:
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="#333" d="M12 11.807C10.7418 10.5483 9.88488 8.94484 9.53762 7.1993C9.19037 5.45375 9.36832 3.64444 10.049 2C8.10826 2.38205 6.3256 3.33431 4.92899 4.735C1.02399 8.64 1.02399 14.972 4.92899 18.877C8.83499 22.783 15.166 22.782 19.072 18.877C20.4723 17.4805 21.4245 15.6983 21.807 13.758C20.1625 14.4385 18.3533 14.6164 16.6077 14.2692C14.8622 13.9219 13.2588 13.0651 12 11.807V11.807Z"/></svg>
					}

				</span>
				</button>
			</div>
			{/* logo/header */}
			<div className="ui-app__logo">
				<h1><span>Raju Ram</span></h1>
			</div>

			{/* navigation */}
			<div className="ui-app__nav">
				<Link className="ui-app__nav__item" activeClassName="ui-app__nav__item--active" exact to="/">About</Link>
				<Link className="ui-app__nav__item" activeClassName="ui-app__nav__item--active" to="/posts">Posts</Link>
				<Link className="ui-app__nav__item" activeClassName="ui-app__nav__item--active" to="/projects">Projects</Link>
				<Link className="ui-app__nav__item" activeClassName="ui-app__nav__item--active" to="/contact">Contact</Link>
			</div>

			{/* routes */}
			<div className="ui-app__routes">
				<Switch>
					<Route path="/posts" component={Posts}/>
					<Route path="/projects" component={Projects}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/" component={About}/>
				</Switch>
			</div>

			{/* footer */}
			<div className="ui-app__footer">
				<div className="ui-app__footer__links">
					<a className="ui-app__footer__links__link" href="https://medium.com/@rajuj6" target="_blank">Medium</a>
					<a className="ui-app__footer__links__link" href="https://github.com/rajuj6" target="_blank">GitHub</a>
					<a className="ui-app__footer__links__link" href="https://twitter.com/rajuj6" target="_blank">Twitter</a>
					<a className="ui-app__footer__links__link" href="https://instagram.com/rajuj6" target="_blank">Instagram</a>
				</div>

				<div className="ui-app__footer__source-code">
					<a className="ui-app__footer__source-code__link" href="https://github.com/rajuj6/rajuj6.me" target="_blank">(Source Code)</a>
				</div>
			</div>
		</div>
	);
};

// default props
AppComponent.defaultProps = {
	mode: 'dark'
};

// set display name
AppComponent.displayName = 'AppView';

// get store state
const mapStateToProps = ( state ) => {
	return {
		mode: state.mode,
	};
};

// dispatch actions
const mapDispatchToProps = ( dispatch ) => {
	return {
		updateUIMode: bindActionCreators( updateUIMode, dispatch ),
	};
};

export const AppView = connect( mapStateToProps, mapDispatchToProps )( AppComponent );
