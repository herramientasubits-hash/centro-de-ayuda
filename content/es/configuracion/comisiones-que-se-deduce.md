---
id: configuracion/comisiones-que-se-deduce
title: "Comisiones: qué se resta antes de calcular"
description: "Los cuatro interruptores de Configuración › Comisiones: si los descuentos, los impuestos, el costo del servicio y el costo del producto se restan del precio antes de calcular la comisión del barbero."
section: configuracion
order: 140
roles: [owner, admin]
screens: [/team-commission]
keywords: [comisiones, cálculo de comisiones, deducir descuentos, deducir impuestos, deducir el costo del servicio, deducir el costo del producto, base de la comisión, qué se resta, comisión del barbero, comisión sobre el precio, comisión neta, porcentaje del barbero, nómina]
related: [nomina/como-se-calcula-una-comision, equipo/ficha-de-un-barbero-compensacion, equipo/comision-o-renta, servicios/costo-y-precio-de-un-servicio, configuracion/impuestos, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Comisiones: qué se resta antes de calcular

**En resumen:** el porcentaje de cada barbero se define en su ficha. **Configuración › Comisiones** decide sobre qué monto se aplica ese porcentaje: si del precio de venta se restan primero los descuentos, los impuestos, el costo del servicio y el costo del producto. Son cuatro interruptores y valen para todo el equipo.

## Dónde está

**Configuración › Equipo › Comisiones**. La tarjeta dice: «Configurar el cálculo de comisiones para los miembros del equipo». La pantalla añade: «Esta es una configuración general, pero se puede ajustar para cada ubicación en la sección correspondiente.»

![La pantalla de Comisiones con los cuatro interruptores de deducción](/assets/es/configuracion/comisiones-que-se-deduce/pantalla.png)

## Los cuatro interruptores

| Interruptor | Qué hace si está encendido |
|---|---|
| **Deducir descuentos** | «Deducir descuentos del precio de venta antes de calcular la comisión.» El barbero cobra comisión sobre lo que el cliente pagó de verdad, no sobre el precio de lista. |
| **Deducir impuestos** | Los impuestos se restan del precio antes de calcular la comisión. |
| **Deducir el costo del servicio** | El costo del servicio (lo que te cuesta darlo) se resta antes. |
| **Deducir el costo del producto** | El costo de compra del producto vendido se resta antes. |

## Un ejemplo

Un corte cuesta $50.000, el cliente tuvo $5.000 de descuento y el barbero tiene 50 % de comisión.

- Con **Deducir descuentos** apagado: comisión sobre $50.000 → $25.000.
- Con **Deducir descuentos** encendido: comisión sobre $45.000 → $22.500.

Cada interruptor encendido baja la base y, por tanto, la comisión.

## Pasos

1. Enciende o apaga cada interruptor.
2. Toca **Guardar**.

> [!NOTE]
> Qué muestra la app al tocar **Guardar**, si el cambio afecta a las nóminas ya calculadas y dónde se ajusta por ubicación todavía no está comprobado.

## Preguntas frecuentes

**¿Aquí pongo el porcentaje de cada barbero?**
No. El porcentaje va en la ficha de cada persona, pestaña **Compensación**. Mira [La ficha de un barbero: compensación](/ayuda/equipo/ficha-de-un-barbero-compensacion). Aquí solo decides sobre qué monto se aplica.

**¿De dónde sale el costo del servicio?**
De cada servicio, en **Servicios**. Mira [Costo y precio de un servicio](/ayuda/servicios/costo-y-precio-de-un-servicio). Si un servicio no tiene costo, no hay nada que restar.

**¿Esto aplica a los barberos de renta?**
Los de renta no cobran comisión: pagan una base y la barbería les descuenta un porcentaje por ciertas citas. Mira [Comisión o renta](/ayuda/equipo/comision-o-renta).
