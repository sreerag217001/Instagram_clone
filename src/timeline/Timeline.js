import React, { useState } from 'react'
import './Timeline.css';
import Suggestion from './Suggestion';
import Post from './Posts/Post';
function Timeline() {
    const [posts,setPosts]=useState([
        {
            user:"Vishnu321",
            postImage:"https://www.muchbetteradventures.com/magazine/content/images/2019/11/04174910/paul-skorupskas-7KLa-xLbSXA-unsplash-1.jpg",
            likes:12,
            timespamp:"2d"
        },
        {
            user:"Jhon_123",
            postImage:"https://media.istockphoto.com/id/524381338/photo/hiker-taking-photos.jpg?s=612x612&w=0&k=20&c=eio_e2m7pTeIWUgbA3asptf0nbBC7QQogzvnfz3nc5c=",
            likes:20,
            timespamp:"1d"
        },
        {
            user:"Anand_",
            postImage:"https://assets.entrepreneur.com/content/3x2/2000/20191009140007-GettyImages-1053962188.jpeg",
            likes:21,
            timespamp:"4d"
        },
        {
            user:"Mathew",
            postImage:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NKlfm4O_HAhkhknYubqWXbdt7HkrOVKl3Q&usqp=CAU",
            likes:32,
            timespamp:"1w"
        },
        {
            user:"Traveltales",
            postImage:"https://c4.wallpaperflare.com/wallpaper/946/646/440/glacier-bay-during-daytime-wallpaper-preview.jpg",
            likes:230,
            timespamp:"2w"
        },
        {
            user:"Alex_adventures",
            postImage:"https://www.spadequotes.com/wp-content/uploads/2022/11/img_636e1f9abb120.png?ezimgfmt=rs:382x382/rscb2/ngcb2/notWebP",
            likes:120,
            timespamp:"4d"
        }
    ])
  return (
    <div className='time_line'>
<div className="timeline_left">
    <div className="timeline_posts">
        {
            posts.map((post)=>(
                <Post user={post.user} 
                postImage={post.postImage} 
                likes={post.likes} 
                timesStamp={post.timestamp}/>
            ))
        }
    </div>
</div>
<div className="timeline_right">
    <Suggestion/>
</div>
    </div>
  )
}

export default Timeline
