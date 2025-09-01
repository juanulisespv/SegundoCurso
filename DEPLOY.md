# 🚀 Guía de Despliegue en Vercel

## Respuesta a tu pregunta:

**NO es necesario cambiar la estructura de los JSON** ✅

La aplicación funciona de forma **híbrida**:

### 🏠 **Desarrollo Local**
- Usa los archivos JSON originales via fetch
- Detección automática de nuevos archivos
- Si añades `12.json`, aparecerá automáticamente

### 🌐 **Producción (Vercel/GitHub Pages)**  
- Usa datos embebidos generados automáticamente
- Los JSON se "compilan" en JavaScript
- Funciona offline una vez cargado

## 📋 **Pasos para Subir a Vercel**

### 1. Preparar Repositorio
```bash
cd /Users/uli/Documents/github/euniv/2

# Inicializar git si no existe
git init
git add .
git commit -m "Initial commit: Quiz SPA with auto-detection"

# Subir a GitHub
git remote add origin https://github.com/tu-usuario/quiz-educativo.git
git push -u origin main
```

### 2. Despliegue en Vercel
```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Desplegar
vercel

# Seguir las instrucciones:
# - Set up and deploy? Y
# - Which scope? tu-usuario
# - Link to existing project? N  
# - Project name? quiz-educativo
# - Directory? ./
# - Override settings? N
```

### 3. ¡Listo!
Tu app estará disponible en: `https://quiz-educativo.vercel.app`

## 🔄 **Actualizar con Nuevos Temas**

### Localmente (Desarrollo)
1. Añade nuevo JSON: `contenidos/.../12.json`
2. Refresca navegador
3. ¡El tema aparece automáticamente!

### En Producción (Vercel)
1. Añade nuevo JSON: `contenidos/.../12.json`
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

## 🎯 **Ventajas del Sistema Híbrido**

- ✅ **Flexibilidad**: Funciona local y en producción
- ✅ **Sin cambios JSON**: Mantiene estructura original
- ✅ **Auto-detección**: Nuevos temas se detectan automáticamente
- ✅ **Performance**: Datos embebidos = carga instantánea en producción
- ✅ **Offline**: Funciona sin internet una vez cargado

## 🔧 **Configuración Automática**

La app detecta automáticamente el entorno:
- **Local**: `http://localhost` → Usa JSON files
- **Vercel**: `*.vercel.app` → Usa datos embebidos  
- **GitHub**: `*.github.io` → Usa datos embebidos

¡No necesitas cambiar nada manualmente!
