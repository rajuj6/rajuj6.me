import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// local dependencies
import { ProjectsView, ProjectsPreloaderView } from './projects.view';
import { getProjects } from 'services/projects.service';
import { addProjects } from 'store/actions/projects';

/**
 * @desc Projects component.
 */
class _Projects extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {
            projects: props.projects,
        };

        // fetch projects
        if( props.projects.length === 0 ) {
            this.fetchProjects();
        }
    }

    // fetch projects
    async fetchProjects() {
        const projects = await getProjects();
        
        // update state
        this.setState( { projects }, () => {
            this.props.addProjects( projects );
        } );
    }

    // render
    render() {
        return this.state.projects.length === 0 ? (
            <ProjectsPreloaderView />
        ) : (
            <ProjectsView
                projects={ this.state.projects }
            />
        );
    }
}

// default props
_Projects.defaultProps = {
    projects: [],
};

// set display name
_Projects.displayName = '_Projects';

/********************/

// get store state
const mapStateToProps = ( state ) => {
    return {
        projects: state.projects,
    };
};

// dispatch actions
const mapDispatchToProps = ( dispatch ) => {
    return {
        addProjects: bindActionCreators( addProjects, dispatch ),
    };
};

// export component
export const Projects = connect( mapStateToProps, mapDispatchToProps )( _Projects );
