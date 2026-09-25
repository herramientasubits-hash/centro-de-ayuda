---
id: servicios/crear-un-combo
title: "Crear un combo de servicios"
description: "Cómo juntar varios servicios en un combo con un solo precio: el formulario Crear combo de servicios, agregar servicios, el precio combinado, la duración y qué muestra Ver combo."
section: servicios
order: 90
group: "Crear y editar"
roles: [owner, admin]
screens: [/services, /services/*]
keywords: [crear combo, combo de servicios, paquete de servicios, corte y barba, precio combinado, duración del combo, agregar servicio, promoción, oferta, dos servicios en uno, tarjetas de regalo, ver combo, lista de combos]
related: [servicios/como-se-organizan-tus-servicios, servicios/la-lista-de-servicios, servicios/crear-un-servicio, servicios/servicio-publico-o-privado, servicios/crear-una-categoria-de-servicios]
status: draft
updated: 2026-09-25
---

# Crear un combo de servicios

**En resumen:** un combo junta dos o más servicios con un **Precio combinado** y una **Duración del combo** propias, por ejemplo «Corte + barba» a 75 cuando por separado suman 80. Se crea con **Acciones › Crear combo**: nombre, los servicios, el precio, la categoría y **Continuar**.

## Pasos

1. En el menú lateral, abre **Servicios & Productos** y toca **Servicios**.
2. Toca **Acciones** y elige **Crear combo**. Se abre «Crear combo de servicios» con las pestañas **General**, **Equipo** y **Avanzado**.
   ![El formulario Crear combo de servicios: nombre, la lista de servicios, los totales y los Detalles del Combo](/assets/es/servicios/crear-un-combo/formulario.png)
3. Escribe el **Nombre**, por ejemplo «Corte + barba».
4. En «Seleccione sus servicios», toca **Agregar servicio** y elige el primero. Repite para cada servicio del combo. Debajo, **Total de Servicios** y **Duración Total** van sumando lo que valen y duran por separado.
5. En **Detalles del Combo**, escribe el **Precio combinado** (lo que cobras por el combo) y la **Duración del combo**.
6. Si quieres, escribe una **Descripción**.
7. Deja **Público** para que se vea en la reserva online, o pásalo a **Privado**.
8. Elige la **Categoría**.
9. Marca **Este servicio acepta tarjetas de regalo** si se puede pagar con una.
10. Toca **Continuar**.

## Los campos

| Campo | Obligatorio | Qué es |
|---|---|---|
| **Nombre** | Sí | Cómo se llama el combo en la lista y al reservar. |
| **Agregar servicio** | — | Suma un servicio del catálogo al combo. |
| **Total de Servicios** | — | Lo que sumarían los servicios por separado. Solo lectura. |
| **Duración Total** | — | Lo que durarían los servicios por separado. Solo lectura. |
| **Precio combinado** | Sí | Lo que cobras por el combo. Puede ser menor que el total. |
| **Duración del combo** | No | Cuánto aparta el calendario. Puede ser distinta de la duración total. |
| **Descripción** | No | Un texto libre con lo que incluye. |
| **Privado / Público** | — | Si el combo se ve en el agendamiento online. |
| **Categoría** | Sí | La categoría donde aparece. |
| **Este servicio acepta tarjetas de regalo** | No | Si el combo se puede pagar con una tarjeta de regalo. |

> [!NOTE]
> Qué pasa después de **Continuar**, y qué contienen las pestañas **Equipo** y **Avanzado** de un combo, todavía no está comprobado. Se completará con un combo de prueba. En un servicio suelto, esas pestañas son las de [Crear un servicio: quién lo hace](/ayuda/servicios/crear-un-servicio-equipo) y [opciones avanzadas](/ayuda/servicios/crear-un-servicio-avanzado).

## Qué muestra Ver combo

En la pestaña **Combos**, toca **Acciones › Ver** en la fila del combo.

![La pantalla Ver combo con Detalles, los Servicios Adicionales y los totales](/assets/es/servicios/crear-un-combo/ver-combo.png)

| Bloque | Qué muestra |
|---|---|
| Nombre y **Descripción** | El nombre del combo y su descripción. |
| **Detalles** | **Visibilidad**, **Color** (por ejemplo «Amarillo»), **Precio combinado** (por ejemplo $75.00), **Duración del combo** (por ejemplo 60 Minutos) y **Categoría**. |
| **Servicios Adicionales** | Cada servicio del combo con su duración y su precio: «Servicio 1: Corte clásico · 30 min · $50.00», «Servicio 2: Barba · 15 min · $30.00». |
| **Total de Servicios** y **Duración Total** | La suma de los servicios por separado (por ejemplo $80.00 y 45 min). |

El precio del combo puede ser menor que la suma, y su duración distinta. Eso es lo que lo hace un combo.

## Preguntas frecuentes

**¿El combo tiene que ser más barato que los servicios sueltos?**
No. Tú pones el **Precio combinado**. Lo habitual es que sea menor, pero la app no lo obliga.

**¿Puedo meter un combo dentro de otro combo?**
Con **Agregar servicio** se eligen servicios. Si acepta combos, todavía no está comprobado.

**¿Dónde veo el color del combo?**
En **Ver combo**, en **Detalles**. En el formulario de crear no se vio dónde se elige; se completará al crear un combo de prueba.
