import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pagination/Home/Home";
import Explore from "./components/pagination/Explore/Explore";
import Notifications from "./components/pagination/Notification/Notifacation";
import Messages from "./components/pagination/Messagess/Messagess";
import Bookmarks from "./components/pagination/Bookmarks/bookmarks";
import Lists from "./components/pagination/Lists/Lists";
import Profile from "./components/pagination/Profile/Profile";
import More from "./components/pagination/More/More";
import Tweet from "./components/pagination/Profile/links/Tweets/Tweets";
import Tweetsreplies from "./components/pagination/Profile/links/Tweetsreplies/Tweetsreplies";
import Like from "./components/pagination/Profile/links/Like/Like";
import Media from "./components/pagination/Profile/links/Media/Media";

import { Route, Routes } from "react-router-dom";

function App(props) {
  return (
    <>
      <div className="container">
        <Navbar />

        <main className="main col-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Explore" element={<Explore />} />
            <Route path="/Notifications" element={<Notifications />} />
            <Route path="/Messages" element={<Messages />} />
            <Route path="/Bookmarks" element={<Bookmarks />} />
            <Route path="/Lists" element={<Lists />} />
            <Route path="/Profile" element={<Tweet />} />

            <Route path="/Profile" element={<Profile />} />
            <Route path="/Tweet" element={<Tweet />} />
            <Route path="/Tweetsreplies" element={<Tweetsreplies />} />
            <Route path="/Media" element={<Media />} />
            <Route path="/Like" element={<Like />} />
            <Route path="/More" element={<More />} />
          </Routes>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
