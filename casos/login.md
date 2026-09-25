# Mapa de casos · Acceso y cuenta (`/login`)

Lo que puede pasarle a alguien en la pantalla de entrada, sacado de la app (Thema, rama
`feat/login-barberia`), del contrato de API y del backend simulado. Cada línea termina en el
artículo que lo cubre. **Revisa esta lista antes de leer los artículos:** lo que falte aquí,
falta allá.

## Camino feliz
- Celular → **Enviar código** → código de 6 dígitos por SMS → **Entrar** → panel. → `ingresar`
- El código vence a los 10 minutos. → `ingresar`, `codigo-incorrecto-o-vencido`
- Al entrar vuelve a la pantalla que intentabas abrir (si llegaste desde un enlace). → `ingresar`
- No hay contraseña, a propósito. → `ingresar` (FAQ)

## Alternativas
- **Google** / **Outlook**: entra directo si esa cuenta está vinculada. → `entrar-con-google-o-outlook`
- **¿Olvidaste tu número?** → correo registrado → llega el celular por correo. → `olvide-mi-numero`
- **Crear cuenta** → formulario de la barbería → «Recibimos tu registro» → activación por correo. → `crear-cuenta`
- **Cambiar número** en el paso del código, para corregir el celular. → `ingresar`
- Idioma y modo claro/oscuro arriba a la derecha del login. → `ingresar` (FAQ)

## Entradas
- Celular sin indicativo (Colombia por defecto) o eligiendo país en el selector. → `ingresar`
- Autocompletar del SMS en el celular / pegar el código. → `ingresar` (FAQ)
- Correo con mayúsculas o espacios: se limpia solo. → `olvide-mi-numero`

## Errores y estados
- «Escribe tu celular» · «Ese número no parece válido» · «Un celular de Colombia tiene 10 dígitos; faltan 2». → `ingresar`
- «Ese número no está registrado en ninguna barbería.» → `codigo-incorrecto-o-vencido`, `crear-cuenta`
- «El código no es correcto o ya venció. Pide uno nuevo.» + «Te quedan N intentos antes de bloquear el acceso.» → `codigo-incorrecto-o-vencido`
- 4 fallos seguidos → «Bloqueamos el acceso por seguridad» → ticket. → `acceso-bloqueado`
- No llega el SMS (tarda, número mal escrito, sin señal, cambió de celular). → `no-me-llega-el-codigo`
- «No pudimos entrar con Google/Outlook»: cuenta no vinculada o ventana cerrada. → `entrar-con-google-o-outlook`
- «Ya hay una cuenta con ese correo. Inicia sesión.» al crear cuenta. → `crear-cuenta`
- Sin conexión o servicio caído: el mensaje general y reintentar. → `no-me-llega-el-codigo`, `problemas/no-puedo-entrar` (pendiente)
- Sesión vencida: te pedimos entrar de nuevo y te devolvemos a donde estabas. → `cerrar-sesion`

## Soporte
- Ticket desde el login: por bloqueo o porque no llegó el correo de recuperación. Número de ticket + respuesta en menos de 24 h hábiles. → `ticket-de-soporte`

## Salir y privacidad
- **Cerrar sesión** desde el menú de la cuenta (avatar arriba a la derecha). → `cerrar-sesion`
- Qué guardamos (celular, nombre, correo), por qué no decimos si un número existe, cómo borrar la cuenta. → `privacidad-y-datos`

## Todavía sin pantalla (no se documenta hasta que exista)
- Cambiar mi número desde dentro de la app.
- Entrar desde dos celulares a la vez / cerrar sesión en todos los dispositivos.
- Términos y política de privacidad como páginas propias (hoy el pie del shell los enlaza sin destino).
- Onboarding de diagnóstico tras el primer ingreso (spec en Notion, no construido).

## Dudas para el equipo
- ¿El bloqueo caduca solo con el tiempo o solo lo libera soporte? Hoy: solo soporte. El artículo lo dice así.
- ¿A qué correo escribe soporte y en qué horario? Hoy: «menos de 24 horas hábiles». Confirmar.
- Privacidad: el artículo es un resumen en dos frases; hace falta el enlace al documento legal oficial.
