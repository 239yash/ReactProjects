import React, {useEffect} from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();
 
function App() {
  const [{token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash="";
    const _token = hash.access_token;

    if(_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);
      
      spotify.getMe().then(user => {
        console.log("User", user);
        dispatch({
          type: 'SET_USER',
          user:user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("Playlists", playlists);
        dispatch ({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
        // console.log("Playlists", playlists);
      });

      // console.log("User", user);
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {
        token? (
          <Player spotify = {spotify}/>
        ): (
          <Login/>
        )
      }

    </div>
  );
}

export default App;
