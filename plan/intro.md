# Plan para documentar Barberlytics completo

Objetivo: que **cada pantalla, cada elemento y cada caso de uso** de la aplicación en producción
(`dash.barberlytics.com`) tenga su artículo, escrito con el lenguaje de quien tiene una barbería, con capturas
reproducibles y en un formato que una IA pueda usar como base de conocimiento.

Este archivo se **genera** con `npm run plan` desde `plan/plan.json` (el inventario) cruzado con lo que ya existe
en `content/es`. No se edita a mano: se edita el inventario.

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
