import React, {useState, useEffect} from 'react'

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';


export default function CustomSpeedDial(props) {
  
  const [actions] = useState(props.actions)
  const [open, setOpen] = useState(false)

  useEffect(()=>{},[])

  const direction = 'left'

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SpeedDial
    className="speedDial"
    ariaLabel="SpeedDial openIcon example"
    icon={<SpeedDialIcon openIcon={props.startIcons} />}
    onClose={handleClose}
    onOpen={handleOpen}
    open={open}
    direction={direction}
  >
    {actions.map(action => (
      <SpeedDialAction 
        key={action.name}
        icon={action.icon}
        tooltipTitle={action.name}
        onClick={handleClose}
      />
    ))}
    </SpeedDial>
  )
}