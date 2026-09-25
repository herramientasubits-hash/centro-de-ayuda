---
id: metricas/alertas-de-riesgo-de-clientes
title: "Alertas de riesgo: clientes en riesgo, perdidos y vencidos"
description: "La tarjeta de AI Insights que lista a los clientes que se están tardando en volver, con cuántos días llevan sin venir y su ciclo habitual."
section: metricas
order: 180
group: "AI Insights"
roles: [owner, admin]
screens: [/]
keywords: [alertas de riesgo de clientes, clientes en riesgo, clientes perdidos, clientes vencidos, clientes que no vuelven, se me están yendo, churn, días sin venir, ciclo, recuperar clientes, ai insights]
related: [metricas/como-leer-metricas, metricas/clientes-frecuencia-de-visita, metricas/clientes-tasa-de-retencion, metricas/recomendaciones-inteligentes, metricas/clientes-citas-por-tipo-de-cliente]
status: draft
updated: 2026-09-25
---

# Alertas de riesgo: clientes en riesgo, perdidos y vencidos

**En resumen:** esta tarjeta te dice a quién tienes que escribirle hoy. Lista a los clientes que llevan más tiempo del habitual sin venir, con cuántos días han pasado y cada cuánto solían venir.

## Dónde está

En **Métricas › AI Insights**, debajo del **Puntaje de Salud**. Con el perfil de barbero esta pestaña no aparece.

## Qué muestra

- **Alertas de Riesgo de Clientes**: arriba, tres contadores:
  - **Perdidos**: clientes que llevan tanto sin venir que se dan por perdidos. Por ejemplo **1**.
  - **En riesgo**: clientes que se están tardando más de lo normal. Por ejemplo **4**.
  - **Vencidos**: clientes que ya pasaron su fecha esperada de vuelta. Por ejemplo **2**.
- Debajo, la lista de clientes. Cada fila trae:
  - La inicial y el nombre del cliente.
  - Cuánto lleva sin venir y su ritmo habitual: por ejemplo **63 días atrás · ciclo: 14d** (un cliente quincenal que lleva dos meses sin aparecer).
  - Una etiqueta: **En riesgo** o **Vencidos**.

![Tarjeta Alertas de Riesgo de Clientes con los contadores Perdidos, En riesgo y Vencidos y la lista de clientes](/assets/es/metricas/alertas-de-riesgo-de-clientes/tarjeta.png)

> [!NOTE]
> Cuántos días sin venir hacen que un cliente pase a **En riesgo**, a **Vencidos** o a **Perdidos**: pendiente de confirmar con el equipo. Las **Recomendaciones inteligentes** mencionan «1.5x su frecuencia habitual» para los clientes en riesgo.

## Para qué te sirve

- Es la lista de a quién escribir. Un mensaje corto («Hace rato no te vemos, ¿te agendo para esta semana?») recupera a más de uno.
- Empieza por **En riesgo**: todavía no se han ido. Los **Vencidos** necesitan algo más, como una oferta.
- Si la lista crece cada semana, el problema no es un cliente: revisa la última visita de esos clientes, quién los atendió y si hubo espera.
- El **ciclo** sale de la [Frecuencia de visita](/ayuda/metricas/clientes-frecuencia-de-visita) de cada cliente.

## Preguntas frecuentes

**¿Qué significa «63 días atrás · ciclo: 14d»?**
Que el cliente vino por última vez hace 63 días, y que normalmente venía cada 14 días. Lleva más de cuatro ciclos sin aparecer.

**¿Qué diferencia hay entre En riesgo, Vencidos y Perdidos?**
Son tres niveles del mismo problema, de menos a más tiempo sin venir. Los días exactos de cada nivel están pendientes de confirmar.

**¿Puedo escribirle al cliente desde aquí?**
La tarjeta solo muestra la lista. Para contactarlo, busca al cliente en la sección **Clientes** del menú.
