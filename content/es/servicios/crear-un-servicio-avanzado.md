---
id: servicios/crear-un-servicio-avanzado
title: "Crear un servicio: opciones avanzadas"
description: "La pestaña Avanzado de un servicio: restringir los días y horas en que se puede reservar, permitir otra cita durante el servicio (Multiservicio) y añadir tiempo de preparación."
section: servicios
order: 60
roles: [owner, admin]
screens: [/services, /services/create, /services/*]
keywords: [pestaña avanzado, restricciones de tiempo, restringir horario de un servicio, solo por la mañana, solo ciertos días, multiservicio, dos citas a la vez, tiempo de preparación, tiempo entre citas, limpiar la silla, color del servicio, cronograma de servicios]
related: [servicios/crear-un-servicio, servicios/crear-un-servicio-equipo, servicios/editar-un-servicio, calendario/no-puedo-agendar-a-esta-hora]
status: draft
updated: 2026-09-25
---

# Crear un servicio: opciones avanzadas

**En resumen:** en la pestaña **Avanzado** puedes limitar los días y horas en que se reserva el servicio (**Restricciones de tiempo para reservas**), permitir que el barbero tome otra cita mientras lo hace (**Multiservicio**) y reservar unos minutos antes o después (**Tiempo de preparacion**). Termina con **Guardar**.

## Pasos

1. Completa **General** y **Equipo** ([Crear un servicio: datos generales](/ayuda/servicios/crear-un-servicio)). Se habilita la pestaña **Avanzado**.
   ![La pestaña Avanzado con Restricciones de tiempo para reservas y el Detalle del cronograma de servicios](/assets/es/servicios/crear-un-servicio-avanzado/avanzado.png)
2. Si el servicio solo se puede reservar en ciertos días u horas, toca **Añadir una Restriccion de Tiempo**, elige **Seleccione un día**, **Hora de inicio** y **Hora de fin**, y toca **Agregar**. Repite para cada día.
   ![El formulario de una restricción con el día, la hora de inicio, la hora de fin y el botón Agregar](/assets/es/servicios/crear-un-servicio-avanzado/restriccion.png)
3. En **Detalle del cronograma de servicios**, enciende **Multiservicio** o **Tiempo de preparacion** si los necesitas.
4. Toca **Guardar**.

## Restricciones de tiempo para reservas

Sirven para servicios que no se hacen a cualquier hora: un color que solo se hace por la mañana, o un servicio que solo ofreces los sábados.

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Seleccione un día** | Sí | El día de la semana al que aplica la restricción. |
| **Hora de inicio** | Sí | Desde qué hora se puede reservar ese día. |
| **Hora de fin** | Sí | Hasta qué hora se puede reservar ese día. |

Toca **Agregar** para sumar la restricción a la lista. Sin restricciones, el servicio se reserva en todo el horario del barbero.

## Detalle del cronograma de servicios

| Interruptor | Qué dice la pantalla | Para qué sirve |
|---|---|---|
| **Multiservicio** | «Esta opción le permite programar otra cita con otro servicio durante su servicio.» | Para servicios con tiempos muertos, como un color mientras actúa: el barbero puede atender otra cita en ese rato. |
| **Tiempo de preparacion** | «Esta opción le permite tener un tiempo al inicio o final del servicio para tener un tiempo para preparar o finalizar el servicio.» | Para apartar unos minutos antes o después del servicio, por ejemplo para limpiar la silla, sin que se puedan reservar. |

> [!NOTE]
> Esta pestaña se leyó desde **Editar** de un servicio ya creado. Cómo se ven **Multiservicio** y **Tiempo de preparacion** en el calendario una vez encendidos, cuántos minutos aparta el tiempo de preparación y qué pasa al tocar **Guardar** todavía no está comprobado. Se completará con un servicio de prueba.

## Preguntas frecuentes

**¿La restricción vale para la reserva online o también para mi equipo?**
El bloque se llama **Restricciones de tiempo para reservas**. Si también frena a tu equipo al agendar desde el calendario, todavía no está comprobado. Mira [No puedo agendar a esta hora](/ayuda/calendario/no-puedo-agendar-a-esta-hora).

**¿Puedo poner dos franjas el mismo día?**
Cada restricción tiene un día, una hora de inicio y una de fin. Añade una restricción por franja.

**¿Cuándo uso Tiempo de preparación en vez de alargar la duración?**
Alarga la **Duración del servicio (minutos)** cuando el tiempo es parte del servicio y lo cobras. Usa **Tiempo de preparacion** cuando es tiempo tuyo, antes o después, que no quieres que se reserve.
