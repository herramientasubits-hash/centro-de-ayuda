---
id: calendario/reservas-online-como-las-ve-tu-cliente
title: "Reservas online: cómo las ve tu cliente"
description: "La página pública de reserva a la que llega tu cliente desde tu enlace o tu sitio web: qué le pide y qué ve de tu barbería."
section: calendario
order: 250
roles: [owner, admin, recepcion]
screens: [/online-booking, /calendar]
keywords: [reserva online, cita online, cómo reserva el cliente, enlace de reserva, página de reserva, book now, reservar por internet, el cliente agenda solo, widget]
related: [configuracion/agendamiento-online-que-es, configuracion/enlace-directo-de-reserva-y-utm, calendario/citas-que-crea-el-cliente, servicios/servicio-publico-o-privado]
status: draft
updated: 2026-09-25
---

# Reservas online: cómo las ve tu cliente

**En resumen:** tu cliente reserva desde una página pública de Barberlytics, sin entrar a la app. Llega por el **Enlace directo de reserva** o por el botón de tu sitio web, escribe su celular y sigue los pasos. La cita entra al calendario como **Cita online**.

## Cómo llega

- Por el **Enlace directo de reserva** que copias en **Configuración › Agendamiento online** ([El enlace directo de reserva](/ayuda/configuracion/enlace-directo-de-reserva-y-utm)).
- Por el botón **Book now** o el flujo incrustado en tu sitio ([Reservas en tu sitio web](/ayuda/configuracion/agendamiento-online-panel-lateral)).

## Lo primero que ve

![La página pública de reserva: pide el celular y muestra el horario de la barbería](/assets/es/calendario/reservas-online-como-las-ve-tu-cliente/paso-1.png)

- El título **Reserva tu cita** y la frase «Ingresa tu número de teléfono para empezar. Lo usaremos para encontrar tu perfil y enviarte novedades de tu cita.»
- El campo **Número de teléfono** con el país (**🇨🇴 +57**, **🇺🇸 +1**, **🇻🇪 +58**) y la nota «Solo para novedades de tu cita.»
- El nombre de tu sucursal, «Abierto hoy: 08:00 AM a 11:50 PM» y «¿Necesitas ayuda? Llama +57 …» (el teléfono de la sucursal).
- El botón **Continuar**, que se activa al escribir el celular.
- Abajo: «Reserva segura», «Toma menos de 1 minuto», «Nuestros clientes confían».

En el celular se ve igual, a una columna.

![La página de reserva en un celular](/assets/es/calendario/reservas-online-como-las-ve-tu-cliente/celular.png)

## Los pasos siguientes

Después del celular, el cliente elige servicio, barbero, día y hora, y confirma. La imagen de ejemplo de **Configuración › Agendamiento online** muestra ese panel: «Welcome back», la sucursal, «Your last service», «Your last barber», «Choose your appointment time» con los días y las horas disponibles.

> [!NOTE]
> Los pasos después de **Continuar** no se recorrieron, porque exigen un celular real (la página busca el perfil del cliente con él). Qué ve al elegir servicio y hora, si puede pagar en línea y qué confirmación recibe todavía no está documentado.

## Lo que decide qué ve tu cliente

| Lo que configuras | Dónde | Efecto en la reserva |
|---|---|---|
| Servicios y productos **Público** | Servicios / Productos | Solo los públicos aparecen |
| Orden de las categorías | Servicios › Acciones › **Orden de agendamiento** | El orden en que las ve |
| **Visibilidad para agendamiento** de cada barbero | Equipo › ficha › Perfil | Si el barbero se puede elegir |
| Horas de trabajo y bloqueos | Equipo › Horas de trabajo; Calendario | Las horas disponibles |
| **Períodos de cierre del negocio** | Configuración | «No se pueden realizar reservas en línea cuando su negocio está cerrado.» |
| Cliente **bloqueado** | Clientes › Bloquear cliente | No puede reservar online |

## Preguntas frecuentes

**¿El cliente necesita una cuenta?**
No. Solo su celular. La página dice que lo usa «para encontrar tu perfil y enviarte novedades de tu cita».

**¿Cómo sé que una cita vino de aquí?**
En el detalle de la cita y en la ficha del cliente aparece **Tipo de agendamiento: Cita online**, y en Métricas cuenta en **Cita online** y en **Reservas online**.
