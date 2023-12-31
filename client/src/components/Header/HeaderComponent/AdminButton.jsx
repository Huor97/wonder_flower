import { Link } from 'react-router-dom';
// import AdminIcon from '../../../img/admin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminButton = () => {
  return (
    <Link to="/admin">
      <li className="py-2 px-4">
        {/* <img
          src={AdminIcon}
          className="h-10 w-10 rounded hover:shadow-xl"
          alt="login"
        /> */}
        <FontAwesomeIcon icon="coffee" />
      </li>
    </Link>
  );
};

export default AdminButton;
