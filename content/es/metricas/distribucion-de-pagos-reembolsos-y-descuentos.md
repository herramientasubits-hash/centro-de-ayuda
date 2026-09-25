---
id: metricas/distribucion-de-pagos-reembolsos-y-descuentos
title: "Distribución de pagos, reembolsos y descuentos"
description: "Las tarjetas de cobro de la pestaña Negocio: con qué pagaron tus clientes, cuántos cobros hubo, cuánto devolviste y cuánto descontaste."
section: metricas
order: 70
group: "Negocio"
roles: [owner, admin, barbero]
screens: [/]
keywords: [distribución de pagos, método de pago, efectivo, tarjeta, transferencia, cuántos cobros, transacciones, reembolsos, devoluciones, cuánto devolví, descuentos, cuánto desconté, promociones, negocio]
related: [metricas/como-leer-metricas, metricas/ventas-e-ingresos, metricas/ticket-promedio-cancelacion-y-propinas, metricas/ventas-por-servicio-y-de-productos]
status: draft
updated: 2026-09-25
---

# Distribución de pagos, reembolsos y descuentos

**En resumen:** cuatro tarjetas que hablan de cómo cobraste. **Distribución de pagos** te dice con qué pagaron tus clientes. **Transacciones** cuenta los cobros. **Reembolsos** y **Descuentos** te dicen cuánto devolviste y cuánto descontaste.

## Dónde está

En **Métricas › Negocio**, debajo de **Horas de solicitud de citas**. Responden a los filtros de sucursal, **Todo el equipo** (o un barbero) y periodo. Con el perfil de barbero ves solo tus cobros.

## Qué muestra

### Distribución de pagos

- **DISTRIBUCIÓN DE PAGOS**: la cifra total, por ejemplo **$8,500,000.00**, con la etiqueta **Ingresos**.
- Una dona con un trozo por cada método de pago y su monto, por ejemplo **Efectivo $6,000,000.00** y el resto en tarjeta o transferencia.

Si solo aparece un método, en ese periodo todos los cobros se registraron con él.

![Dona Distribución de pagos con el total de Ingresos y el monto de cada método de pago](/assets/es/metricas/distribucion-de-pagos-reembolsos-y-descuentos/distribucion-de-pagos.png)

### Transacciones

- **TRANSACCIONES**: el número de cobros del periodo, por ejemplo **18**.

Una transacción es un cobro. Si un cliente pagó corte y producto juntos, es una sola.

![Tarjeta Transacciones con el número de cobros](/assets/es/metricas/distribucion-de-pagos-reembolsos-y-descuentos/transacciones.png)

### Reembolsos

- **REEMBOLSOS**: el dinero que devolviste, por ejemplo **$40,000.00**, y su porcentaje, por ejemplo **0.47 %**.

Con **$0.00 · 0.00 %** no hubo devoluciones en el periodo.

![Tarjeta Reembolsos con el monto y el porcentaje](/assets/es/metricas/distribucion-de-pagos-reembolsos-y-descuentos/reembolsos.png)

### Descuentos

- **DESCUENTOS**: el dinero que descontaste, por ejemplo **$120,000.00**, y su porcentaje, por ejemplo **1.41 %**.

Con **$0.00 · 0.00 %** no aplicaste descuentos en el periodo.

![Tarjeta Descuentos con el monto y el porcentaje](/assets/es/metricas/distribucion-de-pagos-reembolsos-y-descuentos/descuentos.png)

> [!NOTE]
> Sobre qué base se calcula el porcentaje de **Reembolsos** y de **Descuentos**: pendiente de confirmar con el equipo.

## Para qué te sirve

- Si casi todo es efectivo, compara con lo que hay en caja al cerrar. Es la forma más rápida de detectar un cobro que no se registró.
- Si los descuentos suben, revisa quién los está aplicando y por qué. Un descuento sin promoción activa es dinero que se va sin control.
- Un reembolso siempre tiene una historia detrás: un servicio que no gustó, un cobro doble. Búscala en **Transacciones**.

## Preguntas frecuentes

**¿Transacciones es lo mismo que citas?**
No. **Transacciones** cuenta cobros. Una cita puede tener un cobro, o un cliente sin cita puede generar un cobro. El número de citas está en [Método de agendamiento y citas](/ayuda/metricas/metodo-de-agendamiento-y-citas).

**¿Por qué solo veo Efectivo en la dona?**
Porque todos los cobros de ese periodo se registraron en efectivo. Si cobraste con tarjeta y no aparece, revisa cómo se registró el pago al cobrar la cita.

**¿Dónde veo el detalle de cada reembolso?**
En la sección **Transacciones** del menú, no en Métricas. Aquí solo ves el total.
