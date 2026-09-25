---
id: clientes/pagos-de-un-cliente
title: "Los pagos de un cliente"
description: "Qué muestra la pestaña Métodos de pago de la ficha de un cliente: sus Transacciones, los filtros Tarjetas de Credito, Tienda y Stripe, el rango Desde y Hasta y cada columna."
section: clientes
order: 90
roles: [owner, admin]
screens: [/customers/*]
keywords: [pagos de un cliente, métodos de pago, transacciones del cliente, historial de pagos, cuánto ha pagado un cliente, qué me ha pagado, cobros a un cliente, tarjeta de crédito, tienda, Stripe, ID de transacción, ver detalle, desde hasta, filtrar pagos por fecha]
related: [clientes/ver-un-cliente, clientes/citas-de-un-cliente, clientes/indicadores-de-un-cliente, transacciones/como-leer-transacciones, transacciones/ver-el-detalle-de-una-cuenta]
status: draft
updated: 2026-09-25
---

# Los pagos de un cliente

**En resumen:** la pestaña **Métodos de pago** de la ficha muestra las **Transacciones** del cliente: una fila por cada cobro, con la **Fecha**, el **Tipo**, el **Valor** y el **ID de transacción**. Arriba la filtras por dónde pagó (**Tarjetas de Credito**, **Tienda**, **Stripe**) y por fechas (**Desde**, **Hasta**).

![La pestaña Métodos de pago de un cliente: filtros Tarjetas de Credito, Tienda y Stripe, Desde y Hasta, y la tabla de Transacciones](/assets/es/clientes/pagos-de-un-cliente/pantalla.png)

## Cómo llegar

1. Toca **Clientes** en el menú lateral.
2. En la fila del cliente, toca **Acciones** › **Ver**.
3. Toca la pestaña **Métodos de pago**.

## Los filtros

| Filtro | Qué hace |
|---|---|
| **Tarjetas de Credito** | Deja solo los cobros con tarjeta. |
| **Tienda** | Deja solo lo cobrado en la barbería. |
| **Stripe** | Deja solo los pagos online que pasaron por Stripe. |
| **Desde** y **Hasta** | Acotan la tabla a un rango de fechas. |

## Qué hay en cada columna

| Columna | Qué muestra |
|---|---|
| **Fecha** | El día del cobro. |
| **Tipo** | El estado del pago, por ejemplo **Pagado**. |
| **Valor** | Cuánto pagó en esa transacción: «$52,000.00». |
| **ID de transacción** | El código de ese cobro. Sirve para ubicarlo en **Transacciones** si hay una duda. |
| **Acción** | El botón **Ver Detalle**, que abre esa transacción. |

> [!NOTE]
> Qué muestra exactamente **Ver Detalle** (si es la misma pantalla que [Ver el detalle de una cuenta](/ayuda/transacciones/ver-el-detalle-de-una-cuenta) en **Transacciones**) está pendiente de confirmar.

## Preguntas frecuentes

**¿Aquí veo las tarjetas guardadas del cliente?**
No. Aunque la pestaña se llama **Métodos de pago**, lo que lista son sus **Transacciones**. Los filtros solo separan por dónde pagó.

**¿Cuánto me ha pagado este cliente en total?**
La suma está en la tarjeta **LTV** de **Información general**: mira [Los indicadores de un cliente](/ayuda/clientes/indicadores-de-un-cliente).

**¿Dónde veo los pagos de todos mis clientes juntos?**
En **Transacciones**, en el menú lateral. Mira [Cómo leer Transacciones](/ayuda/transacciones/como-leer-transacciones).

**¿Cómo veo solo lo del mes pasado?**
Escribe el primer día del mes en **Desde** y el último en **Hasta**.
