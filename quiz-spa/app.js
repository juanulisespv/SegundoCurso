// Quiz SPA - Single Page Application
// All quiz logic and UI generation in one file

// Utility function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

class QuizSPA {
  constructor() {
    this.subjects = {
      hci: {
        name: 'HCI (Human-Computer Interaction)',
        color: '#6f42c1',
        icon: 'bi-display',
        basePath: '../contenidos/HCItests/hcijson/',
        themes: [] // Will be populated dynamically
      },
      programacion: {
        name: 'Programación',
        color: '#28a745', 
        icon: 'bi-code-slash',
        basePath: '../contenidos/programaciontests/programacionjson/',
        themes: [] // Will be populated dynamically
      }
    };
    
    // Current state
    this.currentView = 'home';
    this.currentSubject = null;
    this.currentTheme = null;
    this.quizData = null;
    
    // Quiz state
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.correctAnswers = 0;
    this.startTime = null;
    this.timerInterval = null;
    this.isCompleted = false;
    this.failedQuestions = [];
    
    // DOM elements
    this.mainContent = document.getElementById('main-content');
    this.navTitle = document.getElementById('nav-title');
    this.timerDisplay = document.getElementById('timer-display');
    this.progressBar = document.getElementById('progress-bar');
    
    this.init();
  }
  
  async init() {
    this.setupEventListeners();
    
    // Cargar datos embebidos si están disponibles
    QuizDataManager.loadEmbeddedData();
    
    await this.discoverThemes();
    
    // Check for URL parameters to auto-start quiz
    this.checkUrlParams();
  }
  
  checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    
    if (themeParam) {
      // Parse theme parameter (format: hci10, programacion5, etc.)
      const match = themeParam.match(/^(hci|programacion)(\d+)$/);
      
      if (match) {
        const subjectKey = match[1];
        const themeId = parseInt(match[2]);
        
        // Verify that the subject and theme exist
        const subject = this.subjects[subjectKey];
        if (subject && subject.themes.find(theme => theme.id === themeId)) {
          console.log(`Auto-starting quiz from URL: ${subjectKey} tema ${themeId}`);
          this.startQuiz(subjectKey, themeId);
          return;
        } else {
          console.warn(`Invalid theme parameter: ${themeParam}`);
        }
      } else {
        console.warn(`Invalid theme parameter format: ${themeParam}`);
      }
    }
    
