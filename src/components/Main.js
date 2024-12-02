import React, {useState} from 'react'

function Main() {
    const [userData, setUserData] = useState('');
    const [intensity, setIntensity] = useState('Mild');
    const [roast, setRoast] = useState('');
    const [tips, setTips] = useState([]);
  
    const handleGenerateRoast = async () => {
      const mockRoasts = {
        Mild: [
          "You seem nice, but your job title sounds like it came from a cereal box.",
          "Your bio is so generic, it could double as a fortune cookie message.",
          "It's great that you're 'dedicated and hardworking,' just like everyone else on LinkedIn.",
          "Your bio is like a blank canvas—waiting for some actual personality to show up."
        ],
        Savage: [
          "Oh, you're 'passionate about blockchain'? Can't wait for your TED Talk on solving world hunger with NFTs.",
          "Your LinkedIn headline reads like a Mad Libs for tech buzzwords.",
          "'Innovative thinker'—translation: you once had an idea in the shower.",
          "Your bio says 'team player,' but we all know you muted the Zoom chat."
        ],
        Soulcrushing: [
          "Your bio screams 'LinkedIn influencer,' but we all know you're just here for the free coffee.",
          "'Visionary leader'? Wow, tell us more about that one group project you dominated in high school.",
          "Your profile picture says 'professional,' but your bio says 'work in progress.'",
          "You have the charisma of a PowerPoint presentation in Comic Sans."
        ]
      };
    
      // Randomly pick one roast for the selected intensity
      if(userData){
        const selectedRoast = mockRoasts[intensity][Math.floor(Math.random() * mockRoasts[intensity].length)];
      setRoast(selectedRoast);
      }else{
        alert("invalid input")
      }
      
    };
    
    // const handleGenerateRoast = async () => {
    //   try {
    //     const response = await fetch('https://careercrispapi.zachl.tech/roast', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         bio: userData,
    //         roastIntensity: intensity,
    //       }),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch the roast. Please try again later.');
    //     }
    
    //     const data = await response.json();
    //     setRoast(data.roast); // Assuming the API returns a JSON object with a `roast` key
    //   } catch (error) {
    //     console.error('Error fetching roast:', error);
    //     setRoast('Something went wrong. Please check your input and try again.');
    //   }
    // };

    // const handleGenerateRoast = async () => {
    //   try {
    //     const response = await fetch('https://careercrispapi.zachl.tech/roast', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         bio: userData,
    //         roastIntensity: intensity,
    //       }),
    //     });
    
    //     if (!response.ok) {
    //       throw new Error('Failed to fetch the roast. Please try again later.');
    //     }
    
    //     const data = await response.json();
    //     setRoast(data.roast);
    //     setTips(data.tips || []); // Handle tips if present, default to an empty array
    //   } catch (error) {
    //     console.error('Error fetching roast:', error);
    //     setRoast('Something went wrong. Please check your input and try again.');
    //     setTips([]);
    //   }
    // };
    
    // const handleGenerateRoast = async () => {
    //   try {
    //     const response = await fetch('https://careercrispapi.zachl.tech/roast', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         bio: userData,
    //         roastIntensity: intensity,
    //       }),
    //     });
    
    //     console.log('Response Status:', response.status);
    
    //     if (!response.ok) {
    //       const errorText = await response.text();
    //       console.error('Error Response:', errorText);
    //       throw new Error(`Failed to fetch the roast: ${errorText}`);
    //     }
    
    //     const data = await response.json();
    //     console.log('Response Data:', data);
    
    //     setRoast(data.roast);
    //     setTips(data.tips || []);
    //   } catch (error) {
    //     console.error('Error fetching roast:', error.message);
    //     setRoast('Something went wrong. Please check your input and try again.');
    //     setTips([]);
    //   }
    // };
    
  
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4">
        <div className='grid grid-flow-col'>
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
            <option value="Soulcrushing">Soul-crushing</option>
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