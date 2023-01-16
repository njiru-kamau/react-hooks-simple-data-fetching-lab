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
      {'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cdc.gov%2Fhealthypets%2Fpets%2Fdogs.html&psig=AOvVaw3zW8sVFq_p6Qf0Q90qwWsF&ust=1673927031837000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPj7nKmWy_wCFQAAAAAdAAAAABAD'} alt="A Random Dog" 
    </div>
  );
}

export default App;