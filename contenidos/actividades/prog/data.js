const progData = [
    {
        "id": "prog1",
        "tema": 1,
        "title": "Ejercicio 1. Aplicación de Metodologías Ágiles para un Proyecto de Comercio Electrónico",
        "scenario": `## Contexto
Un equipo de desarrollo ha recibido la solicitud de crear una tienda en línea que permita a los usuarios navegar por productos, agregarlos al carrito y realizar compras seguras. El cliente requiere entregas frecuentes para evaluar el progreso y proponer mejoras. 

## Tareas
Como desarrollador: 
- Explica por qué una metodología ágil es adecuada para este proyecto. 
- Identifica las ceremonias principales de Scrum que implementarías y describe sus objetivos. 
- Enumera los roles clave en el equipo y sus responsabilidades.`,
        "questions": [
            "Ver solución completa."
        ],
        "answer": `### 1. Metodología Ágil
Scrum es ideal para este proyecto porque facilita entregas frecuentes y retroalimentación continua, permitiendo ajustes rápidos según las necesidades del cliente. 

### 2. Ceremonias
- **Sprint Planning**: Planificar las tareas para el sprint, priorizando funcionalidades como el carrito de compras. 
- **Daily Stand-Up**: Sincronizar al equipo sobre el progreso y bloqueos. 
- **Sprint Review**: Demostrar el incremento funcional al cliente para recibir retroalimentación. 
- **Retrospectiva**: Analizar qué funcionó y qué mejorar en futuros sprints. 

### 3. Roles
- **Product Owner**: Priorizar el backlog y representar los intereses del cliente. 
- **Scrum Master**: Facilitar el proceso ágil y resolver bloqueos. 
- **Equipo de Desarrollo**: Implementar funcionalidades como el catálogo de productos y la pasarela de pagos. 

Este enfoque asegura que el producto evolucione constantemente según las expectativas del cliente.`
    },
    {
        "id": "prog2",
        "tema": 1,
        "title": "Ejercicio 2. Análisis de Modelos de Ciclo de Vida para un Proyecto de Gestión Escolar",
        "scenario": `## Contexto
Una institución educativa desea desarrollar un sistema de gestión escolar que permita gestionar estudiantes, cursos y calificaciones. El sistema debe garantizar la seguridad de los datos, ser accesible en navegadores web y cumplir con regulaciones locales de protección de datos. 

## Tareas
Como parte del equipo de desarrollo, se te pide: 
- Describir las actividades principales de la fase de análisis y diseño en el modelo seleccionado. 
- Justificar tu elección del modelo, destacando ventajas y posibles limitaciones para este caso. 
- Analizar las características del proyecto y seleccionar un modelo de ciclo de vida adecuado (cascada, espiral, incremental o ágil).`,
        "questions": [
            "Ver solución completa."
        ],
        "answer": `### 1. Modelo Seleccionado
El modelo en espiral es adecuado, ya que el sistema necesita alta seguridad y cumplimiento normativo. Este modelo permite identificar y gestionar riesgos en cada iteración. 

### 2. Justificación
**Ventajas:**
- Gestión de riesgos en cada iteración. 
- Flexibilidad para incorporar cambios durante el desarrollo. 

**Limitaciones:**
- Costos más altos debido al análisis continuo. 
- Requiere personal con experiencia en gestión de riesgos. 

### 3. Actividades
- **Análisis**: Identificar requisitos funcionales como la gestión de estudiantes y cursos, y no funcionales como la seguridad y escalabilidad. Realizar entrevistas con los administradores escolares. 
- **Diseño**: Crear diagramas de clases para las entidades principales (estudiantes, cursos). Diseñar un mockup de la interfaz para la gestión de calificaciones.`
    },
    {
        "id": "prog3",
        "tema": 2,
        "title": "Ejercicio 3. Aplicación de Metodologías Ágiles y Principios de Desarrollo para un Proyecto de Software Educativo",
        "scenario": `## Contexto
Una institución educativa desea desarrollar una plataforma web que permita a los estudiantes acceder a recursos educativos, participar en foros de discusión y enviar tareas para revisión.

**Requisitos iniciales:**
- Registro y autenticación de usuarios. 
- Gestión de contenido por parte de los profesores. 
- Interacción entre estudiantes y profesores mediante foros y mensajería. 
- Función de subida y calificación de tareas. 

El cliente ha pedido entregas frecuentes para evaluar el progreso y ajustar funcionalidades según el feedback recibido. También solicita que el equipo de desarrollo siga estándares de calidad y mantenga el código bien documentado. 

## Tareas
- Proponer una metodología de desarrollo adecuada para este proyecto, justificando su elección. 
- Identificar las buenas prácticas y herramientas que el equipo debería usar para garantizar la calidad del código y la validación temprana. 
- Detallar cómo integrarías las ceremonias de Scrum en el flujo de trabajo del equipo.`,
        "questions": [
            "Ver solución completa."
        ],
        "answer": `### 1. Metodología Propuesta
Para este proyecto, la metodología **Scrum** es ideal. 

**Justificación:**
- Permite trabajar en incrementos funcionales (por ejemplo, desarrollar primero el registro de usuarios). 
- Facilita adaptarse a los cambios en los requisitos mediante sprints cortos. 
- Promueve la colaboración constante entre el cliente y el equipo. 

### 2. Buenas Prácticas y Herramientas
**Buenas Prácticas:**
- Aplicar PEP8 para asegurar un código limpio y consistente. 
- Seguir principios como DRY (evitar duplicar código) y KISS (mantener el diseño simple). 

**Herramientas:**
- Linters como pylint y flake8 para detectar errores de estilo y problemas de lógica. 
- Pruebas unitarias con pytest para validar cada funcionalidad desarrollada. 
- Sistemas de integración continua (GitHub Actions) para ejecutar validaciones automáticas al subir cambios al repositorio. 

### 3. Integración de Ceremonias Scrum
- **Sprint Planning**: Antes de cada sprint, definir objetivos claros, como implementar el módulo de foros o la subida de tareas. 
- **Reuniones Diarias**: Breves encuentros para sincronizar al equipo, identificar bloqueos y planificar el día. 
- **Sprint Review**: Mostrar al cliente las funcionalidades completadas y recopilar feedback para priorizar ajustes. 
- **Retrospectiva**: Reflexionar sobre qué funcionó bien y qué debe mejorarse para aumentar la eficiencia del equipo en el siguiente sprint. 

Esta solución garantiza un desarrollo ágil, enfocado en la calidad, con entregas frecuentes y alineado con las expectativas del cliente.`
    },
    {
        "id": "prog4",
        "tema": 2,
        "title": "Ejercicio 4. Desarrollo de un Sistema de Información para la Gestión de Historias Clínicas Electrónicas",
        "scenario": `## Contexto
Una institución sanitaria requiere un sistema de información para gestionar las historias clínicas electrónicas (HCE) de sus pacientes. El sistema debe cumplir con estrictas regulaciones legales de protección de datos y seguridad, como la Ley de Protección de Datos Personales.

**Requisitos iniciales:**
- Registro y acceso seguro a las historias clínicas. 
- Gestión de permisos para diferentes roles médicos. 
- Generación de reportes y auditorías de acceso. 
- Integración con sistemas hospitalarios existentes. 

El cliente exige una planificación detallada, documentación exhaustiva y un proceso riguroso de validación para garantizar que el sistema cumpla con todas las normativas. 

## Tareas
- Justificar por qué el modelo Waterfall es adecuado para este proyecto. 
- Describir las etapas del modelo y cómo se aplicarían al caso. 
- Identificar los beneficios de este enfoque frente a metodologías ágiles.`,
        "questions": [
            "Ver solución completa."
        ],
        "answer": `### 1. Justificación del Modelo Waterfall
El modelo Waterfall es ideal para este proyecto debido a la necesidad de cumplir con regulaciones estrictas de protección de datos en el sector sanitario. Su enfoque secuencial y estructurado garantiza que cada fase se complete y verifique antes de avanzar a la siguiente, minimizando riesgos y errores. Además, la generación de documentación exhaustiva es crucial para auditar el cumplimiento normativo y facilitar el mantenimiento del sistema. 

### 2. Aplicación de las Etapas del Modelo Waterfall
- **Recolección de requisitos**: Se identifican y documentan exhaustivamente los requisitos funcionales y no funcionales, incluyendo regulaciones específicas como el control de accesos y la encriptación de datos. 
- **Diseño del sistema**:  
    - *Diseño conceptual*: Definir la arquitectura del sistema, como bases de datos seguras y módulos de gestión de permisos. 
    - *Diseño detallado*: Especificar estructuras de datos, flujos de trabajo y esquemas de auditoría. 
- **Implementación**: Los desarrolladores traducen el diseño a código funcional utilizando lenguajes seguros como Python y frameworks orientados a sistemas sanitarios. 
- **Pruebas**: Se realizan pruebas exhaustivas, como pruebas de seguridad, para garantizar que el sistema cumpla con las normativas y funcione correctamente. 
- **Despliegue**: El sistema se implementa en el entorno de producción, acompañado de manuales técnicos y capacitación para el personal médico. 
- **Mantenimiento**: Se gestionan actualizaciones para cumplir con nuevas regulaciones y se corrigen errores detectados en producción. 

### 3. Beneficios del Enfoque Waterfall
- **Estabilidad**: Ideal para proyectos con requisitos definidos y poco propensos a cambios. 
- **Cumplimiento normativo**: La documentación detallada facilita auditorías y pruebas regulatorias. 
- **Gestión del riesgo**: El enfoque secuencial asegura un desarrollo controlado, reduciendo errores críticos. 

Este enfoque asegura un producto confiable, seguro y alineado con las necesidades del sector regulado.`
    },
    {
        "id": "prog5",
        "tema": 3,
        "title": "Ejercicio 5. Gestión de Requisitos para el Desarrollo de un Sistema de Reservas de Consultas Médicas",
        "scenario": `## Contexto
Una clínica desea desarrollar un sistema de reservas en línea.

**Funcionalidades requeridas:**
- Registrar una cuenta y autenticarse. 
- Seleccionar un médico y reservar una cita según la disponibilidad. 
- Recibir notificaciones de confirmación y recordatorio por correo electrónico. 
- Consultar su historial de citas. 

**Condiciones del sistema:**
- Proteger los datos de los pacientes según el RGPD. 
- Procesar hasta 500 solicitudes por segundo. 
- Ser accesible desde dispositivos móviles y cumplir con las normas WCAG 2.1. 

## Tareas
- Identifica y clasifica los requisitos funcionales, no funcionales, técnicos y legales del sistema.
- Proporciona un caso de uso para una funcionalidad clave del sistema.
- Propuesta de validación: explica cómo validarías los requisitos para asegurar que cumplen con las expectativas del cliente.`,
        "questions": [
            "Ver solución completa."
        ],
        "answer": `### 1. Clasificación de Requisitos
**Funcionales:**
- Registro y autenticación de usuarios. 
- Reservar citas con médicos disponibles. 
- Notificar al paciente por correo electrónico. 

**No funcionales:**
- Procesar hasta 500 solicitudes por segundo. 
- Tiempo de respuesta inferior a 2 segundos en redes estándar. 
- Diseño accesible para usuarios con discapacidades (cumplimiento WCAG 2.1). 

**Técnicos:**
- Desarrollar el sistema en Python con Django. 
- Base de datos PostgreSQL para gestionar citas. 

**Legales:**
- Cumplir con el RGPD, implementando anonimización y encriptación de datos. 

### 2. Caso de Uso: Reservar una Cita
**Actor:** Paciente. 

**Flujo Principal:**
1. El paciente inicia sesión. 
2. Selecciona un médico y una fecha disponible. 
3. Confirma la cita y recibe un correo de confirmación. 

**Excepciones:**
- Fecha no disponible o médico seleccionado sin agenda activa. 

### 3. Validación
- **Revisión de requisitos**: Realizar talleres con los stakeholders para confirmar que los requisitos cumplen sus necesidades. 
- **Prototipado**: Crear un prototipo interactivo que permita a los usuarios visualizar el proceso de reserva. 
- **Pruebas automatizadas**: Validar requisitos no funcionales con pruebas de carga para asegurar el rendimiento bajo alta concurrencia.`
    },
    {
        "id": "prog6",
        "tema": 3,
        "title": "Ejercicio 6. Sistema de Gestión de Pedidos para una Tienda Online",
        "scenario": `## Contexto
Una tienda online desea desarrollar un sistema de gestión de pedidos.

**Funcionalidades requeridas:**
- Registrarse y acceder a su cuenta. 
- Navegar por categorías de productos y añadirlos al carrito. 
- Realizar pagos seguros mediante una pasarela de pago integrada. 
- Recibir confirmación del pedido por correo electrónico. 

**Requisitos del sistema:**
- Procesar hasta 1000 pedidos simultáneos. 
- Cargar la página principal en menos de 2 segundos. 
- Cumplir con el RGPD para garantizar la seguridad de los datos de los clientes. 

## Tareas
- Clasifica los requisitos funcionales, no funcionales, técnicos y legales del sistema. 
- Proporciona un caso de uso para la funcionalidad de realizar un pedido. 
- Explica cómo validarías los requisitos para garantizar que se alineen con las necesidades del cliente.`,
        "questions": [
            "Ver solución completa."
        ],
        "answer": `### 1. Clasificación de Requisitos
**Funcionales:**
- Registro y autenticación de clientes. 
- Gestión de carritos de compra. 
- Procesamiento de pagos seguros. 

**No funcionales:**
- Tiempo de carga inferior a 2 segundos. 
- Procesar 1000 pedidos simultáneos. 

**Técnicos:**
- Uso de Python con Django y una base de datos MySQL. 

**Legales:**
- Cumplir con el RGPD mediante encriptación de datos y consentimiento explícito. 

### 2. Caso de Uso: Realizar un Pedido
**Actor:** Cliente. 

**Flujo Principal:**
1. El cliente añade productos al carrito. 
2. Selecciona una dirección de envío y el método de pago. 
3. Realiza el pago y recibe confirmación del pedido. 

**Excepciones:**
- Error en la pasarela de pago o dirección incompleta. 

### 3. Validación
- **Prototipado**: Crear una simulación del flujo de compra para obtener retroalimentación de los stakeholders. 
- **Pruebas de rendimiento**: Evaluar el sistema con herramientas como Apache JMeter para validar la concurrencia.`
    },
    {
        "id": "prog7",
        "tema": 4,
        "title": "Ejercicio 7. Creación y Representación de un Modelo Conceptual para un Sistema de Gestión de Reservas en un Restaurante",
        "scenario": `## Contexto
Un restaurante desea implementar un sistema para gestionar las reservas de sus clientes. El sistema debe permitir:
- Registrar clientes con su nombre, correo electrónico y número de teléfono.
- Permitir a los clientes realizar reservas especificando fecha, hora, número de personas y preferencia de mesa.
- Gestionar la disponibilidad de las mesas, considerando el número de personas.
- Asignar un empleado (mesero) a las reservas para atenderlas.

## Tareas
- Identifica las clases principales, atributos y métodos necesarios para el sistema.
- Crea un diagrama UML que represente las clases y sus relaciones (asociación, composición, herencia).
- Explica cómo se implementarían las clases y relaciones en Python.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Identificación de Clases, Atributos y Métodos

**Cliente**:
- Atributos: \`idCliente\`, \`nombre\`, \`correo\`, \`telefono\`.
- Métodos: \`registrarse()\`, \`consultarReservas()\`.

**Reserva**:
- Atributos: \`idReserva\`, \`fecha\`, \`hora\`, \`numPersonas\`, \`mesa\`, \`empleado\`.
- Métodos: \`crearReserva()\`, \`cancelarReserva()\`.

**Mesa**:
- Atributos: \`idMesa\`, \`numAsientos\`, \`disponible\`.
- Métodos: \`actualizarDisponibilidad()\`.

**Empleado**:
- Atributos: \`idEmpleado\`, \`nombre\`, \`cargo\`.
- Métodos: \`asignarReserva()\`.

### 2. Diagrama UML
*(Se recomienda usar una herramienta como Lucidchart o StarUML para visualizar las relaciones)*

### 3. Implementación en Python
\`\`\`python
class Cliente:
    def __init__(self, idCliente, nombre, correo, telefono):
        self.idCliente = idCliente
        self.nombre = nombre
        self.correo = correo
        self.telefono = telefono

class Mesa:
    def __init__(self, idMesa, numAsientos, disponible):
        self.idMesa = idMesa
        self.numAsientos = numAsientos
        self.disponible = disponible

class Reserva:
    def __init__(self, idReserva, fecha, hora, numPersonas, mesa, empleado):
        self.idReserva = idReserva
        self.fecha = fecha
        self.hora = hora
        self.numPersonas = numPersonas
        self.mesa = mesa
        self.empleado = empleado

class Empleado:
    def __init__(self, idEmpleado, nombre, cargo):
        self.idEmpleado = idEmpleado
        self.nombre = nombre
        self.cargo = cargo
\`\`\``
    },
    {
        "id": "prog8",
        "tema": 4,
        "title": "Ejercicio 8. Modelo Conceptual para un Sistema de Gestión de Cursos Online",
        "scenario": `## Contexto
Una plataforma de educación en línea necesita un sistema para gestionar cursos, instructores y estudiantes. El sistema debe permitir:
- Registrar estudiantes con su nombre, correo y cursos en los que están inscritos.
- Permitir a los instructores crear cursos especificando el título, descripción y duración.
- Gestionar la relación entre estudiantes y cursos, incluyendo la fecha de inscripción y el estado (activo o completado).

## Tareas
- Identifica las clases principales, atributos y métodos necesarios.
- Diseña un diagrama UML que represente el sistema.
- Muestra cómo implementarías las clases y relaciones en Python.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Clases, Atributos y Métodos

**Estudiante**:
- Atributos: \`idEstudiante\`, \`nombre\`, \`correo\`.
- Métodos: \`registrarse()\`, \`consultarCursos()\`.

**Curso**:
- Atributos: \`idCurso\`, \`titulo\`, \`descripcion\`, \`duracion\`.
- Métodos: \`crearCurso()\`, \`actualizarCurso()\`.

**Inscripcion**:
- Atributos: \`idInscripcion\`, \`fecha\`, \`estado\`.
- Métodos: \`inscribirEstudiante()\`, \`actualizarEstado()\`.

**Instructor**:
- Atributos: \`idInstructor\`, \`nombre\`, \`email\`.
- Métodos: \`crearCurso()\`.

### 2. Diagrama UML
*(Se recomienda usar una herramienta como Lucidchart o StarUML para visualizar las relaciones)*

### 3. Implementación en Python
\`\`\`python
class Estudiante:
    def __init__(self, idEstudiante, nombre, correo):
        self.idEstudiante = idEstudiante
        self.nombre = nombre
        self.correo = correo

class Curso:
    def __init__(self, idCurso, titulo, descripcion, duracion):
        self.idCurso = idCurso
        self.titulo = titulo
        self.descripcion = descripcion
        self.duracion = duracion

class Inscripcion:
    def __init__(self, idInscripcion, fecha, estado, estudiante, curso):
        self.idInscripcion = idInscripcion
        self.fecha = fecha
        self.estado = estado
        self.estudiante = estudiante
        self.curso = curso

class Instructor:
    def __init__(self, idInstructor, nombre, email):
        self.idInstructor = idInstructor
        self.nombre = nombre
        self.email = email
\`\`\``
    },
    {
        "id": "prog9",
        "tema": 5,
        "title": "Ejercicio 9.",
        "scenario": `## Contexto
Un gimnasio necesita implementar un sistema para gestionar las reservas de clases grupales. El analista propone una estrategia basada en prototipos y mockups para garantizar que la interfaz gráfica (GUI) cumpla con las necesidades de los usuarios. El sistema debe incluir:
- Una vista de calendario donde los usuarios puedan ver las clases disponibles.
- Un formulario para registrarse en una clase con datos como nombre del usuario y horario seleccionado.
- Un área donde los usuarios puedan consultar sus clases reservadas.

## Tareas
- Describe cómo el analista utilizaría herramientas como Figma o Balsamiq para diseñar un mockup de la interfaz.
- Propón cómo se implementarían los elementos de la GUI en Python utilizando Tkinter o PyQt.
- Explica por qué el uso de mockups y prototipos es útil para este proyecto.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Uso de herramientas para mockups
En Figma, el analista crea un diseño con tres secciones:
- El calendario en la parte superior.
- El formulario de registro en el centro.
- Las reservas del usuario en la parte inferior.
Utiliza un diseño limpio y colores que reflejen la identidad del gimnasio.

### 2. Implementación en Python con Tkinter
- El calendario se representa mediante una tabla interactiva (puede usarse \`ttk.Treeview\`).
- Los datos del formulario se capturan con widgets como \`Entry\` y \`Button\`.
- La lista de reservas se muestra en un \`Listbox\`, donde los usuarios pueden ver o cancelar sus clases.

### 3. Ventajas de prototipos y mockups
- Facilitan la validación del diseño con los administradores del gimnasio.
- Permiten realizar ajustes tempranos basados en la retroalimentación antes de iniciar la implementación.`
    },
    {
        "id": "prog10",
        "tema": 5,
        "title": "Ejercicio 10.",
        "scenario": `## Contexto
Una tienda de electrónica desea desarrollar un portal para gestionar las ventas en línea. El analista propone un enfoque iterativo basado en prototipos interactivos para diseñar la interfaz. El portal debe incluir:
- Una página de productos con filtros (categoría, precio).
- Un carrito de compras donde los usuarios puedan gestionar sus pedidos.
- Un formulario para completar la compra con datos de envío y pago.

## Tareas
- Detalla cómo el analista desarrollaría un prototipo funcional para este proyecto.
- Explica cómo integrar la interfaz con Python utilizando PyQt.
- Justifica cómo los prototipos mejoran la comunicación con los stakeholders.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Prototipo funcional
En Figma, se crea un prototipo interactivo donde los usuarios puedan simular la selección de productos, añadirlos al carrito y completar la compra. Los filtros se simulan con botones interactivos.

### 2. Implementación en PyQt
- La lista de productos se implementa con un \`QTableWidget\`, permitiendo añadir funcionalidades avanzadas como filtros dinámicos.
- El carrito de compras es un \`QListWidget\` con opciones para actualizar la cantidad o eliminar productos.
- El formulario utiliza widgets como \`QLineEdit\` y \`QComboBox\` para capturar información de envío y pago.

### 3. Impacto de los prototipos
- Permiten validar el flujo de navegación y la funcionalidad antes del desarrollo técnico.
- Ayudan a alinear expectativas entre los stakeholders y el equipo técnico.`
    },
    {
        "id": "prog11",
        "tema": 6,
        "title": "Ejercicio 11. Análisis de un Diagrama UML",
        "scenario": `## Contexto
A continuación, se presenta un diagrama de clases UML que representa una jerarquía de clases en un sistema de gestión de vehículos:

*(Diagrama omitido)*

## Tareas
- ¿Qué tipo de relación existe entre la clase Vehiculo y las clases Coche y Moto? Justifica tu respuesta.
- Si se quisiera implementar este modelo en Python, ¿qué palabra clave se utilizaría para establecer la herencia?
- ¿Cómo aplicarías el polimorfismo en este modelo para que cada tipo de vehículo muestre su propia información al llamar \`obtener_info()\`?`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Tipo de relación
La relación entre \`Vehiculo\` y sus subclases \`Coche\` y \`Moto\` es una relación de **herencia**. En UML, esto se representa con una línea con un triángulo apuntando a la superclase \`Vehiculo\`, lo que indica que \`Coche\` y \`Moto\` heredan sus atributos y métodos.

Esta relación es adecuada porque un \`Coche\` y una \`Moto\` son tipos específicos de \`Vehiculo\` (relación "es un"), lo que permite reutilizar atributos comunes (marca, modelo, año) y definir comportamientos compartidos en la superclase.

### 2. Implementación de Herencia en Python
En Python, la herencia se establece utilizando la palabra clave \`class Subclase(Superclase)\`. Para este caso, la implementación básica sería:

\`\`\`python
class Vehiculo:
    def __init__(self, marca, modelo, año):
        self.marca = marca
        self.modelo = modelo
        self.año = año

class Coche(Vehiculo):
    def __init__(self, marca, modelo, año, num_puertas):
        super().__init__(marca, modelo, año)
        self.num_puertas = num_puertas

class Moto(Vehiculo):
    def __init__(self, marca, modelo, año, cilindrada):
        super().__init__(marca, modelo, año)
        self.cilindrada = cilindrada
\`\`\`
La función \`super()\` permite llamar al constructor de la clase padre \`Vehiculo\` y reutilizar su lógica en \`Coche\` y \`Moto\`.

### 3. Polimorfismo y \`obtener_info()\`
El polimorfismo permite que \`Coche\` y \`Moto\` sobrescriban el método \`obtener_info()\` de \`Vehiculo\`, personalizando su comportamiento en cada subclase.

Implementación en Python:
\`\`\`python
class Vehiculo:
    def obtener_info(self):
        return f"{self.marca} {self.modelo} ({self.año})"

class Coche(Vehiculo):
    def obtener_info(self):
        return f"{self.marca} {self.modelo} ({self.año}) - {self.num_puertas} puertas"

class Moto(Vehiculo):
    def obtener_info(self):
        return f"{self.marca} {self.modelo} ({self.año}) - {self.cilindrada}cc"

# Uso del polimorfismo
vehiculo1 = Coche("Toyota", "Corolla", 2022, 4)
vehiculo2 = Moto("Honda", "CBR600RR", 2021, 600)

print(vehiculo1.obtener_info())  # Toyota Corolla (2022) - 4 puertas
print(vehiculo2.obtener_info())  # Honda CBR600RR (2021) - 600cc
\`\`\``
    },
    {
        "id": "prog12",
        "tema": 6,
        "title": "Ejercicio 12. Implementación de una Jerarquía con Herencia y Polimorfismo",
        "scenario": `## Contexto
Implementa en Python una jerarquía de clases basada en la siguiente estructura:
- **Clase base**: \`Empleado\` con atributos \`nombre\` y \`salario\`, y un método \`calcular_pago()\`.
- **Clases derivadas**:
    - \`Gerente\`, cuyo salario incluye un bono del 20%.
    - \`Desarrollador\`, cuyo salario incluye un bono del 10%.

## Tareas
- Escribe el código en Python respetando la herencia y el polimorfismo.
- Crea instancias de \`Gerente\` y \`Desarrollador\`, asignando un salario base de 3000€, e imprime sus respectivos salarios finales.
- Ejemplo de salida esperada:
  \`\`\`text
  Gerente: Salario final = 3600€
  Desarrollador: Salario final = 3300€
  \`\`\``,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Código en Python respetando la herencia y el polimorfismo
La implementación en Python debe seguir los principios de la programación orientada a objetos (POO), usando herencia para reutilizar código y polimorfismo para sobrescribir métodos en las subclases.

\`\`\`python
class Empleado:
    def __init__(self, nombre, salario):
        self.nombre = nombre
        self.salario = salario

    def calcular_pago(self):
        return self.salario  # Método base que será sobrescrito en las subclases

class Gerente(Empleado):
    def calcular_pago(self):
        return self.salario * 1.2  # Bono del 20%

class Desarrollador(Empleado):
    def calcular_pago(self):
        return self.salario * 1.1  # Bono del 10%
\`\`\`
Aquí, \`Empleado\` es la superclase, mientras que \`Gerente\` y \`Desarrollador\` heredan de ella y sobrescriben el método \`calcular_pago()\` para aplicar los bonos correspondientes.

### 2. Creación de instancias y cálculo del salario final
Ahora, creamos instancias de \`Gerente\` y \`Desarrollador\` con un salario base de 3000€ y verificamos que el cálculo del salario funcione correctamente.

\`\`\`python
# Creación de objetos
empleado1 = Gerente("Laura", 3000)
empleado2 = Desarrollador("Carlos", 3000)

# Impresión de salarios finales
print(f"Gerente: Salario final = {empleado1.calcular_pago()}€")
print(f"Desarrollador: Salario final = {empleado2.calcular_pago()}€")
\`\`\`
Salida esperada:
\`\`\`text
Gerente: Salario final = 3600€
Desarrollador: Salario final = 3300€
\`\`\``
    },
    {
        "id": "prog13",
        "tema": 7,
        "title": "Ejercicio 13. Implementación de MVC en una Aplicación Web con Flask",
        "scenario": `## Contexto
Un equipo de desarrollo está construyendo un sistema de gestión de tareas basado en el patrón Model-View-Controller (MVC). Se te ha asignado la tarea de diseñar la estructura del sistema en Flask, asegurando la separación de responsabilidades.

**Objetivo:**
Implementar una aplicación web sencilla que permita:
- Agregar nuevas tareas.
- Ver la lista de tareas registradas.
- Marcar tareas como completadas.

## Tareas
- Definir el modelo (\`Task\`). Debe contener un ID, un nombre de tarea y un estado (pendiente o completado).
- Implementar el controlador. Debe gestionar las solicitudes de los usuarios y comunicarse con el modelo.
- Crear la vista. Debe mostrar la lista de tareas y permitir agregar nuevas.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Modelo (\`model.py\`) - Gestión de Datos
\`\`\`python
tasks = []  # Simulación de una base de datos en memoria

class Task:
    def __init__(self, id, nombre):
        self.id = id
        self.nombre = nombre
        self.estado = "pendiente"

    def completar(self):
        self.estado = "completado"
\`\`\`

### 2. Controlador (\`app.py\`) - Lógica de Negocio
\`\`\`python
from flask import Flask, render_template, request, redirect
from model import Task, tasks

app = Flask(__name__)

@app.route('/')
def mostrar_tareas():
    return render_template("index.html", tasks=tasks)

@app.route('/agregar', methods=['POST'])
def agregar_tarea():
    nombre = request.form['nombre']
    nueva_tarea = Task(len(tasks) + 1, nombre)
    tasks.append(nueva_tarea)
    return redirect('/')

@app.route('/completar/<int:id>')
def completar_tarea(id):
    for task in tasks:
        if task.id == id:
            task.completar()
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

### 3. Vista (\`templates/index.html\`) - Presentación
\`\`\`html
<!DOCTYPE html>
<html>
<head>
    <title>Gestor de Tareas</title>
</head>
<body>
    <h1>Lista de Tareas</h1>
    <form action="/agregar" method="post">
        <input type="text" name="nombre" placeholder="Nueva tarea" required>
        <button type="submit">Agregar</button>
    </form>
    <ul>
        {% for task in tasks %}
            <li>{{ task.nombre }} - {{ task.estado }}
                <a href="/completar/{{ task.id }}">[Marcar como completada]</a>
            </li>
        {% endfor %}
    </ul>
</body>
</html>
\`\`\``
    },
    {
        "id": "prog14",
        "tema": 7,
        "title": "Ejercicio 14. Análisis y Diseño de una Aplicación Web con el Patrón MVC",
        "scenario": `## Contexto
Una empresa de gestión de eventos desea desarrollar una aplicación web que permita a los usuarios registrarse en eventos, ver la lista de eventos disponibles y gestionar sus inscripciones.

El equipo de desarrollo ha decidido implementar el patrón Model-View-Controller (MVC) para garantizar una estructura modular y escalable. Como analista del proyecto, tu tarea es diseñar la arquitectura de la aplicación sin necesidad de programar código, identificando cómo se distribuirán las responsabilidades en cada componente de MVC.

## Tareas
- Definir el Modelo (Model). ¿Qué entidades y atributos deben manejarse en la aplicación?
- Diseñar la Vista (View). ¿Qué pantallas y elementos visuales necesita el usuario para interactuar con la aplicación?
- Especificar el Controlador (Controller). ¿Qué lógica de negocio debe implementarse para conectar la vista con el modelo?
- Explicar cómo la implementación de MVC mejora la organización y mantenimiento del sistema.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Modelo (Model) - Gestión de Datos
El modelo se encarga de gestionar la información relacionada con los eventos y usuarios. Para este caso, se identifican dos entidades principales:
- **Usuario**: \`id_usuario\`, \`nombre\`, \`email\`, \`eventos_inscritos\`.
- **Evento**: \`id_evento\`, \`nombre_evento\`, \`fecha\`, \`capacidad\`, \`inscritos\`.

Cada usuario puede registrarse en múltiples eventos, por lo que se debe manejar una relación entre ambas entidades.

### 2. Vista (View) - Interfaz de Usuario
La vista es la interfaz con la que interactúan los usuarios. Debe contener las siguientes pantallas:
- **Página de inicio**: Muestra los eventos disponibles.
- **Página de registro**: Permite a los usuarios inscribirse en eventos.
- **Panel de usuario**: Lista los eventos en los que el usuario está inscrito.
- **Vista de administración**: Permite a los organizadores gestionar los eventos.

Los elementos visuales clave incluyen:
- Formularios para inscripción.
- Listados de eventos con capacidad y número de inscritos.
- Botones de acción (Registrar, Cancelar inscripción).

### 3. Controlador (Controller) - Lógica de Negocio
El controlador gestiona la comunicación entre la vista y el modelo, ejecutando la lógica de negocio. Las funciones clave incluyen:
- **Registrar usuario en un evento**:
    - Validar que el usuario no esté inscrito previamente.
    - Verificar que el evento tenga plazas disponibles.
    - Guardar la inscripción en la base de datos.
- **Mostrar eventos disponibles**:
    - Obtener eventos desde el modelo y enviarlos a la vista.
- **Cancelar inscripción de un usuario**:
    - Eliminar la relación entre el usuario y el evento en la base de datos.

### 4. Beneficios de Usar MVC en Este Proyecto
El uso del patrón MVC en esta aplicación ofrece múltiples ventajas:
- **Separación de responsabilidades**:
    - Los datos (Model), la interfaz (View) y la lógica de negocio (Controller) están claramente diferenciados.
- **Mantenibilidad**:
    - Se pueden actualizar o agregar nuevas funcionalidades sin afectar toda la aplicación.
- **Escalabilidad**:
    - Si la aplicación crece, se pueden integrar nuevas vistas o modelos sin modificar el controlador principal.
- **Reutilización**:
    - Los componentes del modelo pueden ser reutilizados en diferentes partes del sistema.`
    },
    {
        "id": "prog15",
        "tema": 8,
        "title": "Ejercicio 15. Diseño de una API REST para un Sistema de Reservas de Hoteles",
        "scenario": `## Contexto
Una cadena hotelera necesita desarrollar una API REST que permita a los clientes realizar reservas en sus hoteles de forma eficiente. El equipo de desarrollo ha decidido diseñar la API utilizando Flask o Django REST Framework (DRF) y gestionar los datos con una base de datos SQL. Además, la API deberá incluir funcionalidades para la exportación y análisis de datos mediante pandas.

## Tareas
- **Diseñar la estructura de la API**:
    - Identificar los recursos principales que se gestionarán (habitaciones, reservas, clientes).
    - Definir los endpoints y métodos HTTP necesarios.
    - Determinar la base de datos a utilizar y si se aplicará un ORM.
- **Definir el modelo de datos**:
    - ¿Qué tablas y relaciones serán necesarias para almacenar reservas y disponibilidad de habitaciones?
    - ¿Cómo se garantizará la consistencia y escalabilidad del sistema?
- **Exportación y análisis de datos con pandas**:
    - ¿Qué métricas podrían analizarse a partir de los datos de la API?
    - ¿En qué formatos deberían exportarse los datos para su análisis (CSV, JSON, Excel)?
- **Argumentar cómo se manejarán los siguientes aspectos**:
    - Seguridad y autenticación de la API.
    - Manejo de errores y validación de datos.
    - Pruebas y documentación de la API.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Diseño de la API y Endpoints
Para este sistema de reservas, se identifican los siguientes recursos y endpoints clave:

**Clientes:**
- \`POST /clientes\` → Registrar un cliente.
- \`GET /clientes/{id}\` → Obtener información de un cliente.

**Habitaciones:**
- \`GET /habitaciones\` → Listar habitaciones disponibles.
- \`PUT /habitaciones/{id}\` → Modificar disponibilidad de una habitación.

**Reservas:**
- \`POST /reservas\` → Crear una reserva.
- \`GET /reservas/{id}\` → Consultar detalles de una reserva.
- \`DELETE /reservas/{id}\` → Cancelar una reserva.

Se utilizará **Flask con SQLAlchemy** o **Django ORM** para gestionar la base de datos relacional.

### 2. Modelo de Datos
- **Tabla \`clientes\`**: \`id\`, \`nombre\`, \`email\`, \`teléfono\`.
- **Tabla \`habitaciones\`**: \`id\`, \`tipo\`, \`precio\`, \`estado\`.
- **Tabla \`reservas\`**: \`id\`, \`cliente_id\`, \`habitacion_id\`, \`fecha_checkin\`, \`fecha_checkout\`.

Las relaciones uno a muchos entre clientes y reservas aseguran que cada cliente pueda realizar múltiples reservas.

### 3. Análisis y Exportación de Datos con pandas
La API deberá incluir la opción de exportar datos en CSV y JSON para su análisis. Las métricas clave incluyen:
- **Tasa de ocupación** → % de habitaciones reservadas en un período.
- **Ingresos por habitación** → Promedio de ingresos generados por cada tipo de habitación.
- **Reservas canceladas** → Análisis de cancelaciones por temporada.

Estos datos podrán analizarse con pandas para generar reportes útiles en la toma de decisiones.

### 4. Seguridad y Documentación
- **Autenticación**: Se implementará JWT (JSON Web Tokens) para restringir el acceso a usuarios autenticados.
- **Validación de datos**: Se usarán esquemas de validación para evitar registros incorrectos.
- **Documentación**: Se generará con Swagger para facilitar el uso de la API por parte de desarrolladores externos.

El diseño propuesto permite una gestión eficiente de reservas hoteleras mediante una API REST estructurada, asegurando seguridad, escalabilidad y exportación de datos. Con esta arquitectura, la cadena hotelera podrá optimizar su servicio y tomar decisiones basadas en análisis de datos en tiempo real.`
    },
    {
        "id": "prog16",
        "tema": 8,
        "title": "Ejercicio 16. Diseño de una API REST para un Sistema de Gestión de Inventarios en un Almacén",
        "scenario": `## Contexto
Una empresa de logística necesita una API REST para gestionar su inventario de productos en múltiples almacenes. El equipo de desarrollo ha decidido diseñar la API utilizando Flask o Django REST Framework (DRF) con una base de datos SQL. Además, la API deberá ofrecer opciones de exportación de datos en CSV y JSON para su posterior análisis mediante pandas.

## Tareas
- **Diseñar la estructura de la API**:
    - Identificar los recursos principales a gestionar (productos, almacenes, stock).
    - Definir los endpoints y métodos HTTP.
    - Seleccionar la base de datos y el ORM adecuado.
- **Definir el modelo de datos**:
    - Diseñar las tablas necesarias y sus relaciones.
    - Asegurar que los datos sean consistentes y escalables.
- **Exportación y análisis de datos con pandas**:
    - ¿Qué métricas deberían analizarse (inventario disponible, productos más vendidos, etc.)?
    - ¿En qué formatos deben exportarse los datos?
- **Argumentar las estrategias de seguridad, validación de datos y documentación de la API.**`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Diseño de la API y Endpoints
- **Productos**:
    - \`GET /productos\` → Listar productos.
    - \`POST /productos\` → Agregar un nuevo producto.
    - \`PUT /productos/{id}\` → Modificar información del producto.
- **Almacenes**:
    - \`GET /almacenes\` → Listar almacenes.
    - \`POST /almacenes\` → Agregar un nuevo almacén.
- **Stock**:
    - \`GET /stock/{id_almacen}\` → Consultar el stock de un almacén.
    - \`POST /stock\` → Agregar existencias de productos.

Se utilizará **Flask con SQLAlchemy** o **Django ORM** para gestionar la base de datos relacional.

### 2. Modelo de Datos
- **Tabla productos**: \`id\`, \`nombre\`, \`categoria\`, \`precio\`.
- **Tabla almacenes**: \`id\`, \`ubicación\`, \`capacidad\`.
- **Tabla stock**: \`id\`, \`producto_id\`, \`almacen_id\`, \`cantidad\`.

### 3. Exportación y Análisis de Datos con pandas
- **Exportar stock** en CSV y JSON.
- **Métricas a analizar**:
    - Productos con mayor y menor rotación.
    - Inventario promedio por almacén.

### 4. Seguridad y Documentación
- **Autenticación**: JWT.
- **Validación de datos** en endpoints.
- **Documentación**: Swagger para documentar la API.

Este diseño permitirá gestionar inventarios eficientemente y optimizar el análisis de stock.`
    },
    {
        "id": "prog17",
        "tema": 9,
        "title": "Ejercicio 17. Diseño de una Arquitectura para la Gestión de APIs con un API Manager",
        "questions": [
            "Ver escenario completo."
        ],
        "answer": "1. Elección del API Manager\n\nSe recomienda utilizar Kong API Gateway, ya que ofrece alta escalabilidad, soporte para contenedores en Kubernetes y flexibilidad con plugins. Alternativamente, AWS API Gateway podría ser una opción si la empresa ya opera en el ecosistema de AWS.\n\nRazones para elegir Kong API Gateway:\n\nSe integra fácilmente con Docker y Kubernetes, permitiendo despliegues dinámicos.\nSoporta autenticación mediante OAuth2, JWT y API Keys.\nOfrece monitorización avanzada con Prometheus y Grafana.\n2. Control de Seguridad\n\nPara proteger las APIs, se implementarán:\n\nAutenticación con OAuth2 y JWT: Los clientes deberán obtener un token antes de acceder a los recursos.\nAutorización basada en roles (RBAC): Los administradores podrán modificar datos, mientras que los clientes solo podrán leer información.\nRate Limiting: Se establecerá un límite de 100 solicitudes por minuto para evitar abusos.\n3. Gestión del Tráfico y Monitoreo\n\nPara garantizar la estabilidad de la API:\n\nSe implementará caché de respuestas en el API Gateway para reducir la carga en la base de datos.\nSe utilizarán balanceadores de carga para distribuir el tráfico entre múltiples servidores.\nSe activarán métricas de rendimiento en Kong con Prometheus y Grafana.\n4. Integración con Servicios Externos\n\nPagos con Stripe y PayPal: Se crearán conectores API dentro del API Manager para gestionar las transacciones de forma segura.\nNotificaciones con Twilio o Firebase: Se implementarán webhooks para notificar a los clientes sobre el estado de sus pedidos en tiempo real.\nLa implementación de Kong API Gateway mejorará la seguridad, escalabilidad y eficiencia del ecosistema de APIs de la empresa. Con medidas de autenticación, control de tráfico y conectores externos, se garantizará un servicio seguro y confiable para los clientes."
    },
    {
        "id": "prog18",
        "tema": 9,
        "title": "Ejercicio 18. Diseño de una Arquitectura de API Manager para un Sistema de Salud",
        "scenario": `## Contexto
Una empresa de comercio electrónico ha decidido modernizar su infraestructura tecnológica mediante la implementación de un API Manager. Actualmente, su plataforma cuenta con múltiples APIs que manejan operaciones clave, como:
- Gestión de productos (altas, bajas y modificaciones en el catálogo).
- Procesamiento de pagos (integración con pasarelas de pago como Stripe y PayPal).
- Gestión de pedidos (creación, seguimiento y cancelaciones).

El equipo de arquitectura necesita diseñar una solución que incluya un API Manager para mejorar la seguridad, escalabilidad y eficiencia del sistema.

## Tareas
- **Elección del API Manager**: ¿Qué solución recomendarías (AWS API Gateway, Kong, Apigee, Tyk) y por qué?
- **Control de seguridad**: ¿Qué mecanismos de autenticación y autorización se implementarán para proteger las APIs?
- **Gestión del tráfico y monitoreo**: ¿Cómo se asegurará la disponibilidad de la API ante una alta demanda?
- **Integración con servicios externos**: ¿Cómo se gestionarán las conexiones con terceros (pasarelas de pago, servicios de notificación)?`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Elección del API Manager
Se recomienda utilizar **Kong API Gateway**, ya que ofrece alta escalabilidad, soporte para contenedores en Kubernetes y flexibilidad con plugins. Alternativamente, AWS API Gateway podría ser una opción si la empresa ya opera en el ecosistema de AWS.

**Razones para elegir Kong API Gateway:**
- Se integra fácilmente con Docker y Kubernetes, permitiendo despliegues dinámicos.
- Soporta autenticación mediante OAuth2, JWT y API Keys.
- Ofrece monitorización avanzada con Prometheus y Grafana.

### 2. Control de Seguridad
Para proteger las APIs, se implementarán:
- **Autenticación con OAuth2 y JWT**: Los clientes deberán obtener un token antes de acceder a los recursos.
- **Autorización basada en roles (RBAC)**: Los administradores podrán modificar datos, mientras que los clientes solo podrán leer información.
- **Rate Limiting**: Se establecerá un límite de 100 solicitudes por minuto para evitar abusos.

### 3. Gestión del Tráfico y Monitoreo
Para garantizar la estabilidad de la API:
- Se implementará caché de respuestas en el API Gateway para reducir la carga en la base de datos.
- Se utilizarán balanceadores de carga para distribuir el tráfico entre múltiples servidores.
- Se activarán métricas de rendimiento en Kong con Prometheus y Grafana.

### 4. Integración con Servicios Externos
- **Pagos con Stripe y PayPal**: Se crearán conectores API dentro del API Manager para gestionar las transacciones de forma segura.
- **Notificaciones con Twilio o Firebase**: Se implementarán webhooks para notificar a los clientes sobre el estado de sus pedidos en tiempo real.

La implementación de Kong API Gateway mejorará la seguridad, escalabilidad y eficiencia del ecosistema de APIs de la empresa.`
    },
    {
        "id": "prog19",
        "tema": 10,
        "title": "Ejercicio 19. Estrategia de Testing para una Plataforma de Comercio Electrónico",
        "scenario": `## Contexto
Una empresa de comercio electrónico está desarrollando una nueva versión de su plataforma web, que incluye las siguientes funcionalidades clave:
- Gestión de usuarios: Registro, inicio de sesión y recuperación de contraseñas.
- Catálogo de productos: Visualización, filtrado y búsqueda de productos.
- Carrito de compras y pagos: Agregar productos al carrito, procesar pagos con Stripe y PayPal.
- Sistema de pedidos: Seguimiento y notificación de envíos.

El equipo de desarrollo ha solicitado definir una estrategia de pruebas para garantizar la calidad del software antes de su lanzamiento.

## Tareas
- **Definir los tipos de pruebas necesarias** (unitarias, integración, sistema, aceptación).
- **Planificar pruebas no funcionales** (rendimiento, seguridad, usabilidad).
- **Seleccionar herramientas adecuadas** para la ejecución de pruebas automatizadas y manuales.
- **Establecer un proceso de reporte y seguimiento de errores.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Definir los Tipos de Pruebas Necesarias
Para asegurar la calidad del software, se implementarán las siguientes pruebas:
- ** Pruebas unitarias**: Validar que los módulos individuales funcionan correctamente(Ejemplo: función de validación de contraseñas).
- ** Pruebas de integración **: Verificar que los módulos interactúan sin errores(Ejemplo: integración entre carrito de compras y sistema de pago).
- ** Pruebas de sistema **: Evaluar la funcionalidad global de la plataforma(Ejemplo: flujo de compra completo).
- ** Pruebas de aceptación **: Realizar pruebas con usuarios finales para validar la experiencia del cliente.

### 2. Planificación de Pruebas No Funcionales
    - ** Pruebas de rendimiento **: Simulación de múltiples usuarios concurrentes para medir tiempos de respuesta con JMeter.
- ** Pruebas de seguridad **: Uso de OWASP ZAP para detectar vulnerabilidades como inyección SQL o fallos en autenticación.
- ** Pruebas de usabilidad **: Evaluación con usuarios para optimizar la experiencia de compra y navegación.

### 3. Selección de Herramientas
    - ** Selenium ** para pruebas automatizadas en la interfaz gráfica.
- ** Postman ** para pruebas en APIs REST.
- ** GitHub Actions ** para integración de pruebas en CI / CD y ejecución automática en cada commit.

### 4. Proceso de Reporte y Seguimiento de Errores
    - Uso de ** JIRA ** o ** Trello ** para registrar defectos detectados.
- Clasificación de errores por severidad y prioridad.
- Revisión periódica de métricas de calidad y tasa de resolución de errores.

Implementar una estrategia de testing integral permitirá detectar errores antes del despliegue, optimizar el rendimiento y mejorar la seguridad de la plataforma.`
    },
    {
        "id": "prog20",
        "tema": 10,
        "title": "Ejercicio 20. Estrategia de Testing para una Aplicación de Reservas de Hoteles",
        "scenario": `## Contexto
Una empresa de turismo ha desarrollado una aplicación web y móvil para gestionar reservas de hoteles, donde los usuarios pueden:
    - Buscar hoteles según ubicación, disponibilidad y precio.
- Reservar habitaciones y pagar en línea con tarjetas de crédito y PayPal.
- Gestionar cancelaciones y modificaciones de reservas.
- Recibir confirmaciones y notificaciones de su reserva.

El equipo de desarrollo necesita definir una estrategia de testing antes del lanzamiento para garantizar que el sistema sea estable, seguro y fácil de usar.

## Tareas
    - ** Definir los tipos de pruebas necesarias ** (unitarias, integración, sistema, aceptación).
- ** Planificar pruebas no funcionales ** (rendimiento, seguridad, compatibilidad).
- ** Seleccionar herramientas adecuadas ** para la ejecución de pruebas automatizadas y manuales.
- ** Establecer un proceso de reporte y seguimiento de errores.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Tipos de Pruebas Necesarias
- ** Pruebas unitarias **: Evaluar funciones críticas como el cálculo de disponibilidad y el procesamiento de pagos.
- ** Pruebas de integración **: Asegurar la correcta conexión entre la API de reservas, el sistema de pagos y la base de datos.
- ** Pruebas de sistema **: Verificar el flujo de búsqueda, reserva y confirmación de habitaciones.
- ** Pruebas de aceptación **: Incluir usuarios reales para probar la experiencia de reserva antes del lanzamiento.

### 2. Pruebas No Funcionales
    - ** Pruebas de rendimiento **: Medir tiempos de carga en horarios pico usando JMeter.
- ** Pruebas de seguridad **: Detectar vulnerabilidades con OWASP ZAP, asegurando que los pagos sean seguros.
- ** Pruebas de compatibilidad **: Verificar el funcionamiento en navegadores web(Chrome, Firefox, Safari) y dispositivos móviles(Android, iOS).

### 3. Herramientas Seleccionadas
    - ** Selenium ** para pruebas automatizadas en la interfaz web.
- ** Postman ** para validar las API REST de búsqueda y reservas.
- ** GitLab CI / CD ** para integrar pruebas automatizadas en el proceso de desarrollo.

### 4. Proceso de Reporte de Errores
    - Uso de ** JIRA ** para registrar y clasificar errores según prioridad.
- Asignación de responsables para corregir defectos y realizar nuevas pruebas antes del despliegue.

Este enfoque de testing permitirá detectar fallos antes del lanzamiento y garantizar que la aplicación de reservas funcione correctamente en todos los dispositivos y condiciones.`
    },
    {
        "id": "prog21",
        "tema": 11,
        "title": "Ejercicio 21. Validación de una Aplicación Multiplataforma para Reservas de Viajes",
        "scenario": `## Contexto
Una agencia de viajes ha desarrollado una aplicación multiplataforma que permite a los usuarios:
    - Buscar y reservar vuelos y hoteles desde dispositivos móviles(Android / iOS) y navegadores web.
- Realizar pagos en línea a través de tarjetas de crédito y plataformas como PayPal.
- Recibir notificaciones sobre cambios en sus reservas.
- Acceder a sus itinerarios sin conexión mediante almacenamiento en caché.

El equipo de desarrollo necesita garantizar que la aplicación funcione correctamente en distintos dispositivos, sistemas operativos y navegadores.Para ello, han solicitado una estrategia de validación multiplataforma.

## Tareas
    - ** Definir las pruebas de compatibilidad necesarias ** en web y dispositivos móviles.
- ** Planificar el uso de emuladores y pruebas en dispositivos reales **.
- ** Determinar herramientas y metodologías ** para evaluar rendimiento y consumo de recursos.
- ** Implementar pruebas automatizadas ** con Appium o Selenium.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Pruebas de Compatibilidad en Web y Móvil
    - ** Pruebas en navegadores **: Validar el funcionamiento en Chrome, Firefox, Safari y Edge para asegurar que los elementos gráficos y formularios sean consistentes.
- ** Pruebas en dispositivos móviles **: Evaluar la interfaz y experiencia de usuario en Android(Samsung, Xiaomi, Google Pixel) y iOS(iPhone, iPad).
- ** Pruebas de resolución y diseño responsivo **: Utilizar Google Lighthouse para evaluar la adaptación del diseño en diferentes tamaños de pantalla.

### 2. Uso de Emuladores y Pruebas en Dispositivos Reales
    - ** Emuladores **: Android Studio Emulator y Xcode Simulator para simular la aplicación en distintos modelos sin necesidad de hardware físico.
- ** Dispositivos reales **: Probar la aplicación en smartphones y tablets para detectar diferencias en rendimiento y comportamiento de los sensores(GPS, cámara).

### 3. Evaluación de Rendimiento y Consumo de Recursos
    - ** Tiempo de carga y respuesta **: Medir con herramientas como JMeter y Firebase Performance Monitoring.
- ** Consumo de batería y memoria **: Evaluar en dispositivos reales con Android Profiler y Xcode Instruments.

### 4. Pruebas Automatizadas con Appium y Selenium
    - ** Automatizar pruebas de UI en la web con Selenium ** para validar el flujo de reservas en diferentes navegadores.
- ** Automatizar pruebas móviles con Appium ** para simular toques, deslizamientos y validación de formularios.

Esta estrategia garantiza que la aplicación de reservas sea compatible, rápida y accesible en múltiples plataformas.Con pruebas en emuladores, dispositivos reales y herramientas de automatización, se mejora la experiencia del usuario y se previenen errores antes del lanzamiento.`
    },
    {
        "id": "prog22",
        "tema": 11,
        "title": "Ejercicio 22. Validación Multiplataforma de una Aplicación de Comercio Electrónico",
        "scenario": `## Contexto
Una empresa de comercio electrónico ha desarrollado una aplicación web y móvil para que los usuarios puedan:
    - Explorar y comprar productos desde cualquier dispositivo.
- Realizar pagos en línea con distintos métodos como PayPal, tarjetas de crédito y Google Pay.
- Acceder a su historial de compras y gestionar devoluciones.
- Recibir notificaciones sobre ofertas y promociones en tiempo real.

El equipo de desarrollo necesita definir una estrategia de validación multiplataforma para garantizar que la aplicación funcione correctamente en distintos dispositivos y navegadores.

## Tareas
    - ** Definir pruebas de compatibilidad ** en navegadores y sistemas operativos móviles.
- ** Establecer una estrategia para evaluar rendimiento y usabilidad ** en distintos dispositivos.
- ** Seleccionar herramientas para pruebas automatizadas ** en web y móvil.
- ** Garantizar la seguridad en las transacciones y almacenamiento de datos **.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Pruebas de Compatibilidad en Diferentes Dispositivos
    - ** Web **: Validación en Chrome, Firefox, Safari y Edge para asegurar que la tienda online se visualice correctamente.
- ** Móvil **: Pruebas en dispositivos con Android e iOS para verificar la navegación y experiencia del usuario en pantallas táctiles.
- ** Pruebas de accesibilidad **: Uso de Google Lighthouse y WAVE para evaluar que la interfaz sea accesible para personas con discapacidades visuales.

### 2. Evaluación de Rendimiento y Usabilidad
    - ** Tiempo de carga **: Medición con JMeter y Google PageSpeed Insights.
- ** Optimización de recursos **: Minimización de imágenes y reducción de consultas a la base de datos para mejorar el rendimiento.
- ** Pruebas con usuarios reales **: Evaluación de usabilidad mediante encuestas y pruebas A / B.

### 3. Pruebas Automatizadas en Web y Móvil
    - ** Selenium **: Para validar el flujo de compra en la tienda online en distintos navegadores.
- ** Appium **: Para simular interacciones de usuario en la aplicación móvil.

### 4. Seguridad en Transacciones
    - ** Encriptación de datos ** con HTTPS y TLS para proteger pagos en línea.
- ** Pruebas de seguridad ** con OWASP ZAP para detectar vulnerabilidades en autenticación y almacenamiento de información.

Implementar esta estrategia de validación permitirá garantizar la compatibilidad, rendimiento y seguridad de la tienda online, asegurando una experiencia de compra fluida y sin errores.`
    },
    {
        "id": "prog23",
        "tema": 12,
        "title": "Ejercicio 23. Empaquetado y Despliegue de una Aplicación Web en la Nube",
        "scenario": `## Contexto
Una empresa de tecnología ha desarrollado una aplicación web en Python con Flask que permite a los usuarios administrar sus tareas diarias.La aplicación incluye autenticación de usuarios, almacenamiento en bases de datos y una API REST para gestionar las tareas.

El equipo de desarrollo necesita preparar la aplicación para su distribución y despliegue en la nube, asegurando que sea fácil de instalar, escalar y actualizar.

## Tareas
    - ** Empaquetar la aplicación ** en un paquete Python utilizando setuptools y generar un ejecutable con PyInstaller.
- ** Configurar Docker ** para contenerizar la aplicación y facilitar su despliegue en cualquier entorno.
- ** Desplegar la aplicación ** en Heroku o AWS Elastic Beanstalk para que sea accesible desde internet.
- ** Gestionar las versiones del software ** usando GitFlow y crear una release documentada con un changelog en GitHub Releases.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Empaquetado de la Aplicación

Para distribuir la aplicación, se configura \`setup.py\` en la raíz del proyecto:

\`\`\`python
from setuptools import setup, find_packages

setup(
    name="gestor_tareas",
    version="1.0.0",
    packages=find_packages(),
    install_requires=["Flask", "SQLAlchemy"],
    entry_points={"console_scripts": ["gestor_tareas=app:main"]},
)
\`\`\`

Luego, se crea un ejecutable con PyInstaller:

\`\`\`bash
pyinstaller --onefile --name gestor_tareas app.py
\`\`\`

Esto genera un archivo ejecutable en la carpeta \`dist/\`.

### 2. Configuración de Docker

Se crea un \`Dockerfile\` para la aplicación:

\`\`\`dockerfile
FROM python:3.9

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]
\`\`\`

Para construir y ejecutar la imagen Docker:

\`\`\`bash
docker build -t gestor_tareas .
docker run -p 5000:5000 gestor_tareas
\`\`\`

### 3. Despliegue en la Nube (Heroku o AWS Elastic Beanstalk)

Para desplegar en Heroku:

\`\`\`bash
heroku login
heroku create gestor-tareas
git push heroku main
heroku open
\`\`\`

Para desplegar en AWS Elastic Beanstalk:

\`\`\`bash
eb init -p python-3.9 gestor-tareas
eb create gestor-tareas-env
\`\`\`

### 4. Gestión de Versiones y Releases

Se utiliza GitFlow para gestionar ramas:

\`\`\`bash
git flow init
git flow release start v1.0.0
git flow release finish v1.0.0
\`\`\`

Luego, se crea una release en GitHub Releases, adjuntando un changelog con las nuevas funcionalidades.

Siguiendo estos pasos, la aplicación estará lista para ser instalada, desplegada y mantenida en producción con una estrategia clara de empaquetado, despliegue y versionado.`
    },
    {
        "id": "prog24",
        "tema": 12,
        "title": "Ejercicio 24. Empaquetado y Despliegue de una API REST en AWS",
        "scenario": `## Contexto
Un equipo de desarrollo ha creado una API REST en Flask que permite a los usuarios gestionar sus notas personales. La API incluye autenticación con JWT, almacenamiento en PostgreSQL y endpoints para crear, editar y eliminar notas.

El equipo necesita empaquetar, desplegar y gestionar versiones de la API de manera eficiente, asegurando que sea escalable y fácil de mantener.

## Tareas
- **Empaquetar la API** como un paquete instalable en Python usando setuptools.
- **Configurar un contenedor Docker** para facilitar su despliegue en diferentes entornos.
- **Implementar el despliegue en AWS Elastic Beanstalk** con una base de datos PostgreSQL en RDS.
- **Gestionar el versionado** con SemVer y GitFlow, publicando releases en GitHub.`,
        "questions": [
            "Ver escenario completo."
        ],
        "answer": `### 1. Empaquetado con setuptools

Se crea un archivo \`setup.py\` para definir la instalación del paquete:

\`\`\`python
from setuptools import setup, find_packages

setup(
    name="api_notas",
    version="1.0.0",
    packages=find_packages(),
    install_requires=["Flask", "Flask-JWT-Extended", "SQLAlchemy"],
    entry_points={"console_scripts": ["api_notas=app:main"]},
)
\`\`\`

Luego, se genera el paquete:

\`\`\`bash
python setup.py sdist bdist_wheel
\`\`\`

### 2. Configuración de Docker

Se crea un \`Dockerfile\`:

\`\`\`dockerfile
FROM python:3.9

WORKDIR /app

COPY . /app

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]
\`\`\`

Se construye y ejecuta la imagen Docker:

\`\`\`bash
docker build -t api_notas .
docker run -p 5000:5000 api_notas
\`\`\`

### 3. Despliegue en AWS Elastic Beanstalk

\`\`\`bash
eb init -p python-3.9 api-notas
eb create api-notas-env
\`\`\`

Para configurar la base de datos en AWS RDS, se establece la conexión en \`config.py\` con las credenciales del servicio.

### 4. Gestión de Versiones y Releases

Se utiliza GitFlow para administrar versiones:

\`\`\`bash
git flow release start v1.0.0
git flow release finish v1.0.0
\`\`\`

Finalmente, se publica en GitHub Releases con un changelog documentado.

Esta estrategia garantiza que la API REST sea portátil, escalable y segura, facilitando su mantenimiento en AWS.`
    }
];