---
id: configuracion/agendamiento-online-abrir-desde-un-enlace
title: "Reservas en tu sitio web: abrir desde tu propio botón"
description: "La opción «Abrir desde enlace» del agendamiento online: usa un enlace o botón de tu sitio web para abrir la reserva."
section: configuracion
order: 70
roles: [owner]
screens: [/online-booking]
keywords: [abrir desde enlace, mi propio botón, reservar desde un enlace, agendamiento online, reservas en mi sitio web, widget, data-trigger, copiar código, botón de reserva, reserva online, sitio web]
related: [configuracion/agendamiento-online-panel-lateral, configuracion/agendamiento-online-embebido]
status: draft
updated: 2026-09-25
---

# Reservas en tu sitio web: abrir desde tu propio botón

**En resumen:** con **Abrir desde enlace** usas un botón o un enlace de tu propio sitio web para abrir la reserva. Copias el código con **Copiar** y lo pegas en tu página.

## Dónde está

1. Ve a **Configuración › Agendamiento online**.
2. En «Agrega las reservas a tu sitio web», elige **Abrir desde enlace**.

## Pasos

1. Toca **Copiar**.
2. Pega el código en tu sitio web.

El código usa el script `barberlytics-widgets.js`, un elemento `<div>` con `data-bl-widget="booking"` y el atributo `data-trigger`. Trae el identificador de tu barbería, que en los ejemplos del centro de ayuda llamamos **TU-ID**. Copia siempre el tuyo desde la pantalla.

> [!NOTE]
> Aún no está documentado cómo se conecta `data-trigger` con tu botón ni cómo se ve la reserva al abrirse.

## Preguntas frecuentes

**¿En qué se diferencia del panel lateral?**
El **Panel lateral** pone un botón flotante «Book now». **Abrir desde enlace** usa un botón o enlace que tú ya tienes en tu sitio.

**¿Y de la reserva embebida?**
La **Reserva embebida** se muestra dentro de una página de tu sitio. Mira [Reservas en tu sitio web: incrustar en una página](/ayuda/configuracion/agendamiento-online-embebido).

**¿Tengo que saber programar?**
La pantalla te da el código listo con **Copiar**. Pegarlo en tu sitio depende de cómo lo hayas hecho; si otra persona lo administra, envíale el código.
