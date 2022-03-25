import {useUser} from '../hooks/ApiHooks';

const Profile = () => {
  const {getUser} = useUser();
  const fetchUser = async () => {
    return await getUser(localStorage.getItem('token'));
  };

  const user = fetchUser();
  console.log(user);
  return (
    <>
      <h1>Profile</h1>
      <li>
        <ul>{user.username}</ul>
      </li>
    </>
  );
};

export default Profile;
