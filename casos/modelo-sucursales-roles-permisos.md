# Cómo se organiza Barberlytics: empresa, sucursales, equipo, perfiles, roles y permisos

Fuente: recorrido de https://dash.barberlytics.com el 2026-09-25 con la sesión del usuario (cuenta de prueba «mugen
barber 2»), solo leyendo. **No se guardó, creó ni borró nada.** Se cambió un momento de sucursal en la cabecera para
comparar y se devolvió a «mugen barber 2»; se abrieron formularios de creación y se salió sin guardar.

Esto es la base para escribir la sección «Sucursales, roles y permisos» del centro de ayuda. Lo que no se pudo
comprobar está al final.

---

## 1. Las piezas y cómo se relacionan

```
Cuenta (login de una persona)
 └─ Perfiles (los «sombreros» que esa persona tiene: Business, Barber comission…)
Empresa  (1 por cuenta de dueño; «Configuración › Empresa»)
 ├─ Sucursales (locations)         ← cada una con su moneda, zona horaria, idioma y horario
 ├─ Equipo (personas)              ← un solo grupo para toda la empresa
 │    └─ se ACTIVAN en cada sucursal donde trabajan
 ├─ Catálogo de servicios          ← un solo catálogo para toda la empresa
 │    └─ se ACTIVAN en cada sucursal donde se ofrecen
 ├─ Catálogo de productos          ← ídem
 │    └─ se ACTIVAN en cada sucursal donde se venden
 └─ Ajustes generales              ← permisos, impuestos, propinas, comisiones, nómina, notificaciones…
```

Regla de oro (la misma en tres sitios): **se crea una vez, para toda la empresa, y se activa por sucursal.**

## 2. Sucursales

- **Dónde:** `Configuración › Sucursales` (`/companies/locations`). Lista con Nombre, Equipo (cuántas personas), País,
  Estado, Ciudad, Date create y Estado (Activo). Botón **Crear Sucursal**.
- **Acciones de cada sucursal:** **Ver**, **Editar** y **Borrar**.
- **Ver sucursal** (`/companies/locations/view/{id}`): tres cifras arriba —**Clientes**, **Equipo** y **Licencia** (fecha de
  vencimiento, p. ej. 28/AGO/2027)— y la ficha: Nombre, Identificación, País, Estado, Ciudad, Dirección, Idioma, Teléfono,
  Código Postal, Descripción, logo/foto. **Acciones** → **Editar Sucursal** o **Inactivar**.
- **Editar Sucursal** (`/companies/locations/edit/{id}`): Nombre de la sucursal\*, Nombre de la empresa\*,
  Identificación\*, Empresa\*, País\*, Estado\*, Ciudad\*, Dirección, Código Postal, Teléfono\*, **Moneda\***, **Idioma\***,
  **Zona horaria\***, Descripción, Fotos (0/5) y **Guardar**.
- **Lo que es propio de cada sucursal** (se ve en los datos que la app guarda por sucursal): zona horaria, moneda,
  idioma de comunicación con clientes (ES/EN), hora de inicio y de fin del día, formato de hora (12/24) y día en que
  empieza la semana. En la cuenta de prueba: «High End Barbershop (test)» está en EE. UU. con USD y
  `America/New_York`; «mugen barber 2» y «Prueba Elkin» en Colombia con COP y `America/Bogota`.
- **Selector de la cabecera:** lista las sucursales y **Todas las sucursales**. Al elegir una, todas las pantallas
  (calendario, clientes, equipo, métricas…) pasan a esa sucursal; **Todas las sucursales** consolida.
  Las pantallas de Configuración se ven **igual** en cualquier sucursal (son de la empresa).
- **Los ajustes generales dicen:** «Esta es una configuración general, pero se puede ajustar para cada ubicación en la
  sección correspondiente». Está en Comisiones, Impuestos, Propinas, Fechas de cierre y en la matriz de permisos
  («se pueden personalizar individualmente por ubicación»). **No se encontró dónde se ajusta por ubicación:** ver
  «Pendiente».

