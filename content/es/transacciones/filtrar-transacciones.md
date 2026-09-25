---
id: transacciones/filtrar-transacciones
title: "Filtrar por fechas, estado de la cuenta y estado de la cita"
description: "Cómo usar DESDE, HASTA, ESTADO DE LA CUENTA y ESTADO DE LA CITA para ver solo las cuentas que te interesan, y por qué hace falta tocar Aplicar."
section: transacciones
order: 60
group: "Buscar y revisar"
roles: [owner, admin]
screens: [/transactions]
keywords: [filtrar transacciones, filtros, desde, hasta, rango de fechas, estado de la cuenta, estado de la cita, por cobrar, cobrada, devuelta, agendada, llegó, en silla, cerrada, terminada, cancelada, aplicar, cuentas de hoy, cuentas del mes]
related: [transacciones/como-leer-transacciones, transacciones/estados-de-una-cuenta, transacciones/las-cinco-tarjetas-de-transacciones, transacciones/buscar-una-transaccion, calendario/estados-de-una-cita]
status: review
updated: 2026-09-25
---

# Filtrar por fechas, estado de la cuenta y estado de la cita

**En resumen:** en **Transacciones** eliges un rango con **DESDE** y **HASTA**, un **ESTADO DE LA CUENTA** y un **ESTADO DE LA CITA**, y tocas **Aplicar**. Las tarjetas, el encabezado y la tabla cambian a la vez.

![La barra de filtros de Transacciones: DESDE, HASTA, ESTADO DE LA CUENTA, ESTADO DE LA CITA y Aplicar](/assets/es/transacciones/filtrar-transacciones/filtros.png)

## Pasos

1. Toca **Transacciones** en el menú.
2. En **DESDE** y **HASTA**, elige las fechas. Por defecto van del día 1 del mes hasta hoy.
3. En **ESTADO DE LA CUENTA**, elige **Todos**, **Por cobrar**, **Cobrada** o **Devuelta**.
4. En **ESTADO DE LA CITA**, elige **Todos**, **Agendada**, **Llegó**, **En silla**, **Cerrada**, **Terminada** o **Cancelada**.
5. Toca **Aplicar**.

El encabezado confirma lo que estás viendo: «Mi Barbería · 01 SEP – 25 SEP 2026 · 38 cuentas».

## Dos filtros de estado distintos

| Filtro | De qué habla | Opciones |
|---|---|---|
| **ESTADO DE LA CUENTA** | Del dinero: si se cobró o no | **Todos** · **Por cobrar** · **Cobrada** · **Devuelta** |
| **ESTADO DE LA CITA** | De la cita: en qué paso va | **Todos** · **Agendada** · **Llegó** · **En silla** · **Cerrada** · **Terminada** · **Cancelada** |

Los explica [Estados de una cuenta](/ayuda/transacciones/estados-de-una-cuenta) y [Los estados de una cita](/ayuda/calendario/estados-de-una-cita).

## Combinaciones útiles

- **Lo que falta por cobrar hoy**: **DESDE** y **HASTA** en hoy, **ESTADO DE LA CUENTA › Por cobrar**.
- **Citas terminadas que nadie cobró**: **ESTADO DE LA CITA › Terminada** y **ESTADO DE LA CUENTA › Por cobrar**.
- **Cuentas de citas canceladas**: **ESTADO DE LA CITA › Cancelada**, para ver si alguna quedó cobrada y hay que devolverla.

## Preguntas frecuentes

**Cambié un filtro y no pasó nada.**
Toca **Aplicar**. Los filtros no se aplican solos.

**¿Puedo filtrar por barbero o por método de pago?**
No hay filtro para eso. Ordena la tabla por **Atendió** o por **Método** tocando el título de la columna.

**¿El filtro se guarda al salir?**
No se vio que se guarde. Al volver, el rango vuelve al mes en curso.
