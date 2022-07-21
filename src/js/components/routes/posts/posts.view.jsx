import { filter, includes, isEmpty, noop } from 'lodash';
import React from 'react';
import Loader from 'react-loader-spinner';

// posts route view
export const PostsView = ( props ) => {

    // filter posts
    const filteredPosts = isEmpty( props.selectedTopic ) ? props.posts.record : filter( props.posts.record, post => {
        return includes( post.languages, props.selectedTopic );
    } );

    return (
        <div className='ui-posts'>

            {/* filter */}
            <div className='ui-posts__filter'>
                <select onChange={ ( e ) => props.onTopicChange( e.target.value ) } value={ props.selectedTopic }>
                    {
                        props.topics.map( ( [ value, key ] ) => {
                            return (
                                <option key={ value } value={ value }>{ key }</option>
                            );
                        } )
                    }
                </select>
            </div>

            {/* posts list */}
            <div className='ui-posts__list'>
                {
                    filteredPosts.records.map( project => {
                        return (
                            <a key={ project.title } href={ project.url } target='_blank' className='ui-posts__list__item'>
                                <div className='ui-posts__list__item__title'>{ project.title }</div>
                                <div className='ui-posts__list__item__description'>{ project.description }</div>
                            </a>
                        );
                    } )
                }
            </div>

            {/* explore more */}
            <a className='ui-posts__explore' target='_blank' href='http://medium.com/@rajuj6'>
                Explore More
            </a>
        </div>
    );
};

// default props
PostsView.defaultProps = {
    onTopicChange: noop,
    topics: {},
    selectedTopic: '',
    posts: [],
};

// set display name
PostsView.displayName = 'PostsView';

/*******************/

// posts route preloader view
export const PostsPreloaderView = () => {
    return (
        <div className='ui-posts-preloader'>
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
PostsPreloaderView.defaultProps = {};

// set display name
PostsPreloaderView.displayName = 'PostsPreloaderView';
