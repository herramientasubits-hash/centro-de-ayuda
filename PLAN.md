# Plan de documentación de Barberlytics

> Generado el 2026-09-25 con `npm run plan`. **No se edita a mano.**

Objetivo: que **cada pantalla, cada elemento y cada caso de uso** de la aplicación en producción
(`dash.barberlytics.com`) tenga su artículo, escrito con el lenguaje de quien tiene una barbería, con capturas
reproducibles y en un formato que una IA pueda usar como base de conocimiento.

## Cómo se construyó el inventario

Recorrido de toda la aplicación en producción el 2026-09-24 y 2026-09-25, solo leyendo (`casos/produccion.md`), más un
estudio a fondo de sucursales, equipo, roles y permisos (`casos/modelo-sucursales-roles-permisos.md`). El
recorrido se hizo por **cuatro ejes**, no solo por menú:

1. **Pantallas**: cada ruta, pestaña, acción, formulario, columna, tarjeta e indicador.
2. **Tareas**: lo que alguien quiere lograr (crear una cita, cobrarla, activar a un barbero en otra sucursal).
3. **Modelo**: cómo se relacionan empresa, sucursales, equipo, catálogos, perfiles, roles y permisos.
4. **Roles**: qué ve y qué puede hacer el dueño, el administrador, la recepción y cada tipo de barbero.

## Tipos de artículo

| Tipo | Para qué | Cómo se reconoce |
|---|---|---|
| **Concepto** | Entender cómo funciona algo y por qué | «Cómo se organiza…», «Tipos de…», «Qué es…» |
| **Guía** | Hacer algo, paso a paso, con capturas | «Crear…», «Cambiar…», «Activar…» |
| **Referencia** | Saber qué significa cada campo, columna o indicador | «La lista de…», «Cada columna…» |
| **Problema** | Salir de un apuro | «No veo…», «No puedo…», «No cuadra…» |

Regla: **toda pantalla tiene su referencia; toda tarea, su guía; todo lo que confunde, su concepto o su problema.**

## Cómo se escribe cada artículo (y cuándo está «listo»)

1. **Recorrer** la pantalla en producción y copiar los textos tal cual (mapa en `casos/`).
2. **Redactar** con `STYLE.md`: «tú», sin jerga, botones en negrita, resumen arriba, errores en tabla, preguntas al final.
3. **Marcar `draft`** si algo no se pudo comprobar; nada se inventa.
4. **Receta de capturas** en `screenshots.json` y `npm run shots` (producción, con enmascarado).
5. **`npm run check`** sin errores: frontmatter, enlaces, `related`, capturas.
6. **Lectura tuya** → `review` → `published` cuando la apruebas.
7. **Verificación cruzada**: cada afirmación se puede comprobar en pantalla; las reglas que la pantalla no muestra se
   confirman con el equipo antes de publicarse.

## Lo que hace falta según el tipo de trabajo

| Código | Qué implica | Quién |
|---|---|---|
| **L** | Leer la producción | Claude, ya se puede |
| **P** | Pantalla pública (login, reserva online) | Claude, sin sesión |
| **E** | Crear datos de prueba y borrarlos | Claude, **solo en la sucursal «Prueba Elkin»** y con tu visto bueno |
| **R** | Ver la app como otro rol | Cuentas de prueba de cada rol, o cambiar de perfil |
| **C** | Un celular real (códigos, errores de código) | Tú |
| **D** | Una regla que la pantalla no dice (fórmulas, qué pasa al borrar…) | El equipo de producto |

## Fases

| Fase | Qué se hace | Necesita |
|---|---|---|
| **A · Leer** | Los artículos que se escriben solo con leer producción. Se empieza por **Sucursales, roles y permisos**, luego Navegación, Métricas, Configuración, Equipo y las referencias de Clientes, Calendario y Transacciones. | Nada más que la sesión abierta |
| **B · Crear** | Los flujos que hay que ejecutar para documentarlos: cita, cobro, cancelación, cliente, servicio, producto, gasto, miembro del equipo, sucursal. Se hacen en «Prueba Elkin» y se borran. | Tu visto bueno y una lista de datos de prueba |
| **C · Roles** | Ver cada pantalla como dueño, administrador, recepción, barbero por comisión y de renta. | Una cuenta de prueba por rol (o cambiar de perfil) |
| **D · Celular** | Los errores de código, número no registrado y reenvío. | Tú, con tu celular |
| **E · Reglas** | Fórmulas y definiciones (comisión, retención, tipos de cliente, churn…). Salen en un documento de preguntas para el equipo. | Alguien de producto |
| **F · Inglés** | La misma estructura en `content/en`. | — |
| **G · Asistente** | Preguntas reales de dueños contra `llms-full.txt` para medir si la base responde. | — |

