# DULCE ENCANTO

## Guía de personalización de la plantilla

¡Gracias por adquirir esta plantilla! Esta guía te acompañará paso a
paso para que puedas adaptar **Dulce Encanto** a tu propia repostería,
pastelería, cafetería o negocio de postres.

No necesitas ser programador para realizar los cambios básicos. La
mayoría de las personalizaciones consisten en reemplazar textos,
fotografías, enlaces y datos de contacto.

Lee las instrucciones antes de modificar los archivos y conserva siempre
una copia de seguridad de la plantilla original.

------------------------------------------------------------------------

# 1. Antes de comenzar

## ¿Qué necesitas?

-   Una computadora.
-   La carpeta completa de la plantilla.
-   Un navegador, como Google Chrome, Microsoft Edge o Firefox.
-   Un editor de texto. Recomendamos **Visual Studio Code**, que es
    gratuito.
-   Tus fotografías, textos, número de WhatsApp y enlaces de redes
    sociales.

Puedes descargar Visual Studio Code desde:

https://code.visualstudio.com/

Si no sabes instalarlo, pide ayuda a alguien de confianza o sigue las
instrucciones de instalación de la página oficial.

## Cómo abrir la plantilla

1.  Descarga el archivo ZIP que recibiste.
2.  Busca el archivo en la carpeta Descargas de tu computadora.
3.  Haz clic derecho sobre el ZIP.
4.  Selecciona **Extraer todo** o **Extraer aquí**, según tu sistema.
5.  Abre la carpeta extraída.
6.  Busca el archivo `index.html`.
7.  Haz doble clic en `index.html` para abrir la página en tu navegador.

Para modificar los archivos cómodamente:

1.  Abre Visual Studio Code.
2.  Selecciona **Archivo \> Abrir carpeta**.
3.  Busca y selecciona la carpeta principal de la plantilla.
4.  En el panel izquierdo aparecerán los archivos y carpetas del
    proyecto.

**Importante:** no muevas archivos o carpetas de su ubicación original.
La página utiliza rutas para encontrar las fotografías, los estilos y
las funciones. Si cambias esas ubicaciones, algunos elementos podrían
dejar de funcionar.

------------------------------------------------------------------------

# 2. Conoce las carpetas y los archivos

La plantilla está organizada de esta manera:

``` text
reposteria/
│
├── index.html
│
├── css/
│   └── styles.css
│
├── js/
│   └── script.js
│
├── assets/
│   └── images/
│       ├── pastel-hero.png
│       ├── reposteria-artesanal.jpg
│       ├── pastel-fresas.jpg
│       ├── cupcakes.jpg
│       ├── brownies.jpg
│       ├── galeria-pastel.jpg
│       ├── galeria-cupcakes.jpg
│       ├── galeria-brownies.jpg
│       ├── galeria-tarta.jpg
│       └── galeria-celebracion.jpg
│
└── README.md
```

Los nombres de las imágenes anteriores corresponden a los utilizados en
la versión de referencia de esta plantilla. Si tu paquete incluye
nombres adicionales o diferentes, conserva los nombres y las rutas que
aparecen en tu propia carpeta.

### ¿Para qué sirve cada archivo?

  -----------------------------------------------------------------------
  Archivo o carpeta                   ¿Qué contiene?
  ----------------------------------- -----------------------------------
  `index.html`                        Los textos, títulos, secciones,
                                      botones y estructura de la página.

  `css/styles.css`                    Los colores, tamaños, espacios,
                                      tipografías, diseños y efectos
                                      visuales.

  `js/script.js`                      Algunas funciones, como el menú
                                      móvil, el año del pie de página y
                                      el formulario de WhatsApp.

  `assets/images/`                    Las fotografías que aparecen en la
                                      página.

  `README.md`                         Esta guía de instrucciones.
  -----------------------------------------------------------------------

**Una recomendación:** si solo quieres cambiar textos o fotografías,
normalmente trabajarás en `index.html` y en `assets/images/`. No
necesitas modificar JavaScript ni CSS para esos cambios sencillos.

