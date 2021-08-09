const fetch = require('node-fetch');

const { apiKey } = require('../config/key');
const { apiUrl, limit } = require('../config/config');

const { sanitize } = require('../helpers/sanitize');

exports.home = (req, res) => {
    fetch(`${apiUrl}/trending?api_key=${apiKey}&limit=${limit}`)
    .then((resp) => {
        if(!resp.ok){
            throw Error('no resp from giphy')
        } else {
            return resp.json();
        }
    })
    .then((data) => {
        // console.log(data)
        // render the ejs file eventually
        let imgArry = [];
        data.data.forEach(element => {
            imgArry.push(element.images);
        });

        let giphUrls = [];
        imgArry.forEach(el => {
            giphUrls.push(el.downsized_medium.url)
        });

        res.render('landing', {data: giphUrls});
        // res.end();
    })
    .catch((err)=> {
        console.log(err);
    })
    // res.render('home');
};

exports.search = (req, res) => {
    let keyword = req.query.kword;

    fetch(`${apiUrl}/search?api_key=${apiKey}&q=${keyword}&limit=${limit}`)
    .then((resp) => {
        if(!resp.ok){
            throw Error('no resp from giphy')
        } else {
            return resp.json();
        }
    })
    .then((data) => {
        // console.log(data)
        // render the ejs file eventually
        let imgArry = [];
        data.data.forEach(element => {
            imgArry.push(element.images);
        });

        let giphUrls = [];
        imgArry.forEach(el => {
            giphUrls.push(el.downsized_medium.url)
        });

        res.render('landing', {data: giphUrls});
        // res.end();
    })
    .catch((err)=> {
        console.log(err);
    });
}