const axios = require('axios');

const getTopStories = async () => {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.NYTIMES_API_KEY}`)
    if(response.status === 200){
        return response.data.results;
    }
    return [];
}

module.exports = {
    getTopStories
}