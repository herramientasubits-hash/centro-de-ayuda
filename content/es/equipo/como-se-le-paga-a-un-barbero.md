---
id: equipo/como-se-le-paga-a-un-barbero
title: "Cómo se le paga a cada tipo de barbero"
description: "Las tres formas de pagar a un barbero en Barberlytics: comisión por servicio y por producto, renta con deducciones y salario; dónde se define cada una y dónde se ve el resultado."
section: equipo
order: 290
roles: [owner, admin]
screens: [/payroll, /team/barbers/view/*]
keywords: [cómo se le paga a un barbero, pago a barberos, comisión, renta, salario, sueldo fijo, porcentaje por servicio, comisión por producto, base de la renta, deducciones, tipo de compensación, nómina, pago neto, alquiler de silla]
related: [equipo/comision-o-renta, equipo/ficha-de-un-barbero-compensacion, equipo/ficha-de-un-barbero-de-renta-pagos, nomina/como-funciona-la-nomina, nomina/nomina-barberos-por-salario, configuracion/comisiones-que-se-deduce]
status: draft
updated: 2026-09-25
---

# Cómo se le paga a cada tipo de barbero

**En resumen:** hay tres formas. **Comisión**: un porcentaje de cada servicio según el tipo de cliente, más una compensación por productos. **Renta**: el barbero paga una base y la barbería le descuenta un porcentaje por los clientes que le puso. **Salario**: un tipo de compensación con su propia pestaña en **Nómina**. Cada forma se define en la ficha del barbero y el resultado por periodo sale en **Nómina**.

## Comisión

Se define en la ficha del barbero por comisión, pestaña **Compensación**, con **Tipo de compensación\*** en **Comisión**. La **Lógica de comisión** dice «Un porcentaje fijo del servicio.» Solo **Comisión básica\*** es obligatoria.

| Campo | Cuándo se aplica |
|---|---|
| **Comisión básica** | La comisión normal por un servicio. |
| **Comisión de cliente recurrente** | Cuando el cliente ya ha venido antes. |
| **Comisión de clientes sin cita** | Cuando el cliente llegó sin agendar. |
| **Comisión de clientes que llegan sin preferencia** | Cuando el cliente no pidió a un barbero. |
| **Comisión de nuevos clientes** | Cuando el cliente viene por primera vez. |

Aparte va la compensación por venta de **Producto**, en la misma pestaña.

![La pestaña Compensación de un barbero por comisión con los cinco porcentajes](/assets/es/equipo/ficha-de-un-barbero-compensacion/ver.png)

En **Nómina**, pestaña **Barbero por comisión**, ves por persona **Servicios**, **Venta de servicios**, **Venta de productos**, **Comisión de servicios**, **Comisión de productos**, **Total comisiones**, **Impuestos**, **Propinas** y **Pago neto**.

Lo explica [La ficha de un barbero por comisión: compensación](/ayuda/equipo/ficha-de-un-barbero-compensacion).

## Renta

Se define en la ficha del barbero de renta, pestaña **Pagos**, en **Lógica de pago**.

| Campo | Qué es |
|---|---|
| **Base de la renta** | Lo que el barbero paga por su puesto. En **Nómina** es la **Renta fija**. |
| **Deducción por cita sin agendamiento** | Porcentaje que se le descuenta por cada cliente que llegó sin cita. |
| **Deducción por clientes nuevos** | Porcentaje por cada cliente que viene por primera vez. |
| **Deducción por citas sin preferencia** | Porcentaje por cada cliente que no pidió barbero. |

![La pestaña Pagos de un barbero de renta con la Lógica de pago](/assets/es/equipo/ficha-de-un-barbero-de-renta-pagos/ver.png)

En **Nómina**, pestaña **Barbero de renta**, salen las mismas columnas que en comisión más **Renta fija**. Si la renta supera lo generado, el **Pago neto** sale negativo: es lo que el barbero le debe a la barbería.

Lo explica [La ficha de un barbero de renta: pagos](/ayuda/equipo/ficha-de-un-barbero-de-renta-pagos).

## Salario

En la pestaña **Compensación** de un barbero por comisión, el **Tipo de compensación\*** ofrece **Salario**. En **Nómina** hay una pestaña **Barbero por salario** con **Venta de productos**, **Comisión de productos**, **Impuestos**, **Propinas**, **Salario** y **Pago neto**.

> [!NOTE]
> Qué campos pide **Salario** y qué es **Comisión de escala** (la tercera opción del **Tipo de compensación**) todavía no está comprobado. Se completará con un barbero de prueba.

## Lo que se resta antes

En **Configuración › Comisiones** hay cuatro interruptores que restan antes de calcular la comisión: **Deducir descuentos**, **Deducir impuestos**, **Deducir el costo del servicio** y **Deducir el costo del producto**. Mira [Comisiones: qué se deduce](/ayuda/configuracion/comisiones-que-se-deduce).

## Dónde ves el resultado

En **Nómina**, con **Filtros** de sucursal y **Rango de fechas** (por defecto la quincena) y una pestaña por tipo. Mira [Cómo funciona la nómina](/ayuda/nomina/como-funciona-la-nomina).

## Preguntas frecuentes

**¿Cuál me conviene?**
Depende de quién trae al cliente. Mira [Barbero por comisión o de renta: cuál elegir](/ayuda/equipo/comision-o-renta).

**¿Puedo pagar comisión y un fijo a la vez?**
El **Tipo de compensación** es uno solo por barbero: **Comisión**, **Comisión de escala** o **Salario**. Qué combina cada uno todavía no está documentado.

**¿Las propinas entran en la comisión?**
En **Nómina** las **Propinas** son una columna aparte y suman al **Pago neto**. Cómo se reparten lo cuenta [Cómo funciona la nómina](/ayuda/nomina/como-funciona-la-nomina).
