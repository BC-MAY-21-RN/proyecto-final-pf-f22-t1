![BrightCoders Logo](img/logo-bc.png)

# Nombre del proyecto
Bethink.

## Problematica que atiende
En la vida cotidiana una persona se enfrenta a una serie de actividades, recordatorios o notas que debe tomar y el organizarlas todo en un solo lugar suele 
ser un problema. Existen aplicaciones que pueden cumplir esta función pero son complicadas de usar, no son intuitivas o debes usar más de una aplicación para 
cumplir tus necesidades.

## Propuesta de solución
Esta aplicación viene a ayudar dicha problemática, centralizando las necesidades en un solo sitio, con una experiencia de usuario agradable y de
una interfaz cómoda para que el usuario realice sus actividades de manera sencilla.

## Definición de requerimientos del MVP

### Requerimientos funcionales

- Permitir a los nuevos usuarios registrarse:
  - El usuario podrá registrarse utilizando nombre, correo y clave ó una cuenta de Google.
  - Los datos de registro deben guardarse en firebase.
  - El formulario de registro debe contar con validaciones.
  
- Permitir a los usuarios registrados iniciar sesión:
  - El usuario podrá iniciar sesión utilizando correo y clave o su cuenta de Google, dependiendo de la forma en la que realizó su registro.
  - El inicio de sesión debe realizarse accediendo o verificando los datos almacenados en firebase.
  - El formulario de inicio de sesión debe contar con validaciones.

- Permitir al usuario agregar notas:
  - El usuario podrá agregar notas a la aplicación.
  - El usuario podrá seleccionar la prioridad de la nota entre alta, mediana o baja.
  - El usuario podrá indicar si al querer entrar a la nota deba escribir una contraseña como método de protección en caso de que sea información sensible.

- Permitir al usuario agregar recordatorios:
  - El usuario podrá agregar recordatorios a la aplicación.
  - El usuario podrá seleccionar la prioridad del recordatorio entre alta, mediana o baja.

- El usuario podrá ver un calendario con sus recordatorios.
- El usuario podrá darle "corazón" a sus notas para tenerlas destacadas.
- El usuario podrá navegar en la aplicación mediante secciones de notas o recordatorios.
- El usuario tendrá podrá ver sus notas o recordatorios con el color con base a su prioridad.
- El usuario podrá acceder a las notas o recordatorios dependiendo su prioridad.

- El usuario podrá tomar una foto desde su dispositivo o seleccionar una imagen de su galería para que la nota o recordatorio sea más específica.


### Requerimientos no funcionales
- Base de datos
   - La información se guardará en firebase.
 - Calidad
   - Utilizar un estilo de código estandarizado (revisado por Eslint).
   - Incluir pruebas unitarias.
   - Puntuación **A** obtenida en CodeClimate.
- Ejecución 
   - Puede ejecutarse en Android o iOs.
- Código fuente
   - Orientado a Objetos.
   - Métodos pequeños.
   - Aplicar los principios [SOLID](https://blog.usejournal.com/how-to-apply-solid-principles-in-react-applications-6c964091a982)
 - Manejo del estado
   - Redux para el manejo del estado de la App.

## Diseño del MVP

Incluyan en [esta carpeta](/design) su propuesta de diseño

## Recursos

- [Minimum Viable Product](https://www.agilealliance.org/glossary/mvp/#q=~(infinite~false~filters~(tags~(~'mvp))~searchTerm~'~sort~false~sortDirection~'asc~page~1))
- [Minimum Viable Product (MVP)](https://www.productplan.com/glossary/minimum-viable-product/)
- [Design Thinking](https://www.interaction-design.org/literature/topics/design-thinking)
- [El proceso de pensamiento de diseño](https://www.youtube.com/watch?v=_r0VX-aU_T8)
- [Metodología Design Thinking. Ejemplos](https://www.youtube.com/watch?v=_ul3wfKss58) 
- [Design Thinking ejemplo sencillo](https://www.youtube.com/watch?v=_H33tA2-j0s)