**Prioridad:** P1 = lo que un dueño necesita el primer mes · P2 = lo que necesita después · P3 = poco frecuente.


## Estado

**249 artículos planeados · 249 escritos (100 %)**

| Estado | Artículos |
|---|---|
| ○ pendiente | 0 |
| ◐ borrador | 167 |
| ◑ en revisión | 82 |
| ● publicado | 0 |

### Por sección

| Sección | Planeados | Escritos | P1 pendientes |
|---|---|---|---|
| Empezar | 8 | 8 | 0 |
| Acceso y cuenta | 16 | 16 | 0 |
| Sucursales | 19 | 19 | 0 |
| Roles y permisos | 16 | 16 | 0 |
| Moverte por la app | 7 | 7 | 0 |
| Métricas | 20 | 20 | 0 |
| Calendario | 30 | 30 | 0 |
| Clientes | 17 | 17 | 0 |
| Servicios | 13 | 13 | 0 |
| Productos | 10 | 10 | 0 |
| Equipo | 29 | 29 | 0 |
| Gastos | 6 | 6 | 0 |
| Nómina | 12 | 12 | 0 |
| Transacciones | 10 | 10 | 0 |
| Configuración | 26 | 26 | 0 |
| Glosario | 6 | 6 | 0 |
| Problemas frecuentes | 4 | 4 | 0 |

### Por lo que hace falta para escribirlos

| Necesita | Qué implica | Artículos pendientes | De ellos P1 |
|---|---|---|---|
| **L** | leer producción | 0 | 0 |
| **E** | crear datos de prueba en la sucursal «Prueba Elkin» | 0 | 0 |
| **R** | verlo con otro rol | 0 | 0 |
| **C** | celular real (lo hace el usuario) | 0 | 0 |
| **D** | confirmar una regla con el equipo | 0 | 0 |
| **P** | pantalla pública, sin sesión | 0 | 0 |

**Se pueden escribir ya, solo leyendo producción:** 0 artículos (0 de prioridad P1).

## Reglas por confirmar con el equipo (D)

Cada línea es un artículo cuya regla la pantalla no explica. Se agrupan para llevarlas juntas a producto.


## Inventario por sección

Leyenda: ○ pendiente · ◐ borrador · ◑ en revisión · ● publicado. **T:** C concepto · G guía · R referencia · P problema. **Necesita:** ver arriba.

### Empezar

_Qué es Barberlytics, los primeros pasos y una guía por rol._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◐ | Qué es Barberlytics y qué puedes hacer con él | C | P2 | D | `/` |
| ◐ | Primeros pasos: dejar tu barbería lista para agendar | G | P1 | L | `/*` |
| ◑ | Usar Barberlytics desde el celular | G | P2 | L | `/*` |
| ◐ | Un día como dueño: qué revisar y en qué orden | G | P3 | L | `/` |
| ◐ | Un día como administrador de la sucursal | G | P3 | R | `/` |
| ◐ | Un día en recepción | G | P3 | R | `/calendar` |
| ◐ | Un día como barbero por comisión | G | P3 | R | `/calendar` |
| ◐ | Un día como barbero de renta | G | P3 | R | `/calendar` |

### Acceso y cuenta

