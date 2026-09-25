---
id: configuracion/dispositivos-de-pago
title: "Dispositivos de pago"
description: "Cómo registrar los datáfonos con los que cobras con tarjeta: nombre, serial, TPN y clave, para elegirlos al cobrar con Crédito/Débito."
section: configuracion
order: 60
group: "Configuración de la cuenta"
roles: [owner, admin]
screens: [/devices]
keywords: [dispositivos de pago, datáfono, terminal, terminal de pago, agregar dispositivo, serial del dispositivo, tpn, clave de autenticación, cobrar con tarjeta, crédito débito, elige un dispositivo, pos, lector de tarjeta, conectar datáfono]
related: [calendario/cobrar-una-cita, configuracion/integracion-de-pagos-con-stripe, configuracion/tarifa-por-uso-de-tarjeta, configuracion/conoce-configuracion]
status: draft
updated: 2026-09-25
---

# Dispositivos de pago

**En resumen:** en **Configuración › Dispositivos de pago** registras los datáfonos con los que cobras con tarjeta. Cuando cobras una cita con **Crédito/Débito**, la app te pide elegir uno de estos dispositivos.

## Dónde está

**Configuración › Configuración de la cuenta › Dispositivos de pago**. La tarjeta dice: «Conecta tu sistema a los dispositivos que te permitirán procesar los pagos». La pantalla explica: «Aquí encontrarás el listado de todos los dispositivos de pago que tienes disponibles».

![La lista de dispositivos de pago con el botón Agregar dispositivo](/assets/es/configuracion/dispositivos-de-pago/pantalla.png)

## Agregar un dispositivo

1. Toca **Agregar dispositivo**.
   ![El panel para agregar un dispositivo con el nombre, el serial, el TPN y la clave](/assets/es/configuracion/dispositivos-de-pago/formulario.png)
2. Llena los campos. El serial, el TPN y la clave vienen con el datáfono o te los da quien te lo instaló.

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Nombre del dispositivo** | Sí | Cómo lo vas a reconocer al cobrar, por ejemplo «Datáfono recepción». |
| **Serial del dispositivo** | Sí | El número de serie del aparato. |
| **TPN del dispositivo** | Sí | El número de terminal que identifica el datáfono ante el procesador de pagos. |
| **Clave de autenticación del dispositivo** | No | La clave que el procesador entrega para conectar el datáfono. |

3. Toca **Guardar**. Para salir sin registrar nada, **Cancelar**.

> [!NOTE]
> Qué muestra la app al tocar **Guardar**, cómo se edita o se borra un dispositivo y qué procesadores de pago acepta todavía no está comprobado.

## Preguntas frecuentes

**¿Dónde se usa el dispositivo?**
Al cobrar una cita con **Abrir checkout completo › Crédito/Débito**, la app muestra «Elige un dispositivo». Ahí también está **Agregar dispositivo**. Mira [Cobrar una cita (check out)](/ayuda/calendario/cobrar-una-cita).

**¿Esto es lo mismo que la integración con Stripe?**
No. El dispositivo es el datáfono físico de la barbería. Stripe es para recibir pagos en línea. Mira [Integración de pagos con Stripe](/ayuda/configuracion/integracion-de-pagos-con-stripe).

**No encuentro el TPN de mi datáfono.**
Pídeselo a quien te instaló o te vendió el aparato. Es un dato del procesador de pagos, no de Barberlytics.
