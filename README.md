README - Aplicación de lista de tareas 
Descripción del proyecto:

Este proyecto consiste en una aplicación web para gestionar listas de tareas pendientes, desarrollada con React, Tailwind, .NET y SQL Server. 
La aplicación permite a los usuarios crear, leer, actualizar y eliminar (CRUD) elementos de la lista.

Tecnologías utilizadas:

Front-end: React,Tailwind, Js, Html
Back-end: .NET, C#, SQL Server
Base de datos: SQL Server
Entregables:

Proyecto React para el front-end de la aplicación
Proyecto .NET para el back-end de la API
Archivo README con instrucciones de instalación y ejecución

Programas necesarios:
Visual Studio
Visual Studio Installer
NodeJS

Pasos para ejecutar la aplicación:

1. Backend (.NET):

Abra el proyecto .NET en Visual Studio.
Asegúrese de tener instalado SQL Server.
En la consola de Visual Studio, ejecute el comando 
Update-database -context applicationDbContext 
para crear y actualizar la base de datos.
Ejecute el proyecto presionando el botón "Iniciar" o mediante la tecla F5.

Migraciones:

Dado que el proyecto utiliza el enfoque "Code First" para la gestión de la base de datos, es posible que sea necesario realizar migraciones para sincronizar los cambios en el modelo de datos con la base de datos existente. El comando Update-database mencionado anteriormente se encarga de realizar estas migraciones automáticamente.

2. Frontend (React):

Abra una terminal en la carpeta del proyecto React.
Asegurese de estar dentro del proyecto sino usar cd/ hasta llegar al proyecto
Ejecute el comando npm install para instalar las dependencias.
Ejecute el comando npm run dev para iniciar el servidor de desarrollo.
La aplicación se abrirá en un navegador web.

Nota:

Asegúrese de tener instalados Node.js y npm antes de ejecutar los comandos de instalación del frontend.
