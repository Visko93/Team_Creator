import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import PropTypes from 'prop-types'


export function ToolTiper({title, ...props}) {
  return (
    <Tooltip title={title} TransitionComponent={Zoom} interactive>
      {props.children}
    </Tooltip>
  )
}

Tooltip.propTypes = {
  title: PropTypes.string
};

Tooltip.defaultProps = {
  title: ''
};



