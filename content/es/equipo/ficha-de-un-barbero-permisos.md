---
id: equipo/ficha-de-un-barbero-permisos
title: "La ficha de un barbero: permisos"
description: "La pestaña Permisos de la ficha: cómo se lee la matriz Ver, Crear, Editar, Borrar y Activo, de dónde salen los permisos de una persona y qué pasa si le quitas Ver."
section: equipo
order: 140
roles: [owner, admin]
screens: [/team/barbers/view/*]
keywords: [permisos de un barbero, permisos de una persona, matriz de permisos, ver crear editar borrar, activo, quitar permisos, dar permisos, ocultar sección del menú, personalizar permisos, permisos por usuario, no ve una sección, rol y permisos]
related: [roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/cambiar-los-permisos-de-una-persona, roles-y-permisos/no-veo-una-seccion-del-menu, equipo/ficha-de-un-barbero-perfil, equipo/editar-a-un-miembro-del-equipo]
status: review
updated: 2026-09-25
---

# La ficha de un barbero: permisos

**En resumen:** en la pestaña **Permisos** de la ficha ves y ajustas lo que esa persona puede hacer. Sus permisos se copian de su rol cuando la creas y después se pueden personalizar. Si le quitas **Ver** en una función, esa sección desaparece de su menú.

## Cómo llegar

1. Toca **Equipo** en el menú.
2. En **Barberos**, toca **Acciones** › **Ver Barbero por comisión** (o **Ver Barbero de renta**) en la fila de la persona.
3. Toca la pestaña **Permisos**.
   ![La pestaña Permisos de la ficha, con la matriz por bloques](/assets/es/equipo/ficha-de-un-barbero-permisos/ver.png)

## Cómo se lee la matriz

- Cada fila es una función de la app, agrupada en bloques: **Reservas y clientes**, **Equipo**, **Métricas**, **Inventarios**, **Servicios**, **POS** y **Negocio**.
- Las columnas son **Ver**, **Crear**, **Editar**, **Borrar** y **Activo**.
- Algunas filas solo tienen el interruptor **Activo**: la función existe o no para esa persona. Otras no tienen todas las columnas.

Es la misma matriz de **Configuración › Permisos**, pero aquí es la de esta persona, no la del rol.

## De dónde salen los permisos de una persona

1. Al crearla, sus permisos se **copian de su rol**. Los valores de fábrica están en [Tabla de permisos: qué puede hacer cada rol](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).
2. Después los puedes **personalizar** aquí, con **Editar**.

Por eso dos barberos por comisión pueden tener permisos distintos. Por ejemplo, a Carlos le puedes dar **Bloquear calendario** completo aunque el rol de fábrica solo traiga **Ver**.

## Qué pasa si quitas «Ver»

Si a una persona le quitas **Ver** en una función, esa sección deja de aparecer en su menú. Si le quitas **Ver** en **Equipo**, ya no ve **Equipo**. El menú de cada persona se arma con sus permisos, el perfil con el que entra y la sucursal elegida. Mira [No veo una sección del menú](/ayuda/roles-y-permisos/no-veo-una-seccion-del-menu).

## Para cambiar los permisos

En la lista, toca **Acciones** › **Editar Barbero por comisión**, abre **Permisos**, cambia los interruptores y toca **Guardar**. Mira [Cambiar los permisos de una persona](/ayuda/roles-y-permisos/cambiar-los-permisos-de-una-persona).

## Preguntas frecuentes

**Un barbero no ve una sección.**
Abre su ficha, pestaña **Permisos**, y revisa que tenga **Ver** en la función de esa sección.

**¿Puedo darle a una persona más permisos que a su rol?**
Sí. Los permisos se copian del rol al crearla y luego se personalizan aquí.

**Si cambio el rol en Configuración › Permisos, ¿cambia esta persona?**
Los valores de **Configuración › Permisos** son los predeterminados para las personas nuevas. Si tocan a quienes ya existen todavía no está comprobado.
