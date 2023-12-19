import './sobreElMapa.css'
import image from '../../assets/sobreGraduados.png'

export default function SobreElMapa(){
    return(

     <div className="containerGraduados">   
      <div className='graduados'>
       <div className="titulo">
             <h1 >Sobre el Mapa</h1>
         </div>      
         <div className='texto'>
            <p>
                Desde el Área de Graduados de la Secretaría Académica de la Universidad Tecnologica Nacional de Parana,
                decidimos impulsar la creación de una herramienta de georeferenciación que
                permita visibilizar la inserción laboral de nuestros graduados. A lo largo de su historia,
                la UTN FRP cuenta con cientos de graduados que se desempeñan profesionalmente en las
                distintas zonas del país y del mundo, aportando al desarrollo económico, social y académico.
            </p>
        </div>
         <div className='texto'>
            <p>
                Creemos que la confección de un Mapa de Graduados de la Universidad, donde se especifique 
                la zona y el área, rama o sector productivo donde se encuentra ejerciendo, puede fomentar la
                 generación de vínculos profesionales entre los egresados, propiciando la creación de 
                 iniciativas conjuntas; a la vez, también puede ser un insumo para la búsqueda de las 
                 instituciones y empresas, públicas o privadas, que necesiten contratar personal
            </p>
          </div>
          <div className='t'>
           <div className='parraf'>
            <div className='texto'>
             <p>
               Además, esta herramienta de geolocalización será una valiosa fuente de información para instituciones
               y empresas, tanto a nivel nacional como internacional, que estén en búsqueda de profesionales altamente 
               capacitados y comprometidos. El acceso a esta base de datos les brindará la posibilidad de identificar rápidamente a aquellos
               Graduados que se ajusten a sus requerimientos, facilitando así los procesos de reclutamiento y selección de personal
              </p>
           </div>
           <div className='texto'>
             <p>
                n resumen, la creación de este Mapa de Graduados representa un paso significativo hacia la consolidación de una red sólida y 
                activa de exalumnos de la UTN FRP, promoviendo la colaboración, el intercambio de conocimientos y la generación de oportunidades laborales. 
                Estamos convencidos de que esta herramienta contribuirá de manera sustancial al crecimiento económico, social y académico de nuestra comunidad universitaria, 
                y fortalecerá aún más el prestigio y reconocimiento de la Universidad Tecnologica Nacional de Entre Ríos a nivel nacional e internacional
              </p>

           </div>
          </div>
          <div>
            <img src={image}></img>
          </div>
         </div>
         
    
         
        </div>       
         
       </div>
       
    )
}