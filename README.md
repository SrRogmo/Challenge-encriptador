# Challenge-encriptador

- Primera fase - visual

El ajuste de los elementos y para la la verificacion la correcta posicion de cada uno, como primera instancia se realizan modificaciones para la correcta posicion del logo, se consigue la correcta posicion del logo con la posicion de los pixeles de la izquierta y la parte superior, generando un margen para separarlo del la parte superior y la parte izquierda, el logo se encuentra asignado en un contenedor con una clase la cual la facilita para verificar la informacion mas eficiente en el archivo de estilos CSS.

Se verifica que el cuadro de texto sea un input, se realiza varias modificaiones y pruebas sobre elk cuadro de texto en la rama de pruebas de visual y de la GUI al verificar que el cuadro de texto input, no es el requerido se realiza la actualizacion del cuadro por uno de texto el cual aun no tiene el texto predefinido para digitar, se alinea con el logo al darle margen y altura y ancho, se le asigna un contenedor para que este se pueda identificar correctamente.

Al ubicar correctamente el cuadro de texto e indentificar el cuadro de texto correcto, se realiza la alineacion ubicando el margen del espaciamiento que tendra incialmente el boton, al no contar con el boton de "desencriptado" no es posible alinear correctamente con el margen que se ha estipulado para el cuadro de texto superior.

Actualizacion 24-03-24

Se ajusta el borde de el boton de encriptado y el nuevo boton de desencriptado, se alinean correctamente para la visual grafia en ordenador.

Actualizacion 10/04/2024

Se agrega la nueva imagen para el cuadro de desencriptado en contenedor que permita realizar posteriores correcciones de posicion visual a la pantalla, se cambia en el cuerpo en el archivo index el color para dar fondo e identificar el color blanco del cuadro de desencriptado.

13/04/2024

Actualizacion de organizacion y detalles sobre la caja de desencriptado, tal como agregar el boton de copiar, se agrega detalles como sombreado a la caja, se actualiza caja de desacriptado como flotante en l aparte derecha dejando un margen de un 10% de acuerdo a la pantalla, se consigue que se encuentre en el lateral pero sigue con alteracion con los otros elementos.


14/04/2024

Se modifica la visual de los botones dando sombreado para a la caja de digitacion de texto y dando estetica, al igual que se añade un favicon a la pagina con el mismo logo el cual se a agregado a la pagina final de desencriptado, para la fecha, estas configuracion no es visualmente apta para otras pantallas o dispositivos, por lo cual es posible que haya que acercar o alejar un poco para que sea visible con claridad.


16/04/2024

Se realiza modifiaciones sobre el textarea, el cual impide que sea posible alterar el tamaño del mismo para que el usuario no tenga inconvenientes visuales, se agrega filtro de degrade al logo para toque estetico, se el archivo de JS, para asignar la funcion de los elementos que puede visualizar el usuario para que de igual forma estos se puedan usar.


17/04/2024

Al validar ,os detalles sobre la estructura visual del archivo index, se actualiza eliminando un identificador y agregando los elementos del identificador a la clase a al que pertenece el Id, esto ayudo a que se pudiese contener los elementos de texto en el Div, sin necesidad de que se desborde y sea necesario configurarlo de otra forma, se ajustan visualmente los elementos para que se vean centrados en el contenedor del texto.

- Segunda fase - funcional

18/04/2024

Para el boton de encriptado, se confirma que cada uno de los botontes funcionan correctamente cuando se llama a la funcion, en la cual se esta tomando el elemento por ID.

20/04/2024

ajustes visuales sobre el texto del cuadro con desencriptado, de igual forma, se añade la funcion de encriptado al texto digitado en textarea, en el cual se remplaza el contenido del cuadro de desencriptado en el cual se agrega un div con el cual se elimina todo el contenido salvo el boton de copiado, se elimina la alerta al momento de realizar el copiado del boton.