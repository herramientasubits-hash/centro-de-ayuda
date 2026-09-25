---
id: clientes/como-se-clasifica-un-cliente
title: "Cómo cambia un cliente de tipo con el tiempo"
description: "El camino de un cliente por los tipos, con ejemplos: de Nuevo a Retenido y Frecuente por número de citas, a VIP por constancia, y a Pre-perdida, Perdido y Recuperado según los ciclos que pase sin venir."
section: clientes
order: 160
roles: [owner, admin]
screens: [/customers]
keywords: [cómo se clasifica un cliente, cambio de tipo, ciclo de frecuencia, ciclo, cada cuánto viene, cuándo pasa a VIP, cuándo se pierde un cliente, cliente en riesgo, pre-perdida, perdido, recuperado, retención, fidelidad, por qué mi cliente es nuevo, por qué cambió de tipo, clasificación de clientes]
related: [clientes/tipos-de-cliente, clientes/indicadores-de-un-cliente, metricas/clientes-citas-por-tipo-de-cliente, metricas/alertas-de-riesgo-de-clientes, metricas/clientes-frecuencia-de-visita]
status: draft
updated: 2026-09-25
---

# Cómo cambia un cliente de tipo con el tiempo

**En resumen:** los tres primeros tipos se ganan por número de citas: **Nuevo** (ninguna o una), **Retenido** (dos) y **Frecuente** (tres o más). Los demás dependen de su ritmo de visita, lo que la app llama «ciclos de frecuencia»: **VIP** si lleva más de 3 ciclos viniendo, **Pre-perdida** si lleva 3 ciclos sin venir, **Perdido** a los 4, y **Recuperado** si estaba perdido y volvió. Nada de esto se cambia a mano.

Las definiciones exactas, tal cual las muestra la app, están en [Los tipos de cliente](/ayuda/clientes/tipos-de-cliente).

## Primero, por citas

| Citas | Tipo |
|---|---|
| 0 o 1 | **Nuevo** |
| 2 | **Retenido** |
| 3 o más | **Frecuente** |

Carlos reserva online y viene el sábado: es **Nuevo**. Vuelve a las tres semanas: **Retenido**. A la tercera cita ya es **Frecuente**.

## Después, por ciclos

El ciclo es cada cuánto suele venir ese cliente. Laura viene cada 2 semanas: su ciclo son 2 semanas. Carlos viene una vez al mes: su ciclo es un mes. Con ese ciclo la app mira dos cosas: cuánto lleva viniendo con constancia y cuánto lleva sin aparecer.

| Qué pasa | Tipo |
|---|---|
| Lleva viniendo más de 3 ciclos | **VIP** |
| Lleva 3 ciclos sin venir | **Pre-perdida** |
| Lleva 4 ciclos sin venir | **Perdido** |
| Estaba perdido y volvió | **Recuperado** |

Con Laura (ciclo de 2 semanas):

- Si mantiene el ritmo más de 3 ciclos, más de 6 semanas viniendo cada dos, pasa a **VIP**.
- Si deja de venir 3 ciclos, unas 6 semanas, pasa a **Pre-perdida**. Es el momento de escribirle.
- A los 4 ciclos sin venir, unas 8 semanas, pasa a **Perdido**.
- Si después de eso vuelve, pasa a **Recuperado**.

Con Carlos (ciclo de un mes) los mismos pasos tardan más: **Pre-perdida** a los tres meses sin venir y **Perdido** a los cuatro. Por eso dos clientes con el mismo tiempo sin aparecer pueden tener tipos distintos.

## Dónde ver su ritmo

- En la ficha, la tarjeta **FOV** muestra su ritmo en semanas: mira [Los indicadores de un cliente](/ayuda/clientes/indicadores-de-un-cliente).
- En el detalle de una cita, la pestaña **Cliente** dice «Cada 7 días» en **RITMO DEL CLIENTE**.
- En Métricas, [Alertas de riesgo](/ayuda/metricas/alertas-de-riesgo-de-clientes) lista a los que se están tardando, con «ciclo: 14d», y [Citas por tipo de cliente](/ayuda/metricas/clientes-citas-por-tipo-de-cliente) los agrupa por periodo.

> [!NOTE]
> Pendiente de confirmar con el equipo: cómo calcula la app el ciclo de cada cliente (si es el promedio entre visitas o el último intervalo), cada cuánto recalcula el tipo, qué ciclo usa con un cliente que solo ha venido una vez, si un **Recuperado** vuelve a ser **Frecuente** o **VIP** después, y si los tipos se calculan por sucursal o para toda la barbería.

## Preguntas frecuentes

**Mi cliente viene desde hace un año. ¿Por qué no es VIP?**
Para ser **VIP** cuenta la constancia, no la antigüedad: tiene que haber venido durante más de 3 ciclos seguidos. Si viene cada dos meses y una vez se saltó cuatro, pudo haber pasado por **Pre-perdida** y reiniciado el camino.

**¿Un VIP puede bajar a Pre-perdida?**
Sí. Si pasa 3 ciclos sin venir, cambia de tipo sin importar lo que fuera antes.

**¿Recuperado es para siempre?**
La definición dice que son los que «volvieron» y hay que cuidar. Si el tipo vuelve a cambiar con las siguientes citas está pendiente de confirmar.

**¿Puedo poner el tipo yo?**
No. Lo único que decides a mano es el bloqueo: mira [Bloquear a un cliente](/ayuda/clientes/bloquear-a-un-cliente).
