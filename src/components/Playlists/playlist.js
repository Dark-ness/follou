import React, { Component } from 'react'
import './style.css'

class Playlist extends Component {
  render () {
    const playlist = this.props.playlistData
    return (
      <div className="playlist">
        <div className="box">
          <a href={`/playlist?id=${playlist.id}&user=${playlist.owner.id}`}>
            <img src={playlist.images[0].url} width="270px" height="270px"/>
            <div className="title">{playlist.name}</div>
          </a>
        </div>
      </div>
    )
  }
}

export default Playlist