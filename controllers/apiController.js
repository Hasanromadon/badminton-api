const {newsModel} = require('../models/newsModel');
const { playerModel } = require('../models/playersModel');

// NEWS Controller
exports.getAllNews =  (req, res) => {
  res.status(200).json({
    status: 'success',
    data: newsModel
  });
};

exports.getNews =  (req, res) => {
  const id = +req.params.id;
  
  const news = newsModel.filter(news => (
    news.id === id
  ))

  res.status(200).json({
    status: 'success',
    data: news
  });
};


// PLAYER Controller
exports.getAllPlayers =  (req, res) => {
  res.status(200).json({
    status: 'success',
    data: playerModel
  });
};

exports.getPlayer =  (req, res) => {
  const id = +req.params.id;
  
  const player = playerModel.filter(player => (
    player.id === id
  ))

  res.status(200).json({
    status: 'success',
    data: player
  });
};
