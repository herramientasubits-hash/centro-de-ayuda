# Equipo en producción (`/team/barbers`)

Fuente: lectura con `scripts/inspect.mjs`, 2026-09-25, sucursal «mugen barber 2». Solo lectura: formularios abiertos y
cerrados sin guardar. Complementa `casos/modelo-sucursales-roles-permisos.md` (§3 activar, §5 permisos, §6 ficha).

## Pantalla

- Título «Equipo», «En esta sección podrás tener todo el control de tu equipo.», botón **Acciones**: **Crear miembro del
  equipo · Crear nivel · Ordenar barberos · Ordenamiento para agendamiento sin cita y sin preferencia · Activar equipo
  dentro de esta sucursal**.
- Pestañas **Barberos · Niveles · Horas de trabajo · Gerentes**.

### Barberos

- Dos botones: **Barbero por comisión** (10 en la sucursal) y **Barbero renta** (1).
- «Listado de Barberos», filtro **Nivel** (**…**), buscador. Tabla comisión: **Nombre · Sucursal · Nivel · Correo ·
  Teléfono · Estado (Activo) · Acción**. Tabla renta añade **Cuenta bancaria**.
- **Acciones** de fila: **Ver Barbero por comisión · Editar Barbero por comisión · Inactivar Barbero por comisión ·
  Borrar Barbero por comisión** (para renta: «… de renta»).
- Sucursal sin equipo: «0 Barberos», «Aquí podrás ver los barberos de tu equipo.», botón **Crear barbero comisión**.

### Niveles

«Lista de niveles», «6 Niveles», filtro, buscador; tabla **Nombre · Barberos · Acciones** (Master 3, Senior 2, «-» 3,
«1» 1…). Fila: **Editar · Borrar**. **Crear nivel** (panel): **Nombre nivel\***, **Crear**.

### Horas de trabajo

Filtro **Sucursal**, **Esta semana** con **‹ 21 SEP - 27 SEP ›**, «Equipo Miembros · 11 barberos», rejilla barbero × día
(lun., 21 SEP … dom., 27 SEP) con el turno («6am - 11pm») o «No está trabajando». Al tocar un turno: **Editar este día**
y **Borrar este turno**. **Editar este día** abre un panel: «Barbero: …», **Fecha inicio\***, **Fecha fin\***, **Guardar**.

### Gerentes

«Lista de miembros», «6 Miembros», buscador; tabla **Nombre · Sucursal · Rol · Correo · Teléfono · Estado · Acción**.
Roles vistos: «Dueño», «Dueño - Barbero por comisión». Fila: **Ver Dueño · Ver Barbero por comisión · Editar Dueño ·
Editar Barbero por comisión · Inactivar Dueño · Inactivar Barbero por comisión** (una persona con dos perfiles tiene
las acciones de cada uno).

## Crear miembro del equipo

Panel con una tarjeta por rol (radio; **Barbero por comisión** viene marcado) y botón **Crear**:

- **Dueño** «Este rol tiene todos los permisos que normalmente se le otorgan al dueño de la barbería.»
- **Administrador de la locación** «Este rol tiene todo lo necesario para poder gestionar una locación. Generalmente se le
  asigna al administrador de la ubicación.»
- **Recepcionista** «Este rol tiene permisos para registrar citas y hacer check in y check out. Generalmente se asigna a
  las secretarias de la barbería.»
- **Barbero por comisión** «Este rol es para los barberos a los que se les paga comisiones.»
- **Barbero de renta** «Este rol es para miembros del equipo a quienes se les alquila un espacio de trabajo»

Formularios (con **Cancelar** y **Continuar**; las demás pestañas se habilitan al completar la anterior):

- **Crear Barbero de renta** (y por comisión): pestañas **Perfil · Servicios · Pagos** (renta) / **Compensación**
  (comisión) **· Calendario · Permisos · Opciones**. Perfil: foto, **Nombre\***, **Apellido\***, **Teléfono\***, **Correo
  electrónico\***, **Descripción**, interruptor **Visibilidad para agendamiento**, **Nivel de barbero\***, **Habilidades**,
  **Galeria - 0/5**, **Continuar**.
- **Crear Recepcionista**: pestañas **Perfil · Permisos**. Perfil: **Nombre\***, **Apellidos\***, **Teléfono\***,
  **Correo\***, **Continuar**.
- **Administrador de la locación**: Perfil (Nombre\*, Apellidos\*, Teléfono\*, Correo\*, interruptor «Esta persona es
  barbero») y Permisos (visto antes).

