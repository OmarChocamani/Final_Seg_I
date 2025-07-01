# Final_Seg_I
# Proyecto: Despliegue de Aplicación Escalable con Contenedores y Balanceo de Carga

## Descripción de la arquitectura implementada
- Tres instancias de aplicación web Node.js (app1, app2, app3) ejecutadas como contenedores independientes. 
- Una base de datos MySQL contenerizada (db) que almacena información persistente.
- Un balanceador de carga Nginx (nginx_lb), configurado como proxy inverso para distribuir el tráfico entrante.
- Todos los servicios están interconectados a través de una red virtual interna de Docker llamada app_net.

## Instrucciones detalladas para levantar y probar la aplicación

- despues de clonar el repositorio ponemos: docker-compose -p proyecto up --build para levantar la aplicacion

##  Explicación de las decisiones técnicas tomadas
- Se eligió una aplicación web desarrollada en Node.js con Express por las siguientes razones: Es liviana, rápida y adecuada para pruebas de despliegue contenerizado, Facilita la creación de APIs RESTful, Es ampliamente compatible con Docker y fácil de escalar horizontalmente.
- Se usó MySQL como motor de base de datos por los siguientes motivos: Es ampliamente conocido, estable y probado en entornos de producción y existe una imagen oficial lista para usar en Docker (mysql:5.7), lo que simplifica la contenerización.
- El balanceador que se uso fue Nginx


