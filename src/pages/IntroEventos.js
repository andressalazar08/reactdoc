import React from 'react';
import Snippet from '../components/Snippet';
import Highlight from '../components/Highlight';
import NoteComponent from '../components/Note';

const code1= `import React from 'react';

function ButtonComponent(){

    function handleClick(){
        alert('Botón presionado');
    };

return(
    <button onClick={handleClick}>
        Presioname
    </button>
    )
}

`
;

function IntroEventos(){
    return(
        <>
            <h1>Introducción al manejo de Eventos</h1>

            <h2>Responder a Eventos</h2>

            <p>En React, puedes manejar eventos de la misma manera que lo haces en el DOM nativo. Sin embargo, React envuelve el evento nativo de JavaScript para asegurarse de que el comportamiento sea consistente en todos los navegadores.</p>

            <h3>Funciones controladoras</h3>

            <p>Las funciones controladoras por convención usan <b>handle. </b>
            En React, una función controladora o <b> handler function</b> es una función que se utiliza para manejar eventos. Estas funciones se asignan a los manejadores de eventos como <Highlight>onClick, onChange, onSubmit</Highlight>, entre otros, para definir cómo debe responder el componente cuando ocurre un evento en el navegador.
            <br/>
            El nombre de la función controladora es arbitrario, pero por convención se usa <Highlight>handle</Highlight> seguido del nombre del evento. Por ejemplo, si se quiere manejar un evento <Highlight>onClick</Highlight>, se puede nombrar la función controladora como <Highlight>handleClick</Highlight>.
            <br/>
            El siguiente snippet muestra el evento <b>onClick</b> de un botón que es manejado por una función controladora <b>handleClick</b>.
            </p>

            <Snippet code={code1} />   
            <NoteComponent texto="¡Nota que onClick={handleClick} no tiene paréntesis al final!
             No llames a la función controladora de evento: solamente necesitas pasarla hacia abajo. React llamará a tu controlador de evento cuando el usuario haga clic en el botón."/>

             <h3>Características principales de una función controladora:</h3>
             <p>
             
<b>Especifica la lógica de respuesta a un evento:</b> Permite realizar acciones cuando un usuario interactúa con el componente, como hacer clic en un botón, ingresar texto en un campo, o enviar un formulario.
<br/><br/>
<b>Asociación a un evento:</b> Se pasa como valor a un manejador de eventos (por ejemplo, onClick, onChange).
<br/><br/>
<b>Acceso al estado y propiedades del componente:</b> Si la función está dentro de un componente funcional con hooks o es un método de una clase, puede acceder al estado (state) y propiedades (props) para realizar cambios o usar la información necesaria.
             </p>
        </>
    )
};


export default IntroEventos;