---
id: transacciones/metodos-de-pago-aceptados
title: "Métodos de pago que puedes cobrar"
description: "Los cuatro métodos del checkout (efectivo, tarjeta, link de pago y pago mixto), qué necesita cada uno en Configuración y cómo sale cada cobro en la columna Método de Transacciones."
section: transacciones
order: 90
roles: [owner, admin]
screens: [/transactions, /devices, /payment-integration]
keywords: [métodos de pago, efectivo, tarjeta, crédito, débito, datáfono, terminal, link de pago, pago mixto, stripe, dispositivos de pago, integración de pagos, columna método, cash, cómo cobrar, formas de pago]
related: [calendario/cobrar-una-cita, calendario/cobrar-con-propina, configuracion/dispositivos-de-pago, configuracion/integracion-de-pagos-con-stripe, configuracion/tarifa-por-uso-de-tarjeta, transacciones/como-leer-transacciones]
status: draft
updated: 2026-09-25
---

# Métodos de pago que puedes cobrar

**En resumen:** en el checkout de una cita eliges entre **Efectivo**, **Crédito/Débito**, **Link de pago** y **Pago mixto**. El efectivo no necesita nada; la tarjeta necesita un dispositivo en **Configuración › Dispositivos de pago**; el link de pago, la **Integración de pagos** con Stripe. En **Transacciones**, la columna **Método** dice con cuál se cobró.

![La pantalla Cobrar con los cuatro métodos de pago y el resumen a la derecha](/assets/es/calendario/cobrar-una-cita/checkout.png)

## Los cuatro métodos

| Método | Qué es | Qué necesita |
|---|---|---|
| **Efectivo** | El cliente paga en caja | Nada |
| **Crédito/Débito** | El cliente pasa la tarjeta por tu terminal | Un dispositivo registrado. Al elegirlo, la app pide «Elige un dispositivo»; si no hay, **Agregar dispositivo** |
| **Link de pago** | Le mandas un enlace y paga desde su celular | La **Integración de pagos** con Stripe en Configuración |
| **Pago mixto** | Una parte con un método y otra con otro | Lo que necesite cada parte |

Con **Link de pago** y **Pago mixto**, la app pregunta primero la propina para el barbero ([Cobrar con propina](/ayuda/calendario/cobrar-con-propina)). Los pasos completos están en [Cobrar una cita](/ayuda/calendario/cobrar-una-cita).

## Lo que se configura antes

- **Configuración › Dispositivos de pago** (`/devices`): la lista de terminales y el botón **Agregar dispositivo** ([Dispositivos de pago](/ayuda/configuracion/dispositivos-de-pago)).
- **Configuración › Integración de pagos** (`/payment-integration`): la conexión con **Stripe**, con **Probar conexión** y **Guardar** ([Integración de pagos con Stripe](/ayuda/configuracion/integracion-de-pagos-con-stripe)).
- **Configuración › Tarifa por uso de tarjeta de crédito**: si quieres cobrar un recargo por pagar con tarjeta ([Tarifa por uso de tarjeta](/ayuda/configuracion/tarifa-por-uso-de-tarjeta)).

## Cómo sale en Transacciones

La columna **Método** muestra el método con el que se cobró la cuenta. Se ha visto «CASH» para efectivo y «—» cuando la cuenta sigue **POR COBRAR**.

> [!NOTE]
> Qué texto muestra **Método** para tarjeta, link de pago y pago mixto no se ha visto todavía: en la cuenta de prueba solo había cobros en efectivo. Tampoco se completó un cobro con **Efectivo** para ver qué confirma la app.

## Preguntas frecuentes

**No me aparece Crédito/Débito con ningún dispositivo.**
Registra tu terminal en **Configuración › Dispositivos de pago** con **Agregar dispositivo**.

**¿Puedo cobrar por transferencia?**
No hay un método llamado así. Usa **Efectivo** y anótalo en la cita, o **Link de pago** si tienes Stripe.

**¿Dónde veo cuánto entró por cada método?**
En **Métricas › Negocio**, el bloque **Distribución de pagos** ([Distribución de pagos, reembolsos y descuentos](/ayuda/metricas/distribucion-de-pagos-reembolsos-y-descuentos)). En **Transacciones** puedes ordenar la tabla por **Método**.
