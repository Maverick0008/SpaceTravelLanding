
import React from 'react'
import BlogSection from '../components/BlogSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/BlogSection/Data'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import NavBar from '../components/NavBar'
import Services from '../components/Services'
import Sidebar from '../components/SideBar'

const Home = () => {
    const [isOpen, setIsOpen] = React.useState(false)
     const toggle = () => {
         setIsOpen(!isOpen)
     }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <InfoSection />
            <BlogSection {...homeObjOne} />
            <BlogSection {...homeObjTwo} />
            <BlogSection {...homeObjThree} />
            <Services />
            <Footer />
        </>
    )
}

export default Home
