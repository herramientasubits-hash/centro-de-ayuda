---
id: metricas/ventas-e-ingresos
title: "Ventas e ingresos: servicios, productos, impuestos, propinas y tarifas"
description: "Las dos tarjetas de dinero de la pestaña Negocio: cuánto vendiste en total, qué parte fue servicios o productos, y de qué se compone lo que entró."
section: metricas
order: 40
roles: [owner, admin, barbero]
screens: [/]
keywords: [ventas, ingresos, cuánto vendí, cuánto entró, total del mes, servicios, productos, impuestos, propinas, tarifas, no se presentaron, facturación, dinero del mes, negocio]
related: [metricas/como-leer-metricas, metricas/ticket-promedio-cancelacion-y-propinas, metricas/distribucion-de-pagos-reembolsos-y-descuentos, metricas/ventas-por-servicio-y-de-productos, metricas/total-neto-del-equipo]
status: draft
updated: 2026-09-25
---

# Ventas e ingresos: servicios, productos, impuestos, propinas y tarifas

**En resumen:** **Ventas** te dice cuánto vendiste en el periodo y qué parte fue servicios o productos. **Ingresos** desglosa de qué se compone ese dinero: servicios, productos, impuestos, propinas, tarifas y lo cobrado a quien no se presentó.

## Dónde está

En **Métricas › Negocio**, debajo de las tres tarjetas de arriba. Responden a los filtros de sucursal, **Todo el equipo** (o un barbero) y periodo (**Hoy**, **Semana** o **Mes**). Con el perfil de barbero ves solo lo tuyo.

## Qué muestra

### Ventas

- **VENTAS**: la cifra grande, por ejemplo **$8,500,000.00**, con la etiqueta **Total**.
- Una dona con dos partes: **Servicios** y **Productos**, cada una con su porcentaje. Por ejemplo, **Servicios 92%** y **Productos 8%**.

Si Productos marca **0%**, en ese periodo no vendiste ningún producto, o se cobraron como parte de un servicio.

![Tarjeta Ventas con el total y la dona de Servicios y Productos](/assets/es/metricas/ventas-e-ingresos/ventas.png)

### Ingresos

- **INGRESOS**: la misma cifra total, por ejemplo **$8,500,000.00**.
- Debajo, una barra por cada componente con su monto:
  - **Servicios**: lo cobrado por cortes, barbas y demás servicios.
  - **Productos**: lo cobrado por productos.
  - **Impuestos**: la parte de impuestos incluida en los cobros.
  - **Propinas**: las propinas registradas en los cobros.
  - **Tarifas**: los cargos adicionales cobrados.
  - **No se presentaron**: lo cobrado por citas en las que el cliente no vino.

Por ejemplo: **Servicios $8,000,000.00 · Productos $500,000.00 · Impuestos $0.00 · Propinas $0.00 · Tarifas $0.00 · No se presentaron $0.00**.

![Tarjeta Ingresos con las barras de Servicios, Productos, Impuestos, Propinas, Tarifas y No se presentaron](/assets/es/metricas/ventas-e-ingresos/ingresos.png)

> [!NOTE]
> Cómo se calcula exactamente cada barra, y si el total de Ventas coincide siempre con el de Ingresos: pendiente de confirmar con el equipo.

## Para qué te sirve

- Mira primero el total y compáralo con el mes anterior con las flechas del periodo.
- Si Productos pesa muy poco, ahí hay una venta que no estás haciendo: cera, aceite de barba, champú.
- Si la barra **No se presentaron** tiene monto, es dinero que cobraste por citas que se perdieron. Si es cero y tienes muchos no-show, revisa si estás cobrando esas citas.

## Preguntas frecuentes

**¿Ventas e Ingresos deberían mostrar la misma cifra?**
En la pantalla las dos tarjetas muestran el mismo total. **Ventas** lo divide entre servicios y productos; **Ingresos** lo desglosa por componente.

**¿Dónde veo qué servicio vendí más?**
En [Ventas por servicio](/ayuda/metricas/ventas-por-servicio-y-de-productos), más abajo en la misma pestaña.

**¿Cómo veo lo que vendió cada barbero?**
Cambia **Todo el equipo** por el barbero, o ve a la pestaña **Barberos** y mira [Total neto del equipo](/ayuda/metricas/total-neto-del-equipo).