_Iniciar sesión, recuperar tu número, cerrar sesión, tu perfil y tu plan._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Iniciar sesión con tu número de teléfono | G | P1 | P | `/authenticate` |
| ◑ | Elegir el país de tu teléfono | G | P1 | P | `/authenticate` |
| ◑ | Confirmar tu número con el código | G | P1 | P | `/authenticate/verifyotp` |
| ◑ | Olvidaste tu número | G | P1 | P | `/authenticate/forgot-number` |
| ◑ | Contactar a soporte desde la entrada | G | P1 | P | `/authenticate/contact` |
| ◑ | Política de privacidad y términos de servicio | R | P2 | P | `/authenticate` |
| ◑ | Cerrar sesión | G | P1 | L | `/*` |
| ◑ | Mi perfil: tu cuenta, tu plan y tus métodos de pago | R | P1 | L | `/profile` |
| ◑ | Cambiar de rol | G | P1 | L R | `/*` |
| ◐ | Qué hacer si el código es incorrecto o vence | P | P1 | C | `/authenticate/verifyotp` |
| ◐ | Qué hacer si tu número no está registrado | P | P1 | C | `/authenticate` |
| ◐ | Reenviar el código | G | P2 | C | `/authenticate/verifyotp` |
| ◐ | Cambiar tu plan de Barberlytics | G | P2 | L D | `/profile` |
| ◐ | Administrar la tarjeta con la que pagas Barberlytics | G | P2 | L | `/profile` `/settings/billing-details` |
| ◑ | Descargar las facturas de Barberlytics | G | P2 | L | `/profile` `/settings/billing-details` |
| ◑ | Tengo dos perfiles: dueño y barbero | C | P1 | L R | `/*` |

### Sucursales

_Empresa y sucursales: qué es de cada una, qué se comparte y cómo se activa el equipo y el catálogo en cada sucursal._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Cómo se organiza tu barbería: empresa, sucursales, equipo y catálogos | C | P1 | L | `/settings/*` |
| ◑ | Empresa y sucursales: en qué se diferencian | C | P1 | L | `/companies` `/companies/locations` |
| ◐ | Qué cambia de una sucursal a otra: moneda, zona horaria, idioma y horario | R | P1 | L | `/companies/locations/edit/*` |
| ◑ | El equipo es de la empresa y se activa en cada sucursal | C | P1 | L | `/team/activate` |
| ◑ | Servicios y productos: se crean una vez y se activan por sucursal | C | P1 | L | `/services/location/activate-service` |
| ◐ | Crear una sucursal | G | P1 | E | `/companies/locations` |
| ◐ | Editar los datos de una sucursal | G | P2 | L | `/companies/locations/edit/*` |
| ◐ | Ver el detalle de una sucursal: clientes, equipo y licencia | G | P2 | L D | `/companies/locations/view/*` |
| ◐ | Inactivar una sucursal | G | P2 | E D | `/companies/locations/view/*` |
| ◐ | Borrar una sucursal | G | P3 | E D | `/companies/locations` |
| ◐ | Ver todas las sucursales a la vez | G | P2 | L | `/*` |
| ◑ | Activar al equipo en una sucursal | G | P1 | L E | `/team/activate` |
| ◐ | Activar servicios en una sucursal | G | P1 | L E | `/services/location/activate-service` |
| ◐ | Activar productos en una sucursal | G | P1 | L E | `/products/*` |
| ◐ | Un barbero que trabaja en dos sucursales | G | P1 | E | `/team/*` |
| ◐ | Abrir una sucursal nueva: la lista completa, paso a paso | G | P1 | E | `/companies/locations` |
| ◐ | Ajustes generales y ajustes por sucursal: dónde se cambia cada uno | R | P1 | L D | `/settings` |
| ◑ | No veo a un barbero en mi sucursal | P | P1 | L | `/team/barbers` |
| ◑ | No veo un servicio o un producto en mi sucursal | P | P1 | L | `/services` `/products` |

### Roles y permisos

