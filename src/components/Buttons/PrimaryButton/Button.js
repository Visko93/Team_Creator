import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button'

import './button.css';

/**
 * Primary UI component for user interaction
 */
export const PrimaryButton = ({ primary, size, label, ...props }) => {
  return (
    <Button
      size={size}
      {...props}
    >
      {props.children 
        ? props.children
        : label}
    </Button>
  );
};

PrimaryButton.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  disable: PropTypes.string,
  startIcon: PropTypes.element,

};

PrimaryButton.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined,
  disable: "false"
};
