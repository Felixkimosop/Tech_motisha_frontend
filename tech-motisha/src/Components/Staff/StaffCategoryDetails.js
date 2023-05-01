import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";

function StaffCategoryDetails() {
    const {id} = useParams()
    const [contents, setContents] = useState()
    const token = localStorage.getItem("jwt");

    useEffect(()=>{
        fetch(`/categories/${id}`,{
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          })
        .then(res=>res.json())
        .then(data =>setContents(data.contents))

    },[])


    const post = Array.isArray(contents)? contents.map((content,index)=>{
        return(
            <div key={index}>
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <p>Posted: {content.created_at}</p>
                <video>{content.url}</video>

            </div>
        )
    }):null
  return (
    <div>StaffCategoryDetails</div>
  )
}

export default StaffCategoryDetails