import React from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton } from '../Buttons/PrimaryButton/Button';
import { makeStyles } from "@material-ui/core/styles"
import logo from '../../assets/svg/TeamToolLogo.svg'


import './style.css'

const useStyles = makeStyles({
  buttonStyle: {
    color: 'white',
  }
})


export default function Header ({ user }) {
  const classes = useStyles()
  function handleLogin() {
    return !user
  }

  return (
    <header>
      <div className="wrapper">
        <div>
          <img src={logo} alt="Team tool logo" width={30}/>
          <h1> Squad Management Tool</h1>
        </div>
        <div>
          {user ? (
            <PrimaryButton 
              size="small" 
              label="Log out"
              className={classes.buttonStyle}
            />
          ) : (
            <>
              <PrimaryButton 
                size="small" 
                label="Log in" 
                variant="outlined"
                className={classes.buttonStyle}
                onClick={handleLogin}
              />
              <PrimaryButton 
                primary 
                size="small" 
                label="Sign up"
                className={classes.buttonStyle}
              />
            </>
          )}
        </div>
      </div>
    </header>
  )
};

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onCreateAccount: PropTypes.func,
};

Header.defaultProps = {
  user: null,
};
