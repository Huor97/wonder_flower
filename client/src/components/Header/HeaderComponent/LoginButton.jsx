import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const LoginButton = () => {
  const [isblack, setIsBlack] = useState(false);

  const transitionIcon = () => {
    window.scrollY > 300 ? setIsBlack(true) : setIsBlack(false);
  };

  useState(() => {
    document.addEventListener('scroll', transitionIcon);
  });

  return (
    <Link to="/users/signin">
      <li className="py-2 px-14 ">
        <FontAwesomeIcon
          className="fa-2xl "
          style={{ color: `${isblack ? '#fff' : 'green'}` }}
          icon={faUser}
        />
      </li>
    </Link>
  );
};

export default LoginButton;