------------------------------------------------------------------------

# 3. Cómo guardar los cambios y comprobar la página

Cada vez que modifiques un archivo:

1.  Guarda los cambios con `Ctrl + S` en Windows.
2.  Regresa al navegador.
3.  Recarga la página.
4.  Si no ves los cambios, presiona `Ctrl + F5` para actualizarla sin
    utilizar la versión guardada en caché.

Puedes mantener el navegador abierto mientras editas. Después de
guardar, vuelve a la pestaña y actualiza la página para revisar el
resultado.

**Consejo:** cambia una cosa a la vez. Así será más fácil identificar
qué modificación produjo un problema.

------------------------------------------------------------------------

# 4. Cambiar el nombre del negocio

El nombre de ejemplo es **Dulce Encanto**. Puedes reemplazarlo por el
nombre de tu negocio.

1.  Abre `index.html`.
2.  Presiona `Ctrl + F`.
3.  Escribe `Dulce Encanto`.
4.  Revisa cada coincidencia.
5.  Reemplaza el nombre donde corresponda.
6.  Guarda y revisa la página.

El nombre puede aparecer en el logotipo de texto, el pie de página y el
aviso de derechos de autor.

También debes revisar la etiqueta `<title>` que está dentro de la
sección `<head>` de `index.html`. Es el texto que aparece en la pestaña
del navegador.

Por ejemplo:

``` html
<title>Mi Repostería | Pasteles y postres artesanales</title>
```

Puedes cambiar la descripción de la página en la etiqueta
`meta name="description"` que está cerca del título. Es una breve
presentación del negocio para buscadores y otros servicios.

**Importante:** no borres las etiquetas `<title>`, `<meta>` ni los
símbolos `<` y `>` que las rodean. Cambia solamente el texto que está
entre las etiquetas o dentro del atributo correspondiente.

------------------------------------------------------------------------

# 5. Cambiar los textos de la página

Los textos principales están en `index.html`.

Para modificarlos:

1.  Abre `index.html`.
2.  Busca una frase que puedas reconocer, por ejemplo
    `Un dulce momento`.
3.  Selecciona solamente el texto que quieres cambiar.
4.  Escribe el nuevo contenido.
5.  No borres las etiquetas HTML que rodean el texto.
6.  Guarda y comprueba el resultado.

## Secciones de la plantilla

### Barra de navegación

Es la franja superior que contiene el nombre del negocio y los enlaces:

-   Inicio
-   Nosotros
-   Productos
-   Galería
-   Contacto

Puedes cambiar el texto visible de los enlaces, pero evita cambiar los
valores que comienzan con `#` en `href` si no sabes cómo funcionan. Esos
valores conectan cada enlace con una sección de la misma página.

### Sección principal o Hero

Es la primera sección grande que ve el visitante. Incluye un título, una
descripción, botones y una fotografía destacada.

Busca el texto `Un dulce momento` para localizar el título principal.
Puedes reemplazarlo por una frase que represente tu negocio.

También puedes modificar la descripción para explicar qué vendes, qué te
hace especial o qué tipo de pedidos aceptas.

### Sección Nosotros

Presenta la historia y la propuesta del negocio.

Es recomendable incluir información real y breve, por ejemplo:

-   Cuándo comenzó el negocio.
-   Qué productos elaboras.
-   Qué ingredientes o métodos utilizas.
-   Qué tipo de experiencia quieres ofrecer.

No es necesario contar toda la historia. Unos párrafos claros y honestos
son suficientes.

### Sección Productos

La versión de referencia contiene tres tarjetas:

-   Pastel de fresas con crema.
-   Cupcakes artesanales.
-   Brownies de chocolate.

Cada tarjeta tiene una fotografía, un nombre, una categoría, una
descripción y un enlace para realizar un pedido.

Para cambiar un producto, busca su nombre en `index.html` y reemplaza el
texto correspondiente.

