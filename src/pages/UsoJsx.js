import React from 'react';
import Snippet from '../components/Snippet';
import Highlight from '../components/Highlight';

function Page2() {

  const codevacio= `'`;
  const texto1= `JSX es una extensión de la sintaxis de JavaScript que permite escribir HTML en JavaScript.
  JSX produce elementos de React. Puede ser almacenado en una variable, pasado a funciones, y devuelto por funciones.
  JSX se parece al HTML, pero no es HTML. JSX se compila a JavaScript. El siguiente snippet muestra un retorno de un jsx en una función.`;

  const code1= `function MyButton() {
  return (
    <button>Soy un botón</button>
  );`

  const texto2= `JSX es más estricto,  Tienes que cerrar etiquetas como <br />. Tu componente tampoco puede devolver múltiples etiquetas de JSX. Debes envolverlas en un padre compartido, como <div>...</div> o en un envoltorio vacío <>...</>: que se denomina fragment`;
  
  const code2= `function AboutPage() {
  return (
    <>
      <h1>Acerca de</h1>
      <p>Hola.<br />¿Cómo vas?</p>
    </>
  );
} `;

const code3=`<img className="avatar" />`;

const code4=`/* en un archivo css aparte */
.avatar {
  border-radius: 50%;
}`;


const code5=`import React from 'react';

const nombre = 'Andres';

function Ejemplo() {
  return(
    <h1>Hola, soy {nombre}</h1>
  )
};`

  return (
    <div>
      <h1>Uso de JSX</h1>
      <p>{texto1}</p>

      <Snippet code={code1} />

      <p>{texto2}</p>

      <Snippet code={code2} />

      <h2>Estilos</h2>

      <p>Para añadir estilos en React usamos <Highlight>className</Highlight> que es equivalente a la propiedad class de las etiquetas Html</p>

      <Snippet code={code3} /> 


      <p>Para importar una hoja de estilos usamos 
        <Highlight> import './styles/App.css';</Highlight>
      </p>

      <Snippet code={code4} />  

      <p>Podemos mezclar en una misma linea etiquetas y variables de javascript.<br />
        En el siguiente snippet se muestra un componente ejemplo que dentro de la etiqueta h1 llama a una variable 
        definida previamente con JavaScript
      
      </p>

      <Snippet code={code5} />  

      <p>Las llaves de la variable <Highlight>nombre</Highlight> permite "escapar" hacia JavaScript</p>
      
      <p>En los atributos de las etiquetas JSX también puedo "escapar" hacia JavaScript</p>
      <Snippet code={`<img src={url} alt={descripcion} />`} />
      <p>En el anterior snippet se está llamando a las variables url y descripcion que se crean previamente en el archivo, algo similar a esto:</p>

      <Snippet code={`import React from 'react';

const url = 'https://www.google.com';
const descripcion = 'Logo de Google';
  
function Componente(){
    return(
        <img src={url} alt={descripcion} />
      )      
};`} /> 

    </div>
  );
}

export default Page2;