const dao = require('../db/tweets/dao');

module.exports = (app) => {

    const findAllTweets = (req, res) =>
      dao.findAllTweets()
        .then(tweets => res.json(tweets));

    const postNewTweet = (req, res) =>
        dao.createTweet(req.body)
          .then((insertedTweet) => res.json(insertedTweet));

    const deleteTweet = (req, res) =>
         dao.deleteTweet(req.params.id)
           .then((status) => res.send(status));

    const likeTweet = (req, res) =>
        dao.likeTweet(req.params.id, req.body)
           .then((status) => res.send(status));

    app.put('/api/tweets/:id/like', likeTweet);
    app.delete('/api/tweets/:id', deleteTweet);
    app.post('/api/tweets', postNewTweet);
    app.get('/api/tweets', findAllTweets);
};
