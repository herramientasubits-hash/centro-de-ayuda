---
id: configuracion/impuestos
title: "Impuestos: cómo agregarlos y cómo se aplican"
description: "Cómo crear un grupo de impuestos con uno o varios impuestos (por ejemplo IVA) para que se cobren en caja y salgan en los recibos y los informes."
section: configuracion
order: 100
group: "Ventas"
roles: [owner, admin]
screens: [/sales-taxes]
keywords: [impuestos, iva, tasa de impuestos, grupo de impuestos, añadir impuesto, nombre fiscal, impuesto en caja, impuesto en el cobro, impuesto en el recibo, porcentaje de impuesto, cobrar iva, impuestos por sucursal, tax, impoconsumo]
related: [configuracion/precios-moneda-y-calculo-de-impuestos, configuracion/comisiones-que-se-deduce, calendario/cobrar-una-cita, transacciones/ver-el-detalle-de-una-cuenta, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Impuestos: cómo agregarlos y cómo se aplican

**En resumen:** en **Configuración › Impuestos** creas los impuestos que se cobran en caja, por ejemplo el IVA. Se agrupan: un grupo puede tener uno o varios impuestos, y cada uno sale por separado en el recibo y en los informes. Si el precio ya incluye el impuesto o no, se decide en **Configuración › Precios**.

## Dónde está

**Configuración › Ventas › Impuestos**. La tarjeta dice: «Administrar las tasas de impuestos que se aplican a los artículos vendidos en el momento del pago». La pantalla explica: «Gestiona las tasas de impuestos que se aplican a los artículos vendidos en caja. Esta es una configuración general, pero se puede ajustar para cada ubicación en la sección correspondiente.»

![La lista de impuestos de la barbería con el botón Añadir nuevo](/assets/es/configuracion/impuestos/pantalla.png)

Debajo está la lista: «Aquí encontrarás el listado de todos los impuestos de tu barbería.»

## Agregar un impuesto

1. Toca **Añadir nuevo** o **Añadir impuesto**.
2. Se abre el panel «Agregar un nuevo grupo de impuesto». Dice: «Combine varios impuestos en un grupo y cada impuesto se mostrará individualmente en los recibos de ventas y los informes.»
   ![El panel Agregar un nuevo grupo de impuesto con el nombre del grupo, el nombre fiscal y la tasa](/assets/es/configuracion/impuestos/formulario.png)
3. Llena los campos:

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Nombre del grupo** | Sí | Cómo se llama el conjunto, por ejemplo «Impuestos Colombia». |
| **Nombre fiscal** | Sí | El nombre del impuesto tal como debe salir en el recibo, por ejemplo «IVA». |
| **Tasa de impuestos** | No | El porcentaje, por ejemplo 19. |

4. Si el grupo lleva más de un impuesto, toca **Añadir impuesto** para sumar otra línea.
5. Toca **Guardar**. Para salir sin crear nada, **Cancelar**.

> [!NOTE]
> Qué muestra la app al tocar **Guardar**, cómo se edita o se borra un impuesto, cómo se asigna un grupo a un servicio o producto y dónde se ajusta por ubicación todavía no está comprobado.

## Dónde se ve el impuesto

Al cobrar una cita, el resumen muestra la línea **Impuesto** antes del **Pedido total**. Mira [Cobrar una cita (check out)](/ayuda/calendario/cobrar-una-cita). La cuenta queda en **Transacciones** con su detalle.

## Preguntas frecuentes

**Mis precios ya tienen el IVA incluido.**
Entonces en **Configuración › Precios** elige **Los precios incluyen impuestos**. Así el impuesto se separa del precio en vez de sumarse. Mira [Precios: moneda y si el precio incluye impuestos](/ayuda/configuracion/precios-moneda-y-calculo-de-impuestos).

**¿Para qué sirve agrupar impuestos?**
Para cobrar dos a la vez, por ejemplo un impuesto nacional y uno local, y que cada uno salga por su lado en el recibo.

**¿El impuesto afecta la comisión del barbero?**
Solo si en **Configuración › Comisiones** está encendido **Deducir impuestos**. Mira [Comisiones: qué se resta antes de calcular](/ayuda/configuracion/comisiones-que-se-deduce).
