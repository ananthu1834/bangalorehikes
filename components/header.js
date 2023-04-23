function Header({ 
    title = "Bangalore Hikes", 
    description = "Library of short, one day hikes close to bangalore and links to useful resources",
    disclaimer = "Credits: Information here is mostly aggregated from various free and publicly available sources. Special thanks to Indiahikes for the vast number of documented hikes"}) {
  return (
    <header className="text-white py-0 mb-8">
      <div className="ml-12 mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-lg">{description}</p>
        <p style={{ color: '#888', fontSize: "" }}>{disclaimer}</p>
      </div>
    </header>
  );
}

export default Header;