## 3. Equipo compartido y «activar por sucursal»

- **Equipo** (`/team/barbers`) muestra **solo las personas activas en la sucursal elegida**. La empresa tiene más gente
  de la que se ve: en la cuenta de prueba hay 21 barberos por comisión en la empresa y 10 activos en «mugen barber 2».
- **Acciones › Activar equipo dentro de esta sucursal** (`/team/activate`): «Seleccione el equipo que desea importar
  activando el equipo en el interruptor. Haga clic en “Guardar” una vez que haya hecho sus elecciones». Tiene pestañas
  **Barberos** y **Gerentes**, y dentro **Comisión** / **Renta**. Un interruptor por persona: encendido = trabaja en esta
  sucursal.
- **Acciones › Activar servicios** (`/services/location/activate-service`): «Seleccione los servicios que desea importar
  activando el servicio en el interruptor». **30 servicios** en el catálogo de la empresa; cada sucursal enciende los
  suyos.
- **Acciones › Activar productos de barbería** (Productos): el mismo patrón para el catálogo de productos.
- **Consecuencia para la ayuda:** «no veo a un barbero / un servicio en esta sucursal» casi siempre es «no está
  activado aquí».

## 4. Perfiles y roles

- **Perfil = el sombrero con el que entras.** Una misma persona puede tener **más de un perfil**. En la cuenta de prueba,
  Elkin tiene **Business** (dueño) y **Barber comission** (barbero por comisión). El menú de la cuenta los lista con el
  nombre de la persona y el del perfil debajo; el activo lleva una marca de verificación.
- **Roles** (los cinco de «Crear miembro del equipo» y de la pantalla de Permisos):

| Rol | Cómo lo describe la app |
|---|---|
| **Dueño** | «Este rol tiene todos los permisos que normalmente se le otorgan al dueño de la barbería.» |
| **Administrador de la locación** | «Este rol tiene todo lo necesario para poder gestionar una locación. Generalmente se le asigna al administrador de la ubicación.» |
| **Recepcionista** (en Permisos: «Recepción - mostrador de recepción») | «Este rol tiene permisos para registrar citas y hacer check in y check out. Generalmente se asigna a las secretarias de la barbería.» |
| **Barbero por comisión** | «Este rol es para los barberos a los que se les paga comisiones.» |
| **Barbero de renta** | «Este rol es para miembros del equipo a quienes se les alquila un espacio de trabajo» |

- **Gerentes** (`Equipo › Gerentes`): «Lista de miembros» con Nombre, Sucursal, Rol («Dueño», «Dueño - Barbero por
  comisión»), Correo, Teléfono. Un dueño puede ser a la vez barbero por comisión.
- **Crear miembro del equipo:** se elige **un rol** (tarjeta con su descripción) y **Crear**. Para
  Administrador: pestañas **Perfil** (Nombre\*, Apellidos\*, Teléfono\*, Correo\*, interruptor «Esta persona es barbero»)
  y **Permisos** (se habilita al completar el perfil).

## 5. Permisos

- **Dónde:** `Configuración › Permisos` (`/team-permission`). Una pestaña por rol. «Las configuraciones que aquí se
  establezcan serán las opciones predeterminadas al crear nuevos roles, aunque se pueden personalizar individualmente
  por ubicación y al crear o editar cada usuario. **Las cuentas de propietarios tienen acceso total al sistema.**»
- **Cómo se lee la matriz:** filas = funciones; columnas = **Ver · Crear · Editar · Borrar · Activo**. Algunas filas solo
  tienen **Activo** (interruptor de si la función existe para ese rol) y otras no tienen todas las columnas.
- **Se puede ajustar por persona:** en la ficha de cada miembro (`Equipo › Ver…` › pestaña **Permisos**) aparece la misma
  matriz. La de un barbero de prueba difiere de la predeterminada de su rol (p. ej. «Bloquear calendario» completo
  frente a solo «Ver»): **los permisos se copian del rol al crear a la persona y luego se pueden personalizar.**
