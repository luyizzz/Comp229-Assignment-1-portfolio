import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/about'
import Education from './src/education'
import Project from './src/project'
import Contact from './src/contact'
import Service from './src/service'
import Layout from './components/Layout'


const MainRouter = () => {
    return (<div>

        <Layout />
        <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />}/>
        <Route exact path="/education" element={<Education />}/>
        <Route exact path="/project" element={<Project />}/>
        <Route exact path="/service" element={<Service />}/>
        <Route exact path="/Contact" element={<Contact />}/>


        </Routes>
    </div>
    )
 }

 export default MainRouter