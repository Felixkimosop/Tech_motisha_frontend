import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const VideoDescriptionCard = () => {
  const [singleVideo, setSingleVideo] = useState({})
  const [comment, setComment] = useState("")
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/allvideos/${id}`)
      .then(res => res.json())
      .then(data => {
        setSingleVideo(data)
      })
  }, [])

  const { title, description, thumbnail_url, upload_url } = singleVideo

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-3">
            <video
              src={upload_url}
              type="video/mp4"
              controls
              className="card-img-top"
              style={{ height: "70vh", objectFit: "cover", width: "100%" }}
            >
              <img src={thumbnail_url} alt={title} style={{ height: "70vh", objectFit: "cover", width: "100%" }} />
            </video>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <button className="btn btn-primary"><i className="far fa-thumbs-up"></i> Like</button>
                <div className="text-muted">
                  <i className="far fa-clock"></i> Uploaded 2 days ago
                </div>
              </div>
              <hr />
              <h4>Comments</h4>
              <div className="row">
                <div className="col-md-6">
                  <textarea
                    placeholder="Add a comment..."
                    className="form-control"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <br />
                  <button className="btn btn-primary">Post Comment</button>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <p>Sample comment here</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-link"><Link to={'/videos'}>Back</Link></button>
        </div>
      </div>
    </div>
  )
}

export default VideoDescriptionCard
