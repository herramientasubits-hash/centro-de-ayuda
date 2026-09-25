---
id: calendario/el-cliente-no-se-presento
title: "El cliente no se presentó"
description: "Marcar que el cliente no vino con No se presentó en el menú Acciones, en qué se diferencia de Cancelar y dónde se ve el plantón después."
section: calendario
order: 170
group: "Atender una cita"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [no se presentó, no show, no-show, plantón, el cliente no vino, no llegó, faltó a la cita, cliente que no aparece, marcar inasistencia, ausente, no asistió, cumplimiento del cliente]
related: [calendario/abrir-una-cita, calendario/cancelar-una-cita, calendario/marcar-que-el-cliente-llego, calendario/estados-de-una-cita, metricas/ticket-promedio-cancelacion-y-propinas, clientes/ver-un-cliente]
status: draft
updated: 2026-09-25
---

# El cliente no se presentó

**En resumen:** si pasó la hora y el cliente no llegó ni avisó, abre la cita, toca **Acciones** y elige **No se presentó**. Así el plantón queda en su historial y en tus métricas. Si el cliente avisó, usa **Cancelar**.

## Pasos

1. En el **Calendario**, toca la tarjeta de la cita. En **Resumen**, **SIGUIENTE PASO** dice «Laura aún no ha llegado.»
2. Toca **Acciones**, el botón ≡ de la cabecera.
   ![El menú Acciones de la cita, con No se presentó entre Cobrar y Cancelar](/assets/es/calendario/abrir-una-cita/acciones.png)
3. Elige **No se presentó**.

> [!NOTE]
> Lo que pasa después de tocar **No se presentó** (si pide confirmar, cómo queda la tarjeta, si se puede deshacer, si se le avisa al cliente) todavía no está comprobado.

## No se presentó o Cancelar

| Situación | Acción |
|---|---|
| No avisó y no llegó | **No se presentó** |
| Avisó que no viene | **Cancelar** ([Cancelar una cita](/ayuda/calendario/cancelar-una-cita)) |

La diferencia importa porque cada una se cuenta aparte y porque el plantón queda en la ficha del cliente.

## Dónde se ve después

- **En la cita, pestaña Cliente.** El bloque **CUMPLIMIENTO** cuenta las veces que vino frente a las que agendó, por ejemplo «Vino 31 de 31 veces», y lo resume: «Nunca ha faltado. Es confiable.» Debajo, **ALERTAS** muestra las **Canceladas**.
  ![La pestaña Cliente de la cita, con Cumplimiento y Alertas](/assets/es/calendario/abrir-una-cita/cliente.png)
- **En Métricas › Negocio.** La tarjeta **Citas** separa las que **no se presentaron**, y la **Tasa de cancelación** junta canceladas y no-show. Mira [Ticket promedio, cancelación y propinas](/ayuda/metricas/ticket-promedio-cancelacion-y-propinas).
- **En la ficha del cliente**, en **Clientes**, sus indicadores incluyen el porcentaje de **No asistió**. Mira [Ver un cliente](/ayuda/clientes/ver-un-cliente).

## Cómo llama la app a este estado

El menú **Acciones** dice **No se presentó**. **Métricas** habla de citas que «no se presentaron» y de «no-show». La ficha del cliente dice «No asistió». Son nombres distintos para lo mismo en cada sitio.

## Lo que dice la pantalla

| Texto | Qué significa |
|---|---|
| «Laura aún no ha llegado.» | Nadie marcó la llegada; todavía puedes esperar o marcar el plantón |
| «Vino 31 de 31 veces» | Cuántas citas cumplió el cliente de las que agendó |
| «Nunca ha faltado. Es confiable.» | El resumen de cumplimiento cuando no tiene plantones |

## Preguntas frecuentes

**¿Cuánto espero antes de marcarlo?**
Eso lo decides tú. La app no lo marca sola: la cita sigue en «aún no ha llegado» hasta que alguien toque **No se presentó**.

**El cliente llegó tarde, después de marcarlo.**
Cómo se deshace todavía no está comprobado. Si lo vas a atender, crea una cita nueva a la hora en que llegó.

**¿Se cobra algo por el plantón?**
En las pantallas recorridas no aparece ningún cargo por no presentarse.