_Los cinco roles, los perfiles, qué puede hacer y qué ve cada uno, y cómo se ajustan los permisos._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Perfiles y roles: qué son y en qué se diferencian | C | P1 | L | `/team-permission` |
| ◑ | Los cinco roles y para qué sirve cada uno | R | P1 | L | `/team-permission` |
| ◐ | Cómo funcionan los permisos: Ver, Crear, Editar, Borrar y Activo | C | P1 | L D | `/team-permission` |
| ◑ | Tabla de permisos: qué puede hacer cada rol | R | P1 | L | `/team-permission` |
| ◐ | Qué puede hacer y qué ve del dueño | R | P2 | L R | `/team-permission` |
| ◐ | Qué puede hacer y qué ve del administrador de la locación | R | P2 | L R | `/team-permission` |
| ◐ | Qué puede hacer y qué ve de recepción | R | P2 | L R | `/team-permission` |
| ◐ | Qué puede hacer y qué ve del barbero por comisión | R | P2 | L R | `/team-permission` |
| ◐ | Qué puede hacer y qué ve del barbero de renta | R | P2 | L R | `/team-permission` |
| ◐ | Qué secciones del menú ve cada rol | R | P2 | R | `/*` |
| ◑ | De qué depende lo que ves: tu rol, tu sucursal y tus permisos | C | P1 | L R | `/*` |
| ◐ | Cambiar los permisos predeterminados de un rol | G | P1 | E D | `/team-permission` |
| ◐ | Cambiar los permisos de una persona sin cambiar su rol | G | P1 | E D | `/team/barbers/view/*` |
| ◐ | Darle a recepción solo lo que necesita | G | P2 | E | `/team-permission` |
| ◑ | No veo una sección del menú | P | P1 | L R | `/*` |
| ◐ | No puedo editar o borrar algo | P | P1 | L R | `/*` |

### Moverte por la app

_Las secciones del menú, la sucursal, las notificaciones, el idioma y el modo oscuro._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Las secciones de Barberlytics y para qué sirve cada una | R | P1 | L | `/*` |
| ◑ | Cambiar de sucursal | G | P1 | L | `/*` |
| ◑ | Ver tus notificaciones | G | P1 | L | `/*` |
| ◑ | Cambiar el idioma y activar el modo oscuro | G | P1 | L | `/*` |
| ◐ | Buscar una cita con la lupa | G | P2 | L E | `/search-appointment` |
| ◑ | El menú en el celular: Inicio, Calendario, Equipo, Clientes y Más | R | P2 | L | `/*` |
| ◐ | Qué avisos recibes y de dónde salen | R | P2 | L | `/*` |

### Métricas

_Cómo va tu barbería: negocio, clientes, barberos, marketing y recomendaciones._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Cómo leer Métricas: pestañas, filtros y periodos | C | P1 | L | `/` |
| ◑ | Filtrar por sucursal, por barbero y por periodo | G | P1 | L | `/` |
| ◐ | Ticket promedio, tasa de cancelación y % de propinas | R | P1 | L D | `/` |
| ◐ | Ventas e ingresos: servicios, productos, impuestos, propinas y tarifas | R | P1 | L D | `/` |
| ◐ | Método de agendamiento y citas: interno, online y sin cita previa | R | P1 | L D | `/` |
| ◐ | Horas de solicitud de citas: mañana, tarde y noche | R | P2 | L D | `/` |
| ◐ | Distribución de pagos, reembolsos y descuentos | R | P2 | L D | `/` |
| ◐ | Ventas por servicio, ventas físicas y ventas de productos | R | P2 | L D | `/` |
| ◐ | Tasa de retención y clientes recurrentes | R | P1 | L D | `/` |
| ◐ | Ingreso promedio por cliente | R | P1 | L D | `/` |
| ◐ | Reservas online y rate de clientes sin cita previa | R | P1 | L D | `/` |
| ◐ | Preferencia de barbero: con y sin preferencia | R | P1 | L D | `/` |
| ◐ | Citas por tipo de cliente y nuevos vs recurrentes | R | P1 | L D | `/` |
| ◐ | Frecuencia de visita de tus clientes | R | P1 | L D | `/` |
| ◐ | Total neto del equipo y lealtad al barbero | R | P1 | L D | `/` |
| ◐ | Marketing: canales digitales, campañas y conversión | R | P2 | L D | `/` |
| ◐ | Puntaje de salud de tu barbería | R | P2 | L D | `/` |
| ◐ | Alertas de riesgo: clientes en riesgo, perdidos y vencidos | R | P2 | L D | `/` |
| ◐ | Mapa de capacidad: qué horas se llenan | R | P2 | L D | `/` |
| ◐ | Recomendaciones inteligentes: de dónde salen y qué hacer con ellas | R | P2 | L D | `/` |

### Calendario

