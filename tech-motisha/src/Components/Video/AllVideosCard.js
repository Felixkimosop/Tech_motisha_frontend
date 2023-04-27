import React from 'react'
import { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import VideoPagination from './VideoPagination'
import '../Video/styles/Allvideos.css'
import {Link} from 'react-router-dom'

const AllVideosCard = () => {
//set all videos
const [videos, setVideos] = useState([])
const [search, setSearch] = useState('')
const [currentPage, setCurrentPage] = useState(1)
const videosPerPage = 3
const token = localStorage.getItem("jwt");


//used to slice the array
const lastVideoIndex = currentPage * videosPerPage
const firstVideoIndex = lastVideoIndex - videosPerPage


    useEffect(() =>{


        fetch('/videos',{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
        })
        .then(res=>res.json())
        .then(data=>{
        setVideos(data);
        console.log(data);
        })
    },[])
    console.log(videos)

        const filteredSearchVideos = Array.isArray(videos)?videos.filter(video=>{
        return video.title.toLowerCase().includes(search.toLowerCase())
        }):null

    //console.log(filteredSearchVideos);

    //slice method for displaying limited videos///
    const videosDisplayedPerPage = filteredSearchVideos.slice(firstVideoIndex, lastVideoIndex)


        //mapping the sliced videos in videocard
    const allVideos = videosDisplayedPerPage.map((video,index)=>{
        return <VideoCard key={index} video={video}/>
    })




  return (
<div className='all-videos'>
     <h1>All Videos</h1>


                    <div className="searchbar">
                    
                        <input className="form-control"
                        value={search} onChange={(e)=>setSearch(e.target.value)}
                        type="text" placeholder="Search by Title" />
                    </div>

                 <div className='display-videos'>{allVideos}</div>

              <VideoPagination totalVideos = {videos.length} currentPage={currentPage} setCurrentPage={setCurrentPage} videosPerPage={videosPerPage}/>
    </div>
  )
}

export default AllVideosCard
