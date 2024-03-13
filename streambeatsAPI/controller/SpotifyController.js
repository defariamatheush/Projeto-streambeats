const Helper = require('../Helper/Helper');
const querystring = require('querystring');
const axios = require('axios');

const redirect_uri = "http://localhost:8081/home"
const scope = "playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-library-modify user-library-read user-read-playback-state user-modify-playback-state user-read-currently-playing app-remote-control streaming"

var state = ""
var refresh_token = ""
var expires_in = 0
var access_token = ""
var client_id = "a9511773d66947d089e44597b7bb6df7"
var client_secret = "abf21902f76b4026b31fc0acab14ee0d"
var tokenExpirado = false

class SpotifyController{

    async getMusica(require,response){
        if(tokenExpirado) await SpotifyController.refreshToken()
        //access_token = require.headers.access_token;
        var id_musica =  require.headers.id_musica;

        axios.get("https://api.spotify.com/v1/tracks/"+id_musica,{headers:{
                Authorization: 'Bearer ' + access_token
            }}).then(resultados => {
                console.log("Deu certo em pegar a música");
                console.log(resultados.data)
                response.json(resultados.data);
            }).catch(err => {
                console.log("Deu errado em pegar a música");
                console.log(err);         
                response.json(err.message);       
            });
    }

    async getMusicas(require,response){
        if(tokenExpirado) await SpotifyController.refreshToken()
        //access_token = require.headers.access_token;
        var nm_musica_pesquisa =  require.headers.nm_musica_pesquisa;

        axios.get("https://api.spotify.com/v1/search?"+querystring.stringify({
                q:nm_musica_pesquisa,
                type:['track'],
                limit:10
            }),{headers:{
                Authorization: 'Bearer ' + access_token
            }}).then(resultados => {
                console.log("Deu certo em pegar as músicas");
                console.log(resultados.data)
                response.json(resultados.data);
            }).catch(err => {
                console.log("Deu errado em pegar as músicas");
                console.log(err.message);         
                response.json(err.message);       
            });
    }

    async getMusicaAtual(require,response){
        if(tokenExpirado) await SpotifyController.refreshToken();
        //access_token = require.headers.access_token;
        axios.get("https://api.spotify.com/v1/me/player",{
            headers: {
              Authorization: 'Bearer ' + access_token
            }
          }).then(resultado => {
                console.log("Deu certo em pegar a música atual");
                console.log(resultado);
                response.json(resultado.data);
            }).catch(erro => {
                console.log("Deu errado em pegar a música atual");
                console.log(erro.message);
                response.json(erro.message);
            })
    }

    async login(req,res){
         
        state = await Helper.GerarCodigo(16);
        console.log(state);
        var link = 'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
        });
        res.json({link:link});
    };

    async getUsuarioAtual(require,response){
        if(tokenExpirado) await SpotifyController.refreshToken();
        //access_token = require.headers.access_token
        axios.get("https://api.spotify.com/v1/me",{
            headers: {
              Authorization: 'Bearer ' + access_token
            }
          }).then(result => {
            response.json(result.data);
        }).catch(err => {
            console.log("Deu errado em pegar usuário <atual>                                                                                                                                                                                                                                                        </atual>")
            console.log(err.message);
        });
    }

    async getToken(req,response){
      var code = req.headers;
      console.log(code);
      //var state = req.headers.state;   
      
      let body = {
          code:code,
          grant_type: "authorization_code",
          redirect_uri: redirect_uri,
      }

        axios({
          method: "POST",
          url: "https://accounts.spotify.com/api/token",
          data: new URLSearchParams(Object.entries(body)).toString(),
          headers:{
              'content-type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
          }
        }).then(retorno => {
            console.log("Deu certo para pegar o token");
            access_token = retorno.data.access_token;
            refresh_token = retorno.data.refresh_token;
            expires_in = retorno.data.expires_in;
            response.json(retorno.data);
        }).catch(err => {
            console.log("Deu erro para pegar o token");
            console.log(err.message);
            response.json(err.message);
        });

        tokenExpirado = false
        
        setTimeout(() => {
            tokenExpirado = true
        }, expires_in);
    }

    static async refreshToken(req,res){
        
        var refreshToken = this.refresh_token

        console.log("refresh token (getRefreshToken):" + refreshToken)
        if(refresh_token != undefined || refresh_token != null){
            let body = {
                grant_type: "refresh_token",
                refresh_token: refreshToken
            }
    
            axios({
                method: "POST",
                url: "https://accounts.spotify.com/api/token",
                data: new URLSearchParams(Object.entries(body)).toString(),
                headers:{
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
                }
              }).then(retorno => {
                  console.log("Deu certo para pegar o refresh token");
                  access_token = retorno.data.access_token;
                  refresh_token = retorno.data.refresh_token;
                  expires_in = retorno.data.expires_in;
                  res.json(retorno.data);
              }).catch(err => {
                  console.log("Deu erro para pegar o refresh token *");
                  console.log(err);
                  res.json(err.message);
              });
        }else{
            console.log("Refresh token nulo")
        }   

        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: { 
                'content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
            },
            form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
            },
            json: true
        };
        console.log("Refresh Token (refreshToken API): "+refresh_token);

        axios.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
            }
        });
    }

    async getRefreshToken(req,res){

        var refreshToken = req.headers.refreshToken;

        console.log("refresh token (getRefreshToken):" + refreshToken)
        if(refresh_token != undefined || refresh_token != null){
            let body = {
                grant_type: "refresh_token",
                refresh_token: refreshToken
            }
    
            axios({
                method: "POST",
                url: "https://accounts.spotify.com/api/token",
                data: new URLSearchParams(Object.entries(body)).toString(),
                headers:{
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
                }
              }).then(retorno => {
                  console.log("Deu certo para pegar o refresh token");
                  access_token = retorno.data.access_token;
                  refresh_token = retorno.data.refresh_token;
                  expires_in = retorno.data.expires_in;
                  res.json(retorno.data);
              }).catch(err => {
                  console.log("Deu erro para pegar o refresh token *");
                  console.log(err);
                  res.json(err.message);
              });
        }else{
            console.log("Refresh token nulo")
        }   
    }

}

module.exports = new SpotifyController();