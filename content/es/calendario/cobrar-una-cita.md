---
id: calendario/cobrar-una-cita
title: "Cobrar una cita (check out)"
description: "Cobrar desde el detalle de la cita con Pagar cita o con el checkout completo: métodos de pago (efectivo, tarjeta, link de pago y pago mixto), propina y resumen."
section: calendario
order: 180
group: "Cobrar y vender"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [cobrar, pagar cita, check out, checkout, cobro, efectivo, tarjeta, crédito, débito, link de pago, pago mixto, propina, terminal, datáfono, dispositivo de pago, añadir producto al cobro]
related: [calendario/abrir-una-cita, calendario/cobrar-con-propina, calendario/lista-de-cobros, calendario/estados-de-una-cita, transacciones/como-leer-transacciones]
status: draft
updated: 2026-09-25
---

# Cobrar una cita (check out)

**En resumen:** abre la cita, toca **Pagar cita**, revisa el resumen y cobra. Si necesitas elegir el método de pago, agregar productos o combinar citas, toca **Abrir checkout completo**.

## Cobro rápido: Pagar cita

1. Toca la tarjeta de la cita en el calendario.
2. En **SIGUIENTE PASO**, toca **Pagar cita** (también está en **Acciones › Cobrar**).
3. Revisa el **Resumen**: el servicio, el cliente, el barbero y el precio.
   ![El panel de cobro: servicios, totales y los botones Pagar cita y Abrir checkout completo](/assets/es/calendario/cobrar-una-cita/pagar-cita.png)
4. Si el cliente lleva algo más, usa **Añadir servicio** o **Añadir productos**.
5. Revisa **Total de servicios y productos**, **Propina**, **Impuesto** y **Pedido total**.
6. Toca **Pagar cita**.

## Cobro completo: elegir cómo paga

1. En el panel de cobro, toca **Abrir checkout completo**. Se abre la pantalla **Cobrar**.
   ![La pantalla Cobrar: acciones arriba, métodos de pago y el resumen a la derecha](/assets/es/calendario/cobrar-una-cita/checkout.png)
2. Arriba puedes **Añadir productos**, **Añadir servicio**, **Combinar citas** (cobrar varias citas en una cuenta) y **Agregar cliente**.
3. En **Métodos de pago**, elige uno:

| Método | Qué pide después |
|---|---|
| **Efectivo** | Confirmar el cobro |
| **Crédito/Débito** | «Elige un dispositivo»: la terminal que procesa el pago. Si no tienes ninguna, **Agregar dispositivo** (también en **Configuración › Dispositivos de pago**) |
| **Link de pago** | La propina para el barbero (**$10.00**, **$15.00**, **$20.00**, **Sin propina** o **Personalizar**) y luego el enlace para el cliente |
| **Pago mixto** | La propina y luego el reparto entre métodos |

4. A la derecha, el **Resumen** y el **Pedido total** se actualizan con lo que agregues.
5. Confirma el pago.

> [!NOTE]
> Este artículo llega hasta donde se puede leer sin cobrar de verdad. Qué muestra la app al confirmar (recibo, cambio de estado, cómo queda en **Lista de cobros › Pagado**) y el detalle de **Efectivo**, **Combinar citas** y **Pago mixto** se completarán con una cita de prueba.

## Después de cobrar

- La cita pasa a **Lista de cobros › Pagado** ([La lista de cobros](/ayuda/calendario/lista-de-cobros)).
- La cuenta aparece en **Transacciones** con estado **COBRADA** y su método de pago.
- La venta suma en **Métricas** (ventas, ingresos, distribución de pagos).

## Preguntas frecuentes

**¿Puedo cobrar sin que el cliente haya pasado por Ingresar y Sentado?**
Sí. **Pagar cita** está disponible desde que la cita existe.

**¿Cómo agrego una propina?**
En el checkout, con **Link de pago** o **Pago mixto** la app la pregunta. Mira [Cobrar con propina](/ayuda/calendario/cobrar-con-propina). Las opciones de propina se configuran en **Configuración › Propinas**.

**¿Dónde veo lo que cobré hoy?**
En **Acciones › Lista de cobros**, pestaña **Pagado**, o en **Transacciones**.
