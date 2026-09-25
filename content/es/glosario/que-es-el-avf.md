---
id: glosario/que-es-el-avf
title: "AVF: el ritmo de visita de cada cliente"
description: "Qué muestra la tarjeta AVF de la ficha de un cliente, en qué unidad sale, dónde encontrarla y qué falta por confirmar sobre su cálculo."
section: glosario
order: 20
roles: [owner, admin]
screens: [/customers/*]
keywords: [AVF, qué es el AVF, avf días, ritmo de visita, cada cuánto viene, indicador del cliente, ficha del cliente, frecuencia, días entre visitas, sigla AVF]
related: [glosario/glosario-de-barberlytics, glosario/que-es-el-fov, clientes/indicadores-de-un-cliente, clientes/como-se-clasifica-un-cliente, metricas/alertas-de-riesgo-de-clientes]
status: draft
updated: 2026-09-25
---

# AVF: el ritmo de visita de cada cliente

**En resumen:** **AVF** es una de las doce tarjetas de la ficha de un cliente. La app lo muestra en días («3 Dias») y habla del ritmo con el que ese cliente vuelve.

## Dónde sale

1. Toca **Clientes** y, en la fila del cliente, **Acciones › Ver**.
2. En **Información general**, arriba, están las doce tarjetas. **AVF** es la última.
   ![Las doce tarjetas de indicadores de la ficha de un cliente](/assets/es/clientes/ver-un-cliente/indicadores.png)

## Qué muestra la pantalla

| Tarjeta | Unidad | Ejemplo |
|---|---|---|
| **AVF** | **Dias** | Laura: 14 Dias |

Otras tarjetas de la misma fila hablan de lo mismo desde otro ángulo: **FOV** sale en **Semana** ([FOV](/ayuda/glosario/que-es-el-fov)) y **Tiempo de reserva** también en **Semana**. En el detalle de una cita, la pestaña **Cliente** dice «Cada 7 días» bajo **RITMO DEL CLIENTE**, y en **Métricas › AI Insights** las alertas de riesgo muestran «ciclo: 14d».

> [!NOTE]
> La fórmula exacta del AVF está pendiente de confirmar con el equipo: si es el promedio de días entre visitas, el último intervalo o el «ciclo» que usan los tipos de cliente y las alertas. Aquí solo describimos lo que la pantalla muestra y su unidad.

## Para qué te sirve

- Si el AVF de Laura es 14 días y lleva 30 sin venir, se está tardando: revisa si aparece en **Pre-perdida** o en las **Alertas de riesgo de clientes**.
- Agéndale la siguiente cita a esa distancia: la pestaña **Cliente** del detalle de una cita lo sugiere en **AGÉNDALO PARA**.

## Preguntas frecuentes

**¿AVF y FOV son lo mismo?**
Salen en unidades distintas (días y semanas) y en tarjetas distintas. Si son el mismo dato en dos unidades está pendiente de confirmar.

**¿Un cliente con una sola cita tiene AVF?**
Pendiente de confirmar. Con una visita no hay dos fechas que comparar.