Si cambias el número de tarjetas, debes conservar la estructura HTML de
cada una. Si no tienes experiencia con HTML, es más seguro modificar
primero los textos y las fotografías sin añadir ni eliminar tarjetas.

**Los precios no están configurados como un sistema de compra o pago.**
Si decides añadir precios, puedes escribirlos en las descripciones o
solicitar una adaptación específica de la plantilla.

### Sección Galería

Muestra fotografías de tus creaciones.

Puedes cambiar los textos que aparecen sobre las imágenes para describir
cada fotografía.

### Sección Contacto

Contiene información de atención y un formulario para que los visitantes
escriban sus consultas o pedidos.

El formulario solicita:

-   Nombre completo.
-   Correo electrónico.
-   Teléfono.
-   Descripción del pedido o consulta.

La conexión con WhatsApp se explica en la sección 9 de esta guía.

### Pie de página o Footer

Es la parte inferior de la página. Contiene el nombre del negocio, una
descripción, redes sociales, enlaces de navegación y derechos de autor.

Puedes cambiar los textos de esta sección siguiendo el mismo
procedimiento: busca la frase en `index.html` y reemplaza solamente el
contenido visible.

------------------------------------------------------------------------

# 6. Cambiar las fotografías

Las imágenes se encuentran en:

``` text
assets/images/
```

Puedes utilizar tus propias fotografías. Recomendamos imágenes nítidas,
bien iluminadas y relacionadas con tus productos.

## Método recomendado: conservar el nombre del archivo

Este método es el más sencillo y evita tener que modificar el código.

Por ejemplo, para cambiar la fotografía principal:

1.  Prepara tu nueva fotografía.
2.  Haz una copia de la fotografía original por si deseas recuperarla.
3.  Cambia el nombre de tu fotografía nueva a `pastel-hero.png`.
4.  Colócala dentro de `assets/images/`.
5.  Acepta reemplazar el archivo si la computadora lo pregunta.
6.  Recarga la página.

Haz lo mismo con las demás fotografías, utilizando exactamente el nombre
que ya espera la plantilla.

## Fotografías utilizadas en la versión de referencia

  Nombre del archivo           Lugar donde aparece
  ---------------------------- ---------------------------------------
  `pastel-hero.png`            Fotografía principal de la página.
  `reposteria-artesanal.jpg`   Sección Nosotros.
  `pastel-fresas.jpg`          Tarjeta de pastel de fresas.
  `cupcakes.jpg`               Tarjeta de cupcakes.
  `brownies.jpg`               Tarjeta de brownies.
  `galeria-pastel.jpg`         Primera imagen de la galería.
  `galeria-cupcakes.jpg`       Fotografía de cupcakes en la galería.
  `galeria-brownies.jpg`       Fotografía de brownies en la galería.
  `galeria-tarta.jpg`          Fotografía de tarta en la galería.
  `galeria-celebracion.jpg`    Fotografía de una celebración.

## ¿Puedo usar otro nombre para una fotografía?

Sí, pero en ese caso también debes actualizar la ruta de la imagen en
`index.html`.

Por ejemplo, si tu imagen se llama `mi-pastel.jpg`, la ruta deberá
apuntar a ese nombre:

``` html
<img src="assets/images/mi-pastel.jpg" alt="Pastel artesanal de la casa">
```

El texto de `alt` es una descripción de la imagen. Ayuda a las personas
que utilizan lectores de pantalla y puede mostrarse si la imagen no
carga.

## Recomendaciones para las imágenes

-   Utiliza fotografías propias o imágenes que tengas permiso para
    utilizar.
-   Prefiere imágenes horizontales o cuadradas para las tarjetas.
-   Evita fotografías borrosas o demasiado oscuras.
-   Utiliza formatos comunes como JPG, JPEG, PNG o WebP.
-   No uses espacios, tildes ni caracteres especiales en los nombres de
    archivo.
-   Respeta la extensión del archivo: `.jpg`, `.png`, `.webp`, etc.
-   Comprueba que el nombre escrito en el código coincida exactamente
    con el nombre del archivo.

