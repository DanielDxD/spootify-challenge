import React, { useEffect } from 'react';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Player from '../components/Player';
import Login from '../../routes/Login';

function CoreLayout({ children, history }) {

  useEffect(() => {
    if (window.location.pathname !== '/login') {

      const search = window.location.href.replace(`http://${window.location.host}`, "").replace('/', "").replace("#", "?")
      const urlSearchParams = new URLSearchParams(search)
      const authToken = urlSearchParams.get("access_token")
      if (authToken) {
        sessionStorage.setItem("@token", authToken)
        window.location.href = '/'
      }

      const token = sessionStorage.getItem("@token")
      if (!token) {
        window.location.href = '/login'
      }
    }
  }, [])

  if (window.location.pathname === '/login') {
    return <Login />
  } else {
    return (
      <div className="main">
        <SideBar />
        <div className="main__content">
          <Header history={history} />
          <div className="main__content__child">
            {children}
          </div>
        </div>
        <Player />
      </div>
    );
  }
}

export default CoreLayout;
