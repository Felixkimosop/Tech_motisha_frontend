import React from 'react'

const VideoPagination = ({totalVideos ,currentPage,setCurrentPage, videosPerPage}) => {
    let pages = [];

    for(let i=1; i<=Math.ceil(totalVideos/videosPerPage); i++){
        pages.push(i)
    }

  return (
    <div className="mb-4 text-center">
        {pages.map((page,index)=>{
            return <button onClick={()=>setCurrentPage(page)} className='p-2 m-5 rounded-md border-2 bg-[#fa510f] text-white' key={index}>{page}</button>
        })}
    </div>
  )
}

export default VideoPagination
