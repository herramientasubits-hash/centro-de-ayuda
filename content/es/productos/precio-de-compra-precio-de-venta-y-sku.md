---
id: productos/precio-de-compra-precio-de-venta-y-sku
title: "Precio de compra, precio de venta y código SKU"
description: "Qué es cada uno de los tres campos de precio y código de un producto, cuál ve el cliente, para qué sirve el precio de compra y cómo puede descontarse antes de la comisión."
section: productos
order: 30
group: "Cómo funciona"
roles: [owner, admin]
screens: [/products, /products/create, /products/*]
keywords: [precio de compra, precio de venta, código sku, sku, código de barras, referencia del producto, margen, ganancia por producto, cuánto gano por producto, costo del producto, deducir el costo del producto, comisión por productos, precio del producto, cuánto cobrar por una cera]
related: [productos/crear-un-producto, productos/la-lista-de-productos, productos/vender-un-producto, configuracion/comisiones-que-se-deduce, nomina/como-funciona-la-nomina, configuracion/impuestos]
status: draft
updated: 2026-09-25
---

# Precio de compra, precio de venta y código SKU

**En resumen:** el **Precio de venta** es lo que cobras al cliente y es obligatorio. El **Precio de compra** es lo que te cuesta a ti y solo lo ves tú. El **Código sku** es el código con el que identificas el producto. Los tres están en la pestaña **General** del producto.

## Dónde están

Al crear o editar un producto, en la pestaña **General**, después de **Impuestos**.

![La pestaña General de Crear producto con Precio de compra, Precio de venta y Código sku](/assets/es/productos/crear-un-producto/general.png)

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Precio de compra** | No | Lo que pagas por cada unidad al comprarla. Por ejemplo, 30000. No lo ve el cliente ni sale en la lista. |
| **Precio de venta** | Sí | Lo que cobras por cada unidad. Por ejemplo, 50000. Es el **Precio** de la lista y el que suma en la venta. |
| **Código sku** | No | El código del producto: el de barras, el del distribuidor o uno tuyo. Sirve para no confundir dos ceras de la misma marca. Si lo dejas vacío, en **Ver producto** sale «--». |

## Para qué sirve el precio de compra

No cambia lo que cobras. Sirve para dos cosas:

- **Saber cuánto ganas.** Con «Cera mate» a 50000 y comprada a 30000, te quedan 20000 por unidad antes de impuestos y comisión.
- **La comisión del barbero.** En **Configuración › Comisiones** hay un interruptor **Deducir el costo del producto**. Con él encendido, el costo se resta antes de calcular la comisión por venta de productos; apagado, la comisión se calcula sobre el precio. Mira [Comisiones: qué se deduce](/ayuda/configuracion/comisiones-que-se-deduce).

La comisión por productos de cada barbero se define en su ficha, pestaña **Compensación › Producto**, y aparece en la nómina como **Venta de productos** y **Comisión de productos** ([Cómo funciona la nómina](/ayuda/nomina/como-funciona-la-nomina)).

> [!NOTE]
> Que el interruptor **Deducir el costo del producto** use exactamente el campo **Precio de compra**, y la fórmula de la comisión por productos, todavía no están comprobados. Se completarán con el equipo.

## Los impuestos

El **Precio de venta** es el precio del producto. Si el producto tiene **Impuestos** elegidos, al cobrar se suman en la línea **Impuesto** del resumen. Mira [Impuestos](/ayuda/configuracion/impuestos).

## Preguntas frecuentes

**¿Puedo vender el mismo producto a precios distintos en dos sucursales?**
El producto tiene un solo **Precio de venta** para toda la barbería. Si necesitas dos precios, crea dos productos.

**¿Tengo que poner el SKU?**
No. Es opcional. Ayuda cuando tienes varios productos parecidos o quieres cuadrar con las facturas de tu distribuidor.

**¿Dónde cambio el precio de un producto que ya existe?**
En la lista, **Acciones › Editar**, pestaña **General**, y **Guardar**. Mira [Editar o borrar un producto](/ayuda/productos/editar-o-borrar-un-producto).
