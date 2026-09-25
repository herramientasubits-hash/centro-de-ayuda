---
id: servicios/costo-y-precio-de-un-servicio
title: "Costo del servicio y precio básico"
description: "Qué diferencia hay entre el Costo del servicio y el Precio básico, dónde se ven, cuál cobra el cliente y cómo el costo puede descontarse antes de la comisión."
section: servicios
order: 30
group: "Cómo funciona"
roles: [owner, admin]
screens: [/services, /services/create, /services/*]
keywords: [costo del servicio, precio básico, precio del servicio, cuánto cobrar, margen, ganancia por servicio, insumos, valor del servicio, deducir el costo del servicio, comisión, precio de lista, precio por barbero, cuánto me cuesta un corte]
related: [servicios/crear-un-servicio, servicios/crear-un-servicio-equipo, servicios/precio-para-clientes-nuevos-y-de-lealtad, configuracion/comisiones-que-se-deduce, nomina/como-funciona-la-nomina, equipo/ficha-de-un-barbero-perfil]
status: draft
updated: 2026-09-25
---

# Costo del servicio y precio básico

**En resumen:** el **Precio básico** es lo que cobras al cliente. El **Costo del servicio** es lo que te cuesta a ti hacerlo. El cliente solo ve el precio; el costo es un dato tuyo, que puede descontarse antes de calcular la comisión del barbero.

## Dónde están

Los dos campos están en la pestaña **General** de un servicio, al crearlo o al editarlo. **Precio básico** es obligatorio; **Costo del servicio** es opcional.

![La pestaña General de Crear Servicio con los campos Costo del servicio y Precio básico](/assets/es/servicios/crear-un-servicio/general.png)

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Costo del servicio** | No | Lo que te cuesta hacer el servicio: la cera, el tinte, la cuchilla. No lo ve el cliente. |
| **Precio básico** | Sí | Lo que cobras. Es el precio que sale en la lista de servicios, en el calendario y en la reserva online. |

## El precio básico es el punto de partida

El **Precio básico** es el precio de lista. A partir de él puedes afinar:

- **Por barbero:** en la pestaña **Equipo**, cada barbero puede tener su **Precio del servicio**. Si está vacío, cobra el básico. Mira [Crear un servicio: quién lo hace](/ayuda/servicios/crear-un-servicio-equipo).
- **Por tipo de cliente:** también por barbero, un **Precio para clientes nuevos** y un **Precio de fidelidad (frecuencia de visita)**. Mira [Precio para clientes nuevos y precio de lealtad](/ayuda/servicios/precio-para-clientes-nuevos-y-de-lealtad).

Por eso, al agendar, el panel muestra el precio con «& SUBIENDO»: el precio final depende del barbero y del cliente.

En **Ver servicio**, el bloque **Datos** muestra el **Valor** (el precio básico, por ejemplo $30.00) y la **Duración del servicio (minutos)**.

## Para qué sirve el costo

El costo no cambia lo que cobras. Sirve para tus cuentas y para la comisión: en **Configuración › Comisiones** hay un interruptor **Deducir el costo del servicio**, que resta el costo antes de calcular la comisión del barbero. Con él encendido, la comisión se calcula sobre lo que queda después de restar el costo; apagado, sobre el precio. Mira [Comisiones: qué se deduce](/ayuda/configuracion/comisiones-que-se-deduce) y [Cómo funciona la nómina](/ayuda/nomina/como-funciona-la-nomina).

> [!NOTE]
> El texto de ayuda que acompaña al campo **Costo del servicio** y la fórmula exacta de la comisión con **Deducir el costo del servicio** todavía no están comprobados. Se completarán con el equipo.

## Ejemplo

«Corte clásico»: **Precio básico** 30, **Costo del servicio** 2 (insumos). Carlos tiene **Precio del servicio** 35 en la pestaña Equipo. Un cliente que reserva con Carlos paga 35; uno que reserva con un barbero sin precio propio paga 30. El costo de 2 solo aparece en tus cuentas.

## Preguntas frecuentes

**¿El cliente ve el costo?**
No. El cliente ve el precio. El costo es un dato tuyo.

**¿Qué pasa si dejo el costo vacío?**
Nada cambia para el cliente. Si tienes encendido **Deducir el costo del servicio**, no habrá nada que restar.

**¿Dónde cambio el precio de un servicio que ya existe?**
En la lista, **Acciones › Editar**, pestaña **General**. Mira [Editar un servicio](/ayuda/servicios/editar-un-servicio).
