import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const data = useLoaderData();

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/adityakkpk')
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white text-3xl'>
      Github followers: {data.followers}

      <img src={data.avatar_url} alt="Github picture" width={300} className='m-3' />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const resposnse = await fetch('https://api.github.com/users/adityakkpk')
    return resposnse.json();
}