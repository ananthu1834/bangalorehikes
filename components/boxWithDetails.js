
function BoxWithDetails({hikeDetails, onClose}) {

    const boxBackgroundColor = "#1F2937";
  
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid rgba(150, 150, 150)",
            borderRadius: 8,
            overflow: "hidden",
            width: "50%",
            height: "75%",
            backgroundColor: boxBackgroundColor,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.05)",
            overflow: "auto",
          }}
        >
            <button
            onClick={onClose}
            style={{
                backgroundColor: "#EF4444",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "50%",
                padding: "8px",
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
                zIndex: 2, // Add a higher z-index to the button
            }}
            >
            X
            </button>
            <div
                style={{
                height: 0,
                paddingBottom: "56.25%",
                position: "relative",
                }}
            >
                <img
                src={hikeDetails.imageSrc}
                alt="thumbnail"
                style={{
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    objectFit: "cover",
                }}
                />
            </div>
            <div
                style={{
                padding: "16px 20px 20px",
                backgroundColor: boxBackgroundColor,
                flex: 1,
                }}
            >
                <h2
                style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: "bold",
                    color: "#FFFFFF",
                }}
                >
                {hikeDetails.title}
                </h2>
                
                <div style={{
                margin: '12px 0 0',
                fontSize: 14,
                color: '#D1D5DB'}}>
                
                    <p style={{marginBottom: '8px'}}> Highlights</p>
                    <p style = {{marginLeft: 24, marginBottom: 14}}>
                        <ul className="list-disc">
                        {hikeDetails.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                        </ul>
                    </p>

                    <p> Location: <a href={hikeDetails.details.location} target="_blank" style = {{color: " #0072C6"}}>Google Map Location</a></p>
                    <p> Reference: <a href={hikeDetails.details.reference.link} target="_blank" style = {{color: " #0072C6"}}>{hikeDetails.details.reference.text}</a></p>
                </div>
            </div>
        </div>
    </div>
    );
  }
  

export default BoxWithDetails;