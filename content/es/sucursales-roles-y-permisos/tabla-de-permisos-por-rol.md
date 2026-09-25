---
id: sucursales-roles-y-permisos/tabla-de-permisos-por-rol
title: "Tabla de permisos: qué puede hacer cada rol"
description: "Los permisos de fábrica de cada uno de los cinco roles, función por función."
section: sucursales-roles-y-permisos
order: 90
roles: [owner, admin]
screens: [/team-permission]
keywords: [tabla de permisos, permisos por rol, qué puede hacer cada rol, administrador, recepción, barbero por comisión, barbero de renta, dueño, matriz, predeterminados]
related: [sucursales-roles-y-permisos/como-funcionan-los-permisos, sucursales-roles-y-permisos/los-cinco-roles, sucursales-roles-y-permisos/cambiar-los-permisos-de-una-persona]
status: review
updated: 2026-09-25
---

# Tabla de permisos: qué puede hacer cada rol

**En resumen:** esta tabla copia lo que trae **Configuración › Permisos** de fábrica. Lo que ves ahí puede ser distinto si alguien ajustó los permisos de un rol o de una persona.

**Cómo leerla:** **V** = Ver, **C** = Crear, **E** = Editar, **B** = Borrar, **A** = Activo. «No» = la función no está permitida para ese rol. «—» = la función no aparece para ese rol. Una **A** sola quiere decir que la fila solo tiene el interruptor **Activo**.

| Función | Administrador | Barbero por comisión | Barbero de renta | Recepción | Dueño |
|---|---|---|---|---|---|
| **Reservas y clientes** | | | | | |
| Calendario | A | A | A | A | A |
| Reservar citas | V C E B A | V C E B A | V C E B A | V C E B A | V C E B A |
| Bloquear calendario | V C E B A | V A | V C E B A | V C E B A | V C E B A |
| Clientes | V C E B A | V C A | V C E B A | V C E A | V C E B A |
| Información del cliente | A | no | no | A | A |
| Importar clientes | A | no | A | A | A |
| Descarga de cliente | no | no | A | no | A |
| **Equipo** | | | | | |
| Equipo | V C E B A | V | — | no | V C E B A |
| Gerentes | V C E B A | no | — | no | V C E B A |
| Sección de pagos de barberos | no | no | — | no | A |
| Niveles | V C E B A | no | — | no | V C E B A |
| Póngase en fila | V C E B A | no | — | no | V C E B A |
| Ordenar barberos agendas | no | no | — | no | V C E B A |
| **Métricas** | | | | | |
| Indicadores clave de rendimiento empresariales | A | no | — | A | A |
| **Inventarios** | | | | | |
| Productos | V C E B A | no | — | V | V C E B A |
| Categorias | V C E B A | no | — | V | V C E B A |
| **Servicios** | | | | | |
| Servicios | V C E B A | no | — | no | V C E B A |
| Categorias | V C E B A | no | — | no | V C E B A |
| Póngase en fila | V E A | no | — | no | V E A |
| **POS** | | | | | |
| Precios | A | A | A | A | A |
| **Negocio** | | | | | |
| Fechas de cierre | V C E B A | no | — | no | V C E B A |
| Nómina de sueldos | V C E | no | — | no | V C E |
| Permisos | V E A | no | — | no | V E A |
| Configuraciones de la cuenta | V E A | V | V | V E | V E A |
| Gastos | V C E B A | V C E B A | V C E B A | no | V C E B A |

## Lo que se lee de un vistazo

- **Dueño:** acceso a todo. Es el único con **Sección de pagos de barberos** y **Ordenar barberos agendas**.
- **Administrador de la locación:** casi todo lo del dueño, sin pagos de barberos ni ordenar agendas.
- **Recepción:** citas y clientes; ve productos y métricas; no ve gastos ni equipo.
- **Barbero por comisión:** reserva citas, ve y crea clientes, ve al equipo y registra gastos. No toca catálogos, nómina ni permisos.
- **Barbero de renta:** solo tiene tres bloques: Reservas y clientes, POS, y en Negocio, **Configuraciones de la cuenta** y **Gastos**.

## Preguntas frecuentes

**¿Puedo cambiar esta tabla?**
Sí, en **Configuración › Permisos**, con una pestaña por rol. También puedes ajustar los permisos de una sola persona en su ficha.

**Un barbero me dice que no ve una sección.**
Mira [No veo una sección del menú](/ayuda/sucursales-roles-y-permisos/no-veo-una-seccion-del-menu).
