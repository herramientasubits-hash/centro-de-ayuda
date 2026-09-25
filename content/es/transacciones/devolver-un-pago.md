---
id: transacciones/devolver-un-pago
title: "Devolver un pago"
description: "Qué se sabe hoy de las devoluciones en Barberlytics: el estado Devuelta, la tarjeta DEVUELTO y dónde se ven los reembolsos en Métricas."
section: transacciones
order: 90
group: "Buscar y revisar"
roles: [owner, admin]
screens: [/transactions]
keywords: [devolver un pago, devolución, reembolso, reembolsar, regresar el dinero, cuenta devuelta, tarjeta devuelto, cliente pide su dinero, anular un cobro, cobré mal]
related: [transacciones/estados-de-una-cuenta, transacciones/las-cinco-tarjetas-de-transacciones, metricas/distribucion-de-pagos-reembolsos-y-descuentos, calendario/cancelar-una-cita]
status: draft
updated: 2026-09-25
---

# Devolver un pago

**En resumen:** Barberlytics registra devoluciones: existe el estado **Devuelta** en el filtro **ESTADO DE LA CUENTA**, la tarjeta **DEVUELTO** en **Transacciones** y el indicador de **Reembolsos** en **Métricas**. El botón para hacer una devolución no se ha encontrado todavía en la app; mientras se confirma, este artículo cuenta lo que sí se ve.

## Lo que existe hoy

| Dónde | Qué ves |
|---|---|
| **Transacciones › ESTADO DE LA CUENTA** | La opción **Devuelta** para filtrar las cuentas devueltas |
| **Transacciones**, tarjeta **DEVUELTO** | El total devuelto en el rango y cuántas cuentas («$0.00 · 0 cuentas») |
| **Métricas › Negocio** | El bloque de **Transacciones, Reembolsos, Descuentos** ([Distribución de pagos, reembolsos y descuentos](/ayuda/metricas/distribucion-de-pagos-reembolsos-y-descuentos)) |

> [!NOTE]
> En la sesión de lectura no apareció ningún botón de devolución: ni en la fila de **Transacciones**, ni en el detalle de la cita, ni en el checkout. Tampoco había cuentas en estado **Devuelta**. Cómo se hace una devolución (desde dónde, si pide motivo, si devuelve parcial, qué pasa con un pago con **Link de pago** por Stripe) está pendiente de confirmar con el equipo de Barberlytics.

## Mientras tanto, qué hacer si cobraste mal

1. Devuélvele el dinero al cliente por fuera de la app.
2. Anota lo que pasó en la cita, pestaña **Notas › Agregar nota**, para que quede constancia.
3. Si la cita no debió existir, cancélala ([Cancelar una cita](/ayuda/calendario/cancelar-una-cita)). Ten en cuenta que la cuenta cobrada puede seguir sumando en **COBRADO**.

## Preguntas frecuentes

**¿Puedo devolver solo una parte?**
No está confirmado. Se sabrá cuando se documente el flujo.

**El cliente pagó con link de pago. ¿La devolución va por Stripe?**
No está confirmado. Si tienes la **Integración de pagos** con Stripe, revisa también tu panel de Stripe.

**¿La devolución le quita la comisión al barbero?**
No está confirmado. Si devuelves por fuera de la app, la nómina sigue contando el cobro original.
