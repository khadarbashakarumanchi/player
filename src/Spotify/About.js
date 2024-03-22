import React from 'react';

export default function About() {
  return (
    <div className='bg-white rounded container m-2 text-dark'>
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png" alt="" width="172" height="157" />
        <h1 className="display-5 fw-bold text-body-emphasis">Spotify 4.0</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">Get Started</button>
          </div>
        </div>  
      </div>
    </div>
  )
}
