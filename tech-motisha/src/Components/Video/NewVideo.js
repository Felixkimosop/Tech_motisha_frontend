

import React, { useState } from 'react'
import '../Video/styles/NewVideo.css'

const NewVideo = ({category}) => {
  const [allowedFileTypes, setAllowedFileTypes] = useState('*')
  const userId = localStorage.getItem("userId");

const test =  category.map((cat, index)=>{
    return <option value={cat.id} key={index}>{cat.name}</option>
  })

  console.log(test);

  function handleKindChange(e) {
    const selectedKind = e.target.value
    switch (selectedKind) {
      case 'video':
        setAllowedFileTypes('video/*')
        break
      case 'audio':
        setAllowedFileTypes('audio/*')
        break
      case 'article/blog':
        setAllowedFileTypes('application/pdf')
        break
      default:
        setAllowedFileTypes('*')
        break
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData()
    data.append('content[title]', e.target.title.value)
    data.append('content[kind]', e.target.kind.value)
    data.append('content[user_id]', e.target.user_id.value)
    data.append('content[url]', e.target.url.value)
    data.append('content[category_id]', e.target.category_id.value)
    data.append('content[description]', e.target.description.value)
    data.append('content[thumbnail]', e.target.thumbnail.value)
    data.append('content[upload]', e.target.upload.files[0])
    data.append('content[image]', e.target.image.files[0])

    console.log(data);

   submitDataToApi(data)
  }

  function submitDataToApi(data) {
    fetch('http://localhost:3000/contents', {
      method: 'POST',

      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        // navigate('/')
      })
  }

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title:</label>
        <input type="text" name="title" placeholder="enter title" />


        <input type="number" name="user_id" value ={userId} hidden/>

        <label>Category:
       <select name='category_id'>
        {test}
       </select>
       </label>

        <label>Description:</label>
        <input type="text" name="description" placeholder="enter description" />

        <label>URL:</label>
        <input type="text" name="url" placeholder="enter url" />

        <label>KInd:</label>
        <select name="kind" onChange={(e) => handleKindChange(e)}>
          <option value="">select type</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
          <option value="article/blog">Blog</option>

        </select>

        <label>Thumbnail:</label>
        <input type="text" name="thumbnail" />

        <label>Image:</label>
        <input type="file" name="image" accept="image/*" />

        <label>Upload:</label>
        <input type="file" name="upload" accept={allowedFileTypes} />

        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default NewVideo

