import React from 'react'
import {BsFillPersonFill} from "react-icons/bs"
import {RiStarSFill} from "react-icons/ri"
import {CgGitFork} from "react-icons/cg"
import {AiFillWarning} from "react-icons/ai"

function Repos(props) {
    const {image,name,stars,forks,open_issues}=props
    let count=1

    return (
        <div className='h-[95vh] w-[250px] p-30 mr-2 mb-2 bg-gray-300'>
            
            <div className='flex justify-center py-6 w-full h-[250px] bg-center bg-cover'>
                <img src={image} alt="image" />
            </div>

            <div className='text-red-600 text-2xl font-bold'>{name}</div>

            <div className="w-full mt-6 justify-start space-y-4 ml-6">
                <div className='flex items-center space-x-3'>
                    <BsFillPersonFill size="25px" color="orange" />
                    <p className='text-xl text-black font-bold'> {name}</p>
                </div>

                <div className='flex items-center space-x-3'>
                    <RiStarSFill size="25px" color='yellow' />
                    <p className='text-xl'>{stars} stars</p>
                </div>

                <div className='flex items-center space-x-3'>
                    <CgGitFork size="25px" color='blue' />
                    <p className='text-xl'>{forks} forks</p>
                </div>

                <div className='flex items-center space-x-3'>
                    <AiFillWarning size="25px" color='red' />
                    <p className='text-xl'>{open_issues} open issues</p>
                </div>

            </div>
        </div>
    )
}

export default Repos