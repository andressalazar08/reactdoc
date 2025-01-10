import React from 'react';
import Snippet from '../components/Snippet';
import Highlight from '../components/Highlight';

const texto1 = `Las aplicaciones de React están basadas en componentes.

Por definición: un componente es una pieza de la interfaz de usuario que puede ser reutilizada en diferentes
partes de la aplicación. Tiene su propia lógica y apariencia.`;

function CrearComponentes() {

  const codevacio= `'`;



  const texto2 = `Los componentes de React son funciones de JavaScript que devuelven markup (marcado):`;

  const code1 = `function MyButton() {
  return (
    <button>Soy un botón</button>
  );
}`;

  const texto3= `Para crear un componente en React, en un archivo importamos React from 'react' y creamos una 
  función que devuelva el marcado que queremos mostrar.  Luego, podemos usar ese componente en cualquier parte de nuestra aplicación.`;

  const code2= `import React from 'react';

function MyButton() {
  return (
   <button>Soy un botón</button>
);

export default MyButton;`;

  const code3= `import React from 'react';
  
function OtroComponente() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
    </div>
  );

export default OtroComponente;`;


  return (
    <div>
      <h1>Crear Componentes en React</h1>
      <p>
        {texto1.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <p>{texto2}</p>
      <Snippet code={code1} />
      <p>{texto3.split('\n').map((line, index)=>(
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
      </p>
      <Snippet code={code2} />

      <p>
      Ahora que has declarado MyButton, puedes anidarlo en otro componente
      </p>
      <Snippet code={code3} />

      <p>
        {` Nota que `}
        <Highlight>&lt;MyButton /&gt;</Highlight>
        {` empieza con mayúscula. Así es como sabes que es un componente de React. Los nombres de los componentes de React siempre deben comenzar con mayúscula, mientras las etiquetas HTML deben estar minúsculas.`}
        {`Las palabras clave `}
        
        <Highlight>export default</Highlight>
         {` especifican el componente principal en el archivo.`}
      </p>


    </div>
  );
}

export default CrearComponentes;