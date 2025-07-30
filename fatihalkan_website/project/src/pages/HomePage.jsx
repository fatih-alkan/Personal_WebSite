import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function HomePage(){
    return (
        <>
        <Header/>
        <Hero/>
        <Skills/>
        <Profile/>
        <Projects/>
        <Footer/>
        </>
    )
}