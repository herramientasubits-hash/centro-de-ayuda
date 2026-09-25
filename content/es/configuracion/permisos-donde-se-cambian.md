---
id: configuracion/permisos-donde-se-cambian
title: "Permisos: dónde se cambian y cómo se guardan"
description: "Los dos lugares donde se ajustan los permisos: la pantalla de Permisos, con los predeterminados de cada rol, y la ficha de cada persona."
section: configuracion
order: 80
group: "Equipo"
roles: [owner, admin]
screens: [/team-permission, /team/barbers]
keywords: [permisos, dónde cambio los permisos, permisos por rol, permisos de una persona, matriz de permisos, pestañas de roles, administrador de la locación, barbero por comisión, barbero por renta, recepción, dueño, ver crear editar borrar activo, predeterminados, quitar acceso, dar acceso]
related: [roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/tabla-de-permisos-por-rol, equipo/ficha-de-un-barbero-permisos, roles-y-permisos/los-cinco-roles, sucursales/ajustes-generales-y-por-sucursal]
status: draft
updated: 2026-09-25
---

# Permisos: dónde se cambian y cómo se guardan

**En resumen:** los permisos se cambian en dos lugares. En **Configuración › Permisos** están los predeterminados de cada rol: lo que recibe una persona nueva al crearla. En la ficha de cada persona, pestaña **Permisos**, está su copia, que puedes ajustar solo para ella.

## Dónde está

**Configuración › Equipo › Permisos**. La tarjeta dice: «Gestiona las secciones y funciones que puede realizar cada usuario de tu barbería en función de su rol.»

La pantalla explica: «Gestiona las secciones y funciones que cada usuario de tu barbería puede realizar en función de su rol. Las configuraciones que aquí se establezcan serán las opciones predeterminadas al crear nuevos roles, aunque se pueden personalizar individualmente por ubicación y al crear o editar cada usuario. Las cuentas de propietarios tienen acceso total al sistema.»

![La pantalla de Permisos con las pestañas por rol y la matriz de funciones](/assets/es/configuracion/permisos-donde-se-cambian/pantalla.png)

## Los permisos de cada rol

1. Elige la pestaña del rol: **Administrador de la locación**, **Barbero por comisión**, **Barbero por renta**, **Recepción - mostrador de recepción** o **Dueño**.
2. Cada fila es una función de la app, agrupada en **Reservas y clientes**, **Equipo**, **Métricas**, **Inventarios**, **Servicios**, **POS** y **Negocio**. Las columnas son **Ver**, **Crear**, **Editar**, **Borrar** y **Activo**. Qué significa cada una está en [Cómo funcionan los permisos](/ayuda/roles-y-permisos/como-funcionan-los-permisos).
3. Enciende o apaga lo que quieras cambiar. Los valores de fábrica están en [Tabla de permisos: qué puede hacer cada rol](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).

Lo que cambies aquí es lo que recibirá cada persona nueva de ese rol.

## Los permisos de una persona

Cuando creas a alguien, recibe una copia de los permisos de su rol. Después puedes ajustarla solo para esa persona:

1. Ve a **Equipo** y abre la ficha de la persona con **Acciones › Ver**.
2. Toca la pestaña **Permisos**. Es la misma matriz, pero solo de esa persona.

Mira [La ficha de un barbero: permisos](/ayuda/equipo/ficha-de-un-barbero-permisos). Por eso dos barberos con el mismo rol pueden tener permisos distintos.

## Qué pasa al quitar un permiso

Si a una persona le quitas **Ver** en una función, esa sección desaparece de su menú. Por ejemplo, sin **Ver** en **Equipo**, ya no ve la sección Equipo.

> [!NOTE]
> Cómo se guardan los cambios en esta pantalla, si cambiar el predeterminado de un rol toca a las personas que ya lo tienen y dónde se personalizan «por ubicación» todavía no está comprobado.

## Preguntas frecuentes

**Quiero que un solo barbero pueda ver Métricas. ¿Cambio el rol?**
No. Cambia solo su ficha: **Equipo › Acciones › Ver › Permisos**. El rol sigue igual para los demás.

**¿Puedo quitarle permisos al dueño?**
La pantalla dice que las cuentas de propietarios tienen acceso total al sistema.

**Cambié un permiso del rol y a un barbero no le cambió nada.**
Puede que sus permisos ya estuvieran personalizados en su ficha. Si el predeterminado del rol alcanza a quienes ya existen todavía no está comprobado; revisa la ficha de esa persona.
