---
id: metricas/recomendaciones-inteligentes
title: "Recomendaciones inteligentes: de dónde salen y qué hacer con ellas"
description: "La tarjeta de AI Insights que te da consejos concretos a partir de tus datos de los últimos 3 meses, con su prioridad y una acción sugerida."
section: metricas
order: 200
group: "AI Insights"
roles: [owner, admin]
screens: [/]
keywords: [recomendaciones inteligentes, recomendaciones de ia, inteligencia artificial, qué debo hacer, consejos, prioridad, capacidad, retención, marketing, negocio, clientes, crecimiento, acción sugerida, desbalance, ai insights]
related: [metricas/como-leer-metricas, metricas/puntaje-de-salud, metricas/alertas-de-riesgo-de-clientes, metricas/mapa-de-capacidad, metricas/clientes-preferencia-de-barbero]
status: draft
updated: 2026-09-25
---

# Recomendaciones inteligentes: de dónde salen y qué hacer con ellas

**En resumen:** son consejos que la app saca de tus propios datos. Cada uno te dice qué pasa, por qué importa y qué hacer. La pantalla lo dice así: «Recomendaciones generadas por IA basadas en los patrones de datos de tu negocio en los últimos 3 meses.»

## Dónde está

En **Métricas › AI Insights**, al final de la pestaña. Con el perfil de barbero esta pestaña no aparece.

## Qué muestra

- **Recomendaciones Inteligentes**: las recomendaciones agrupadas en tres bloques, con el número de cada uno: **NEGOCIO**, **CLIENTES** y **CRECIMIENTO**. Por ejemplo, **NEGOCIO (1)**, **CLIENTES (2)**, **CRECIMIENTO (3)**.
- Cada recomendación trae:
  - Una categoría: **CAPACIDAD**, **RETENCIÓN** o **MARKETING**.
  - Una prioridad: **!**, **!!** o **!!!**. Cuantos más signos, más urgente.
  - Un titular con la cifra, por ejemplo «4 clientes en riesgo de perderse».
  - Una explicación, por ejemplo «Estos clientes no han visitado en 1.5x su frecuencia habitual. Podrían cambiar a otra barbería.»
  - Una acción sugerida, por ejemplo «Envía una campaña de recordatorio u oferta especial».

Otros ejemplos que puedes ver:

| Titular | Acción sugerida |
|---|---|
| «Desbalance: barbero más ocupado tiene 47 citas, menos ocupado 2» | «Ajusta el orden de la cola sin preferencia o redistribuye walk-ins» |
| «11 clientes registrados nunca han reservado» | «Envía una oferta de bienvenida para su primera visita» |
| «Sat tiene 92% menos reservas que Mon» | «Lanza una campaña 'Especial de Sat'» |

También puede avisarte de la diferencia entre semana y fin de semana, por ejemplo «Los días de semana tienen 1630% más demanda por día que fines de semana».

![Tarjeta Recomendaciones Inteligentes con los grupos Negocio, Clientes y Crecimiento y una recomendación con su prioridad, explicación y acción sugerida](/assets/es/metricas/recomendaciones-inteligentes/tarjeta.png)

> [!NOTE]
> Con qué regla se asigna la prioridad (!, !! o !!!), cada cuánto se actualizan las recomendaciones y si responden a los filtros de arriba: pendiente de confirmar con el equipo. Los días de la semana pueden aparecer en inglés («Sat», «Mon»).

## Para qué te sirve

- Empieza por las de **!!!**. Son las que más dinero te están costando.
- Cada recomendación apunta a otra tarjeta: las de **RETENCIÓN** a [Alertas de riesgo de clientes](/ayuda/metricas/alertas-de-riesgo-de-clientes); las de **CAPACIDAD** al [Mapa de capacidad](/ayuda/metricas/mapa-de-capacidad) y a [Preferencia de barbero](/ayuda/metricas/clientes-preferencia-de-barbero); las de **MARKETING** a la pestaña **Marketing**.
- La acción sugerida es un punto de partida, no una orden. Tú conoces tu barbería: si «Especial de sábado» no va con tu clientela, prueba otra cosa ese día.
- Se basan en los últimos 3 meses. Si acabas de abrir o de cambiar de sistema, espera a tener datos antes de hacerles caso.

## Preguntas frecuentes

**¿Las recomendaciones cambian con los filtros de arriba?**
Está pendiente de confirmar. La pantalla dice que usan los datos de los últimos 3 meses.

**¿Qué significan los signos «!», «!!» y «!!!»?**
Son la prioridad: cuantos más signos, más urgente. La regla exacta está pendiente de confirmar.

**¿Puedo marcar una recomendación como hecha o descartarla?**
La tarjeta solo las muestra. Cuando el dato que la origina cambie (por ejemplo, los clientes en riesgo vuelvan), la recomendación deja de aparecer.
