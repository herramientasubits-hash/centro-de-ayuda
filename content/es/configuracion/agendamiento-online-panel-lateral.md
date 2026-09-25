---
id: configuracion/agendamiento-online-panel-lateral
title: "Reservas en tu sitio web: botón «Book now» flotante"
description: "Cómo agregar a tu sitio web el panel lateral de reservas, con un botón flotante «Book now», copiando el código desde Barberlytics."
section: configuracion
order: 60
roles: [owner]
screens: [/online-booking]
keywords: [panel lateral, book now, botón flotante, reservas en mi sitio web, agendamiento online, widget, código para mi página, copiar código, incrustar reservas, reserva online, sitio web, pegar código]
related: [configuracion/agendamiento-online-abrir-desde-un-enlace, configuracion/agendamiento-online-embebido]
status: draft
updated: 2026-09-25
---

# Reservas en tu sitio web: botón «Book now» flotante

**En resumen:** la opción **Panel lateral** pone un botón flotante «Book now» en tu sitio web. Copias el código desde Barberlytics con el botón **Copiar** y lo pegas en tu página.

## Dónde está

1. Ve a **Configuración**.
2. En **Configuración de la cuenta**, toca **Agendamiento online**. La pantalla se llama «Reserva online».
3. Busca «Agrega las reservas a tu sitio web». Ahí hay tres formas de agregarlas: **Panel lateral**, **Abrir desde enlace** y **Reserva embebida**.

## Pasos

1. Elige **Panel lateral**.
2. Toca **Copiar**.
3. Pega el código en tu sitio web.

El código usa el script `barberlytics-widgets.js` y un elemento `<div>` con `data-bl-widget="booking"`. El que copias ya trae el identificador de tu barbería. En los ejemplos de este centro de ayuda lo llamamos **TU-ID**: no lo copies de aquí, copia siempre el tuyo desde la pantalla.

> [!NOTE]
> Aún no está documentado dónde pegar el código según cómo esté hecho tu sitio web, ni cómo se ve el panel una vez abierto. Si otra persona administra tu sitio, envíale el código que copiaste.

## Preguntas frecuentes

**¿Puedo cambiar el texto «Book now»?**
Aún no lo tenemos documentado. Lo que sí sabemos es que el panel lateral muestra un botón flotante con ese texto.

**¿Qué pasa si no tengo sitio web?**
Puedes usar el **Enlace directo de reserva**, que está en la misma pantalla. Mira El enlace directo de reserva y los parámetros UTM.

**¿Todos mis servicios aparecen en la reserva?**
Cada servicio tiene un interruptor **Privado / Público** que decide si es visible en el agendamiento online.
