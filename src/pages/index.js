import React,{useState} from 'react'
import About from '../components/about/about';
import Cover from '../components/cover/cover';
import Exp from '../components/Experiencia/exp';
import Contacto from '../components/footer/footer';
import Navbar from '../components/Navbar'
import Proyectos from '../components/Proyectos';
import Sidebar from '../components/sidebar'


export const Home = () => {
    const[isOpen,setIsOpen] = useState(false);
    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Cover/>
            <About/>
            <Exp />
            <Proyectos />
            <Contacto />
            
            
        </>
    )
}
export default Home; 
