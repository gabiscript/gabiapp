
import './App.css';
import {Descripcion} from './Componentes/Descripcion';




function App() {
  return (
    <div className='App'>
    
     <div className='contenedor-principal'>
      <h1>¡Hola!, Soy Gabriela. Let's start! </h1>
      
       <Descripcion 
       titulo='Un poco sobre mí'
       texto='Soy una profesional en Desarrollo y Ciberseguridad,apasionada por la tecnologia, con una formación sólida respaldada por certificaciones 
       reconocidas en el campo. Mis conocimientos para asegurar entornos digitales y gestionar redes eficientes 
       se complementa con mis conocimientos en desarrollo, donde tengo competencias en Javascript con React, Python
       full stack y otras tecnologías.
       Cuento con una certificación profesional de Google en gestión de proyectos con metodología ágil, Soy una 
       aprendiz rápida, orientada a resultados y aprecio el desafío constante que implica la industria de la 
       tecnología.'
       imagen='gabiscripts1'/> 
        <Descripcion 
       titulo='Tecnologías'
       texto='Ingenieria en Ciberseguridad 2024
       Arquitectura Cloud -- Talento Digital 2024
       Aplicaciones web Java Trainee Full Stack – Talento Digital/Awakelab 2023 --
       Junior Cybersecurity Analyst Career – CISCO
       '
       imagen='gabiscripts1'/> 
        <Descripcion 
       titulo='Destacados: Estudios, Cursos, insignias, y más'
       texto='Junior Cybersecurity Analyst Career - CISCO
       Cyber Threat Management 
       Network Defense 
       Endpoint Security 
       Dispositivos de Red y Configuración Inicial 
       Introduction to Cybersecurity 
       Ciberseguridad - Google 
       Gestión de proyectos – Google
       Automatización de tareas con Python - Google
       
       - Python 3.12 I, II, III 
       - JavaScript – Jóvenes Programadores
       - SQL - OpenBootcamp
       - HTML5 Y CSS - OpenBootcamp
       - Cloud Computing - Google Activate '
       imagen='gabiscripts1'/> 
     
       </div>   
       
       
     
    </div>
  );
}

export default App;
