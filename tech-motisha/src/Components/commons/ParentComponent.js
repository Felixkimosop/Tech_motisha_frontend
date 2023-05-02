import React , { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ParentComponent = () => {
  const { id } = useParams()
  const [singleContent, setSingleContent] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/uploads/${id}`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setSingleContent(data)
      })
  }, [])

console.log(singleContent)
  return (
    <div>

    </div>
  )
}

export default ParentComponent
