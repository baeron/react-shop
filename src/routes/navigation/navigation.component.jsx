import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation.styles.scss';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/'>
            Home
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;