_Agendar, cobrar, mover y cancelar citas; clientes sin cita, ventas rápidas y reservas online._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Conoce el calendario: barberos, horas y colores | C | P1 | L | `/calendar` |
| ◑ | Ver el día, la agenda o el mes | G | P1 | L | `/calendar` |
| ◑ | Filtrar por equipo: quién aparece en el calendario | G | P1 | L D | `/calendar` |
| ◑ | Moverte entre fechas | G | P2 | L | `/calendar` |
| ◐ | Crear una cita | G | P1 | E | `/calendar` |
| ◐ | Crear una cita para un cliente nuevo | G | P1 | E | `/calendar` |
| ◐ | Crear una cita que se repite | G | P2 | E D | `/calendar` |
| ◐ | Cliente que llega sin cita previa | G | P1 | E D | `/calendar` |
| ◐ | Venta sin cita | G | P1 | E | `/calendar` |
| ◐ | Crear una venta rápida de productos | G | P1 | E | `/calendar` |
| ◑ | La lista de cobros: por cobrar y pagado | G | P1 | L E | `/calendar` |
| ◐ | Los estados de una cita: agendada, llegó, en silla, cerrada y terminada | C | P1 | L D | `/calendar` `/transactions` |
| ◑ | Abrir una cita y ver su detalle | G | P1 | E | `/calendar` |
| ◐ | Marcar que el cliente llegó (check in) | G | P1 | E | `/calendar` |
| ◐ | Pasar al cliente a la silla | G | P2 | E | `/calendar` |
| ◐ | Cobrar una cita (check out) | G | P1 | E | `/calendar` |
| ◐ | Cobrar con propina | G | P2 | E | `/calendar` |
| ◐ | Aplicar un descuento a una cita | G | P2 | E D | `/calendar` |
| ◐ | Mover o reprogramar una cita | G | P1 | E | `/calendar` |
| ◐ | Cancelar una cita | G | P1 | E | `/calendar` |
| ◐ | El cliente no se presentó | G | P2 | E D | `/calendar` |
| ◐ | Bloquear el calendario de un barbero | G | P1 | E | `/calendar` |
| ◐ | Vacaciones de un barbero | G | P2 | E D | `/calendar` |
| ◐ | Clientes sin preferencia de barbero: quién los atiende | C | P1 | L D | `/team/barbers/lineup` |
| ◐ | Reservas online: cómo las ve tu cliente | C | P1 | L P | `/online-booking` |
| ◐ | Citas que crea el cliente: cuándo entran y cómo las recibes | C | P2 | D E | `/calendar` |
| ◐ | No puedo agendar a esta hora | P | P1 | L D | `/calendar` |
| ◑ | Un barbero no aparece en el calendario | P | P1 | L | `/calendar` |
| ◐ | El cliente no recibió el recordatorio | P | P2 | D | `/calendar` |
| ◐ | La lista de espera: anotar a un cliente cuando no hay hueco | G | P2 | L E | `/calendar` |

### Clientes

_La lista, los tipos de cliente, su ficha, sus notas y cómo bloquearlos._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | La lista de clientes: columnas, búsqueda y paginación | R | P1 | L | `/customers` |
| ◑ | Los tipos de cliente: nuevo, retenido, frecuente, VIP, pre-perdida, perdido y recuperado | C | P1 | L D | `/customers` |
| ◐ | Buscar un cliente | G | P1 | L | `/customers` |
| ◐ | Crear un cliente | G | P1 | E | `/customers` |
| ◑ | Ver un cliente: información general | R | P1 | L | `/customers/*` |
| ◐ | Los indicadores de un cliente: FOV, AVF, LTV, ver índice y vuelve a reservar | R | P1 | L D | `/customers/*` |
| ◐ | El perfil de un cliente: ubicación, nacimiento y reserva solo online | R | P2 | L D | `/customers/*` |
| ◑ | Las citas de un cliente | R | P2 | L | `/customers/*` |
| ◐ | Los pagos de un cliente | R | P2 | L | `/customers/*` |
| ◑ | Los productos que compró un cliente | R | P3 | L | `/customers/*` |
| ◐ | Notas del cliente: notas, medicamento y alergias | G | P1 | L E | `/customers/*` |
| ◐ | Agregar familia o amigos a un cliente | G | P2 | E | `/customers/*` |
| ◐ | Bloquear a un cliente | G | P1 | E D | `/customers/*` |
| ◐ | Importar clientes | G | P2 | L E | `/customers` |
| ◐ | Descargar la lista de clientes | G | P3 | L D | `/customers` |
| ◐ | Cómo cambia un cliente de tipo con el tiempo | C | P1 | D | `/customers` |
| ◐ | Un cliente aparece duplicado o con datos incompletos | P | P3 | D | `/customers` |

