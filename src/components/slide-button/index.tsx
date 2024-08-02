import React from 'react';
import './index.css';

interface SlideButtonProps {
  url: string;
}

const SlideButton: React.FC<SlideButtonProps> = ({ url }) => {
  return (
    <div>
      <div id="container-btn">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className="learn-more">
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Client Area</span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default SlideButton;