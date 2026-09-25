---
id: equipo/ficha-de-un-barbero-compensacion
title: "La ficha de un barbero por comisión: compensación"
description: "La pestaña Compensación de un barbero por comisión: los cinco porcentajes por tipo de cliente, la compensación por producto y cómo se editan con el Tipo de compensación."
section: equipo
order: 130
group: "La ficha de un barbero"
roles: [owner, admin]
screens: [/team/barbers/view/commission/*]
keywords: [compensación, comisión del barbero, porcentaje de comisión, comisión básica, comisión de cliente recurrente, comisión de clientes sin cita, comisión sin preferencia, comisión de nuevos clientes, comisión por producto, tipo de compensación, comisión de escala, salario, cambiar comisión]
related: [equipo/como-se-le-paga-a-un-barbero, equipo/comision-o-renta, equipo/ficha-de-un-barbero-servicios, equipo/editar-a-un-miembro-del-equipo, nomina/como-funciona-la-nomina, configuracion/comisiones-que-se-deduce]
status: draft
updated: 2026-09-25
---

# La ficha de un barbero por comisión: compensación

**En resumen:** la pestaña **Compensación** dice cómo se le paga a un barbero por comisión. Tiene dos partes, **Servicio** y **Producto**. En **Servicio** hay cinco porcentajes, uno por tipo de cliente. Al editar eliges el **Tipo de compensación\***: **Comisión**, **Comisión de escala** o **Salario**.

## Cómo llegar

1. Toca **Equipo** en el menú.
2. En **Barberos**, vista **Barbero por comisión**, toca **Acciones** › **Ver Barbero por comisión** en la fila de la persona.
3. Toca la pestaña **Compensación**.
   ![La pestaña Compensación en modo ver, con los cinco porcentajes de servicio](/assets/es/equipo/ficha-de-un-barbero-compensacion/ver.png)

## Qué ves

Dos botones: **Servicio** y **Producto**.

**Servicio**, en porcentaje:

| Campo | Cuándo aplica |
|---|---|
| **Comisión básica** | La comisión normal por un servicio. |
| **Comisión de cliente recurrente** | Cuando el cliente ya ha venido antes. |
| **Comisión de clientes sin cita** | Cuando el cliente llegó sin agendar. |
| **Comisión de clientes que llegan sin preferencia** | Cuando el cliente no pidió a un barbero en particular. |
| **Comisión de nuevos clientes** | Cuando el cliente viene por primera vez. |

**Producto**: si no has definido nada, dice «No se ha configurado una compensación por venta de productos».

## Cómo se edita

1. En la lista, toca **Acciones** › **Editar Barbero por comisión** y abre **Compensación**.
   ![La pestaña Compensación en modo editar, con el Tipo de compensación y los cinco campos](/assets/es/equipo/ficha-de-un-barbero-compensacion/editar.png)
2. La pantalla dice: «Seleccione y active una forma de compensación por servicio y otra por producto para continuar con el proceso».
3. Elige el **Tipo de compensación\***: **Comisión**, **Comisión de escala** o **Salario**.
4. Con **Comisión**, la **Lógica de comisión** dice «Un porcentaje fijo del servicio.» y llenas los cinco campos, en %.

   | Campo | Obligatorio | Qué es |
   |---|---|---|
   | **Tipo de compensación\*** | Sí | **Comisión**, **Comisión de escala** o **Salario**. |
   | **Comisión básica\*** | Sí | Porcentaje normal por servicio. |
   | **Comisión de cliente recurrente** | No | Porcentaje cuando el cliente repite. |
   | **Comisión de clientes sin cita** | No | Porcentaje cuando llega sin agendar. |
   | **Comisión de clientes que llegan sin preferencia** | No | Porcentaje cuando no pidió barbero. |
   | **Comisión de nuevos clientes** | No | Porcentaje en la primera visita. |

5. Haz lo mismo en **Producto**.
6. Toca **Guardar**.

> [!NOTE]
> Qué campos tienen **Comisión de escala** y **Salario**, cómo se define la compensación por **Producto** y qué pasa al tocar **Guardar** todavía no está comprobado. Se completará con un barbero de prueba.

## Cómo se junta con lo demás

- Antes de aplicar el porcentaje, la app puede restar descuentos, impuestos y costos según **Configuración › Comisiones**. Mira [Comisiones: qué se deduce](/ayuda/configuracion/comisiones-que-se-deduce).
- Por servicio puedes hacer excepciones con **Comisión dividida** y **Comisión extra**, en la pestaña **Servicios**.
- El resultado por periodo lo ves en **Nómina**, pestaña **Barbero por comisión**. Mira [Cómo funciona la nómina](/ayuda/nomina/como-funciona-la-nomina).

## Preguntas frecuentes

**¿Por qué hay cinco porcentajes y no uno?**
Para que pagues distinto según quién trajo al cliente. Puedes poner el mismo número en todos si no quieres diferenciar.

**¿Puedo pagarle un sueldo fijo?**
El **Tipo de compensación** ofrece **Salario**, y en **Nómina** hay una pestaña **Barbero por salario**. Sus campos todavía no están documentados.

**¿Y la comisión por productos?**
Va en el botón **Producto** de esta misma pestaña. Si no la defines, la app dice que no está configurada.
