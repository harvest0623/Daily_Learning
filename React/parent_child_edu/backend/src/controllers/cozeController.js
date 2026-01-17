const axios = require('axios');

async function recognition(ctx) {
    const { img } = ctx.request.body;
    // 向工作流发请求
    const params = { image: img };
    try {
        const res = await axios({
            method: 'post',
            url: 'https://3xksw7qxn9.coze.site/run',
            headers: {
                'Authorization': `Bearer ${process.env.VITE_COZE_IMAGE_TO_TEXT_AND_VOICE}`,
                'Content-Type': 'application/json'
            },
            data: params
        })
        ctx.body = res.data;
    } catch (error) {
        console.log(error.response.data);
        ctx.body = {
            status: 'error',
            message: error.message
        }
    }
}

module.exports = {
    recognition
}