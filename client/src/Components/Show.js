import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Show() {

    const { id } = useParams();
    const [ imageData , setImageData ] = useState({});
    const navigate =useNavigate();
    
    const handleEdit = () => {
        navigate(`/${id}/edit`);
    };

    const handleDelete = async () => {
        navigate(`/delete/${id}`);
    };

    useEffect(()=>{
        const getData = async () => {
            const data = await fetch(`/getImageData/${id}`);
            const result = await data.json();
            setImageData(result);
        }
        getData();
    },[id]);

  return (
    <>
        <div className="container py-4">
            <h1> Image Details</h1>
            {
                imageData && (
                    <>
                        <div className='d-flex justify-content-start py-5'>
                        <div>
                            <img src={imageData.ImgUrl} height={200} width={200} alt="" />
                        </div>
                        <div className='my-5 mx-4'> 
                            <p><b>Name</b> : {imageData.ImgName} </p>
                            <p><b>Details</b> : {imageData.ImgDetails} </p>
                            <button className='py-1 px-3 mx-2 click' onClick={()=> handleEdit() } >Edit</button>
                            <button className='py-1 px-3 click' onClick={()=> handleDelete() } >Delete</button>
                        </div>
                        </div>
                    </>
                )
            }
        </div>
    </>
  )
}
