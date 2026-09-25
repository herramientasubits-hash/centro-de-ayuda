---
id: productos/vender-un-producto
title: "Vender un producto"
description: "Los dos caminos para vender un producto desde el calendario: una venta rápida para productos sueltos y Añadir productos al cobrar una cita. Qué necesita el producto para aparecer."
section: productos
order: 90
roles: [owner, admin, recepcion, barbero]
screens: [/products, /calendar]
keywords: [vender un producto, venta de productos, venta rápida, crear venta rapida, añadir productos, cobrar un producto, vender una cera, producto en la cita, venta de mostrador, el producto no aparece al vender, pagar orden, caja, comisión por productos]
related: [calendario/crear-una-venta-rapida, calendario/cobrar-una-cita, productos/producto-publico-o-privado, sucursales/activar-productos-en-una-sucursal, clientes/productos-de-un-cliente, metricas/ventas-por-servicio-y-de-productos]
status: draft
updated: 2026-09-25
---

# Vender un producto

**En resumen:** los productos se venden desde el **Calendario**, no desde la pantalla **Productos**. Si el cliente no tiene cita, toca **Acciones › Crear venta rapida**. Si tiene cita, agrégalo al cobro con **Añadir productos**. Para que un producto aparezca, tiene que tener **Disponibilidad de venta** encendida y estar activado en la sucursal.

## Antes de vender: que el producto aparezca

| Requisito | Dónde se revisa |
|---|---|
| El producto existe en el catálogo | **Productos › Acciones › Crear producto** ([Crear un producto](/ayuda/productos/crear-un-producto)) |
| **Disponibilidad de venta** encendida («permite a los barberos vender estos productos») | **Productos › Acciones › Editar**, pestaña **General** ([Producto público o privado y disponibilidad de venta](/ayuda/productos/producto-publico-o-privado)) |
| Activado en la sucursal donde vendes | **Productos › Acciones › Activar productos de barbería** ([Activar productos en una sucursal](/ayuda/sucursales/activar-productos-en-una-sucursal)) |

## Camino 1: productos sueltos, sin cita

Para alguien que entra a comprar una cera y se va.

1. En el **Calendario**, toca **Acciones** y elige **Crear venta rapida**. Se abre **Nueva venta** con la frase «Elige tu producto».
   ![El panel Nueva venta con las categorías de productos, los productos y el total](/assets/es/calendario/venta-rapida/panel.png)
2. Arriba están tus categorías de productos. Toca una y luego toca cada producto que lleva el cliente. El **Total** de abajo va sumando.
3. Toca **Pagar orden**.

Lo cuenta con detalle [Crear una venta rápida de productos](/ayuda/calendario/crear-una-venta-rapida).

## Camino 2: junto con una cita

Para el cliente que se corta con Carlos y se lleva la cera. Así queda todo en una sola cuenta.

1. Abre la cita y toca **Pagar cita** (o **Acciones › Cobrar**).
2. En el panel de cobro, toca **Añadir productos** y elige el producto. Si necesitas la pantalla completa, toca **Abrir checkout completo**: arriba también está **Añadir productos**.
   ![La pantalla Cobrar con Añadir productos arriba y el resumen a la derecha](/assets/es/calendario/cobrar-una-cita/checkout.png)
3. Revisa **Total de servicios y productos**, **Impuesto** y **Pedido total**.
4. Elige el método de pago y confirma.

Lo cuenta con detalle [Cobrar una cita (check out)](/ayuda/calendario/cobrar-una-cita).

> [!NOTE]
> Qué viene después de **Pagar orden** y de confirmar el cobro (métodos de pago de la venta rápida, a qué cliente se le asigna, recibo) todavía no está comprobado. Se completará con una venta de prueba.

## Dónde queda la venta

- En la ficha del cliente, pestaña **Productos**: cada producto y cuántas unidades lleva ([Los productos que compró un cliente](/ayuda/clientes/productos-de-un-cliente)).
- En **Métricas › Negocio**: **Ventas › Productos**, **Ingresos › Productos** y **Ventas de productos** ([Ventas por servicio, ventas físicas y ventas de productos](/ayuda/metricas/ventas-por-servicio-y-de-productos)).
- En la nómina del barbero: **Venta de productos** y **Comisión de productos**, según la compensación por **Producto** de su ficha.

## Preguntas frecuentes

**El producto no aparece al vender.**
Revisa los tres requisitos de arriba: que exista, que tenga **Disponibilidad de venta** encendida y que esté activado en la sucursal.

**¿Puedo vender desde la pantalla Productos?**
No. Esa pantalla es el catálogo. Se vende desde el calendario.

**¿Le llega comisión al barbero por vender productos?**
Depende de la compensación por **Producto** en su ficha (**Equipo › Acciones › Ver**, pestaña **Compensación**). Si no está configurada, la ficha dice «No se ha configurado una compensación por venta de productos».
