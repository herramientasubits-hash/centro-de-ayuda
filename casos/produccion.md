# Mapa de la aplicación en producción

Fuente: recorrido de **https://dash.barberlytics.com** el 2026-09-24, con una sesión abierta por
Elkin (cuenta de prueba «mugen barber 2»), solo leyendo: sin guardar, crear ni borrar nada.

**Regla del centro de ayuda:** solo se documenta lo que existe aquí. Lo que vive únicamente en el
rediseño (Thema) o en Notion no entra hasta que llegue a producción. Los textos de botones y
títulos están tal cual salen en pantalla, con sus mayúsculas y sus erratas; los artículos los
citan igual.

Lo que **no** se pudo ver está al final, en «Pendiente de confirmar».

---

## Marco de la aplicación

- **Menú lateral** (iconos, orden de arriba abajo): Métricas `/` · Calendario `/calendar` ·
  Clientes `/customers` · Servicios y Productos (grupo desplegable: `/services`, `/products`) ·
  Equipo `/team/barbers` · Gastos `/expenses` · Nómina `/payroll` · Transacciones
  `/transactions` · Configuración `/settings`.
- **Cabecera:** botón de menú (colapsa el lateral) · selector de sucursal · lupa · campana ·
  idioma · cuenta.
  - **Sucursal:** lista las sucursales del negocio y «Todas las sucursales».
  - **Lupa** → pantalla «Buscar» (`/search-appointment`): un campo para buscar citas.
  - **Campana** → panel «Notificaciones» con pestañas **Todas** y **No leídas**. Cada aviso trae
    su módulo en negrita («Agenda:», ...), el texto y la fecha, y un punto rojo si no se ha leído.
  - **Idioma:** **EN** y **ES**.
  - **Cuenta** → «Mi perfil», el cambio de rol (la misma persona con dos roles, p. ej.
    «Business» y «Barber comission», con la marca de cuál está activo), **Modo oscuro** (interruptor)
    y **Cerrar Sesión**.
- **Mi perfil** (`/profile`): «Gestiona tu cuenta, plan y métodos de pago». Bloques:
  **Información de la cuenta** (nombre, celular, idioma, zona horaria) · **Plan actual** (nombre del
  plan, precio, «Próxima renovación», botón **Cambiar plan**) · **Métodos de pago** (tarjeta con los
  últimos cuatro dígitos y la marca **PREDETERMINADA**, botón **Gestionar**) · **Historial de
  facturas** (fecha, importe y descarga).

## Métricas (`/`)

«En esta sección podrás tener todo el control de tu equipo». Cinco pestañas: **Negocio · Clientes ·
Barberos · Marketing · AI Insights**. Filtros: sucursal, «Todo el equipo» (o un barbero) y el
periodo **Hoy / Semana / Mes** con flechas para moverse entre periodos.

- **Negocio:** Ticket promedio · Tasa de cancelación (canceladas + no-show) · % de propinas ·
  Ventas (total, servicios %, productos %) · Ingresos (servicios, productos, impuestos, propinas,
  tarifas, no se presentaron) · Método de agendamiento (Interno / Cita online / Sin cita previa) ·
  Citas (clientes, completados, pendientes de cobro, canceladas, no se presentaron) · Horas de
  solicitud de citas (Mañana / Tarde / Noche, y el tráfico hora a hora) · Distribución de pagos ·
  Transacciones, Reembolsos, Descuentos · Ventas por servicio · Ventas físicas (tarjetas de regalo,
  productos) · Ventas de productos.
- **Clientes:** Tasa de retención (clientes recurrentes) · Ingreso promedio / cliente · Reservas
  online (vs. presenciales) · Rate walk-in (sin cita previa) · Preferencia de barbero (con /
  sin preferencia) · Citas por tipo de cliente (nuevos, retención de nuevos, recurrentes,
  recuperados) · Nuevos vs recurrentes · Frecuencia de visita (semanal, quincenal...).
- **Barberos:** Total neto del equipo (con la barra por barbero) · Lealtad al barbero (clientes con
  preferencia).
- **Marketing:** Reservas online · Mejor canal · Canales digitales (p. ej. `direct_link`,
  `website`) · Rendimiento de campañas · Conversión por canal.
