---
id: metricas/clientes-frecuencia-de-visita
title: "Frecuencia de visita de tus clientes"
description: "La tarjeta de la pestaña Clientes que agrupa a tus clientes según cada cuánto vienen: semanal, quincenal y más."
section: metricas
order: 140
roles: [owner, admin, barbero]
screens: [/]
keywords: [frecuencia de visita, cada cuánto vienen, semanal, quincenal, mensual, cada dos semanas, ciclo de visita, cuántas veces al mes, clientes frecuentes, ritmo de visitas, clientes]
related: [metricas/como-leer-metricas, metricas/clientes-tasa-de-retencion, metricas/clientes-citas-por-tipo-de-cliente, metricas/alertas-de-riesgo-de-clientes]
status: draft
updated: 2026-09-25
---

# Frecuencia de visita de tus clientes

**En resumen:** esta tarjeta te dice cada cuánto vienen tus clientes: cuántos vienen cada semana, cuántos cada quince días, y así. Es la base para saber quién «se está tardando» en volver.

## Dónde está

En **Métricas › Clientes**, al final de la pestaña. Responde a los filtros de sucursal, **Todo el equipo** (o un barbero) y periodo.

## Qué muestra

- **FRECUENCIA DE VISITA**: arriba, el número de clientes con frecuencia conocida, por ejemplo **5 CLIENTES**.
- Debajo, un grupo por frecuencia con el número de clientes:
  - **Semanal**: vienen cada semana. Por ejemplo **1**.
  - **Quincenal**: vienen cada quince días. Por ejemplo **4**.

Solo aparecen los grupos que tienen clientes. Si en el periodo nadie viene cada semana, **Semanal** no se muestra.

![Tarjeta Frecuencia de visita con el número de clientes y los grupos Semanal y Quincenal](/assets/es/metricas/clientes-frecuencia-de-visita/tarjeta.png)

> [!NOTE]
> Qué otros grupos existen además de Semanal y Quincenal, cuántas visitas hacen falta para asignar una frecuencia y cómo se calcula: pendiente de confirmar con el equipo.

## Para qué te sirve

- Un cliente quincenal que lleva un mes sin venir se está perdiendo. **Alertas de riesgo de clientes** usa esta frecuencia (el «ciclo») para avisarte.
- Si la mayoría es quincenal, tu agenda se repite cada dos semanas: agenda la siguiente cita antes de que el cliente salga.
- Compara por barbero: el que tiene más clientes semanales es el que mejor fideliza.

## Preguntas frecuentes

**¿Por qué dice 5 clientes si atendí a 40?**
Solo cuenta a los clientes a los que ya se les puede asignar una frecuencia. Un cliente que vino una sola vez todavía no tiene ritmo conocido.

**¿Qué es el «ciclo» que sale en Alertas de riesgo?**
Es la frecuencia habitual de ese cliente, en días. Por ejemplo, **ciclo: 14d** es un cliente quincenal. Mira [Alertas de riesgo de clientes](/ayuda/metricas/alertas-de-riesgo-de-clientes).

**¿Puedo ver la frecuencia de un cliente en concreto?**
Aquí no; la tarjeta agrupa. Para uno en concreto, revisa su ficha en la sección **Clientes** del menú.
