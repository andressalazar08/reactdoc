import React from "react";
import Snippet from "../components/Snippet";
import Highlight from "../components/Highlight";
import NoteComponent from "../components/Note";
import Comment from "../components/Comments";


const IntroduccionEstado = () => {

    return(
        <>
            <h1>Introducción al manejo de estados</h1>

            <h3>Qué es un estado?</h3>
            <p>
                Un estado en React es un <Highlight>objeto</Highlight> que representa la parte de la aplicación que puede cambiar con el tiempo.
                Es un objeto que contiene datos que son relevantes para la aplicación.
                Para definir un estado usamos la importación <Highlight>useState</Highlight> de React.  
                <br />
                <b>useState</b> es un <Highlight>hook</Highlight> que nos permite añadir estado a los componentes funcionales.
            </p>

            <NoteComponent texto="En React, useState, así como cualquier otra función que empiece con use, se le conoce como Hook."/>

            <h3>Qué es un Hook</h3>

            <NoteComponent  texto="Los Hooks son funciones especiales que sólo están disponibles mientras React está renderizando (algo que veremos con más detalle en la página siguiente). Los Hooks permiten «engancharnos» a diferentes características de React."/>
            <h3>Convenciones</h3>
            <Comment texto="La convención es nombrar estas dos variables como const [algo, setAlgo]. Podemos nombrarlo como queramos, pero mantener las convenciones hacen que las cosas sean más fáciles de entender en todos los proyectos."/>
        </>

    )


};


export default IntroduccionEstado;