- **AI Insights:** **Puntaje de salud** (0 a 100, con tasa de completación, tasa de retención, no
  asistió y ticket promedio) · **Alertas de riesgo de clientes** (Perdidos / En riesgo / Vencidos,
  con «X días atrás · ciclo: Nd») · **Mapa de capacidad** (citas por día y hora) ·
  **Recomendaciones inteligentes** «generadas por IA basadas en los patrones de datos de tu negocio
  en los últimos 3 meses», agrupadas en Negocio, Clientes y Crecimiento, cada una con prioridad
  (!, !!, !!!), explicación y acción sugerida.

## Calendario (`/calendar`)

- **Barra:** filtro **Equipo\*** («Trabajando» y otras opciones) · selector de fecha con flechas
  («Jueves 24 SEP») · vista **Agenda / Dia / Mes** · botón **Acciones**.
- **Cuadrícula:** una columna por barbero (con su foto o iniciales), horas de 06:00 AM a 11:30 PM
  cada media hora, franja de trabajo en color, y una línea roja con la hora actual.
- **Acciones:**
  - **Crear cita** (panel «Crear cita»): **Cliente**, **Servicio**, **Barbero**, **Fecha & Hora**,
    interruptor **Cliente sin cita previa** («El cliente llegó sin cita. Aplica la comisión de
    walk-in del barbero y se refleja en los reportes de agendamiento.»), **Repetición** («No se
    repite» y otras) y botón **Crear**.
  - **Crear venta rapida** (panel «Nueva venta», «Elige tu producto»): productos por categoría en
    pestañas, un total abajo y **Pagar orden**.
  - **Venta sin cita** (panel «Venta sin cita»): **Fecha**, hora, **Cliente**, **Servicio**,
    **Barbero** y **Crear**.
  - **Lista de cobros** (panel «Listo para pagar», con el día): pestañas **Por cobrar** («Aquí
    encontrarás todas tus citas pendientes por pagar») y **Pagado**.
- **Estados de una cita** (los del filtro de Transacciones): Agendada → Llegó → En silla → Cerrada
  → Terminada, y Cancelada. En la lista del cliente también se ven «Pendiente», «Completada» e
  «Ingresar».
- **Tipo de agendamiento:** «Interno» (lo creó el equipo) y «Cita online» (lo reservó el cliente).
  **Sin preferencia:** Sí/No (el cliente no pidió barbero).

## Clientes (`/customers`)

«En esta sección puedes gestionar a tus clientes.» Botón **Crear cliente**.

- **Pestañas por tipo:** Todos · Nuevo · Retenido · Frecuente · VIP · Pre-perdida · Perdido ·
  Recuperado · Bloqueo.
- **Lista de clientes** (con el total): buscador y **Buscar**; columnas Nombre, Sucursal, Tipo
  (insignia de color), LTV, Teléfono (enmascarado, `+57******2020`), Correo, # Citas, Acción
  («Acciones» → **Ver**). Paginación (10, 15, 20, 25, 30 por página).
- **Ver cliente** (`/customers/{id}`), botón **Acciones**: **Crear nota** · **Agregar familia o
  amigo** · **Crear cita** · **Bloquear cliente**. Cinco pestañas:
  - **Información general:** Total de citas · Ver índice · FOV (semanas) · LTV · Promedio de venta ·
    Número de transacciones · Completadas % · Canceladas % · No asistió % · Vuelve a reservar % ·
    Tiempo de reserva · AVF (días). «Información importante» (No se presentó, Canceladas), «Última
    cita» (servicio, fecha, barbero, estado, **Ver** y **Ver más**) y «Notas del cliente» con tres
    tipos: **Notas, Medicamento, Alergias**, y **Crear nota**.
  - **Perfil:** insignia de tipo, interruptor «Reserva y pago solo online», Ubicación (País, Estado,
    Ciudad, Dirección, Código postal), Fecha de nacimiento, Actitud, Fecha de creación, Familia y
    amigos (con la relación: «Amigo», ...).
  - **Citas:** una tarjeta por cita (servicio, fecha, barbero, tipo de agendamiento, sin
    preferencia, estado) con **Ver**.
  - **Métodos de pago:** «Transacciones» con filtros Tarjetas de Crédito / Tienda / Stripe, rango
    Desde/Hasta, y la tabla Fecha, Tipo, Valor, ID de transacción, **Ver Detalle**.
  - **Productos:** los productos que ha comprado y cuántas unidades.

