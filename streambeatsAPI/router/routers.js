var express = require("express")
var app = express();
var router = express.Router();

const SpotifyController = require('../controller/SpotifyController');

router.get('/login',SpotifyController.login);
router.get('/getToken',SpotifyController.getToken);
router.get('/getUsuarioAtual',SpotifyController.getUsuarioAtual);
router.get('/getMusicaAtual',SpotifyController.getMusicaAtual);
router.get('/getMusicas',SpotifyController.getMusicas);
router.get('/getMusica',SpotifyController.getMusica);
router.get('/getRefreshToken',SpotifyController.getRefreshToken);


module.exports = router;