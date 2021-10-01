import axios from 'axios';

// get Medium posts
export const getPosts = async () => {
    const response = await axios.get( CONFIG.endpoints.articles );
    return response.data;
};
