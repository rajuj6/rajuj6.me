import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// local dependencies
import { getPosts } from 'services/posts.service';
import { PostsView, PostsPreloaderView } from './posts.view';
import { addPosts } from 'store/actions/posts';

/**
 * @desc Posts component.
 */
class _Posts extends React.Component {
    constructor( props ) {
        super( props );

        // bind methods
        this.onTopicChange = this.onTopicChange.bind( this );

        // component state
        this.state = {
            posts: props.posts,
            selectedTopic: '',
        };

        // component data
        this.data = {
            topics: [
                [ '', "<< All Topics >>" ],
                [ "js", "JavaScript" ],
                [ "ts", "TypeScript" ],
                [ "web", "Web Development" ],
                [ "wasm", "WASM" ],
                [ "electron", "Electron.js" ],
                [ "node", "Node.js" ],
                [ "npm", "NPM" ],
                [ "pwa", "PWA" ],
                [ "go", "Go (Golang)" ],
                [ "bash", "Bash Scripting" ],
                [ "dart", "Dart" ],
                [ "docker", "Docker" ],
                [ "devops", "DevOps" ],
                [ "security", "Security" ],
                [ "iot", "IoT" ],
                [ "nginx", "Nginx" ],
                [ "db", "DBMS" ],
                [ "misc", "Miscellaneous" ],
            ],
        }

        // fetch posts
        if( props.posts.length === 0 ) {
            this.fetchPosts();
        }
    }

    // fetch posts
    async fetchPosts() {
        const posts = await getPosts();
        
        // update state
        this.setState( { posts }, () => {
            this.props.addPosts( posts );
        } );
    }

    // on topic change
    onTopicChange( topic = '' ) {
        this.setState( {
            selectedTopic: topic,
        } );
    }

    // render
    render() {
        return this.state.posts.length === 0 ? (
            <PostsPreloaderView />
        ) : (
            <PostsView
                posts={ this.state.posts }
                selectedTopic={ this.state.selectedTopic }
                topics={ this.data.topics }
                onTopicChange={ this.onTopicChange }
            />
        );
    }
}

// default props
_Posts.defaultProps = {
    posts: [],
};

// set display name
_Posts.displayName = '_Posts';

/********************/

// get store state
const mapStateToProps = ( state ) => {
    return {
        posts: state.posts,
    };
};

// dispatch actions
const mapDispatchToProps = ( dispatch ) => {
    return {
        addPosts: bindActionCreators( addPosts, dispatch ),
    };
};

// export component
export const Posts = connect( mapStateToProps, mapDispatchToProps )( _Posts );

