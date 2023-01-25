// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading ? 'Loading...' : <img src={imageUrl || 'default_image_url'} alt="A Random Dog" />}
    </div>
  );
}

export default App;