Si una imagen no aparece, revisa primero su nombre, su extensión y su
ubicación.

------------------------------------------------------------------------

# 7. Cambiar colores y apariencia

Los colores y el diseño se controlan desde:

``` text
css/styles.css
```

Si solo quieres cambiar los colores generales, busca al principio del
archivo el bloque `:root`.

En la versión de referencia se utilizan estos colores:

``` css
:root {
    --primary: #F72565;
    --secondary: #FF784F;
    --accent: #FFD166;
    --background: #FFF7F0;
    --surface: #FFFFFF;
    --text: #47243A;
    --text-light: #826B7A;
    --border: #F3DDE5;
    --gradient: linear-gradient(120deg, #F72565, #FF784F);
}
```

### ¿Qué significa cada color?

  Variable         Uso general
  ---------------- -------------------------------------------------
  `--primary`      Color principal, botones y detalles destacados.
  `--secondary`    Color complementario.
  `--accent`       Detalles de énfasis.
  `--background`   Fondo general de la página.
  `--surface`      Fondo de tarjetas y superficies claras.
  `--text`         Texto principal.
  `--text-light`   Texto secundario.
  `--border`       Bordes suaves.
  `--gradient`     Degradado utilizado en algunos elementos.

Los códigos como `#F72565` son códigos de color hexadecimal.

Para cambiar un color, reemplaza el código por otro código válido. Por
ejemplo:

``` css
--primary: #8E44AD;
```

Esto cambia el color principal a un tono violeta.

**Precaución:** no borres los dos puntos, el punto y coma ni las llaves
del bloque. Cambia solamente el valor del color.

Si quieres cambiar tamaños, espacios, formas o distribución, necesitarás
editar otras reglas de CSS. Hazlo con cuidado y conserva una copia del
archivo original.

------------------------------------------------------------------------

# 8. Cambiar las redes sociales

Los iconos de Instagram, Facebook y TikTok se encuentran en el footer de
`index.html`.

Busca:

``` html
<div class="footer-social">
```

Cada icono está dentro de un enlace. En la versión de referencia, los
enlaces tienen `href="#"` como marcador de posición.

Por ejemplo:

``` html
<a href="#" aria-label="Instagram">
    <i class="fa-brands fa-instagram"></i>
</a>
```

Para colocar tu perfil, reemplaza solamente el símbolo `#` por la
dirección real de tu cuenta:

``` html
<a href="https://www.instagram.com/tu-negocio/"
   aria-label="Instagram"
   target="_blank"
   rel="noopener noreferrer">
    <i class="fa-brands fa-instagram"></i>
</a>
```

Repite el procedimiento con Facebook y TikTok.

### ¿Qué pasa si no tengo una de esas redes?

Puedes eliminar el enlace completo correspondiente, desde `<a ...>`
hasta `</a>`, o dejarlo pendiente hasta crear la cuenta.

No dejes `href="#"` si no quieres que el icono funcione como enlace.

### ¿Por qué los iconos necesitan internet?

La plantilla utiliza Font Awesome desde un servicio externo para cargar
los iconos. Por eso, el dispositivo del visitante necesita conexión a
internet para mostrarlos correctamente.

Si los iconos no aparecen:

1.  Comprueba que el dispositivo tenga internet.
2.  Verifica que el enlace de Font Awesome siga presente en el `<head>`
    de `index.html`.
3.  Recarga la página.

------------------------------------------------------------------------

# 9. Configurar el formulario de WhatsApp

El formulario de contacto está preparado para abrir WhatsApp con un
mensaje escrito automáticamente a partir de los datos que introduce el
visitante.

**Importante:** WhatsApp no envía el mensaje por sí solo. El visitante
debe revisar el mensaje y pulsar el botón de enviar dentro de WhatsApp.

## Paso 1. Localizar el número

Abre:

``` text
js/script.js
```

Busca esta línea:

``` javascript
const whatsappNumber = "573001234567";
```

