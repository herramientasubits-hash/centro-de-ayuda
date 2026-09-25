---
id: configuracion/integracion-de-pagos-con-stripe
title: "Integración de pagos con Stripe"
description: "Cómo conectar tu barbería con Stripe para recibir pagos en línea: se elige una sucursal y se pegan las claves de Stripe."
section: configuracion
order: 140
group: "Ventas"
roles: [owner, admin]
screens: [/payment-integration]
keywords: [integración de pagos, stripe, conectar stripe, pagos en línea, pagos por internet, clave pública, clave secreta, probar conexión, link de pago, cobrar en línea, pasarela de pagos, por ubicación, seleccione una sucursal, pagos con tarjeta online]
related: [calendario/cobrar-una-cita, configuracion/dispositivos-de-pago, agendamiento-online/que-es, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Integración de pagos con Stripe

**En resumen:** en **Configuración › Integración de pagos** conectas tu barbería con Stripe, la pasarela con la que recibes pagos en línea. Se configura por sucursal: primero eliges la sucursal y luego pegas las claves que te da Stripe.

## Dónde está

**Configuración › Ventas › Integración de pagos**. La tarjeta dice: «Conecta tu barbería con Stripe para recibir pagos en linea de forma segura y rápida». La pantalla añade: «Diligencia los espacios correspondientes para hacer la integración con Stripe.»

![La pantalla de Integración de pagos pidiendo elegir una sucursal](/assets/es/configuracion/integracion-de-pagos-con-stripe/pantalla.png)

## Pasos

1. Al entrar, la app pide: «Por favor seleccione una sucursal para poder continuar». Elige la sucursal en **Por ubicación**.
2. Llena los campos con las claves de tu cuenta de Stripe:

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Clave pública de prueba** | Sí | La clave pública que Stripe te da para probar. |
| **Clave secreta de prueba** | Sí | La clave secreta de prueba. No la compartas. |

3. Toca **Probar conexión** para comprobar que las claves funcionan.
4. Toca **Guardar**.

> [!IMPORTANT]
> Las claves de Stripe son como una contraseña. No las pegues en mensajes ni se las des a nadie fuera de tu barbería.

> [!NOTE]
> La pantalla tras elegir la sucursal, qué muestran **Probar conexión** y **Guardar**, y si hay campos para las claves reales (no de prueba) todavía no está comprobado.

## Preguntas frecuentes

**¿Para qué sirve conectar Stripe?**
Para cobrar en línea, por ejemplo con **Link de pago** al cobrar una cita. Mira [Cobrar una cita (check out)](/ayuda/calendario/cobrar-una-cita).

**¿Necesito Stripe para cobrar con el datáfono?**
No. El datáfono se registra en **Configuración › Dispositivos de pago**. Mira [Dispositivos de pago](/ayuda/configuracion/dispositivos-de-pago).

**¿Dónde saco las claves?**
En tu cuenta de Stripe, en la sección de claves de API. Si no tienes cuenta de Stripe, créala primero en su sitio.
