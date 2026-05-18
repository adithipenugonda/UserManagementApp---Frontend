import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const navigate = useNavigate();

  // const onSubmit = (data) => {
  //   console.log(data);
  //   alert("User Added Successfully");
  //   reset();
  // };
  const onSubmit = async (data) => {
  try {
    // 🔥 FIX FIELD NAMES
    const formattedData = {
      name: data.name,
      email: data.email,
      dateOfBirth: data.dob,
      mobileNumber: data.mobile,
    };

    let res = await fetch("http://localhost:4000/user-api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    });

    if (res.status === 201) {
      alert("User Added Successfully");
      reset();
    } else {
      alert("Failed to add user");
    }
  } catch (err) {
    console.log(err);
    alert("Error adding user");
  }
};

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">

        <h1 className="text-3xl text-gray-700 font-semibold text-center mb-6">
          Add New User
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                Name is required
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                Email is required
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <input
              type="date"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
              {...register("dob", { required: true })}
            />
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1">
                Date of birth is required
              </p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-lime-400"
              {...register("mobile", { required: true })}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">
                Mobile number is required
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-lime-500 text-white py-2 rounded hover:bg-lime-600 transition"
          >
            Add User
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddUser;