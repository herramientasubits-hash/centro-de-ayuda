# Calendario en producción (`/calendar`)

Fuente: lectura con `scripts/inspect.mjs` y la sesión guardada, 2026-09-25, sucursal «mugen barber 2» (en las capturas,
«Mi Barbería»). Solo lectura: no se creó, movió, cobró ni canceló ninguna cita. Los textos van tal cual salen.

## Barra de herramientas (`.container-header-calendar`)

- **Equipo\*** (selector, valor por defecto **Trabajando**): opciones **Todo el equipo**, **Trabajando** y cada barbero
  activo en la sucursal por nombre.
- **‹ Dia anterior** · campo de fecha (solo lectura, «viernes 25 SEP», con icono que abre un selector de fecha mensual
  «septiembre 2026», L M M J V S D) · **Dia siguiente ›**. Cuando el día no es hoy aparece un botón **Hoy**.
- **Botón de ajustes** (icono de deslizadores): menú con **Horario de trabajo** (lleva a `Equipo › Horas de trabajo`)
  y **Lista de espera** (abre el panel).
- **Selector de vista**: **Agenda**, **Dia** (así, sin tilde), **Mes**.
- **Acciones**: **Crear cita**, **Crear venta rapida**, **Venta sin cita**, **Lista de cobros**.

## Vista Dia

- Una columna por barbero (foto o iniciales + nombre). Al tocar el nombre: **Ver barbero**, **Editar perfil de barbero**
  (en la vista Mes además **Crear bloque de tiempo**).
- Filas de media hora, 06:00 AM a 11:30 PM. Las franjas fuera del horario del barbero van sombreadas (`not-work`).
  Línea roja con la hora actual («10:12 am»).
- Si nadie trabaja ese día: «Nadie trabaja este día», «Ningún barbero tiene horario el viernes, 25 de septiembre de 2026.
  Si hay citas agendadas, las puedes ver en todo el equipo.», botones **Ver todo el equipo** y **Configurar horarios**.
- **Tocar una franja vacía** abre **Crear cita** con el **Barbero** y la **Fecha & Hora** ya puestos (p. ej.
  «santiago infante», «2026-09-25 11:00 am»).
- **Tarjeta de cita** (`section.calendar-card-appointment`, arrastrable): nombre del cliente, chip del tipo (**VIP**…),
  «Servicio $precio», «10:30 AM to 11:00 AM», barbero, un icono de aviso (triángulo) y el botón de estado **Ingresar**.
  Abajo un tirador «Cambiar duracion» (arrastrar para alargar o acortar). Borde de color por barbero/estado.

## Vista Agenda

Lista por día: selector **Todo el equipo** (deshabilitado si solo hay una opción), «Septiembre · Viernes 25», una fila por
cita: cliente, tipo (**VIP**), servicio, estado (**Pendiente**); al final «No hay más citas para mostrar».

## Vista Mes

Selector de barbero arriba (una persona), rejilla S M T W T F S (en inglés) con el número del día y **Ocup. 0.79 %** por
día (ocupación de ese barbero). Menú del barbero: **Ver barbero**, **Editar perfil de barbero**, **Crear bloque de tiempo**.

## Crear cita (panel derecho «Crear cita»)

Cuatro botones-campo: **Cliente**, **Servicio**, **Barbero**, **Fecha & Hora**; interruptor **Cliente sin cita previa**
(«El cliente llegó sin cita. Aplica la comisión de walk-in del barbero y se refleja en los reportes de agendamiento.»);
**Repetición** (**No se repite**, **Semanalmente**, **Cada dos semanas**, **Cada tres semanas**, **Mensualmente**, **Cada
dos meses**, **Cada tres meses**); botón **Crear**.

- **Cliente** → subpanel «Clientes»: buscador «Buscar en 44 Clientes», botón **Crear cliente**, primera opción **Walk in**
  («000******0000», tipo OTHER) y la lista con nombre, teléfono enmascarado y tipo (VIP, Retenido, Nuevo…).
- **Servicio** → «Servicios»: pestañas por categoría (**Todos los servicios**, y cada categoría), cada servicio con
  duración y precio «$70,000.00 & SUBIENDO».
- **Barbero** → «Barberos»: filtros por nivel (**Todos los barberos**, Senior, level 1, Master, 1, -) y la lista.
- **Fecha & Hora** → «Fecha & Hora»: tira de días del mes (mar. 1, mié. 2…) y horas agrupadas en **Mañana** (8:00 AM–11:30
  AM), **Tarde** (12:00 PM–5:30 PM), **Noche** (6:00 PM–11:30 PM), de media en media hora.

## Detalle de una cita (al tocar la tarjeta)

Cabecera: nombre, inicial, teléfono, chip de tipo (**VIP**), estado (**Pendiente**), botón **Acciones** (≡) y **×**.
Pestañas **Resumen · Notas · Cliente · Historial**.

