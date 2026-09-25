---
id: servicios/precio-para-clientes-nuevos-y-de-lealtad
title: "Precio para clientes nuevos y precio de lealtad"
description: "Qué son el Precio para clientes nuevos y el Precio de fidelidad de un servicio, dónde se ponen (por barbero, en la pestaña Equipo o en la ficha del barbero) y cómo se relacionan con la comisión."
section: servicios
order: 90
roles: [owner, admin]
screens: [/services, /services/*, /team/barbers/view/*]
keywords: [precio para clientes nuevos, nuevo cliente precio, precio de lealtad, precio de fidelidad, frecuencia de visita, precio por tipo de cliente, promoción primera visita, descuento cliente frecuente, precio por barbero, comisión dividida, comisión extra, división de la comisión, cliente nuevo, cliente recurrente]
related: [servicios/crear-un-servicio-equipo, servicios/costo-y-precio-de-un-servicio, equipo/ficha-de-un-barbero-servicios, equipo/ficha-de-un-barbero-perfil, equipo/ficha-de-un-barbero-compensacion, nomina/como-funciona-la-nomina, clientes/tipos-de-cliente]
status: draft
updated: 2026-09-25
---

# Precio para clientes nuevos y precio de lealtad

**En resumen:** además del **Precio básico**, cada barbero puede cobrar un servicio distinto según el cliente: un **Precio para clientes nuevos** para la primera visita y un **Precio de fidelidad (frecuencia de visita)** para quien vuelve seguido. Se ponen por barbero, en la pestaña **Equipo** del servicio o en la ficha del barbero. Vacío significa que cobra el precio del servicio.

## Dónde se ponen

Hay dos caminos y llegan al mismo dato.

### Desde el servicio

En **Servicios**, abre el servicio con **Acciones › Editar** y ve a la pestaña **Equipo**. En la fila de cada barbero están los campos.

![La pestaña Equipo de un servicio con los campos de precio por barbero](/assets/es/servicios/crear-un-servicio-equipo/equipo.png)

### Desde el barbero

En **Equipo**, abre la ficha del barbero con **Acciones › Ver** y ve a la pestaña **Servicios**. Ahí están todos los servicios, uno debajo del otro, con los mismos campos. Es el camino corto cuando ajustas a una persona. Mira [La ficha de un barbero: perfil](/ayuda/equipo/ficha-de-un-barbero-perfil).

## Los campos, uno por uno

Los nombres cambian un poco entre las dos pantallas. Son los mismos datos.

| En el servicio (pestaña Equipo) | En la ficha del barbero (pestaña Servicios) | Qué es |
|---|---|---|
| **Precio del servicio** | **Precio del servicio** | Lo que cobra este barbero por el servicio. Vacío = el **Precio básico**. |
| **Precio para clientes nuevos** | **Nuevo cliente precio** | Lo que cobra a un cliente que viene por primera vez. Sirve para una promoción de primera visita. |
| **Precio de fidelidad (frecuencia de visita)** | **Precio de lealtad** | Lo que cobra a un cliente que vuelve con frecuencia. Sirve para premiar al cliente fiel. |
| **Duración del servicio (minutos)** | **Tiempo** | Cuánto tarda este barbero con el servicio. |
| **Division de la comision** | **Comisión dividida** | Cómo se reparte la comisión de este servicio para este barbero. |
| **Comisión extra** | **Comisión extra** | Una comisión adicional por este servicio para este barbero. |

Ninguno es obligatorio. Lo que dejes vacío usa lo del catálogo.

## Ejemplo

«Corte clásico», **Precio básico** 30. Para Carlos pones **Precio para clientes nuevos** 25 y **Precio de fidelidad** 27. Laura viene por primera vez con Carlos: 25. Vuelve cada dos semanas: con el tiempo, 27. Un cliente que reserva con otro barbero sin precios propios: 30.

> [!NOTE]
> Qué cuenta la app como cliente «nuevo» y a partir de qué frecuencia aplica el precio de lealtad, y cómo entran **Comisión dividida** y **Comisión extra** en el cálculo de la nómina, todavía no está comprobado. Se completará con el equipo. Los tipos de cliente que muestra la app (Nuevo, Retenido, Frecuente, VIP) los explica [Los tipos de cliente](/ayuda/clientes/tipos-de-cliente).

## Cómo se relaciona con la comisión

La comisión de un barbero por comisión también cambia según el cliente: en su ficha, pestaña **Compensación**, hay una **Comisión básica**, una **Comisión de cliente recurrente**, una **Comisión de clientes sin cita**, una **Comisión de clientes que llegan sin preferencia** y una **Comisión de nuevos clientes**. El precio por tipo de cliente y la comisión por tipo de cliente son dos ajustes distintos: uno decide lo que paga el cliente; el otro, lo que se lleva el barbero. Mira [Cómo funciona la nómina](/ayuda/nomina/como-funciona-la-nomina).

## Preguntas frecuentes

**¿Puedo poner un precio de cliente nuevo para toda la barbería de una vez?**
Los campos son por barbero. Para que aplique a todos, rellénalo en la fila de cada barbero (o en la ficha de cada uno).

**¿El cliente ve estos precios al reservar online?**
El precio que ve depende del barbero que elige y de su historial. Al agendar desde el calendario, el panel lo muestra como «$30.00 & SUBIENDO».

**¿Dónde cambio la comisión, no el precio?**
En la ficha del barbero, pestaña **Compensación** (comisión) o **Pagos** (renta). Mira [Cómo funciona la nómina](/ayuda/nomina/como-funciona-la-nomina).
