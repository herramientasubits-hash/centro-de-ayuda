---
id: clientes/indicadores-de-un-cliente
title: "Los indicadores de un cliente: FOV, AVF, LTV, ver índice y vuelve a reservar"
description: "Qué significa cada una de las doce tarjetas de la ficha de un cliente, en lenguaje de barbería: cuánto gasta, cada cuánto viene, cuántas citas cumple y cuáles quedan pendientes de confirmar."
section: clientes
order: 60
roles: [owner, admin]
screens: [/customers/*]
keywords: [indicadores del cliente, FOV, AVF, LTV, ver índice, ver indice, vuelve a reservar, promedio de venta, ticket promedio del cliente, número de transacciones, completadas, canceladas, no asistió, tiempo de reserva, total de citas, qué significa FOV, qué significa LTV, cuánto gasta un cliente, cada cuánto viene un cliente]
related: [clientes/ver-un-cliente, clientes/tipos-de-cliente, clientes/como-se-clasifica-un-cliente, metricas/clientes-frecuencia-de-visita, metricas/clientes-ingreso-promedio-por-cliente]
status: draft
updated: 2026-09-25
---

# Los indicadores de un cliente: FOV, AVF, LTV, ver índice y vuelve a reservar

**En resumen:** la pestaña **Información general** de la ficha empieza con doce tarjetas. Las que más te sirven: **LTV** (cuánto ha gastado en total), **Promedio de venta** (cuánto gasta por visita), **Total de citas** y los porcentajes de **Completadas**, **Canceladas** y **No asistió**. **FOV** y **AVF** hablan de su ritmo de visita.

![Las doce tarjetas de indicadores en la ficha de un cliente](/assets/es/clientes/ver-un-cliente/indicadores.png)

## Dónde están

Toca **Clientes**, luego **Acciones** › **Ver** en la fila del cliente. Las tarjetas están arriba de todo en **Información general**.

## Qué dice cada tarjeta

Con Laura Gómez de ejemplo, una clienta que viene desde hace dos años.

| Tarjeta | Qué es | Ejemplo |
|---|---|---|
| **Total de citas** | Cuántas citas tiene registradas, sumando todas. | 24 |
| **Ver indice** | Un porcentaje. La pantalla lo muestra en «%». | 0.00 % |
| **FOV** | Su ritmo de visita, en semanas. La pantalla lo muestra con la unidad **Semana**. | 2 Semana |
| **LTV** | Cuánto dinero ha dejado en tu barbería desde su primera cita. Es el mismo dato de la columna **LTV** de la lista. | $1,250,000.00 |
| **Promedio de venta** | Cuánto gasta, en promedio, cada vez que se le cobra. | $52,000.00 |
| **Número de transacciones** | Cuántas veces se le ha cobrado. | 24 |
| **Completadas** | De sus citas, qué porcentaje llegó hasta el cobro. | 87.50 % |
| **Canceladas** | Qué porcentaje de sus citas se canceló. | 8.33 % |
| **No asistió** | Qué porcentaje de sus citas faltó sin avisar. | 4.17 % |
| **Vuelve a reservar** | Un porcentaje sobre sus reservas. La pantalla lo muestra en «%». | 45.00 % |
| **Tiempo de reserva** | Un dato en semanas. La pantalla lo muestra con la unidad **Semana**. | 1 Semana |
| **AVF** | Un dato en días. La pantalla lo muestra con la unidad **Dias**. | 14 Dias |

> [!NOTE]
> Cómo calcula la app **Ver indice**, **Vuelve a reservar**, **Tiempo de reserva**, **FOV** y **AVF** todavía no está confirmado. Aquí solo describimos lo que muestra la pantalla y su unidad. Tampoco está confirmado si **Total de citas** cuenta las canceladas o si **LTV** incluye productos y propinas.

## Cómo leerlos en la barbería

- **LTV alto y Promedio de venta bajo**: viene mucho y gasta poco cada vez. Es el cliente al que ofrecerle un servicio extra o un producto.
- **LTV bajo y Promedio de venta alto**: gasta bien pero viene poco. Agéndale la siguiente cita antes de que salga.
- **Canceladas** o **No asistió** por encima del resto de tus clientes: pídele confirmación el día anterior.
- **FOV** te dice cada cuántas semanas suele venir. Es lo que la app usa para saber si «se está tardando» y cambiarle el tipo: mira [Cómo cambia un cliente de tipo con el tiempo](/ayuda/clientes/como-se-clasifica-un-cliente).

## Preguntas frecuentes

**¿Qué es el LTV?**
Lo que el cliente ha pagado en tu barbería en total, en su moneda. Cuanto más alto, más vale ese cliente para ti.

**¿Por qué Completadas, Canceladas y No asistió no suman 100 %?**
Porque hay citas que todavía están pendientes (agendadas y sin cobrar) y no entran en ninguno de los tres.

**¿FOV es lo mismo que el «ciclo» de Alertas de riesgo?**
La ficha muestra **FOV** en semanas y [Alertas de riesgo](/ayuda/metricas/alertas-de-riesgo-de-clientes) muestra el ciclo en días. Que sean el mismo dato está pendiente de confirmar.

**¿Estos números son de una sucursal o de toda la barbería?**
Pendiente de confirmar. La lista de clientes se ve por sucursal.
