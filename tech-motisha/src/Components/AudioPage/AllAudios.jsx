import React,{useState, useEffect} from 'react'
import AudioCard from './AudioCard'

const AllAudios = ({token}) => {
    const [audios,setAudios] = useState([])


    useEffect(()=>{
        fetch('/audios',token)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setAudios(data)
        })
    },[])


    const allAudios = audios.map((audio, index)=>{
        return <AudioCard audio={audio} key={index}/>
    })

  return (
    <div>
        {allAudios}
    </div>
  )
}

export default AllAudios
