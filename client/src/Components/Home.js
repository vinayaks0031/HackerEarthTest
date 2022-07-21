import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [imageData, setImageData] = useState([]);
  let navigate = useNavigate();



  const handleClick = (id) => {
    navigate(`/show/${id}`);
  }

  const handleChange = (e) =>{
    let wordsContainer = document.querySelectorAll("div#image-container")
    Array.from(wordsContainer).forEach((element) => {
        let mainWord = element.querySelector("span.d-none").innerText;
        if (mainWord.includes(e.target.value)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    });
  }

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("/getData");
      const result = await data.json();
      setImageData(result);
    };
    getData();
  }, []);

  return (
    <>
      <div className="container text-center">
        <h1 className="py-4">Image Collection</h1>
          <Link
            to='/new'
            className="badge bg-dark text-wrap text-decoration-none my-4"
          >
            Add new Image
          </Link>
        <input type="text" className="mx-2 border-1" placeholder="Search Image" onChange={handleChange} />
        <div className="d-flex flex-wrap justify-content-center">
          {
          imageData.map((e) => {
            const { _id, ImgUrl ,ImgName } = e;

            return (
              <div className="my-2 mx-3 border border-white" key={_id} id="image-container">
                <div className="click" onClick={()=>handleClick(_id)}>
                  <span className="d-none"> {ImgName} </span>
                  <img src={ImgUrl} alt="Img" width={300} height={250} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
