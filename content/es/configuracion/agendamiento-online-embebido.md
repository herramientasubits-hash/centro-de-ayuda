---
id: configuracion/agendamiento-online-embebido
title: "Reservas en tu sitio web: incrustar en una página"
description: "La opción «Reserva embebida»: la reserva se ve dentro de una página de tu sitio web, como una sección más, copiando el código desde Barberlytics."
section: configuracion
order: 80
roles: [owner, admin]
screens: [/online-booking]
keywords: [reserva embebida, incrustar reservas, embeber, dentro de mi página, agendamiento online, reservas en mi sitio web, widget, inline, copiar código, reserva online, sitio web, página de reservas, iframe]
related: [configuracion/agendamiento-online-que-es, configuracion/agendamiento-online-panel-lateral, configuracion/agendamiento-online-abrir-desde-un-enlace, configuracion/enlace-directo-de-reserva-y-utm]
status: review
updated: 2026-09-25
---

# Reservas en tu sitio web: incrustar en una página

**En resumen:** con **Reserva embebida** la reserva se ve dentro de una página de tu sitio web desde el principio, como una sección más. Sin botón ni panel. Copias el código con **Copiar** y lo pegas donde quieres que aparezca.

## Dónde está

**Configuración › Configuración de la cuenta › Agendamiento online**. La tarjeta dice: «Ajustar la forma en que los clientes pueden reservar y gestionar sus citas en línea». En la pantalla «Reserva online», busca el bloque «Agrega las reservas a tu sitio web» y la opción **Reserva embebida**.

## Qué hace

La pantalla lo explica así: «Incrusta el flujo de reserva dentro de tu página, como una sección más. Sin botón ni panel: se ve desde el principio.» Y recomienda: «Ideal para una página dedicada a reservar. El widget se dibuja dentro del <div>, así que ponlo donde quieras y dale el ancho que necesites.»

## Pasos

1. En «Agrega las reservas a tu sitio web», elige **Reserva embebida**.
2. Toca **Copiar**.
   ![La opción Reserva embebida con su fragmento de código y el botón Copiar](/assets/es/configuracion/agendamiento-online-embebido/fragmento.png)
3. Pega el fragmento en el lugar exacto de la página donde quieres que se vea la reserva. Ese lugar decide el ancho.

El fragmento es el mismo de las otras dos formas, con `data-mode="inline"`. Aquí TU-ID y TU-PERFIL son solo nombres de ejemplo: copia siempre el tuyo desde la pantalla con **Copiar**.

```html
<div data-bl-widget="booking" data-uuid="TU-ID" data-profile="TU-PERFIL" data-timezone="America/Bogota" data-mode="inline"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

## Preguntas frecuentes

**¿Cuándo me conviene la reserva embebida?**
Cuando tienes una página solo para reservar, por ejemplo `mibarberia.com/reservar`. Si prefieres un botón que flote en todo el sitio, usa el **Panel lateral**.

**¿Puedo usar dos formas a la vez?**
Sí. La pantalla dice: «Si usas las dos en la misma página, incluye el <script> una sola vez.»

**¿Puedo compartir la reserva sin tener sitio web?**
Sí, con el **Enlace directo de reserva** de la misma pantalla. Mira [El enlace directo de reserva y los parámetros UTM](/ayuda/configuracion/enlace-directo-de-reserva-y-utm).
