import "./Profile.css";

const Profile = (props) => {
  const {name = "John Doe", age = "??", country = "Japan"} = props
  return (
    <div className="profile">
      <h3>{name}</h3>
      <p>{age}</p>
      <p>{country}</p>
    </div>
  );
};

export default Profile;
