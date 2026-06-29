const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
const languageToggle = document.querySelector("#languageToggle");
const body = document.body;

function closeNavigation() {
  if (!nav || !toggle) return;
  nav.classList.remove("open");
  nav.style.opacity = "";
  nav.style.pointerEvents = "";
  nav.style.transform = "";
  body.classList.remove("nav-open");
  toggle.setAttribute("aria-expanded", "false");
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    nav.style.opacity = isOpen ? "1" : "";
    nav.style.pointerEvents = isOpen ? "auto" : "";
    nav.style.transform = isOpen ? "translateY(0)" : "";
    body.classList.toggle("nav-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeNavigation();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
  });
}

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");
});

const arText = {
  "Dr. Musaad Alruwaili": "د. مساعد الرويلي",
  "About": "نبذة",
  "Research": "البحث العلمي",
  "Publications": "المنشورات",
  "Projects": "المشاريع",
  "Experience": "الخبرات",
  "Education": "التعليم",
  "Teaching": "التدريس",
  "Blog": "المدونة",
  "Media": "الإعلام",
  "Contact": "التواصل",
  "Smart Energy Systems | Renewable Energy | AI | IoT": "أنظمة الطاقة الذكية | الطاقة المتجددة | الذكاء الاصطناعي | إنترنت الأشياء",
  "PhD Electrical Engineer": "دكتوراه في الهندسة الكهربائية",
  "Research-to-Industry Systems Builder": "بناء أنظمة تربط البحث بالصناعة",
  "Turning rigorous engineering research into intelligent energy infrastructure.": "تحويل البحث الهندسي الرصين إلى بنية تحتية ذكية للطاقة.",
  "Industry Pilots": "مشاريع صناعية تجريبية",
  "Academic Research": "بحث أكاديمي",
  "AI + IoT Labs": "مختبرات الذكاء الاصطناعي وإنترنت الأشياء",
  "Secure Energy Networks": "شبكات طاقة آمنة",
  "I connect university research, field engineering, and intelligent infrastructure to help organizations design smarter grids, safer communication systems, and renewable-energy platforms that can move from prototype to practice.": "أربط بين البحث الجامعي والهندسة الميدانية والبنية التحتية الذكية لمساعدة المؤسسات على تصميم شبكات أكثر ذكاء، وأنظمة اتصال أكثر أمانا، ومنصات طاقة متجددة قابلة للانتقال من النموذج الأولي إلى التطبيق العملي.",
  "View Publications": "عرض المنشورات",
  "Collaborate": "تعاون معنا",
  "Electrical Engineering": "الهندسة الكهربائية",
  "Saudi Arabia": "المملكة العربية السعودية",
  "5G D2D Security": "أمن الاتصال المباشر في الجيل الخامس",
  "PhD research focus": "محور بحث الدكتوراه",
  "Energy Industry": "قطاع الطاقة",
  "SCADA, control systems, communications": "أنظمة سكادا، التحكم، والاتصالات",
  "Research Translation": "تحويل البحث إلى أثر",
  "Bridging academia and industry": "ربط البحث الأكاديمي بالتطبيق الصناعي",
  "Open Collaboration": "تعاون مفتوح",
  "Research, consulting, supervision, talks": "بحث، استشارات، إشراف، ومحاضرات",
  "A research profile built at the intersection of power, communications, and intelligent systems.": "مسيرة بحثية تجمع بين الطاقة والاتصالات والأنظمة الذكية.",
  "Dr. Musaad Alruwaili is an electrical engineering researcher whose work connects smart energy systems, secure device-to-device communication, IoT sensing, and renewable energy monitoring. He earned his PhD from the University of Toledo, with dissertation work on optimizing and securing 5G device-to-device communication.": "د. مساعد الرويلي باحث في الهندسة الكهربائية يربط عمله بين أنظمة الطاقة الذكية، والاتصال الآمن بين الأجهزة، واستشعار إنترنت الأشياء، ومراقبة الطاقة المتجددة. حصل على الدكتوراه من جامعة توليدو، وكانت أطروحته حول تحسين وتأمين الاتصال المباشر بين الأجهزة في شبكات الجيل الخامس.",
  "His academic path includes electrical engineering degrees from Gannon University and doctoral research at the University of Toledo. His professional journey spans Advance Energy Company, Fluor Arabia, Saudi Electricity Company, and earlier communications maintenance work, giving his research a practical foundation in control systems, SCADA, electrical project engineering, and field infrastructure.": "تشمل مسيرته الأكاديمية دراسة الهندسة الكهربائية في جامعة غانون والبحث الدكتورالي في جامعة توليدو. وتمتد خبرته المهنية عبر شركة أدفانس إنرجي، وفلور العربية، والشركة السعودية للكهرباء، وأعمال صيانة الاتصالات، مما يمنح أبحاثه أساسا عمليا في أنظمة التحكم وسكادا وهندسة المشاريع الكهربائية والبنية التحتية الميدانية.",
  "Core Expertise": "مجالات الخبرة",
  "Smart grids": "الشبكات الذكية",
  "Renewable energy integration": "تكامل الطاقة المتجددة",
  "AI for power systems": "الذكاء الاصطناعي لأنظمة القدرة",
  "IoT monitoring": "مراقبة إنترنت الأشياء",
  "Wireless sensor networks": "شبكات الاستشعار اللاسلكية",
  "5G D2D security": "أمن الاتصال المباشر في الجيل الخامس",
  "SCADA systems": "أنظمة سكادا",
  "Energy data analytics": "تحليلات بيانات الطاقة",
  "Research themes with direct value for modern energy infrastructure.": "محاور بحثية ذات قيمة مباشرة للبنية التحتية الحديثة للطاقة.",
  "Smart Grids": "الشبكات الذكية",
  "Renewable Energy": "الطاقة المتجددة",
  "AI Applications": "تطبيقات الذكاء الاصطناعي",
  "IoT Systems": "أنظمة إنترنت الأشياء",
  "Wireless Sensor Networks": "شبكات الاستشعار اللاسلكية",
  "Problem:": "المشكلة:",
  "Method:": "المنهجية:",
  "Impact:": "الأثر:",
  "Energy networks need resilience, visibility, and real-time decisions.": "تحتاج شبكات الطاقة إلى مرونة ووضوح تشغيلي وقرارات لحظية.",
  "Integrate sensing, communications, analytics, and automation.": "دمج الاستشعار والاتصالات والتحليلات والأتمتة.",
  "More reliable grid operation and better demand-side intelligence.": "تشغيل أكثر موثوقية للشبكات وذكاء أفضل في إدارة الطلب.",
  "Renewable sources introduce variability and monitoring challenges.": "تجلب مصادر الطاقة المتجددة تحديات في التذبذب والمراقبة.",
  "Combine remote measurements with control and forecasting workflows.": "دمج القياسات عن بعد مع التحكم والتنبؤ.",
  "Practical renewable integration for universities, utilities, and industry.": "تكامل عملي للطاقة المتجددة في الجامعات والمرافق والصناعة.",
  "Power systems produce more data than conventional tools can use.": "تنتج أنظمة القدرة بيانات أكثر مما تستطيع الأدوات التقليدية استثمارها.",
  "Apply machine learning to prediction, diagnostics, anomaly detection, and optimization.": "تطبيق التعلم الآلي في التنبؤ والتشخيص وكشف الشذوذ والتحسين.",
  "Better decisions across operation, maintenance, and planning.": "قرارات أفضل في التشغيل والصيانة والتخطيط.",
  "Distributed assets need affordable, persistent, low-maintenance visibility.": "تحتاج الأصول الموزعة إلى مراقبة مستمرة ومنخفضة التكلفة وقليلة الصيانة.",
  "Design connected sensor architectures for energy and industrial environments.": "تصميم معماريات استشعار متصلة لبيئات الطاقة والصناعة.",
  "Field-ready monitoring for laboratories, pilots, and remote assets.": "مراقبة جاهزة للتطبيق في المختبرات والمشاريع التجريبية والأصول البعيدة.",
  "Sensor networks must remain secure, efficient, and dependable.": "يجب أن تبقى شبكات الاستشعار آمنة وفعالة وموثوقة.",
  "Study secure communication, device coordination, and network-aware data collection.": "دراسة الاتصال الآمن وتنسيق الأجهزة وجمع البيانات بوعي شبكي.",
  "Stronger connected infrastructure for energy and smart-city systems.": "بنية متصلة أقوى للطاقة وأنظمة المدن الذكية.",
  "Peer-reviewed work in secure 5G and device-to-device communication.": "أبحاث محكمة في أمن شبكات الجيل الخامس والاتصال المباشر بين الأجهزة.",
  "Google Scholar": "Google Scholar",
  "ORCID": "ORCID",
  "IEEE Xplore": "IEEE Xplore",
  "LinkedIn": "LinkedIn",
  "IEEE Access": "IEEE Access",
  "Journal venue": "منصة النشر",
  "5G D2D": "اتصال D2D في الجيل الخامس",
  "Research focus": "محور بحثي",
  "Featured works": "أعمال مختارة",
  "Enhancing Security and Privacy in 5G Device-to-Device Communication: A Secure Gale-Shapley Algorithm Approach": "تعزيز الأمن والخصوصية في الاتصال المباشر بين الأجهزة في الجيل الخامس باستخدام خوارزمية Gale-Shapley آمنة",
  "Co-authored with Junghwan Kim and Jared Oluoch. The work proposes a security framework for 5G D2D communication that combines secure matching, privacy protection, AI-enhanced key generation, adaptive jamming, and MATLAB-based validation.": "بالاشتراك مع جونغوان كيم وجاريد أولووش. يقترح العمل إطارا أمنيا لاتصال D2D في الجيل الخامس يجمع بين المطابقة الآمنة وحماية الخصوصية وتوليد المفاتيح المدعوم بالذكاء الاصطناعي والتشويش التكيفي والتحقق باستخدام MATLAB.",
  "View on IEEE Xplore": "عرض في IEEE Xplore",
  "Optimizing 5G Power Allocation With Device-to-Device Communication: A Gale-Shapley Algorithm Approach": "تحسين تخصيص القدرة في الجيل الخامس مع الاتصال المباشر بين الأجهزة باستخدام خوارزمية Gale-Shapley",
  "Co-authored with Junghwan Kim and Jared Oluoch. The paper studies D2D power allocation and matching to improve 5G network efficiency, manage interference, and support reliable proximity-based communication.": "بالاشتراك مع جونغوان كيم وجاريد أولووش. تدرس الورقة تخصيص القدرة والمطابقة في اتصال D2D لتحسين كفاءة شبكات الجيل الخامس وإدارة التداخل ودعم الاتصال القريب الموثوق.",
  "University of Toledo dissertation | 2025": "أطروحة جامعة توليدو | 2025",
  "A Comprehensive Framework for Optimizing and Securing 5G Device-to-Device Communication": "إطار شامل لتحسين وتأمين الاتصال المباشر بين الأجهزة في شبكات الجيل الخامس",
  "Doctoral dissertation supervised at the University of Toledo, connecting optimization, security, privacy, and resource allocation for next-generation device-to-device communication.": "أطروحة دكتوراه في جامعة توليدو تربط بين التحسين والأمن والخصوصية وتخصيص الموارد للجيل القادم من الاتصال المباشر بين الأجهزة.",
  "View dissertation record": "عرض سجل الأطروحة",
  "CV and Documents": "السيرة الذاتية والوثائق",
  "Download the latest CV and access supporting academic materials.": "تحميل أحدث سيرة ذاتية والوصول إلى مواد أكاديمية داعمة.",
  "Download CV": "تحميل السيرة الذاتية",
  "PDF": "PDF",
  "Curriculum Vitae": "السيرة الذاتية",
  "A concise academic and professional overview covering research focus, publications, education, industry experience, and collaboration areas.": "ملخص أكاديمي ومهني موجز يشمل محور البحث والمنشورات والتعليم والخبرة الصناعية ومجالات التعاون.",
  "Download CV PDF": "تحميل السيرة الذاتية PDF",
  "Profiles": "الملفات البحثية",
  "Research Profiles": "الملفات البحثية",
  "Use the publication profiles for citation records, indexed articles, researcher identifiers, and current scholarly activity.": "استخدم الملفات البحثية لسجلات الاستشهادات والمقالات المفهرسة ومعرفات الباحث والنشاط العلمي الحالي.",
  "Request": "طلب",
  "Supporting Documents": "وثائق داعمة",
  "Certificates, project summaries, speaking materials, and additional academic documents can be shared for collaborations or institutional requests.": "يمكن مشاركة الشهادات وملخصات المشاريع ومواد المحاضرات والوثائق الأكاديمية الإضافية للتعاون أو الطلبات المؤسسية.",
  "Request Documents": "طلب الوثائق",
  "Applied projects for energy monitoring, sensing, and renewable integration.": "مشاريع تطبيقية في مراقبة الطاقة والاستشعار وتكامل الطاقة المتجددة.",
  "Industry experience across energy projects, control systems, SCADA, and communications infrastructure.": "خبرة صناعية في مشاريع الطاقة وأنظمة التحكم وسكادا والبنية التحتية للاتصالات.",
  "Nov. 2025 - Present | Turaif, Northern Borders, Saudi Arabia": "نوفمبر 2025 - حتى الآن | طريف، الحدود الشمالية، المملكة العربية السعودية",
  "Electrical Engineering - Advance Energy Company": "الهندسة الكهربائية - شركة أدفانس إنرجي",
  "Where:": "أين:",
  "What:": "ماذا:",
  "Value:": "القيمة:",
  "Wa'ad Al Shamal industrial energy environment, supporting electrical engineering work connected to large-scale power and infrastructure systems.": "بيئة واعد الشمال الصناعية للطاقة، مع دعم أعمال الهندسة الكهربائية المرتبطة بأنظمة القدرة والبنية التحتية واسعة النطاق.",
  "Applies electrical engineering, project coordination, field review, and system-readiness thinking to support reliable energy infrastructure. The role builds on prior control systems and SCADA experience in major industrial projects.": "تطبيق الهندسة الكهربائية وتنسيق المشاريع والمراجعة الميدانية والتفكير في جاهزية الأنظمة لدعم بنية تحتية موثوقة للطاقة. ويستند الدور إلى خبرة سابقة في أنظمة التحكم وسكادا ضمن مشاريع صناعية كبرى.",
  "Connects practical field engineering with smart energy, monitoring, and future-ready power systems.": "يربط الهندسة الميدانية العملية بالطاقة الذكية والمراقبة وأنظمة القدرة الجاهزة للمستقبل.",
  "Jun. 2015 - Mar. 2018 | Turaif, Saudi Arabia": "يونيو 2015 - مارس 2018 | طريف، المملكة العربية السعودية",
  "Control System Engineer - Fluor Arabia Ltd": "مهندس أنظمة تحكم - فلور العربية المحدودة",
  "Wa'ad Al Shamal Project, one of Saudi Arabia's major northern industrial development programs.": "مشروع وعد الشمال، أحد أكبر برامج التطوير الصناعي في شمال المملكة العربية السعودية.",
  "Reviewed functional design specifications for project packages, supported system installation implications, and worked with hardware/software requirements for control-system delivery.": "مراجعة مواصفات التصميم الوظيفي لحزم المشروع، ودعم متطلبات تركيب الأنظمة، والعمل على متطلبات الأجهزة والبرمجيات لتسليم أنظمة التحكم.",
  "Sep. 2006 - Sep. 2007 | Aljouf, Saudi Arabia": "سبتمبر 2006 - سبتمبر 2007 | الجوف، المملكة العربية السعودية",
  "SCADA Technician - Saudi Electricity Company": "فني سكادا - الشركة السعودية للكهرباء",
  "Saudi Electricity Company operations in Aljouf.": "عمليات الشركة السعودية للكهرباء في الجوف.",
  "Installed and calibrated ACSE and ABTS systems, supporting automatic changeover and bus-transfer functionality for electrical infrastructure.": "تركيب ومعايرة أنظمة ACSE وABTS لدعم التحويل التلقائي ووظائف نقل الأحمال في البنية الكهربائية.",
  "Mar. 2005 - Sep. 2006 | Aljouf, Saudi Arabia": "مارس 2005 - سبتمبر 2006 | الجوف، المملكة العربية السعودية",
  "Communication Technician - Aircraft Accessories and Components Company": "فني اتصالات - شركة إكسسوارات ومكونات الطائرات",
  "Communications service and technical maintenance environment.": "بيئة خدمات اتصالات وصيانة فنية.",
  "Operated and maintained communication service between shelters, repaired and maintained test equipment, and developed hands-on communications infrastructure discipline.": "تشغيل وصيانة خدمات الاتصال بين الملاجئ، وإصلاح وصيانة معدات الاختبار، وبناء خبرة عملية في بنية الاتصالات.",
  "Professional experience across energy projects, control systems, SCADA, telecommunications, and applied research.": "خبرة مهنية عبر مشاريع الطاقة وأنظمة التحكم وسكادا والاتصالات والبحث التطبيقي.",
  "Nov 2025 - Present | Turaif, Saudi Arabia": "نوفمبر 2025 - حتى الآن | طريف، المملكة العربية السعودية",
  "Project Engineer - Advance Energy Company": "مهندس مشاريع - شركة أدفانس إنرجي",
  "Currently serving as a Project Engineer at Advance Energy Company, contributing to engineering projects in the energy and industrial sector. This role builds on a strong background in electrical engineering, control systems, telecommunications, and project coordination.": "أعمل حاليا مهندس مشاريع في شركة أدفانس إنرجي، وأسهم في مشاريع هندسية ضمن قطاع الطاقة والصناعة. يستند هذا الدور إلى خلفية قوية في الهندسة الكهربائية وأنظمة التحكم والاتصالات وتنسيق المشاريع.",
  "The position reflects a continued commitment to applying practical engineering experience and advanced research knowledge to support reliable, efficient, and future-focused energy systems.": "يعكس هذا المنصب التزاما مستمرا بتطبيق الخبرة الهندسية العملية والمعرفة البحثية المتقدمة لدعم أنظمة طاقة موثوقة وفعالة وموجهة نحو المستقبل.",
  "Jun 2015 - Mar 2018 | Al Khobar and Wa'ad Al Shamal, Saudi Arabia": "يونيو 2015 - مارس 2018 | الخبر ووعد الشمال، المملكة العربية السعودية",
  "Control Systems Engineer - Fluor Arabia Limited Company": "مهندس أنظمة تحكم - شركة فلور العربية المحدودة",
  "Worked as a Control Systems Engineer on major industrial projects, supporting engineering review, system inspection, technical coordination, and project quality activities. Responsibilities included reviewing DCS and SIS functional design specifications, participating in IFAT, FAT, and SAT activities, supporting EPC contractors, and ensuring compliance with client standards, technical specifications, safety requirements, and project documentation.": "عملت مهندس أنظمة تحكم في مشاريع صناعية كبرى، ودعمت مراجعة الأعمال الهندسية وفحص الأنظمة والتنسيق الفني وأنشطة جودة المشروع. شملت المسؤوليات مراجعة مواصفات التصميم الوظيفي لأنظمة DCS وSIS، والمشاركة في أنشطة IFAT وFAT وSAT، ودعم مقاولي EPC، وضمان الالتزام بمعايير العميل والمواصفات الفنية ومتطلبات السلامة ووثائق المشروع.",
  "This experience strengthened expertise in industrial automation, control systems, system integration, technical documentation, and multidisciplinary coordination. The role also involved reviewing engineering documents such as datasheets, loop drawings, termination schedules, and P&IDs, as well as supporting technical clarification meetings, quality walk-downs, and mechanical completion activities.": "عززت هذه الخبرة المعرفة في الأتمتة الصناعية وأنظمة التحكم وتكامل الأنظمة والتوثيق الفني والتنسيق متعدد التخصصات. كما شمل الدور مراجعة وثائق هندسية مثل أوراق البيانات ورسومات الحلقات وجداول التوصيل ومخططات P&ID، إضافة إلى دعم اجتماعات التوضيح الفني وجولات الجودة وأنشطة الإكمال الميكانيكي.",
  "Sep 2006 - Sep 2007 | Al Jouf, Saudi Arabia": "سبتمبر 2006 - سبتمبر 2007 | الجوف، المملكة العربية السعودية",
  "Worked as a SCADA Technician supporting critical electricity infrastructure and control system operations. Responsibilities included installation, calibration, inspection, and testing of SCADA-related equipment, including automatic switching and bus transfer systems.": "عملت فني سكادا لدعم البنية التحتية الحيوية للكهرباء وعمليات أنظمة التحكم. شملت المسؤوليات تركيب ومعايرة وفحص واختبار المعدات المرتبطة بسكادا، بما في ذلك أنظمة التحويل التلقائي ونقل الأحمال.",
  "The role also involved monitoring data communication systems, responding to system emergencies, and following approved change-control procedures. This position provided valuable hands-on experience in power system monitoring, field instrumentation, data communication, and operational reliability within the electrical utility sector.": "تضمن الدور أيضا مراقبة أنظمة اتصال البيانات والاستجابة لحالات الطوارئ في النظام واتباع إجراءات التحكم في التغيير المعتمدة. وفر هذا المنصب خبرة عملية قيمة في مراقبة أنظمة القدرة وأجهزة القياس الميدانية واتصالات البيانات والموثوقية التشغيلية ضمن قطاع المرافق الكهربائية.",
  "Mar 2005 - Sep 2006 | Tabuk, Saudi Arabia": "مارس 2005 - سبتمبر 2006 | تبوك، المملكة العربية السعودية",
  "Served as a Communication Technician, supporting communication services and equipment maintenance in a technical operations environment. Responsibilities included operating and maintaining communication links, repairing and maintaining test equipment, assisting team members, and supporting daily technical tasks.": "عملت فني اتصالات، ودعمت خدمات الاتصالات وصيانة المعدات في بيئة عمليات فنية. شملت المسؤوليات تشغيل وصيانة روابط الاتصال، وإصلاح وصيانة معدات الاختبار، ومساعدة أعضاء الفريق، ودعم المهام الفنية اليومية.",
  "This early technical experience helped build a strong foundation in telecommunications, equipment troubleshooting, teamwork, and field-based engineering support.": "ساعدت هذه الخبرة التقنية المبكرة في بناء أساس قوي في الاتصالات واستكشاف أعطال المعدات والعمل الجماعي والدعم الهندسي الميداني.",
  "Research and Engineering Focus": "محور البحث والهندسة",
  "Connecting Industrial Systems With Advanced Research": "ربط الأنظمة الصناعية بالبحث المتقدم",
  "Musaad Alruwaili's professional background combines practical industrial engineering experience with advanced academic research in electrical engineering. His areas of focus include control systems, SCADA integration, industrial automation, telecommunications, 5G/6G communication systems, Device-to-Device communication, IoT systems, machine learning, and optimization for engineering applications.": "تجمع الخلفية المهنية لمساعد الرويلي بين الخبرة العملية في الهندسة الصناعية والبحث الأكاديمي المتقدم في الهندسة الكهربائية. وتشمل مجالات تركيزه أنظمة التحكم وتكامل سكادا والأتمتة الصناعية والاتصالات وأنظمة اتصالات الجيلين الخامس والسادس والاتصال المباشر بين الأجهزة وأنظمة إنترنت الأشياء والتعلم الآلي والتحسين للتطبيقات الهندسية.",
  "His work connects real-world industrial systems with advanced research in intelligent communication, automation, and secure next-generation networks.": "يربط عمله الأنظمة الصناعية الواقعية بالبحث المتقدم في الاتصالات الذكية والأتمتة والشبكات الآمنة من الجيل القادم.",
  "Academic training grounded in electrical engineering, doctoral research, and applied energy systems.": "تكوين أكاديمي قائم على الهندسة الكهربائية والبحث الدكتورالي وأنظمة الطاقة التطبيقية.",
  "University of Toledo | 2019 - 2025": "جامعة توليدو | 2019 - 2025",
  "PhD, Electrical and Electronics Engineering": "دكتوراه، الهندسة الكهربائية والإلكترونية",
  "Doctoral research focused on optimizing and securing 5G device-to-device communication, with emphasis on security, privacy, resource allocation, and intelligent connected systems.": "بحث دكتورالي ركز على تحسين وتأمين الاتصال المباشر بين الأجهزة في شبكات الجيل الخامس، مع التركيز على الأمن والخصوصية وتخصيص الموارد والأنظمة المتصلة الذكية.",
  "Doctoral Hooding Moment": "لحظة التتويج الأكاديمي للدكتوراه",
  "Graduation moment as my advisor hooded me during the doctoral ceremony.": "لحظة التخرج عندما قام مشرفي بتلبيسي وشاح الدكتوراه خلال حفل الدكتوراه.",
  "Your browser does not support the video tag.": "متصفحك لا يدعم تشغيل الفيديو.",
  "Gannon University | Erie, Pennsylvania": "جامعة غانون | إيري، بنسلفانيا",
  "Electrical Engineering Graduate Study and Applied Energy Research": "دراسات عليا في الهندسة الكهربائية وبحث تطبيقي في الطاقة",
  "Academic work connected to electrical engineering and EPA P3 renewable energy research, including the biomass energy-source generator and remote monitoring project.": "عمل أكاديمي مرتبط بالهندسة الكهربائية وبحث الطاقة المتجددة ضمن برنامج EPA P3، بما في ذلك مشروع مولد الطاقة من الكتلة الحيوية والمراقبة عن بعد.",
  "Kaplan International English | 2018 - 2019": "كابلان إنترناشونال إنجلش | 2018 - 2019",
  "GRE Preparation and Academic English": "التحضير لاختبار GRE واللغة الإنجليزية الأكاديمية",
  "Strengthened academic English, graduate preparation, and communication skills before doctoral study in the United States.": "تعزيز اللغة الإنجليزية الأكاديمية والاستعداد للدراسات العليا ومهارات التواصل قبل دراسة الدكتوراه في الولايات المتحدة.",
  "EPA P3 Phase I | Gannon University | SU836031": "برنامج EPA P3 المرحلة الأولى | جامعة غانون | SU836031",
  "Prototype of a Biomass Energy-Source Generator and Remote Control and Monitoring": "نموذج أولي لمولد طاقة من الكتلة الحيوية مع التحكم والمراقبة عن بعد",
  "EPA-funded student design project at Gannon University, with Dr. Musaad Alruwaili listed as co-investigator. The project developed a prototype concept for converting agricultural residue, especially grape pomace, into renewable fuel through torrefaction and pelletization, with a remote command, control, and monitoring center.": "مشروع تصميم طلابي ممول من وكالة حماية البيئة الأمريكية في جامعة غانون، وورد اسم د. مساعد الرويلي كباحث مشارك. طور المشروع مفهوما أوليا لتحويل المخلفات الزراعية، خصوصا تفل العنب، إلى وقود متجدد عبر التحميص الحراري والتكوير، مع مركز للتحكم والأوامر والمراقبة عن بعد.",
  "Representing Gannon University at the EPA National Sustainable Design Expo": "تمثيل جامعة غانون في المعرض الوطني للتصميم المستدام التابع لوكالة حماية البيئة الأمريكية",
  "In 2012, I had the opportunity to represent Gannon University at the U.S. Environmental Protection Agency's National Sustainable Design Expo in Washington, D.C. Our team participated in the EPA People, Prosperity and the Planet competition, known as P3, which brings university students together to present innovative engineering solutions for sustainability.": "في عام 2012، أتيحت لي فرصة تمثيل جامعة غانون في المعرض الوطني للتصميم المستدام التابع لوكالة حماية البيئة الأمريكية في واشنطن العاصمة. شارك فريقنا في مسابقة وكالة حماية البيئة الأمريكية الناس والازدهار والكوكب، المعروفة باسم P3، والتي تجمع طلاب الجامعات لعرض حلول هندسية مبتكرة للاستدامة.",
  "Our project was titled \"Prototype of a Biomass Energy-Source Generator and Remote Control and Monitoring.\" The main idea was to develop a renewable-energy prototype that could convert agricultural waste, especially grape pomace, into a useful solid fuel through torrefaction and pelletization.": "كان عنوان مشروعنا \"نموذج أولي لمولد طاقة من الكتلة الحيوية مع التحكم والمراقبة عن بعد\". كانت الفكرة الرئيسية تطوير نموذج أولي للطاقة المتجددة يمكنه تحويل المخلفات الزراعية، خصوصا تفل العنب، إلى وقود صلب مفيد من خلال التحميص الحراري والتكوير.",
  "My role in the project focused on the monitoring and control system. I was assigned to create a LabVIEW program to monitor and control the machine. The program was designed to support real-time observation, machine control, and data monitoring for the prototype system. This work helped connect the physical machine with a user-friendly control interface, making it easier to operate, test, and demonstrate the system.": "ركز دوري في المشروع على نظام المراقبة والتحكم. تم تكليفي بإنشاء برنامج LabVIEW لمراقبة الآلة والتحكم بها. صمم البرنامج لدعم الملاحظة الفورية، والتحكم في الآلة، ومراقبة البيانات لنظام النموذج الأولي. ساعد هذا العمل في ربط الآلة الفعلية بواجهة تحكم سهلة الاستخدام، مما جعل تشغيل النظام واختباره وعرضه أسهل.",
  "Participating in this national expo was an important experience in my engineering journey. I worked with a multidisciplinary team, helped present a renewable-energy technology to judges and visitors, and gained hands-on experience in automation, control systems, and sustainable engineering. Representing Gannon University in Washington, D.C. was a proud moment and a valuable step in my professional development.": "كانت المشاركة في هذا المعرض الوطني تجربة مهمة في مسيرتي الهندسية. عملت مع فريق متعدد التخصصات، وساهمت في تقديم تقنية للطاقة المتجددة إلى الحكام والزوار، واكتسبت خبرة عملية في الأتمتة وأنظمة التحكم والهندسة المستدامة. كان تمثيل جامعة غانون في واشنطن العاصمة لحظة فخر وخطوة قيمة في تطوري المهني.",
  "Assigned contribution:": "المساهمة المكلف بها:",
  "Created the LabVIEW monitoring and control program for the machine, connecting sensor readings, process status, and control commands into one operator-facing interface.": "إنشاء برنامج LabVIEW لمراقبة الآلة والتحكم بها، وربط قراءات الحساسات وحالة العملية وأوامر التحكم في واجهة واحدة موجهة للمشغل.",
  "LabVIEW monitoring dashboard": "لوحة مراقبة LabVIEW",
  "DAQ and control hardware": "أجهزة جمع البيانات والتحكم",
  "Co-investigator": "باحث مشارك",
  "LabVIEW": "LabVIEW",
  "Monitoring": "المراقبة",
  "Machine control": "التحكم بالآلة",
  "DAQ": "جمع البيانات",
  "Sensors": "الحساسات",
  "2011-2012": "2011-2012",
  "Biomass waste": "مخلفات الكتلة الحيوية",
  "Grape pomace": "تفل العنب",
  "Torrefaction": "التحميص الحراري",
  "Pelletization": "التكوير",
  "View EPA project record": "عرض سجل مشروع EPA",
  "View EPA investigator record": "عرض سجل الباحث في EPA",
  "Smart Sensor Networks": "شبكات الاستشعار الذكية",
  "Wireless and IoT sensing for distributed energy assets, condition monitoring, and real-time decision support.": "استشعار لاسلكي وإنترنت أشياء لأصول الطاقة الموزعة، ومراقبة الحالة، ودعم القرار اللحظي.",
  "AI-based Power Systems": "أنظمة قدرة قائمة على الذكاء الاصطناعي",
  "Machine learning concepts for forecasting, optimization, anomaly detection, and intelligent grid operation.": "مفاهيم التعلم الآلي للتنبؤ والتحسين وكشف الشذوذ وتشغيل الشبكات بذكاء.",
  "Renewable Energy Integration": "تكامل الطاقة المتجددة",
  "Monitoring and control strategies that help solar, biomass, and distributed generation operate with grid awareness.": "استراتيجيات مراقبة وتحكم تساعد الطاقة الشمسية والكتلة الحيوية والتوليد الموزع على العمل بوعي شبكي.",
  "Educating engineers who can design, analyze, and deploy future energy systems.": "تأهيل مهندسين قادرين على تصميم وتحليل ونشر أنظمة طاقة المستقبل.",
  "Course Areas": "مجالات المقررات",
  "Electrical engineering fundamentals": "أساسيات الهندسة الكهربائية",
  "Power systems and smart grids": "أنظمة القدرة والشبكات الذكية",
  "Control and SCADA systems": "أنظمة التحكم وسكادا",
  "Wireless communication and IoT": "الاتصالات اللاسلكية وإنترنت الأشياء",
  "Renewable energy technologies": "تقنيات الطاقة المتجددة",
  "Student Engagement": "إشراك الطلاب",
  "Research mentoring and graduate supervision": "الإرشاد البحثي والإشراف على الدراسات العليا",
  "Laboratory activities for sensing and control": "أنشطة مختبرية في الاستشعار والتحكم",
  "Industry-informed project design": "تصميم مشاريع مستند إلى خبرة صناعية",
  "Academic writing and publication preparation": "الكتابة الأكاديمية وإعداد النشر",
  "Short articles on smart energy, automation, research, and engineering growth.": "مقالات قصيرة عن الطاقة الذكية والأتمتة والبحث والنمو الهندسي.",
  "Suggest a Topic": "اقترح موضوعا",
  "Smart grids | 4 min read": "الشبكات الذكية | قراءة 4 دقائق",
  "How AI will change distribution grid operation": "كيف سيغير الذكاء الاصطناعي تشغيل شبكات التوزيع",
  "Distribution grids are becoming more dynamic as renewable generation, electric vehicles, and connected devices change the way power flows through local networks.": "أصبحت شبكات التوزيع أكثر ديناميكية مع تغير تدفق الطاقة في الشبكات المحلية بسبب التوليد المتجدد والمركبات الكهربائية والأجهزة المتصلة.",
  "AI can help operators forecast demand, detect anomalies, prioritize maintenance, and respond faster to changing conditions. The real value is not replacing engineers, but giving them clearer signals, better predictions, and more confidence when decisions must be made quickly.": "يمكن للذكاء الاصطناعي مساعدة المشغلين على توقع الطلب واكتشاف الحالات غير الطبيعية وترتيب أولويات الصيانة والاستجابة بسرعة أكبر للظروف المتغيرة. القيمة الحقيقية ليست في استبدال المهندسين، بل في منحهم إشارات أوضح وتوقعات أفضل وثقة أكبر عند الحاجة إلى قرارات سريعة.",
  "Renewable energy | 3 min read": "الطاقة المتجددة | قراءة 3 دقائق",
  "What renewable integration needs beyond generation capacity": "ما الذي يحتاجه تكامل الطاقة المتجددة بعد القدرة الإنتاجية",
  "Adding renewable generation is only one part of the energy transition. A reliable system also needs visibility, coordination, and control.": "إضافة التوليد المتجدد ليست إلا جزءا واحدا من تحول الطاقة. فالنظام الموثوق يحتاج أيضا إلى وضوح تشغيلي وتنسيق وتحكم.",
  "Solar, biomass, storage, and distributed generation perform better when sensors, data acquisition, communications, and automation are designed into the system from the beginning. Monitoring turns renewable assets from isolated equipment into manageable grid resources.": "تعمل الطاقة الشمسية والكتلة الحيوية والتخزين والتوليد الموزع بصورة أفضل عندما تصمم الحساسات وجمع البيانات والاتصالات والأتمتة ضمن النظام منذ البداية. فالمراقبة تحول الأصول المتجددة من معدات منفصلة إلى موارد شبكية قابلة للإدارة.",
  "Engineering journey | 4 min read": "المسيرة الهندسية | قراءة 4 دقائق",
  "From industry engineering to doctoral research": "من الهندسة الصناعية إلى البحث الدكتورالي",
  "Industry experience gives research a practical lens. Field work in control systems, SCADA, and communications makes technical problems feel concrete.": "تمنح الخبرة الصناعية البحث زاوية عملية. فالعمل الميداني في أنظمة التحكم وسكادا والاتصالات يجعل المشكلات التقنية أكثر واقعية ووضوحا.",
  "Doctoral research added another layer: formal modeling, validation, writing, and publication discipline. Moving between industry and academia strengthened my belief that useful engineering research should be rigorous, but also connected to systems that people operate, maintain, and improve.": "أضاف البحث الدكتورالي طبقة أخرى: النمذجة الرسمية والتحقق والكتابة والانضباط في النشر. عزز الانتقال بين الصناعة والأكاديميا قناعتي بأن البحث الهندسي المفيد يجب أن يكون صارما، وأن يبقى متصلا بالأنظمة التي يشغلها الناس ويصونونها ويطورونها.",
  "Automation | 3 min read": "الأتمتة | قراءة 3 دقائق",
  "Why LabVIEW still matters in engineering prototypes": "لماذا لا يزال LabVIEW مهما في النماذج الهندسية الأولية",
  "A prototype becomes more useful when people can observe it, control it, and understand its behavior in real time.": "يصبح النموذج الأولي أكثر فائدة عندما يستطيع الناس مراقبته والتحكم به وفهم سلوكه في الوقت الحقيقي.",
  "Graphical control environments such as LabVIEW help engineers connect sensors, data acquisition hardware, control logic, and operator interfaces quickly. For student projects and lab prototypes, that connection can make the difference between a machine that works and a system that can be tested, demonstrated, and improved.": "تساعد بيئات التحكم الرسومية مثل LabVIEW المهندسين على ربط الحساسات وأجهزة جمع البيانات ومنطق التحكم وواجهات التشغيل بسرعة. وفي مشاريع الطلاب والنماذج المختبرية، يمكن لهذا الربط أن يصنع الفرق بين آلة تعمل ونظام يمكن اختباره وعرضه وتحسينه.",
  "Media and Talks": "الإعلام والمحاضرات",
  "Conference presentations, workshops, invited talks, and awards.": "عروض المؤتمرات وورش العمل والمحاضرات المدعوة والجوائز.",
  "Conference presentations": "عروض المؤتمرات",
  "Secure communication and smart infrastructure": "الاتصال الآمن والبنية التحتية الذكية",
  "Talks on 5G, D2D communication, privacy, and intelligent connected systems.": "محاضرات حول الجيل الخامس والاتصال المباشر بين الأجهزة والخصوصية والأنظمة المتصلة الذكية.",
  "Workshops": "ورش العمل",
  "AI, IoT, and energy transition education": "التعليم في الذكاء الاصطناعي وإنترنت الأشياء وتحول الطاقة",
  "Professional sessions for students, researchers, and industry partners.": "جلسات مهنية للطلاب والباحثين وشركاء الصناعة.",
  "Awards": "الجوائز",
  "Academic and professional recognition": "تقدير أكاديمي ومهني",
  "A dedicated space for future honors, grants, invited panels, and public media mentions.": "مساحة مخصصة للتكريمات والمنح والندوات المدعوة والظهور الإعلامي المستقبلي.",
  "Collaborate on smart energy systems, AI, IoT, and renewable technology initiatives.": "تعاون في مبادرات أنظمة الطاقة الذكية والذكاء الاصطناعي وإنترنت الأشياء وتقنيات الطاقة المتجددة.",
  "Available for research collaborations, consulting, graduate supervision, industry partnerships, and speaking engagements.": "متاح للتعاون البحثي والاستشارات والإشراف على الدراسات العليا والشراكات الصناعية والمشاركات الخطابية.",
  "Research collaborations": "تعاون بحثي",
  "Consulting": "استشارات",
  "Graduate supervision": "إشراف دراسات عليا",
  "Industry partnerships": "شراكات صناعية",
  "Speaking engagements": "مشاركات خطابية",
  "Name": "الاسم",
  "Email": "البريد الإلكتروني",
  "Collaboration type": "نوع التعاون",
  "Research collaboration": "تعاون بحثي",
  "Industry partnership": "شراكة صناعية",
  "Speaking engagement": "مشاركة خطابية",
  "Message": "الرسالة",
  "Start a Conversation": "ابدأ التواصل"
};

