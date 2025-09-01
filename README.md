# Quiz Educativo

Aplicación SPA para quizzes educativos con detección automática de temas y despliegue híbrido.

🌐 **Repositorio**: https://github.com/juanulisespv/SegundoCurso

## 🚀 Despliegue Rápido en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/juanulisespv/SegundoCurso)

### Pasos para Vercel:

1. **Ve a [vercel.com](https://vercel.com)** y conecta tu GitHub
2. **Importa** el repositorio: `juanulisespv/SegundoCurso`
3. **Configuración automática**: Vercel detectará la configuración
4. **Deploy**: ¡Tu app estará online en 30 segundos!

URL ejemplo: `https://segundo-curso.vercel.app/quiz-spa/`

## 📱 Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/juanulisespv/SegundoCurso.git
cd SegundoCurso

# Iniciar servidor local
python3 -m http.server 8000

# Abrir en navegador
open http://localhost:8000/quiz-spa/
```

## 📊 Contenido

- **HCI**: 11 temas, 220 preguntas
- **Programación**: 11 temas, 220 preguntas  
- **Total**: 22 temas, 440 preguntas

## ✨ Características

- ✅ **SPA** de 3 archivos únicamente
- ✅ **Auto-detección** de temas disponibles
- ✅ **Acceso directo** a cualquier tema (1 clic)
- ✅ **Colores específicos** por materia
- ✅ **Funciona offline** una vez cargado
- ✅ **Timer, feedback, retry** de preguntas falladas
- ✅ **Responsive** y modo oscuro
- ✅ **Híbrido**: Local JSON + Embedded para producción

## 🔄 Añadir Nuevos Temas

### Local (Desarrollo):
1. Añade `12.json` en la carpeta correspondiente
2. Refresca navegador → ¡Aparece automáticamente!

### Producción (Vercel):
1. Añade `12.json` en la carpeta correspondiente
2. Regenera datos embebidos:
   ```bash
   python3 scripts/generate_embedded_data.py
   ```
3. Commit y push:
   ```bash
   git add .
   git commit -m "Add tema 12"
   git push
   ```
4. Vercel redespliega automáticamente

## 📁 Estructura

```
quiz-spa/                    # ← Aplicación principal
├── index.html              # HTML único
├── styles.css              # Estilos consolidados  
├── app.js                  # Lógica principal
├── quiz-data-manager.js    # Gestor híbrido
└── quiz-data.js           # Datos embebidos (auto-generado)

contenidos/                  # ← Datos fuente
├── HCItests/hcijson/       # JSON HCI
└── programaciontests/      # JSON Programación
    └── programacionjson/

scripts/                     # ← Herramientas
└── generate_embedded_data.py # Generador de datos embebidos
```
