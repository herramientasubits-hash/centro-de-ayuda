---
id: calendario/clientes-sin-preferencia-de-barbero
title: "Clientes sin preferencia de barbero: quién los atiende"
description: "Qué es un cliente sin preferencia, dónde se define el orden y qué barberos pueden tomarlo (Equipo › Ordenamiento para agendamiento sin cita y sin preferencia), y cómo se ve en la cita."
section: calendario
order: 240
roles: [owner, admin]
screens: [/team/barbers/lineup, /calendar]
keywords: [sin preferencia, cliente sin preferencia, cualquier barbero, quién atiende, orden de barberos, lineup, ordenamiento, agendamiento sin cita, turno de barberos, repartir clientes, pidió a, comisión sin preferencia, rotación]
related: [calendario/cliente-sin-cita-previa, calendario/abrir-una-cita, equipo/orden-para-clientes-sin-preferencia, equipo/orden-para-clientes-sin-cita, equipo/ficha-de-un-barbero-compensacion, equipo/ficha-de-un-barbero-opciones, metricas/clientes-preferencia-de-barbero]
status: draft
updated: 2026-09-25
---

# Clientes sin preferencia de barbero: quién los atiende

**En resumen:** un cliente sin preferencia es el que no pide a nadie: lo atiende quien esté. Qué barberos pueden tomarlo y en qué orden se define en **Equipo › Acciones › Ordenamiento para agendamiento sin cita y sin preferencia**, pestaña **Sin preferencia**. La misma pantalla tiene la pestaña **Agendamiento sin cita** para los que llegan sin agendar.

## Dónde se define el orden

1. Abre **Equipo** en el menú.
2. Toca **Acciones** y elige **Ordenamiento para agendamiento sin cita y sin preferencia**.
3. Elige la pestaña **Sin preferencia** (o **Agendamiento sin cita**, para los clientes que llegan sin agendar).
4. Cada barbero tiene un interruptor. Apaga el de quien no deba recibir estos clientes. La pantalla avisa: «Los barberos que deshabilitaste en esta pantalla no podrán tomar clientes que vengan sin cita».
5. Arrastra las filas para cambiar el orden. Los barberos encendidos llevan número (1, 2, 3…); los apagados muestran «–».

> [!NOTE]
> Cómo usa la app ese orden al asignar un cliente (si va siempre al número 1, si rota, si mira quién está libre) todavía no está comprobado.

## Cómo se ve en la cita

Al abrir una cita, en **Resumen**, el bloque **FIDELIDAD** cuenta la relación del cliente con el barbero:

- **Pidió a Mateo**: el cliente sí eligió barbero.
- **Con Mateo 8 de 31 visitas** y **Ha visto otros barberos 3**: cuántas veces se ha atendido con ese barbero y con cuántos otros.
- «Gestionado por Carlos» y «Esta cita no es con Carlos, que es quien lo gestiona.»: qué barbero lleva al cliente, aunque hoy lo atienda otro.

![El bloque Fidelidad del detalle de la cita, con Pidió a y las visitas por barbero](/assets/es/calendario/abrir-una-cita/resumen.png)

En la ficha del cliente, pestaña **Citas**, cada cita lleva **Sin preferencia: Sí** o **No**. Lo cuenta [Citas de un cliente](/ayuda/clientes/citas-de-un-cliente).

## Qué cambia en el pago del barbero

- Al barbero por comisión se le paga con su **Comisión de clientes que llegan sin preferencia**, en su ficha, pestaña **Compensación**. Es distinta de la **Comisión básica** y de la **Comisión de clientes sin cita**.
- Al barbero de renta se le aplica la **Deducción por citas sin preferencia**, en su ficha, pestaña **Pagos**. La idea: ese cliente lo trajo la barbería, no el barbero.

Lo cuenta [Compensación de un barbero](/ayuda/equipo/ficha-de-un-barbero-compensacion).

## Sin preferencia no es lo mismo que sin cita

| | Sin preferencia | Sin cita previa |
|---|---|---|
| Qué es | No pidió barbero | No agendó; llegó y ya |
| Dónde se ordena | Pestaña **Sin preferencia** | Pestaña **Agendamiento sin cita** |
| Comisión | **Comisión de clientes que llegan sin preferencia** | **Comisión de clientes sin cita** |

Un cliente puede ser las dos cosas a la vez: llega sin cita y le da igual quién lo atienda.

## Lo que dice la pantalla

| Texto | Qué significa |
|---|---|
| «Los barberos que deshabilitaste en esta pantalla no podrán tomar clientes que vengan sin cita» | Un barbero apagado no recibe estos clientes |
| «1, 2, 3…» · «–» | El puesto en el orden; «–» es un barbero apagado |
| **Pidió a Carlos** | El cliente eligió a ese barbero |
| **Puede tomar nuevos clientes** (ficha, **Opciones**) | Otro interruptor: si el barbero recibe clientes nuevos |

## Preguntas frecuentes

**Un barbero nuevo no recibe clientes sin preferencia.**
Revisa que su interruptor esté encendido en la pestaña **Sin preferencia** y que en su ficha, **Opciones**, esté encendido **Puede tomar nuevos clientes**.

**¿Quién puede cambiar el orden?**
Por defecto, solo el dueño tiene el permiso **Ordenar barberos agendas**. Se puede dar a otra persona en su ficha, pestaña **Permisos**.

**¿Dónde veo cuántos clientes piden barbero y cuántos no?**
En **Métricas › Clientes**, la tarjeta de preferencia de barbero. Mira [Preferencia de barbero](/ayuda/metricas/clientes-preferencia-de-barbero).