### Servicios

_Categorías, servicios y combos, con sus precios._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Cómo se organizan tus servicios: categorías, servicios y combos | C | P1 | L | `/services` |
| ◑ | La lista de servicios | R | P1 | L | `/services` |
| ◐ | Crear una categoría de servicios | G | P1 | E | `/services` |
| ◐ | Crear un servicio: datos generales | G | P1 | L E | `/services/create` |
| ◐ | Crear un servicio: quién lo hace | G | P1 | E | `/services/create` |
| ◐ | Crear un servicio: opciones avanzadas | G | P2 | E D | `/services/create` |
| ◐ | Costo del servicio y precio básico | C | P1 | L D | `/services/create` |
| ◑ | Servicio público o privado: qué ve el cliente al reservar | C | P1 | L D | `/services/create` |
| ◐ | Precio para clientes nuevos y precio de lealtad | C | P1 | L D | `/team/barbers/view/*` |
| ◐ | Editar un servicio | G | P1 | E | `/services` |
| ◐ | Desactivar o borrar un servicio | G | P2 | E D | `/services` |
| ◐ | Crear un combo de servicios | G | P1 | E | `/services` |
| ◐ | El orden de los servicios al agendar | G | P2 | L E | `/services` |

### Productos

_Lo que vendes en la barbería, con su precio y su inventario._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Cómo se organizan tus productos | C | P1 | L | `/products` |
| ◑ | La lista de productos | R | P1 | L | `/products` |
| ◐ | Crear una categoría de productos | G | P1 | E | `/products` |
| ◐ | Crear un producto | G | P1 | L E | `/products/create` |
| ◐ | Precio de compra, precio de venta y código SKU | C | P1 | L D | `/products/create` |
| ◑ | Producto público o privado y disponibilidad de venta | C | P1 | L D | `/products/create` |
| ◐ | Fotos de un producto | G | P3 | E | `/products/create` |
| ◐ | Editar o borrar un producto | G | P2 | E D | `/products` |
| ◐ | Vender un producto | G | P1 | E | `/calendar` |
| ◐ | Inventario: unidades y avisos de poco stock | C | P2 | D | `/products` |

### Equipo

_Barberos, niveles, horarios, gerentes y la ficha de cada persona._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Conoce la sección Equipo | C | P1 | L | `/team/barbers` |
| ◑ | La lista de barberos: por comisión y de renta | R | P1 | L | `/team/barbers` |
| ◑ | Barbero por comisión o de renta: cuál elegir | C | P1 | L D | `/team/barbers` |
| ◐ | Crear un dueño | G | P1 | E | `/team/barbers` |
| ◐ | Crear un administrador de la locación | G | P1 | E | `/team/barbers` |
| ◐ | Crear una recepcionista | G | P1 | E | `/team/barbers` |
| ◐ | Crear un barbero por comisión | G | P1 | E | `/team/barbers` |
| ◐ | Crear un barbero de renta | G | P1 | E | `/team/barbers` |
| ◑ | La ficha de un barbero: perfil | R | P1 | L | `/team/barbers/view/*` |
| ◐ | La ficha de un barbero: servicios y precios propios | R | P1 | L D | `/team/barbers/view/*` |
| ◐ | La ficha de un barbero por comisión: compensación | R | P1 | L D | `/team/barbers/view/commission/*` |
| ◑ | La ficha de un barbero de renta: pagos | R | P1 | L D | `/team/barbers/view/rent/*` |
| ◐ | La ficha de un barbero: su horario semanal | R | P1 | L | `/team/barbers/view/*` |
| ◑ | La ficha de un barbero: permisos | R | P1 | L | `/team/barbers/view/*` |
| ◐ | La ficha de un barbero: opciones | R | P1 | L D | `/team/barbers/view/*` |
| ◐ | Editar a un miembro del equipo | G | P1 | E | `/team/barbers` |
| ◐ | Inactivar a un miembro del equipo | G | P1 | E D | `/team/barbers` |
| ◐ | Borrar a un miembro del equipo | G | P2 | E D | `/team/barbers` |
| ◑ | Niveles de barberos: para qué sirven | C | P1 | L D | `/team/barbers` |
| ◐ | Crear y editar un nivel | G | P2 | E | `/team/barbers` |
| ◐ | Las horas de trabajo del equipo: ver y cambiar la semana | G | P1 | L E | `/team/barbers` |
| ◑ | Gerentes: quiénes son y qué pueden hacer | R | P2 | L | `/team/barbers` |
| ◐ | Ordenar a los barberos | G | P2 | L E | `/team/barbers` |
| ◑ | Orden para clientes que llegan sin cita | G | P1 | L E | `/team/barbers/lineup` |
| ◑ | Orden para clientes sin preferencia de barbero | G | P1 | L E | `/team/barbers/lineup` |
| ◐ | Visibilidad para agendamiento: mostrar u ocultar a un barbero | C | P1 | L D | `/team/barbers/view/*` |
| ◐ | El código de un barbero | C | P2 | D | `/team/barbers/view/*` |
| ◐ | Habilidades y fotos de un barbero | G | P3 | E | `/team/barbers/view/*` |
| ◐ | Cómo se le paga a cada tipo de barbero | C | P1 | L D | `/payroll` |

