---
id: calendario/marcar-que-el-cliente-llego
title: "Marcar que el cliente llegó (check in)"
description: "Dónde está el botón Ingresar cuando el cliente entra a la barbería: en la tarjeta de la cita, en Siguiente paso y en el menú Acciones."
section: calendario
order: 130
group: "Atender una cita"
roles: [owner, admin, recepcion, barbero]
screens: [/calendar]
keywords: [check in, checkin, el cliente llegó, llegó, ingresar, marcar llegada, registrar llegada, cliente en la barbería, recibir al cliente, barbero listo, aún no ha llegado, siguiente paso, estado de la cita]
related: [calendario/abrir-una-cita, calendario/estados-de-una-cita, calendario/pasar-al-cliente-a-la-silla, calendario/cobrar-una-cita, calendario/el-cliente-no-se-presento]
status: draft
updated: 2026-09-25
---

# Marcar que el cliente llegó (check in)

**En resumen:** cuando el cliente entra, toca **Ingresar**. Está en tres sitios: en la tarjeta de la cita dentro del calendario, en **SIGUIENTE PASO** al abrir la cita y en el menú **Acciones** de la cita.

## Desde la tarjeta

1. En la vista **Dia**, busca la tarjeta de la cita en la columna del barbero. Muestra el nombre del cliente, el servicio con su precio, la hora («10:30 AM to 11:00 AM») y el barbero.
2. Toca **Ingresar**, el botón de la tarjeta.
   ![La tarjeta de una cita en el calendario, con el botón Ingresar](/assets/es/calendario/conoce-el-calendario/tarjeta-cita.png)

## Desde el detalle de la cita

1. Toca la tarjeta para abrir la cita. En la pestaña **Resumen**, arriba, está **SIGUIENTE PASO**: dice «Laura aún no ha llegado.» y trae el botón **Ingresar · $70,000.00** (el precio es el de la cita).
   ![El detalle de la cita con Siguiente paso y el botón Ingresar](/assets/es/calendario/abrir-una-cita/resumen.png)
2. Toca **Ingresar**.

También puedes tocar **Acciones** (el botón ≡ de la cabecera) y elegir **Ingresar**. En ese menú están, en orden: **Barbero listo**, **Ingresar**, **Sentado**, **Cobrar**, **No se presentó** y **Cancelar**.

![El menú Acciones de la cita abierto](/assets/es/calendario/abrir-una-cita/acciones.png)

> [!NOTE]
> Lo que pasa después de tocar **Ingresar** (cómo cambia la tarjeta, qué dice **SIGUIENTE PASO**, si avisa al barbero) todavía no está comprobado. Tampoco qué hace **Barbero listo**.

## Cómo llama la app a cada estado

La app usa nombres distintos en cada sitio. El menú **Acciones** dice **Barbero listo**, **Ingresar**, **Sentado**, **Cobrar**, **No se presentó** y **Cancelar**. La tarjeta muestra el botón **Ingresar**. La vista **Agenda** y la cabecera de la cita dicen **Pendiente** para una cita que todavía no empieza. El filtro **Estado de la cita** de **Transacciones** usa **Agendada**, **Llegó**, **En silla**, **Cerrada**, **Terminada** y **Cancelada**. Lo cuenta [Los estados de una cita](/ayuda/calendario/estados-de-una-cita).

## Lo que dice la pantalla

| Texto | Qué significa |
|---|---|
| «Laura aún no ha llegado.» | Nadie ha marcado la llegada de este cliente |
| **Ingresar · $70,000.00** | Marca la llegada; el monto es el precio de la cita |
| **Pendiente** | La cita todavía no empezó |
| **Pagar cita** | Cobrar sin pasar por la llegada; lo cuenta [Cobrar una cita](/ayuda/calendario/cobrar-una-cita) |

## Preguntas frecuentes

**¿Para qué sirve marcar la llegada?**
Para que el barbero sepa que su cliente ya está, y para que quede registrado en la cita que el cliente sí vino.

**El cliente llegó y el barbero sigue ocupado.**
Marca **Ingresar** igual. Cuando el barbero se desocupe, pasas al cliente a la silla: lo cuenta [Pasar al cliente a la silla](/ayuda/calendario/pasar-al-cliente-a-la-silla).

**Me equivoqué y marqué la llegada de otro cliente.**
Cómo se deshace todavía no está comprobado. Abre la cita y revisa **Acciones**.
