const progData = 
[
    {
        "id": "prog1",
        "tema": 1,
        "title": "Ejercicio 1. Aplicación de Metodologías Ágiles para un Proyecto de Comercio Electrónico",
        "scenario": "Un equipo de desarrollo ha recibido la solicitud de crear una tienda en línea que permita a los usuarios navegar por productos, agregarlos al carrito y realizar compras seguras. El cliente requiere entregas frecuentes para evaluar el progreso y proponer mejoras. \nComo desarrollador: \nExplica por qué...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "Propuesta de Solución: \n\n1. Metodología Ágil: Scrum es ideal para este proyecto porque facilita entregas frecuentes y retroalimentación continua, permitiendo ajustes rápidos según las necesidades del cliente. \n\n2. Ceremonias: \n\nSprint Planning: Planificar las tareas para el sprint, priorizando funcionalidades como el carrito de compras. \nDaily Stand-Up: Sincronizar al equipo sobre el progreso y bloqueos. \nSprint Review: Demostrar el incremento funcional al cliente para recibir retroalimentación. \nRetrospectiva: Analizar qué funcionó y qué mejorar en futuros sprints. \n3. Roles: \n\nProduct Owner: Priorizar el backlog y representar los intereses del cliente. \nScrum Master: Facilitar el proceso ágil y resolver bloqueos. \nEquipo de Desarrollo: Implementar funcionalidades como el catálogo de productos y la pasarela de pagos. \nEste enfoque asegura que el producto evolucione constantemente según las expectativas del cliente. "
    },
    {
        "id": "prog2",
        "tema": 1,
        "title": "Ejercicio 2. Análisis de Modelos de Ciclo de Vida para un Proyecto de Gestión Escolar",
        "scenario": "Una institución educativa desea desarrollar un sistema de gestión escolar que permita gestionar estudiantes, cursos y calificaciones. El sistema debe garantizar la seguridad de los datos, ser accesible en navegadores web y cumplir con regulaciones locales de protección de datos. \nComo parte del equi...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "n espiral es adecuado, ya que el sistema necesita alta seguridad y cumplimiento normativo. Este modelo permite identificar y gestionar riesgos en cada iteración. \n\n2. Justificación: Ventajas: \n\nGestión de riesgos en cada iteración. \nFlexibilidad para incorporar cambios durante el desarrollo. \nLimitaciones: \nCostos más altos debido al análisis continuo. \nRequiere personal con experiencia en gestión de riesgos. \n3. Actividades: \n\nAnálisis: Identificar requisitos funcionales como la gestión de estudiantes y cursos, y no funcionales como la seguridad y escalabilidad. Realizar entrevistas con los administradores escolares. \nDiseño: Crear diagramas de clases para las entidades principales (estudiantes, cursos). Diseñar un mockup de la interfaz para la gestión de calificaciones. "
    },
    {
        "id": "prog3",
        "tema": 2,
        "title": "Ejercicio 3. Aplicación de Metodologías Ágiles y Principios de Desarrollo para un Proyecto de Software Educativo",
        "scenario": "Una institución educativa desea desarrollar una plataforma web que permita a los estudiantes acceder a recursos educativos, participar en foros de discusión y enviar tareas para revisión. Los requisitos iniciales incluyen: \nRegistro y autenticación de usuarios. \nGestión de contenido por parte de los...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "Propuesta de Solución \n\n1. Metodología Propuesta: \n\n \nPara este proyecto, la metodología Scrum es ideal. Justificación: \n\nPermite trabajar en incrementos funcionales (por ejemplo, desarrollar primero el registro de usuarios). \nFacilita adaptarse a los cambios en los requisitos mediante sprints cortos. \nPromueve la colaboración constante entre el cliente y el equipo. \n2. Buenas Prácticas y Herramientas: \n\nBuenas Prácticas:  \nAplicar PEP8 para asegurar un código limpio y consistente. \nSeguir principios como DRY (evitar duplicar código) y KISS (mantener el diseño simple). \nHerramientas:  \nLinters como pylint y flake8 para detectar errores de estilo y problemas de lógica. \nPruebas unitarias con pytest para validar cada funcionalidad desarrollada. \nSistemas de integración continua (GitHub Actions) para ejecutar validaciones automáticas al subir cambios al repositorio. \n3. Integración de Ceremonias Scrum: \n\nSprint Planning: Antes de cada sprint, definir objetivos claros, como implementar el módulo de foros o la subida de tareas. \nReuniones Diarias: Breves encuentros para sincronizar al equipo, identificar bloqueos y planificar el día. \nSprint Review: Mostrar al cliente las funcionalidades completadas y recopilar feedback para priorizar ajustes. \nRetrospectiva: Reflexionar sobre qué funcionó bien y qué debe mejorarse para aumentar la eficiencia del equipo en el siguiente sprint. \nEsta solución garantiza un desarrollo ágil, enfocado en la calidad, con entregas frecuentes y alineado con las expectativas del cliente. "
    },
    {
        "id": "prog4",
        "tema": 2,
        "title": "Ejercicio 4. Desarrollo de un Sistema de Información para la Gestión de Historias Clínicas Electrónicas",
        "scenario": "Una institución sanitaria requiere un sistema de información para gestionar las historias clínicas electrónicas (HCE) de sus pacientes. El sistema debe cumplir con estrictas regulaciones legales de protección de datos y seguridad, como la Ley de Protección de Datos Personales. Los requisitos inicial...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "Propuesta de Solución \n\n1. Justificación del Modelo Waterfall: \nEl modelo Waterfall es ideal para este proyecto debido a la necesidad de cumplir con regulaciones estrictas de protección de datos en el sector sanitario. Su enfoque secuencial y estructurado garantiza que cada fase se complete y verifique antes de avanzar a la siguiente, minimizando riesgos y errores. Además, la generación de documentación exhaustiva es crucial para auditar el cumplimiento normativo y facilitar el mantenimiento del sistema. \n\n2. Aplicación de las Etapas del Modelo Waterfall: \n\nRecolección de requisitos: Se identifican y documentan exhaustivamente los requisitos funcionales y no funcionales, incluyendo regulaciones específicas como el control de accesos y la encriptación de datos. \nDiseño del sistema:  \nDiseño conceptual: Definir la arquitectura del sistema, como bases de datos seguras y módulos de gestión de permisos. \nDiseño detallado: Especificar estructuras de datos, flujos de trabajo y esquemas de auditoría. \nImplementación: Los desarrolladores traducen el diseño a código funcional utilizando lenguajes seguros como Python y frameworks orientados a sistemas sanitarios. \nPruebas: Se realizan pruebas exhaustivas, como pruebas de seguridad, para garantizar que el sistema cumpla con las normativas y funcione correctamente. \nDespliegue: El sistema se implementa en el entorno de producción, acompañado de manuales técnicos y capacitación para el personal médico. \nMantenimiento: Se gestionan actualizaciones para cumplir con nuevas regulaciones y se corrigen errores detectados en producción. \n3. Beneficios del Enfoque Waterfall: \n\nEstabilidad: Ideal para proyectos con requisitos definidos y poco propensos a cambios. \nCumplimiento normativo: La documentación detallada facilita auditorías y pruebas regulatorias. \nGestión del riesgo: El enfoque secuencial asegura un desarrollo controlado, reduciendo errores críticos. \nEste enfoque asegura un producto confiable, seguro y alineado con las necesidades del sector regulado."
    },
    {
        "id": "prog5",
        "tema": 3,
        "title": "Ejercicio 5. Gestión de Requisitos para el Desarrollo de un Sistema de Reservas de Consultas Médicas",
        "scenario": "Una clínica desea desarrollar un sistema de reservas en línea que permita a los pacientes: \nRegistrar una cuenta y autenticarse. \nSeleccionar un médico y reservar una cita según la disponibilidad. \nRecibir notificaciones de confirmación y recordatorio por correo electrónico. \nConsultar su historial ...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "e por correo electrónico. \n\nNo funcionales:  \n\nProcesar hasta 500 solicitudes por segundo. \n\nTiempo de respuesta inferior a 2 segundos en redes estándar. \n\nDiseño accesible para usuarios con discapacidades (cumplimiento WCAG 2.1). \n\nTécnicos:  \n\nDesarrollar el sistema en Python con Django. \n\nBase de datos PostgreSQL para gestionar citas. \n\nLegales:  \n\nCumplir con el RGPD, implementando anonimización y encriptación de datos. \n\n2. Caso de Uso: Reservar una Cita \n\nActor: Paciente. \n\nFlujo Principal:  \n\nEl paciente inicia sesión. \n\nSelecciona un médico y una fecha disponible. \n\nConfirma la cita y recibe un correo de confirmación. \n\nExcepciones: Fecha no disponible o médico seleccionado sin agenda activa. \n\n3. Validación: \n\nRevisión de requisitos: Realizar talleres con los stakeholders para confirmar que los requisitos cumplen sus necesidades. \n\nPrototipado: Crear un prototipo interactivo que permita a los usuarios visualizar el proceso de reserva. \n\nPruebas automatizadas: Validar requisitos no funcionales con pruebas de carga para asegurar el rendimiento bajo alta concurrencia. "
    },
    {
        "id": "prog6",
        "tema": 3,
        "title": "Ejercicio 6. Sistema de Gestión de Pedidos para una Tienda Online",
        "scenario": "Una tienda online desea desarrollar un sistema que permita a los clientes: \nRegistrarse y acceder a su cuenta. \nNavegar por categorías de productos y añadirlos al carrito. \nRealizar pagos seguros mediante una pasarela de pago integrada. \nRecibir confirmación del pedido por correo electrónico. \nEl si...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "onales:  \n\nRegistro y autenticación de clientes. \n\nGestión de carritos de compra. \n\nProcesamiento de pagos seguros. \n\nNo funcionales:  \n\nTiempo de carga inferior a 2 segundos. \n\nProcesar 1000 pedidos simultáneos. \n\nTécnicos:  \n\nUso de Python con Django y una base de datos MySQL. \n\nLegales:  \n\nCumplir con el RGPD mediante encriptación de datos y consentimiento explícito. \n\nCaso de Uso: Realizar un Pedido \n\nActor: Cliente. \n\nFlujo Principal:  \n\nEl cliente añade productos al carrito. \n\nSelecciona una dirección de envío y el método de pago. \n\nRealiza el pago y recibe confirmación del pedido. \n\nExcepciones: Error en la pasarela de pago o dirección incompleta. \n\nValidación: \n\nPrototipado: Crear una simulación del flujo de compra para obtener retroalimentación de los stakeholders. \n\nPruebas de rendimiento: Evaluar el sistema con herramientas como Apache JMeter para validar la concurrencia. "
    },
    {
        "id": "prog7",
        "tema": 4,
        "title": "Ejercicio 7. Creación y Representación de un Modelo Conceptual para un Sistema de Gestión de Reservas en un Restaurante",
        "scenario": "Un restaurante desea implementar un sistema para gestionar las reservas de sus clientes. El sistema debe permitir:\nRegistrar clientes con su nombre, correo electrónico y número de teléfono.\nPermitir a los clientes realizar reservas especificando fecha, hora, número de personas y preferencia de mesa....",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "larReserva().\nMesa:\nAtributos: idMesa, numAsientos, disponible.\nMétodos: actualizarDisponibilidad().\nEmpleado:\nAtributos: idEmpleado, nombre, cargo.\nMétodos: asignarReserva().\n2. Diagrama UML:\n\n\n\n3. Implementación en Python:\n\n```python\nclass Cliente:\n\n    def __init__(self, idCliente, nombre, correo, telefono):\n\n        self.idCliente = idCliente\n\n        self.nombre = nombre\n\n        self.correo = correo\n\n        self.telefono = telefono\n\n \n\nclass Mesa:\n\n    def __init__(self, idMesa, numAsientos, disponible):\n\n        self.idMesa = idMesa\n\n        self.numAsientos = numAsientos\n\n        self.disponible = disponible\n\n \n\nclass Reserva:\n\n    def __init__(self, idReserva, fecha, hora, numPersonas, mesa, empleado):\n\n        self.idReserva = idReserva\n\n        self.fecha = fecha\n\n        self.hora = hora\n\n        self.numPersonas = numPersonas\n\n        self.mesa = mesa\n\n        self.empleado = empleado\n\n \n\nclass Empleado:\n\n    def __init__(self, idEmpleado, nombre, cargo):\n\n        self.idEmpleado = idEmpleado\n\n        self.nombre = nombre\n\n        self.cargo = cargo\n```"
    },
    {
        "id": "prog8",
        "tema": 4,
        "title": "Ejercicio 8. Modelo Conceptual para un Sistema de Gestión de Cursos Online",
        "scenario": "Una plataforma de educación en línea necesita un sistema para gestionar cursos, instructores y estudiantes. El sistema debe permitir:\nRegistrar estudiantes con su nombre, correo y cursos en los que están inscritos.\nPermitir a los instructores crear cursos especificando el título, descripción y durac...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "diante(), actualizarEstado().\nInstructor:\nAtributos: idInstructor, nombre, email.\nMétodos: crearCurso().\n2. Diagrama UML:\n\n\n\n3. Implementación en Python:\n\n```python\nclass Estudiante:\n\n    def __init__(self, idEstudiante, nombre, correo):\n\n        self.idEstudiante = idEstudiante\n\n        self.nombre = nombre\n\n        self.correo = correo\n\n \n\nclass Curso:\n\n    def __init__(self, idCurso, titulo, descripcion, duracion):\n\n        self.idCurso = idCurso\n\n        self.titulo = titulo\n\n        self.descripcion = descripcion\n\n        self.duracion = duracion\n\n \n\nclass Inscripcion:\n\n    def __init__(self, idInscripcion, fecha, estado, estudiante, curso):\n\n        self.idInscripcion = idInscripcion\n\n        self.fecha = fecha\n\n        self.estado = estado\n\n        self.estudiante = estudiante\n\n        self.curso = curso\n\n \n\nclass Instructor:\n\n    def __init__(self, idInstructor, nombre, email):\n\n        self.idInstructor = idInstructor\n\n        self.nombre = nombre\n\n        self.email = email\n```"
    },
    {
        "id": "prog9",
        "tema": 5,
        "title": "Ejercicio 9.",
        "scenario": "Un gimnasio necesita implementar un sistema para gestionar las reservas de clases grupales. El analista propone una estrategia basada en prototipos y mockups para garantizar que la interfaz gráfica (GUI) cumpla con las necesidades de los usuarios. El sistema debe incluir: \nUna vista de calendario do...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "royecto. \nUso de herramientas para mockups: \n\nEn Figma, el analista crea un diseño con tres secciones: el calendario en la parte superior, el formulario de registro en el centro y las reservas del usuario en la parte inferior. Utiliza un diseño limpio y colores que reflejen la identidad del gimnasio. \n\nImplementación en Python con Tkinter: \n\nEl calendario se representa mediante una tabla interactiva (puede usarse ttk.Treeview). \nLos datos del formulario se capturan con widgets como Entry y Button. \nLa lista de reservas se muestra en un Listbox, donde los usuarios pueden ver o cancelar sus clases. \nVentajas de prototipos y mockups: \n\nFacilitan la validación del diseño con los administradores del gimnasio. \nPermiten realizar ajustes tempranos basados en la retroalimentación antes de iniciar la implementación. "
    },
    {
        "id": "prog10",
        "tema": 5,
        "title": "Ejercicio 10.",
        "scenario": "Una tienda de electrónica desea desarrollar un portal para gestionar las ventas en línea. El analista propone un enfoque iterativo basado en prototipos interactivos para diseñar la interfaz. El portal debe incluir: \nUna página de productos con filtros (categoría, precio). \nUn carrito de compras dond...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "nteractivo donde los usuarios puedan simular la selección de productos, añadirlos al carrito y completar la compra. Los filtros se simulan con botones interactivos. \nImplementación en PyQt: \n\nLa lista de productos se implementa con un QTableWidget, permitiendo añadir funcionalidades avanzadas como filtros dinámicos. \nEl carrito de compras es un QListWidget con opciones para actualizar la cantidad o eliminar productos. \nEl formulario utiliza widgets como QLineEdit y QComboBox para capturar información de envío y pago. \nImpacto de los prototipos: \n\nPermiten validar el flujo de navegación y la funcionalidad antes del desarrollo técnico. \nAyudan a alinear expectativas entre los stakeholders y el equipo técnico. "
    },
    {
        "id": "prog11",
        "tema": 6,
        "title": "Ejercicio 11. Análisis de un Diagrama UML",
        "scenario": "A continuación, se presenta un diagrama de clases UML que representa una jerarquía de clases en un sistema de gestión de vehículos: \n¿Qué tipo de relación existe entre la clase Vehiculo y las clases Coche y Moto? Justifica tu respuesta. \nSi se quisiera implementar este modelo en Python, ¿qué palabra...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "```python\nmodelo = modelo \n\n        self.año = año \n\n \n\nclass Coche(Vehiculo): \n\n    def __init__(self, marca, modelo, año, num_puertas): \n\n        super().__init__(marca, modelo, año) \n\n        self.num_puertas = num_puertas \n\n \n\nclass Moto(Vehiculo): \n\n    def __init__(self, marca, modelo, año, cilindrada): \n\n        super().__init__(marca, modelo, año) \n\n        self.cilindrada = cilindrada \n\n```\nLa función super() permite llamar al constructor de la clase padre Vehiculo y reutilizar su lógica en Coche y Moto. \n\n \n\n3. ¿Cómo aplicarías el polimorfismo en este modelo para que cada tipo de vehículo muestre su propia información al llamar obtener_info()? \n\nEl polimorfismo permite que Coche y Moto sobrescriban el método obtener_info() de Vehiculo, personalizando su comportamiento en cada subclase. \n\nImplementación en Python: \n\n```python\nclass Vehiculo: \n\n    def obtener_info(self): \n\n        return f\"{self.marca} {self.modelo} ({self.año})\" \n\n \n\nclass Coche(Vehiculo): \n\n    def obtener_info(self): \n\n        return f\"{self.marca} {self.modelo} ({self.año}) - {self.num_puertas} puertas\" \n\n \n\nclass Moto(Vehiculo): \n\n    def obtener_info(self): \n\n        return f\"{self.marca} {self.modelo} ({self.año}) - {self.cilindrada}cc\" \n\n \n\n# Uso del polimorfismo \n\nvehiculo1 = Coche(\"Toyota\", \"Corolla\", 2022, 4) \n\nvehiculo2 = Moto(\"Honda\", \"CBR600RR\", 2021, 600) \n\n \n\n```\nprint(vehiculo1.obtener_info())  # Toyota Corolla (2022) - 4 puertas \n\nprint(vehiculo2.obtener_info())  # Honda CBR600RR (2021) - 600cc"
    },
    {
        "id": "prog12",
        "tema": 6,
        "title": "Ejercicio 12. Implementación de una Jerarquía con Herencia y Polimorfismo",
        "scenario": "Implementa en Python una jerarquía de clases basada en la siguiente estructura: \nClase base: Empleado con atributos nombre y salario, y un método calcular_pago(). \nClases derivadas:  \nGerente, cuyo salario incluye un bono del 20%. \nDesarrollador, cuyo salario incluye un bono del 10%. \nEscribe el cód...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "o(self): \n\n```python\n        return self.salario  # Método base que será sobrescrito en las subclases \n\n \n\nclass Gerente(Empleado): \n\n    def calcular_pago(self): \n\n        return self.salario * 1.2  # Bono del 20% \n\n \n\nclass Desarrollador(Empleado): \n\n    def calcular_pago(self): \n\n        return self.salario * 1.1  # Bono del 10% \n\n```\nAquí, Empleado es la superclase, mientras que Gerente y Desarrollador heredan de ella y sobrescriben el método calcular_pago() para aplicar los bonos correspondientes. \n\n \n\n2. Creación de instancias y cálculo del salario final \n\nAhora, creamos instancias de Gerente y Desarrollador con un salario base de 3000€ y verificamos que el cálculo del salario funcione correctamente. \n\n# Creación de objetos \n\n```python\nempleado1 = Gerente(\"Laura\", 3000) \n\nempleado2 = Desarrollador(\"Carlos\", 3000) \n\n \n\n# Impresión de salarios finales \n\nprint(f\"Gerente: Salario final = {empleado1.calcular_pago()}€\") \n\nprint(f\"Desarrollador: Salario final = {empleado2.calcular_pago()}€\") \n\nSalida esperada: \n\nGerente: Salario final = 3600€ \n\nDesarrollador: Salario final = 3300€ \n```"
    },
    {
        "id": "prog13",
        "tema": 7,
        "title": "Ejercicio 13. Implementación de MVC en una Aplicación Web con Flask",
        "scenario": "Un equipo de desarrollo está construyendo un sistema de gestión de tareas basado en el patrón Model-View-Controller (MVC). Se te ha asignado la tarea de diseñar la estructura del sistema en Flask, asegurando la separación de responsabilidades. \nObjetivo: \nImplementar una aplicación web sencilla que ...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "Esta implementación sigue la estructura MVC: \n\nModelo: Maneja los datos (Task). \n\nVista: Renderiza la lista de tareas (index.html). \n\nControlador: Gestiona la lógica de negocio (app.py). "
    },
    {
        "id": "prog14",
        "tema": 7,
        "title": "Ejercicio 14. Análisis y Diseño de una Aplicación Web con el Patrón MVC",
        "scenario": "Una empresa de gestión de eventos desea desarrollar una aplicación web que permita a los usuarios registrarse en eventos, ver la lista de eventos disponibles y gestionar sus inscripciones. \nEl equipo de desarrollo ha decidido implementar el patrón Model-View-Controller (MVC) para garantizar una estr...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "Para aplicar MVC en esta aplicación, la solución se estructura en los siguientes componentes: \n\nModelo (Model) - Gestión de Datos \n\nEl modelo se encarga de gestionar la información relacionada con los eventos y usuarios. Para este caso, se identifican dos entidades principales: \n\nUsuario (id_usuario, nombre, email, eventos_inscritos) \n\nEvento (id_evento, nombre_evento, fecha, capacidad, inscritos) \n\nCada usuario puede registrarse en múltiples eventos, por lo que se debe manejar una relación entre ambas entidades. \n\n \n\nVista (View) - Interfaz de Usuario \n\nLa vista es la interfaz con la que interactúan los usuarios. Debe contener las siguientes pantallas: \n\nPágina de inicio: Muestra los eventos disponibles. \n\nPágina de registro: Permite a los usuarios inscribirse en eventos. \n\nPanel de usuario: Lista los eventos en los que el usuario está inscrito. \n\nVista de administración: Permite a los organizadores gestionar los eventos. \n\nLos elementos visuales clave incluyen: \n\nFormularios para inscripción. \n\nListados de eventos con capacidad y número de inscritos. \n\nBotones de acción (Registrar, Cancelar inscripción). \n\n \n\n3. Controlador (Controller) - Lógica de Negocio \n\nEl controlador gestiona la comunicación entre la vista y el modelo, ejecutando la lógica de negocio. Las funciones clave incluyen: \n\nRegistrar usuario en un evento: \n\nValidar que el usuario no esté inscrito previamente. \nVerificar que el evento tenga plazas disponibles. \nGuardar la inscripción en la base de datos. \nMostrar eventos disponibles: \n\nObtener eventos desde el modelo y enviarlos a la vista. \n\nCancelar inscripción de un usuario: \n\nEliminar la relación entre el usuario y el evento en la base de datos. \n\n \n\n4. Beneficios de Usar MVC en Este Proyecto \n\nEl uso del patrón MVC en esta aplicación ofrece múltiples ventajas: \n\nSeparación de responsabilidades: \n\nLos datos (Model), la interfaz (View) y la lógica de negocio (Controller) están claramente diferenciados. \n\nMantenibilidad: \n\nSe pueden actualizar o agregar nuevas funcionalidades sin afectar toda la aplicación. \n\nEscalabilidad: \n\nSi la aplicación crece, se pueden integrar nuevas vistas o modelos sin modificar el controlador principal. \n\nReutilización: \n\nLos componentes del modelo pueden ser reutilizados en diferentes partes del sistema. "
    },
    {
        "id": "prog15",
        "tema": 8,
        "title": "Ejercicio 15. Diseño de una API REST para un Sistema de Reservas de Hoteles",
        "scenario": "Una cadena hotelera necesita desarrollar una API REST que permita a los clientes realizar reservas en sus hoteles de forma eficiente. El equipo de desarrollo ha decidido diseñar la API utilizando Flask o Django REST Framework (DRF) y gestionar los datos con una base de datos SQL. Además, la API debe...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "ción.\nReservas:\nPOST /reservas → Crear una reserva.\nGET /reservas/{id} → Consultar detalles de una reserva.\nDELETE /reservas/{id} → Cancelar una reserva.\nSe utilizará Flask con SQLAlchemy o Django ORM para gestionar la base de datos relacional.\n\n2. Modelo de Datos\n\nTabla clientes (id, nombre, email, teléfono).\nTabla habitaciones (id, tipo, precio, estado).\nTabla reservas (id, cliente_id, habitacion_id, fecha_checkin, fecha_checkout).\nLas relaciones uno a muchos entre clientes y reservas aseguran que cada cliente pueda realizar múltiples reservas.\n\n3. Análisis y Exportación de Datos con pandas\n\nLa API deberá incluir la opción de exportar datos en CSV y JSON para su análisis. Las métricas clave incluyen:\n\nTasa de ocupación → % de habitaciones reservadas en un período.\nIngresos por habitación → Promedio de ingresos generados por cada tipo de habitación.\nReservas canceladas → Análisis de cancelaciones por temporada.\nEstos datos podrán analizarse con pandas para generar reportes útiles en la toma de decisiones.\n\n \n\n4. Seguridad y Documentación\n\nAutenticación: Se implementará JWT (JSON Web Tokens) para restringir el acceso a usuarios autenticados.\nValidación de datos: Se usarán esquemas de validación para evitar registros incorrectos.\nDocumentación: Se generará con Swagger para facilitar el uso de la API por parte de desarrolladores externos.\nEl diseño propuesto permite una gestión eficiente de reservas hoteleras mediante una API REST estructurada, asegurando seguridad, escalabilidad y exportación de datos. Con esta arquitectura, la cadena hotelera podrá optimizar su servicio y tomar decisiones basadas en análisis de datos en tiempo real."
    },
    {
        "id": "prog16",
        "tema": 8,
        "title": "Ejercicio 16. Diseño de una API REST para un Sistema de Gestión de Inventarios en un Almacén",
        "scenario": "Una empresa de logística necesita una API REST para gestionar su inventario de productos en múltiples almacenes. El equipo de desarrollo ha decidido diseñar la API utilizando Flask o Django REST Framework (DRF) con una base de datos SQL. Además, la API deberá ofrecer opciones de exportación de datos...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "datos y documentación de la API.\nDiseño de la API y Endpoints\nProductos:\nGET /productos → Listar productos.\nPOST /productos → Agregar un nuevo producto.\nPUT /productos/{id} → Modificar información del producto.\nAlmacenes:\nGET /almacenes → Listar almacenes.\nPOST /almacenes → Agregar un nuevo almacén.\nStock:\nGET /stock/{id_almacen} → Consultar el stock de un almacén.\nPOST /stock → Agregar existencias de productos.\nSe utilizará Flask con SQLAlchemy o Django ORM para gestionar la base de datos relacional.\n\nModelo de Datos\nTabla productos (id, nombre, categoria, precio).\nTabla almacenes (id, ubicación, capacidad).\nTabla stock (id, producto_id, almacen_id, cantidad).\nExportación y Análisis de Datos con pandas\nExportar stock en CSV y JSON.\nMétricas a analizar:\nProductos con mayor y menor rotación.\nInventario promedio por almacén.\nSeguridad y Documentación\nAutenticación JWT.\nValidación de datos en endpoints.\nSwagger para documentar la API.\nEste diseño permitirá gestionar inventarios eficientemente y optimizar el análisis de stock."
    },
    {
        "id": "prog17",
        "tema": 9,
        "title": "Ejercicio 17. Diseño de una Arquitectura para la Gestión de APIs con un API Manager",
        "scenario": "Una empresa de comercio electrónico ha decidido modernizar su infraestructura tecnológica mediante la implementación de un API Manager. Actualmente, su plataforma cuenta con múltiples APIs que manejan operaciones clave, como:\nGestión de productos (altas, bajas y modificaciones en el catálogo).\nProce...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": " con Docker y Kubernetes, permitiendo despliegues dinámicos.\nSoporta autenticación mediante OAuth2, JWT y API Keys.\nOfrece monitorización avanzada con Prometheus y Grafana.\n2. Control de Seguridad\n\nPara proteger las APIs, se implementarán:\n\nAutenticación con OAuth2 y JWT: Los clientes deberán obtener un token antes de acceder a los recursos.\nAutorización basada en roles (RBAC): Los administradores podrán modificar datos, mientras que los clientes solo podrán leer información.\nRate Limiting: Se establecerá un límite de 100 solicitudes por minuto para evitar abusos.\n3. Gestión del Tráfico y Monitoreo\n\nPara garantizar la estabilidad de la API:\n\nSe implementará caché de respuestas en el API Gateway para reducir la carga en la base de datos.\nSe utilizarán balanceadores de carga para distribuir el tráfico entre múltiples servidores.\nSe activarán métricas de rendimiento en Kong con Prometheus y Grafana.\n4. Integración con Servicios Externos\n\nPagos con Stripe y PayPal: Se crearán conectores API dentro del API Manager para gestionar las transacciones de forma segura.\nNotificaciones con Twilio o Firebase: Se implementarán webhooks para notificar a los clientes sobre el estado de sus pedidos en tiempo real.\nLa implementación de Kong API Gateway mejorará la seguridad, escalabilidad y eficiencia del ecosistema de APIs de la empresa. Con medidas de autenticación, control de tráfico y conectores externos, se garantizará un servicio seguro y confiable para los clientes."
    },
    {
        "id": "prog18",
        "tema": 9,
        "title": "Ejercicio 18. Diseño de una Arquitectura de API Manager para un Sistema de Salud",
        "scenario": "Un hospital privado ha decidido modernizar su sistema de gestión médica mediante la implementación de un API Manager. Actualmente, el hospital maneja múltiples servicios en su plataforma digital, incluyendo:\nGestión de pacientes (registro, historial clínico, citas médicas).\nConexión con laboratorios...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": ": Se recomienda Apigee (Google Cloud) debido a su enfoque en seguridad y cumplimiento normativo, con soporte para OAuth2, autenticación basada en roles (RBAC) y registros de auditoría.\nControl de Seguridad\nAutenticación con OAuth2 y JWT para garantizar que solo usuarios autorizados accedan a los datos.\nCifrado de datos en tránsito con HTTPS y TLS 1.2+.\nReglas de acceso RBAC para definir qué usuarios pueden acceder a información específica.\nGestión del Tráfico y Monitoreo\nRate Limiting: Se limita el acceso a 50 solicitudes por minuto por usuario para evitar abusos.\nAlta disponibilidad y balanceo de carga: Se distribuye el tráfico entre múltiples servidores.\nMonitoreo en tiempo real con Grafana y Prometheus.\nIntegración con Terceros\nInteroperabilidad con laboratorios: Uso de FHIR (Fast Healthcare Interoperability Resources) para estandarizar el intercambio de datos médicos.\nConexión con aseguradoras: Implementación de webhooks y API Gateway para validar pagos y seguros en tiempo real.\nCon esta solución, el hospital garantiza un sistema seguro, escalable y compatible con regulaciones médicas, optimizando la experiencia de médicos y pacientes.\n\n"
    },
    {
        "id": "prog19",
        "tema": 10,
        "title": "Ejercicio 19. Estrategia de Testing para una Plataforma de Comercio Electrónico",
        "scenario": "Una empresa de comercio electrónico está desarrollando una nueva versión de su plataforma web, que incluye las siguientes funcionalidades clave:\nGestión de usuarios: Registro, inicio de sesión y recuperación de contraseñas.\nCatálogo de productos: Visualización, filtrado y búsqueda de productos.\nCarr...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "ompras y sistema de pago).\nPruebas de sistema: Evaluar la funcionalidad global de la plataforma (Ejemplo: flujo de compra completo).\nPruebas de aceptación: Realizar pruebas con usuarios finales para validar la experiencia del cliente.\n2. Planificación de Pruebas No Funcionales\n\nPruebas de rendimiento: Simulación de múltiples usuarios concurrentes para medir tiempos de respuesta con JMeter.\nPruebas de seguridad: Uso de OWASP ZAP para detectar vulnerabilidades como inyección SQL o fallos en autenticación.\nPruebas de usabilidad: Evaluación con usuarios para optimizar la experiencia de compra y navegación.\n3. Selección de Herramientas\n\nSelenium para pruebas automatizadas en la interfaz gráfica.\nPostman para pruebas en APIs REST.\nGitHub Actions para integración de pruebas en CI/CD y ejecución automática en cada commit.\n4. Proceso de Reporte y Seguimiento de Errores\n\nUso de JIRA o Trello para registrar defectos detectados.\nClasificación de errores por severidad y prioridad.\nRevisión periódica de métricas de calidad y tasa de resolución de errores.\nImplementar una estrategia de testing integral permitirá detectar errores antes del despliegue, optimizar el rendimiento y mejorar la seguridad de la plataforma. Con el uso de herramientas automatizadas y pruebas manuales, la empresa garantizará una experiencia de compra estable y segura para sus clientes."
    },
    {
        "id": "prog20",
        "tema": 10,
        "title": "Ejercicio 20. Estrategia de Testing para una Aplicación de Reservas de Hoteles",
        "scenario": "Una empresa de turismo ha desarrollado una aplicación web y móvil para gestionar reservas de hoteles, donde los usuarios pueden:\nBuscar hoteles según ubicación, disponibilidad y precio.\nReservar habitaciones y pagar en línea con tarjetas de crédito y PayPal.\nGestionar cancelaciones y modificaciones ...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "e pagos y la base de datos.\nPruebas de sistema: Verificar el flujo de búsqueda, reserva y confirmación de habitaciones.\nPruebas de aceptación: Incluir usuarios reales para probar la experiencia de reserva antes del lanzamiento.\n2. Pruebas No Funcionales\n\nPruebas de rendimiento: Medir tiempos de carga en horarios pico usando JMeter.\nPruebas de seguridad: Detectar vulnerabilidades con OWASP ZAP, asegurando que los pagos sean seguros.\nPruebas de compatibilidad: Verificar el funcionamiento en navegadores web (Chrome, Firefox, Safari) y dispositivos móviles (Android, iOS).\n3. Herramientas Seleccionadas\n\nSelenium para pruebas automatizadas en la interfaz web.\nPostman para validar las API REST de búsqueda y reservas.\nGitLab CI/CD para integrar pruebas automatizadas en el proceso de desarrollo.\n4. Proceso de Reporte de Errores\n\nUso de JIRA para registrar y clasificar errores según prioridad.\nAsignación de responsables para corregir defectos y realizar nuevas pruebas antes del despliegue.\nEste enfoque de testing permitirá detectar fallos antes del lanzamiento y garantizar que la aplicación de reservas funcione correctamente en todos los dispositivos y condiciones."
    },
    {
        "id": "prog21",
        "tema": 11,
        "title": "Ejercicio 21. Validación de una Aplicación Multiplataforma para Reservas de Viajes",
        "scenario": "Una agencia de viajes ha desarrollado una aplicación multiplataforma que permite a los usuarios:\nBuscar y reservar vuelos y hoteles desde dispositivos móviles (Android/iOS) y navegadores web.\nRealizar pagos en línea a través de tarjetas de crédito y plataformas como PayPal.\nRecibir notificaciones so...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "Pixel) y iOS (iPhone, iPad).\nPruebas de resolución y diseño responsivo: Utilizar Google Lighthouse para evaluar la adaptación del diseño en diferentes tamaños de pantalla.\n2. Uso de Emuladores y Pruebas en Dispositivos Reales\n\nEmuladores: Android Studio Emulator y Xcode Simulator para simular la aplicación en distintos modelos sin necesidad de hardware físico.\nDispositivos reales: Probar la aplicación en smartphones y tablets para detectar diferencias en rendimiento y comportamiento de los sensores (GPS, cámara).\n3. Evaluación de Rendimiento y Consumo de Recursos\n\nTiempo de carga y respuesta: Medir con herramientas como JMeter y Firebase Performance Monitoring.\nConsumo de batería y memoria: Evaluar en dispositivos reales con Android Profiler y Xcode Instruments.\n4. Pruebas Automatizadas con Appium y Selenium\n\nAutomatizar pruebas de UI en la web con Selenium para validar el flujo de reservas en diferentes navegadores.\nAutomatizar pruebas móviles con Appium para simular toques, deslizamientos y validación de formularios.\nEsta estrategia garantiza que la aplicación de reservas sea compatible, rápida y accesible en múltiples plataformas. Con pruebas en emuladores, dispositivos reales y herramientas de automatización, se mejora la experiencia del usuario y se previenen errores antes del lanzamiento."
    },
    {
        "id": "prog22",
        "tema": 11,
        "title": "Ejercicio 22. Validación Multiplataforma de una Aplicación de Comercio Electrónico",
        "scenario": "Una empresa de comercio electrónico ha desarrollado una aplicación web y móvil para que los usuarios puedan:\nExplorar y comprar productos desde cualquier dispositivo.\nRealizar pagos en línea con distintos métodos como PayPal, tarjetas de crédito y Google Pay.\nAcceder a su historial de compras y gest...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "os con Android e iOS para verificar la navegación y experiencia del usuario en pantallas táctiles.\nPruebas de accesibilidad: Uso de Google Lighthouse y WAVE para evaluar que la interfaz sea accesible para personas con discapacidades visuales.\n2. Evaluación de Rendimiento y Usabilidad\n\nTiempo de carga: Medición con JMeter y Google PageSpeed Insights.\nOptimización de recursos: Minimización de imágenes y reducción de consultas a la base de datos para mejorar el rendimiento.\nPruebas con usuarios reales: Evaluación de usabilidad mediante encuestas y pruebas A/B.\n3. Pruebas Automatizadas en Web y Móvil\n\nSelenium: Para validar el flujo de compra en la tienda online en distintos navegadores.\nAppium: Para simular interacciones de usuario en la aplicación móvil.\n4. Seguridad en Transacciones\n\nEncriptación de datos con HTTPS y TLS para proteger pagos en línea.\nPruebas de seguridad con OWASP ZAP para detectar vulnerabilidades en autenticación y almacenamiento de información.\nImplementar esta estrategia de validación permitirá garantizar la compatibilidad, rendimiento y seguridad de la tienda online, asegurando una experiencia de compra fluida y sin errores."
    },
    {
        "id": "prog23",
        "tema": 12,
        "title": "Ejercicio 23. Empaquetado y Despliegue de una Aplicación Web en la Nube",
        "scenario": "Una empresa de tecnología ha desarrollado una aplicación web en Python con Flask que permite a los usuarios administrar sus tareas diarias. La aplicación incluye autenticación de usuarios, almacenamiento en bases de datos y una API REST para gestionar las tareas.\nEl equipo de desarrollo necesita pre...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "ints={\"console_scripts\": [\"gestor_tareas=app:main\"]},\n\n)\n\nLuego, se crea un ejecutable con PyInstaller:\n\npyinstaller --onefile --name gestor_tareas app.py\n\nEsto genera un archivo ejecutable en la carpeta dist/.\n\n \n\n2. Configuración de Docker\n\nSe crea un Dockerfile para la aplicación:\n\nFROM python:3.9\n\nWORKDIR /app\n\nCOPY . /app\n\nRUN pip install -r requirements.txt\n\nEXPOSE 5000\n\nCMD [\"python\", \"app.py\"]\n\nPara construir y ejecutar la imagen Docker:\n\ndocker build -t gestor_tareas .\n\ndocker run -p 5000:5000 gestor_tareas\n\n \n\n3. Despliegue en la Nube (Heroku o AWS Elastic Beanstalk)\n\nPara desplegar en Heroku:\n\nheroku login\n\nheroku create gestor-tareas\n\ngit push heroku main\n\nheroku open\n\nPara desplegar en AWS Elastic Beanstalk:\n\neb init -p python-3.9 gestor-tareas\n\neb create gestor-tareas-env\n\n \n\n4. Gestión de Versiones y Releases\n\nSe utiliza GitFlow para gestionar ramas:\n\ngit flow init\n\ngit flow release start v1.0.0\n\ngit flow release finish v1.0.0\n\nLuego, se crea una release en GitHub Releases, adjuntando un changelog con las nuevas funcionalidades.\n\nSiguiendo estos pasos, la aplicación estará lista para ser instalada, desplegada y mantenida en producción con una estrategia clara de empaquetado, despliegue y versionado."
    },
    {
        "id": "prog24",
        "tema": 12,
        "title": "Ejercicio 24. Empaquetado y Despliegue de una API REST en AWS",
        "scenario": "Un equipo de desarrollo ha creado una API REST en Flask que permite a los usuarios gestionar sus notas personales. La API incluye autenticación con JWT, almacenamiento en PostgreSQL y endpoints para crear, editar y eliminar notas.\nEl equipo necesita empaquetar, desplegar y gestionar versiones de la ...",
        "questions": [
            "Descrito en el escenario."
        ],
        "answer": "s=[\"Flask\", \"Flask-JWT-Extended\", \"SQLAlchemy\"],\n\n    entry_points={\"console_scripts\": [\"api_notas=app:main\"]},\n\n)\n\nLuego, se genera el paquete:\n\npython setup.py sdist bdist_wheel\n\n \n\n2. Configuración de Docker\n\nSe crea un Dockerfile:\n\nFROM python:3.9\n\nWORKDIR /app\n\nCOPY . /app\n\nRUN pip install -r requirements.txt\n\nEXPOSE 5000\n\nCMD [\"python\", \"app.py\"]\n\nSe construye y ejecuta la imagen Docker:\n\ndocker build -t api_notas .\n\ndocker run -p 5000:5000 api_notas\n\n \n\n3. Despliegue en AWS Elastic Beanstalk\n\neb init -p python-3.9 api-notas\n\neb create api-notas-env\n\nPara configurar la base de datos en AWS RDS, se establece la conexión en config.py con las credenciales del servicio.\n\n \n\n4. Gestión de Versiones y Releases\n\nSe utiliza GitFlow para administrar versiones:\n\ngit flow release start v1.0.0\n\ngit flow release finish v1.0.0\n\nFinalmente, se publica en GitHub Releases con un changelog documentado.\n\n \n\nEsta estrategia garantiza que la API REST sea portátil, escalable y segura, facilitando su mantenimiento en AWS."
    }
]
