---
id: configuracion/detalles-del-negocio-hora-y-calendario
title: "Detalles del negocio: zona horaria, formato de hora, semana y festivos"
description: "Dónde eliges la zona horaria, el formato de 12 o 24 horas, el día en que empieza la semana, las horas de apertura y los festivos en los que no abres."
section: configuracion
order: 20
group: "Configuración de la cuenta"
roles: [owner, admin]
screens: [/business-details/*]
keywords: [detalles del negocio, zona horaria, formato de hora, 12 horas, 24 horas, inicio de semana, hora de inicio, hora de fin, horario de la barbería, festivos, feriados, días festivos, no abrir un festivo, horario de verano, configuración de hora y calendario]
related: [configuracion/detalles-del-negocio-enlaces-en-linea, configuracion/periodos-de-cierre, sucursales/que-es-propio-de-cada-sucursal, configuracion/conoce-configuracion]
status: draft
updated: 2026-09-25
---

# Detalles del negocio: zona horaria, formato de hora, semana y festivos

**En resumen:** en **Configuración › Detalles del negocio**, el bloque «Configuración de hora y calendario» define cómo se ve el tiempo en toda la app: la zona horaria, si las horas van en formato de 12 o de 24, qué día empieza la semana, a qué hora abres y cierras y qué festivos no trabajas.

## Dónde está

**Configuración › Configuración de la cuenta › Detalles del negocio**. La tarjeta dice: «Administrar configuraciones como el nombre de su empresa y la zona horaria.»

## Los campos

El bloque «Configuración de hora y calendario» explica: «Elija la zona horaria y el formato que mejor se adapten a su negocio. Los cambios de horario de verano se aplicarán automáticamente según la zona horaria seleccionada.»

![El formulario Configuración de hora y calendario con la zona horaria, el formato de hora, el inicio de semana, las horas y los festivos](/assets/es/configuracion/detalles-del-negocio-hora-y-calendario/formulario.png)

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Zona horaria** | Sí | La zona en la que trabaja tu barbería, por ejemplo America/Bogota. Con ella se calculan las horas de las citas y los cambios de horario de verano. |
| **Formato de hora** | Sí | Cómo se escriben las horas: «12 horas (ej. 9:00pm)» o 24 horas. |
| **Inicio de semana** | Sí | El día con el que empieza la semana en el calendario, por ejemplo Lunes. |
| **Hora de inicio** | No | La hora a la que abre tu barbería. |
| **Hora de fin** | No | La hora a la que cierra. |
| **Festivos no laborables** | No | Los festivos en los que no abres. |

## Elegir los festivos

1. Toca **Festivos no laborables**. El campo muestra cuántos llevas, por ejemplo «8 seleccionados».
2. Marca en la lista los festivos del país en los que no abrirás. Cada uno trae su fecha: Año Nuevo, Día de los Reyes Magos… hasta Navidad.
   ![La lista de festivos del país con su fecha, para marcar los que no se trabajan](/assets/es/configuracion/detalles-del-negocio-hora-y-calendario/festivos.png)
3. Toca **Guardar**, al final de la página.

La pantalla lo explica así: «Selecciona los días festivos en los que no abrirás.» Y avisa: «Esta es una configuración general, pero se puede ajustar para cada locación en sus propias configuraciones.»

> [!NOTE]
> Qué muestra la app al tocar **Guardar** y dónde se ajusta esta configuración para una sola sucursal todavía no está comprobado.

## Preguntas frecuentes

**Mis sucursales están en países distintos. ¿Qué zona horaria pongo?**
Cada sucursal tiene su propia **Zona horaria**, su **Moneda** y su **Idioma** en **Configuración › Sucursales › Editar**. Mira [Qué cambia de una sucursal a otra](/ayuda/sucursales/que-es-propio-de-cada-sucursal). La de esta pantalla es la general.

**¿Un festivo marcado aquí bloquea las citas de ese día?**
La pantalla solo dice que son los días en los que no abrirás. Cómo se ve ese día en el calendario y si se pueden agendar citas todavía no está comprobado. Si vas a cerrar varios días seguidos, usa [Períodos de cierre del negocio](/ayuda/configuracion/periodos-de-cierre).

**Soy barbero y quiero ver las horas en formato de 24.**
Con el perfil de barbero, **Configuración** tiene su propio **Formato de hora**. Solo cambia tu calendario, no el de la barbería ni el de tus clientes.
