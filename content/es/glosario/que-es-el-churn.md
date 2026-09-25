---
id: glosario/que-es-el-churn
title: "Churn: cuando un cliente se pierde"
description: "Qué significa Churn y Pre-Churn en el Centro de notificaciones, cómo se corresponden con los tipos Perdido y Pre-perdida de Clientes, con las definiciones exactas de la app."
section: glosario
order: 50
roles: [owner, admin]
screens: [/customers, /notifications-center, /]
keywords: [churn, pre-churn, qué es el churn, cliente perdido, cliente que se pierde, pre-perdida, perdido, clientes perdidos, en riesgo, vencidos, recuperado, ciclos de frecuencia, aviso de churn, sigla churn]
related: [glosario/glosario-de-barberlytics, clientes/tipos-de-cliente, clientes/como-se-clasifica-un-cliente, metricas/alertas-de-riesgo-de-clientes, navegacion/notificaciones-que-recibes, metricas/clientes-tasa-de-retencion]
status: draft
updated: 2026-09-25
---

# Churn: cuando un cliente se pierde

**En resumen:** «Churn» es la palabra con la que el **Centro de notificaciones** llama al cliente **Perdido**, y «Pre-Churn» al cliente **Pre-perdida**. En la sección **Clientes** los ves con esos nombres, cada uno con su definición.

## Dónde aparece la palabra

En **Configuración › Centro de notificaciones**, grupo **Clientes › Estados de clientes**, hay dos avisos:

- «Cuando un cliente pasa a estado 'Churn' (perdido)»
- «Cuando un cliente pasa a estado 'Pre-Churn' (Posible pérdida)»

La propia pantalla lo traduce: Churn = perdido, Pre-Churn = posible pérdida.

## Qué significan, con las definiciones de la app

En **Clientes**, al tocar cada pestaña aparece su definición:

| Aviso | Tipo de cliente | Definición que muestra la app |
|---|---|---|
| Pre-Churn | **Pre-perdida** | «Estos son los clientes que han dejado de acudir a la peluquería durante 3 ciclos de frecuencia, es decir, corren el riesgo de perderlos.» |
| Churn | **Perdido** | «Estos son los clientes que han dejado de acudir a la peluquería durante 4 ciclos de frecuencia de visita y ya los han perdido.» |
| (Recuperado) | **Recuperado** | «Son los clientes que ya están perdidos pero que volvieron a la peluquería y que debemos cuidar para que vuelvan con frecuencia.» |

![La pestaña Perdido con su definición](/assets/es/clientes/tipos-de-cliente/perdido.png)

El «ciclo de frecuencia» es cada cuánto suele venir ese cliente. Laura viene cada 2 semanas: a las 6 semanas sin venir es **Pre-perdida** y a las 8, **Perdido**. Carlos viene cada mes: tarda tres y cuatro meses en pasar por lo mismo ([Cómo cambia un cliente de tipo con el tiempo](/ayuda/clientes/como-se-clasifica-un-cliente)).

## Dónde verlos

- **Clientes**, pestañas **Pre-perdida**, **Perdido** y **Recuperado**.
- **Métricas › AI Insights › Alertas de riesgo de clientes**, con los contadores **Perdidos**, **En riesgo** y **Vencidos** y la lista de clientes con «63 días atrás · ciclo: 14d» ([Alertas de riesgo](/ayuda/metricas/alertas-de-riesgo-de-clientes)).
  ![La tarjeta Alertas de Riesgo de Clientes](/assets/es/metricas/alertas-de-riesgo-de-clientes/tarjeta.png)
- La campana, si el dueño encendió esos avisos por **Correo** o **Push** ([Qué avisos recibes](/ayuda/navegacion/notificaciones-que-recibes)).

> [!NOTE]
> La fórmula exacta está pendiente de confirmar con el equipo: cómo se calcula el ciclo de cada cliente, cada cuánto se recalcula el tipo, y cómo se corresponden **En riesgo** y **Vencidos** de las alertas con **Pre-perdida** y **Perdido** de la lista.

## Preguntas frecuentes

**¿Puedo marcar a un cliente como perdido a mano?**
No. La app lo calcula con sus citas.

**¿Cómo recibo el aviso cuando alguien pasa a Churn?**
En **Configuración › Centro de notificaciones**, pestaña de tu rol, enciende **Correo** o **Push** en «Cuando un cliente pasa a estado 'Churn' (perdido)».

**¿Qué hago con un cliente Pre-perdida?**
Escribirle antes de que pase a Perdido. Es la lista a la que llamar hoy.
