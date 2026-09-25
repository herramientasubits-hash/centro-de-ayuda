---
id: nomina/como-funciona-la-nomina
title: "Cómo funciona la nómina"
description: "Qué muestra la pantalla Nómina: las tres pestañas según cómo se le paga a cada barbero, los filtros de sucursal y fechas, la fila All y el botón Descargar."
section: nomina
order: 10
roles: [owner, admin]
screens: [/payroll]
keywords: [nómina, liquidación, cuánto le pago a cada barbero, pago a barberos, quincena, barbero por comisión, barbero de renta, barbero por salario, pago neto, fila all, total del equipo, descargar nómina, filtros de nómina]
related: [nomina/nomina-barberos-por-comision, nomina/nomina-barberos-de-renta, nomina/nomina-barberos-por-salario, nomina/filtrar-la-nomina-por-fechas-y-sucursal, nomina/descargar-la-nomina, nomina/ciclo-de-pago, equipo/comision-o-renta]
status: review
updated: 2026-09-25
---

# Cómo funciona la nómina

**En resumen:** **Nómina** te dice cuánto le corresponde a cada barbero en un periodo. Tiene una pestaña por forma de pago (**Barbero por comisión**, **Barbero de renta** y **Barbero por salario**), filtros de **Sucursal** y **Rango de fechas**, una fila **All** con el total del equipo y una fila por barbero que termina en **Pago neto**. Con **Descargar** te la llevas en CSV, Excel o PDF.

La pantalla dice: «En este apartado podrás tener trazabilidad y control de tu barbería».

![La pantalla Nómina: las tres pestañas, la barra de filtros y la tabla de barberos por comisión](/assets/es/nomina/como-funciona-la-nomina/pantalla.png)

## Lo que ves de arriba abajo

1. **Descargar**, arriba a la derecha, con **CSV**, **Excel** y **PDF** ([Descargar la nómina](/ayuda/nomina/descargar-la-nomina)).
2. Las tres pestañas. Cada barbero está en una sola, según cómo se le paga:

| Pestaña | Para quién | Lo que cierra la fila |
|---|---|---|
| **Barbero por comisión** | Barberos que ganan un porcentaje de lo que venden | **Pago neto** |
| **Barbero de renta** | Barberos que te pagan una **Renta fija** por la silla | **Pago neto** (puede salir negativo) |
| **Barbero por salario** | Barberos con **Salario** fijo más comisión de productos | **Pago neto** |

3. La barra **Filtros**: **Sucursal** y **Rango de fechas**, con el periodo y sus flechas **‹ ›** al lado y el número de días («15 Dias») ([Filtrar la nómina](/ayuda/nomina/filtrar-la-nomina-por-fechas-y-sucursal)).
4. La tabla. La primera fila, **All**, suma a todo el equipo de esa pestaña. Debajo, una fila por barbero con su foto o su inicial.

## De dónde salen los números

- Las ventas vienen de las citas y ventas **cobradas** en el periodo ([Cobrar una cita](/ayuda/calendario/cobrar-una-cita)). Una cita que sigue **Por cobrar** en **Transacciones** no está aquí.
- Los porcentajes de cada barbero están en su ficha: **Compensación** para los de comisión ([La ficha de un barbero por comisión: compensación](/ayuda/equipo/ficha-de-un-barbero-compensacion)) y **Pagos** para los de renta ([La ficha de un barbero de renta: pagos](/ayuda/equipo/ficha-de-un-barbero-de-renta-pagos)).
- Lo que se resta antes de calcular la comisión se decide en **Configuración › Comisiones** ([Cómo se calcula una comisión](/ayuda/nomina/como-se-calcula-una-comision)).
- Cada cuánto se paga y qué día empieza el periodo, en **Configuración › Nomina** ([El ciclo de pago](/ayuda/nomina/ciclo-de-pago)).

> [!TIP]
> Antes de pagar, abre **Transacciones** con **Estado de la cuenta › Por cobrar** y el mismo rango. Lo que siga sin cobrar no suma en la nómina.

## Preguntas frecuentes

**¿Cuánto le pago a Carlos esta quincena?**
Abre la pestaña de su tipo, revisa el **Rango de fechas** y mira su columna **Pago neto**.

**¿Por qué no veo a un barbero?**
Puede estar en otra pestaña (es de renta y estás en comisión), en otra sucursal, o inactivo en la sucursal elegida.

**¿Quién ve la nómina?**
El dueño y el administrador de la locación. Los barberos y la recepción no tienen **Nómina** en el menú ([Qué secciones del menú ve cada rol](/ayuda/roles-y-permisos/que-ve-cada-rol-en-el-menu)).
