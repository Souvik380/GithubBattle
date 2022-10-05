import React from 'react'

function Repos(props) {
    const {image,name,stars,forks,open_issues}=props
    return (
        <div className='border-2 mr-8'>
            <img className='bg-center bg-cover w-full h-[100px]' src={image} alt="image" />
            <p>{name}</p>
            <p>{stars} stars</p>
            <p>{forks} forks</p>
            <p>{open_issues} open issues</p>
        </div>
    )
}

export default Repos