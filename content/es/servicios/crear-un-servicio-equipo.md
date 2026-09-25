---
id: servicios/crear-un-servicio-equipo
title: "Crear un servicio: quién lo hace"
description: "La pestaña Equipo de un servicio: elegir qué barberos lo hacen y, para cada uno, su precio, el precio para clientes nuevos, el de fidelidad, la duración y la comisión."
section: servicios
order: 50
roles: [owner, admin]
screens: [/services, /services/create, /services/*]
keywords: [pestaña equipo, qué barbero hace el servicio, asignar servicio a un barbero, precio por barbero, precio del servicio, precio para clientes nuevos, precio de fidelidad, duración por barbero, división de la comisión, comisión extra, seleccionar todo, un barbero no ofrece este servicio]
related: [servicios/crear-un-servicio, servicios/crear-un-servicio-avanzado, servicios/precio-para-clientes-nuevos-y-de-lealtad, servicios/costo-y-precio-de-un-servicio, equipo/ficha-de-un-barbero-servicios, equipo/ficha-de-un-barbero-perfil]
status: draft
updated: 2026-09-25
---

# Crear un servicio: quién lo hace

**En resumen:** en la pestaña **Equipo** marcas qué barberos hacen el servicio y, para cada uno, puedes cambiar el precio, el precio para clientes nuevos, el de fidelidad, la duración y la comisión. Si dejas un campo vacío, vale lo del servicio.

## Pasos

1. Completa la pestaña **General** y toca **Continuar** ([Crear un servicio: datos generales](/ayuda/servicios/crear-un-servicio)). Se habilita la pestaña **Equipo**.
   ![La pestaña Equipo con la casilla Seleccionar todo y una fila por barbero con sus campos](/assets/es/servicios/crear-un-servicio-equipo/equipo.png)
2. Marca la casilla de cada barbero que hace este servicio. Para marcarlos a todos, usa **Seleccionar todo**.
3. En la fila de cada barbero, deja los campos vacíos si cobra el precio del servicio, o escribe lo que cambia para él.
4. Toca **Guardar** (o **Continuar** para pasar a **Avanzado**).

## Los campos de cada barbero

| Campo | Obligatorio | Qué es |
|---|---|---|
| Casilla | — | Si está marcada, el barbero hace este servicio y aparece al agendarlo. |
| **Precio básico** | — | El precio del servicio. Aquí es fijo: se cambia en la pestaña **General**. |
| **Precio del servicio** | No | Lo que cobra este barbero por el servicio, si es distinto del básico. Por ejemplo, Carlos cobra el corte clásico a 35 y el básico es 30. |
| **Precio para clientes nuevos** | No | Lo que cobra este barbero a un cliente que viene por primera vez. |
| **Precio de fidelidad (frecuencia de visita)** | No | Lo que cobra a un cliente que vuelve con frecuencia. |
| **Duración del servicio (minutos)** | No | Cuánto tarda este barbero, si es distinto de la duración del servicio. |
| **Division de la comision** | No | Cómo se reparte la comisión de este servicio para este barbero. |
| **Comisión extra** | No | Una comisión adicional por este servicio para este barbero. |

Los precios por tipo de cliente los explica [Precio para clientes nuevos y precio de lealtad](/ayuda/servicios/precio-para-clientes-nuevos-y-de-lealtad).

> [!NOTE]
> Esta pestaña se leyó desde **Editar** de un servicio ya creado. Qué pasa al tocar **Guardar** y cómo se calcula la comisión con **Division de la comision** y **Comisión extra** todavía no está comprobado. Se completará con un servicio de prueba y con el equipo.

## Lo mismo, visto desde el barbero

Estos mismos datos aparecen en la ficha de cada barbero, en la pestaña **Servicios**: por cada servicio, **Precio del servicio**, **Nuevo cliente precio**, **Precio de lealtad**, **Tiempo**, **Comisión dividida** y **Comisión extra**. Vacío significa que usa lo del catálogo. Si prefieres ajustar todos los servicios de una persona de una vez, hazlo desde ahí ([La ficha de un barbero: perfil](/ayuda/equipo/ficha-de-un-barbero-perfil)).

## Preguntas frecuentes

**Un barbero no aparece al agendar este servicio.**
Comprueba que su casilla esté marcada en esta pestaña y que el barbero esté activado en la sucursal ([Activar equipo en una sucursal](/ayuda/sucursales/activar-equipo-en-una-sucursal)).

**¿Tengo que rellenar todos los campos de cada barbero?**
No. Solo la casilla. Todo lo demás vacío significa «igual que el servicio».

**Contraté a alguien nuevo. ¿Tengo que entrar servicio por servicio?**
Puedes hacerlo desde su ficha, pestaña **Servicios**, donde ves todos los servicios juntos.
