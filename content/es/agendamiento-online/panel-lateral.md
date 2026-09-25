---
id: agendamiento-online/panel-lateral
title: "Reservas en tu sitio web: botón «Book now» flotante"
description: "Cómo agregar a tu sitio web el Panel lateral de reservas: un botón flotante «Book now» que abre la reserva sin salir de tu página, copiando el código con Copiar."
section: agendamiento-online
order: 100
group: "Llevar la reserva a tus canales"
roles: [owner, admin]
screens: [/online-booking]
keywords: [panel lateral, book now, botón flotante, reservas en mi sitio web, agendamiento online, widget, código para mi página, copiar código, incrustar reservas, reserva online, sitio web, pegar código, data-mode floating, script]
related: [agendamiento-online/que-es, agendamiento-online/abrir-desde-un-enlace, agendamiento-online/embebido, agendamiento-online/enlace-directo-y-utm]
status: review
updated: 2026-09-25
---

# Reservas en tu sitio web: botón «Book now» flotante

**En resumen:** la opción **Panel lateral** pone un botón flotante «Book now» abajo a la derecha de tu sitio web. Al pulsarlo, la reserva se abre en un panel sobre tu página, sin salir de ella. Copias el código con **Copiar** y lo pegas en tu sitio.

## Dónde está

**Configuración › Configuración de la cuenta › Agendamiento online**. La tarjeta dice: «Ajustar la forma en que los clientes pueden reservar y gestionar sus citas en línea». En la pantalla «Reserva online», busca el bloque «Agrega las reservas a tu sitio web» y la opción **Panel lateral**.

## Qué hace

La pantalla lo explica así: «Agrega un botón flotante "Book now" abajo a la derecha de tu sitio. Al pulsarlo, el flujo de reserva se abre en un panel sobre tu página, sin salir de ella.» Y recomienda: «Ideal para un sitio que ya existe: el <div> puede ir en cualquier parte, el botón se posiciona solo.»

## Pasos

1. En «Agrega las reservas a tu sitio web», elige **Panel lateral**.
2. Toca **Copiar**. El fragmento se copia con los datos de tu barbería ya puestos.
   ![La opción Panel lateral con su fragmento de código y el botón Copiar](/assets/es/agendamiento-online/panel-lateral/fragmento.png)
3. Pega el fragmento en tu sitio web, en cualquier parte de la página. El botón se coloca solo.

El fragmento se parece a este. Aquí TU-ID y TU-PERFIL son solo nombres de ejemplo: copia siempre el tuyo desde la pantalla con **Copiar**.

```html
<div data-bl-widget="booking" data-uuid="TU-ID" data-profile="TU-PERFIL" data-timezone="America/Bogota" data-mode="floating"></div>
<script src="https://fd.barberlytics.com/barberlytics-widgets.js" async></script>
```

> [!TIP]
> Si usas dos formas en la misma página, la pantalla pide incluir el `<script>` una sola vez.

## Preguntas frecuentes

**¿Tengo que saber programar?**
La pantalla te da el código listo. Pegarlo depende de cómo esté hecho tu sitio; la misma pantalla avisa que «si no tienes experiencia técnica, podrías necesitar el apoyo de un programador». Si otra persona administra tu sitio, envíale el fragmento.

**¿Qué pasa si no tengo sitio web?**
Usa el **Enlace directo de reserva** de la misma pantalla. Mira [El enlace directo de reserva y los parámetros UTM](/ayuda/agendamiento-online/enlace-directo-y-utm).

**¿Todos mis servicios aparecen en la reserva?**
Solo los que están en **Público**. Mira [Servicio público o privado](/ayuda/servicios/servicio-publico-o-privado).
