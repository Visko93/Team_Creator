import React ,{useState} from 'react';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { Edit, Share, Delete } from '@material-ui/icons';


import './style.css'

const actions = [
  { icon: <Edit />, name: 'Edit' },
  { icon: <Share />, name: 'Share' },
  { icon: <Delete />, name: 'Delete' }
];
const CreateRows = inputArray => {
  const [open, setOpen] = useState(false);
  const direction = 'left'

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return inputArray.map(row => (
          <tr className="table__body-row" key={row.id}>
            <td className="table__body-cell">{row.name}</td>
            <td className="table__body-cell description">
              {row.description}
              <span className="table__icons">
                <SpeedDial key={row.id}
                  ariaLabel="SpeedDial openIcon example"
                  icon={<SpeedDialIcon openIcon={<Edit />} />}
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
              </span>
            </td>
          </tr>
        ))
}

export default function CustomTable({currentTeams}) {
  return (
    <table className="table">
      <thead className="table__head">
        <tr className="table__head-row">
          <th className="table__head-cell">Name</th>
          <th className="table__head-cell">Description</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {CreateRows(currentTeams)}
      </tbody>
    </table>
  )
}
        // <tr className="table__body-row">
        //   <td className="table__body-cell">Barcelona</td>
        //   <td className="table__body-cell description">
        //     <h4>
        //       Barcelona Squad
        //     </h4>
        //     <span className="table__icons">
        //       <button className="table__icon">
        //         <Delete />
        //       </button>
        //       <button className="table__icon">
        //         <Share />
        //       </button>
        //       <button className="table__icon">
        //         <Edit />
        //       </button>
        //     </span>
        //   </td>
        // </tr>