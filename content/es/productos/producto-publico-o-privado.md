---
id: productos/producto-publico-o-privado
title: "Producto público o privado y disponibilidad de venta"
description: "Qué hacen los dos interruptores de un producto: Privado / Público decide si el cliente lo ve al reservar online; Disponibilidad de venta decide si tu equipo puede venderlo."
section: productos
order: 40
group: "Cómo funciona"
roles: [owner, admin]
screens: [/products, /products/create, /products/*]
keywords: [producto público, producto privado, privado o público, disponibilidad de venta, los barberos no pueden vender, visible en el flujo de reserva, esconder un producto, ocultar un producto, reserva online, producto no aparece en la venta rápida, producto de uso interno, insumo]
related: [productos/crear-un-producto, productos/vender-un-producto, productos/editar-o-borrar-un-producto, sucursales/activar-productos-en-una-sucursal, calendario/crear-una-venta-rapida]
status: review
updated: 2026-09-25
---

# Producto público o privado y disponibilidad de venta

**En resumen:** un producto tiene dos interruptores. **Privado / Público** decide si el cliente lo ve en el flujo de reserva online. **Disponibilidad de venta** decide si tu equipo puede venderlo. Son independientes: un producto puede ser privado y venderse en la silla, o público y no venderse.

## Dónde están

En la pestaña **General** del producto, después del **Código sku**.

![La pestaña General de Crear producto con los interruptores Privado / Público y Disponibilidad de venta](/assets/es/productos/crear-un-producto/general.png)

| Interruptor | Qué dice la pantalla | Qué hace |
|---|---|---|
| **Privado / Público** | «Esta opción permite que su producto sea visible en el flujo de reserva.» | En **Público**, el cliente ve el producto cuando reserva online. En **Privado**, no. |
| **Disponibilidad de venta** | «Esta funcionalidad permite a los barberos vender estos productos.» | Encendido, el producto sale al vender: en **Crear venta rapida** y en **Añadir productos** al cobrar. Apagado, no. |

En **Ver producto** se ven los dos con su estado.

## Cuatro combinaciones

| Privado / Público | Disponibilidad de venta | Para qué sirve |
|---|---|---|
| Público | Encendida | Lo normal: el cliente lo ve al reservar y tu equipo lo vende. |
| Privado | Encendida | Se vende en la barbería, pero no se anuncia online. |
| Público | Apagada | Se muestra, pero tu equipo no lo vende desde la app. |
| Privado | Apagada | Un producto que registras pero no vendes, por ejemplo un insumo. |

## Lo que también hace falta para vender

Encender **Disponibilidad de venta** no basta. El producto tiene que estar activado en la sucursal ([Activar productos en una sucursal](/ayuda/sucursales/activar-productos-en-una-sucursal)). Mira [Vender un producto](/ayuda/productos/vender-un-producto).

## Preguntas frecuentes

**Carlos no ve un producto al hacer una venta rápida.**
Revisa dos cosas: que **Disponibilidad de venta** esté encendida y que el producto esté activado en esa sucursal.

**¿Privado significa que no se puede vender?**
No. Privado solo lo saca de la reserva online. Si **Disponibilidad de venta** está encendida, tu equipo lo vende igual.

**¿Puedo cambiarlo después?**
Sí. En la lista, **Acciones › Editar**, pestaña **General**, y **Guardar**. Mira [Editar o borrar un producto](/ayuda/productos/editar-o-borrar-un-producto).