- **Lo que decide qué ves:** el **rol/perfil** que usas + la **sucursal** elegida + los **permisos** de esa persona.

### Matriz predeterminada por rol

V = Ver · C = Crear · E = Editar · B = Borrar · A = Activo. «—» = la función no aparece para ese rol. «A» solo = la fila
solo tiene interruptor Activo.

| Función | Administrador | Barbero comisión | Barbero renta | Recepción | Dueño |
|---|---|---|---|---|---|
| **Reservas y clientes** | | | | | |
| Calendario | A | A | A | A | A |
| Reservar citas | VCEB A | VCEB A | VCEB A | VCEB A | VCEB A |
| Bloquear calendario | VCEB A | V A | VCEB A | VCEB A | VCEB A |
| Clientes | VCEB A | VC A | VCEB A | VCE A | VCEB A |
| Información del cliente | A | no | no | A | A |
| Importar clientes | A | no | A | A | A |
| Descarga de cliente | no | no | A | no | A |
| **Equipo** | | | | | |
| Equipo | VCEB A | V | — | no | VCEB A |
| Gerentes | VCEB A | no | — | no | VCEB A |
| Sección de pagos de barberos | no | no | — | no | A |
| Niveles | VCEB A | no | — | no | VCEB A |
| Póngase en fila | VCEB A | no | — | no | VCEB A |
| Ordenar barberos agendas | no | no | — | no | VCEB A |
| **Métricas** | | | | | |
| Indicadores clave de rendimiento empresariales | A | no | — | A | A |
| **Inventarios** | | | | | |
| Productos | VCEB A | no | — | V | VCEB A |
| Categorías | VCEB A | no | — | V | VCEB A |
| **Servicios** | | | | | |
| Servicios | VCEB A | no | — | no | VCEB A |
| Categorías | VCEB A | no | — | no | VCEB A |
| Póngase en fila | V E A | no | — | no | V E A |
| **POS** | | | | | |
| Precios | A | A | A | A | A |
| **Negocio** | | | | | |
| Fechas de cierre | VCEB A | no | — | no | VCEB A |
| Nómina de sueldos | V C E | no | — | no | V C E |
| Permisos | V E A | no | — | no | V E A |
| Configuraciones de la cuenta | V E A | V | V | V E | V E A |
| Gastos | VCEB A | VCEB A | VCEB A | no | VCEB A |

Lecturas útiles: el **barbero por renta** solo tiene tres bloques (Reservas y clientes, POS y Negocio: Configuraciones
de la cuenta y Gastos). El **barbero por comisión** puede reservar citas, ver y crear clientes, ver al equipo y
registrar gastos, pero no toca catálogos, nómina ni permisos. La **recepción** maneja citas y clientes, ve productos y
métricas, pero no gastos ni equipo. **Solo el dueño** tiene «Sección de pagos de barberos» y «Ordenar barberos agendas».

## 6. La ficha de cada miembro del equipo

`Equipo › Acciones › Ver Barbero por comisión / de renta` (`/team/barbers/view/commission/{id}` y `/view/rent/{id}`).
**Importante:** estas rutas solo cargan si se entra desde la lista (abrirlas escribiendo la URL muestra una ficha vacía).
Acciones por fila: **Ver**, **Editar**, **Inactivar** y **Borrar** «Barbero por comisión/de renta».

