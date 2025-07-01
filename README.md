# Final_Seg_I
# Proyecto: Despliegue de Aplicación Escalable con Contenedores y Balanceo de Carga

## 🌐 Descripción del Proyecto

Este proyecto implementa una arquitectura contenerizada para una aplicación web desarrollada en Node.js + MySQL, utilizando Docker, Docker Compose y Nginx como balanceador de carga. El sistema permite distribuir el tráfico entre múltiples instancias para asegurar alta disponibilidad y escalabilidad.

---

## 🧱 Arquitectura Implementada

- **3 instancias de aplicación Node.js (app1, app2, app3)**: muestran un mensaje único por instancia y exponen una API `/products` conectada a base de datos.
- **1 contenedor MySQL**: almacena los productos. Los datos se inicializan desde un script `init.sql` y se persisten usando volúmenes.
- **1 contenedor Nginx**: actúa como proxy inverso y balanceador de carga, distribuyendo el tráfico de forma round-robin a las instancias.

 Todas las instancias están conectadas por una red interna de Docker (`app_net`), y solo el balanceador es accesible desde el exterior por el puerto `80`.

---