- **Acciones** (menú): **Barbero listo**, **Ingresar**, **Sentado**, **Cobrar**, **No se presentó**, **Cancelar**.
- **Resumen**: **SIGUIENTE PASO** («angie aún no ha llegado.», botón **Ingresar · $70,000.00**, botón **Pagar cita**);
  **RECORRIDO DEL CLIENTE** (chip VIP, «31 visitas en esta sucursal», «Visita 31», escalera Nuevo → Retenido → Frecuente
  → VIP); **CITA · 25/SEP/2026** (Servicio, Cliente, Servicio «30 min», Barbero, Fecha & Hora «10:30 am - 11:00 am»,
  **Duración** «30 min» —botón «Haz clic para cambiar la duración»—, Precio, «1 servicios · 30 min», total);
  **FIDELIDAD** («Registrado automáticamente», «Gestionado por carlos mendez», «Esta cita no es con carlos mendez, que
  es quien lo gestiona.», «Pidió a joker», «Con joker 8 de 31 visitas», «Ha visto otros barberos 3»).
- **Notas**: pestañas **Notas**, **Medicamento**, **Alergias** (con contador), «Aquí encontrará las notas del cliente.»,
  botón **Agregar nota** → formulario **Tipo\***, **Descripción\***, **Crear**.
- **Cliente**: **RITMO DEL CLIENTE** («Cada 7 días», «Sobre 31 visitas», intervalos «11d 5d 1d…»), **AGÉNDALO PARA**
  («Lunes, 28/SEP»), **CUMPLIMIENTO** («Vino 31 de 31 veces», «Nunca ha faltado. Es confiable.»), **ALERTAS**
  («Canceladas 8»), **TODAS LAS VISITAS** (fecha, servicio, barbero, precio).
- **Historial**: **ACTIVIDAD DE LA CITA** («No se puede editar»), «Cita creada · En la barbería · joker jokerbusta ·
  25/SEP/2026, 10:16 am».

## Cobrar

- **Pagar cita** (desde el detalle): panel «Resumen» con **Servicios** (servicio, cliente, barbero, precio), **Añadir
  servicio**, **Añadir productos**, **Total de servicios y productos**, **Propina**, **Impuesto**, **Pedido total**,
  botones **Pagar cita** y **Abrir checkout completo**.
- **Checkout completo** (pantalla «Cobrar»): arriba **Añadir productos**, **Añadir servicio**, **Combinar citas**,
  **Agregar cliente**. **Métodos de pago** («Elige tu método de pago»): **Efectivo**, **Crédito/Débito**, **Link de
  pago**, **Pago mixto**. A la derecha **Resumen** y **Pedido total** (Total de servicios y productos, Propina,
  Impuesto, Total).
  - **Crédito/Débito** → «Elige un dispositivo», «Selecciona la terminal que procesará la transacción», «Aquí encontrarás
    el listado de todos los dispositivos de pago que tienes disponibles», **Agregar dispositivo**.
  - **Link de pago** y **Pago mixto** → «Añadir propina», «Selecciona la propina para el barbero», «Para <barbero>»,
    «¿Deseas agregar propina?», opciones **$10.00 / $15.00 / $20.00** (con el total resultante), **Sin propina**,
    **Personalizar**.
  - **Efectivo**: no se abrió más allá (cobraría).
- **Lista de cobros** («Listo para pagar», con el día «25 - septiembre» desplegable): pestañas **Por cobrar** («Aquí
  encontrarás todas tus citas pendientes por pagar») y **Pagado** («Aquí encontrarás todas tus citas pagadas»).

## Otras acciones

- **Crear venta rapida** → «Nueva venta», «Elige tu producto»: pestañas por categoría (Uncategorized, Johnny B,
  Powder…), productos con precio, **Total**, **Pagar orden**.
- **Venta sin cita** → **Fecha** (25/SEP/2026, con selector), hora (10:33), **Cliente**, **Servicio**, **Barbero**,
  **Crear**.
- **Lista de espera** → «Aquí podrás ver todas las citas que llegan por lista de espera en orden de programación.»,
  **Añadir a la lista de espera** → «Añadir lista de espera»: **Cliente**, **Servicio**, **Barbero**, **Fecha & Hora 1**
  (**Seleccione fecha**, **Seleccione hora**), **Añadir lista de espera** (otra franja), **Confirmar**.
- **Crear bloque de tiempo** (menú del barbero en Mes) → «Crear bloqueo»: **Categoria\*** (**Enfermo**, **Vacaciones**,
  **Festivo**, **Almuerzo**, **Reunión**, **Bloqueo del negocio**, **Bloqueo personal**), **Repetición\*** (**Diariamente**,
  **Semanalmente**, **Mensualmente**, **No se repite**, **Personalizado**), **Fecha de inicio\***, **Fecha Fin\***, **Hora
  de inicio\***, **Hora de cierre\***, **Descripción**, **Crear**.

## Pendiente (exige crear datos o cambiar estados)

Qué pasa tras **Crear**, **Ingresar**, **Sentado**, **Cobrar**, **No se presentó**, **Cancelar** (mensajes, colores de la
tarjeta, si pide motivo), cómo se ve una cita repetida, el flujo completo de **Efectivo**, **Combinar citas**, **Agregar
cliente**, arrastrar una cita a otra hora/columna, el bloque de tiempo en la cuadrícula, la reserva online del cliente.
