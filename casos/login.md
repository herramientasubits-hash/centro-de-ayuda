# Mapa de casos · Entrar (`/authenticate`)

Fuente: recorrido de https://dash.barberlytics.com/authenticate el 2026-09-25 con un navegador **sin sesión**
(perfil limpio de Playwright). No se escribió ningún celular, código ni correo real: solo se probó lo que falla
la validación del navegador, que no envía nada.

## Pantallas

| Ruta | Título | Qué tiene |
|---|---|---|
| `/authenticate` | «Empieza a Gestionar, Medir y maximizar tu barbería.» | **Teléfono\*** con banderita de país (por defecto Estados Unidos +1; también Colombia +57 y Venezuela +58), **Olvidaste tu número?**, **Iniciar Sesión**, «Al iniciar sesión estás aceptando nuestras» + enlace **Política de privacidad y términos de servicio**. Arriba a la derecha el globo **ES / EN**. Abajo a la derecha el botón de ayuda. |
| `/authenticate/verifyotp` | «Confirmar número» | «Hemos enviado un código a tu móvil para comprobar que eres tú», **Código\***, **Confirmar**, **Reenviar Código**, **← Atrás**. Se abre también escribiendo la ruta directo. |
| `/authenticate/forgot-number` | «Ingresa tu correo electrónico» | «Le enviaremos un correo electrónico a la dirección de correo electrónico registrada en barberlytics con su número de teléfono o la opción de cambiar el número de teléfono.» **Correo\***, **Enviar correo**, **No puedo recibir el correo electrónico** (lleva a `/authenticate/contact`), **← Atrás**. |
| `/authenticate/contact` | «Contactanos» | «Completa la siguiente información para que podamos ayudarte lo antes posible:» **Nombre completo\***, **Empresa\***, **Correo\***, **Teléfono\*** (con país), **Cuéntanos qué pasó?\***, **Enviar**, **← Atrás**. Se llega con el botón de ayuda. |
| `/terms/terms-and-conditions` | «Términos y Condiciones» | «Terms of Service», en inglés, «Updated: March 16, 2025». Cubre servicios, pagos, cuentas y su cierre, programas de lealtad, comunicaciones, uso y límites, privacidad y seguridad. |

## Validaciones vistas (todas del navegador, sin enviar nada)

- Teléfono vacío (solo el prefijo): «El campo es requerido».
- Teléfono con pocos dígitos: «El campo es muy corto».
- El campo Teléfono ignora las letras.
- Código vacío: «El campo es requerido».
- Correo vacío: «El campo es requerido». Correo sin formato: «El campo tiene un formato inválido».
- Contáctanos con todo vacío: «El campo es requerido» bajo cada campo.

## Lo que no hay en esta pantalla

Contraseña · botón «Crear cuenta» · entrada con Google, Outlook u otra cuenta.

## Pendiente de confirmar con un celular real (lo hace el usuario)

1. Escribir un número válido → **Iniciar Sesión** → ¿pasa a `/authenticate/verifyotp`? ¿El código llega por SMS,
   WhatsApp u otro medio? ¿Cuánto vale?
2. Código incorrecto: texto exacto del error y cuántos intentos hay antes de un bloqueo.
3. Número no registrado: texto exacto.
4. **Reenviar Código**: mensaje de confirmación y cualquier espera entre envíos.
5. **Enviar correo** con un correo registrado: mensaje de confirmación y contenido del correo.
6. **Enviar** en Contáctanos: mensaje de confirmación y tiempo de respuesta.
7. **← Atrás**: a dónde vuelve en cada pantalla.
8. Al entrar: a qué pantalla llega según el rol.
