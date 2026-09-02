EC1 A1: Configuración del entorno frontend y creación del primer proyecto # Estructura del proyecto
ana cristina rascon ochoa 

Este proyecto es una base inicial para trabajar con programación backend usando Node.js, PNPM y módulos ECMAScript.

## Árbol de directorios

```text
Backend-frameworks/
├── .editorconfig
├── .gitignore
├── .vscode/
├── package.json
├── pnpm-lock.yaml
├── README.md
├── ESTRUCTURA_PROYECTO.md
└── src/
    └── index.js
```

## Descripción de los archivos y directorios

### `.editorconfig`

Define reglas comunes de formato para que los archivos mantengan una configuración consistente entre distintos editores.

### `.gitignore`

Indica qué archivos y directorios no deben incluirse en el control de versiones de Git, como dependencias instaladas o archivos generados.

### `.vscode/`

Contiene configuraciones específicas para Visual Studio Code.

### `package.json`

Es el archivo principal de configuración del proyecto Node.js. Contiene:

- El nombre y la versión del proyecto.
- La configuración para usar módulos ECMAScript mediante `"type": "module"`.
- Los comandos disponibles en la sección `scripts`.
- La dependencia de desarrollo `prettier`.
- La configuración recomendada del gestor de paquetes PNPM.

### `pnpm-lock.yaml`

Registra las versiones exactas de las dependencias instaladas. Permite reproducir la misma instalación en otros entornos usando PNPM.

### `README.md`

Presenta una introducción breve al proyecto, sus requisitos y los comandos básicos para ejecutarlo.

### `src/`

Es el directorio destinado al código fuente de la aplicación.

#### `src/index.js`

Es el punto de entrada de la aplicación. Actualmente:

1. Define los datos básicos del curso y del entorno.
2. Genera un resumen mediante la función `createSummary`.
3. Muestra el resumen en la consola.
4. Imprime el objeto completo con `console.table`.

## Scripts disponibles

Desde la raíz del proyecto se pueden ejecutar los siguientes comandos:

```bash
pnpm start
```

Inicia la aplicación ejecutando `src/index.js` con Node.js.

```bash
pnpm dev
```

Inicia la aplicación en modo desarrollo y reinicia el proceso cuando se detectan cambios en los archivos, usando `node --watch`.

```bash
pnpm format
```

Formatea los archivos del proyecto con Prettier.

```bash
pnpm format:check
```

Comprueba que los archivos cumplen el formato configurado, sin modificarlos.

## Flujo básico de ejecución

```text
pnpm start
    |
    v
package.json -> script "start"
    |
    v
node src/index.js
    |
    v
Salida en la consola
```

## Requisitos

- Node.js
- PNPM
- Visual Studio Code
- Git

Las dependencias se instalan desde la raíz del proyecto con:

```bash
pnpm install
```
