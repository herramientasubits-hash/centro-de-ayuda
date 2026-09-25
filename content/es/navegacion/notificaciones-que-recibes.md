---
id: navegacion/notificaciones-que-recibes
title: "Qué avisos recibes y de dónde salen"
description: "Los avisos que llegan a la campana, con ejemplos reales de Agenda, y la lista completa de avisos que el dueño puede encender en el Centro de notificaciones, por canal y por rol."
section: navegacion
order: 70
roles: [todos]
screens: [/*, /notifications-center]
keywords: [avisos, notificaciones, campana, qué avisos recibo, agenda, el cliente agendó una cita, bloque de tiempo, centro de notificaciones, correo, push, churn, pre-churn, producto agotado, agenda ocupada, indicador de salud, reportes]
related: [navegacion/notificaciones, configuracion/centro-de-notificaciones-como-funciona, configuracion/notificaciones-por-rol, clientes/tipos-de-cliente, glosario/que-es-el-churn]
status: draft
updated: 2026-09-25
---

# Qué avisos recibes y de dónde salen

**En resumen:** los avisos llegan a la campana de arriba, en el panel **Notificaciones** (pestañas **Todas** y **No leídas**). Cuáles se envían, por **Correo** o **Push** y a qué rol, lo decide el dueño en **Configuración › Centro de notificaciones**.

## Los que llegan a la campana

![El panel Notificaciones con las pestañas Todas y No leídas](/assets/es/navegacion/notificaciones/panel.png)

Cada aviso empieza con su módulo en negrita, sigue el texto y termina con la fecha. Los no leídos llevan un punto rojo. Dos avisos vistos en la cuenta de prueba:

| Aviso | Cuándo llega |
|---|---|
| **Agenda:** «El cliente Carlos agendo una cita» | Un cliente reservó por internet |
| **Agenda:** «Se ha creado un bloque de tiempo…» | Alguien creó un bloqueo en el calendario |

Cómo se usa el panel está en [Ver tus notificaciones](/ayuda/navegacion/notificaciones).

## Los que el dueño puede encender

En **Configuración › Centro de notificaciones** («Vea y administre todos los mensajes automáticos enviados a su equipo y clientes. Esta configuración es general y se aplica a todas las ubicaciones.») hay un interruptor por aviso y por canal, con una pestaña por rol.

![El Centro de notificaciones con sus grupos e interruptores](/assets/es/configuracion/centro-de-notificaciones-como-funciona/pantalla.png)

| Grupo | Aviso, tal cual lo dice la pantalla |
|---|---|
| **Clientes** · Importación de clientes | «Cuando una importación de clientes propia falla posteriormente» · «Cuando termina el proceso de importación exitosamente» |
| **Clientes** · Satisfacción del cliente | «Cuando se recibe una mala reseña por parte de un cliente» |
| **Clientes** · Estados de clientes | «Cuando un cliente pasa a estado 'Churn' (perdido)» · «…'Pre-Churn' (Posible pérdida)» · «…“Recuperado”» · «…“VIP”» |
| **Clientes** · Acciones con cliente | «Cuando un miembro del equipo local bloquea un cliente» |
| **Productos** · Cantidades | «Cuando quedan pocas unidades de un producto» · «Cuando un producto se ha agotado» |
| **Productos** · Combos e Importación | Los mismos avisos para combos, y cuando una importación falla o termina |
| **Calendario** · Equipo | «Cuando un barbero tenga su agenda ocupada a más del [Porcentaje]» · «Cuando la barbería tiene una ocupación del día de más del [Porcentaje]» |
| **Calendario** · Bloqueo | «Cuando un barbero crea un bloqueo en su calendario» |
| **Calendario** · Vacaciones | «Cuando un barbero solicita vacaciones» · «Cuando un barbero de renta crea un periodo de vacaciones» |
| **Métricas** · Rendimiento | «Cuando el indicador de salud de alguna métrica baje a un nivel muy bajo (amarillo o rojo)» · «…suba a un buen nivel (verdes)» |
| **Métricas** · Equipo | «Cada 3 meses, cuando la retención promedio de clientes de uno de los barberos sea superior a [Porcentaje]» · «…menor a [Porcentaje]» |
| **Reportes** | «Envío de reportes del resumen diario / semanal / mensual / trimestral / anual» · «Sugerencia de subida de precios cuando tengas buena demanda y retención» |

Cada rol tiene su pestaña: **Administrador de la locación**, **Barbero por comisión**, **Barbero por renta**, **Recepción - mostrador de recepción** y **Dueño**.

![Las pestañas por rol del Centro de notificaciones](/assets/es/configuracion/notificaciones-por-rol/pestanas.png)

> [!NOTE]
> Lo comprobado: el panel de la campana con dos avisos de **Agenda** y la lista de interruptores del Centro de notificaciones. No está comprobado cuáles de esos avisos llegan a la campana además de por correo o push, ni el texto exacto de cada uno cuando llega.

## Preguntas frecuentes

**¿Qué es «Churn» y «Pre-Churn»?**
Son los estados **Perdido** y **Pre-perdida** de la lista de clientes ([Churn: cuando un cliente se pierde](/ayuda/glosario/que-es-el-churn)).

**No me llega ningún aviso.**
Pídele al dueño que revise en **Configuración › Centro de notificaciones** la pestaña de tu rol y que el aviso tenga encendido **Correo** o **Push**.

**¿Mis clientes reciben avisos?**
La tarjeta de Configuración dice «Revisar notificaciones enviadas a clientes y barberos sobre las citas». Qué recibe el cliente y cuándo todavía no está documentado.
