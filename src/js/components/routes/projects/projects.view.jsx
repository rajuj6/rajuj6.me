import React from 'react';
import Loader from 'react-loader-spinner';

// projects route view
export const ProjectsView = ( props ) => {
    return (
        <div className='ui-projects'>

            {/* projects list */}
            <div className='ui-projects__list'>
                {
                    props.projects.record.map( project => {
                        return (
                            <a key={ project.id } href={ project.url } target='_blank' className='ui-projects__list__item'>
                                <div className='ui-projects__list__item__title'>{ project.title }</div>
                                <div className='ui-projects__list__item__description'>{ project.description }</div>
                            </a>
                        );
                    } )
                }
            </div>

            {/* explore more */}
            <a className='ui-projects__explore' target='_blank' href='https://github.com/rajuj6'>
                Explore More
            </a>
        </div>
    );
};

// default props
ProjectsView.defaultProps = {
    projects: [],
};

// set display name
ProjectsView.displayName = 'ProjectsView';

/*******************/

// projects route preloader view
export const ProjectsPreloaderView = () => {
    return (
        <div className='ui-projects-preloader'>
            <Loader
                type="TailSpin"
                color="#000"
                height={ 100 }
                width={ 100 }
            />
        </div>
    );
};

// default props
ProjectsPreloaderView.defaultProps = {};

// set display name
ProjectsPreloaderView.displayName = 'ProjectsPreloaderView';
