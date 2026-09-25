---
id: nomina/como-se-calcula-una-comision
title: "Cómo se calcula una comisión"
description: "Las piezas que usa Barberlytics para la comisión de un barbero: los cinco porcentajes por tipo de cliente de su ficha, la comisión por productos y lo que se resta antes según Configuración › Comisiones."
section: nomina
order: 30
group: "Cómo funciona"
roles: [owner, admin]
screens: [/payroll, /team-commission]
keywords: [cómo se calcula la comisión, porcentaje de comisión, comisión básica, cliente recurrente, cliente sin cita, walk-in, sin preferencia, nuevos clientes, deducir descuentos, deducir impuestos, costo del servicio, costo del producto, comisión de productos, cuánto le toca al barbero]
related: [nomina/nomina-barberos-por-comision, equipo/ficha-de-un-barbero-compensacion, equipo/ficha-de-un-barbero-servicios, configuracion/comisiones-que-se-deduce, nomina/la-nomina-no-coincide-con-lo-que-espero, calendario/cliente-sin-cita-previa]
status: draft
updated: 2026-09-25
---

# Cómo se calcula una comisión

**En resumen:** la comisión de un barbero sale de tres cosas que tú configuras: el porcentaje que le corresponde según el tipo de cliente (en su ficha, **Compensación**), el porcentaje por productos, y lo que se resta del precio antes de aplicar ese porcentaje (**Configuración › Comisiones**). El resultado se ve en **Nómina › Barbero por comisión**.

## 1. El porcentaje según el cliente

En **Equipo**, la ficha del barbero, pestaña **Compensación › Servicio**, hay cinco porcentajes:

![La pestaña Compensación de un barbero por comisión con los cinco porcentajes de servicio](/assets/es/equipo/ficha-de-un-barbero-compensacion/ver.png)

| Campo | Cuándo aplica |
|---|---|
| **Comisión básica** | El porcentaje general del barbero |
| **Comisión de cliente recurrente** | Cuando atiende a un cliente que ya venía |
| **Comisión de clientes sin cita** | Cuando el cliente llegó sin cita (el interruptor **Cliente sin cita previa** al crearla; mira [Cliente que llega sin cita previa](/ayuda/calendario/cliente-sin-cita-previa)) |
| **Comisión de clientes que llegan sin preferencia** | Cuando el cliente no pidió barbero |
| **Comisión de nuevos clientes** | Cuando es la primera visita del cliente |

La app dice que la **Lógica de comisión** es «Un porcentaje fijo del servicio.» Al editar, el **Tipo de compensación** puede ser **Comisión**, **Comisión de escala** o **Salario**.

Además, cada servicio de la pestaña **Servicios** de la ficha puede tener **Comisión dividida** y **Comisión extra** propias («--» significa que usa el valor del servicio). Lo cuenta [La ficha de un barbero: servicios y precios propios](/ayuda/equipo/ficha-de-un-barbero-servicios).

## 2. El porcentaje por productos

En **Compensación › Producto**. Si no está configurado, la pantalla dice «No se ha configurado una compensación por venta de productos» y la columna **Comisión de productos** queda en $0.00.

## 3. Lo que se resta antes

En **Configuración › Comisiones** hay cuatro interruptores. Cada uno resta algo del precio antes de aplicar el porcentaje:

| Interruptor | Qué resta |
|---|---|
| **Deducir descuentos** | El descuento que se aplicó en el cobro |
| **Deducir impuestos** | El impuesto de la venta |
| **Deducir el costo del servicio** | El **Costo del servicio** definido en el servicio ([Costo y precio de un servicio](/ayuda/servicios/costo-y-precio-de-un-servicio)) |
| **Deducir el costo del producto** | El **Precio de compra** del producto |

Con los cuatro apagados, el porcentaje se aplica sobre el precio completo.

> [!NOTE]
> La fórmula exacta (en qué orden se restan las deducciones, cómo se combinan los cinco porcentajes cuando un cliente es a la vez nuevo y sin cita, y qué hace **Comisión de escala**) está pendiente de confirmar con el equipo de Barberlytics. Este artículo solo describe las piezas que se ven en pantalla.

## Un ejemplo sencillo

Carlos tiene **Comisión básica** 20 % y los cuatro interruptores de **Configuración › Comisiones** apagados. Cobra un corte de $50,000. Su **Comisión de servicios** en la nómina es de $10,000.

## Preguntas frecuentes

**Le puse 20 % a Carlos y la nómina sale en $0.00.**
Revisa que el porcentaje esté en **Comisión básica** y no solo en uno de los otros cuatro campos, y que la cita esté **Cobrada** en **Transacciones**.

**¿La propina entra en la comisión?**
No: la propina va aparte, en su propia columna ([Las propinas en la nómina](/ayuda/nomina/propinas-en-la-nomina)).

**¿Puedo tener un porcentaje distinto por servicio?**
Sí, con **Comisión dividida** y **Comisión extra** en la pestaña **Servicios** de la ficha del barbero.
