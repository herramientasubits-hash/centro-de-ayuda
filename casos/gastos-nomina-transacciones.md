# Gastos (`/expenses`), Nómina (`/payroll`) y Transacciones (`/transactions`) en producción

Fuente: lectura con `scripts/inspect.mjs`, 2026-09-25, sucursal «mugen barber 2». Solo lectura. Textos tal cual.

## Gastos

- «Gastos», «Aquí podrás tener el control de todos tus gastos tanto si son recurrentes como si son esporádicos.»,
  **Acciones**: **Crear gasto fijo · Crear gasto variable**. Pestañas **Fijos · Variables**.
- **Fijos**: «Lista de gastos fijos», «2 Gastos fijos», buscador; tabla **Nombre · Frecuencia · Valor · Acciones**
  (p. ej. «Renta · Semanal · $4,534,534.00»). Paginación «Rows per page».
- **Variables**: «Lista de gastos variables», «1 Gastos variables»; tabla **Nombre · Valor · Acciones**.
- Fila → **Acciones** → **Ver · Editar · Borrar**.
- **Crear gasto fijo** (página, **Cancelar**): **Nombre\***, **Valor\***, **Frecuencia\*** (**Semanal · Cada 2 semanas ·
  Mensual · Trimestral · Semestral · Anual**), **Descripción**, **Añadir fotos - 0/3**, **Crear**.
- **Crear gasto variable**: **Nombre\***, **Valor\***, **Descripción**, **Añadir fotos - 0/3**, **Crear**.
- **Ver** (página «Gastos fijos», **Acciones**): **Información**: **Nombre**, **Valor**, **Frecuencia**, **Descripción**,
  **Fotos** («1/3»).

## Nómina

- «Nómina», «En este apartado podrás tener trazabilidad y control de tu barbería.», botón **Descargar** → **CSV · Excel ·
  PDF**. Pestañas **Barbero por comisión · Barbero de renta · Barbero por salario**.
- **Filtros**: **Sucursal** (selector) y **Rango de fechas** (campo de solo lectura «01/SEP/26 - 30/SEP/26» que abre un
  selector; en la cabecera de la tabla se ve el periodo «01 SEP - 15 SEP · 15 Dias» o «septiembre · 15 Dias»).
- **Barbero por comisión**: columnas **Miembro · Servicios · Venta de servicios · Venta de productos · Comisión de
  servicios · Comisión de productos · Total comisiones · Impuestos · Propinas · Pago neto**. Primera fila **All** (el
  total del equipo), luego una fila por barbero (p. ej. «santiago infante · 1 · $50.00 · $0.00 · $10.00 · $0.00 · $10.00 ·
  $0.00 · $0.00 · $10.00»).
- **Barbero de renta**: **Miembro · Servicios · Venta de servicios · Venta de productos · Comisión de servicios ·
  Comisión de productos · Total comisiones · Propinas · Renta fija · Pago neto**.
- **Barbero por salario**: **Miembro · Venta de productos · Comisión de productos · Impuestos · Propinas · Salario ·
  Pago neto**.
- El ciclo de pago (semanal, quincenal «BIWEEKLY», mensual) y el día de inicio se configuran en **Configuración › Nomina**
  (`/settings/payroll`); lo que se deduce antes de calcular la comisión, en **Configuración › Comisiones**.

## Transacciones

- «Transacciones», icono de **lupa** (buscador «Buscar») y de **recargar**. Encabezado «mugen barber 2 · 01 SEP – 25 SEP
  2026 · 38 cuentas».
- Filtros: **DESDE** y **HASTA** (campos de fecha; por defecto del 1 del mes a hoy), **ESTADO DE LA CUENTA** (**Todos ·
  Por cobrar · Cobrada · Devuelta**), **ESTADO DE LA CITA** (**Todos · Agendada · Llegó · En silla · Cerrada · Terminada ·
  Cancelada**), botón **Aplicar**.
- Tarjetas: **FACTURADO** ($10,591,555.00 · 38 cuentas), **COBRADO** ($10,260,490.00 · 15 cuentas), **POR COBRAR**
  ($331,065.00 · 23 cuentas abiertas), **PROPINAS** ($0.00), **DEVUELTO** ($0.00 · 0 cuentas).
- Tabla ordenable: **Fecha** («25 SEP 10:16 AM»), **Factura** («—» si no tiene), **Cliente** (nombre y teléfono), **Atendió**
  (barbero y «1 servicio»), **Estado** (**POR COBRAR** / **COBRADA**), **Total**, **Cobrado**, **Método** («—», CASH…).
  Cada fila se despliega para ver el detalle de la cuenta. Los clientes sin registro salen como «Walk in».

## No visto

El selector de rango de Nómina abierto, una fila de Nómina en detalle, el detalle desplegado de una cuenta en
Transacciones (qué trae), **Devuelta** en uso, qué pasa tras **Crear/Editar/Borrar** un gasto, subir fotos a un gasto.
