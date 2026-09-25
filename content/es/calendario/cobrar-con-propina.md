---
id: calendario/cobrar-con-propina
title: "Cobrar con propina"
description: "Dónde se agrega la propina al cobrar una cita: la línea Propina del resumen y la pantalla Añadir propina con montos fijos, Sin propina y Personalizar."
section: calendario
order: 190
group: "Cobrar y vender"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [propina, cobrar con propina, añadir propina, tip, propina para el barbero, sin propina, personalizar propina, monto de propina, checkout, pagar cita, link de pago, pago mixto, propinas]
related: [calendario/cobrar-una-cita, calendario/aplicar-un-descuento, calendario/lista-de-cobros, configuracion/propinas-opciones-y-comportamiento, metricas/ticket-promedio-cancelacion-y-propinas, transacciones/como-leer-transacciones]
status: draft
updated: 2026-09-25
---

# Cobrar con propina

**En resumen:** al cobrar, la propina tiene su propia línea en el resumen (**Propina**) y una pantalla propia, «Añadir propina», con montos sugeridos, **Sin propina** y **Personalizar**. La viste con **Link de pago** y **Pago mixto**. Con **Efectivo** no se ha comprobado.

## Pasos

1. Abre la cita y, en **Resumen**, toca **Pagar cita**. Se abre el panel «Resumen» con **Servicios**, **Total de servicios y productos**, **Propina**, **Impuesto** y **Pedido total**.
   ![El panel Pagar cita con las líneas de servicios, propina, impuesto y pedido total](/assets/es/calendario/cobrar-una-cita/pagar-cita.png)
2. Toca **Abrir checkout completo**. Se abre la pantalla «Cobrar». A la derecha se repite el **Resumen** con el **Pedido total**.
   ![La pantalla Cobrar con los métodos de pago y el resumen a la derecha](/assets/es/calendario/cobrar-una-cita/checkout.png)
3. En **Métodos de pago** («Elige tu método de pago»), toca **Link de pago** o **Pago mixto**.
4. Aparece «Añadir propina»: «Selecciona la propina para el barbero», «Para Carlos», «¿Deseas agregar propina?».
5. Elige una opción:
   - **$10.00**, **$15.00** o **$20.00**. Cada botón muestra el total que queda con esa propina.
   - **Sin propina**.
   - **Personalizar**, para escribir otro monto.
6. Sigue con el cobro. Lo cuenta [Cobrar una cita](/ayuda/calendario/cobrar-una-cita).

> [!NOTE]
> Lo que pasa después de elegir la propina, y si con **Efectivo** y **Crédito/Débito** aparece la misma pantalla «Añadir propina», todavía no está comprobado. **Efectivo** no se abrió porque cobraría la cita; **Crédito/Débito** pide primero elegir un dispositivo de pago.

## Dónde se ve la propina después

- En **Transacciones**, la tarjeta **Propinas** suma las del periodo.
- En **Métricas › Negocio**, el porcentaje de propinas está junto al ticket promedio. Mira [Ticket promedio, cancelación y propinas](/ayuda/metricas/ticket-promedio-cancelacion-y-propinas).

## Lo que dice la pantalla

| Texto | Qué significa |
|---|---|
| **Propina** (línea del resumen) | Lo que se suma por propina; empieza en cero |
| «Selecciona la propina para el barbero» · «Para Carlos» | La propina va al barbero de la cita |
| «¿Deseas agregar propina?» | La pregunta de la pantalla «Añadir propina» |
| **Sin propina** | Sigue sin agregar nada |
| **Personalizar** | Escribir un monto distinto a los sugeridos |

## Preguntas frecuentes

**¿Puedo cambiar los montos sugeridos?**
Las opciones de propina se definen en **Configuración › Propinas**. Lo cuenta [Propinas: opciones y comportamiento](/ayuda/configuracion/propinas-opciones-y-comportamiento).

**¿El barbero puede recibir propina?**
Solo si en su ficha, pestaña **Opciones**, está encendido **Puede recibir propinas**.

**¿La propina paga impuesto?**
En el resumen, **Propina** e **Impuesto** son líneas separadas. Cómo se calcula el impuesto lo define **Configuración › Impuestos**.
