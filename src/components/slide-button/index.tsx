import React from 'react'
import './index.css'

const SlideButton = () => {
  return (
    <div>
      <div id="container-btn">
  <button className="learn-more">
    <span className="circle" aria-hidden="true">
      <span className="icon arrow"></span>
    </span>
    <span className="button-text">Client Area</span>
  </button>
</div>
    </div>
  )
}

export default SlideButton
