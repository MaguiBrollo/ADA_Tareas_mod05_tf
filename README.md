<!-- ===========================================================
                            PRESENTACIÓN
     =========================================================== -->

<p align="center">
   <img src="src/assets/img_readme/logo.png" width="900px" alt-text="Tasks in order LOGO">
</p>

---

<div align="center">

<a target="_blank" href="https://tasksinorder.netlify.app/"><img alt="tasks IN order" src="https://img.shields.io/badge/LINK%20-%20%234527A0?style=flat&label=tasks%20IN%20order&labelColor=%23000000&color=%234527A0"></a>

![GitHub Tag](https://img.shields.io/github/v/tag/MaguiBrollo/ADA_Tareas_mod05_tf?logoColor=%23000000&labelColor=%23000000&color=%234527A0 "Versión")

</div>

---

## Tabla de Contenidos:

- [tasks IN order](#tasks-in-order)

- [Tecnologías](#tecnologías)

- [Tareas](#tareas)

- [Móviles](#mobile)

- [Contáctame](#contáctame)

---

<!-- ==================================================
                         CONTENIDO
     ================================================== -->

## _tasks IN order_

[:top:](#tabla-de-contenidos) <br>

> Las aplicaciones web, comúnmente conocidas como apps, se han convertido en una parte esencial de nuestra vida cotidiana. Las apps se han consolidado como nuestras aliadas, simplificándonos tareas diarias complejas, como otras no tan complejas como por ejemplo el registro de tareas pendientes de realización. <br> `tasks IN order` se consolida como una herramienta sencilla y sumamente útil, ideal para registrar de manera fácil, tareas con su respectiva fecha de posible realización.

<p align="center" >
   <img src="src/assets/img_readme/pant_ppal.png" width="400px" alt-text="Presentación">
</p>

La aplicación `tasks IN order`, fue diseñada de tal manera que pueda ser utilizada en diferentes dispositivos, lo que implica un correcto diseño responsive.

<p align="center" >
   <img src="src/assets/img_readme/responsive.png" width="400px" alt-text="Responsive">
</p>

<br>

`tasks IN order` es una app desarrollada como Trabajo Final del "Módulo 5 - React", de la capacitación de `"Desarrollo Frontend"` dictado por [ADA ITW](https://www.linkedin.com/school/ada-itw/), y se encuentra incluido en mi `Portfolio Personal`, de tal manera de reflejar el grado de avance, apropiación y uso de los conocimiento adquiridos y asimilados durante la capacitación.

> [!NOTE]
> Visite mi portafolio personal: [PORTFOLIO](https://maguibrollo.github.io/ADA_Portafolio_mod01_tf/).

<br>

---
## _Tecnologías_

[:top:](#tabla-de-contenidos) <br>
`tasks IN order` fue desarrollada utilizando las siguientes tecnologías:

<div align="center">

|                          [![React](https://img.shields.io/static/v1?label=&message=React&color=%23EDE7F6&logo=react&logoColor=%230C9FCB)](https://)                           |                                                 [![Material UI](https://img.shields.io/static/v1?label=&message=Material+UI&color=%23EDE7F6&logo=mui&logoColor=%230082CC)](https://)                                                  |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página. | Material UI es una librería de componentes de React. js, de código abierto creada por Google, basada en Material Design, la cual brinda pautas y lineamientos que sientan la base para crear diseños profesionales para aplicaciones. |

</div>

<br>

---
## _Tareas_

[:top:](#tabla-de-contenidos) <br>
La pantalla principal de la aplicación presenta las siguientes opciones:

- [1) Menú Filtros](#1-menú-filtros)
- [2) Modo Claro Oscuro](#2-modo-claro-oscuro)
- [3) Nueva Tarea](#3-nueva-tarea)
- [4) Editar una Tarea](#4-editar-una-tarea)
- [5) Marcar Tareas Realizadas](#5-marcar-tareas-como-realizadas)
- [6) Borrar Tareas](#6-borrar-tareas)

<p align="center" >
   <img src="src/assets/img_readme/pant_ppal_flechas.png" width="400px" alt-text="Ventana principal">
</p>

---
### _1) Menú Filtros:_

[:top:](#tareas) <br>

Este menú permite filtrar las tareas por `Realizadas` o `No Realizadas`, también es posible volver a mostrar `Todas`. Al ingresar a la aplicación, por defecto siempre muestra todas las tareas.

<p align="center" >
   <img src="src/assets/img_readme/menu_filtros.png" width="300px" alt-text="Menú filtros">
</p>

<br>

> [!NOTE]
> Si la cantidad de tareas que existen, supera la cantidad de 5, en la parte inferior de la tabla de tareas, es posible seleccionar entre visualizar 5, 10 ó 20 tareas.
> Además, presenta la posibilidad de pasar de una página a la siguiente. Por último,a la izquierda de la ventana principal,  el selector de expandir o contraer la información de la tabla.

<p align="center" >
   <img src="src/assets/img_readme/pie_tabla.png" width="300px" alt-text="Pie de tabla">
</p>

<br>

---
### _2) Modo Claro Oscuro:_

[:top:](#tareas) <br>

Esta opción del menú principal, permite intercambiar entre el `Modo Claro` con tonalidades de color púrpura, y el `Modo Oscuro` que presenta la aplicación en tonos de grises.

<div align="center"  >

|                                      Modo Claro                                       |                                      Modo Oscuro                                       |
| :-----------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
| <img src="src/assets/img_readme/modo_claro.png" width="200px" alt-text="Modo Claro"> | <img src="src/assets/img_readme/modo_oscuro.png" width="200px" alt-text="Modo Oscuro"> |

</div>

<br>

---

### _3) Agregar una tarea:_

[:top:](#tareas) <br>

El icono de "Agregar una Tarea"  <img src="src/assets/img_readme/icono nt.png" width="70px" alt-text="Icono">, se encuentra siempre activado, permitiendo agregar tareas en todo momento, aunque se aplique un filtro o se seleccionen tareas. <br>
Los datos obligatorios son:
- Descripción: un breve texto entre 5 a 65 caracteres que describa la tarea. Independientemente de cómo se escriba, siempre se visualizará en mayúsculas y sin acentos. 
- Categoría: seleccionar de la lista la categoría adecuada, en caso de no existir, seleccionar "Varios".
- Fecha: seleccionar del calendario, la fecha en que debería realizarse la tarea. 

<p align="center" >
   <img src="src/assets/img_readme/tarea_nueva.png" width="300px" alt-text="Nueva Tarea">
</p>

---

### _4) Editar una Tarea:_

[:top:](#tareas) <br>

El icono de "Editar una tarea" <img src="src/assets/img_readme/icono et.png" width="70px" > se activará únicamente cuando se seleccione UNA sola tarea. 
Los datos a completar son los mismos que en la opción de agregar una tarea.

<p align="center" >
   <img src="src/assets/img_readme/tarea_editar.png" width="300px" alt-text="Ecitar una tarea">
</p>

---

### _5) Marcar como Tarea Realizada:_

[:top:](#tareas) <br>

El icono de "Marcar como Tarea Realizada" <img src="src/assets/img_readme/icono tr.png" width="70px" >, se activa después de seleccionar por lo menos una tarea. Puede utilizarse este icono para MARCAR una tarea (o varias) como Realizada/No relaizada. En la columna "Estado" se visualizará un icono diferente dependiendo si la tarea esta marcada como Realizada <img src="src/assets/img_readme/icono r.png" width="25px" > , no Realizada <img src="src/assets/img_readme/icono nr.png" width="25px" >.

<p align="center" >
   <img src="src/assets/img_readme/tarea_marcar.png" width="300px" alt-text="Flecha">
</p>

---

### _6) Eliminar Tareas:_

[:top:](#tareas) <br>

El icono de "Eliminar tarea/s seleccionada/s" <img src="src/assets/img_readme/icono br.png" width="70px" >, se activa después de seleccionar por lo menos una tarea. Puede utilizarse este icono para BORRAR una tarea o varias tareas juntas. 

<p align="center" >
   <img src="src/assets/img_readme/tarea_borrar.png" width="300px" alt-text="Flecha">
</p>

---

## _Mobile_

[:top:](#tabla-de-contenidos) <br>
Todas las opciones antes descriptas, se encuentran disposnibles para los diferentes dispositivos móviles.

<div align="center">

|                           Modo Claro                           |                           Modo Oscuro                           |
| :------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="src/assets/img_readme/celu_claro.png" width="150px"> | <img src="src/assets/img_readme/celu_oscuro.png" width="150px"> |

</div>
<br>

<div align="center">

|                           Nueva Tarea                           |                        Marcar Ralizadas                         |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="src/assets/img_readme/celu_nuevaT.png" width="150px"> | <img src="src/assets/img_readme/celu_marcar.png" width="150px"> |

</div>

---

## _Contáctame:_

[:top:](#tabla-de-contenidos) <br>

<a target="_blank" href="https://www.linkedin.com/in/magui-brollo/"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-Magdalena%20Brollo-%234527A0%20?logo=linkedin&labelColor=black"></a>
<a href="mailto:maguieb@gmail.com"><img alt="Email" src="https://img.shields.io/badge/Gmail-maguieb%40gmail.com-%234527A0?style=flat&logo=gmail&labelColor=black&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fmagui-brollo%2F"></a>
<a target="_blank" href="https://discord.gg/v7cZYHDz"><img alt="Discord" src="https://img.shields.io/badge/Discord-Magui-%234527A0%20?logo=discord&labelColor=black"></a>

---

![Visitas](https://komarev.com/ghpvc/?username=MaguiBrollo&color=4527A0 "Visitas")
