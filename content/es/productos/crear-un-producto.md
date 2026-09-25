---
id: productos/crear-un-producto
title: "Crear un producto"
description: "Crear un producto paso a paso: la pestaña General (nombre, categoría, impuestos, precio de compra, precio de venta, SKU, público o privado, disponibilidad de venta y fotos) y la pestaña Avanzado (marca y distribuidor)."
section: productos
order: 70
group: "Crear y editar"
roles: [owner, admin]
screens: [/products, /products/create]
keywords: [crear producto, nuevo producto, agregar producto, añadir producto, dar de alta un producto, precio de venta, precio de compra, código sku, categoría, impuestos, fotos del producto, marca, distribuidor, disponibilidad de venta, producto público, continuar]
related: [productos/crear-una-categoria-de-productos, productos/precio-de-compra-precio-de-venta-y-sku, productos/producto-publico-o-privado, productos/fotos-de-un-producto, productos/editar-o-borrar-un-producto, sucursales/activar-productos-en-una-sucursal]
status: draft
updated: 2026-09-25
---

# Crear un producto

**En resumen:** toca **Acciones** › **Crear producto**, rellena la pestaña **General** (al menos **Nombre del producto**, **Categoría** y **Precio de venta**), toca **Continuar** y, en **Avanzado**, añade la **Marca** y el **Distribuidor** si quieres. Termina con **Guardar**.

## Antes de empezar

- Ten creada la categoría donde va el producto ([Crear una categoría de productos](/ayuda/productos/crear-una-categoria-de-productos)).
- Ten a mano el precio al que lo vendes y, si lo quieres registrar, el precio al que lo compras.

## Pasos

1. En el menú lateral, abre **Servicios & Productos** y toca **Productos**.
2. Toca **Acciones** y elige **Crear producto**. Se abre el formulario con dos pestañas: **General** y **Avanzado**.
   ![La pestaña General de Crear producto con todos sus campos, los dos interruptores, Fotos y el botón Continuar](/assets/es/productos/crear-un-producto/general.png)
3. Si quieres, sube una foto del producto.
4. Escribe el **Nombre del producto**, por ejemplo «Cera mate».
5. Escribe una **Descripción** si quieres.
6. Elige la **Categoría**.
7. Elige los **Impuestos** que aplican, si los tienes configurados.
8. Escribe el **Precio de compra** (lo que te cuesta) y el **Precio de venta** (lo que cobras). Los explica [Precio de compra, precio de venta y código SKU](/ayuda/productos/precio-de-compra-precio-de-venta-y-sku).
9. Si el producto tiene código, escribe el **Código sku**.
10. Decide si es **Privado** o **Público**: «Esta opción permite que su producto sea visible en el flujo de reserva.»
11. Enciende **Disponibilidad de venta** si tu equipo lo vende: «Esta funcionalidad permite a los barberos vender estos productos.» Los dos interruptores los explica [Producto público o privado y disponibilidad de venta](/ayuda/productos/producto-publico-o-privado).
12. En **Fotos - 0/5**, añade hasta cinco fotos ([Fotos de un producto](/ayuda/productos/fotos-de-un-producto)).
13. Toca **Continuar**.
14. En **Avanzado**, escribe la **Marca** y el **Distribuidor** si quieres, y toca **Guardar**.

## Los campos de General

| Campo | Obligatorio | Qué es |
|---|---|---|
| Foto | No | La imagen principal del producto. |
| **Nombre del producto** | Sí | Cómo se llama en la lista y al vender. |
| **Descripción** | No | Un texto libre. |
| **Categoría** | Sí | Un selector con tus categorías de productos. |
| **Impuestos** | No | Un selector con los impuestos configurados en **Configuración › Impuestos**. |
| **Precio de compra** | No | Lo que te cuesta a ti el producto. No lo ve el cliente. |
| **Precio de venta** | Sí | Lo que cobras. Es el precio de la lista y el de la venta. |
| **Código sku** | No | El código del producto, para identificarlo. |
| **Privado / Público** | — | Si el producto se ve en el flujo de reserva online. |
| **Disponibilidad de venta** | — | Si los barberos pueden vender el producto. |
| **Fotos - 0/5** | No | Hasta cinco fotos. |

## Los campos de Avanzado

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Marca** | No | La marca del producto. |
| **Distribuidor** | No | A quién se lo compras. |

> [!NOTE]
> La pestaña **Avanzado** se leyó desde **Editar** de un producto ya creado. Qué muestra la app después de **Continuar** y de **Guardar** todavía no está comprobado. Se completará al crear un producto de prueba.

> [!IMPORTANT]
> Crear el producto no lo enciende en todas las sucursales. Después de crearlo, actívalo en cada sucursal que lo vende con **Acciones › Activar productos de barbería** ([Activar productos en una sucursal](/ayuda/sucursales/activar-productos-en-una-sucursal)). Para que salga en la venta rápida también necesita **Disponibilidad de venta** encendida.

## Preguntas frecuentes

**¿Dónde pongo cuántas unidades tengo?**
En el formulario no hay campo de existencias. Mira [Inventario: unidades y avisos de poco stock](/ayuda/productos/inventario-y-unidades).

**¿El precio de compra lo ve el cliente?**
No. Solo el **Precio de venta** aparece en la lista y al vender.

**Creé el producto y Carlos no lo ve al vender.**
Revisa que **Disponibilidad de venta** esté encendida y que el producto esté activado en la sucursal.
