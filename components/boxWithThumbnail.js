import { useState } from 'react';
import BoxWithDetails from "./boxWithDetails";

function BoxWithThumbnail({hikeDetails}) {
  const [showPopup, setShowPopup] = useState(false);
  const boxBackgroundColor = '#1F2937';

  const handleBoxClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div
        className='thumbnail-box'
        style={{
          display: 'inline-block',
          border: '2px solid rgba(150, 150, 150)',
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)',
          backgroundColor: boxBackgroundColor,
          marginRight: '1rem',
          marginBottom: '1rem',
          cursor: 'pointer'
        }}
        onClick={handleBoxClick}
      >
        <div
          style={{
            height: 0,
            paddingBottom: '75%',
            position: 'relative'
          }}
        >
          <img
            src={hikeDetails.imageSrc}
            alt="thumbnail"
            style={{
              height: '100%',
              position: 'absolute',
              objectFit: 'cover'
            }}
          />
        </div>
        <div
          style={{
            padding: '16px 20px 20px',
            backgroundColor: boxBackgroundColor
          }}
        >
          <h2
            className='thumbnail-heading'
            style={{
              margin: 0,
              fontWeight: 'bold',
              color: '#FFFFFF'
            }}
          >
            {hikeDetails.title}
          </h2>
          <p
            className='thumbnail-content'
            style={{
              margin: '12px 0 0',
              color: '#D1D5DB'
            }}
          >
            <ul className="list-disc">
              {hikeDetails.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
      {showPopup && <BoxWithDetails 
        hikeDetails={hikeDetails}
        onClose={handlePopupClose}
        />}
    </>
  );
}

export default BoxWithThumbnail;