| Pestaña | Barbero por comisión | Barbero de renta |
|---|---|---|
| **Perfil** | Foto, nombre, tipo y nivel, Descripción, Información personal (Número telefónico, Correo electrónico, **Código** de la persona), Detalles: **Visibilidad para agendamiento**, Habilidades, Fotos | Igual |
| **Servicios** | Por cada servicio: **Precio del servicio**, **Nuevo cliente precio**, **Precio de lealtad**, **Tiempo**, **Comisión dividida**, **Comisión extra** (vacíos = usa el del catálogo) | Igual |
| **Compensación** / **Pagos** | «Compensación»: pestañas **Servicio** y **Producto**. Servicio: **Comisión básica**, **Comisión de cliente recurrente**, **Comisión de clientes sin cita**, **Comisión de clientes que llegan sin preferencia**, **Comisión de nuevos clientes** (%). Producto: «No se ha configurado una compensación por venta de productos» | «Pagos»: **Lógica de pago** (**Base de la renta**, **Deducción por cita sin agendamiento**, **Deducción por clientes nuevos**, **Deducción por citas sin preferencia**, en %) e **Información bancaria** (banco y número de cuenta) |
| **Calendario** | Horario semanal: casilla por día + **Hora de inicio** / **Hora de cierre** | Igual |
| **Permisos** | La matriz de la persona | Igual |
| **Opciones** | **Puede recibir propinas** · **Puede programar múltiples citas** · **Puede tomar nuevos clientes** · **Los clientes pueden cancelar citas** (con canales **Correo / SMS / Push** y un tiempo en **Horas** y **Minutos**) · Información personal (Minutos, Redes Sociales, Link) | Igual |

- **Lo que separa comisión de renta:** al de comisión se le paga un % por servicio según el tipo de cliente
  (recurrente, sin cita, sin preferencia, nuevo); el de renta paga una **base** y la barbería **descuenta un % por
  las citas sin agendar, los clientes nuevos y las citas sin preferencia** (los clientes que trajo la barbería).
- **Orden para clientes sin cita y sin preferencia** (`Equipo › Acciones › Ordenamiento para agendamiento sin cita y
  sin preferencia`, `/team/barbers/lineup`): dos pestañas, **Agendamiento sin cita** y **Sin preferencia**. Lista
  ordenada que se reordena arrastrando y con un interruptor por barbero: «Los barberos que deshabilitaste en esta
  pantalla no podrán tomar clientes que vengan sin cita». Los activos llevan número (1, 2, 3…); los apagados, «–».
- **Niveles** (`Equipo › Niveles`): agrupan barberos (Master, Senior, «Sin nivel»…); cada barbero tiene uno. Con
  **Crear nivel** se agregan.

## 6b. Qué cambia al cambiar de perfil (visto el 2026-09-25)

Cambio hecho desde `Cuenta` (cabecera) tocando el perfil **Barber comission**; luego se volvió a **Business**. No pidió
volver a entrar. Al cambiar de perfil la app **recarga y aterriza en el Calendario** (`/calendar`); al volver a Business
aterriza en Métricas (`/`).

| Qué | Perfil **Business** (dueño) | Perfil **Barber comission** (mismo login) |
|---|---|---|
| Menú lateral | Inicio · Calendario · Clientes · Servicios & Productos (Servicios, Productos) · Equipo · Gastos · Nómina · Transacciones · Configuración | Inicio · Calendario · Clientes · Equipo · Gastos · Configuración. **Se ocultan Servicios & Productos, Nómina y Transacciones** |
| Menú del celular (barra de abajo) | Inicio · Calendario · Equipo · Clientes · Más | Inicio · Calendario · Gastos · Clientes · Más |
| Cabecera de la cuenta | «Elkin Garcia · **Propietario**» | «Elkin Garcia» (sin «Propietario») |
| Calendario | Una columna por barbero, filtro **Equipo\***, vista Agenda/Día/Mes | **Solo su propia columna** (Elkin Garcia); mismas Acciones: Crear cita, Crear venta rapida, Venta sin cita, Lista de cobros |
| Métricas | Cinco pestañas (Negocio, Clientes, Barberos, Marketing, AI Insights), filtros de sucursal y «Todo el equipo» | Tres pestañas: **Negocio, Clientes, Barberos**; el filtro de barbero no está; las cifras son **las de esa persona** (p. ej. $120,000 frente a $10,260,490 de todo el equipo) |
| Equipo | Cuatro pestañas (Barberos, Niveles, Horas de trabajo, Gerentes) | Tres pestañas: **Barberos, Niveles, Horas de trabajo** (sin Gerentes); ve la lista de los 10 barberos de la sucursal |
| Clientes | Lista completa | Lista completa (44 clientes), **con el teléfono enmascarado** (`+57******2020`) |
| Gastos | Fijos y Variables | Fijos y Variables (ve los de la sucursal) |
| Configuración | Los 17 ajustes en cuatro grupos | **Solo dos: «Formato de hora» y «Eliminar cuenta»** (personales) |

