import React from 'react'

const VideoPagination = ({totalVideos ,currentPage,setCurrentPage, videosPerPage}) => {
    let pages = [];

    for(let i=1; i<=Math.ceil(totalVideos/videosPerPage); i++){
        pages.push(i)
    }

  return (
    <div>
        {pages.map((page,index)=>{
            return <button onClick={()=>setCurrentPage(page)} key={index}>{page}</button>
        })}
    </div>
  )
}

export default VideoPagination
