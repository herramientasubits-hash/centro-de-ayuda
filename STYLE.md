# Guía de redacción del centro de ayuda

Escribimos para la persona que tiene la barbería abierta, el celular en una mano y un cliente
esperando. Cada artículo responde una pregunta que esa persona se hace, en el orden en el que
la resolvería, y termina antes de aburrir.

## Voz

- **Tú**, nunca usted. «Escribe tu celular», no «Ingrese su número de teléfono».
- **Clara, directa y de alguien que conoce la barbería.** Es la voz de Barberlytics: segura,
  práctica, sin rodeos, sin sonar corporativa ni técnica.
- **Cero jerga de software.** No: autenticación, OTP, sesión, credenciales, endpoint,
  sincronizar, interfaz, módulo. Sí: entrar, código, tu cuenta, tu número, la pantalla.
- **Frases cortas.** Una idea por frase. Si una frase necesita dos comas, son dos frases.
- **Amable sin relleno.** Nada de «¡No te preocupes!», «simplemente», «fácilmente».
- **Vocabulario fijo**: celular (no teléfono ni móvil), código (no OTP ni clave), entrar
  (no iniciar sesión, salvo cuando citamos el botón), barbería (no negocio ni empresa),
  barbero (no estilista ni profesional), cita (no reserva ni booking), cliente, equipo,
  sucursal, silla, comisión, renta.

## Los botones se nombran tal cual

Lo que la persona toca se escribe **en negrita y exactamente como aparece en la pantalla**:
toca **Enviar código**, abre **¿Olvidaste tu número?**. Si el texto de la app cambia, cambia
el artículo. Nunca describas un botón por su color o su posición.

## Plantilla de un artículo

```md
---
id: seccion/articulo             # = ruta del archivo sin .md
title: Pregunta o acción en pocas palabras
description: Una frase que dice qué resuelve. Se ve en listas y en la búsqueda.
section: seccion
order: 10                        # orden dentro de la sección, de 10 en 10
roles: [owner, admin, recepcion, barbero]   # quién lo necesita; `todos` si no distingue
screens: [/login]                # rutas de la app donde aplica; acepta /configuracion/*
keywords: [palabras, por, las, que, se, busca]
related: [seccion/otro-articulo]
status: draft | review | published
updated: 2026-09-24
---

# El mismo título

**En resumen:** una o dos frases con la respuesta. Quien tiene prisa se va con esto.

## Pasos (o «Qué revisar primero»)
1. Toca **Botón**. Una frase por paso.
   ![Qué se ve en la pantalla](/assets/es/seccion/articulo/paso-1.png)
2. …

> [!TIP]
> Un atajo o un consejo. Solo si de verdad ahorra tiempo.

## Errores que puedes ver
| Lo que dice la pantalla | Qué significa | Qué hacer |
|---|---|---|
| «Texto exacto del error» | … | … |

## Preguntas frecuentes
**¿Pregunta tal cual la haría alguien?**
Respuesta en dos o tres frases.

## Relacionado
(lo genera la app a partir de `related`; no hace falta escribirlo)
```

### Qué lleva cada bloque

- **En resumen** siempre. Es lo que lee la IA primero y lo que responde a la mayoría.
- **Pasos** numerados solo cuando hay un orden. Una acción por paso; la captura debajo del paso
  que la muestra, no todas al final.
- **Errores** en tabla, con el texto de la pantalla entre comillas latinas «».
- **Preguntas frecuentes** con la pregunta en negrita, escrita como la escribiría un dueño.
- **Avisos**: `> [!NOTE]` para contexto, `> [!TIP]` para atajos, `> [!WARNING]` para algo
  que no se puede deshacer, `> [!IMPORTANT]` para lo que hay que saber antes de seguir.

## Capturas

- Ruta: `/assets/es/<seccion>/<articulo>/<nombre>.png`, con nombre que diga qué muestra
  (`paso-2-codigo.png`, no `img3.png`).
- Cada captura tiene su receta en `screenshots.json`; si añades una, añade la receta.
- El `alt` describe lo que se ve para quien no lo ve: «Pantalla de código con el botón
  Reenviar código», no «captura».
- Datos de prueba siempre. Nunca un cliente, un número o un correo reales.

## Roles

`owner` (dueño de toda la barbería), `admin` (administra su sucursal), `recepcion`,
`barbero` (comisión y renta juntos; si algo cambia entre los dos, se dice dentro del artículo).

## Lo que no hacemos

- No explicamos por qué el software está hecho así. Explicamos qué hacer.
- No prometemos fechas ni funciones que no existen. Si algo «viene pronto», no se documenta.
- No copiamos textos legales. Para privacidad y términos, enlazamos al documento oficial y
  contamos en dos frases qué significa para la persona.
