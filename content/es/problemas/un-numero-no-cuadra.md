---
id: problemas/un-numero-no-cuadra
title: "Un número no cuadra con lo que espero"
description: "Una lista para revisar antes de dar por malo un número de Métricas, Transacciones o Nómina: la sucursal, el periodo, la pestaña, los filtros, las citas por cobrar y el perfil con el que entraste."
section: problemas
order: 40
roles: [owner, admin]
screens: [/, /payroll, /transactions]
keywords: [no cuadra, número incorrecto, cifra mal, no coincide, falta dinero, ventas no cuadran, nómina no cuadra, transacciones no cuadran, métricas mal, comparar, revisar cifras, por cobrar, sucursal equivocada, periodo]
related: [nomina/la-nomina-no-coincide-con-lo-que-espero, metricas/filtrar-por-sucursal-equipo-y-periodo, transacciones/filtrar-transacciones, transacciones/las-cinco-tarjetas-de-transacciones, sucursales/ver-todas-las-sucursales-a-la-vez, acceso-y-cuenta/tienes-dos-perfiles]
status: review
updated: 2026-09-25
---

# Un número no cuadra con lo que espero

**En resumen:** casi siempre son dos pantallas mirando cosas distintas: otra sucursal, otro periodo, otra pestaña o un filtro que quedó puesto. Revisa estas seis cosas antes de dar el número por malo.

## Qué revisar, en orden

1. **La sucursal.** Arriba, el nombre de la sucursal decide qué ves. **Métricas** y **Nómina** tienen además su propio filtro de sucursal. Si comparas Métricas con **Todas las sucursales** contra Transacciones en una sola, no cuadran ([Ver todas las sucursales a la vez](/ayuda/sucursales/ver-todas-las-sucursales-a-la-vez)).
2. **El periodo.** Cada pantalla tiene el suyo:
   - **Métricas**: **Hoy / Semana / Mes**, con flechas para moverte ([Filtrar por sucursal, equipo y periodo](/ayuda/metricas/filtrar-por-sucursal-equipo-y-periodo)).
   - **Transacciones**: **DESDE** y **HASTA**, por defecto del día 1 del mes a hoy.
   - **Nómina**: el **Rango de fechas**, por defecto el ciclo de pago («01 SEP - 15 SEP · 15 Dias»).
   ![Los filtros de Métricas: sucursal, equipo y periodo](/assets/es/metricas/filtrar-por-sucursal-equipo-y-periodo/filtros.png)
3. **La pestaña.** En **Nómina**, un barbero de renta no está en **Barbero por comisión**. En **Métricas**, las ventas están en **Negocio** y la retención en **Clientes**.
4. **Los filtros.** En **Transacciones**, **ESTADO DE LA CUENTA** y **ESTADO DE LA CITA** pueden haber quedado en algo distinto de **Todos**. Ponlos en **Todos** y toca **Aplicar** ([Filtrar Transacciones](/ayuda/transacciones/filtrar-transacciones)). En **Métricas**, el filtro **Todo el equipo** puede estar en un solo barbero.
5. **Las citas por cobrar.** Lo que sigue **POR COBRAR** en Transacciones no está cobrado: **FACTURADO** lo incluye, **COBRADO** no, y la Nómina tampoco ([Las cinco tarjetas de Transacciones](/ayuda/transacciones/las-cinco-tarjetas-de-transacciones)).
   ![La pantalla Transacciones con las cinco tarjetas](/assets/es/transacciones/como-leer-transacciones/pantalla.png)
6. **El perfil.** Con el perfil de barbero (**Barber comission**) Métricas muestra solo las cifras de esa persona: $120,000 frente a los $10,260,490 de todo el equipo en la cuenta de prueba ([Tengo dos perfiles](/ayuda/acceso-y-cuenta/tienes-dos-perfiles)).

## Comparaciones que sí cuadran

| Compara | Con | Misma sucursal y mismo rango |
|---|---|---|
| **Métricas › Negocio › Ventas** | **Transacciones › FACTURADO** | Sí |
| **Transacciones › PROPINAS** | La columna **Propinas** de **Nómina** | Sí |
| **Nómina › fila All › Venta de servicios** | **Transacciones**, cuentas **COBRADA** | Sí |

> [!NOTE]
> Que estas parejas coincidan exactamente (por ejemplo, si Ventas de Métricas incluye lo por cobrar o solo lo cobrado, y si la Nómina cuenta la fecha de la cita o la del cobro) está pendiente de confirmar con el equipo. Úsalas como primera comprobación, no como prueba final.

## Si es la nómina

Sigue la lista de [La nómina no coincide con lo que espero](/ayuda/nomina/la-nomina-no-coincide-con-lo-que-espero): rango, sucursal, pestaña, citas sin cobrar, deducciones de **Configuración › Comisiones** y los porcentajes propios del barbero.

## Si sigue sin cuadrar

Escríbenos con la pantalla, la sucursal, el rango, la cifra que ves y la que esperabas, y una cita de ejemplo ([Cómo contactar a soporte](/ayuda/problemas/como-contactar-a-soporte)).

## Preguntas frecuentes

**¿Por qué Completadas, Canceladas y No asistió de un cliente no suman 100 %?**
Porque las citas pendientes no entran en ninguno de los tres.

**Transacciones me muestra menos cuentas que ayer.**
Revisa el rango: por defecto empieza el día 1 del mes. Si cambió el mes, las cuentas del mes pasado ya no entran.

**Un cliente sale como «Walk in».**
Es una cuenta de un cliente sin registrar. Suma igual en las tarjetas ([Cuentas de clientes sin registro](/ayuda/transacciones/clientes-walk-in-en-transacciones)).
