---
id: roles-y-permisos/cambiar-los-permisos-de-un-rol
title: "Cambiar los permisos predeterminados de un rol"
description: "Cómo se ajusta en Configuración › Permisos lo que trae de fábrica cada rol: la pestaña por rol, la matriz Ver, Crear, Editar, Borrar y Activo, y qué falta por confirmar sobre a quién afecta."
section: roles-y-permisos
order: 120
group: "Cambiar permisos"
roles: [owner]
screens: [/team-permission]
keywords: [cambiar permisos de un rol, permisos predeterminados, permisos por defecto, configuración permisos, matriz de permisos, ver crear editar borrar activo, rol, administrador, recepción, barbero, quitar permiso, dar permiso, personalizar por ubicación]
related: [roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/cambiar-los-permisos-de-una-persona, roles-y-permisos/darle-a-recepcion-solo-lo-necesario, configuracion/permisos-donde-se-cambian]
status: draft
updated: 2026-09-25
---

# Cambiar los permisos predeterminados de un rol

**En resumen:** en **Configuración › Permisos** hay una pestaña por rol y, en cada una, la matriz de funciones con **Ver**, **Crear**, **Editar**, **Borrar** y **Activo**. Lo que cambias ahí son los valores **predeterminados** con los que nacen las personas nuevas de ese rol.

## Cómo llegar

1. Toca **Configuración** en el menú.
2. En el grupo **Equipo**, toca **Permisos**: «Gestiona las secciones y funciones que puede realizar cada usuario de tu barbería en función de su rol.»
   ![La pantalla Permisos con las pestañas por rol y la matriz](/assets/es/configuracion/permisos-donde-se-cambian/pantalla.png)

## Lo que dice la pantalla

> Las configuraciones que aquí se establezcan serán las opciones predeterminadas al crear nuevos roles, aunque se pueden personalizar individualmente por ubicación y al crear o editar cada usuario. Las cuentas de propietarios tienen acceso total al sistema.

Tres cosas salen de ahí:

- Es el **punto de partida** de cada rol, no el permiso de una persona concreta.
- Se puede **personalizar por persona** en su ficha ([Cambiar los permisos de una persona](/ayuda/roles-y-permisos/cambiar-los-permisos-de-una-persona)).
- Al **dueño** no se le quita nada: tiene acceso total.

## Pasos

1. Toca la pestaña del rol: **Administrador de la locación**, **Barbero por comisión**, **Barbero por renta**, **Recepción - mostrador de recepción** o **Dueño**.
   ![La pestaña Recepción con su matriz de permisos](/assets/es/roles-y-permisos/tabla-de-permisos-por-rol/recepcion.png)
2. Busca la función en su bloque: **Reservas y clientes**, **Equipo**, **Métricas**, **Inventarios**, **Servicios**, **POS** o **Negocio**.
3. Enciende o apaga las columnas que quieras: **Ver**, **Crear**, **Editar**, **Borrar** o **Activo**. Algunas filas solo tienen **Activo**; otras no tienen las cinco.
4. Guarda los cambios.

> [!NOTE]
> Este artículo se escribió leyendo la pantalla sin cambiar ningún interruptor. No está comprobado cómo se guarda (si hay un botón **Guardar** o si cada interruptor se aplica al tocarlo) ni si cambiar el predeterminado de un rol **toca a las personas que ya lo tienen**. Hasta confirmarlo, si quieres cambiar a alguien que ya existe, hazlo en su ficha.

## Qué significa cada columna

| Columna | Qué permite |
|---|---|
| **Ver** | Ver la función. Sin **Ver**, la sección deja de aparecer en el menú de esa persona |
| **Crear** | Crear cosas en ella |
| **Editar** | Cambiar lo que ya existe |
| **Borrar** | Borrar |
| **Activo** | Que la función exista para ese rol |

Los valores de fábrica de los cinco roles están en [Tabla de permisos: qué puede hacer cada rol](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).

## Ejemplos

- **Que los barberos por comisión puedan bloquear su calendario.** En la pestaña **Barbero por comisión**, la fila **Bloquear calendario** trae solo **Ver** y **Activo**. Enciende **Crear**.
- **Que la recepción no vea productos.** En **Recepción - mostrador de recepción**, la fila **Productos** trae **Ver**. Apágalo ([Darle a recepción solo lo que necesita](/ayuda/roles-y-permisos/darle-a-recepcion-solo-lo-necesario)).
- **Que el administrador vea la Sección de pagos de barberos.** En **Administrador de la locación** esa fila está en «no». Enciende **Activo**.

## Preguntas frecuentes

**¿Puedo hacer que un rol tenga menos que otro?**
Sí, cada pestaña es independiente. Lo único fijo es que las cuentas de propietarios tienen acceso total.

**¿Dónde se «personaliza por ubicación»?**
La pantalla lo menciona, pero con la cuenta del dueño no se encontró dónde. Está pendiente de confirmar ([Ajustes generales y por sucursal](/ayuda/sucursales/ajustes-generales-y-por-sucursal)).

**Cambié el rol y una persona sigue viendo lo mismo.**
Puede que el cambio del rol no toque a quienes ya existen. Ajusta a esa persona en su ficha, pestaña **Permisos**.