    // Default behavior: show home
    this.showHome();
  }
  
  async discoverThemes() {
    console.log('Discovering available themes...');
    console.log('Environment:', QuizDataManager.isStaticEnvironment() ? 'Static (Vercel/GitHub)' : 'Local');
    
    for (const [subjectKey, subject] of Object.entries(this.subjects)) {
      // Try to get themes from embedded data first
      const embeddedThemes = QuizDataManager.getAvailableThemes(subjectKey, subject.basePath);
      
      if (embeddedThemes) {
        // Use embedded data (for static deployment)
        subject.themes = embeddedThemes;
        console.log(`Using embedded data for ${subjectKey}: ${embeddedThemes.length} themes`);
      } else {
        // Fallback to dynamic discovery (for local development)
        const themes = [];
        const promises = [];
        
        for (let i = 1; i <= 12; i++) {
          const jsonPath = `${subject.basePath}${i}.json`;
          
          promises.push(
            fetch(jsonPath, { method: 'HEAD' })
              .then(response => {
                if (response.ok) {
                  return {
                    id: i,
                    name: `Tema ${i}`,
                    jsonPath: jsonPath,
                    exists: true
                  };
                }
                return { id: i, exists: false };
              })
              .catch(() => ({ id: i, exists: false }))
          );
        }
        
        // Wait for all checks to complete
        const results = await Promise.all(promises);
        
        // Add only existing themes
        results.forEach(result => {
          if (result.exists) {
            themes.push({
              id: result.id,
              name: result.name,
              jsonPath: result.jsonPath
            });
          }
        });
        
        subject.themes = themes.sort((a, b) => a.id - b.id);
        console.log(`Discovered ${themes.length} themes for ${subjectKey} via dynamic detection`);
      }
    }
  }
  
  setupEventListeners() {
    // Navigation home
    document.getElementById('nav-home').addEventListener('click', (e) => {
      e.preventDefault();
      this.showHome();
    });
    
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', () => {
      this.toggleTheme();
    });
    
    // Prevent accidental page exit during quiz
    window.addEventListener('beforeunload', (e) => {
      if (this.currentView === 'quiz' && !this.isCompleted && this.currentQuestionIndex > 0) {
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que quieres salir? Perderás el progreso del quiz.';
        return e.returnValue;
      }
    });
  }
  
  showHome() {
    this.currentView = 'home';
    this.navTitle.textContent = 'Selecciona un tema';
    this.stopTimer();
    this.updateProgress(0);
    
    // Show loading if themes are not yet discovered
    if (Object.values(this.subjects).some(subject => subject.themes.length === 0)) {
      this.mainContent.innerHTML = `
        <div class="text-center py-5">
          <div class="loading-spinner mb-3"></div>
          <p class="lead">Descubriendo temas disponibles...</p>
        </div>
      `;
      return;
    }
    
    const homeHTML = `
      <div class="row">
        <div class="col-12 text-center mb-4">
          <h1 class="display-4 mb-3">Test</h1>
          <p class="lead text-muted">Selecciona una materia y tema para comenzar</p>
          
          <!-- Access to theory content -->
          <div class="my-4">
            <a href="../contenidos/index.html" class="btn btn-outline-primary me-2">
              <i class="bi bi-book me-2"></i>
              Contenido Teórico
            </a>
            <button class="btn btn-outline-secondary btn-sm" onclick="app.refreshThemes()">
              <i class="bi bi-arrow-clockwise me-2"></i>
              Actualizar Temas
            </button>
          </div>
        </div>
      </div>
      
      ${Object.entries(this.subjects).filter(([_, subject]) => subject.themes.length > 0).map(([key, subject]) => `
        <!-- ${subject.name} Section -->
        <div class="row mb-5">
          <div class="col-12">
            <div class="card subject-card subject-${key}" style="--subject-color: ${subject.color}">
              <div class="card-header text-center">
                <h3 class="mb-0 text-white">
                  <i class="${subject.icon} me-2"></i>
                  ${subject.name}
                </h3>
                <small class="text-white-50">${subject.themes.length} temas disponibles</small>
              </div>
              <div class="card-body bg-light">
                <div class="row g-2">
                  ${subject.themes.map(theme => `
                    <div class="col-lg-2 col-md-3 col-sm-4 col-6">
                      <div class="card border-0">
                        <div class="card-body p-2 text-center">
                          <h6 class="card-title small mb-2">Tema ${theme.id}</h6>
                          <div class="d-grid gap-1">
                            <button class="btn btn-sm theme-btn" 
                                    style="--subject-color: ${subject.color}"
                                    onclick="app.startQuiz('${key}', ${theme.id})"
                                    title="Quiz del Tema ${theme.id}">
                              <i class="bi bi-question-circle me-1"></i>Quiz
                            </button>
                            <a href="../contenidos/teoria/${key}/tema${theme.id}.html" 
                               class="btn btn-sm btn-outline-secondary"
                               title="Contenido Teórico del Tema ${theme.id}">
                              <i class="bi bi-book me-1"></i>Teoría
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
      
      <!-- Instructions -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                <i class="bi bi-info-circle me-2"></i>
                Instrucciones
              </h5>
              <div class="row">
                <div class="col-md-6">
                  <ul class="mb-0">
                    <li>Cada tema contiene 20 preguntas</li>
                    <li>Las preguntas se presentan una por una</li>
                    <li>Tienes 3 segundos para revisar la respuesta antes del avance automático</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="mb-0">
                    <li>Al final puedes repetir las preguntas que respondiste incorrectamente</li>
                    <li>El temporizador registra tu tiempo total</li>
                    <li>Los temas se detectan automáticamente</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Check if no themes were found
    const totalThemes = Object.values(this.subjects).reduce((total, subject) => total + subject.themes.length, 0);
    if (totalThemes === 0) {
      homeHTML += `
        <div class="row">
          <div class="col-12">
            <div class="alert alert-warning text-center" role="alert">
              <h4 class="alert-heading">
                <i class="bi bi-exclamation-triangle me-2"></i>
                No se encontraron temas
              </h4>
              <p class="mb-3">No se pudieron cargar los archivos JSON. Verifica que:</p>
              <ul class="text-start d-inline-block">
                <li>El servidor HTTP esté ejecutándose</li>
                <li>Los archivos JSON existan en las carpetas correspondientes</li>
                <li>Los permisos de archivo sean correctos</li>
              </ul>
              <hr>
              <button class="btn btn-warning" onclick="app.refreshThemes()">
                <i class="bi bi-arrow-clockwise me-2"></i>
                Intentar de Nuevo
              </button>
            </div>
          </div>
        </div>
      `;
    }
    
    this.mainContent.innerHTML = homeHTML;
  }
  
  async refreshThemes() {
    // Show loading
    this.mainContent.innerHTML = `
      <div class="text-center py-5">
        <div class="loading-spinner mb-3"></div>
        <p class="lead">Actualizando temas disponibles...</p>
      </div>
    `;
    
    // Reset themes
    Object.values(this.subjects).forEach(subject => {
      subject.themes = [];
    });
    
    // Rediscover themes
    await this.discoverThemes();
    
    // Show updated home
    this.showHome();
  }
  
  async startQuiz(subjectKey, themeId) {
    this.currentView = 'quiz';
    this.currentSubject = subjectKey;
    this.currentTheme = themeId;
    
    const subject = this.subjects[subjectKey];
    const theme = subject.themes[themeId - 1];
    
    this.navTitle.innerHTML = `<i class="${subject.icon} me-2"></i>${subject.name} - ${theme.name}`;
    
    // Show loading
    this.mainContent.innerHTML = `
      <div class="text-center py-5">
        <div class="loading-spinner mb-3"></div>
        <p class="lead">Cargando preguntas...</p>
      </div>
    `;
    
    try {
      // Load questions using the hybrid data manager
      this.quizData = await QuizDataManager.loadQuizData(subjectKey, themeId, subject.basePath);
      this.questions = this.quizData.questions;
      
      if (!this.questions || this.questions.length === 0) {
        throw new Error('No se encontraron preguntas en el archivo JSON');
      }
      
      // Shuffle questions for different order each time
      this.questions = shuffleArray(this.questions);
      
      console.log(`Cargadas ${this.questions.length} preguntas para ${this.quizData.subject} tema ${this.quizData.theme} (orden aleatorio)`);
      
      // Reset quiz state
      this.currentQuestionIndex = 0;
      this.userAnswers = [];
      this.correctAnswers = 0;
      this.failedQuestions = [];
      this.isCompleted = false;
      this.startTime = Date.now();
      
      this.startTimer();
      this.renderQuestion();
      
    } catch (error) {
      console.error('Error loading quiz:', error);
      this.showError('Error al cargar las preguntas. Asegúrate de que el servidor HTTP esté ejecutándose.');
    }
  }
  
  renderQuestion() {
    const question = this.questions[this.currentQuestionIndex];
    if (!question) return;
    
    const questionHTML = `
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card quiz-card question-card">
            <div class="card-header bg-transparent">
              <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Pregunta ${this.currentQuestionIndex + 1} de ${this.questions.length}</h5>
                <button class="btn btn-outline-secondary btn-sm" onclick="app.showHome()">
                  <i class="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            
            <div class="card-body p-4">
              <p class="lead mb-4">${question.question}</p>
              
              <div class="options-container">
                ${question.options.map(option => `
                  <button class="btn option-btn w-100" 
                          data-option="${option.key}">
                    <strong>${option.key}.</strong> ${option.text}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.mainContent.innerHTML = questionHTML;
    
    // Add event listeners to option buttons
    const optionButtons = this.mainContent.querySelectorAll('.option-btn');
    optionButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const selectedKey = e.target.getAttribute('data-option');
        this.selectAnswer(selectedKey, e.target);
      });
    });
    
    this.updateProgress();
  }
  
  selectAnswer(selectedKey, buttonElement) {
    const question = this.questions[this.currentQuestionIndex];
    const correctKey = question.answer;
    const isCorrect = selectedKey === correctKey;
    
    // Disable all option buttons
    const allOptions = this.mainContent.querySelectorAll('.option-btn');
    allOptions.forEach(btn => btn.disabled = true);
    
    // Apply feedback styling
    allOptions.forEach(btn => {
      const optionKey = btn.getAttribute('data-option');
      if (optionKey === correctKey) {
        btn.classList.add('correct');
      } else if (optionKey === selectedKey && !isCorrect) {
        btn.classList.add('incorrect');
      }
    });
    
    // Record answer
    this.userAnswers.push({
      questionIndex: this.currentQuestionIndex,
      selected: selectedKey,
      correct: correctKey,
      isCorrect: isCorrect
    });
    
    if (isCorrect) {
      this.correctAnswers++;
    } else {
      this.failedQuestions.push(question);
    }
    
    // Auto-advance after 3 seconds
    setTimeout(() => {
      this.nextQuestion();
    }, 3000);
  }
  
  nextQuestion() {
    this.currentQuestionIndex++;
    
    if (this.currentQuestionIndex >= this.questions.length) {
      this.finishQuiz();
    } else {
      this.renderQuestion();
    }
  }
  
  finishQuiz() {
    this.isCompleted = true;
    this.stopTimer();
    
    const totalTime = Date.now() - this.startTime;
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);
    const percentage = Math.round((this.correctAnswers / this.questions.length) * 100);
    
    let badgeClass = 'success';
    if (percentage < 60) badgeClass = 'danger';
    else if (percentage < 80) badgeClass = 'warning';
    
    const subject = this.subjects[this.currentSubject];
    
    const resultsHTML = `
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="card quiz-card text-center">
            <div class="card-header bg-transparent">
              <h3 class="mb-0">
                <i class="bi bi-check-circle me-2"></i>
                Quiz Completado
              </h3>
            </div>
            
            <div class="card-body p-5">
              <div class="row text-center mb-4">
                <div class="col-md-4">
                  <div class="score-display">${this.correctAnswers}</div>
                  <p class="text-muted">Respuestas Correctas</p>
                </div>
                <div class="col-md-4">
                  <div class="score-display">${this.questions.length}</div>
                  <p class="text-muted">Total Preguntas</p>
                </div>
                <div class="col-md-4">
                  <div class="score-display">${minutes}:${seconds.toString().padStart(2, '0')}</div>
                  <p class="text-muted">Tiempo Total</p>
                </div>
              </div>
              
              <div class="mb-4">
                <span class="badge score-badge bg-${badgeClass}">${percentage}% de aciertos</span>
              </div>
              
              <div class="d-grid gap-3">
                ${this.failedQuestions.length > 0 ? `
                  <button class="btn btn-warning btn-lg" data-action="repeat-failed">
                    <i class="bi bi-arrow-clockwise me-2"></i>
                    Repetir Preguntas Falladas (${this.failedQuestions.length})
                  </button>
                ` : ''}
                
                <button class="btn btn-primary btn-lg" data-action="restart">
                  <i class="bi bi-arrow-counterclockwise me-2"></i>
                  Repetir Quiz Completo
                </button>
                
                <button class="btn btn-outline-secondary btn-lg" onclick="app.showHome()">
                  <i class="bi bi-house me-2"></i>
                  Volver al Inicio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    this.mainContent.innerHTML = resultsHTML;
    
    // Add event listeners to action buttons
    const repeatButton = this.mainContent.querySelector('[data-action="repeat-failed"]');
    const restartButton = this.mainContent.querySelector('[data-action="restart"]');
    
    if (repeatButton) {
      repeatButton.addEventListener('click', () => this.repeatFailedQuestions());
    }
    
    if (restartButton) {
      restartButton.addEventListener('click', () => this.restartQuiz());
    }
    
    this.updateProgress(100);
  }
  
  repeatFailedQuestions() {
    if (this.failedQuestions.length === 0) return;
    
    // Shuffle failed questions for different order
    this.questions = shuffleArray([...this.failedQuestions]);
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.correctAnswers = 0;
    this.failedQuestions = [];
    this.isCompleted = false;
    this.startTime = Date.now();
    
    this.startTimer();
    this.renderQuestion();
  }
  
  restartQuiz() {
    // Shuffle questions again for different order
    this.questions = shuffleArray([...this.quizData.questions]);
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.correctAnswers = 0;
    this.failedQuestions = [];
    this.isCompleted = false;
    this.startTime = Date.now();
    
    this.startTimer();
    this.renderQuestion();
  }
  
  startTimer() {
    this.timerInterval = setInterval(() => {
      const elapsed = Date.now() - this.startTime;
      const minutes = Math.floor(elapsed / 60000);
      const seconds = Math.floor((elapsed % 60000) / 1000);
      this.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }
  
  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  
  updateProgress(percentage = null) {
    if (percentage !== null) {
      this.progressBar.style.width = `${percentage}%`;
      this.progressBar.setAttribute('aria-valuenow', percentage);
    } else if (this.questions.length > 0) {
      const progress = ((this.currentQuestionIndex) / this.questions.length) * 100;
      this.progressBar.style.width = `${progress}%`;
      this.progressBar.setAttribute('aria-valuenow', progress);
    }
  }
  
  toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-bs-theme', newTheme);
    
    const themeIcon = document.querySelector('#theme-toggle i');
    themeIcon.className = newTheme === 'dark' ? 'bi bi-moon-fill' : 'bi bi-sun-fill';
  }
  
  showError(message) {
    const errorHTML = `
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="alert alert-danger" role="alert">
            <h4 class="alert-heading">
              <i class="bi bi-exclamation-triangle me-2"></i>
              Error
            </h4>
            <p class="mb-3">${message}</p>
            <hr>
            <p class="mb-0">
              <button class="btn btn-outline-danger" onclick="app.showHome()">
                Volver al Inicio
              </button>
            </p>
          </div>
        </div>
      </div>
    `;
    
    this.mainContent.innerHTML = errorHTML;
  }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Quiz SPA...');
  window.app = new QuizSPA();
});
