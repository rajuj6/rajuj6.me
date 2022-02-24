import React from 'react';
import { NavLink as Link, Switch, Route } from 'react-router-dom';

// about route component
export const AboutView = () => {
    return (
        <div className='ui-about'>

			{/* bio */}
			<div className="ui-about__container ui-about__container__bio">
				<div className="ui-about__block">
					<div className="ui-about__bg" />
					<div className="ui-about__bg ui-about__bg__2" />
					<div className="ui-about__block__content">
						<h1 className="page-title"><span>Hi, I'm Raju</span></h1>
						<p>I am a full-stack web developer and general-purpose software developer with a vision to build easy-to-use and easy-to-maintain applications. </p>
						<p>With a professional work experience of more than 10 years. I am passionate about developing products that simplify our lives.</p>
						<h2>Things I care about</h2>
						<ul>
							<li>I love working on challenging problems and impactful products.</li>
							<li>I care passionately about culture, building great teams and crafting meaningful
								experiences.
							</li>
							<li>I like thinking in systems and designing for scale.</li>
							<li>I value great food, meaningful experiences and continuous learning.</li>
						</ul>

					</div>
					<figure>
						<img src="/assets/images/raju-info-gs.png" alt="Raju Ram Bio"/>
					</figure>
				</div>
			</div>

			{/* contact */}
			<div className="ui-about__container ui-about__container__contact">
				<div className="ui-about__block">
					<div className="ui-about__bg" />
					<div className="ui-about__bg ui-about__bg__2" />
					<div className="ui-about__block__content">
						<h1 className="page-title"><span>Where to find me</span></h1>
						<ul>
							<li><strong>You can reach me via email at <a
								href="mailto:hello@rajuj6.me">hello@rajuj6.me</a></strong></li>
							<li>If we’ve met, connect with me on <a
								href="https://in.linkedin.com/in/rajuj6">LinkedIn</a></li>
							<li>if we have shared interests, follow me on <a
								href="https://twitter.com/rajuj6">Twitter</a></li>
						</ul>
						<h2>Lets meet in person</h2>
						<p>I highly value learning - I love finding people, teams and organisations to learn from
							and help so get in touch.</p>

					</div>
					<figure>
						<img src="/assets/images/contact-gs.png"/>
					</figure>
				</div>
			</div>

            {/* request CV */}
            <a href='mailto:hello@rajuj6.me' target="_blank" className='ui-about__request-cv'>
                Request CV
            </a>
        </div>
    );
};

// default props
AboutView.defaultProps = {};

// set display name
AboutView.displayName = 'AboutView';
