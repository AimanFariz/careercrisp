import React, {useState} from 'react'

function Main() {
    const [userData, setUserData] = useState('');
    const [intensity, setIntensity] = useState('Mild');
    const [roast, setRoast] = useState('');
    const [tips, setTips] = useState([]);
 
    const handleGenerateRoast = async () => {
      const randomImg = images[Math.floor(Math.random() * images.length)];
      showFlyingImage(randomImg);
      try {
        const response = await fetch('https://careercrispapi.zachl.tech/roast', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            bio: userData,
            roastIntensity: intensity.toLowerCase(), // Convert to lowercase for API compatibility
          }),
        });
    
        console.log('Response Status:', response.status);
    
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Error Response:', errorText);
          throw new Error(`Failed to fetch the roast: ${errorText}`);
        }
    
        const data = await response.json();
        console.log('Response Data:', data);
    
        setRoast(data.roast);
        setTips(data.tips || []);
      } catch (error) {
        console.error('Error fetching roast:', error.message);
        setRoast('Something went wrong. Please check your input and try again.');
        setTips([]);
      }
    };
    const images = [
      "../image/don-arrow.jpg",
      "../image/don-asi-no.jpg",
      "../image/don-call.jpg",
      "../image/don-calll.jpg",
      "../image/don-crown.jpg",
      "../image/don-eyes.jpg",
      "../image/don-stretch.webp",
      "../image/kai-tweak.jpg",
      "../image/speed-huh.jpg",
  
    ]
    function showFlyingImage(imageUrl) {
      const container = document.getElementById('flying-text-container'); 
      const flyingImage = document.createElement('img');
  
      // Set image source and styles
      flyingImage.src = imageUrl;
      flyingImage.style.position = 'absolute';
      flyingImage.style.width = `${Math.random() * 100 + 100}px`; // Random width between 50px and 150px
      flyingImage.style.zIndex = '1000';
  
      // Random start position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight;
      flyingImage.style.left = `${startX}px`;
      flyingImage.style.top = `${startY}px`;
  
      // Append to container
      container.appendChild(flyingImage);
  
      // Animate the image
      const animationDuration = 1500; // 1.5 seconds
      flyingImage.animate(
          [
              { transform: 'translateY(0)', opacity: 1 },
              { transform: 'translateY(-100px)', opacity: 0 },
          ],
          {
              duration: animationDuration,
              easing: 'ease-out',
          }
      );
  
      // Remove image after animation
      setTimeout(() => {
          container.removeChild(flyingImage);
      }, animationDuration);
  }
    
  
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
        <div  id='flying-text-container' className='grid grid-flow-col'>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>

        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>

        <img src='/granola bar.jpg' width={100}></img>

        <img src='/granola bar.jpg' width={100}></img>

        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        <img src='/granola bar.jpg' width={100}></img>
        </div>
        
        <div className='flex flex-col items-center justify-center border p-5 rounded-md shadow-md'>
        <h1 className="text-4xl font-bold text-gray-800 mb-6">CareerCrisp 🔥</h1>
        <p className="text-gray-600 mb-4">Enter your professional bio, and we’ll give you a lighthearted roast!</p>
  
        <textarea
          className="w-full max-w-lg p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          rows="1"
          placeholder="Enter your linkedin bio"
          value={userData}
          onChange={(e) => setUserData(e.target.value)}
        ></textarea>
  
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Select Roast Intensity:</label>
          <select
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={intensity}
            onChange={(e) => setIntensity(e.target.value)}
          >
            <option value="Mild">Mild</option>
            <option value="Savage">Savage</option>
            <option value="Soul-crushing">Soul-crushing</option>
          </select>
        </div>
  
        <button
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          onClick={handleGenerateRoast}
        >
          Generate Roast 🔥
        </button>
  
        {roast && (
  <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg shadow-md max-w-lg text-center">
    <h2 className="text-xl font-bold text-gray-800">Your Roast:</h2>
    <p className="text-gray-600 mt-2">{roast}</p>

    {tips.length > 0 && (
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-700">Pro Tips:</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2 text-left">
          {tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
)}

        </div>
        <div className='grid grid-flow-col'>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>
        <img src='/sootcase.webp' width={100}></img>

        </div>
        <div className='grid grid-flow-col'>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>
        <img src='/th.jpg' width={100}></img>

        </div>
      </div>
      
    );
}

export default Main