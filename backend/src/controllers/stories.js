const { getTopStories } = require("../services/stories")

const getStories = async (req, res) => {
    try {
        const data = await getTopStories()
        res.json({
            status: true,
            data,
            message: "story api is working"
        })
    } catch (error) {
        res.json({
            status: false,
            data: [],
            message: error.message
        })
    }
}

module.exports = {
    getStories
}