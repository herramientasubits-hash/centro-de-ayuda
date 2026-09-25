---
id: calendario/estados-de-una-cita
title: "Los estados de una cita: agendada, llegó, en silla, cerrada y terminada"
description: "Por qué estados pasa una cita, con qué botón se cambia cada uno y cómo los nombra la app en el calendario, en el detalle y en Transacciones."
section: calendario
order: 140
roles: [owner, admin, recepcion, barbero]
screens: [/calendar, /transactions]
keywords: [estados de la cita, agendada, llegó, en silla, cerrada, terminada, cancelada, pendiente, ingresar, sentado, cobrar, no se presentó, barbero listo, check in, check out, flujo de la cita]
related: [calendario/abrir-una-cita, calendario/marcar-que-el-cliente-llego, calendario/pasar-al-cliente-a-la-silla, calendario/cobrar-una-cita, calendario/el-cliente-no-se-presento, calendario/cancelar-una-cita, transacciones/filtrar-transacciones]
status: draft
updated: 2026-09-25
---

# Los estados de una cita: agendada, llegó, en silla, cerrada y terminada

**En resumen:** una cita avanza desde que se agenda hasta que se cobra. Cada paso se marca desde el botón **Acciones** del detalle de la cita o desde el botón de la tarjeta. Si el cliente no viene o se cancela, la cita sale del flujo.

## El camino normal

| Momento | Botón que lo marca | Cómo lo nombra la app |
|---|---|---|
| La cita existe | **Crear** | En la Agenda sale como **Pendiente**; en Transacciones, **Agendada** |
| El barbero está libre para atender | **Acciones › Barbero listo** | — |
| El cliente llegó a la barbería | **Ingresar** (en la tarjeta o en **Acciones**) | En Transacciones, **Llegó** |
| El cliente pasa a la silla | **Acciones › Sentado** | En Transacciones, **En silla** |
| Se cobra | **Cobrar** o **Pagar cita** | En Transacciones, **Cerrada** y **Terminada** |

![El menú Acciones con Barbero listo, Ingresar, Sentado, Cobrar, No se presentó y Cancelar](/assets/es/calendario/abrir-una-cita/acciones.png)

## Cuando la cita no ocurre

- **No se presentó**: el cliente no vino. Cuenta en la **Tasa de cancelación** de Métricas («Canceladas + No-show»). Mira [El cliente no se presentó](/ayuda/calendario/el-cliente-no-se-presento).
- **Cancelar**: la cita se cancela. En Transacciones sale como **Cancelada**. Mira [Cancelar una cita](/ayuda/calendario/cancelar-una-cita).

## Dónde ves el estado

- En la **tarjeta** del calendario: el botón de la esquina («Ingresar») indica el siguiente paso.
- En el **detalle**: junto al nombre («Pendiente») y en **SIGUIENTE PASO** («Laura aún no ha llegado.»).
- En la vista **Agenda**: la etiqueta de cada fila.
- En **Transacciones**: el filtro **Estado de la cita** (Agendada, Llegó, En silla, Cerrada, Terminada, Cancelada).

> [!NOTE]
> La app usa nombres distintos en cada pantalla (por ejemplo, **Sentado** en el botón y **En silla** en Transacciones). La equivalencia exacta entre cada botón y cada estado, y la diferencia entre **Cerrada** y **Terminada**, todavía no están confirmadas: se comprobarán con una cita de prueba.

## Preguntas frecuentes

**¿Tengo que marcar todos los pasos?**
No. Puedes cobrar una cita que solo estaba agendada. Marcar **Ingresar** y **Sentado** sirve para que el equipo vea en qué va cada cliente.

**¿Qué diferencia hay entre No se presentó y Cancelar?**
**No se presentó** es cuando el cliente no vino sin avisar; **Cancelar** es cuando la cita se anula. Las dos suman en la **Tasa de cancelación** de Métricas.

**¿Se puede volver atrás un estado?**
Todavía no está documentado.
