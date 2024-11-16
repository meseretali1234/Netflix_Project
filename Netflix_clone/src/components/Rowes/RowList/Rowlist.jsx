import React from 'react'
import Singlerow from '../Singlerow/Singlerow'
import requests from '../../../utils/Requests'


const Rowlist = () => {
  return (
    <>
      <Singlerow
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Singlerow title="Trending Now" fetchUrl={requests.fetchTrending} />

            <Singlerow title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
            <Singlerow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Singlerow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <Singlerow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Singlerow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <Singlerow title="TV Shows" fetchUrl={requests.fetchTvShow} />
            <Singlerow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  )
}

export default Rowlist