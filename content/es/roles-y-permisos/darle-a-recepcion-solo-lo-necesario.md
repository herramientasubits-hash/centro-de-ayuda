---
id: roles-y-permisos/darle-a-recepcion-solo-lo-necesario
title: "Darle a recepción solo lo que necesita"
description: "Qué trae de fábrica el rol Recepción, qué conviene apagar o encender según cómo trabaja tu mostrador, y dónde hacerlo."
section: roles-y-permisos
order: 140
group: "Cambiar permisos"
roles: [owner]
screens: [/team-permission, /team/barbers/view/*]
keywords: [recepción, recepcionista, permisos de recepción, limitar a recepción, mostrador, secretaria, que no vea, solo lo necesario, quitar permisos, dar permisos, ver productos, ver métricas, borrar clientes]
related: [roles-y-permisos/permisos-recepcion, roles-y-permisos/tabla-de-permisos-por-rol, roles-y-permisos/cambiar-los-permisos-de-un-rol, roles-y-permisos/cambiar-los-permisos-de-una-persona, empezar/guia-de-recepcion]
status: draft
updated: 2026-09-25
---

# Darle a recepción solo lo que necesita

**En resumen:** de fábrica, la recepción maneja citas y clientes, ve productos y métricas, y no ve equipo, servicios, gastos ni nómina. Parte de esa fila y apaga o enciende según tu mostrador. Cada cambio se hace en **Configuración › Permisos** (para todas las recepcionistas nuevas) o en la ficha de la persona (solo para ella).

## Lo que trae de fábrica

En **Configuración › Permisos**, pestaña **Recepción - mostrador de recepción**:

![La pestaña Recepción con su matriz de permisos](/assets/es/roles-y-permisos/tabla-de-permisos-por-rol/recepcion.png)

| Bloque | Función | De fábrica |
|---|---|---|
| Reservas y clientes | Calendario | **Activo** |
| | Reservar citas | Ver, Crear, Editar, Borrar, Activo |
| | Bloquear calendario | Ver, Crear, Editar, Borrar, Activo |
| | Clientes | Ver, Crear, Editar, Activo (sin Borrar) |
| | Información del cliente | **Activo** |
| | Importar clientes | **Activo** |
| | Descarga de cliente | no |
| Equipo | todo el bloque | no |
| Métricas | Indicadores clave de rendimiento empresariales | **Activo** |
| Inventarios | Productos, Categorias | solo **Ver** |
| Servicios | todo el bloque | no |
| POS | Precios | **Activo** |
| Negocio | Configuraciones de la cuenta | Ver, Editar |
| | Fechas de cierre, Nómina, Permisos, Gastos | no |

La fila completa está en [Tabla de permisos](/ayuda/roles-y-permisos/tabla-de-permisos-por-rol).

## Qué apagar

Solo si en tu barbería no hace falta:

- **Métricas.** Si no quieres que el mostrador vea ventas e ingresos, apaga **Activo** en **Indicadores clave de rendimiento empresariales**. Sin ese permiso, la sección deja de aparecer en su menú.
- **Productos y Categorias.** Si recepción no vende ni consulta productos, apaga **Ver** en las dos filas de **Inventarios**.
- **Importar clientes.** Si no quieres que suba listas de clientes, apaga su **Activo**.
- **Bloquear calendario.** Si los bloqueos los decide el dueño, deja **Ver** y apaga **Crear**, **Editar** y **Borrar**.
- **Borrar** en **Reservar citas.** Si prefieres que las citas se cancelen pero no se borren, apaga **Borrar**.

## Qué encender

Solo si tu mostrador lo hace:

- **Borrar** en **Clientes**, si recepción limpia clientes duplicados.
- **Descarga de cliente**, si necesita bajar la lista.
- **Gastos** (Ver y Crear), si registra los gastos del día. De fábrica no tiene Gastos.

## Dónde hacerlo

| Para | Dónde |
|---|---|
| Todas las recepcionistas que crees **de ahora en adelante** | **Configuración › Permisos › Recepción - mostrador de recepción** ([Cambiar los permisos predeterminados de un rol](/ayuda/roles-y-permisos/cambiar-los-permisos-de-un-rol)) |
| Una recepcionista concreta, por ejemplo Laura | Su ficha en **Equipo**, **Acciones › Editar** › pestaña **Permisos** ([Cambiar los permisos de una persona](/ayuda/roles-y-permisos/cambiar-los-permisos-de-una-persona)) |

> [!NOTE]
> Lo confirmado por el dueño: quitar **Ver** en una función oculta esa sección del menú de la persona. Qué hace cada interruptor dentro de una pantalla (por ejemplo, si apagar **Borrar** en **Reservar citas** quita el botón **Cancelar** o solo un botón de borrar) no se ha comprobado con una cuenta de recepción. Tampoco está confirmado si cambiar el rol toca a quienes ya lo tienen.

## Preguntas frecuentes

**¿La recepción puede cobrar?**
De fábrica tiene **Reservar citas** completo y **Precios** activo. Qué botones de cobro ve con su cuenta no se ha comprobado en pantalla.

**Quiero que vea el equipo pero no los sueldos.**
Enciende **Ver** en **Equipo › Equipo** y deja apagada la **Sección de pagos de barberos**. En la ficha de cada barbero hay pestañas de **Compensación** o **Pagos**; qué oculta exactamente ese permiso está pendiente de confirmar.

**¿Dónde encuentro la ficha de una recepcionista en Equipo?**
La pestaña **Barberos** solo lista barberos. La pestaña **Gerentes** («Lista de miembros») lista a las demás personas; en la cuenta de prueba solo se vieron dueños ahí, así que que una recepcionista aparezca en **Gerentes** está pendiente de comprobar.
