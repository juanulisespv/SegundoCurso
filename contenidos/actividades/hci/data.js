const hciData = [
    {
        id: "hci1",
        tema: 1,
        title: "Caso práctico 1",
        scenario: "Imagina que estás diseñando una aplicación de gestión de tareas para estudiantes universitarios.",
        questions: [
            "¿Cómo aplicarías los principios de diseño centrado en el usuario para asegurarte de que la aplicación sea intuitiva y útil?",
            "¿Cuáles son tres principios de diseño centrado en el usuario que utilizarías y cómo los aplicarías en este contexto?"
        ],
        answer: "Para diseñar una aplicación de gestión de tareas para estudiantes universitarios utilizando principios de UCD, podríamos aplicar los siguientes:\n\n**Empatía y Comprensión del Usuario:** Realizaríamos entrevistas y observaciones con estudiantes para entender sus rutinas, cómo gestionan actualmente sus tareas, y qué frustraciones o necesidades tienen.\n\n**Iteración y Prototipado:** Desarrollaríamos prototipos iniciales que podrían ser simples wireframes hasta evolucionar a mockups interactivos. Estos se someterían a pruebas de usuario.\n\n**Evaluación y Feedback Continuo:** Después de lanzar una versión beta de la aplicación, estableceríamos mecanismos para recibir feedback constante."
    },
    {
        id: "hci2",
        tema: 1,
        title: "Caso práctico 2",
        scenario: "Una empresa quiere rediseñar su sitio web de comercio electrónico para mejorar la experiencia de compra de los clientes.",
        questions: [
            "¿Cómo utilizarías los conceptos de affordances, visibilidad y mapeo natural para mejorar la usabilidad?",
            "¿Cómo podrías aplicar estos conceptos para que la experiencia de compra sea más intuitiva?"
        ],
        answer: "Para mejorar la experiencia de compra en el sitio web de comercio electrónico, aplicaríamos:\n\n**Affordances:** Los botones de 'Añadir al Carrito' deberían tener un diseño que claramente invite al clic.\n\n**Visibilidad:** Aseguraríamos que los elementos críticos como el carrito de compras y el menú de navegación sean fácilmente visibles.\n\n**Mapeo Natural:** El diseño del checkout debería reflejar el proceso de compra en el mundo real: carrito, revisión, envío, pago."
    },
    {
        id: "hci3",
        tema: 2,
        title: "Caso práctico 3",
        scenario: "Investiga el impacto del libro 'The Design of Everyday Things' de Donald Norman en el campo de la HCI.",
        questions: [
            "¿Cómo este libro influenció la manera en que los diseñadores piensan sobre las interfaces y la interacción usuario-computadora?",
            "¿Cuáles son tres conceptos clave introducidos por Norman que cambiaron la perspectiva del diseño de interfaces?"
        ],
        answer: "\"The Design of Everyday Things\" ha sido fundamental en la formación del pensamiento moderno sobre diseño de interfaces. Conceptos clave:\n\n**Affordances:** Los objetos deben comunicar claramente cómo pueden ser usados.\n\n**Modelos Mentales:** Alinear el diseño con los modelos mentales de los usuarios.\n\n**Errores en el Diseño:** El diseño debe anticipar y manejar los errores humanos."
    },
    {
        id: "hci4",
        tema: 2,
        title: "Caso práctico 4",
        scenario: "Explora la transición desde las interfaces de línea de comandos (CLI) a las interfaces gráficas de usuario (GUI) en los años 80 y 90.",
        questions: [
            "¿Qué factores contribuyeron a este cambio y cómo afectó la accesibilidad de la computación?",
            "¿Cuáles fueron las principales razones para el cambio de CLI a GUI y cómo esto democratizó el uso de la tecnología?"
        ],
        answer: "El cambio de CLI a GUI fue impulsado por:\n\n**Usabilidad y Acceso:** Las GUIs ofrecieron una forma más intuitiva de interactuar con computadoras mediante elementos visuales.\n\n**Avances en Hardware:** El aumento en capacidad de procesamiento permitió interfaces gráficas sin comprometer rendimiento.\n\n**Democratización de la Tecnología:** Hizo la computación accesible al público general, no solo a expertos."
    },
    {
        id: "hci5",
        tema: 3,
        title: "Caso práctico 5",
        scenario: "Estás diseñando un panel de control para operadores de tráfico aéreo.",
        questions: [
            "¿Cómo utilizarías la Ley de Fitts y la Ley de Hick para optimizar la interfaz?",
            "¿De qué manera estos principios pueden ayudar a reducir el tiempo de reacción y los errores?"
        ],
        answer: "Para un panel de control de tráfico aéreo:\n\n**Ley de Fitts:** Haríamos los botones de emergencia o acciones frecuentes más grandes y cercanos al cursor para reducir el tiempo de movimiento.\n\n**Ley de Hick:** Simplificaríamos las opciones disponibles en menús críticos para reducir el tiempo de decisión, evitando sobrecarga cognitiva en momentos de alta presión."
    },
    {
        id: "hci6",
        tema: 3,
        title: "Caso práctico 6",
        scenario: "Estás rediseñando una página web de noticias para mejorar su usabilidad.",
        questions: [
            "¿Cómo aplicarías conceptos como feedback, consistencia y visibilidad para mejorar la experiencia del usuario?",
            "¿De qué maneras puedes asegurar o mejorar estos aspectos?"
        ],
        answer: "Para mejorar la usabilidad:\n\n**Feedback:** Interacciones claras, como cambios de color al hacer clic o indicadores de carga.\n\n**Consistencia:** Mantener una paleta de colores y tipografía uniforme.\n\n**Visibilidad:** Estructura clara con títulos destacados y navegación siempre visible."
    },
    {
        id: "hci7",
        tema: 4,
        title: "Caso práctico 7",
        scenario: "Estás diseñando una aplicación para ayudar a las personas mayores a gestionar sus medicamentos. Utilizando Design Thinking.",
        questions: [
            "¿Cómo aplicarías las fases de Empatía, Definición, Ideación, Prototipado y Testeo?"
        ],
        answer: "**Empatía:** Entrevistas y observación de personas mayores.\n\n**Definición:** Definir el problema (e.g., recordar medicamentos).\n\n**Ideación:** Brainstorming de soluciones (recordatorios auditivos, texto grande).\n\n**Prototipado:** Desde bocetos hasta prototipos interactivos.\n\n**Testeo:** Probar con usuarios reales y ajustar basado en feedback."
    },
    {
        id: "hci8",
        tema: 4,
        title: "Caso práctico 8",
        scenario: "Una empresa de logística desea mejorar su sistema de seguimiento de paquetes. Aplicando UCD.",
        questions: [
            "¿Cómo estructurarías el análisis de requisitos, el diseño conceptual y la evaluación?"
        ],
        answer: "**Análisis de Requisitos:** Encuestas y análisis de tareas para entender necesidades.\n\n**Diseño Conceptual:** Bocetos y wireframes validados con usuarios.\n\n**Evaluación:** Prototipos interactivos probados con usuarios reales para medir facilidad de uso."
    },
    {
        id: "hci9",
        tema: 5,
        title: "Caso práctico 9",
        scenario: "Estás encargado de diseñar una nueva aplicación de fitness.",
        questions: [
            "Describe cómo utilizarías diferentes técnicas de prototipado para desarrollar esta aplicación.",
            "¿Qué técnicas usarías y en qué etapa?"
        ],
        answer: "**Bocetos (Sketching):** En la fase de ideación para explorar layouts.\n\n**Wireframes:** Para estructura y flujo de navegación.\n\n**Mockups:** Alta fidelidad para diseño visual.\n\n**Prototipos Interactivos:** Para pruebas de usabilidad y validación de interacciones."
    },
    {
        id: "hci10",
        tema: 5,
        title: "Caso práctico 10",
        scenario: "Tu equipo está trabajando en una plataforma de e-learning accesible en múltiples dispositivos.",
        questions: [
            "¿Cómo abordarías el prototipado para asegurar una experiencia uniforme en desktops, tablets y smartphones?"
        ],
        answer: "**Herramientas de Diseño Responsivo:** Usar Figma para crear diseños que se adaptan.\n\n**Prototipos Interactivos:** Probar interacciones en diferentes resoluciones con Adobe XD.\n\n**Pruebas con Emuladores:** Verificar funcionalidad en distintos dispositivos."
    },
    {
        id: "hci11",
        tema: 6,
        title: "Caso práctico 11",
        scenario: "Estás desarrollando una aplicación educativa para enseñar idiomas.",
        questions: [
            "¿Cómo integrarías gráficos, audio y video para maximizar la efectividad del aprendizaje?"
        ],
        answer: "**Gráficos:** Visualización de vocabulario e interacciones táctiles.\n\n**Audio:** Pronunciación nativa y conversaciones simuladas.\n\n**Video:** Lecciones en contexto real y feedback visual de instructores."
    },
    {
        id: "hci12",
        tema: 6,
        title: "Caso práctico 12",
        scenario: "Imagina que estás diseñando un sitio web para una agencia de viajes.",
        questions: [
            "¿Cómo utilizarías elementos multimedia para captar la atención?"
        ],
        answer: "**Gráficos:** Fotografías inmersivas y mapas interactivos.\n\n**Audio:** Ambientes sonoros y narración de historias.\n\n**Video:** Clips de destinos y testimonios de viajeros."
    },
    {
        id: "hci13",
        tema: 7,
        title: "Caso Práctico 13",
        scenario: "Estás rediseñando el sitio web de una biblioteca pública con navegación confusa.",
        questions: [
            "¿Cómo estructurarías la navegación para facilitar el acceso a la información más relevante?"
        ],
        answer: "**Menú Principal Simplificado:** Etiquetas claras como 'Horarios', 'Eventos'.\n\n**Submenús Organizados:** Categorizar recursos y eventos.\n\n**Migas de Pan:** Para mostrar ruta de navegación.\n\n**Búsqueda Interna Mejorada:** Autocompletado y filtros."
    },
    {
        id: "hci14",
        tema: 7,
        title: "Caso Práctico 14",
        scenario: "Un sitio de comercio electrónico necesita una revisión de su estructura de navegación.",
        questions: [
            "¿Qué estrategias de navegación implementarías para mejorar la experiencia de compra?"
        ],
        answer: "**Categorías Claras y Jerárquicas:** Rediseñar categorías principales y subcategorías.\n\n**Filtros de Navegación:** Permitir refinar por precio, marca, etc.\n\n**Navegación Lateral:** Para filtros visibles.\n\n**Búsqueda Inteligente:** Sugerencias basadas en historial."
    },
    {
        id: "hci15",
        tema: 8,
        title: "Caso Práctico 15",
        scenario: "Estás desarrollando un sitio web de noticias accesible en móviles y desktops.",
        questions: [
            "¿Cuáles son las prácticas clave del diseño responsivo que implementarías?"
        ],
        answer: "**Grillas Flexibles:** CSS Grid y Flexbox para ajuste fluido.\n\n**Imágenes Adaptativas:** Uso de atributo srcset.\n\n**Media Queries:** Ajustar diseño según ancho de pantalla.\n\n**Diseño Móvil Primero:** Priorizar experiencia móvil."
    },
    {
        id: "hci16",
        tema: 8,
        title: "Caso Práctico 16",
        scenario: "Tu equipo está desarrollando una aplicación web para gestionar proyectos utilizando metodologías ágiles.",
        questions: [
            "¿Qué metodologías ágiles aplicarías para el diseño y desarrollo?"
        ],
        answer: "**Iteración Rápida:** Sprints de diseño y desarrollo.\n\n**Colaboración y Feedback:** Sesiones regulares de revisión.\n\n**Prototipado Rápido:** Validar conceptos rápidamente.\n\n**Evaluación Continua:** Pruebas de usabilidad en cada sprint."
    },
    {
        id: "hci17",
        tema: 9,
        title: "Caso Práctico 17",
        scenario: "Estás desarrollando un sitio web para una pequeña empresa de productos orgánicos.",
        questions: [
            "¿Qué características de HTML5, CSS3 y JavaScript usarías para crear una interfaz efectiva?"
        ],
        answer: "**HTML5:** Elementos semánticos y formularios mejorados.\n\n**CSS3:** Sombras, gradientes, animaciones, Flexbox y Grid.\n\n**JavaScript:** Funcionalidades interactivas (carruseles, filtros) y AJAX."
    },
    {
        id: "hci18",
        tema: 9,
        title: "Caso Práctico 18",
        scenario: "Tu equipo está desarrollando una aplicación móvil de fitness para Android e iOS.",
        questions: [
            "¿Qué frameworks y herramientas elegirías para desarrollar esta aplicación?"
        ],
        answer: "**React Native:** Para desarrollo multiplataforma eficiente.\n\n**Expo:** Para simplificar configuración.\n\n**Librerías y APIs:** Específicas para fitness y sincronización en la nube.\n\n**Pruebas:** En emuladores y dispositivos reales."
    },
    {
        id: "hci19",
        tema: 10,
        title: "Caso Práctico 19",
        scenario: "Estás desarrollando una aplicación de notas para Android e iOS.",
        questions: [
            "¿Cuáles serían las diferencias clave en el diseño de la interfaz para Android vs. iOS?"
        ],
        answer: "**Android (Material Design):** Sombras, elevaciones, FAB, barra de navegación inferior.\n\n**iOS (HIG):** Diseño plano, minimalista, tab bar, gestos estándar."
    },
    {
        id: "hci20",
        tema: 10,
        title: "Caso Práctico 20",
        scenario: "Necesitas implementar una nueva función de recordatorios en la aplicación de notas.",
        questions: [
            "¿Cómo implementarías los recordatorios en la aplicación de notas para Android e iOS?"
        ],
        answer: "**Android:** AlarmManager/WorkManager, diálogos Material, notificaciones nativas.\n\n**iOS:** UserNotifications, UIDatePicker, integración con Centro de Notificaciones."
    },
    {
        id: "hci21",
        tema: 11,
        title: "Caso Práctico 21",
        scenario: "Una empresa de turismo quiere ofrecer una experiencia de realidad aumentada (AR).",
        questions: [
            "¿Qué tecnologías y métodos utilizarías para crear una experiencia de AR eficaz?"
        ],
        answer: "**Tecnologías:** ARKit (iOS), ARCore (Android), Unity/Unreal.\n\n**Métodos:** Reconocimiento de imagen, visualización de modelos 3D inmersivos."
    },
    {
        id: "hci22",
        tema: 11,
        title: "Caso Práctico 22",
        scenario: "Diseñar una experiencia educativa de VR sobre el cuerpo humano.",
        questions: [
            "¿Qué consideraciones y tecnologías emplearías?"
        ],
        answer: "**Tecnologías:** Oculus/HTC Vive, Unity/Unreal.\n\n**Consideraciones:** Modelos anatómicos precisos, interacción inmersiva, narración educativa, confort del usuario."
    },
    {
        id: "hci23",
        tema: 12,
        title: "Caso Práctico 23",
        scenario: "Rediseñar un sitio web de noticias para mejorar su accesibilidad según WCAG 2.1.",
        questions: [
            "¿Qué pasos tomarías para hacer que el sitio sea más accesible?"
        ],
        answer: "**Contraste:** Ajustar colores (ratio 4.5:1).\n\n**Teclado:** Navegación completa por teclado.\n\n**Alt Text:** Para imágenes.\n\n**ARIA:** Para componentes dinámicos."
    },
    {
        id: "hci24",
        tema: 12,
        title: "Caso Práctico 24",
        scenario: "Una aplicación móvil de salud necesita ser accesible para discapacidades visuales y auditivas.",
        questions: [
            "¿Qué estrategias de diseño y desarrollo usarías?"
        ],
        answer: "**Visual:** Alto contraste, soporte para lectores de pantalla.\n\n**Auditiva:** Transcripciones y alertas visuales/vibración.\n\n**Interacción:** Botones grandes, soporte gestual."
    }
];
