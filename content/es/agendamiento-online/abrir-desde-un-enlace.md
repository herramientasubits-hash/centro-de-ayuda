---
id: agendamiento-online/abrir-desde-un-enlace
title: "Reservas en tu sitio web: abrir desde tu propio botón"
description: "La opción «Abrir desde enlace» del agendamiento online: la reserva se abre desde un botón o enlace que ya tienes en tu sitio web, sin botón flotante."
section: agendamiento-online
order: 110
group: "Llevar la reserva a tus canales"
roles: [owner, admin]
screens: [/online-booking]
keywords: [abrir desde enlace, mi propio botón, reservar desde un enlace, agendamiento online, reservas en mi sitio web, widget, data-trigger, copiar código, botón de reserva, reserva online, sitio web, id del enlace, reservar cita]
related: [agendamiento-online/que-es, agendamiento-online/panel-lateral, agendamiento-online/embebido, agendamiento-online/enlace-directo-y-utm]
status: review
updated: 2026-09-25
---

# Reservas en tu sitio web: abrir desde tu propio botón

**En resumen:** con **Abrir desde enlace** no hay botón flotante: la reserva se abre desde un botón o enlace que ya tienes en tu sitio, como el «Reservar cita» de tu menú. Copias el código con **Copiar**, le pones a tu enlace el id que el código espera y lo pegas en tu página.

## Dónde está

**Configuración › Configuración de la cuenta › Agendamiento online**. La tarjeta dice: «Ajustar la forma en que los clientes pueden reservar y gestionar sus citas en línea». En la pantalla «Reserva online», busca el bloque «Agrega las reservas a tu sitio web» y la opción **Abrir desde enlace**.

## Qué hace

La pantalla lo explica así: «Sin botón flotante: el flujo de reserva se abre desde un enlace o botón que ya tengas, como el "Reservar cita" de tu menú.»

## Pasos

1. En «Agrega las reservas a tu sitio web», elige **Abrir desde enlace**.
2. Toca **Copiar**.
   ![La opción Abrir desde enlace con su fragmento de código y el botón Copiar](/assets/es/agendamiento-online/abrir-desde-un-enlace/fragmento.png)
3. Pega el fragmento en tu sitio web.
4. Conecta tu botón. La pantalla lo dice así: «Cambia #reservar por el id de tu enlace. Si no tiene, añádeselo: `<a id="reservar" href="#">Reservar cita</a>`.»

El fragmento es el mismo del panel lateral con un dato más, `data-trigger`, que apunta al id de tu enlace. Aquí TU-ID y TU-PERFIL son solo nombres de ejemplo: copia siempre el tuyo desde la pantalla con **Copiar**.

```html
<a id="reservar" href="#">Reservar cita</a>
<div data-bl-widget="booking" data-uuid="TU-ID" data-profile="TU-PERFIL" data-timezone="America/Bogota" data-mode="floating" data-trigger="#reservar"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

> [!TIP]
> Si tu enlace ya tiene un id, por ejemplo `id="agendar"`, cambia `#reservar` por `#agendar` en el fragmento y no toques tu enlace.

## Preguntas frecuentes

**¿En qué se diferencia del panel lateral?**
El **Panel lateral** pone su propio botón flotante «Book now». **Abrir desde enlace** usa el botón o enlace que tú ya tienes. Mira [Reservas en tu sitio web: botón «Book now» flotante](/ayuda/agendamiento-online/panel-lateral).

**¿Y de la reserva embebida?**
La **Reserva embebida** se ve desde el principio dentro de una página, sin botón ni panel. Mira [Reservas en tu sitio web: incrustar en una página](/ayuda/agendamiento-online/embebido).

**¿Tengo que saber programar?**
La pantalla te da el código listo, pero hay que ponerle un id a tu enlace. Si otra persona administra tu sitio, envíale el fragmento y esta página.
