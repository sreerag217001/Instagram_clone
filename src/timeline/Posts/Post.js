import React from 'react'
import {Avatar} from "@mui/material";
import './Post.css';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/Chat';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
function Post({ user, postImage, likes, timestamp }) {
  // Check if the user is a string before using string manipulation methods
  const userInitial = typeof user === 'string' && user.length > 0 ? user.charAt(0).toUpperCase() : '';
  return (
    <div className='post'>
      <div className="post_header">
        <div className="post_headerAuthor">
     <Avatar>{userInitial}</Avatar>
      {user}* <span>{timestamp}</span>
        </div>
<MoreHorizIcon/>
      </div>
      <div className="post_image">
        <img src={postImage} alt="" />
      </div>
      <div className="post_footer">
        <div className="post_footerIcons">
            <div className="post_iconsMain">
          <FavoriteIcon className='postIcon'/>
          <ChatIcon className='postIcon'/>
          <TelegramIcon className='postIcon'/>
            </div>
            <div className="post_IconSave">
            <BookmarkBorderIcon className='postIcon'/>
            </div>
        </div>
        Liked by {likes} people
      </div>
    </div>
  )
}

export default Post
