import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const deleteData = async () => {
      const data = await fetch(`/deleteData/${id}`, {
        method: "DELETE",
      });
      const result = await data.json();
      if (result.acknowledged === true) {
        navigate("/");
      }
    };

    deleteData();
  });

  return (
    <>
      <h2 className="px-5 py-4">deleted</h2>
    </>
  );
}
