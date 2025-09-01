# Quiz Educativo

Aplicación SPA para quizzes educativos con detección automática de temas.

## Despliegue en Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/quiz-educativo)

## Desarrollo Local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/quiz-educativo.git
cd quiz-educativo

# Iniciar servidor local
python3 -m http.server 8000

# Abrir en navegador
open http://localhost:8000/quiz-spa/
```

## Estructura

```
quiz-spa/              # Aplicación principal
├── index.html         # HTML único
├── styles.css         # Estilos consolidados
├── app.js            # Lógica principal
├── quiz-data-manager.js # Gestor híbrido de datos
└── quiz-data.js      # Datos embebidos (auto-generado)
```

## Características

- ✅ Funciona offline una vez cargado
- ✅ Detección automática de temas 
- ✅ 22 temas, 440 preguntas
- ✅ Timer, feedback, repetir falladas
- ✅ Responsive y modo oscuro
