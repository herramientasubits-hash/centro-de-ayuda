---
id: metricas/ticket-promedio-cancelacion-y-propinas
title: "Ticket promedio, tasa de cancelación y % de propinas"
description: "Las tres tarjetas de arriba de la pestaña Negocio: cuánto deja cada cobro, cuántas citas se caen y qué parte de lo cobrado son propinas."
section: metricas
order: 30
group: "Negocio"
roles: [owner, admin, barbero]
screens: [/]
keywords: [ticket promedio, cuánto deja cada cliente, promedio por transacción, tasa de cancelación, canceladas, no-show, no se presentó, no vino, propinas, porcentaje de propinas, tips, cuánto vendí por cita, negocio]
related: [metricas/como-leer-metricas, metricas/filtrar-por-sucursal-equipo-y-periodo, metricas/ventas-e-ingresos, metricas/metodo-de-agendamiento-y-citas, metricas/clientes-ingreso-promedio-por-cliente]
status: draft
updated: 2026-09-25
---

# Ticket promedio, tasa de cancelación y % de propinas

**En resumen:** son las tres tarjetas de arriba de **Negocio**. Te dicen cuánto deja cada cobro en promedio, qué parte de las citas se cancelan o el cliente no viene, y qué parte de lo cobrado son propinas.

## Dónde está

En **Métricas › Negocio**, en la primera fila. Las tres responden a los filtros de arriba: la sucursal, **Todo el equipo** (o un barbero) y el periodo (**Hoy**, **Semana** o **Mes**). Con el perfil de barbero ves solo tus cifras.

## Qué muestra

### Ticket promedio

- **TICKET PROMEDIO**: la cifra grande, por ejemplo **$45,000.00**.
- **Por transacción**: la etiqueta de abajo. Es el promedio por cobro, no por cliente ni por cita.

Si en el mes cobraste 100 veces y el ticket promedio es $45,000, cada cobro te dejó $45,000 en promedio. Si un cliente se llevó corte, barba y una cera en un solo cobro, cuenta como una transacción.

![Tarjeta Ticket promedio con la cifra y la etiqueta Por transacción](/assets/es/metricas/ticket-promedio-cancelacion-y-propinas/ticket-promedio.png)

### Tasa de cancelación

- **TASA DE CANCELACIÓN**: un porcentaje, por ejemplo **4.5%**.
- **Canceladas + No-show**: la etiqueta de abajo. Suma las citas canceladas y las citas en las que el cliente no se presentó.

Un **0.0%** significa que en ese periodo ninguna cita se canceló y nadie faltó.

![Tarjeta Tasa de cancelación con el porcentaje y la etiqueta Canceladas + No-show](/assets/es/metricas/ticket-promedio-cancelacion-y-propinas/tasa-de-cancelacion.png)

### % de propinas

- **% DE PROPINAS**: un porcentaje, por ejemplo **8.0%**. Es la parte de lo cobrado que fueron propinas.

Si aparece **0.0%**, en ese periodo no se registraron propinas en los cobros.

![Tarjeta % de propinas con el porcentaje](/assets/es/metricas/ticket-promedio-cancelacion-y-propinas/propinas.png)

> [!NOTE]
> Cómo se calcula exactamente cada una de las tres: pendiente de confirmar con el equipo.

## Para qué te sirve

- Si el ticket promedio baja, revisa si se están vendiendo menos combos o menos productos por cita. Si sube, algo de lo que cambiaste está funcionando.
- Si la tasa de cancelación sube, mira qué día y a qué hora se caen las citas y considera confirmar por mensaje el día anterior.
- Compara el mes con el anterior con las flechas del periodo antes de sacar conclusiones: una semana floja no es una tendencia.

## Preguntas frecuentes

**¿El ticket promedio es por cliente o por cobro?**
Por cobro. La tarjeta lo dice: **Por transacción**. El promedio por cliente está en **Clientes**, en [Ingreso promedio por cliente](/ayuda/metricas/clientes-ingreso-promedio-por-cliente).

**¿La tasa de cancelación incluye a los que no vinieron?**
Sí. La etiqueta dice **Canceladas + No-show**: cuenta las citas canceladas y las citas en las que el cliente no se presentó.

**¿Por qué el % de propinas está en 0.0% si mis clientes sí dejan propina?**
La tarjeta solo cuenta las propinas que se registran en el cobro dentro de Barberlytics. Las que se entregan en mano y no se anotan no aparecen.
