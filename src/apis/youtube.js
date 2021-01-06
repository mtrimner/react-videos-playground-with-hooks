import axios from 'axios';

const KEY = 'AIzaSyDnU-7yL_rumNs0mCJ_H4xN5MCnkMNQlR4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})