## Ficha (Ver) y Editar de un barbero por comisión

Pestañas **Perfil · Servicios · Compensación · Calendario · Permisos · Opciones**; botón **Acciones**.

- **Perfil**: foto, nombre, «Barbero por comisión | nivel», **Información personal** (**Número telefónico**, **Correo
  electrónico**, **Código**), **Detalles** (**Visibilidad para agendamiento** Habilitado/Deshabilitado, **Habilidades**).
- **Servicios**: por cada servicio: **Precio del servicio**, **Nuevo cliente precio**, **Precio de lealtad**, **Tiempo**,
  **Comisión dividida**, **Comisión extra** («--» = usa el valor del servicio).
- **Compensación** (ver): botones **Servicio · Producto**; Servicio: **Comisión básica**, **Comisión de cliente
  recurrente**, **Comisión de clientes sin cita**, **Comisión de clientes que llegan sin preferencia**, **Comisión de nuevos
  clientes** (en %). Producto: «No se ha configurado una compensación por venta de productos».
- **Compensación** (editar): «Seleccione y active una forma de compensación por servicio y otra por producto para
  continuar con el proceso», **Tipo de compensación\*** con opciones **Comisión · Comisión de escala · Salario**;
  **Lógica de comisión** «Un porcentaje fijo del servicio.» y los cinco campos de comisión (**Comisión básica\***…),
  **Guardar**.
- **Calendario**: por día (Domingo…Sabado) **Hora de inicio** / **Hora de cierre** (en editar, con casilla por día y
  asterisco en los días activos; p. ej. Lunes 06:00 AM – 11:00 PM).
- **Permisos**: la matriz Ver/Crear/Editar/Borrar/Activo por bloque (Reservas y clientes, Equipo, Métricas, Inventarios,
  Servicios, POS, Negocio).
- **Opciones** (ver): **Puede recibir propinas** (Habilitado), **Puede programar múltiples citas** (Deshabilitado),
  **Puede tomar nuevos clientes** (Habilitado), **Los clientes pueden cancelar citas** (Deshabilitado; canales **Correo ·
  SMS · Push**; **Horas**, **Minutos**), **Información personal** (**Minutos**, **Redes sociales**, **Link**).
- **Opciones** (editar): **Puede recibir propinas**, **Puede hacer multiples servicios**, **Puede tomar nuevos clientes**,
  **Los clientes pueden cancelar citas**, **Intervalo de agendamiento del barbero** (**Minutos\***), **Recordatorio para
  barbero** (**Correo eletrónico · SMS · Push**, **Horas\***, **Minutos\***, **Añadir más**), **Guardar**.

## Ficha de un barbero de renta

Pestañas **Perfil · Servicios · Pagos · Calendario · Permisos · Opciones**. **Pagos**: **Lógica de pago** (**Base de la
renta** $50,000.00, **Deducción por cita sin agendamiento** 10.00 %, **Deducción por clientes nuevos** 10.00 %, **Deducción
por citas sin preferencia** 10.00 %) e **Información bancaria** (**Nombre del banco**, **Número de cuenta**). Los valores
bancarios son sensibles: no se copian.

## Ordenar barberos

«Ordenar barberos», **Cancelar**, lista **Barbero · Nivel** numerada 1…11 que se reordena arrastrando, **Guardar**. Es el
orden de las columnas del calendario.

## Ordenamiento para agendamiento sin cita y sin preferencia (`/team/barbers/lineup`)

Pestañas **Agendamiento sin cita · Sin preferencia**. «Los barbero que deshabilitaste en esta pantalla no podrán tomar
clientes que vengan sin cita.» Lista con interruptor por barbero: los activos numerados (1 joker, 2 Elkin, 3 gilbert, 4
marcela, 5 App Review), los apagados con «–». **Guardar**.

## Activar equipo dentro de esta sucursal (`/team/activate`)

Ver `casos/modelo-sucursales-roles-permisos.md` §3. Comprobado el 2026-09-25 en «Prueba Elkin»: tras **Guardar** vuelve
a Equipo y la persona aparece en la lista con estado Activo.

## No visto

Qué pasa tras **Continuar/Guardar** en cada formulario, **Inactivar** vs **Borrar** (qué conserva), **Comisión de
escala** y **Salario** (sus campos), el formulario de Dueño, subir foto/galería, la pestaña Servicios en editar (campos
por servicio), **Borrar este turno**, crear un nivel y asignarlo.
