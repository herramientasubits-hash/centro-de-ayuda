# Clientes en producción (`/customers`)

Fuente: lectura con `scripts/inspect.mjs`, 2026-09-25, sucursal «mugen barber 2». Solo lectura. Textos tal cual.

## Lista (`/customers`)

- Título «Clientes», «En esta sección puedes gestionar a tus clientes.», botón **Crear cliente**.
- **Pestañas por tipo** (`nav.child-menu-filter`): **Todos · Nuevo · Retenido · Frecuente · VIP · Pre-perdida · Perdido ·
  Recuperado · Bloqueo**. Al elegir una (menos Todos) aparece su definición:
  - **Nuevo**: «Los clientes nuevos son aquellos que aún no han tenido citas o solo una cita.»
  - **Retenido**: «Estos clientes son aquellos que han tenido 2 citas en la barbería.»
  - **Frecuente**: «Son los clientes que tienen 3 o más citas en la barbería y son los clientes que ya son habituales en
    la barbería.»
  - **VIP**: «Estos son los clientes que nos han visitado por más de 3 ciclos, lo que significa que son clientes muy
    fieles a la barbería.»
  - **Pre-perdida**: «Estos son los clientes que han dejado de acudir a la peluquería durante 3 ciclos de frecuencia, es
    decir, corren el riesgo de perderlos.»
  - **Perdido**: «Estos son los clientes que han dejado de acudir a la peluquería durante 4 ciclos de frecuencia de visita
    y ya los han perdido.»
  - **Recuperado**: «Son los clientes que ya están perdidos pero que volvieron a la peluquería y que debemos cuidar para
    que vuelvan con frecuencia.»
  - **Bloqueo**: «Son los clientes que hemos bloqueado por algún motivo. Estos clientes no pueden hacer citas online.»
- «Lista de clientes» · «43 Clientes» · buscador con botón **Buscar**.
- Tabla ordenable (▲): **Nombre** (iniciales + nombre), **Sucursal**, **Tipo** (insignia de color), **LTV**, **Teléfono**
  (enmascarado `+57******2020`), **Correo**, **# Citas**, **Acción** → botón **Acciones** → **Ver**.
- Paginación: «Rows per page: 10 / 15 / 20 / 25 / 30», «1-10 of 43».

## Crear cliente (página «Crear cliente», botón **Cancelar**)

**Primer nombre\***, **Primer apellido\***, **Teléfono\***, **Correo\***, **País**, **Estado**, **Ciudad**, **Dirección**,
**Código Postal**, **Fecha de nacimiento**, interruptor **Reserva y pago solo online**, botón **Crear**.

## Ver cliente (`/customers/{id}`, solo desde la lista)

Título «Ver cliente». Botón **Acciones** → **Crear nota**, **Crear cita**, **Bloquear cliente**. Pestañas
**Información general · Perfil · Citas · Métodos de pago · Productos**.

- **Información general**: **Total de citas** (96) · **Ver indice** (0.00 %) · **FOV** (0.4 Semana) · **LTV**
  ($10,462,135.00) · **Promedio de venta** ($232,491.88) · **Número de transacciones** (45) · **Completadas** (34.04 %) ·
  **Canceladas** (8.25 %) · **No asistió** (0.00 %) · **Vuelve a reservar** (1.03 %) · **Tiempo de reserva** (0 Semana) ·
  **AVF** (3 Dias). Bloque «Información importante»: **No se presento** (0), **Canceladas** (8). «Última cita»: servicio,
  Fecha 25/SEPT/2026, Barbero, estado **Pendiente**, botones **Ver** y **Ver más** (va a la pestaña Citas). «Notas del
  cliente»: pestañas **Notas · Medicamento · Alergias**, «Aquí encontrará las notas del cliente.», botón **Crear nota**.
- **Perfil**: nombre, insignia de tipo (**VIP**), interruptor **Reserva y pago solo online**; **Ubicación** (País, Estado,
  Ciudad, Dirección, Código postal), **Fecha de nacimiento**, **Actitud** («--»), **Fecha de creación** (28/MAY/2026),
  **Familia y amigos** (persona, relación «Amigo», tipo).
- **Citas**: una tarjeta por cita: servicio, **Fecha**, **Barbero**, **Tipo de agendamiento** (Interno / Cita online),
  **Sin preferencia** (No/Sí), estado (**Pendiente**, **Completada**…), botón **Ver**.
- **Métodos de pago**: «Transacciones», filtros **Tarjetas de Credito · Tienda · Stripe**, **Desde**, **Hasta**; tabla
  **Fecha**, **Tipo** (Pagado), **Valor**, **ID de transacción**, **Acción** → **Ver Detalle**.
- **Productos**: producto y «5 Unidades».

## Acciones

- **Crear nota** (modal): **Tipo\*** (**Notas**, **Medicamento**, **Alergias**), **Descripción\***, **Crear**.
- **Bloquear cliente** (modal): «Si bloqueas el cliente no podrá realizar citas online.», **Descripción\***, botón **Bloqueo**.
- **Crear cita**: abre el flujo de Crear cita del calendario.

## No visto

Formulario de **Familia y amigos** (no hay botón en Acciones; la sección aparece en Perfil), **Importar clientes** y
**Descarga de cliente** (existen como permisos; no se vio botón en la lista), qué pasa al guardar un cliente, el
desbloqueo, el detalle de una transacción.
