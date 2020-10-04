import React from "react";
import { NavLink } from "react-router-dom"
import { PrimaryButton } from "../../components/Buttons/PrimaryButton/Button";
import { AddCircle } from '@material-ui/icons'

import CustomTable from '../../components/Table/index.js'
import {CustomList} from '../../components/List/index'

import './style.css'

export default function Home () {
  return (
    <>
    {/* the created team table */}
    <div className="home__grid">
      <div className="container">
        <div className="teams">
          <div className="teams__header">
            <h1 className="teams-header-title">My teams</h1>
            <NavLink to='/teamcreation'>
              <PrimaryButton size='large' primary startIcon={<AddCircle />} />
            </NavLink>
          </div>
        </div>
        <CustomTable currentTeams={[
          { name: "Barcelona", description: "Barcelona Squad", id: 1},
          { name: "Milan", description: "Milan Squad", id: 2},
          { name: "Real Madrid", description: "Real Madrid Squad", id: 3},
          { name: "Athletico", description: "Athletico Squad", id: 4}
        ]}/>
      </div> 

      {/* the ranking container */}
      <div className="container">
        <div className="ranking">
          <div className="ranking__header">
            <h1 className="ranking__header-title">
              Top 5
            </h1>
            <div className="ranking__lists">
              <div className="ranking__list">
                <h3 className="ranking__list-title">Highest Average Age</h3>
                <CustomList itens={['first','second','third', 'fourth']} />
              </div>
              <div className="ranking__list">
                <h3 className="ranking__list-title">Lowest Average Age</h3>
                <CustomList itens={['first','second','third', 'fourth']} />
              </div>
            </div>
            </div>
        </div>
      </div>
      {/* the canvas eith the most picked and the less picked player */}
      <div className="container statistic">
        <div className="most-picked">
          <h3 className="most-title">Most picked player</h3>
          <div className="avatar most">

          </div>
        </div>
        <div className="less-picked">
          <h3 className="most-title">Less picked player</h3>
          <div className="avatar less">

          </div>
        </div>
      </div>
    </div>
    </>
  )
}