---
id: equipo/ficha-de-un-barbero-permisos
title: "La ficha de un barbero: permisos"
description: "Cómo se ven y se ajustan los permisos de una persona: se copian de su rol al crearla y luego se pueden personalizar."
section: equipo
order: 140
roles: [owner, admin]
screens: [/team/barbers/view/*]
keywords: [permisos de un barbero, permisos de una persona, matriz de permisos, ver crear editar borrar, quitar permisos, ocultar sección del menú, personalizar permisos, permisos por usuario, rol y permisos, no ve una sección]
related: [sucursales-roles-y-permisos/tabla-de-permisos-por-rol, sucursales-roles-y-permisos/como-funcionan-los-permisos, equipo/ficha-de-un-barbero-perfil]
status: draft
updated: 2026-09-25
---

# La ficha de un barbero: permisos

**En resumen:** en la pestaña **Permisos** de la ficha ves y ajustas lo que esa persona puede hacer. Sus permisos se copian de su rol cuando la creas y, después, puedes personalizarlos. Si le quitas **Ver** en una función, esa sección desaparece de su menú.

## Cómo llegar

1. Toca **Equipo** en el menú lateral.
2. En la pestaña **Barberos**, toca **Ver** en la fila de la persona.
3. Toca la pestaña **Permisos**.

> [!IMPORTANT]
> La ficha solo carga si entras desde la lista de barberos.

## Cómo se lee la matriz

La pestaña muestra una matriz: las filas son las funciones de la app y las columnas son **Ver**, **Crear**, **Editar**, **Borrar** y **Activo**. Algunas filas solo tienen el interruptor **Activo**, y otras no tienen todas las columnas.

Las funciones están agrupadas por bloques: Reservas y clientes, Equipo, Métricas, Inventarios, Servicios, POS y Negocio.

Es la misma matriz que ves en **Configuración** › **Permisos**, pero aquí es la de esta persona.

## De dónde salen los permisos de una persona

1. Cuando creas a la persona, sus permisos se **copian de su rol**. Los valores de fábrica de cada rol están en [Tabla de permisos por rol](/ayuda/sucursales-roles-y-permisos/tabla-de-permisos-por-rol).
2. Después, los puedes **personalizar** en esta pestaña.

Por eso los permisos de una persona pueden ser distintos a los de su rol. Por ejemplo, un barbero por comisión puede tener **Bloquear calendario** completo, aunque el valor de su rol sea solo **Ver**.

## Qué pasa si quitas «Ver»

Si le quitas **Ver** a una persona en una función, esa sección deja de aparecer en su menú. Por ejemplo, si le quitas **Ver** en **Equipo**, esa persona ya no ve la sección Equipo.

El menú de cada persona se arma con sus permisos. Además depende del perfil con el que entra y de la sucursal elegida.

> [!NOTE]
> Los permisos de **Configuración** › **Permisos** son los valores predeterminados al crear personas nuevas. Aún no está documentado si cambiar el predeterminado de un rol modifica a quienes ya lo tienen.

## Preguntas frecuentes

**Un barbero no ve una sección del menú, ¿qué reviso?**
Abre su ficha, pestaña **Permisos**, y revisa que tenga **Ver** en la función de esa sección.

**¿Puedo darle a una persona más permisos que a los de su rol?**
Sí. Los permisos se copian del rol al crearla y luego se personalizan en esta pestaña.

**¿Los dueños también tienen permisos que ajustar?**
La app dice: «Las cuentas de propietarios tienen acceso total al sistema.»