### Gastos

_Lo que gasta la barbería, fijo o variable._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Gastos fijos y variables: en qué se diferencian | C | P1 | L | `/expenses` |
| ◑ | La lista de gastos | R | P1 | L | `/expenses` |
| ◐ | Crear un gasto fijo | G | P1 | E | `/expenses` |
| ◐ | Crear un gasto variable | G | P1 | E | `/expenses` |
| ◐ | Editar o borrar un gasto | G | P2 | E | `/expenses` |
| ◑ | La frecuencia de un gasto fijo | C | P2 | L D | `/expenses` |

### Nómina

_Cómo se le paga a cada barbero y cómo leer cada columna._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Cómo funciona la nómina | C | P1 | L D | `/payroll` |
| ◑ | Nómina de barberos por comisión: cada columna | R | P1 | L D | `/payroll` |
| ◑ | Nómina de barberos de renta: renta fija y pago neto | R | P1 | L D | `/payroll` |
| ◐ | Nómina de barberos por salario | R | P1 | L D | `/payroll` |
| ◐ | Filtrar la nómina por fechas y sucursal | G | P1 | L | `/payroll` |
| ◐ | Descargar la nómina en CSV, Excel o PDF | G | P1 | L E | `/payroll` |
| ◐ | Cómo se calcula una comisión | C | P1 | D | `/payroll` `/team-commission` |
| ◐ | Cómo se calcula el pago de un barbero de renta | C | P1 | D | `/payroll` |
| ◐ | Las propinas en la nómina | C | P2 | D | `/payroll` `/sales-tips` |
| ◐ | El ciclo de pago: semanal, quincenal o mensual | G | P1 | L E | `/settings/payroll` |
| ◑ | Mi pago neto sale negativo | P | P1 | L D | `/payroll` |
| ◑ | La nómina no coincide con lo que espero | P | P1 | D | `/payroll` |

### Transacciones

_Todo lo cobrado y lo pendiente por cobrar._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Cómo leer Transacciones: cuentas, cobros y pendientes | C | P1 | L | `/transactions` |
| ◑ | Facturado, cobrado, por cobrar, propinas y devuelto | R | P1 | L D | `/transactions` |
| ◑ | Filtrar por fechas, estado de la cuenta y estado de la cita | G | P1 | L | `/transactions` |
| ◐ | Estados de una cuenta: por cobrar, cobrada y devuelta | C | P1 | L D | `/transactions` |
| ◐ | Ver el detalle de una cuenta | G | P1 | L | `/transactions` |
| ◐ | Buscar una transaccion | G | P2 | L | `/transactions` |
| ◑ | Cuentas de clientes sin registro («Walk in») | C | P2 | L D | `/transactions` |
| ◐ | Devolver un pago | G | P1 | E D | `/transactions` |
| ◐ | Métodos de pago que puedes cobrar | R | P2 | L D | `/transactions` `/devices` |
| ◐ | Una cuenta quedó por cobrar | P | P1 | E D | `/transactions` |

