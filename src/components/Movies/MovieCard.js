import React from 'react'
import { IMG_CDN_URL } from '../../utils/constants'

const MovieCard = ({movie}) => {
  return (
    <div className="w-52 pr-5">
        <img src={IMG_CDN_URL + movie?.poster_path}></img>
    </div>
  )
}

export default MovieCard