
# ROHE store

Proyecto final desarrollado para el curso de React.js brindado por Coderhouse (2021).


## Descripción

Desarrollo front-end de una tienda online con carrito de compras, para una hipotética empresa dedicada a la venta de muebles de diseño. Construido en React.js y Firebase como servidor en la nube.

La aplicación permite navegar un catálogo de productos, filtrar los productos a partir de categorías, seleccionar productos y navegar a sus detalles, agregarlos al carrito de compras, acceder al carrito, modificar la cantidad de unidades por productos o eliminarlos y simular la compra. 


## Dependencias

- Node (14.17.0)
- React (17.0.2)
- React-dom (17.0.2)
- React-router-dom (5.2.0)
- React-scripts (4.0.3)
- Firebase (8.0.2)


## Descargar y levantar el proyecto

**Clonar el repositorio:**

git clone https://github.com/Ariel-Fumagalli/react-store-fumagalli.git

**Instalar las dependencias:**

### `npm install`

**En la raíz del proyecto correr:**

### `npm start`

Abre [http://localhost:3000](http://localhost:3000) para ver el proyecto en el navegador.


## UI

La UI fue desarrollada sin librerías ni frameworks de UI, para mantener el código lo más limpio y liviano posible. Los estilos se trabajaron íntegramente en Sass como preprocesador de CSS.

Se utilizaron diferentes cálculos y medidas relativas con el fin de desarrollar una interfaz visualmente escalable y fluida, que permita que el sitio se visualice de igual modo, tanto a monitores 4k (3840 x 2160) como así también en monitores con menor resolución, y así mismo se visualice correctamente en dispositivos móviles.

También, se incluyeron algunas animaciones sutiles, con el fin de generar transiciones suaves, que aportan a la navegación y a la experiencia de usuario. 

### Demo

![Alt Text](https://media.giphy.com/media/3Mx3NlcmPxUCfWhz8V/giphy.gif)


## Navegación y Funcionalidad

Para la navegabilidad entre componentes se utilizó el Browser Router de la dependencia react-router-dom.

Se utilizó Link y NavLink para navegar a los componentes y los hook useParams y useHistory.

El proyecto cuenta con las siguientes rutas:

-	**"/"** navega al componente ItemListContainer
-	**"/category/:categoryId"** navega a una categoría de productos, mediante el filtrado a partir del Id de categoría, utilizando el hook useParams.
-	**"/item/:id"** navega al componente ItemDetailContainer, filtrando un produto por medio del Id autogenerado desde Firebase, mediante la utilización de useParams. El componente ItemDetailContainer devuelve e imprime en el DOM el componente ItemDetail, el cual contiene toda la información del producto. 
-	**"/cart"** navega al componente Cart, mediante el cual se muestran en pantalla todos los productos que el usuario va agregando al carrito.

Además de las rutas y el hook useParams, se utilizó el hook useHistory, dentro del componente ItemDetail, para acceder al historial de navegación y mediante el método .goBack() navegar a la pantalla anterior. Desde el DOM, se accede haciendo clic en un botón de flecha que se encuentra dentro del componente ItemDetail.

Dentro del carrito de compras, podemos acceder al componente Checkout, haciendo clic en el botón “Comprar carrito”, que se encuentra dentro de Cart. 

En este caso, se incluyó el componente Checkout dentro de Cart, y se utilizó un hook de estado para poder montar o desmontar el contenido del componente Checkout mediante un condicional del tipo Inline fragment.

Esta decisión responde principalmente a una cuestión de usabilidad y diseño UI. La idea es que el usuario pueda continuar con la compra, pero al mismo tiempo tenga la posibilidad de poder volver al carrito de manera directa, en caso de querer modificar los productos, ya sea eliminar alguno de ellos o modificar las unidades, evitando de este modo desmontar el componente Cart.


### Demo

![Alt Text](https://media.giphy.com/media/r2jqOKpxRxPwKVOwOl/giphy.gif)


## Sobre el diseño UI

El diseño UI se trabajó a partir de decisiones que responden a cuestiones racionales, de usabilidad y comunicacionales.

El diseño de ROHE está inspirado en la obra y en las ideas del arquitecto y diseñador industrial Ludwig Mies van der Rohe, quien popularizó la famosa frase “Menos es más”. 

El desafío fue realizar un proyecto despojado de todo tipo de elemento superfluo con la intención de reducir la interfaz a la síntesis máxima posible, pero sin que esto afecta la usabilidad y la experiencia de usuario. Aquí el protagonismo está puesto en las imágenes de producto y en la economía de recursos.

De este modo, por medio de una estética minimalista y despojada se intentó transmitir cierto aire de sofisticación y calidad.


### Autor

**Ariel Fumagalli** - ( https://www.linkedin.com/in/ariel-fumagalli/ )