# Servicios (`/services`) y Productos (`/products`) en producción

Fuente: lectura con `scripts/inspect.mjs`, 2026-09-25, sucursal «mugen barber 2». Solo lectura: se abrieron los
formularios y se salió sin guardar. Textos tal cual.

## Servicios

- Título «Servicios», «En esta sección podrás tener todo el control de tus servicios.», botón **Acciones**: **Crear
  Servicio · Crear categoría · Crear combo · Orden de agendamiento · Activar servicios**.
- Pestañas **Categorías · Servicios · Combos**.
- **Categorías**: «Lista de Categorías», «5 Categorías», buscador. Cada categoría es una fila con **…**, iconos de ojo
  (ver), lápiz (editar) y papelera (borrar), y una flecha **›** que la despliega para ver sus servicios (p. ej. «Barber
  Services»: Executive Service, Classic Haircut, Children Haircut, Men's Haircut, Signature Service, Hot towel shave,
  Beard Trim). Hay una categoría **Uncategorized** para los servicios sin categoría.
- **Servicios**: «Listado de servicios», filtro **Categorías** (**…**), buscador; tabla **Servicio · Categoría · Precio
  básico · Estado** (Activo) **· Acción** → **Acciones** → **Ver · Editar · Borrar**.
- **Combos**: «Lista de combos», «4 Combos», misma tabla (p. ej. «Excutive Service · Barber Combos · 75.00 · Activo»).

### Crear Servicio (`/services/create`, botón **Cancelar**)

Pestañas **General · Equipo · Avanzado** (Equipo y Avanzado se habilitan tras **Continuar**).

- **General**: foto, **Nombre del servicio\***, **Costo del servicio**, **Precio básico\***, **Descripción**, «Esta
  opción permite que su servicio sea visible en el agendamiento online» con interruptor **Privado / Público**, **Duración
  del servicio (minutos)**, **Impuestos** (selector), **Categoría\*** (selector), **Continuar**.
- **Equipo** (visto en Editar): casilla **Seleccionar todo** y, por barbero, una casilla y los campos **Precio básico**
  (fijo, el del servicio), **Precio del servicio**, **Precio para clientes nuevos**, **Precio de fidelidad (frecuencia de
  visita)**, **Duración del servicio (minutos)**, **Division de la comision**, **Comisión extra**.
- **Avanzado** (visto en Editar): **Restricciones de tiempo para reservas** → **Añadir una Restriccion de Tiempo**
  (**Seleccione un día\***, **Hora de inicio\***, **Hora de fin\***, **Agregar**); **Detalle del cronograma de servicios**:
  «Esta opción le permite programar otra cita con otro servicio durante su servicio.» interruptor **Multiservicio**;
  «Esta opción le permite tener un tiempo al inicio o final del servicio para tener un tiempo para preparar o finalizar
  el servicio.» interruptor **Tiempo de preparacion**; **Guardar**.

### Ver servicio

«Ver servicio», **Acciones**, pestañas General · Equipo · Avanzado. General: nombre, **Descripción**, **Detalles**
(**Visibilidad** Público, **Categoría**, **Fecha de creación**), **Datos** (**Valor** $30.00, **Duración del servicio
(minutos)** 15 Minutos).

### Editar Servicio

Mismo formulario que crear, con botón **Guardar** en cada pestaña.

### Crear categoría

Página «Crear categoría»: **Nombre\***, **Descripción**, «Esta opción permite que su servicio sea visible en el
agendamiento online» **Privado / Público**, **Crear**.

### Crear combo

«Crear combo de servicios», pestañas General · Equipo · Avanzado. General: **Nombre\***, «Seleccione sus servicios» →
**Agregar servicio**, **Total de Servicios:** $0.00, **Duración Total:** 0 min; **Detalles del Combo**: **Precio
combinado\***, **Duración del combo**, **Descripción**, **Privado / Público**, **Categoría\***, casilla **Este servicio
acepta tarjetas de regalo**, **Continuar**.

### Ver combo

«Ver combo»: nombre, **Descripción**, **Detalles** (**Visibilidad**, **Color** «Amarillo», **Precio combinado** $75.00,
**Duración del combo** 60 Minutos, **Categoría**), **Servicios Adicionales** (Servicio 1: Men's Haircut · 30 min · $50.00;
Servicio 2: Beard Trim · 15 min · $30.00), **Total de Servicios:** $80.00, **Duración Total:** 45 min. (El precio del
combo puede ser menor que la suma y su duración distinta.)

### Orden de agendamiento

«Ordenamiento de servicios para reservas online», **Cancelar**: lista numerada de **Categorías** (1 prueba elkin flujo,
2 Barber Services, 3 Hair Color & Other, 4 Waxing, 5 Uncategorized) que se reordena, y **Guardar**. Define el orden en
que el cliente ve las categorías al reservar online.

### Activar servicios

«Activar servicios», **Cancelar**, «Seleccione los servicios que desea importar activando el servicio en el interruptor.
Haga clic en 'Guardar' una vez que haya realizado sus elecciones», «Listado de servicios», «30 Servicios», un
interruptor por servicio, **Guardar**.

## Productos

- Título «Productos», «En esta sección podrás tener todo el control de tus productos.», **Acciones**: **Crear producto ·
  Crear Categoría · Activar productos de barbería**.
- Pestañas **Productos · Categorías**.
- **Productos**: «lista de productos», «5 Productos», filtro **Categorias** (**Todas las categorias**), buscador; tabla
  **Nombre · Categoría · Precio · Acción** → **Acciones** → **Ver · Editar · Borrar**.
- **Categorías**: «Lista de categorias», «4 Categorías», buscador; cada categoría con cuántos productos tiene («Johnny B ·
  1 Producto», «Tec Italy · 0 Producto»).

### Crear producto (`/products/create`)

Pestañas **General · Avanzado**. General: foto, **Nombre del producto\***, **Descripción**, **Categoría\***, **Impuestos**,
**Precio de compra**, **Precio de venta\***, **Código sku**, «Esta opción permite que su producto sea visible en el flujo
de reserva.» **Privado / Público**, «Esta funcionalidad permite a los barberos vender estos productos.» interruptor
**Disponibilidad de venta**, **Fotos - 0/5**, **Continuar**. **Avanzado** (visto en Editar): **Marca**, **Distribuidor**,
**Guardar**.

### Ver producto

«Ver producto», **Acciones**, General · Avanzado: Nombre del producto, Descripción, Categoría, Impuestos, Precio de
compra (30000.00), Precio de venta (50000.00), Código sku («--»), Privado/Público, Disponibilidad de venta, Fotos.

### Crear Categoría (productos)

«Crear Categoría»: **Nombre\***, **Descripción**, **Crear**.

### Activar productos de barbería

«Activar producto», **Cancelar**, «Seleccione los productos que desea importar activandolos con el interruptor. Haga
clic en "Guardar" una vez que haya hecho sus elecciones», «lista de productos», «6 Productos», interruptores, **Guardar**.

## No visto

Qué pasa tras **Continuar**/**Crear**/**Guardar**/**Borrar**; la pestaña Equipo de un combo; **Multiservicio** y **Tiempo
de preparacion** en uso; subir fotos; inventario/unidades (no hay campo de stock en el formulario); el color del servicio
(en Ver combo aparece **Color**; en Crear Servicio no se vio el campo en el texto, aunque el mapa anterior lo cita).
