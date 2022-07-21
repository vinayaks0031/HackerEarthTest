import React from "react";

export default function Add() {
    
  return (
    <>
        <h1 className="text-center py-3"> Add new Image </h1>
      <div className="container d-flex justify-content-center">
        <div className="w-40">
          <form action="/" method="post">
            <div className="mb-3">
              <label className="form-label">
                Image Name
              </label>
              <input
              required
                type="text"
                autoComplete="off"
                className="form-control"
                name="ImgName"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Image Url
              </label>
              <input
                required
                type="text"
                className="form-control"
                name="ImgUrl"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">
                Image Detail
              </label>
              <input
              required
              autoComplete="off"
                type="text"
                className="form-control"
                name="ImgDetails"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