El número mostrado es un ejemplo. Debes reemplazarlo por el número de
WhatsApp del negocio.

## Paso 2. Escribir el número correctamente

Escribe el número con el código del país, pero sin el signo `+`,
espacios, guiones ni paréntesis.

Ejemplo ficticio para Colombia:

``` javascript
const whatsappNumber = "573001234567";
```

En este ejemplo:

-   `57` es el código de país de Colombia.
-   Los números siguientes representan el teléfono de ejemplo.

No copies el número de ejemplo como si fuera tu número real.

## Paso 3. Guardar y probar

1.  Guarda `script.js`.
2.  Abre la página en el navegador.
3.  Desplázate hasta Contacto.
4.  Escribe datos de prueba.
5.  Pulsa **Enviar mensaje**.
6.  Comprueba que WhatsApp se abra con el texto preparado.
7.  Revisa que el número de destino sea correcto.

No necesitas escribir el número de WhatsApp en el formulario. Se
configura una sola vez en `script.js`.

## Si el formulario no abre WhatsApp

Comprueba lo siguiente:

-   Que el número esté escrito correctamente.
-   Que incluya el código del país.
-   Que no tenga espacios ni símbolos.
-   Que el navegador permita abrir nuevas ventanas o pestañas.
-   Que `index.html` conserve el formulario con el identificador
    `contact-form`.
-   Que los campos mantengan los identificadores que utiliza el
    JavaScript.

Los identificadores utilizados por la versión de referencia son:

``` text
contact-form
contact-name
contact-email
contact-phone
contact-message
```

No cambies esos identificadores si no vas a actualizar también el código
JavaScript.

------------------------------------------------------------------------

# 10. Cambiar el año del copyright

El año del footer se actualiza automáticamente desde `js/script.js`.

La página utiliza este elemento:

``` html
<span id="current-year">2026</span>
```

Y el JavaScript actualiza su contenido con el año del dispositivo del
visitante.

No necesitas cambiarlo cada enero. Si eliminas el identificador
`current-year`, la actualización automática dejará de funcionar.

------------------------------------------------------------------------

# 11. Cómo comprobar la versión para celulares y tablets

La plantilla está diseñada para adaptarse a diferentes tamaños de
pantalla.

Después de hacer cambios, revisa la página en:

-   Computadora de escritorio.
-   Tablet.
-   Teléfono celular.

En Google Chrome puedes hacer una comprobación básica:

1.  Abre la página.
2.  Presiona `F12`.
3.  Busca el icono de un teléfono y una tablet en las herramientas del
    navegador.
4.  Haz clic en ese icono.
5.  Selecciona diferentes tamaños de pantalla.
6.  Comprueba que los textos, botones, fotografías y secciones se vean
    correctamente.

Si no sabes utilizar esta herramienta, también puedes abrir la página
desde el navegador de tu teléfono.

Comprueba especialmente:

-   Que el menú móvil se abra y se cierre.
-   Que los botones se puedan pulsar.
-   Que no aparezca una barra de desplazamiento horizontal.
-   Que las fotografías no se deformen.
-   Que el formulario sea fácil de completar.
-   Que las columnas del footer se organicen verticalmente.

------------------------------------------------------------------------

# 12. Solución de problemas frecuentes

## La página aparece sin colores o sin diseño

Posibles causas:

-   Se movió la carpeta `css`.
-   Se cambió el nombre de `styles.css`.
-   Se modificó la ruta de la hoja de estilos.

Comprueba que el archivo siga en `css/styles.css` y que `index.html`
tenga la referencia correspondiente.

## Las fotografías no aparecen

Posibles causas:

-   El nombre del archivo no coincide.
-   La extensión es diferente.
-   La imagen se guardó en otra carpeta.
-   La ruta está mal escrita.

Comprueba la carpeta `assets/images/` y compara el nombre del archivo
con el valor de `src` en `index.html`.

## Los iconos sociales no aparecen

Comprueba que el enlace de Font Awesome siga dentro del `<head>` y que
tengas conexión a internet.