## Servicios (`/services`)

«En esta sección podrás tener todo el control de tus servicios.» Tres pestañas: **Categorías**
(lista con «...» y flecha por categoría) · **Servicios** («Listado de servicios»: filtro por
categoría, buscador, tabla Servicio, Categoría, Precio básico, Estado «Activo», **Acciones**) ·
**Combos** («Lista de combos», misma tabla).

- **Acciones:** Crear Servicio · Crear categoría · Crear combo · **Orden de agendamiento** ·
  **Activar servicios**.
- **Crear Servicio** (`/services/create`): pestañas **General · Equipo · Avanzado**. En General:
  foto, **Nombre del servicio\***, color, **Costo del servicio** (con ayuda), **Precio básico\***,
  **Descripción**, interruptor **Privado / Público** («Esta opción permite que su servicio sea
  visible en el agendamiento online»), **Duración del servicio (minutos)**, **Impuestos**,
  **Categoría\*** y **Continuar**. Equipo y Avanzado se habilitan al continuar.

## Productos (`/products`)

Pestañas **Productos** y **Categorías**. «lista de productos»: filtro de categorías («All
categories»), buscador, tabla Nombre, Categoría, Precio, Acción.

- **Acciones:** Crear producto · Crear Categoría · **Activar productos de barbería**.
- **Crear producto** (`/products/create`): pestañas **General · Avanzado**. En General: foto,
  **Nombre del producto\***, **Descripción**, **Categoría\***, **Impuestos**, **Precio de
  compra**, **Precio de venta\***, **Código sku**, interruptor **Privado / Público** («permite que
  su producto sea visible en el flujo de reserva»), interruptor **Disponibilidad de venta**
  («permite a los barberos vender estos productos»), **Fotos - 0/5** y **Continuar**.

## Equipo (`/team/barbers`)

«En esta sección podrás tener todo el control de tu equipo.» Cuatro pestañas:

- **Barberos:** dos vistas, **Barbero por comisión** y **Barbero renta**. «Listado de Barberos»:
  filtro por Nivel, buscador, tabla Nombre, Sucursal, Nivel, Correo, Teléfono, Estado («Activo»),
  Acción.
- **Niveles:** «Lista de niveles» con Nombre y cuántos barberos tiene cada uno (Master, Senior,
  «Sin nivel»...).
- **Horas de trabajo:** filtro de sucursal, «Esta semana» con flechas, y una cuadrícula
  barbero × día con su horario («6am - 6pm») o «No está trabajando»; cada casilla es editable.
- **Gerentes:** «Lista de miembros» con Nombre, Sucursal, Rol («Dueño», «Dueño - Barbero por
  comisión»), Correo, Teléfono, Estado.
- **Acciones:** Crear miembro del equipo · Crear nivel · Ordenar barberos · **Ordenamiento para
  agendamiento sin cita y sin preferencia** · **Activar equipo dentro de esta sucursal**.

## Gastos (`/expenses`)

«Aquí podrás tener el control de todos tus gastos tanto si son recurrentes como si son
esporádicos.» Pestañas **Fijos** (Nombre, Frecuencia —Semanal, Trimestral...—, Valor) y
**Variables** (Nombre, Valor). **Acciones:** Crear gasto fijo · Crear gasto variable.

## Nómina (`/payroll`)

«En este apartado podrás tener trazabilidad y control de tu barbería.» Botón **Descargar** (CSV,
Excel, PDF). Tres pestañas, según cómo se le paga a cada quien, con **Filtros** de sucursal y
**Rango de fechas** (por defecto la quincena, «01 SEP - 15 SEP · 15 Dias»):

- **Barbero por comisión:** Miembro, Servicios, Venta de servicios, Venta de productos, Comisión
  de servicios, Comisión de productos, Total comisiones, Impuestos, Propinas, **Pago neto**. La
  primera fila, «All», es el total del equipo.