### Configuración

_Cada ajuste de la barbería, uno por uno._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Conoce Configuración: los cuatro grupos de ajustes | C | P1 | L | `/settings` |
| ◐ | Detalles del negocio: zona horaria, formato de hora, semana y festivos | G | P1 | L E | `/business-details/*` |
| ◐ | Detalles del negocio: sitio web y redes sociales | G | P2 | L E | `/business-details/*` |
| ◐ | Detalles de facturación y facturas | G | P1 | L | `/settings/billing-details` |
| ◐ | Agendamiento online: qué es y cómo funciona | C | P1 | L P | `/online-booking` |
| ◑ | Reservas en tu sitio web: botón «Book now» flotante | G | P1 | L | `/online-booking` |
| ◑ | Reservas en tu sitio web: abrir desde tu propio botón | G | P2 | L | `/online-booking` |
| ◑ | Reservas en tu sitio web: incrustar en una página | G | P2 | L | `/online-booking` |
| ◐ | El enlace directo de reserva y los parámetros UTM | G | P1 | L D | `/online-booking` |
| ◐ | Períodos de cierre del negocio | G | P1 | L E | `/business-closed` |
| ◐ | Dispositivos de pago | G | P2 | L E D | `/devices` |
| ◑ | Empresa: los datos de tu empresa | R | P2 | L | `/companies` |
| ◐ | Permisos: dónde se cambian y cómo se guardan | G | P1 | L E | `/team-permission` |
| ◐ | Comisiones: qué se resta antes de calcular | C | P1 | L D | `/team-commission` |
| ◐ | Impuestos: cómo agregarlos y cómo se aplican | G | P1 | L E D | `/sales-taxes` |
| ◐ | Tarifa por uso de tarjeta de crédito | G | P1 | L E D | `/credit-card` |
| ◐ | Propinas: opciones, valor predeterminado y qué ve el cajero | G | P1 | L E D | `/sales-tips` |
| ◐ | Precios: moneda y si el precio incluye impuestos | G | P1 | L E D | `/sales-pricing` |
| ◐ | Integración de pagos con Stripe | G | P2 | L D | `/payment-integration` |
| ◐ | Centro de notificaciones: cómo funciona | C | P1 | L | `/notifications-center` |
| ◑ | Avisos sobre clientes: importación, reseñas, estados y bloqueos | R | P2 | L D | `/notifications-center` |
| ◑ | Avisos sobre productos y combos | R | P2 | L D | `/notifications-center` |
| ◑ | Avisos del calendario: agenda ocupada, bloqueos y vacaciones | R | P2 | L D | `/notifications-center` |
| ◑ | Avisos de métricas: salud de tu barbería | R | P2 | L D | `/notifications-center` |
| ◐ | Qué avisos recibe cada rol | R | P2 | L R | `/notifications-center` |
| ◐ | Eliminar tu cuenta | G | P2 | L D | `/settings` |

### Glosario

_Cada palabra de Barberlytics explicada en una frase._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◑ | Glosario: cada palabra de Barberlytics en una frase | R | P1 | L D | `/*` |
| ◐ | AVF: el ritmo de visita de cada cliente | C | P1 | D | `/customers/*` |
| ◐ | LTV: cuánto ha gastado un cliente | C | P2 | D | `/customers/*` |
| ◐ | FOV: la frecuencia de visitas | C | P2 | D | `/customers/*` |
| ◐ | Churn: cuando un cliente se pierde | C | P1 | D | `/customers` |
| ◐ | Ocupación: qué tan llena está la agenda | C | P1 | D | `/` |

### Problemas frecuentes

_No puedo entrar, un número no cuadra y qué hacer._

| | Artículo | T | Prio. | Necesita | Pantallas |
|---|---|---|---|---|---|
| ◐ | No puedo entrar a Barberlytics | P | P1 | C | `/authenticate` |
| ◐ | La app va lenta o no carga | P | P3 | D | `/*` |
| ◐ | Cómo contactar a soporte estando dentro de la app | G | P1 | L D | `/*` |
| ◑ | Un número no cuadra con lo que espero | P | P1 | D | `/` `/payroll` `/transactions` |
