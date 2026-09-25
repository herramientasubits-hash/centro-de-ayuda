---
id: productos/inventario-y-unidades
title: "Inventario: unidades y avisos de poco stock"
description: "Qué hay hoy de inventario en Barberlytics: no hay campo de existencias en el producto, pero sí las unidades vendidas por cliente, las ventas de productos en Métricas y los avisos de pocas unidades y agotado en el Centro de notificaciones."
section: productos
order: 100
roles: [owner, admin]
screens: [/products]
keywords: [inventario, stock, existencias, unidades, cuántas unidades me quedan, pocas unidades, agotado, se acabó el producto, control de inventario, entradas de producto, unidades vendidas, aviso de poco stock, notificaciones de productos, conteo]
related: [productos/la-lista-de-productos, productos/crear-un-producto, clientes/productos-de-un-cliente, metricas/ventas-por-servicio-y-de-productos, configuracion/centro-de-notificaciones-como-funciona, configuracion/notificaciones-de-productos]
status: draft
updated: 2026-09-25
---

# Inventario: unidades y avisos de poco stock

**En resumen:** al crear o editar un producto no hay un campo para escribir cuántas unidades tienes, y la lista de productos no muestra existencias. Lo que sí existe: las unidades que le has vendido a cada cliente, las **Ventas de productos** en Métricas y un aviso de «pocas unidades» y «agotado» en el **Centro de notificaciones**.

## Lo que no hay

En el formulario del producto ([Crear un producto](/ayuda/productos/crear-un-producto)) los campos son nombre, descripción, categoría, impuestos, precios, SKU, los dos interruptores, fotos, marca y distribuidor. No hay campo de existencias ni de entradas. En la lista tampoco hay columna de unidades.

![La lista de productos, sin columna de existencias](/assets/es/productos/la-lista-de-productos/productos.png)

## Lo que sí hay

| Qué | Dónde | Qué te dice |
|---|---|---|
| Unidades vendidas a cada cliente | Ficha del cliente, pestaña **Productos** | Cada producto que compró y cuántas unidades, por ejemplo «Cera mate · 5 Unidades». Mira [Los productos que compró un cliente](/ayuda/clientes/productos-de-un-cliente). |
| Unidades vendidas en total | **Métricas › Negocio**, al final: **Ventas físicas** y **Ventas de productos** | Cuántas unidades salieron de cada producto en el periodo, por ejemplo «Cera mate 2 · Aceite de barba 1». Mira [Ventas por servicio, ventas físicas y ventas de productos](/ayuda/metricas/ventas-por-servicio-y-de-productos). |
| Aviso de poco stock | **Configuración › Centro de notificaciones**, grupo **Productos** | Avisos de pocas unidades y de agotado, de productos y de combos, por correo o push. Mira [Centro de notificaciones: cómo funciona](/ayuda/configuracion/centro-de-notificaciones-como-funciona). |

> [!NOTE]
> Cómo sabe la app cuántas unidades te quedan para avisar de «pocas unidades» o «agotado», si hay una pantalla donde se cargan las entradas de producto y con qué número se dispara el aviso, todavía no está comprobado. Se completará con el equipo.

## Mientras tanto: cómo llevar la cuenta

- Mira **Ventas de productos** en Métricas al cierre de cada semana y resta lo vendido a lo que compraste.
- Cuando se acabe un producto, apaga **Disponibilidad de venta** en vez de borrarlo, para que tu equipo no lo venda sin tenerlo ([Editar o borrar un producto](/ayuda/productos/editar-o-borrar-un-producto)).
- Enciende el aviso de **Productos** en el Centro de notificaciones para el dueño y el administrador.

## Preguntas frecuentes

**¿Dónde escribo cuántas unidades compré?**
En el formulario del producto no hay ese campo. Si existe otra pantalla para cargar entradas, todavía no está comprobado.

**¿La lista de productos me dice cuántas quedan?**
No. Muestra nombre, categoría y precio. Mira [La lista de productos](/ayuda/productos/la-lista-de-productos).

**Se me acabó una cera. ¿Qué hago para que no la vendan?**
Edita el producto y apaga **Disponibilidad de venta**. Cuando llegue, vuelve a encenderla.
