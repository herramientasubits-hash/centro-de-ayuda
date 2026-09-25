---
id: configuracion/agendamiento-online-embebido
title: "Reservas en tu sitio web: incrustar en una página"
description: "La opción «Reserva embebida»: muestra la reserva dentro de una página de tu sitio web, copiando el código desde Barberlytics."
section: configuracion
order: 80
roles: [owner]
screens: [/online-booking]
keywords: [reserva embebida, incrustar reservas, embeber, dentro de mi página, agendamiento online, reservas en mi sitio web, widget, inline, copiar código, reserva online, sitio web, iframe]
related: [configuracion/agendamiento-online-panel-lateral, configuracion/agendamiento-online-abrir-desde-un-enlace]
status: draft
updated: 2026-09-25
---

# Reservas en tu sitio web: incrustar en una página

**En resumen:** con **Reserva embebida** la reserva se muestra dentro de una página de tu sitio web. Copias el código con **Copiar** y lo pegas donde quieres que aparezca.

## Dónde está

1. Ve a **Configuración › Agendamiento online**.
2. En «Agrega las reservas a tu sitio web», elige **Reserva embebida**.

## Pasos

1. Toca **Copiar**.
2. Pega el código en tu sitio web.

El código usa el script `barberlytics-widgets.js` y un elemento `<div>` con `data-bl-widget="booking"` y `data-mode="inline"`. Trae el identificador de tu barbería, que en los ejemplos del centro de ayuda llamamos **TU-ID**. Copia siempre el tuyo desde la pantalla.

> [!NOTE]
> Aún no está documentado cómo se ve la reserva incrustada ni en qué parte exacta de tu página conviene pegarla.

## Preguntas frecuentes

**¿Cuándo me conviene la reserva embebida?**
Cuando quieres que el cliente reserve sin salir de una página tuya. Si prefieres un botón que flote en todo el sitio, usa el **Panel lateral**.

**¿Puedo usar dos formas a la vez?**
Aún no lo tenemos documentado.

**¿Puedo compartir la reserva sin tener sitio web?**
Sí, con el **Enlace directo de reserva** de la misma pantalla. Mira El enlace directo de reserva y los parámetros UTM.
