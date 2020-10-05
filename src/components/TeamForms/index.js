import React from 'react';
import { Chip, Paper, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { PrimaryButton } from '../Buttons/PrimaryButton/Button'
import { CustomList } from '../List'

import './style.css'

export default function CustomForm({chipData}) {
  const schemas = [
    [3, 2, 2, 3],
    [3, 2, 3, 1],
    [3, 4, 3],
    [3, 5, 2],
    [4, 2, 3, 1],
    [4, 3, 1, 1],
    [4, 3, 2],
    [4, 4, 2],
    [4, 5, 1],
    [5, 4,1]
  ]
  
  return (
    <form action="POST" onSubmit={()=>{}} className="form">
      <h3 className="form__title">
        TEAM CONFIGURATION
      </h3>
      <div className="form__group">
        <label htmlFor="teamName">Team Name
        <input 
          type="text" 
          name="teamName" 
          id="teamName"
          // value={""}
          // onchange={()=>{}}  
        />
        </label>
        <label htmlFor="teamSite">Team Site
        <input 
          type="url" 
          name="teamSite" 
          id="teamSite"
          // value={""}
          // onchange={()=>{}}  
        />
        </label>
      </div>
      
      <div className="form__group">
        <label htmlFor="description">
          Description
          <textarea 
            name="description" 
            id="description"
            // value={""}
            onChange={()=>{}}  
          />
        </label>

        <Paper>
          <fieldset className="team__choice">
            <legend>Team Type</legend>
          <ul>
            <li>
              <input type="radio" id="real" name="teamType" value="real" />
              <label htmlFor="real">Real</label>
            </li>
            <li>
              <input type="radio" id="fantasy" name="teamType" value="fantasy" />
              <label htmlFor="fantasy">Fantasy</label>
            </li>
          </ul> 
            <Autocomplete
              multiple
              id="tags"
              // value={value}
              // onChange={}
              options={chipData}
              getOptionLabel={(option) => option.label}
              renderTags={(tagValue) =>
                tagValue.map((option) => (
                  <Chip
                  key={option.key}
                  label={option.label}
                  />
                  ))
                }
                renderInput={(params) => (
                  <TextField {...params} label="Fixed tag" variant="outlined" placeholder="Favorites" />
                  )}
                  />
            </fieldset>
          </Paper>
        </div>
      <h3 className="form__title">
        CONFIGURE THE SQUAD
      </h3>
      <div className="form__group">
        <div className="form__field">
          <label htmlFor="form__schema">
            Formation
            <select name="schema" id="schema">
              {schemas.map((schema,index) =>(
                <option value={schema} key={index}>
                  {schema.join('-')}
                </option>
              ))}
            </select>
          </label>
          <canvas className="form-lineup">

          </canvas>
        </div>
        <div className="form__group-sub">
          <label htmlFor="search" className="form__search-input">
            <input type="text" className="search"/>
          </label>
          <CustomList 
            itens={[
              {name: "Ronaldo Alegre", age: 24, nacionality: "Brazil"},
              {name: "Ronaldo Normal", age: 19, nacionality: "Brazil"},
              {name: "Ronaldo Azeitado", age: 43, nacionality: "Brazil"}
            ]}
          />
        </div>
      </div>
      <PrimaryButton label="Save" className="primary" fullWidth={true}/>

    </form>
  )
}