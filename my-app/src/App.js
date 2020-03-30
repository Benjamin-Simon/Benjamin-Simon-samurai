import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://logomaster.ai/static/media/gallery002.936afb9d.png"></img>
      </header>
      <nav className="navigation">
        <ul>
          <li><a>Profile</a></li>
          <li><a>Some</a></li>
        </ul>
      </nav>
      <content className="content">
        <div className="banner">
          <img src="https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1540009799/content-items/002/566/434/MOPSPRSSfb-original.jpg?1540009799"></img>
        </div>
        <div className="posts">
          <h3 className="postsHeader">My posts</h3>
          <div className="post">
            <div className="post-ava">
              ava
            </div>
            <p className="post-text">Post text</p>
          </div>
        </div>
      </content>
    </div>
  );
}

export default App;
