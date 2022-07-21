import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {

  const {id} =  useParams();
  const [ imageData , setImageData ] = useState();
  const navigate = useNavigate();

  const handleInput = (e) => {
    setImageData({...imageData, [e.target.name] : e.target.value });
  }

  const handleSubmit = async () =>{
    const data = await fetch(`/${id}/edit`,{
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(imageData)
    });
    const result = await data.json();
     if(result.acknowledged === true ) navigate('/');
  }

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
      <h1 className="text-center py-3"> Edit Image </h1>
      { imageData && (
      <div className="container d-flex justify-content-center">
        <div className="w-40">
            <div className="mb-3">
              <label className="form-label">
                Image Name
              </label>
              <input
              required
              value={imageData.ImgName}
                type="text"
                autoComplete="off"
                className="form-control"
                name="ImgName"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Image Url
              </label>
              <input
              value={imageData.ImgUrl}
                required
                type="text"
                className="form-control"
                name="ImgUrl"
                onChange={handleInput}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Image Detail
              </label>
              <input
              value={imageData.ImgDetails}
              required
              autoComplete="off"
                type="text"
                className="form-control"
                name="ImgDetails"
                onChange={handleInput}
              />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
        </div>
      </div> )
      }
    </>
  )
}
