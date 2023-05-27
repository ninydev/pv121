const axios = require('axios');
const { parseStringPromise } = require('xml2js');

const pmid = '35349976';
const NLM_API_KEY = ''
const OPENAI_API_KEY = ''

async function fetchChatGPT(question) {
    const options = {
        method: 'POST',
        url: 'https://api.openai.com/v1/completions',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`, // Здесь нужно указать свой API ключ
        },
        data: {
            "model": "text-davinci-002",
            "prompt": question,
            "max_tokens": 256,
            "temperature": 0,
            "top_p": 1,
            "n": 1,
            "stream": false,
            // "logprobs": null,
            // "stop": "\n"
        },
    };

    const response = await axios(options);
    const data = response.data;

    const text = data.choices[0].text.trim();
    return text;

}

async function fetchArticle(pmid) {
    const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?api_key=${NLM_API_KEY}&db=pubmed&id=${pmid}&rettype=abstract&retmode=xml`;

    const response = await axios.get(url);
    const xml = response.data;

    const obj = await parseStringPromise(xml);
    return obj;
}



fetchArticle(pmid)
    .then(resultArticle => {
        let title = resultArticle.PubmedArticleSet.PubmedArticle[0].MedlineCitation[0].Article[0].ArticleTitle[0]
        console.log(`Article Title: ${title}`);
        fetchChatGPT('К какой области медицины относится эта статья. Ответ 3 словами разделенный запятой: ' + title)
            .then( resultChat => {
                console.log('Chat GPT set 3 categories: ' + resultChat)
            })
            .catch((error) => {
                console.error(`Error API ChatGPT: ${error}`);
            });

    })
    .catch((error) => {
        console.error(`Error API MLM: ${error}`);
    });
