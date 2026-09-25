---
id: transacciones/estados-de-una-cuenta
title: "Estados de una cuenta: por cobrar, cobrada y devuelta"
description: "Qué significa cada estado de una cuenta en Transacciones, cómo pasa de uno a otro y en qué se diferencia del estado de la cita."
section: transacciones
order: 40
roles: [owner, admin]
screens: [/transactions]
keywords: [estado de la cuenta, por cobrar, cobrada, devuelta, pendiente de pago, pagada, reembolsada, cuenta abierta, cuenta cerrada, diferencia con estado de la cita, terminada sin cobrar]
related: [transacciones/filtrar-transacciones, transacciones/una-cuenta-quedo-por-cobrar, transacciones/devolver-un-pago, calendario/estados-de-una-cita, calendario/cobrar-una-cita]
status: draft
updated: 2026-09-25
---

# Estados de una cuenta: por cobrar, cobrada y devuelta

**En resumen:** una cuenta tiene tres estados posibles: **Por cobrar** (falta el pago), **Cobrada** (ya se pagó) y **Devuelta** (se regresó el dinero). Es distinto del estado de la cita, que dice en qué paso va el cliente: **Agendada**, **Llegó**, **En silla**, **Cerrada**, **Terminada** o **Cancelada**.

## Los tres estados

| Estado | En la tabla | Qué significa |
|---|---|---|
| **Por cobrar** | **POR COBRAR** | La cuenta existe pero no se ha pagado. **Cobrado** está en $0.00 y **Método** en «—» |
| **Cobrada** | **COBRADA** | Se pagó. **Cobrado** iguala al **Total** y **Método** dice cómo («CASH»…) |
| **Devuelta** | — | El dinero se devolvió. Suma en la tarjeta **DEVUELTO** |

## Cómo cambia

1. La cuenta nace **Por cobrar** cuando se crea la cita, la venta sin cita o la venta rápida.
2. Pasa a **Cobrada** al cobrarla desde la cita (**Pagar cita** o el checkout) ([Cobrar una cita](/ayuda/calendario/cobrar-una-cita)).
3. Pasa a **Devuelta** si se devuelve el pago ([Devolver un pago](/ayuda/transacciones/devolver-un-pago)).

> [!NOTE]
> No se vio ninguna cuenta en estado **Devuelta** ni cómo se ve en la columna **Estado**. Lo que sí existe es la opción **Devuelta** en el filtro y la tarjeta **DEVUELTO**. Se completará cuando haya una devolución de prueba.

## Cuenta y cita no van de la mano

Una cita puede estar **Terminada** y su cuenta seguir **Por cobrar**: el cliente se fue sin pagar o nadie cerró el cobro. Y una cita **Cancelada** puede tener una cuenta **Cobrada** que haya que devolver. Por eso **Transacciones** tiene los dos filtros ([Filtrar Transacciones](/ayuda/transacciones/filtrar-transacciones)).

## Preguntas frecuentes

**¿Una cuenta puede estar cobrada a medias?**
La columna **Cobrado** muestra lo pagado frente al **Total**. Con **Pago mixto** en el checkout se reparte entre métodos; si eso deja una cuenta parcial en la tabla no se ha visto.

**Cancelé la cita. ¿La cuenta desaparece?**
No se vio que desaparezca. Filtra por **ESTADO DE LA CITA › Cancelada** para revisar qué quedó.

**¿Dónde veo solo las cuentas por cobrar?**
En **ESTADO DE LA CUENTA › Por cobrar** y **Aplicar**, o en el calendario, **Acciones › Lista de cobros › Por cobrar** ([La lista de cobros](/ayuda/calendario/lista-de-cobros)).
