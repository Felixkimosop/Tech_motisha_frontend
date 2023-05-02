

import React, { useState } from 'react'
import '../Video/styles/NewVideo.css'
import { useNavigate } from 'react-router-dom'

const NewVideo = ({category}) => {
  const [allowedFileTypes, setAllowedFileTypes] = useState('*')
  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("name");
const navigate = useNavigate()
  console.log(userId);
  console.log(name);

const test =  category.map((cat, index)=>{
    return <option value={cat.id} key={index}>{cat.name}</option>
  })



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

    data.append('content[category_id]', e.target.category_id.value)
    data.append('content[description]', e.target.description.value)

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
        navigate('/')
      })
  }

  return (
    <div>

      <form onSubmit={(e) => handleSubmit(e)}>
      <h1 className='text-white m-5 text-center uppercase'>New Post</h1>
        <label>Title:</label>
        <input type="text" name="title" placeholder="enter title" />


        <input type="number" name="user_id" value ={userId} hidden/>

        <label>Category:
       <select name='category_id'>
        {test}
       </select>
       </label>

        <label>Description:</label>
        <textarea type="text" name="description" placeholder="enter description" />



        <label>KInd:</label>
        <select name="kind" onChange={(e) => handleKindChange(e)}>
          <option value="">select type</option>
          <option value="video">Video</option>
          <option value="audio">Audio</option>
          <option value="article/blog">Blog</option>

        </select>



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


// <div class="flex justify-center items-center">
// <form onSubmit={(e) => handleSubmit(e)} class="w-1/2">
//   <h1 class="text-white m-5 text-center uppercase">New Post</h1>
//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">Title:</label>
//     <input class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="title" placeholder="Enter title" />
//   </div>

//   <input type="number" name="user_id" value={userId} hidden />

//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">Category:</label>
//     <select class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="category_id">
//       {test}
//     </select>
//   </div>

//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">Description:</label>
//     <textarea class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="description" placeholder="Enter description"></textarea>
//   </div>

//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">URL:</label>
//     <input class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="url" placeholder="Enter URL" />
//   </div>

//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">Kind:</label>
//     <select class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" name="kind" onChange={(e) => handleKindChange(e)}>
//       <option value="">Select type</option>
//       <option value="video">Video</option>
//       <option value="audio">Audio</option>
//       <option value="article/blog">Blog</option>
//     </select>
//   </div>

//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">Thumbnail:</label>
//     <input class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" name="thumbnail" />
//   </div>

//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">Image:</label>
//     <input class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="file" name="image" accept="image/*" />
//   </div>

//   <div class="flex flex-col mb-4">
//     <label class="mb-2 uppercase font-bold text-lg text-white">Upload:</label>
//     <input class="border py-2 px-3 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" type="file" accept={allowedFileTypes}/>

//   </div>

//   <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Upload</button>
// </form>
// </div>
