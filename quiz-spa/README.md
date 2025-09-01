# Quiz SPA - Single Page Application

Una aplicación de quiz consolidada que genera todo el HTML dinámicamente desde JavaScript, con detección automática de temas disponibles y acceso directo desde el índice principal.

## Estructura

```
quiz-spa/
├── index.html     # Archivo HTML único
├── styles.css     # Estilos consolidados con colores por materia
├── app.js         # Lógica completa de la aplicación con auto-detección
└── README.md      # Este archivo
```

## Características Principales

- **SPA (Single Page Application)**: Todo el contenido se genera dinámicamente
- **3 archivos únicamente**: HTML base, CSS y JavaScript
- **Detección automática**: Descubre temas disponibles sin configuración manual
- **Acceso directo**: Clic directo a cualquier tema desde el índice (sin pasos intermedios)
- **Colores por materia**: HCI en morado, Programación en verde
- **Navegación fluida**: Sin recargas de página
- **Todas las funcionalidades**: Timer, feedback, repetir falladas, responsive, tema claro/oscuro

## Ventajas vs. Versión Modular

### Versión Anterior (quiz-app/)
- 70 archivos total (22 HTML + 22 CSS + 22 JS + 4 base)
- Configuración manual de temas
- Navegación en 3 pasos: Home → Materia → Tema
- Duplicación masiva de código

### Versión SPA (quiz-spa/)
- **3 archivos únicamente**
- **Detección automática** de temas disponibles
- **Acceso directo** a temas (1 clic)
- HTML generado dinámicamente
- CSS consolidado con variables por materia
- JavaScript unificado sin duplicación

## Funcionalidades

### 🎯 **Quiz Core**
- 20 preguntas por tema (detectadas automáticamente)
- Presentación una por una con auto-avance (3 segundos)
- Timer automático y feedback visual inmediato
- Repetir preguntas falladas al final
- Contador de progreso y resultados detallados

### 🔍 **Auto-Detección**
- Escanea automáticamente carpetas JSON al inicializar
- Detecta temas del 1 al 15 en paralelo
- Maneja gaps en numeración (ej: si falta tema 3)
- Botón "Actualizar Temas" para re-escanear sin recargar
- Mensajes de error si no encuentra archivos

### 🎨 **Diseño**
- **HCI**: Tema morado (#6f42c1) con iconos de display
- **Programación**: Tema verde (#28a745) con iconos de código
- Headers con gradientes y tarjetas diferenciadas
- Grid responsive adaptable a móviles y tablets
- Modo claro/oscuro con toggle

## Uso

### 1. Iniciar Servidor HTTP
```bash
cd /Users/uli/Documents/github/euniv/2
python3 -m http.server 8000
```

### 2. Abrir en Navegador
```
http://localhost:8000/quiz-spa/
```

### 3. Navegación
1. **Página Principal**: Ve todas las materias y temas disponibles
2. **Clic Directo**: Haz clic en cualquier "Tema X" para empezar inmediatamente
3. **Quiz**: Responde preguntas con feedback automático
4. **Resultados**: Ve puntuación, tiempo, repite falladas si quieres

## Estructura de Datos

### Carpetas JSON Escaneadas
```
contenidos/
├── HCItests/hcijson/           # Archivos 1.json, 2.json, ..., N.json
└── programaciontests/
    └── programacionjson/       # Archivos 1.json, 2.json, ..., N.json
```

### Formato JSON Esperado
```json
{
  "subject": "hci",
  "theme": 1,
  "source": "...",
  "count": 20,
  "questions": [
    {
      "number": 1,
      "question": "...",
      "options": [
        {"key": "A", "text": "..."},
        {"key": "B", "text": "..."},
        {"key": "C", "text": "..."},
        {"key": "D", "text": "..."}
      ],
      "answer": "A"
    }
  ]
}
```

## Añadir Nuevos Temas

### Método 1: Automático
1. Agrega un nuevo archivo JSON (ej: `12.json`) en la carpeta correspondiente
2. Ve a la aplicación y haz clic en "Actualizar Temas"
3. El nuevo tema aparecerá automáticamente

### Método 2: Recarga
1. Agrega el archivo JSON
2. Recarga la página del navegador
3. La detección automática encontrará el nuevo tema

## Extensibilidad

### Añadir Nueva Materia
Para añadir una materia completamente nueva (ej: "Matemáticas"):

1. Crea carpeta: `contenidos/matematicas/json/`
2. Añade archivos JSON con el formato estándar
3. Modifica `app.js` añadiendo la nueva materia al objeto `subjects`
4. La auto-detección funcionará inmediatamente

### Personalizar Colores
Modifica las variables CSS en `styles.css`:
```css
.subject-nuevamateria {
  --subject-color: #tu-color-aqui;
}
```

## Ventajas Técnicas

- **Menos mantenimiento**: Solo 3 archivos vs 70
- **Escalabilidad**: Se adapta automáticamente al contenido
- **Performance**: Detección en paralelo, menos archivos HTTP
- **UX mejorada**: Acceso directo, colores distintivos, feedback inmediato
- **Robustez**: Manejo de errores, validación automática
