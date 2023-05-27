function Header({ 
    title = "Bangalore Hikes", 
    description = "Library of short, one day hikes close to bangalore and links to useful resources",
    disclaimer = "Credits: Information here is mostly aggregated from various free and publicly available sources. Special thanks to Indiahikes for the vast number of documented hikes"}) {
  
    return (
        <div 
            className="top-level-components"
            style={{ color: '#fff', marginBottom: 20 }}
        >
            <div style={{position: "relative"}}>
                <h1 style={{ fontSize: '1.875rem', fontWeight: '700' }}>{title}</h1>
                <p style={{ marginTop: '0.5rem', fontSize: '1.125rem' }}>{description}</p>
                <p style={{ color: '#888', fontSize: '1rem' }}>{disclaimer}</p>
            </div>
        </div>
  );
}

export default Header;
