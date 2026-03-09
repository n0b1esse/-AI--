/**
 * Архитектура AI-организаций — Инфографика. Логика и анимации.
 * Данные и детальный просмотр элементов из gf.html.
 */
(function() {
    'use strict';

    var systemData = [
        { id: 1, phaseId: 'foundations', phaseName: 'Основы', title: '1. Environment', name: 'Среда', desc: 'Любая система начинается со среды. Среда генерирует проблемы и возможности.', examples: ['market', 'society', 'technology', 'competition', 'regulation'] },
        { id: 2, phaseId: 'foundations', phaseName: 'Основы', title: '2. Problems', name: 'Проблемы', desc: 'Системы создаются для решения проблем, возникающих в среде.', examples: ['customer needs', 'inefficiencies', 'resource constraints', 'market demand'] },
        { id: 3, phaseId: 'foundations', phaseName: 'Основы', title: '3. Value Creation', name: 'Создание ценности', desc: 'Определение ценности как перехода от проблемы к решению.', examples: ['ill patient → healthy patient', 'problem → solution'], flow: 'problem → solution' },
        { id: 4, phaseId: 'foundations', phaseName: 'Основы', title: '4. Value Flow', name: 'Поток ценности', desc: 'Определение механизма того, как именно создаётся ценность.', examples: ['input', 'transformation', 'output'], flow: 'input ↓ transformation ↓ output' },
        { id: 5, phaseId: 'mechanics', phaseName: 'Механика', title: '5. Entities', name: 'Сущности', desc: 'Основные объекты системы, участвующие в потоке.', examples: ['customer', 'order', 'patient', 'product', 'shipment'] },
        { id: 6, phaseId: 'mechanics', phaseName: 'Механика', title: '6. States', name: 'Состояния', desc: 'Возможные состояния сущностей в любой момент времени.', examples: ['created', 'processing', 'completed', 'delivered'] },
        { id: 7, phaseId: 'mechanics', phaseName: 'Механика', title: '7. Transitions', name: 'Переходы', desc: 'Движение сущностей между состояниями.', examples: ['created → paid', 'paid → shipped'], flow: 'State A → State B' },
        { id: 8, phaseId: 'mechanics', phaseName: 'Механика', title: '8. Rules', name: 'Правила', desc: 'Логика системы, определяющая, когда происходят переходы.', examples: ['if payment_received → order.paid'] },
        { id: 9, phaseId: 'mechanics', phaseName: 'Механика', title: '9. Constraints', name: 'Ограничения', desc: 'Лимиты и рамки, в которых работает система.', examples: ['capacity', 'budget', 'time', 'resources'] },
        { id: 10, phaseId: 'operations', phaseName: 'Операции', title: '10. Processes', name: 'Процессы', desc: 'Переходы объединяются в логические цепочки — процессы.', examples: ['sales pipeline', 'treatment workflow', 'manufacturing process'] },
        { id: 11, phaseId: 'operations', phaseName: 'Операции', title: '11. Workflows', name: 'Рабочие процессы (Workflows)', desc: 'Процессы становятся управляемыми потоками задач.', examples: ['task routing', 'process pipelines', 'automation flows'] },
        { id: 12, phaseId: 'operations', phaseName: 'Операции', title: '12. Tasks', name: 'Задачи', desc: 'Каждый workflow разбивается на конкретные задачи.', examples: ['analyze', 'contact', 'produce', 'deliver'] },
        { id: 13, phaseId: 'operations', phaseName: 'Операции', title: '13. Resources', name: 'Ресурсы', desc: 'Что необходимо для выполнения поставленных задач.', examples: ['people', 'machines', 'capital', 'energy', 'technology'] },
        { id: 14, phaseId: 'operations', phaseName: 'Операции', title: '14. Roles', name: 'Роли', desc: 'Кто или что выполняет конкретные задачи.', examples: ['sales agent', 'doctor', 'operator', 'analyst'] },
        { id: 15, phaseId: 'operations', phaseName: 'Операции', title: '15. Tools', name: 'Инструменты', desc: 'Средства системы, помогающие ролям выполнять задачи.', examples: ['software', 'machines', 'databases', 'platforms'] },
        { id: 16, phaseId: 'operations', phaseName: 'Операции', title: '16. Data', name: 'Данные', desc: 'Информация, генерируемая и потребляемая системой.', examples: ['transactions', 'customer data', 'sensor data', 'logs'] },
        { id: 17, phaseId: 'operations', phaseName: 'Операции', title: '17. Metrics', name: 'Метрики', desc: 'Измерение эффективности работы системы.', examples: ['conversion rate', 'revenue', 'efficiency', 'waiting time'] },
        { id: 18, phaseId: 'operations', phaseName: 'Операции', title: '18. Feedback', name: 'Обратная связь', desc: 'Система получает сигналы о своей работе.', examples: ['performance signals', 'customer feedback', 'financial results'] },
        { id: 19, phaseId: 'evolution', phaseName: 'Эволюция', title: '19. Optimization', name: 'Оптимизация', desc: 'Начинается процесс улучшения на основе обратной связи.', examples: ['process improvement', 'experiments', 'data-driven decisions'] },
        { id: 20, phaseId: 'evolution', phaseName: 'Эволюция', title: '20. Automation', name: 'Автоматизация', desc: 'Рутинные процессы автоматизируются.', examples: ['workflow automation', 'software platforms', 'integrations'] },
        { id: 21, phaseId: 'evolution', phaseName: 'Эволюция', title: '21. Software Systems', name: 'Программные системы', desc: 'Создаётся комплексная цифровая инфраструктура.', examples: ['CRM', 'ERP', 'logistics systems', 'analytics platforms'] },
        { id: 22, phaseId: 'ai', phaseName: 'AI Архитектура', title: '22. Agent Architecture', name: 'Архитектура агентов', desc: 'В систему интегрируются искусственные агенты.', examples: ['planner', 'executor', 'verifier', 'analytics agent'] },
        { id: 23, phaseId: 'ai', phaseName: 'AI Архитектура', title: '23. Planner Agents', name: 'Агенты-планировщики', desc: 'Агенты, отвечающие за планирование задач.', examples: ['task planning', 'strategy generation', 'workflow creation'] },
        { id: 24, phaseId: 'ai', phaseName: 'AI Архитектура', title: '24. Execution Agents', name: 'Агенты-исполнители', desc: 'Агенты, выполняющие конкретные действия.', examples: ['API calls', 'tool usage', 'task execution'] },
        { id: 25, phaseId: 'ai', phaseName: 'AI Архитектура', title: '25. Verification Agents', name: 'Агенты-верификаторы', desc: 'Агенты, проверяющие результат работы исполнителей.', examples: ['quality control', 'result validation', 'error detection'] },
        { id: 26, phaseId: 'ai', phaseName: 'AI Архитектура', title: '26. Memory Systems', name: 'Системы памяти', desc: 'Инфраструктура для хранения знаний и контекста.', examples: ['vector memory', 'knowledge base', 'organizational memory'] },
        { id: 27, phaseId: 'ai', phaseName: 'AI Архитектура', title: '27. Decision Engine', name: 'Механизм принятия решений', desc: 'Центральный узел, где AI принимает решения на основе данных.', examples: ['state analysis', 'goal evaluation', 'action selection'] },
        { id: 28, phaseId: 'ai', phaseName: 'AI Архитектура', title: '28. Goal Management', name: 'Управление целями', desc: 'Настройка системы на достижение конкретных показателей.', examples: ['revenue growth', 'efficiency', 'service quality'] },
        { id: 29, phaseId: 'autonomy', phaseName: 'Автономия', title: '29. AI Operating System', name: 'AI Операционная система', desc: 'Все элементы объединяются в единую управляющую среду.', examples: ['agent orchestration', 'process automation', 'decision systems'] },
        { id: 30, phaseId: 'autonomy', phaseName: 'Автономия', title: '30. Autonomous Org.', name: 'Автономная организация', desc: 'Система становится способной работать самостоятельно.', examples: ['observe', 'analyze', 'decide', 'act', 'learn'], flow: 'observe → analyze → decide → act → learn' },
        { id: 31, phaseId: 'autonomy', phaseName: 'Автономия', title: '31. Network of AI Systems', name: 'Сеть AI-систем', desc: 'Взаимодействие нескольких автономных систем между собой.', examples: ['platform ecosystems', 'AI networks', 'digital economies'] },
        { id: 32, phaseId: 'autonomy', phaseName: 'Автономия', title: '32. Collective Intelligence', name: 'Коллективный интеллект', desc: 'Появление распределённого интеллекта высшего порядка.', examples: ['multi-agent collaboration', 'market-scale AI systems'] }
    ];

    function evolutionHeight(index) {
        if (index < 9) return 10 + (index * 2);
        if (index < 18) return 28 + ((index - 9) * 3);
        if (index < 21) return 55 + ((index - 18) * 5);
        return 70 + Math.pow(index - 20, 1.5) * 2;
    }

    var currentStepId = null;
    var phases = document.querySelectorAll('.phase');
    var phaseHeaders = document.querySelectorAll('.phase-header');
    var backToTop = document.getElementById('back-to-top');
    var btnExpandAll = document.getElementById('btn-expand-all');
    var btnCollapseAll = document.getElementById('btn-collapse-all');
    var detailPlaceholder = document.getElementById('detail-placeholder');
    var detailContent = document.getElementById('detail-content');
    var btnPrev = document.getElementById('btn-prev');
    var btnNext = document.getElementById('btn-next');

    function selectStep(id) {
        currentStepId = id;
        var stepData = systemData[id - 1];
        if (!stepData) return;

        document.querySelectorAll('.step').forEach(function(el) {
            el.classList.remove('active');
            if (parseInt(el.getAttribute('data-step-id'), 10) === id) {
                el.classList.add('active');
            }
        });

        document.querySelectorAll('.evolution-bar').forEach(function(el, i) {
            el.classList.toggle('active', i === id - 1);
        });

        if (detailPlaceholder) detailPlaceholder.classList.add('hidden');
        if (detailContent) detailContent.classList.remove('hidden');

        document.getElementById('detail-phase').textContent = stepData.phaseName;
        document.getElementById('detail-title').textContent = stepData.title;
        document.getElementById('detail-number').textContent = '#' + stepData.id;
        document.getElementById('detail-desc').textContent = stepData.desc;

        var examplesContainer = document.getElementById('detail-examples');
        var examplesTitle = document.getElementById('examples-title');
        examplesContainer.innerHTML = '';
        if (stepData.examples && stepData.examples.length > 0) {
            examplesTitle.classList.remove('hidden');
            stepData.examples.forEach(function(ex) {
                var span = document.createElement('span');
                span.className = 'tag-pill';
                span.textContent = ex;
                examplesContainer.appendChild(span);
            });
        } else {
            examplesTitle.classList.add('hidden');
        }

        var flowContainer = document.getElementById('detail-flow');
        if (stepData.flow) {
            flowContainer.classList.remove('hidden');
            document.getElementById('detail-flow-text').textContent = stepData.flow;
        } else {
            flowContainer.classList.add('hidden');
        }

        if (btnPrev) btnPrev.disabled = id === 1;
        if (btnNext) btnNext.disabled = id === systemData.length;
    }

    function initEvolutionChart() {
        var container = document.getElementById('evolution-chart');
        if (!container) return;
        var maxVal = 0;
        for (var i = 0; i < systemData.length; i++) {
            var v = evolutionHeight(i);
            if (v > maxVal) maxVal = v;
        }
        systemData.forEach(function(s, index) {
            var bar = document.createElement('div');
            bar.className = 'evolution-bar';
            bar.setAttribute('data-step-id', s.id);
            bar.style.height = (evolutionHeight(index) / maxVal * 100) + '%';
            bar.title = s.title + ' — ' + s.phaseName;
            bar.addEventListener('click', function() {
                selectStep(s.id);
            });
            container.appendChild(bar);
        });
    }

    document.querySelectorAll('.step').forEach(function(stepEl) {
        stepEl.addEventListener('click', function() {
            var id = parseInt(stepEl.getAttribute('data-step-id'), 10);
            if (id) selectStep(id);
        });
    });

    if (btnPrev) {
        btnPrev.addEventListener('click', function() {
            if (currentStepId > 1) selectStep(currentStepId - 1);
        });
    }
    if (btnNext) {
        btnNext.addEventListener('click', function() {
            if (currentStepId < systemData.length) selectStep(currentStepId + 1);
        });
    }

    function animateStepsIn(phase) {
        var steps = phase.querySelectorAll('.step');
        steps.forEach(function(step, i) {
            step.classList.remove('animate-in');
            step.offsetHeight;
            step.style.animationDelay = (i * 0.04) + 's';
            step.classList.add('animate-in');
        });
    }

    phaseHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            var phase = header.closest('.phase');
            var wasCollapsed = phase.classList.contains('collapsed');
            phase.classList.toggle('collapsed');
            if (wasCollapsed) animateStepsIn(phase);
        });
    });

    if (btnExpandAll) {
        btnExpandAll.addEventListener('click', function() {
            phases.forEach(function(phase) {
                phase.classList.remove('collapsed');
                animateStepsIn(phase);
            });
        });
    }
    if (btnCollapseAll) {
        btnCollapseAll.addEventListener('click', function() {
            phases.forEach(function(phase) {
                phase.classList.add('collapsed');
            });
        });
    }

    phases.forEach(function(phase, i) {
        if (i >= 2) phase.classList.add('collapsed');
    });

    function onScroll() {
        if (backToTop) {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    var sections = document.querySelectorAll('section, .hero');
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

    sections.forEach(function(section) {
        observer.observe(section);
    });

    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('revealed');
    var firstSection = document.querySelector('section');
    if (firstSection) {
        setTimeout(function() { firstSection.classList.add('revealed'); }, 150);
    }

    initEvolutionChart();
})();
