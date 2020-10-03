import React from "react";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton/Button";
import { AddCircle } from '@material-ui/icons'


import './style.css'

export default function Home () {
  return (
    <>
    <h1>Home</h1>
    <PrimaryButton size='large' primary startIcon={<AddCircle />}>
      Ola
    </PrimaryButton>
    </>
  )
}