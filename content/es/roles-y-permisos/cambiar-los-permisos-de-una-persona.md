---
id: roles-y-permisos/cambiar-los-permisos-de-una-persona
title: "Cambiar los permisos de una persona sin cambiar su rol"
description: "Cómo dar o quitar permisos a un solo miembro del equipo desde su ficha, pestaña Permisos, sin tocar los predeterminados de su rol."
section: roles-y-permisos
order: 130
group: "Cambiar permisos"
roles: [owner, admin]
screens: [/team/barbers, /team/barbers/view/*]
keywords: [permisos de una persona, permisos de un barbero, cambiar permisos, dar permiso, quitar permiso, ficha pestaña permisos, sin cambiar el rol, personalizar permisos, un barbero no ve, editar barbero, permisos por usuario]
related: [equipo/ficha-de-un-barbero-permisos, roles-y-permisos/cambiar-los-permisos-de-un-rol, roles-y-permisos/como-funcionan-los-permisos, roles-y-permisos/no-veo-una-seccion-del-menu, equipo/editar-a-un-miembro-del-equipo]
status: draft
updated: 2026-09-25
---

# Cambiar los permisos de una persona sin cambiar su rol

**En resumen:** abre la ficha de la persona en **Equipo**, entra en la pestaña **Permisos** y cambia sus interruptores. Sus permisos se copiaron de su rol al crearla; lo que cambies aquí vale solo para ella.

## Pasos

1. Toca **Equipo** en el menú y, en **Barberos**, busca a la persona. Los gerentes están en la pestaña **Gerentes**.
2. En su fila, toca **Acciones**.
   ![El menú Acciones de un barbero con Ver, Editar, Inactivar y Borrar](/assets/es/equipo/la-lista-de-barberos/acciones-fila.png)
3. Elige **Editar Barbero por comisión** (o **Editar Barbero de renta**, **Editar Dueño**…).
4. Toca la pestaña **Permisos**.
   ![La pestaña Permisos de la ficha, con la matriz por bloques](/assets/es/equipo/ficha-de-un-barbero-permisos/ver.png)
5. Enciende o apaga **Ver**, **Crear**, **Editar**, **Borrar** o **Activo** en la función que quieras.
6. Guarda.

> [!NOTE]
> La pestaña **Permisos** se vio en **Ver** y el formulario de **Editar** con sus pestañas. No se cambió ningún interruptor ni se tocó **Guardar**, así que el botón exacto y el mensaje de confirmación están pendientes de comprobar con una persona de prueba.

## Qué cambia y qué no

- **Sí:** lo que esa persona ve y puede hacer. Confirmado por el dueño: si le quitas **Ver** en **Equipo**, la sección Equipo desaparece de su menú.
- **No:** su rol. Sigue siendo barbero por comisión, de renta, recepción o administrador, y así aparece en la lista.
- **No:** los demás. Los otros barberos con el mismo rol no cambian.
- **No:** los predeterminados del rol. Esos se cambian en **Configuración › Permisos** ([Cambiar los permisos predeterminados de un rol](/ayuda/roles-y-permisos/cambiar-los-permisos-de-un-rol)).

## Ejemplos

| Quieres | En su ficha, pestaña Permisos |
|---|---|
| Que Carlos, barbero por comisión, pueda crear bloqueos en su calendario | **Reservas y clientes › Bloquear calendario**: enciende **Crear** (de fábrica solo trae **Ver**) |
| Que Laura, recepción, no vea Métricas | **Métricas › Indicadores clave de rendimiento empresariales**: apaga **Activo** |
| Que un barbero no vea a los demás del equipo | **Equipo › Equipo**: apaga **Ver** |

Un barbero de prueba de la cuenta tenía **Bloquear calendario** completo, frente al solo **Ver** de su rol: es la prueba de que se personaliza por persona.

## Preguntas frecuentes

**¿Puedo darle más permisos que a su rol?**
Sí. La ficha admite cualquier combinación.

**¿Y quitarle permisos al dueño?**
La pantalla de Permisos dice que las cuentas de propietarios tienen acceso total al sistema.

**Le cambié los permisos y sigue viendo lo mismo.**
Pídele que cierre sesión y vuelva a entrar. Si sigue igual, revisa con qué perfil entró ([No veo una sección del menú](/ayuda/roles-y-permisos/no-veo-una-seccion-del-menu)).
