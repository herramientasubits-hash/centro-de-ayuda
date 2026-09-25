---
id: glosario/que-es-la-ocupacion
title: "Ocupación: qué tan llena está la agenda"
description: "Dónde muestra la app la ocupación: el porcentaje Ocup. de cada día en la vista Mes del calendario y los avisos de agenda ocupada del Centro de notificaciones."
section: glosario
order: 60
roles: [owner, admin]
screens: [/, /calendar, /notifications-center]
keywords: [ocupación, ocup, porcentaje de ocupación, agenda llena, qué tan llena está la agenda, vista mes, agenda ocupada, ocupación del día, capacidad, horas libres, mapa de capacidad, aviso de ocupación]
related: [glosario/glosario-de-barberlytics, calendario/ver-el-dia-la-agenda-o-el-mes, metricas/mapa-de-capacidad, metricas/horas-de-solicitud-de-citas, navegacion/notificaciones-que-recibes]
status: draft
updated: 2026-09-25
---

# Ocupación: qué tan llena está la agenda

**En resumen:** la ocupación es qué parte del tiempo de un barbero, o de la barbería, está tomado por citas. La app la muestra como porcentaje en la vista **Mes** del calendario («Ocup. 0.79 %») y la usa en dos avisos del Centro de notificaciones.

## Dónde sale

### En el calendario, vista Mes

1. Abre **Calendario** y cambia la vista a **Mes**.
2. Elige un barbero arriba.
3. Cada día muestra su ocupación: **Ocup. 0.79 %**. Los días con más citas tienen un porcentaje más alto.
   ![La vista Mes con la ocupación por día](/assets/es/calendario/ver-el-dia-la-agenda-o-el-mes/mes.png)

### En los avisos

En **Configuración › Centro de notificaciones**, grupo **Calendario › Equipo**:

- «Cuando un barbero tenga su agenda ocupada a más del [Porcentaje]»
- «Cuando la barbería tiene una ocupación del día de más del [Porcentaje]»

Tú pones el porcentaje. Por ejemplo, un aviso al 80 % te dice que a Carlos casi no le quedan huecos ese día.

### Mapa de capacidad

En **Métricas › AI Insights**, el **Mapa de Capacidad** cruza los días de la semana con las horas y muestra cuántas citas hay en cada casilla: es la ocupación vista por hora ([Mapa de capacidad](/ayuda/metricas/mapa-de-capacidad)).

![La tabla Mapa de Capacidad](/assets/es/metricas/mapa-de-capacidad/tarjeta.png)

> [!NOTE]
> La fórmula exacta está pendiente de confirmar con el equipo: sobre qué horas se calcula el porcentaje (el turno del barbero, la **Hora de inicio** y **Hora de fin** de Detalles del negocio, o las 06:00 a 23:30 de la cuadrícula) y si cuenta las citas canceladas.

## Para qué te sirve

- Un barbero con ocupación alta todos los días es el candidato a subir precio o a que otro barbero tome sus clientes sin preferencia.
- Días con ocupación baja de forma repetida son los días para una promoción; las **Recomendaciones inteligentes** suelen señalarlos.

## Preguntas frecuentes

**¿Por qué sale 0.79 % y no 79 %?**
Es lo que muestra la pantalla. Si el número es una fracción o un porcentaje de todo el mes está pendiente de confirmar.

**¿Veo la ocupación de toda la sucursal?**
En **Mes** se elige un barbero. Para el conjunto, el aviso «ocupación del día» y el **Mapa de Capacidad**.
