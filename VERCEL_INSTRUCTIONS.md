# 🎯 Quiz Educativo - Instrucciones de Despliegue

## ✅ **Código ya está en GitHub**: 
https://github.com/juanulisespv/SegundoCurso

---

## 🚀 **Opción 1: Vercel (Recomendado)**

### Pasos:
1. **Ve a [vercel.com](https://vercel.com)** 
2. **Login** con tu cuenta de GitHub
3. **"New Project"** → **"Import Git Repository"**
4. **Selecciona**: `juanulisespv/SegundoCurso`
5. **Deploy** → ¡Listo en 30 segundos!

### URL Result:
`https://segundo-curso.vercel.app/quiz-spa/`

---

## 📄 **Opción 2: GitHub Pages**

### Pasos:
1. Ve a tu repo: https://github.com/juanulisespv/SegundoCurso
2. **Settings** → **Pages** 
3. **Source**: Deploy from branch
4. **Branch**: `main`
5. **Folder**: `/ (root)`
6. **Save**

### URL Result:
`https://juanulisespv.github.io/SegundoCurso/quiz-spa/`

---

## 🔄 **¿Funcionará con JSON nuevos?**

### ✅ **SÍ, perfectamente:**

1. **Añades nuevo JSON** (ej: `12.json`) a cualquier carpeta
2. **Regeneras datos embebidos**:
   ```bash
   python3 scripts/generate_embedded_data.py
   git add .
   git commit -m "Add tema 12"
   git push
   ```
3. **Vercel/GitHub redespliega automáticamente**
4. **El nuevo tema aparece** en la app online

### 🎯 **Sin cambiar estructura JSON:**
- Los JSON mantienen su formato original
- La app detecta automáticamente nuevos archivos
- Compatible con desarrollo local y producción

---

## 🎮 **Demo en Vivo**

Una vez desplegado, podrás:
- ✅ **Acceder desde cualquier dispositivo**
- ✅ **Compartir con estudiantes** 
- ✅ **Funciona offline** una vez cargado
- ✅ **URL limpia** y profesional

---

## 📊 **Stats Actuales**
- **22 temas** (11 HCI + 11 Programación)
- **440 preguntas** total
- **3 archivos** de aplicación únicamente
- **Responsive** para móviles y tablets
