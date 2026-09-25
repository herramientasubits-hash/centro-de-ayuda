---
id: calendario/no-puedo-agendar-a-esta-hora
title: "No puedo agendar a esta hora"
description: "Qué revisar cuando una franja del calendario sale sombreada o el barbero no aparece: su horario, un bloqueo, el filtro Equipo* y si está activado en la sucursal."
section: calendario
order: 260
group: "Si algo falla"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [no puedo agendar, franja sombreada, hora no disponible, gris, fuera de horario, el barbero no trabaja, horario de trabajo, bloqueo, no deja crear cita, no aparece la hora, hora ocupada, no me deja, horas de trabajo]
related: [calendario/filtrar-el-calendario-por-equipo, calendario/un-barbero-no-aparece-en-el-calendario, calendario/bloquear-el-calendario, calendario/crear-una-cita, calendario/lista-de-espera, equipo/horas-de-trabajo-del-equipo]
status: draft
updated: 2026-09-25
---

# No puedo agendar a esta hora

**En resumen:** casi siempre es una de cuatro cosas: el barbero no tiene horario a esa hora (la franja sale sombreada), hay un bloqueo, el filtro **Equipo\*** está en **Trabajando** y no muestra al barbero, o el barbero no está activado en esa sucursal. Revísalas en ese orden.

## 1. La franja está sombreada: el barbero no tiene horario

En la vista **Dia**, las horas fuera del horario del barbero salen sombreadas. Su horario se define en **Equipo › Horas de trabajo**: una cuadrícula de barbero por día con su horario («6am - 6pm») o «No está trabajando», y cada casilla se puede editar.

1. En la barra del **Calendario**, toca el botón de ajustes (el icono de deslizadores).
   ![El menú de ajustes del calendario, con Horario de trabajo y Lista de espera](/assets/es/calendario/las-acciones-del-calendario/menu-ajustes.png)
2. Elige **Horario de trabajo**. Te lleva a **Equipo › Horas de trabajo**.
3. Busca al barbero y el día, y dale horario a esa hora.

Lo cuenta [Horas de trabajo del equipo](/ayuda/equipo/horas-de-trabajo-del-equipo).

> [!NOTE]
> Si la app deja crear una cita en una franja sombreada, o la rechaza, todavía no está comprobado. Ten en cuenta que el selector **Fecha & Hora** del panel **Crear cita** ofrece horas desde las 8:00 AM (**Mañana**) hasta las 11:30 PM (**Noche**), de media en media hora.

## 2. Hay un bloqueo

Un bloqueo (**Enfermo**, **Vacaciones**, **Almuerzo**, **Reunión**…) tapa esas horas del barbero. Se crea desde la vista **Mes**, tocando el nombre del barbero y **Crear bloque de tiempo**. Si el barbero ya está disponible, hay que quitar el bloqueo. Lo cuenta [Bloquear el calendario de un barbero](/ayuda/calendario/bloquear-el-calendario).

## 3. El filtro Equipo* no muestra al barbero

El calendario abre con **Equipo\*** en **Trabajando**: solo salen los barberos con horario ese día. Si el barbero no tiene horario, no ves su columna y no puedes tocar su franja.

1. Toca **Equipo\*** en la barra de arriba.
   ![El filtro Equipo abierto, con Todo el equipo, Trabajando y los barberos](/assets/es/calendario/ver-el-dia-la-agenda-o-el-mes/equipo-filtro.png)
2. Elige **Todo el equipo** o el nombre del barbero.

Si el día está vacío, el calendario lo dice: «Nadie trabaja este día», con los botones **Ver todo el equipo** y **Configurar horarios**. Lo cuenta [Filtrar por equipo](/ayuda/calendario/filtrar-el-calendario-por-equipo).

## 4. El barbero no está activado en la sucursal

Si tampoco sale con **Todo el equipo**, el barbero no está activado en la sucursal que tienes elegida. Se activa en **Equipo › Acciones › Activar equipo dentro de esta sucursal**. Lo cuenta [Un barbero no aparece en el calendario](/ayuda/calendario/un-barbero-no-aparece-en-el-calendario).

## Lo que dice la pantalla

| Lo que ves | Qué significa | Qué hacer |
|---|---|---|
| Franja sombreada en la columna | El barbero no tiene horario a esa hora | Cambiar su horario en **Equipo › Horas de trabajo** |
| «No está trabajando» (en **Horas de trabajo**) | El barbero no trabaja ese día | Editar la casilla de ese día |
| «Nadie trabaja este día» | Con **Trabajando**, nadie tiene horario en esa fecha | **Ver todo el equipo** o **Configurar horarios** |
| No hay columna del barbero ni con **Todo el equipo** | No está activado en esta sucursal | **Activar equipo dentro de esta sucursal** |

## Preguntas frecuentes

**El cliente quiere venir a las 7:00 AM y no sale la hora.**
El selector **Fecha & Hora** empieza a las 8:00 AM. Prueba tocando la franja de las 7:00 AM en la cuadrícula, que empieza a las 06:00 AM; si el barbero tiene horario a esa hora, se abre **Crear cita** con la hora puesta.

**La hora está libre pero el barbero está ocupado con otra cosa.**
Crea un bloqueo con la categoría que corresponda (**Reunión**, **Almuerzo**…) para que se vea en el calendario.

**No hay hueco a la hora que pide el cliente.**
Anótalo en la lista de espera: lo cuenta [La lista de espera](/ayuda/calendario/lista-de-espera).
