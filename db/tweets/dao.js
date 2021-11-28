const model = require('./tweet-model');

const findAllTweets = () =>
    model.find();

const createTweet = async(tweet) => {
    await model.create(tweet);
    return model.find();
}

const deleteTweet = (id) =>
    model.deleteOne({_id: id});

const updateTweet = (id, tweet) =>
    model.updateOne({_id: id},
     {$set: tweet});

const likeTweet = (id, body) =>
    model.updateOne({_id: id}, {$set: {liked: body[0], stats: {
                    comments: body[1],
                    retweets: body[2],
                    likes: body[3],
                }}});

const updateWithInfo = async(id, changes) => {
    await model.updateOne({_id: id}, {$set: {liked: changes[0], stats: {
                comments: changes[0],
                retweets: changes[1],
                likes: changes[2],
            }}});
    return model.find();
    }

module.exports = {
  findAllTweets, createTweet,
  deleteTweet, updateTweet, likeTweet, updateWithInfo
};