Lectura: **el menú se arma con los permisos del perfil**. Si a una persona se le quita «Ver» en una función, esa
sección deja de aparecer en su menú (confirmado por el usuario: «si le quito a un usuario que pueda ver el equipo ya no
ve el módulo Team»). El barbero por comisión ve Equipo porque su matriz le da **Ver** en Equipo.

**Dónde se ajusta lo «general» por sucursal:** según el usuario, se ve **entrando con una persona que tenga permiso de
edición de sucursal**; con la cuenta de dueño no aparece. Sigue pendiente de verificar.

**Qué pasa si se cambian los permisos de alguien que ya existe:** según el usuario, **se le ocultan módulos o
funciones** (ejemplo: quitar «Ver» en Equipo oculta la sección). Falta comprobar si cambiar el **predeterminado del
rol** toca a quienes ya lo tienen.

## 7. Preguntas del usuario que este modelo responde (semilla de artículos)

- ¿Qué diferencia hay entre empresa y sucursal? ¿Cuántas puedo tener?
- ¿Cómo abro una sucursal nueva y qué le pongo primero (equipo, servicios, productos)?
- ¿Por qué no veo a un barbero / un servicio / un producto en mi sucursal? → activarlo.
- ¿Puede un barbero trabajar en dos sucursales? → sí: una persona, activada en las dos.
- ¿Qué ve cada rol? ¿Cómo le doy más o menos permisos a una persona sin cambiar el rol?
- ¿Qué pasa si cambio los permisos predeterminados de un rol? ¿Afecta a los que ya existen? *(pendiente)*
- ¿Cómo entro como barbero si soy dueño? → cambiar de perfil.
- ¿En qué moneda/zona horaria/idioma trabaja cada sucursal?
- ¿Qué significa cada tipo de comisión y de deducción de renta?

## Pendiente de confirmar (no se pudo ver o no se quiso tocar)

1. **Dónde se ajustan por ubicación** los valores «generales» (comisiones, impuestos, propinas, cierres, permisos).
   Las pantallas se ven idénticas en las tres sucursales de prueba. Puede ser una función aún no expuesta en la web.
2. **Efecto de cambiar el permiso predeterminado de un rol** sobre quienes ya lo tienen.
3. **Qué pasa al cambiar de perfil** en el menú de la cuenta (no se pulsó para no alterar la sesión): qué menú y qué
   permisos cambian, y si pide volver a entrar.
4. **Vista real de cada rol**: menú y pantallas que ve una recepcionista, un barbero de renta, un administrador (solo se
   ha visto la del dueño).
5. Formulario completo de **Administrador de la locación**, **Recepcionista**, **Barbero por comisión** y **Barbero de
   renta** (el paso **Permisos** exige rellenar el perfil; el de **Servicios/Compensación** se vio en una ficha
   existente).
6. **Inactivar vs Borrar** una persona o una sucursal: qué conserva cada uno (historial, clientes, licencia).
7. **Licencia** de la sucursal (28/AGO/2027): qué incluye y qué pasa al vencer; relación con **Detalles de
   facturación**.
8. Significado exacto de **Comisión dividida**, **Comisión extra**, **Precio de lealtad** y del tiempo de
   **Los clientes pueden cancelar citas** (con 1 h y 2 min).
9. Cuántas sucursales permite el plan y quién puede crear una.
10. **Datos sensibles** vistos y que no se copian a la ayuda: el **Código** de cada persona, banco y número de cuenta de
    los barberos de renta, teléfonos y correos.
