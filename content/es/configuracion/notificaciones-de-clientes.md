---
id: configuracion/notificaciones-de-clientes
title: "Avisos sobre clientes: importación, reseñas, estados y bloqueos"
description: "Los avisos del grupo Clientes del Centro de notificaciones, uno por uno: importaciones, malas reseñas, cambios a Churn, Pre-Churn, Recuperado y VIP, y bloqueos."
section: configuracion
order: 160
group: "Notificaciones"
roles: [owner, admin]
screens: [/notifications-center]
keywords: [avisos de clientes, notificaciones de clientes, importación de clientes, mala reseña, satisfacción del cliente, churn, pre-churn, cliente perdido, posible pérdida, recuperado, vip, bloquear un cliente, aviso de bloqueo, estados de clientes, correo, push]
related: [configuracion/centro-de-notificaciones-como-funciona, clientes/como-se-clasifica-un-cliente, clientes/tipos-de-cliente, clientes/bloquear-a-un-cliente, metricas/alertas-de-riesgo-de-clientes]
status: review
updated: 2026-09-25
---

# Avisos sobre clientes: importación, reseñas, estados y bloqueos

**En resumen:** el grupo **Clientes** del Centro de notificaciones avisa cuando termina o falla una importación, cuando llega una mala reseña, cuando un cliente cambia de estado (Churn, Pre-Churn, Recuperado, VIP) y cuando alguien del equipo bloquea a un cliente. Cada aviso se puede enviar por **Correo**, por **Push** o por los dos.

## Dónde está

**Configuración › Notificaciones › Centro de notificaciones**. La tarjeta dice: «Revisar notificaciones enviadas a clientes y barberos sobre las citas». Elige la pestaña del rol y busca el grupo **Clientes**.

![El Centro de notificaciones con las pestañas por rol y los avisos con sus interruptores de Correo y Push](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

## Los avisos

| Bloque | Aviso, tal cual en la pantalla | Canales |
|---|---|---|
| **Importación de clientes** | «Cuando una importación de clientes propia falla posteriormente» | Correo · Push |
| **Importación de clientes** | «Cuando termina el proceso de importación exitosamente» | Correo · Push |
| **Satisfacción del cliente** | «Cuando se recibe una mala reseña por parte de un cliente» | Correo · Push |
| **Estados de clientes** | «Cuando un cliente pasa a estado 'Churn' (perdido)» | Correo · Push |
| **Estados de clientes** | «Cuando un cliente pasa a estado 'Pre-Churn' (Posible pérdida)» | Correo · Push |
| **Estados de clientes** | «Cuando un cliente pasa a estado “Recuperado”» | Correo · Push |
| **Estados de clientes** | «Cuando un cliente pasa a estado “VIP”» | Correo · Push |
| **Acciones con cliente** | «Cuando un miembro del equipo local bloquea un cliente» | Correo · Push |

## Qué significa cada estado

Un cliente pasa a **Pre-Churn** cuando lleva más tiempo del habitual sin volver, a **Churn** cuando ya se da por perdido, a **Recuperado** cuando vuelve después de eso y a **VIP** cuando está entre los que más visitan o más gastan. Cómo se calcula cada uno está en [Cómo se clasifica un cliente](/ayuda/clientes/como-se-clasifica-un-cliente).

Para encender o apagar un aviso y guardar, mira [Centro de notificaciones: cómo funciona](/ayuda/configuracion/centro-de-notificaciones-como-funciona).

## Preguntas frecuentes

**Quiero enterarme de los clientes que estoy por perder.**
Enciende «Cuando un cliente pasa a estado 'Pre-Churn' (Posible pérdida)». Ahí todavía estás a tiempo de escribirle. Mira [Alertas de riesgo de clientes](/ayuda/metricas/alertas-de-riesgo-de-clientes).

**¿Quién recibe el aviso de bloqueo?**
Depende de la pestaña de rol en la que lo enciendas. Por ejemplo, si lo enciendes en **Dueño**, lo recibe el dueño. Mira [Qué avisos recibe cada rol](/ayuda/configuracion/notificaciones-por-rol).

**¿De dónde sale la «mala reseña»?**
De la calificación que deja el cliente después de la cita. Cómo la deja y desde qué nota cuenta como mala todavía no está documentado.
