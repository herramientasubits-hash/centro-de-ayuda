---
id: configuracion/precios-moneda-y-calculo-de-impuestos
title: "Precios: moneda y si el precio incluye impuestos"
description: "Dónde eliges la moneda de tus servicios y productos y si el precio que escribes ya incluye los impuestos o se le suman al cobrar."
section: configuracion
order: 130
group: "Ventas"
roles: [owner, admin]
screens: [/sales-pricing]
keywords: [precios, moneda, cop, usd, pesos, dólares, cálculo de impuestos, precios incluyen impuestos, precios no incluyen impuestos, iva incluido, precio con iva, precio sin iva, precio base, total, moneda de la plataforma, cambiar moneda]
related: [configuracion/impuestos, sucursales/que-es-propio-de-cada-sucursal, servicios/costo-y-precio-de-un-servicio, productos/precio-de-compra-precio-de-venta-y-sku, calendario/cobrar-una-cita]
status: draft
updated: 2026-09-25
---

# Precios: moneda y si el precio incluye impuestos

**En resumen:** en **Configuración › Precios** eliges la **Moneda** de tus servicios y productos y cómo se aplican los impuestos: si el precio que escribes es sin impuestos y se le suman al cobrar, o si ya los incluye y la app los separa.

## Dónde está

**Configuración › Ventas › Precios**. La tarjeta dice: «Define si el precio total de los productos incluye impuestos y establece la moneda para los precios en tu plataforma.»

![La pantalla de Precios con la moneda y las dos opciones de cálculo de impuestos](/assets/es/configuracion/precios-moneda-y-calculo-de-impuestos/pantalla.png)

## Moneda

En «Moneda para productos y servicios», el campo **Moneda** (obligatorio) define la moneda de los precios, por ejemplo COP.

## Cálculo de impuestos

El bloque «Cálculo de impuestos» dice: «Elija cómo aplicar los impuestos a los precios en los cálculos de ventas e informes.» Hay dos opciones, con el ejemplo que da la propia pantalla:

| Opción | Cómo se calcula | Ejemplo de la pantalla |
|---|---|---|
| **Los precios no incluyen impuestos** | El impuesto se suma al precio al cobrar. | «Precio: $10. Impuesto (20%): $2. Total: $12.» |
| **Los precios incluyen impuestos** | El precio que escribes ya es el total; la app separa el impuesto. | «Total: $12 (incluye $2 de impuestos). Precio base: $10.» |

## Pasos

1. Elige la **Moneda**.
2. Marca **Los precios no incluyen impuestos** o **Los precios incluyen impuestos**.
3. Toca **Guardar**.

> [!NOTE]
> Qué muestra la app al tocar **Guardar** y qué pasa con los precios ya escritos al cambiar la moneda o la opción de impuestos todavía no está comprobado.

## Preguntas frecuentes

**¿Cuál opción elijo?**
Si en tu barbería el precio del tablero es lo que paga el cliente, elige **Los precios incluyen impuestos**. Si al precio le sumas el impuesto en caja, elige **Los precios no incluyen impuestos**. Los impuestos en sí se crean en [Impuestos](/ayuda/configuracion/impuestos).

**Tengo sucursales en países distintos.**
Cada sucursal tiene su propia **Moneda** en **Configuración › Sucursales › Editar**. Mira [Qué cambia de una sucursal a otra](/ayuda/sucursales/que-es-propio-de-cada-sucursal). La de esta pantalla es la general.

**¿Cambiar la moneda convierte mis precios?**
No hay nada en la pantalla que diga que convierte. Si cambias de moneda, revisa los precios de tus servicios y productos.
