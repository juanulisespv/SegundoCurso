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
    }
];
