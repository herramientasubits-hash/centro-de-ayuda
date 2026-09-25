---
id: calendario/bloquear-el-calendario
title: "Bloquear el calendario de un barbero"
description: "Crear un bloque de tiempo para que no se agende a un barbero: almuerzo, reunión, enfermedad, festivo, vacaciones o un bloqueo del negocio."
section: calendario
order: 210
roles: [owner, admin, barbero]
screens: [/calendar]
keywords: [bloquear calendario, bloque de tiempo, bloqueo, almuerzo, reunión, enfermo, festivo, vacaciones, no agendar, cerrar agenda, bloqueo personal, bloqueo del negocio, crear bloqueo]
related: [calendario/vacaciones-de-un-barbero, calendario/ver-el-dia-la-agenda-o-el-mes, calendario/no-puedo-agendar-a-esta-hora, configuracion/conoce-configuracion]
status: draft
updated: 2026-09-25
---

# Bloquear el calendario de un barbero

**En resumen:** un **bloque de tiempo** deja una franja del barbero como no disponible. Se crea desde la vista **Mes**, en el menú del barbero, con **Crear bloque de tiempo**.

## Pasos

1. En el **Calendario**, cambia la vista a **Mes**.
2. Arriba, toca el nombre del barbero y elige **Crear bloque de tiempo**.
   ![El menú del barbero en la vista Mes, con Crear bloque de tiempo](/assets/es/calendario/bloquear-el-calendario/menu.png)
3. Se abre **Crear bloqueo**. Completa:
   ![El formulario Crear bloqueo](/assets/es/calendario/bloquear-el-calendario/panel.png)

| Campo | Opciones |
|---|---|
| **Categoria\*** | **Enfermo**, **Vacaciones**, **Festivo**, **Almuerzo**, **Reunión**, **Bloqueo del negocio**, **Bloqueo personal** |
| **Repetición\*** | **No se repite**, **Diariamente**, **Semanalmente**, **Mensualmente**, **Personalizado** |
| **Fecha de inicio\*** y **Fecha Fin\*** | El primer y el último día del bloqueo |
| **Hora de inicio\*** y **Hora de cierre\*** | La franja de cada día |
| **Descripción** | Un texto libre, por ejemplo «Cita médica» |

4. Toca **Crear**.

> [!TIP]
> Para un almuerzo de todos los días, usa **Almuerzo** con **Repetición: Diariamente** y la franja de la hora de comer.

## Qué pasa después

El bloqueo aparece en el calendario del barbero y nadie puede agendar en esa franja. Según lo que tengas activado en **Configuración › Centro de notificaciones**, el equipo recibe un aviso: «Agenda: Se ha creado un bloque de tiempo al barbero … en su calendario. Revisa la razón del bloqueo.»

> [!NOTE]
> Cómo se ve el bloqueo en la cuadrícula y cómo se edita o se borra todavía no está comprobado. Se completará con un bloqueo de prueba.

## Preguntas frecuentes

**¿Y si cierra toda la barbería un día?**
Usa **Configuración › Períodos de cierre del negocio**. El bloqueo de esta pantalla es por barbero.

**¿Cómo marco vacaciones?**
Con la categoría **Vacaciones** y las fechas de inicio y fin. Mira [Vacaciones de un barbero](/ayuda/calendario/vacaciones-de-un-barbero).

**¿Solo se puede crear desde la vista Mes?**
En las pantallas revisadas, **Crear bloque de tiempo** solo apareció en el menú del barbero de la vista **Mes**. En **Dia**, el menú trae **Ver barbero** y **Editar perfil de barbero**.