## Los enlaces del menú no llevan a ninguna parte

Los enlaces internos deben apuntar a una sección que tenga el mismo
identificador.

Por ejemplo:

``` html
<a href="#productos">Productos</a>
```

Debe existir una sección con:

``` html
<section id="productos">
```

No cambies esos identificadores sin actualizar también sus enlaces.

## WhatsApp no se abre

Revisa el número configurado, el código de país y los permisos del
navegador para abrir ventanas nuevas.

## La página se ve diferente después de modificarla

Si no sabes qué cambio produjo el problema:

1.  No sigas haciendo modificaciones al azar.
2.  Revisa qué archivo editaste por última vez.
3.  Si hiciste una copia de seguridad, recupera la versión anterior.
4.  Compara los cambios realizados.
5.  Corrige una cosa a la vez.

------------------------------------------------------------------------

# 13. Publicar la página en internet

Abrir `index.html` en tu computadora permite ver la plantilla
localmente, pero no significa que ya esté publicada en internet.

Para que otras personas puedan visitar tu página necesitarás:

-   Un servicio de alojamiento web (hosting).
-   Un dominio, si deseas una dirección personalizada.
-   Subir la carpeta del proyecto al hosting, conservando su estructura.

El proceso concreto depende del proveedor que elijas. Algunos servicios
ofrecen publicación sencilla de sitios estáticos.

Antes de publicar, comprueba que:

-   La página principal se llame `index.html`.
-   Las carpetas `css`, `js` y `assets` estén incluidas.
-   Las fotografías carguen correctamente.
-   Los enlaces de redes sociales sean reales.
-   El número de WhatsApp sea el correcto.
-   El formulario haya sido probado.
-   La página se vea bien en celular y computadora.

**Nota:** esta plantilla es un sitio estático. El formulario de WhatsApp
abre una conversación preparada; no almacena pedidos en una base de
datos, no administra inventario y no procesa pagos.

------------------------------------------------------------------------

# 14. Recomendaciones antes de entregar o publicar tus cambios

Utiliza esta lista para revisar tu personalización:

-   [ ] Cambié el nombre del negocio.
-   [ ] Actualicé el título de la pestaña del navegador.
-   [ ] Reemplacé los textos de ejemplo.
-   [ ] Coloqué mis propias fotografías.
-   [ ] Revisé los nombres y descripciones de los productos.
-   [ ] Actualicé los enlaces de Instagram, Facebook y TikTok.
-   [ ] Configuré el número de WhatsApp.
-   [ ] Probé el formulario de contacto.
-   [ ] Revisé la página en computadora.
-   [ ] Revisé la página en celular.
-   [ ] Comprobé que todos los enlaces funcionen.
-   [ ] Conservé una copia de seguridad de la plantilla original.

------------------------------------------------------------------------

# 15. Consejos finales

1.  **Conserva una copia original.** Antes de personalizar la plantilla,
    duplica la carpeta completa. Así podrás recuperar los archivos si
    algo sale mal.
2.  **No cambies los nombres de las carpetas.** Mantén `css`, `js` y
    `assets` en su ubicación.
3.  **No elimines código que no entiendas.** Si solamente quieres
    cambiar un texto, reemplaza el texto y deja las etiquetas que lo
    rodean.
4.  **Utiliza imágenes optimizadas.** Las fotografías demasiado pesadas
    pueden hacer que la página tarde más en cargar.
5.  **Prueba después de cada cambio.** Guarda, actualiza y revisa.
6.  **Personaliza con información real.** Usa datos de contacto,
    precios, fotografías y enlaces que pertenezcan al negocio.

------------------------------------------------------------------------

## ¡Gracias por elegir esta plantilla!

Esperamos que **Dulce Encanto** sea el punto de partida para crear una
presencia digital atractiva para tu negocio.

No necesitas aprender programación avanzada para comenzar: realiza los
cambios básicos con calma, sigue esta guía y comprueba cada resultado.

**¡Te deseamos muchos éxitos y dulces ventas!**