const arPlaceholders = {
  "Your name": "اسمك",
  "you@example.com": "you@example.com",
  "Briefly describe the opportunity": "صف الفرصة أو فكرة التعاون بإيجاز"
};

const enText = Object.fromEntries(Object.entries(arText).map(([en, ar]) => [ar, en]));
const enPlaceholders = Object.fromEntries(Object.entries(arPlaceholders).map(([en, ar]) => [ar, en]));

function translateTextNodes(lang) {
  const toArabic = lang === "ar";
  const map = toArabic ? arText : enText;
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return NodeFilter.FILTER_REJECT;
      return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.nodeValue;
    const trimmed = original.trim();
    if (map[trimmed]) {
      node.nodeValue = original.replace(trimmed, map[trimmed]);
    }
  });
}

function translateAttributes(lang) {
  const toArabic = lang === "ar";
  const placeholderMap = toArabic ? arPlaceholders : enPlaceholders;
  document.querySelectorAll("[placeholder]").forEach((input) => {
    const value = input.getAttribute("placeholder");
    if (placeholderMap[value]) input.setAttribute("placeholder", placeholderMap[value]);
  });

  document.title = toArabic
    ? "د. مساعد الرويلي | أنظمة الطاقة الذكية والذكاء الاصطناعي وإنترنت الأشياء"
    : "Dr. Musaad Alruwaili | Smart Energy Systems, AI, IoT";

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute(
      "content",
      toArabic
        ? "المقر الرقمي لد. مساعد الرويلي، دكتوراه في الهندسة الكهربائية، في أنظمة الطاقة الذكية والطاقة المتجددة والذكاء الاصطناعي وإنترنت الأشياء."
        : "Digital headquarters for Dr. Musaad Alruwaili, PhD Electrical Engineer advancing smart energy systems through AI, IoT, renewable technologies, and secure connected infrastructure."
    );
  }
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("ar", lang === "ar");
  translateTextNodes(lang);
  translateAttributes(lang);
  if (languageToggle) {
    languageToggle.textContent = lang === "ar" ? "English" : "العربية";
    languageToggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
  }
  localStorage.setItem("siteLanguage", lang);
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = document.documentElement.lang === "ar" ? "en" : "ar";
    setLanguage(nextLanguage);
  });
}

setLanguage(localStorage.getItem("siteLanguage") || "en");

const revealTargets = [
  ...document.querySelectorAll(
    ".section, .update-widget, .research-grid article, .publication-list article, .document-card, .project-card, .experience-card, .education-card, .teaching-grid > div, .blog-grid article, .timeline article"
  )
];

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("visible"));
}

function revealVisibleElements() {
  const revealLine = window.innerHeight * 0.9;
  revealTargets.forEach((element) => {
    if (element.classList.contains("visible")) return;
    const rect = element.getBoundingClientRect();
    if (rect.top < revealLine && rect.bottom > 0) {
      element.classList.add("visible");
    }
  });
}

revealVisibleElements();
requestAnimationFrame(revealVisibleElements);
setTimeout(revealVisibleElements, 250);
window.addEventListener("scroll", revealVisibleElements, { passive: true });
window.addEventListener("resize", revealVisibleElements);
