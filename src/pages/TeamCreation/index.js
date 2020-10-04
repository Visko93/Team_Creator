import React from "react";
import { NavLink } from "react-router-dom"
import CustomForm from '../../components/TeamForms'

import './style.css'

export default function TeamCreation () {
  // Mock Data
  let chipData = [
    { key: 0, label: 'BR' },
    { key: 1, label: 'PTW' },
    { key: 2, label: 'GK' },
    { key: 3, label: 'EN' },
    { key: 4, label: 'Attack' },
  ];
  //
  return (
    <>
    <div className="container">
    <NavLink to='/'> -Home</NavLink>
    <br />
    <CustomForm chipData={chipData}/>
    </div>
        
    
    </>
  )
}