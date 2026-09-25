---
id: calendario/vacaciones-de-un-barbero
title: "Vacaciones de un barbero"
description: "Bloquear varios días de la agenda de un barbero con un bloqueo de categoría Vacaciones: desde la vista Mes, Crear bloque de tiempo, fechas y horas."
section: calendario
order: 230
roles: [owner, admin, barbero]
screens: [/calendar]
keywords: [vacaciones, vacaciones de un barbero, bloquear agenda, bloquear varios días, días libres, permiso, ausencia, enfermo, incapacidad, crear bloqueo, bloque de tiempo, no recibir citas, cerrar agenda]
related: [calendario/bloquear-el-calendario, calendario/no-puedo-agendar-a-esta-hora, calendario/filtrar-el-calendario-por-equipo, equipo/horas-de-trabajo-del-equipo, configuracion/periodos-de-cierre, configuracion/notificaciones-del-calendario]
status: draft
updated: 2026-09-25
---

# Vacaciones de un barbero

**En resumen:** en la vista **Mes**, toca el nombre del barbero, elige **Crear bloque de tiempo** y, en «Crear bloqueo», pon **Categoria\*** en **Vacaciones**, la **Fecha de inicio\*** y la **Fecha Fin\*** de las vacaciones, las horas y **Crear**. Si cierra toda la barbería, no es un bloqueo: es un periodo de cierre en **Configuración**.

## Pasos

1. En el **Calendario**, elige la vista **Mes**.
2. Arriba, elige al barbero que se va de vacaciones, por ejemplo **Carlos**.
   ![La vista Mes con el selector de barbero y la ocupación por día](/assets/es/calendario/ver-el-dia-la-agenda-o-el-mes/mes.png)
3. Toca su nombre. Se abre un menú con **Ver barbero**, **Editar perfil de barbero** y **Crear bloque de tiempo**.
   ![El menú del barbero con la opción Crear bloque de tiempo](/assets/es/calendario/bloquear-el-calendario/menu.png)
4. Toca **Crear bloque de tiempo**. Se abre el panel «Crear bloqueo».
   ![El panel Crear bloqueo con categoría, repetición, fechas, horas y descripción](/assets/es/calendario/bloquear-el-calendario/panel.png)
5. En **Categoria\***, elige **Vacaciones**.
6. Deja **Repetición\*** en **No se repite**.
7. Pon la **Fecha de inicio\*** (el primer día libre) y la **Fecha Fin\*** (el último).
8. Pon la **Hora de inicio\*** y la **Hora de cierre\***. Para cubrir el día completo, usa la hora en que el barbero empieza y la hora en que termina su jornada.
9. Si quieres, escribe una **Descripción**, por ejemplo «Vacaciones de Carlos».
10. Toca **Crear**.

> [!NOTE]
> Lo que pasa después de tocar **Crear** (cómo se ve el bloqueo en la cuadrícula, si avisa de citas que ya estaban en esas fechas, cómo se edita o se borra) todavía no está comprobado.

> [!IMPORTANT]
> Antes de crear el bloqueo, revisa en la vista **Dia** si el barbero ya tiene citas en esas fechas y muévelas o cancélalas. Qué hace la app con las citas que queden dentro de un bloqueo todavía no está comprobado.

## Las categorías del bloqueo

**Categoria\*** ofrece **Enfermo**, **Vacaciones**, **Festivo**, **Almuerzo**, **Reunión**, **Bloqueo del negocio** y **Bloqueo personal**. Para una incapacidad usa **Enfermo**; para un día festivo de un solo barbero, **Festivo**. Los bloqueos de todos los días, como el almuerzo, se explican en [Bloquear el calendario de un barbero](/ayuda/calendario/bloquear-el-calendario).

## Si cierra toda la barbería

Un bloqueo es de un barbero. Si la barbería entera cierra (festivo, inventario, reforma), usa **Configuración › Períodos de cierre del negocio** y **Añadir periodo cerrado**. Lo cuenta [Períodos de cierre](/ayuda/configuracion/periodos-de-cierre).

## Quién puede hacerlo

Depende del permiso **Bloquear calendario**. Por defecto, el dueño, el administrador, la recepción y el barbero de renta lo tienen completo; el barbero por comisión solo puede **Ver**. Se ajusta por persona en su ficha, pestaña **Permisos**.

## Lo que dice la pantalla

| Texto | Qué significa |
|---|---|
| **Categoria\*** | El motivo del bloqueo; obligatorio |
| **Fecha de inicio\*** · **Fecha Fin\*** | El primer y el último día bloqueados |
| **Hora de inicio\*** · **Hora de cierre\*** | Desde y hasta qué hora de cada día |
| **Descripción** | Texto libre, opcional |

## Preguntas frecuentes

**¿Puedo avisarle al equipo?**
En **Configuración › Centro de notificaciones**, en el grupo **Calendario**, hay avisos de bloqueos y de vacaciones por correo y push. Mira [Notificaciones del calendario](/ayuda/configuracion/notificaciones-del-calendario).

**¿Y si en vez de bloquear le quito el horario esos días?**
También sirve: en **Equipo › Horas de trabajo** la casilla del día puede quedar en «No está trabajando». El bloqueo tiene la ventaja de guardar el motivo.

**¿Los clientes pueden agendar online en esas fechas?**
Todavía no está comprobado. Crea el bloqueo con tiempo para que la agenda online lo tenga en cuenta.
