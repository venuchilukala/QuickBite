import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Redirection to home page or specifing page
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const { UpdateUserProfile } = useContext(AuthContext);

  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;
  
    UpdateUserProfile({name, photoURL})
      .then(() => {
        // Profile updated!
        // ...
        alert("updated");
        navigate(from, {replace : true})
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h3 className="font-bold">Update Your Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="your name"
              className="input input-bordered"
              required
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo</span>
            </label>
            <input
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
              {...register("photoURL")}
            />

            {/* TODO : During backend */}
            {/* <input type="file" className="file-input file-input-bordered w-full max-w-xs" />  */}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
