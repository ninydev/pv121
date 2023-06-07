const axios = require("axios");


async function fetchChatGPT(question) {
    const options = {
        method: 'POST',
        url: 'https://api.openai.com/v1/completions',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Здесь нужно указать свой API ключ
        },
        data: {
            "model": "text-davinci-002",
            "prompt": question,
            "max_tokens": 1024,
            "temperature": 1,
            "top_p": 1,
            "n": 1,
            "stream": false,
            // "logprobs": null,
            // "stop": "\n"
        },
    };

    const response = await axios(options);
    const data = response.data;
    console.log(data)
    // Вот тут мы забираем 1 вариант ответа от чатика
    const text = data.choices[0].text.trim();
    return text;
}

module.exports = fetchChatGPT
