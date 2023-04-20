import React from 'react'
import '../Video/styles/NewVideo.css'

const NewVideo = () => {

    function handleSubmit(e){
    e.preventDefault()
    const data = new FormData()
    data.append('video[title]', e.target.title.value)
    data.append('video[decription]', e.target.decription.value)
    data.append('video[thumbnail]', e.target.thumbnail.files[0])
    data.append('video[upload]', e.target.upload.files[0])

    submitDataToApi(data);


    }



    function submitDataToApi(data){
        fetch('http://localhost:3000/videos',{
          method: "POST",

          body: data
        }).then(res=>res.json()).then(data=>{

          console.log(data);
         
        })
    }
  return (
    <div>
        <h1>New Video</h1>
        <form onSubmit={(e)=>handleSubmit(e)}encType="multipart/form-data">
            <label>Title:</label>
            <input type="text" name="title" placeholder='enter title'/>

            <label>Description:</label>
            <input type="text" name="decription" placeholder='enter description'/>

            <label>Thumbnail:</label>
            <input type="file" name="thumbnail" accept="image/*"/>

            <label>Video:</label>
            <input type="file" name="upload" accept="video/*"/>

            <button type="submit">Upload</button>
        </form>
    </div>
  )
}

export default NewVideo;
