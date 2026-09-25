---
id: calendario/cliente-sin-cita-previa
title: "Cliente que llega sin cita previa"
description: "Cómo atender a un cliente que entra por la puerta sin agendar: el interruptor Cliente sin cita previa, la opción Walk in y la Venta sin cita."
section: calendario
order: 80
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [sin cita previa, walk-in, walk in, llegó sin cita, cliente de paso, cliente sin agendar, atender sin cita, venta sin cita, comisión de walk-in, rate walk-in, cliente espontáneo, sin reserva]
related: [calendario/crear-una-cita, calendario/venta-sin-cita, calendario/crear-una-cita-para-un-cliente-nuevo, calendario/clientes-sin-preferencia-de-barbero, calendario/lista-de-espera, metricas/clientes-reservas-online-y-rate-walk-in, equipo/orden-para-clientes-sin-cita]
status: draft
updated: 2026-09-25
---

# Cliente que llega sin cita previa

**En resumen:** crea la cita como siempre y enciende **Cliente sin cita previa** antes de tocar **Crear**. Así la app aplica al barbero su comisión de walk-in y la cita cuenta como **Sin cita previa** en los reportes. Si el cliente no tiene ficha, elige **Walk in** como cliente.

## Pasos

1. En el **Calendario**, toca la franja vacía del barbero que lo va a atender, a la hora en que empieza. Se abre **Crear cita** con el **Barbero** y la **Fecha & Hora** ya puestos. También puedes tocar **Acciones › Crear cita**.
2. Toca **Cliente**. Busca al cliente en «Buscar en N Clientes». Si no está registrado y no quiere dejar sus datos, elige **Walk in**, la primera opción.
   ![La lista de clientes con la opción Walk in de primera](/assets/es/calendario/crear-una-cita/cliente.png)
3. Toca **Servicio** y elige lo que se va a hacer, por ejemplo «Corte clásico».
4. Enciende **Cliente sin cita previa**. Debajo dice: «El cliente llegó sin cita. Aplica la comisión de walk-in del barbero y se refleja en los reportes de agendamiento.»
   ![El interruptor Cliente sin cita previa encendido, con su explicación](/assets/es/calendario/crear-una-cita/sin-cita-previa.png)
5. Toca **Crear**.

> [!NOTE]
> Cómo queda la cita en la cuadrícula después de tocar **Crear** todavía no está comprobado.

## Otra forma: Venta sin cita

En **Acciones** también está **Venta sin cita**. Abre un panel más corto: **Fecha** (con selector), la hora, **Cliente**, **Servicio**, **Barbero** y **Crear**.

![El panel Venta sin cita con fecha, hora, cliente, servicio y barbero](/assets/es/calendario/venta-sin-cita/panel.png)

> [!NOTE]
> En qué se diferencia una **Venta sin cita** de una cita creada con el interruptor **Cliente sin cita previa** (cómo se ve en el calendario, cómo se cobra, cómo cuenta en los reportes) todavía no está comprobado. Lo cuenta [Venta sin cita](/ayuda/calendario/venta-sin-cita).

## Qué cambia para el barbero

- Al barbero por comisión se le paga con su **Comisión de clientes sin cita**, que está en su ficha, pestaña **Compensación**.
- Al barbero de renta se le aplica la **Deducción por cita sin agendamiento**, en su ficha, pestaña **Pagos**.
- Qué barberos pueden tomar clientes sin cita, y en qué orden, se define en **Equipo › Acciones › Ordenamiento para agendamiento sin cita y sin preferencia**, pestaña **Agendamiento sin cita**. Lo cuenta [Clientes sin preferencia de barbero: quién los atiende](/ayuda/calendario/clientes-sin-preferencia-de-barbero).

## Dónde se ve después

- En **Métricas › Negocio**, la dona **Método de agendamiento** separa **Interno**, **Cita online** y **Sin cita previa**.
- En **Métricas › Clientes**, la tarjeta **Rate walk-in** dice qué parte de tus clientes llegó sin cita. Mira [Reservas online y rate walk-in](/ayuda/metricas/clientes-reservas-online-y-rate-walk-in).
- En **Transacciones**, los clientes sin ficha salen como «Walk in».

## Lo que dice la pantalla

| Texto | Qué significa |
|---|---|
| «El cliente llegó sin cita. Aplica la comisión de walk-in del barbero y se refleja en los reportes de agendamiento.» | Qué hace el interruptor **Cliente sin cita previa** |
| **Walk in** · «000******0000» | Cliente genérico, sin ficha propia |
| **Sin cita previa** | Así se llama este tipo de cita en **Métricas** |

## Preguntas frecuentes

**¿Tengo que crear la cita si el cliente ya está sentado?**
Sí. La cita es lo que después se cobra y lo que le paga la comisión al barbero. Créala a la hora en que empezó.

**Si no enciendo el interruptor, ¿qué pasa?**
La app no aplica la comisión de walk-in ni marca la cita como **Sin cita previa** en los reportes. Es lo que dice el texto del interruptor.

**Llegó sin cita y no hay barbero libre.**
Anótalo en la lista de espera: lo cuenta [La lista de espera](/ayuda/calendario/lista-de-espera).
