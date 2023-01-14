import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import user from './components/profile/user.json'
import {Profile} from './components/profile/user-profile'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes} />
        


  </React.StrictMode>
);



// ReactDOM.createRoot(document.querySelector('#root')).render(userRender());
