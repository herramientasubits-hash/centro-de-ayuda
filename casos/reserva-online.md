# Reserva online que ve el cliente (`https://fd.barberlytics.com/book/{enlace}`)

Fuente: recorrido el 2026-09-25 con `scripts/booking-browser.mjs` + `scripts/booking-step.mjs`. El usuario escribió su
celular (cliente ya conocido de la barbería); no se pulsó **¡Reservar ahora!**. Textos tal cual. Página pública, sin
sesión de la app. Idioma mezclado: títulos en español, días de la semana y algunos textos en inglés («Fri», «Sep 25»,
«Any available barber»).

## 1. Celular

«Reserva tu cita» · «Ingresa tu número de teléfono para empezar. Lo usaremos para encontrar tu perfil y enviarte
novedades de tu cita.» · **Número de teléfono** con país (**🇨🇴 +57 · 🇺🇸 +1 · 🇻🇪 +58**) · «Solo para novedades de tu
cita.» · tarjeta de la sucursal (logo, nombre, «Abierto hoy: 08:00 AM a 11:50 PM», «¿Necesitas ayuda? Llama +57…») ·
**Continuar** (deshabilitado hasta escribir el número; muestra «Cargando...» al buscar) · «Reserva segura · Toma menos
de 1 minuto · Nuestros clientes confían».

## 2. Cliente conocido: «Bienvenido de nuevo»

«Bienvenido de nuevo, Carlos.» · «Recordamos tu última visita para reservar más rápido. Elige tu fecha y hora para
continuar.» · botón **Elegir algo diferente** · «PRESELECCIONAMOS TU ÚLTIMA VISITA»: **Sede** (nombre, **Cambiar**), **Tu
último servicio** («Hot towel shave · 30 min • $50.00», **Cambiar**), **Tu último barbero** (nombre y nivel, **Cambiar**) ·
«Elige la hora de tu cita» · «Selecciona un día y una hora disponible que te convenga.» · tres días (Fri Sep 25, Sat Sep
26, Sun Sep 27) y **Más** · «Horarios disponibles para Fri, Sep 25» con horas (02:00 PM, 02:30 PM…) · **← Atrás** ·
**Continuar**.

Un cliente nuevo (sin visitas) no se vio: pendiente.

## 3. Flujo completo (**Elegir algo diferente**)

Barra de pasos: **Sede › Servicio/Barbero › Fecha y hora › Confirmar**.

- **Sede**: una tarjeta por sucursal con nombre, dirección, horario («08:00 a 23:50») y **Detalles de la sede**. Tocar la
  tarjeta elige la sede y pasa al siguiente paso.
- **Servicio/Barbero**: pestañas **Servicios** y **Barberos** (Barberos está deshabilitada con la ayuda «Selecciona un
  servicio» hasta elegir uno). Filtro por categoría (**Todos**, Barber Services…). Cada servicio: nombre, duración («0 h 30
  min»), precio «$50.00 &UP» (desde). Pie: «Selecciona un servicio».
- Al elegir servicio, pestaña **Barberos**: opción **Sin preferencia** y una tarjeta por barbero (foto/inicial, nombre,
  nivel, el precio de ese barbero para el servicio —cambia por barbero: $60.00, $65.00, $50.00— y **Ver**). **Ver** abre la
  ficha del barbero: **Descripción**, **Nivel**, **Servicios** que hace, **Galería**, botón **Seleccionar este
  barbero**. Pie: «Selecciona un barbero» → al elegir, botón **Siguiente**.
- **Fecha y hora**: mes («September 2026»), tira de días (Fri 25 … Wed 30), «Horarios disponibles», el barbero elegido con
  su nivel y las horas agrupadas en **Tarde** (02:00 PM–04:30 PM) y **Noche** (05:00 PM, 05:30 PM); debajo **Sin
  preferencia · Any available barber · 12 disponibles** (más horas si acepta cualquier barbero). **Siguiente**.
- **Confirmar**: «Confirmar cita» · «Verifica que la información de tu cita sea correcta» · tarjeta: servicio, nombre del
  cliente, «Sep 25, 2026 at 04:00 PM (30 min)», «Con <barbero>», **Editar**, **Eliminar**, precio ($60.00) · **Agregar
  cita** (vuelve a Servicio/Barbero para sumar otro servicio; ofrece **Descartar y volver al resumen**) · **¡Reservar
  ahora!** (no se pulsó).

## No visto

Qué pasa tras **¡Reservar ahora!** (confirmación, mensaje al cliente, pago), el flujo de un cliente nuevo (si pide nombre
y correo), **Más** días, el widget incrustado en un sitio, el idioma inglés, cancelar desde el enlace del cliente.
