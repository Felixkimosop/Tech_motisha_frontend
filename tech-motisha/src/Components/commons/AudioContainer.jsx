import React from 'react'

const AudioContainer = () => {
  return (
    <div>
        <ul className="grid gap-2.5">
            <li>
                <a href="#" className="rounded">

                    <figure className="relative rounded-lg overflow-hidden mb-5 z-1">
                        <img src="./assets/images/podcast-1.png" alt="Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies"/>

                        <div className="card-banner-icon">
                            <ion-icon name="play"></ion-icon>
                        </div>
                    </figure>

                    <div className="card-content">
                        <div className="card-meta">
                            <time datetime="2022-02-15">Feb 15, 2022</time>

                            <p className="pod-epi">Episodes: 01</p>
                        </div>

                    <h3 className="h3 card-title">Tube Preamps, TLM103 vs. OJ 818, Podcastage's Beanies</h3>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default AudioContainer