- **Barbero de renta:** las mismas más **Renta fija**; el pago neto sale negativo cuando la renta
  supera lo generado (lo que el barbero le debe a la barbería).
- **Barbero por salario:** Venta de productos, Comisión de productos, Impuestos, Propinas,
  **Salario**, Pago neto.

## Transacciones (`/transactions`)

Buscador y botón de recargar. Encabezado «sucursal · rango · N cuentas». Filtros **Desde**,
**Hasta**, **Estado de la cuenta** (Todos · Por cobrar · Cobrada · Devuelta) y **Estado de la cita**
(Todos · Agendada · Llegó · En silla · Cerrada · Terminada · Cancelada) y **Aplicar**. Tarjetas:
**Facturado**, **Cobrado**, **Por cobrar**, **Propinas**, **Devuelto**. Tabla: Fecha, Factura,
Cliente, Atendió, Estado (POR COBRAR / COBRADA), Total, Cobrado, Método (CASH...), con una flecha
que despliega el detalle de cada cuenta. Los clientes sin registro salen como «Walk in».

## Configuración (`/settings`)

Cuatro grupos, 17 ajustes. Cada uno, con su ruta y lo que ofrece:

**Configuración de la cuenta**
- **Detalles del negocio** (`/business-details/{id}`): «Configuración de hora y calendario» (Zona
  horaria\*, Formato de hora\* —12 horas—, Inicio de semana\*, Hora de inicio, Hora de fin, Festivos
  no laborables) y «Enlaces en línea» (Sitio Web, Página de Instagram, Página de Facebook, Mapas de
  Google; se ven en correos y en interacciones con clientes). **Guardar**.
- **Detalles de facturación y facturas** (`/settings/billing-details`): «Datos de facturación»
  (plan, periodo, importe, dirección) con **Editar detalles de facturación**; «Método de pago
  predeterminado» con **Administrar métodos de pago**; «Listado de facturas y tarifas» (Tipo, Total,
  Fecha, **Descargar**) con filtros por Tipo, Año y Mes, y el aviso de la próxima factura.
- **Agendamiento online** (`/online-booking`) («Reserva online»): «Agrega las reservas a tu sitio
  web» con tres formas de incrustar el flujo (script `barberlytics-widgets.js` y un `<div>` con
  `data-bl-widget="booking"`): **Panel lateral** (botón flotante «Book now»), **Abrir desde enlace**
  (con `data-trigger`) y **Reserva embebida** (`data-mode="inline"`), cada una con **Copiar**; y
  «Link de reserva online para tu sitio web»: **Enlace directo de reserva** (con parámetros UTM).
- **Períodos de cierre del negocio** (`/business-closed`): lista de cierres y **Añadir periodo
  cerrado**.
- **Dispositivos de pago** (`/devices`): lista de dispositivos y **Agregar dispositivo**.
- **Sucursales** (`/companies/locations`): «Lista de sucursales» (Nombre, Equipo, País, Estado,
  Ciudad, Date create, Estado, Acciones) y **Crear Sucursal**.
- **Empresa** (`/companies`): «Lista de empresas» (Empresa, Identificación, Teléfono, Estado).

**Equipo**
- **Permisos** (`/team-permission`): una pestaña por rol —**Administrador de la locación, Barbero
  por comisión, Barbero por renta, Recepción - mostrador de recepción, Dueño**— y una matriz de
  secciones con **Ver · Crear · Editar · Borrar · Activo**: Reservas y clientes (Calendario,
  Reservar citas, Bloquear calendario, Clientes, Información del cliente, Importar clientes,
  Descarga de cliente), Equipo (Equipo, Gerentes, Sección de pagos de barberos, Niveles, Póngase en
  fila, Ordenar barberos agendas), Métricas (Indicadores clave de rendimiento empresariales),
  Inventarios (Productos, Categorias), Servicios (Servicios, Categorias, Póngase en fila), POS
  (Precios), Negocio (Fechas de cierre, Nómina de sueldos, Permisos, Configuraciones de la cuenta,
  Gastos). «Las cuentas de propietarios tienen acceso total al sistema.» Lo que se define aquí son
  los valores predeterminados al crear roles; se ajusta por ubicación y por usuario.
