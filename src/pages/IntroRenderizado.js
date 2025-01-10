import React from 'react';
import Snippet from '../components/Snippet';
import Highlight from '../components/Highlight';


const code1= `import React from 'react;

function MyComponenteLogin(){
    return(
        <h1>Este es el formulario de login</h1> 
    )
}

function MyComponenteAdminPanel(){
    return(
        <h1>Este es el formulario de Panel de administración </h1> 
    )
}
    
let contenido;

if(isLoggedIn){
    contenido = <MyComponenteAdminPanel />;
}
else{
    contenido = <MyComponenteLogin />;
}

function ComponenteRenderizador(){
    return(
        <>
            {contenido}
        </>
    )
}

`;



function IntroRenderizado() {


    return(
        <div>

            <h1>Renderizado de componentes</h1>

            <h2>Renderizado condicional</h2>

            <p>En <Highlight>React</Highlight> podemos renderizar componentes con base en un criterio.
                Para ello, podemos usar un operador ternario o un operador lógico <Highlight>&&</Highlight>.
                El siguiente snippet muestra un ejemplo de renderizado condicional con un operador logico if:
            </p>

            <Snippet code={code1} />

            <p>
                Se puede usar el operador ? condicional en vez de if
            </p>

            <Snippet code={`function ComponenteRenderizador(){
    return(
        <>
            {isLoggedIn ? <MyComponenteAdminPanel /> : <MyComponenteLogin />}
        </>
    )`}/>
        
        <p>Cuando no se tenga uun else explicito se puede usar la sintaxis lógica &&</p>

        <Snippet code={`function ComponenteRenderizador(){
    return(
        <>
            {isLoggedIn && <MyComponenteAdminPanel />}
        </>)
  )`}/>

<h2>Renderizado de listas</h2>
<p>En React, se pueden renderizar listas de elementos utilizando el método <Highlight>map</Highlight>.
    Este método recorre los elementos de un array y devuelve un nuevo array con los elementos modificados.
    Para renderizar una lista de elementos, se puede utilizar el método <Highlight>map</Highlight> en el componente
    que renderiza la lista.
Ejemplo de mapeo directo en el renderizado:
    Aquí se tiene una lista de productos, cada elemento es un objeto.
    el componente ProductList utiliza un <highlight>map</highlight>
    para recorrer los elementos de la lista
</p>
      <Snippet code={`const products = [
  { id: 1, title: 'Producto 1' },
  { id: 2, title: 'Producto 2' },
  { id: 3, title: 'Producto 3' },
];

function ProductList() {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.title}
        </li>
      ))}
    </ul>
  );
}`} />
        </div>
            
        )
};


export default IntroRenderizado;
