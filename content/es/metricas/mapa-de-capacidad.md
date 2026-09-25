---
id: metricas/mapa-de-capacidad
title: "Mapa de capacidad: qué horas se llenan"
description: "La tabla de AI Insights que cruza los días de la semana con las horas y te muestra cuántas citas hay en cada una."
section: metricas
order: 190
roles: [owner, admin]
screens: [/]
keywords: [mapa de capacidad, qué horas se llenan, día y hora, tabla de citas, horas pico, horas vacías, lunes a domingo, capacidad, ocupación, cuándo hay más gente, heatmap, ai insights]
related: [metricas/como-leer-metricas, metricas/horas-de-solicitud-de-citas, metricas/recomendaciones-inteligentes]
status: draft
updated: 2026-09-25
---

# Mapa de capacidad: qué horas se llenan

**En resumen:** el **Mapa de Capacidad** es una tabla de días por horas. En cada casilla ves cuántas citas hubo ese día a esa hora. De un vistazo sabes qué horas se llenan y cuáles quedan vacías.

## Dónde está

En **Métricas › AI Insights**, debajo de **Alertas de Riesgo de Clientes**. Con el perfil de barbero esta pestaña no aparece.

## Qué muestra

- **Mapa de Capacidad**: una tabla con los días de la semana (**Lun** a **Dom**) en un eje y las horas (de **7:00** a **19:00**) en el otro.
- En cada casilla, el número de citas de ese día a esa hora. Por ejemplo, **Sáb · 10:00 → 6** y **Mar · 15:00 → 0**.

![Tabla Mapa de Capacidad de lunes a domingo por horas con el número de citas en cada casilla](/assets/es/metricas/mapa-de-capacidad/tarjeta.png)

> [!NOTE]
> Qué periodo cubre la tabla (si son los últimos 3 meses, como las recomendaciones, u otro) y si obedece a los filtros de arriba: pendiente de confirmar con el equipo.

## Para qué te sirve

- Las casillas con más citas son tus horas fuertes. Ahí no des permisos ni pongas descansos.
- Las casillas en cero de forma repetida son horas que puedes cubrir con una promoción o cerrar para no pagar silla vacía.
- Si un día entero está casi vacío, las **Recomendaciones inteligentes** suelen avisarlo («Sat tiene 92% menos reservas que Mon») y proponen una campaña para ese día.
- Para ver lo mismo solo por hora, sin días, mira [Horas de solicitud de citas](/ayuda/metricas/horas-de-solicitud-de-citas) en **Negocio**.

## Preguntas frecuentes

**¿La tabla muestra la semana actual?**
No parece ser una sola semana: acumula citas por día y hora. El periodo exacto está pendiente de confirmar.

**¿Por qué solo va de 7:00 a 19:00?**
Es el rango que muestra la tabla. Si tienes citas fuera de esas horas, revísalas en **Horas de solicitud de citas**, que va de 3 de la mañana a 11 de la noche.

**¿Puedo verlo por barbero?**
Está pendiente de confirmar si esta tabla responde al filtro **Todo el equipo**.
