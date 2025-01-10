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
        </>
    )
};


export default IntroEventos;