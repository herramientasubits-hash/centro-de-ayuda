---
id: productos/editar-o-borrar-un-producto
title: "Editar o borrar un producto"
description: "Cómo ver, editar y borrar un producto que ya existe: la pantalla Ver producto, el formulario con las pestañas General y Avanzado, el botón Guardar y Acciones › Borrar."
section: productos
order: 80
roles: [owner, admin]
screens: [/products, /products/*]
keywords: [editar producto, cambiar el precio de un producto, subir el precio, borrar producto, eliminar producto, quitar un producto, ya no vendo este producto, ver producto, modificar un producto, renombrar, cambiar de categoría, marca, distribuidor, guardar cambios]
related: [productos/la-lista-de-productos, productos/crear-un-producto, productos/precio-de-compra-precio-de-venta-y-sku, productos/producto-publico-o-privado, sucursales/activar-productos-en-una-sucursal]
status: draft
updated: 2026-09-25
---

# Editar o borrar un producto

**En resumen:** en la lista de productos, toca **Acciones** en la fila del producto: **Ver** lo muestra, **Editar** abre el formulario con las pestañas **General** y **Avanzado** para cambiarlo y **Guardar**, y **Borrar** lo elimina del catálogo. Para dejar de venderlo sin borrarlo, apaga **Disponibilidad de venta** o desactívalo en la sucursal.

## Ver un producto

Toca **Acciones › Ver**. Se abre **Ver producto**, solo lectura, con el botón **Acciones** y las pestañas **General** y **Avanzado**.

![La pantalla Ver producto con la pestaña General](/assets/es/productos/editar-o-borrar-un-producto/ver.png)

| Bloque | Qué muestra |
|---|---|
| **General** | Nombre del producto, Descripción, Categoría, Impuestos, Precio de compra (por ejemplo 30000.00), Precio de venta (por ejemplo 50000.00), Código sku («--» si está vacío), Privado/Público, Disponibilidad de venta y Fotos. |
| **Avanzado** | Marca y Distribuidor. |

## Editar un producto

1. En el menú lateral, abre **Servicios & Productos** y toca **Productos**. Ve a la pestaña **Productos**.
2. Busca el producto y, en su fila, toca **Acciones** › **Editar**.
3. Cambia lo que necesites:

| Qué quieres cambiar | Pestaña | Campo |
|---|---|---|
| El nombre, la categoría, los impuestos, los precios, el SKU, si es público, si se vende, las fotos | **General** | Los de [Crear un producto](/ayuda/productos/crear-un-producto) |
| La marca o el distribuidor | **Avanzado** | **Marca**, **Distribuidor** |

   ![La pestaña Avanzado de un producto con Marca, Distribuidor y el botón Guardar](/assets/es/productos/editar-o-borrar-un-producto/avanzado.png)
4. Toca **Guardar**.

> [!NOTE]
> Qué muestra la app después de **Guardar**, y si un cambio de precio afecta a las ventas ya cobradas, todavía no está comprobado. Se completará con un producto de prueba.

## Borrar un producto

1. En la fila del producto, toca **Acciones**.
   ![El menú Acciones de una fila con Ver, Editar y Borrar](/assets/es/productos/la-lista-de-productos/acciones-fila.png)
2. Toca **Borrar**.

> [!WARNING]
> Borrar es para toda la barbería, no solo para la sucursal que tienes elegida. Si otra sucursal lo vende, desactívalo en la tuya con **Activar productos de barbería** en vez de borrarlo.

> [!NOTE]
> Qué pasa después de **Borrar** (si pide confirmar y qué ocurre con su historial de ventas en Métricas y en la ficha de los clientes) todavía no está comprobado.

## Dejar de vender sin borrar

| Quieres | Qué hacer |
|---|---|
| Que tu equipo no lo venda más, en ninguna sucursal | **Editar**, pestaña **General**, apaga **Disponibilidad de venta**, **Guardar**. |
| Que una sucursal no lo venda más | **Acciones › Activar productos de barbería** y apaga su interruptor ([Activar productos en una sucursal](/ayuda/sucursales/activar-productos-en-una-sucursal)). |
| Que el cliente no lo vea al reservar online | **Editar**, pestaña **General**, interruptor en **Privado**, **Guardar**. |

## Preguntas frecuentes

**Se acabó el producto. ¿Lo borro?**
No. Apaga **Disponibilidad de venta** hasta que vuelva a llegar. Así conservas su historial y sus precios.

**¿Puedo cambiar el precio de venta y que aplique solo a una sucursal?**
No. El producto tiene un solo precio para toda la barbería.

**Borré un producto por error. ¿Lo recupero?**
Todavía no está comprobado si se puede. Lo más seguro es crearlo de nuevo con los mismos datos y activarlo en cada sucursal.
