import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import { data } from './data'
import './App.css'

export default function App() {
  return (
    <>
    <Header {...data[0]} />
    <Main />
    <Footer {...data[1]} />
    </>
  )
}
