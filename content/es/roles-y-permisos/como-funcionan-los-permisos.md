---
id: roles-y-permisos/como-funcionan-los-permisos
title: "Cómo funcionan los permisos: Ver, Crear, Editar, Borrar y Activo"
description: "Qué significa cada columna de la pantalla de Permisos y cómo se reparten entre el rol y cada persona."
section: roles-y-permisos
order: 30
roles: [owner, admin]
screens: [/team-permission, /team/barbers]
keywords: [permisos, ver, crear, editar, borrar, activo, matriz de permisos, roles, personalizar permisos, qué puede hacer, acceso total, propietario]
related: [roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/cambiar-los-permisos-de-una-persona, roles-y-permisos/de-que-depende-lo-que-ves]
status: draft
updated: 2026-09-25
---

# Cómo funcionan los permisos: Ver, Crear, Editar, Borrar y Activo

**En resumen:** los permisos deciden qué secciones ve una persona y qué puede hacer en ellas. Se guardan como una tabla con las columnas **Ver**, **Crear**, **Editar**, **Borrar** y **Activo**.

## Dónde están

En **Configuración › Permisos**, en el grupo **Equipo**. Hay una pestaña por rol. La pantalla dice:

> Las configuraciones que aquí se establezcan serán las opciones predeterminadas al crear nuevos roles, aunque se pueden personalizar individualmente por ubicación y al crear o editar cada usuario. Las cuentas de propietarios tienen acceso total al sistema.

## Cómo leer la tabla

Cada fila es una función de la app. Cada columna es algo que se puede permitir:

| Columna | Qué permite |
|---|---|
| **Ver** | Ver la función |
| **Crear** | Crear cosas en ella |
| **Editar** | Cambiar lo que ya existe |
| **Borrar** | Borrar |
| **Activo** | Que la función exista para ese rol |

Algunas filas solo tienen el interruptor **Activo**. Otras no tienen las cinco columnas.

Las funciones están agrupadas en: **Reservas y clientes**, **Equipo**, **Métricas**, **Inventarios**, **Servicios**, **POS** y **Negocio**.

## Del rol a cada persona

- Cada rol trae unos permisos de fábrica. Míralos en [Tabla de permisos](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).
- Cuando creas a una persona, recibe una copia de los permisos de su rol.
- Después puedes ajustarlos **para esa persona**: en su ficha, pestaña **Permisos** ([La ficha de un barbero: permisos](/ayuda/equipo/ficha-de-un-barbero-permisos)).

Por eso dos barberos con el mismo rol pueden tener permisos distintos.

## Qué pasa cuando quitas un permiso

Si a una persona le quitas **Ver** en una función, esa sección deja de aparecer para ella. Por ejemplo, si le quitas **Ver** en **Equipo**, no ve la sección Equipo.

## Preguntas frecuentes

**¿Si cambio los permisos de un rol, cambian los de las personas que ya lo tienen?**
Todavía no está documentado.

**¿Puedo quitarle permisos al dueño?**
La pantalla dice que las cuentas de propietarios tienen acceso total al sistema.
