import React  from 'react';
import CustomSpeedDial from '../SpeedDial'

import { Edit, Share, Delete } from '@material-ui/icons';


import './style.css'

const actions = [
  { icon: <Edit />, name: 'Edit' },
  { icon: <Share />, name: 'Share' },
  { icon: <Delete />, name: 'Delete' }
];
const CreateRows = inputArray => {

  return inputArray.map(row => (
          <tr className="table__body-row" key={row.id}>
            <td className="table__body-cell">{row.name}</td>
            <td className="table__body-cell description">
              {row.description}
              <span className="table__icons">
               <CustomSpeedDial actions={actions} startIcon={<Edit />}/>
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