- **Nomina** (`/settings/payroll`): **Ciclo de pago\*** (semanal, quincenal —«BIWEEKLY»— o mensual)
  y **Día de inicio del ciclo**.
- **Comisiones** (`/team-commission`): cuatro interruptores que restan antes de calcular la
  comisión: **Deducir descuentos**, **Deducir impuestos**, **Deducir el costo del servicio**,
  **Deducir el costo del producto**.

**Ventas**
- **Impuestos** (`/sales-taxes`): lista de impuestos y **Añadir impuesto**.
- **Tarifa por uso de tarjeta de crédito** (`/credit-card`): **Habilitar esta opción**,
  **Nombre\*** y **Tasa\*** (porcentaje o monto fijo).
- **Propinas** (`/sales-tips`): opciones de **Porcentaje de propina\*** (los clientes también pueden
  poner un monto propio), **Agregar nueva opción de propina**, **Selección predeterminada** y
  «Comportamiento de propinas» → **Mostrar en el cobro** («Sin configurar» muestra las dos pestañas
  y abre la del tipo marcado por defecto).
- **Precios** (`/sales-pricing`): **Moneda\*** (COP...) y «Cálculo de impuestos»: «Los precios no
  incluyen impuestos» (precio $10 + impuesto 20 % $2 = total $12) o «Los precios incluyen
  impuestos» (total $12 incluye $2; base $10).
- **Integración de pagos** (`/payment-integration`): conexión con **Stripe** (Clave pública de
  prueba\*, Clave secreta de prueba\*, **Probar conexión**, **Guardar**).

**Notificaciones**
- **Centro de notificaciones** (`/notifications-center`): un interruptor por aviso y por canal
  (**Correo**, **Push**), con una pestaña por rol. Grupos: Clientes (importación de clientes,
  satisfacción —mala reseña—, estados de clientes —Churn, Pre-Churn, Recuperado, VIP—, cuando un
  miembro bloquea a un cliente), Productos (pocas unidades / agotado, de productos y de combos,
  importación), Calendario (barbero con agenda ocupada por encima de un porcentaje, ocupación del
  día por encima de un porcentaje, bloqueos, vacaciones, vacaciones de renta), Métricas (indicador
  de salud que baja a amarillo o rojo, o sube a verde; retención de un barbero cada 3 meses).

**Eliminar cuenta:** «Elimina permanentemente tu cuenta y todos los datos asociados a tu negocio.
Esta acción es irreversible y no se puede deshacer.»

---

## Pendiente de confirmar (no se pudo ver)

Se necesita una sesión cerrada, un flujo completo o permisos de escritura para verlo:

1. **Entrar (`/authenticate`)** — visto el 2026-09-25 con un navegador sin sesión (`casos/login.md`).
   Lo que falta y solo se ve con un celular real: la transición número → código, el mensaje si el
   código es incorrecto o vence, cuántos intentos hay y si existe un bloqueo, el mensaje si el número
   no está registrado, qué pasa tras «Reenviar Código», qué pasa tras «Enviar» en Contáctanos y
   tras «Enviar correo», y el contenido del correo de «Olvidaste tu número?».
2. **Onboarding** de una cuenta nueva.
3. **Flujos completos** que exigen guardar: crear una cita (selección de cliente, servicio, barbero,
   fecha), cobrar (pagar orden), abrir una cita del calendario (estados y acciones), crear un
   cliente, un miembro del equipo, una sucursal, un gasto.
4. **Vista del barbero**: cómo se ve la app con el rol «Barbero por comisión» (el menú de la cuenta
   lo ofrece; no se cambió de rol para no alterar la sesión).
5. **Idioma inglés** de las pantallas.
6. Textos de **ayuda emergente** (los iconos ⓘ) y de los estados vacíos.
7. **Permisos por rol**: qué marca cada rol de fábrica.

## Datos que no se copian a los artículos

La cuenta de prueba trae nombres, correos, teléfonos y un identificador de widget de reservas
reales. Los artículos usan datos de ejemplo («Mi Barbería», «Carlos», `correo@ejemplo.com`) y las
capturas de producción pasan por el enmascarado de `scripts/mask.js`.
