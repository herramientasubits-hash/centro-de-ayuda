---
id: configuracion/notificaciones-de-productos
title: "Avisos sobre productos y combos"
description: "Los avisos del grupo Productos del Centro de notificaciones: pocas unidades, producto agotado, lo mismo para combos, y las importaciones de productos."
section: configuracion
order: 170
group: "Notificaciones"
roles: [owner, admin]
screens: [/notifications-center]
keywords: [avisos de productos, notificaciones de productos, pocas unidades, producto agotado, stock bajo, inventario bajo, se acabó un producto, combos, importación de productos, reponer productos, alerta de inventario, correo, push]
related: [configuracion/centro-de-notificaciones-como-funciona, productos/inventario-y-unidades, servicios/crear-un-combo, productos/la-lista-de-productos]
status: review
updated: 2026-09-25
---

# Avisos sobre productos y combos

**En resumen:** el grupo **Productos** del Centro de notificaciones avisa cuando a un producto o a un combo le quedan pocas unidades o se agota, y cuando una importación de productos termina o falla. Cada aviso se puede enviar por **Correo**, por **Push** o por los dos.

## Dónde está

**Configuración › Notificaciones › Centro de notificaciones**. La tarjeta dice: «Revisar notificaciones enviadas a clientes y barberos sobre las citas». Elige la pestaña del rol y busca el grupo **Productos**.

![El Centro de notificaciones con las pestañas por rol y los avisos con sus interruptores de Correo y Push](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

## Los avisos

| Bloque | Aviso, tal cual en la pantalla | Canales |
|---|---|---|
| **Cantidades** | «Cuando quedan pocas unidades de un producto» | Correo · Push |
| **Cantidades** | «Cuando un producto se ha agotado» | Correo · Push |
| **Combos** | «Cuando quedan pocas unidades de un producto» | Correo · Push |
| **Combos** | «Cuando un producto se ha agotado» | Correo · Push |
| **Importación** | «Cuando una importación de clientes propia falla posteriormente» | Correo · Push |
| **Importación** | «Cuando termina el proceso de importación exitosamente» | Correo · Push |

Las unidades que hay de cada producto se llevan en su ficha. Mira [Inventario y unidades](/ayuda/productos/inventario-y-unidades).

Para encender o apagar un aviso y guardar, mira [Centro de notificaciones: cómo funciona](/ayuda/configuracion/centro-de-notificaciones-como-funciona).

## Preguntas frecuentes

**¿Desde cuántas unidades cuenta como «pocas»?**
La pantalla no lo dice. Todavía no está documentado si ese límite se puede cambiar.

**¿Quién debería recibir estos avisos?**
Quien repone el inventario. Enciéndelos en la pestaña de ese rol, por ejemplo **Administrador de la locación**. Mira [Qué avisos recibe cada rol](/ayuda/configuracion/notificaciones-por-rol).

**¿Un combo tiene unidades?**
Un combo junta productos o servicios. El aviso de combos salta cuando algo de lo que lleva se está acabando. Mira [Crear un combo](/ayuda/servicios/crear-un-combo).
