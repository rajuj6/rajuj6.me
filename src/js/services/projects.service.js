import axios from 'axios';

// get GitHub projects
export const getProjects = async () => {
    const response = await axios.get( CONFIG.endpoints.projects );
    return response.data;
};
