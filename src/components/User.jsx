import { useLocation } from "react-router";

function User() {
  const { state } = useLocation();

  // ✅ Safe access
  console.log(state?.user);

  // ✅ Handle null case
  if (!state || !state.user) {
    return <h2>No user data available</h2>;
  }

  return (
    <div>
      <p>{state.user.name}</p>
      <p>{state.user.email}</p>
      <p>{state.user.dateOfBirth}</p>
      <p>{state.user.mobileNumber}</p>
    </div>
  );
}

export default User;