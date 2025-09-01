// Quiz Data - Configuración para diferentes entornos
// Este archivo maneja tanto datos embebidos como carga dinámica de JSON

// Detectar si estamos en un entorno estático (GitHub Pages, Vercel, etc.)
const isStaticEnvironment = () => {
  return window.location.protocol === 'https:' || 
         window.location.hostname.includes('vercel.app') ||
         window.location.hostname.includes('github.io') ||
         window.location.hostname.includes('netlify.app');
};

// Datos embebidos (se generarán automáticamente para producción)
let EMBEDDED_DATA = null;

// Función para cargar datos embebidos
const loadEmbeddedData = () => {
  // Si hay datos embebidos disponibles, usarlos
  if (window.QUIZ_DATA) {
    EMBEDDED_DATA = window.QUIZ_DATA;
    return true;
  }
  return false;
};

// Función para obtener los temas disponibles según el entorno
const getAvailableThemes = (subjectKey, basePath) => {
  if (isStaticEnvironment() && EMBEDDED_DATA) {
    // Entorno estático: usar datos embebidos
    const subjectData = EMBEDDED_DATA[subjectKey] || {};
    return Object.keys(subjectData)
      .map(themeId => ({
        id: parseInt(themeId),
        name: `Tema ${themeId}`,
        jsonPath: null, // No se necesita en entorno estático
        data: subjectData[themeId] // Datos ya cargados
      }))
      .sort((a, b) => a.id - b.id);
  } else {
    // Entorno local: detección dinámica (mantener lógica actual)
    return null; // Indicar que se debe usar la detección dinámica
  }
};

// Función para cargar datos de quiz según el entorno
const loadQuizData = async (subjectKey, themeId, basePath) => {
  if (isStaticEnvironment() && EMBEDDED_DATA) {
    // Entorno estático: obtener de datos embebidos
    const data = EMBEDDED_DATA[subjectKey]?.[themeId];
    if (data) {
      return data;
    } else {
      throw new Error(`No se encontraron datos para ${subjectKey} tema ${themeId}`);
    }
  } else {
    // Entorno local: cargar JSON via fetch
    const jsonPath = `${basePath}${themeId}.json`;
    const response = await fetch(jsonPath);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  }
};

// Exportar funciones
window.QuizDataManager = {
  isStaticEnvironment,
  loadEmbeddedData,
  getAvailableThemes,
  loadQuizData
};
