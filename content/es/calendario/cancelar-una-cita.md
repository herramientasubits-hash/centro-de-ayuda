---
id: calendario/cancelar-una-cita
title: "Cancelar una cita"
description: "Cancelar una cita desde el menú Acciones de la cita, la diferencia con No se presentó, y dónde quedan las canceladas."
section: calendario
order: 160
group: "Atender una cita"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [cancelar cita, cancelación, anular cita, el cliente canceló, borrar cita, eliminar cita, cita cancelada, cancelada, tasa de cancelación, el cliente no viene, deshacer cita, quitar cita]
related: [calendario/abrir-una-cita, calendario/el-cliente-no-se-presento, calendario/mover-o-reprogramar-una-cita, calendario/estados-de-una-cita, metricas/ticket-promedio-cancelacion-y-propinas, transacciones/filtrar-transacciones]
status: draft
updated: 2026-09-25
---

# Cancelar una cita

**En resumen:** abre la cita, toca **Acciones** y elige **Cancelar**. Úsalo cuando el cliente avisa que no viene. Si no avisó y no llegó, la opción es **No se presentó**.

## Pasos

1. En el **Calendario**, toca la tarjeta de la cita. Se abre su detalle.
2. Toca **Acciones**, el botón ≡ de la cabecera.
   ![El menú Acciones de la cita, con Cancelar al final](/assets/es/calendario/abrir-una-cita/acciones.png)
3. Elige **Cancelar**. Es la última opción del menú.

> [!IMPORTANT]
> Lo que pasa después de tocar **Cancelar** (si pide confirmar o un motivo, si se puede deshacer, si avisa al cliente) todavía no está comprobado. Antes de cancelar, asegúrate de que es la cita correcta: revisa el nombre, el servicio y la hora en la cabecera.

## Cancelar o No se presentó

| Situación | Acción |
|---|---|
| El cliente avisó que no viene, o tú tienes que anular la cita | **Cancelar** |
| El cliente no avisó y no llegó | **No se presentó** ([El cliente no se presentó](/ayuda/calendario/el-cliente-no-se-presento)) |
| El cliente quiere otra hora u otro día | Mejor mover la cita: [Mover o reprogramar una cita](/ayuda/calendario/mover-o-reprogramar-una-cita) |

## Dónde quedan las canceladas

- En **Transacciones**, el filtro **Estado de la cita** tiene la opción **Cancelada**. Mira [Filtrar transacciones](/ayuda/transacciones/filtrar-transacciones).
- En **Métricas › Negocio**, la **Tasa de cancelación** junta las canceladas y las que no se presentaron. Mira [Ticket promedio, cancelación y propinas](/ayuda/metricas/ticket-promedio-cancelacion-y-propinas).
- En la ficha del cliente, dentro de la cita, la pestaña **Cliente** muestra **ALERTAS** con el número de **Canceladas**, por ejemplo «Canceladas 8».

## El cliente también puede cancelar

En la ficha de cada barbero, pestaña **Opciones**, está **Los clientes pueden cancelar citas**, con los canales **Correo**, **SMS** y **Push** y un tiempo límite en **Horas** y **Minutos**. Si está encendido, el cliente puede cancelar solo hasta ese tiempo antes de la cita.

## Lo que dice la pantalla

| Texto | Qué significa |
|---|---|
| **Cancelar** (menú **Acciones**) | Anula la cita |
| **Cancelada** (filtro de **Transacciones**) | El estado con el que queda la cita |
| «Canceladas 8» (pestaña **Cliente**, **ALERTAS**) | Cuántas citas ha cancelado ese cliente |

## Preguntas frecuentes

**¿Cancelar borra la cita del calendario?**
Todavía no está comprobado cómo se ve la cita cancelada en la cuadrícula. En **Transacciones** sigue existiendo con el estado **Cancelada**.

**¿Puedo cancelar solo una cita de una serie que se repite?**
Todavía no está comprobado. Mira [Crear una cita que se repite](/ayuda/calendario/cita-que-se-repite).

**¿Se cobra algo al cancelar?**
En las pantallas recorridas no aparece ningún cargo por cancelación.
