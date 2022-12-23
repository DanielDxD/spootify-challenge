import React from "react";
import config from "../../config";
import './styles/_login.scss'

export default function Login() {

    return (
        <div className="main-login">
            <h1>Sign in with Spotify</h1>
            <a href={`https://accounts.spotify.com/authorize?client_id=${config.api.clientId}&redirect_uri=${encodeURI('http://localhost:3000')}&response_type=token`}>Sign in</a>
        </div>
    )
}