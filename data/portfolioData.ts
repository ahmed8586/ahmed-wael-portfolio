export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Automation' | 'Robotics' | 'Web/Data';
  description: string;
  image: string;
  images?: string[];
  technologies: string[];
  challenges: string;
  solution: string;
  results: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number; tag?: string }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Work' | 'Leadership';
  image?: string;
  images?: string[];
  points: string[];
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  hoursOrDuration: string;
  grade?: string;
  description: string;
  credentialId?: string;
  badge?: string;
}

export const PERSONAL_INFO = {
  name: "Ahmed Wael Farouk",
  shortName: "Ahmed Wael",
  initials: "AW",
  title: "Mechatronics Engineer | Automation Engineer | Electrical Engineer | AI & Machine Learning Enthusiast",
  headline: "Building Intelligent Automation Solutions",
  subheadline: "I design automation systems, AI-powered applications, embedded systems, and data-driven engineering solutions that bridge software, hardware, and industrial robotics.",
  location: "Cairo / Suez, Egypt",
  email: "ahmedamrwael@gmail.com",
  phone: "+20 100 071 9201",
  linkedin: "https://linkedin.com/in/ahmed-wael-farouk",
  github: "https://github.com/ahmed8586",
  university: "Badr University in Cairo (BUC)",
  degree: "Bachelor of Mechatronics Engineering Technology (MET)",
  graduationYear: "2026",
  graduationGrade: "Very Good (Graduation Project: A+)",
  avatar: "/images/avatar.jpg",
  cvPath: "/CV_Ahmed_Wael_Farouk.pdf"
};

export const ANIMATED_STATS = [
  { label: "Engineering Graduate", value: "BUC 2026", sub: "Mechatronics (A+ Project)" },
  { label: "Industrial Internships", value: "4+", sub: "Suez Steel, Ezzsteel, Engovation" },
  { label: "AI & ML Models", value: "92%", sub: "Classification Accuracy Achieved" },
  { label: "Leadership Roles", value: "2+", sub: "IEEE BUC Secretary & GDSC Lead" },
  { label: "Certificates Earned", value: "6", sub: "Automation, PLC, Motors & Fabrication" },
];

export const CORE_VALUES = [
  {
    title: "Innovation",
    desc: "Transforming theoretical mechatronic engineering and artificial intelligence into intelligent real-world hardware and software solutions.",
    icon: "Lightbulb"
  },
  {
    title: "Leadership",
    desc: "Guiding cross-functional engineering teams, organizing large-scale tech events, and managing student branch operations at IEEE & GDSC.",
    icon: "Users"
  },
  {
    title: "Continuous Learning",
    desc: "Relentlessly expanding knowledge across industrial PLC automation, deep learning architectures (CNN-LSTM, Autoencoders), and IoT robotics.",
    icon: "BookOpen"
  },
  {
    title: "Problem Solving",
    desc: "Rigorous analytical mindset to diagnose industrial electrical power systems, debug ladder logic, and solve complex control challenges.",
    icon: "Cpu"
  },
  {
    title: "Teamwork",
    desc: "Thriving in collaborative multidisciplinary environments where hardware designers, AI developers, and electrical engineers combine forces.",
    icon: "Handshake"
  }
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: "Automation Engineering",
    icon: "Bot",
    skills: [
      { name: "Siemens S7-300 / S7-400 PLC", level: 90, tag: "Certified" },
      { name: "Classic Control Systems", level: 95, tag: "HA Certified" },
      { name: "VFD & Motor Drive Programming", level: 88, tag: "HA Certified" },
      { name: "SCADA & Industrial HMI", level: 82 },
      { name: "Industrial Communication (Profibus, Modbus)", level: 85 },
      { name: "Sensors & Actuators Dosing Systems", level: 90 }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    skills: [
      { name: "Deep Learning (CNN-LSTM, Autoencoders)", level: 88 },
      { name: "Machine Learning (Random Forest, SVM)", level: 92 },
      { name: "TensorFlow / Keras & PyTorch", level: 85 },
      { name: "Data Analysis & Visualization (Pandas, NumPy)", level: 90 },
      { name: "Scikit-Learn & Feature Extraction", level: 88 },
      { name: "Power BI & Analytics Dashboards", level: 80 }
    ]
  },
  {
    title: "Embedded Systems & Robotics",
    icon: "Cpu",
    skills: [
      { name: "ESP32 & Arduino Development", level: 92 },
      { name: "STM32 Microcontrollers", level: 80 },
      { name: "IoT & Wireless Telemetry", level: 88 },
      { name: "Autonomous Navigation & Sensors", level: 85 },
      { name: "SolidWorks 3D Parametric Modeling", level: 90 },
      { name: "ANSYS HFSS Electromagnetics", level: 78 }
    ]
  },
  {
    title: "Software & Web Development",
    icon: "Code",
    skills: [
      { name: "Python (AI, Automation & Scripting)", level: 92 },
      { name: "C++ (Embedded Systems & Algorithms)", level: 85 },
      { name: "MATLAB & Simulink System Modeling", level: 88 },
      { name: "Next.js / React / TypeScript", level: 82 },
      { name: "Tailwind CSS & Web UI Design", level: 85 },
      { name: "SQL & Relational Databases", level: 80 }
    ]
  },
  {
    title: "Engineering Tools & Hardware",
    icon: "Wrench",
    skills: [
      { name: "Digital Fabrication (CNC, 3D Printing, Laser)", level: 88, tag: "MCIT FabLab" },
      { name: "Git / GitHub Version Control", level: 90 },
      { name: "Linux & Terminal CLI", level: 82 },
      { name: "NVIDIA Jetson Nano", level: 80 },
      { name: "AutoCAD & Electrical Schematics", level: 84 },
      { name: "OBD-II Automotive Diagnostics", level: 85 }
    ]
  },
  {
    title: "Soft Skills & Leadership",
    icon: "Award",
    skills: [
      { name: "Engineering Team Leadership", level: 95 },
      { name: "Technical Event Organization", level: 92 },
      { name: "Project Management & Coordination", level: 90 },
      { name: "Public Speaking & Presentation", level: 88 },
      { name: "Cross-Functional Collaboration", level: 94 }
    ]
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "raven-x",
    title: "RAVEN-X Autonomous Soil & Aquifer Rover",
    subtitle: "Graduation Project — Grade: A+ | Deep Learning & Autonomous Robotics",
    category: "Robotics",
    description: "A solar-powered autonomous rover designed for subsurface groundwater detection and agricultural soil stratigraphy analysis using dual-model deep learning (CNN-LSTM & Autoencoder).",
    image: "/images/raven_x.jpg",
    images: [
    
      "/images/raven_x_cad.jpg",
      "/images/raven_x_field.jpg",
      "/images/raven_x_cad2.jpg",
    ],
    technologies: ["Python", "TensorFlow", "CNN-LSTM", "SolidWorks", "MATLAB", "ANSYS HFSS", "ESP32", "Solar PV"],
    challenges: "Analyzing complex spatial-temporal soil data in real-time under field conditions while optimizing power consumption for extended autonomous field operation.",
    solution: "Developed a dual-model deep learning inference pipeline combining CNN-LSTM for soil classification and Autoencoder for real-time anomaly detection, powered by solar PV power management and ANSYS HFSS simulated subsurface sensors.",
    results: "Achieved A+ grade evaluation; successfully integrated 9-variable sensor suite measuring soil NPK, pH, moisture, temperature, and hazardous gas levels.",
    githubUrl: "https://github.com/ahmedwael/raven-x-rover",
    liveUrl: "https://raven-x-demo.vercel.app",
    featured: true
  },
  {
    id: "series-hybrid-vehicle",
    title: "Series Hybrid Electric Vehicle (SHEV) Powertrain Prototype",
    subtitle: "Automotive Mechatronics Project — Evaluation: 93% | Powertrains & Electrification",
    category: "Robotics",
    description: "An experimental Series Hybrid Electric Vehicle prototype featuring electromechanical powertrain decoupling, direct-drive dual 24V PMDC motors, onboard Mitsubishi engine generator, and Arduino Bluetooth PWM control.",
    image: "/images/series_hybrid_vehicle.jpg", 
     images: [
    
      "/images/series_hybrid_vehicle1.jpg",
      "/images/series_hybrid_vehicle5.jpg",
      "/images/series_hybrid_vehicle3.jpg",
      "/images/series_hybrid_vehicle4.jpg",
      "/images/series_hybrid_vehicle2.jpg",

    ],

    technologies: ["Arduino C++", "BTS7960 Motor Driver", "PMDC Motors", "Mitsubishi 1.3HP ICE", "Bluetooth Telemetry", "SolidWorks CAD", "PWM Speed Control"],
    challenges: "Physically decoupling the internal combustion engine from the driving wheels, managing PWM motor driver safety margins under 29.6A continuous current loads, and ensuring positive electrical energy generation balance.",
    solution: "Engineered a strictly sequential series hybrid energy routing where a steady-state 1.3 HP Mitsubishi gasoline engine powers an electrical generator (775.5W supply) to charge a 24V SLA battery bank and feed dual 250W PMDC motors (710.4W demand) via BTS7960 H-bridge drivers controlled wirelessly by Arduino.",
    results: "Achieved 93% evaluation score; demonstrated 6.95 km/h top speed, 1.73 m/s² standstill acceleration, positive energy generation balance, and complete elimination of mechanical gearbox and differential losses.",
    githubUrl: "https://github.com/ahmedwael/series-hybrid-vehicle",
    featured: true
  },
  {
    id: "soil-ai",
    title: "AI-Based Agricultural Soil Classification System",
    subtitle: "Deep Learning & Machine Learning | Agricultural Intelligence",
    category: "AI/ML",
    description: "An end-to-end soil analysis system using Random Forest and Support Vector Machines (SVM) algorithms to determine agricultural land suitability with high accuracy.",
    image: "/images/soil_ai.jpg",
     images: [
    
      "/images/soil_ai4.jpg",
      "/images/soil_ai5.jpg",
      "/images/soil_ai3.jpg",
    ],

    technologies: ["Python", "Scikit-Learn", "Random Forest", "SVM", "Pandas", "NumPy", "Streamlit Dashboard"],
    challenges: "Handling noisy multi-parameter soil sensor data (pH, moisture, NPK gradients) and extracting meaningful features for agricultural yield prediction.",
    solution: "Built a robust data preprocessing and feature extraction pipeline combined with ensemble learning models and an interactive web visualization dashboard.",
    results: "Achieved 92% classification accuracy across diverse soil samples and generated actionable crop suitability recommendations.",
    githubUrl: "https://github.com/ahmedwael/soil-classification-ai",
    liveUrl: "https://soil-ai-demo.vercel.app",
    featured: true
  },
  {
    id: "water-hyacinth-robot",
    title: "Avatar Water Hyacinth — Autonomous Aquatic Robot",
    subtitle: "Autonomous Waterway Cleanup Robotics",
    category: "Robotics",
    description: "An autonomous mobile aquatic robot engineered for cutting, collecting, and clearing invasive water hyacinth weeds in Egyptian waterways.",
    image: "/images/avatar22.jpg",
    images: [
    
      "/images/avatar4.jpg",
      "/images/avatar5.jpg",
      "/images/avatar3.jpg",
       "/images/avatar2.jpg",
    ],
    technologies: ["Arduino", "SolidWorks CAD", "Ultrasonic Sensors", "GPS Navigation", "Brushless Motors", "Bluetooth"],
    challenges: "Designing an efficient mechanical cutting mechanism that operates reliably in water environments while maintaining vessel buoyancy and obstacle avoidance.",
    solution: "Engineered a custom catamaran hull in SolidWorks with structural finite element analysis, integrated double-blade cutter head, and programmed autonomous GPS/ultrasonic waypoint navigation.",
    results: "Successfully demonstrated autonomous aquatic clearing of floating weeds with real-time telemetry monitoring.",
    githubUrl: "https://github.com/ahmedwael/water-hyacinth-robot",
    liveUrl: "https://hyacinth-robot.vercel.app",
    featured: true
  },
  {
    id: "smart-water-plant",
    title: "Smart Solar Water Plant System",
    subtitle: "IoT & Industrial Automation Control",
    category: "Automation",
    description: "An automated solar-assisted water treatment and distribution system featuring ESP32 IoT telemetry, remote SCADA monitoring, and predictive maintenance sensors.",
    image: "/images/farm soil_ai.jpg",
    images: [
      "/images/farm soil_ai4.jpg",
      "/images/farm soil_ai5.jpg",
      "/images/farm soil_ai3.jpg",    
      "/images/farm soil_ai6.jpg", 
    ],
    technologies: ["ESP32", "IoT", "Solar Energy", "Machine Learning", "MQTT", "Node-RED Dashboard"],
    challenges: "Ensuring zero-downtime water quality monitoring while operating on variable off-grid solar power.",
    solution: "Implemented low-power ESP32 microcontrollers with sleep cycles, real-time sensor calibration, and an online dashboard monitoring pH, turbidity, and tank levels.",
    results: "Reduced energy consumption by 35% and enabled automated alert triggers for filter replacement.",
    githubUrl: "https://github.com/ahmedwael/smart-water-plant",
    featured: true
  },
  {
    id: "engineering-exhibition",
    title: "Engineering Exhibition Platform",
    subtitle: "Web Application & Technical Showcase",
    category: "Web/Data",
    description: "A modern web platform developed to showcase university engineering graduation projects, student branch achievements, and technical event registrations.",
    image: "/images/engineering-exhibition.jpg",
       images: [
      "/images/engineering-exhibition1.jpg",
      "/images/engineering-exhibition2.jpg",
     
    ],

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    challenges: "Delivering an ultra-fast responsive design with rich project portfolios and interactive filtering for hundreds of attendees.",
    solution: "Built a Next.js App Router application with static site generation, dark glassmorphism aesthetic, and dynamic search filters.",
    results: "Hosted over 1,500 active exhibition visitors during the annual university engineering showcase.",
    githubUrl: "https://github.com/ahmedwael/engineering-exhibition",
    liveUrl: "https://eng-exhibition.vercel.app",
    featured: false
  },
 
  {
    id: "data-analysis-dashboard",
    title: "Industrial Performance Data Analytics Dashboard",
    subtitle: "Industrial IoT & Process Optimization",
    category: "Web/Data",
    description: "A comprehensive data visualization dashboard analyzing industrial rolling mill motor temperatures, power factor metrics, and plant throughput.",
    image: "/images/industrial_dashboard.jpg",
    images: [
      "/images/industrial_dashboard1.jpg",
      "/images/industrial_dashboard2.jpg",
      "/images/industrial_dashboard3.jpg",
      "/images/industrial_dashboard3.jpg"
    ],
    technologies: ["Python", "Pandas", "Power BI", "NumPy", "Matplotlib", "Seaborn"],
    challenges: "Synthesizing high-frequency industrial sensor telemetry from steel mill operations into actionable supervisory insights.",
    solution: "Processed time-series datasets of VFD current draws, transformer temperatures, and rolling stand loads to identify bottleneck patterns.",
    results: "Identified power factor correction opportunities and overload threshold alerts for plant maintenance.",
    githubUrl: "https://github.com/ahmedwael/industrial-data-dashboard",
    featured: false
  }
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "suez-steel",
    role: "Industrial Automation Intern",
    organization: "Suez Steel Company (SSC)",
    location: "Attaka Industrial Zone, Suez, Egypt",
    period: "Jul 2025 – Aug 2025",
    type: "Work",
    image: "/images/suez_steel.jpg",
    images: [
      "/images/suez_steel1.jpg",
      "/images/suez_steel2.jpg",
      "/images/suez_steel3.jpg",
      "/images/suez_steel4.jpg",
      "/images/suez_steel5.jpg",
      "/images/suez_steel6.jpg",
      "/images/suez_steel7.jpg", 
      "/images/suez_steel8.jpg",
      "/images/suez_steel9.jpg",

    ],
    points: [
      "Studied HV power distribution architecture: 220 kV national grid down-stepping via 210 MVA HV transformer (220/30 kV) through GIS switchgear to 20 MVA MV transformers (30/11 kV) and AIS switchgear.",
      "Observed Meltshop 1 (SMP1) operations: Electric Arc Furnace (EAF) hydraulic electrode positioning, ladle furnace heating, and Continuous Casting Machine (CCM) billet solidification.",
      "Analyzed Siemens Simatic S7-400 PLC-controlled additive trolley bunker system operating 10 material bunkers with encoder positioning and load cell dosing.",
      "Trained in Rolling Mill Plants (RMP1/2/3): wire rod and rebar hot rolling automation using Siemens S7-300/400 PLCs, Profibus/Ethernet, proximity sensors, encoders, HMDs, and VFDs.",
      "Studied power system protection: overcurrent relays, transformer differential protection, SF6 circuit breakers, and power factor correction (PFC) capacitor banks."
    ],
    tags: ["Siemens S7-400", "PLC", "HV Distribution", "VFD Motors", "Profibus", "EAF Steel Making"]
  },
  {
    id: "ezzsteel",
    role: "Electrical Department Intern",
    organization: "Ezzsteel (Egyptian Steel)",
    location: "Suez, Egypt",
    period: "Jun 2025 – Jul 2025",
    type: "Work",
    image: "/images/ezzsteel.jpg",
    images: [
      "/images/ezzsteel.jpg",
      "/images/ezzsteel1.jpg",
    ],
    points: [
      "Examined complete factory HV/MV power distribution chain from grid transformers to medium voltage switchgear and plant busbars.",
      "Inspected substation protection gear: overcurrent relays, differential protection, SF6 circuit breakers, surge arresters, CTs/VTs, and emergency UPS generators.",
      "Studied SCADA-monitored industrial control valves (flow, level, pressure) and power factor correction capacitor banks on the plant floor."
    ],
    tags: ["Power Systems", "SF6 Breakers", "SCADA", "Protection Relays", "Capacitor Banks"]
  },
  {
    id: "ha-consulting",
    role: "Industrial Automation & Drives Trainee",
    organization: "HA Consulting Group (Automation Solutions)",
    location: "Cairo, Egypt",
    period: "Jul 2025 – Sep 2025",
    type: "Work",
    image: "/images/ha_consulting.jpg",
    images: [
      "/images/ha_consulting1.jpg",
      "/images/ha_consulting.jpg",
      "/images/ha_consulting1.jpg",
      "/images/ha_consulting2.jpg",
      "/images/ha_consulting3.jpg",
      "/images/ha_consulting3.jpg"
    ],
    points: [
      "Completed 3-part intensive training series with Grade: Excellent across Classic Control, PLC Basic Programming, and Motor & Drive Systems.",
      "Assembled and wired industrial control panels featuring contactors, auxiliary relays, thermal overloads, timers, and star-delta motor starters.",
      "Programmed Siemens PLC ladder logic (IEC 61131-3) implementing TON/TOF timers, counters, I/O signal scaling, and safety interlocks.",
      "Configured industrial Variable Frequency Drives (VFDs): parameter tuning, V/f control, acceleration ramps, fault diagnosis, and Modbus communication."
    ],
    tags: ["Classic Control", "PLC Ladder Logic", "VFD Configuration", "Modbus RTU", "Motor Starters"]
  },
  {
    id: "engovation-mercedes",
    role: "Automotive Engineering Trainee",
    organization: "Engovation & Mercedes-Benz Workshop",
    location: "Cairo, Egypt",
    period: "Jul 2024 – Aug 2024",
    type: "Work",
    image: "/images/mercedes_workshop.jpg",
    images: [
      "/images/mercedes_workshop.jpg",
      
    ],
    points: [
      "Completed 30-hour certified training program recognized by the Egyptian Engineers Syndicate.",
      "Gained practical exposure at a professional Mercedes-Benz vehicle workshop performing OBD-II diagnostic scans, ECU sensor readings, and electrical wiring harness inspections.",
      "Studied automotive engine management systems, transmission drivetrains, ABS/ESP braking mechanisms, and hybrid powertrain electrification."
    ],
    tags: ["Automotive Diagnostics", "OBD-II", "ECU Systems", "Mercedes Workshop", "Vehicle Electrics"]
  },
  {
    id: "suez-petroleum",
    role: "Engineering Intern",
    organization: "Suez Petroleum Industry",
    location: "Suez, Egypt",
    period: "Jul 2024 – Aug 2024",
    type: "Work",
    image: "/images/suez_petroleum.jpg",
    images: [
      "/images/suez_petroleum.jpg"
    ],
    points: [
      "Assisted engineering team in daily operations, industrial equipment inspection, and process control documentation.",
      "Learned industrial best practices for process instrumentation, valve positioning, and field safety protocols."
    ],
    tags: ["Process Control", "Instrumentation", "Industrial Safety"]
  }
];

export const LEADERSHIP_EXPERIENCE: ExperienceItem[] = [
  {
    id: "ieee-secretary",
    role: "Secretary, Executive Committee (EXcom)",
    organization: "IEEE BUC Student Branch",
    location: "Cairo, Egypt",
    period: "2025 – Present",
    type: "Leadership",
    image: "/images/ieee_buc.jpg",
    images: [
      "/images/ieee_buc.jpg"
    ],
    points: [
      "Manage official documentation, meeting minutes, and executive communications for the entire IEEE BUC student branch.",
      "Coordinate between executive board leaders and general members, supporting event logistics, member engagement, and technical workshops.",
      "Co-organized university-wide engineering competitions and hackathons fostering technical innovation."
    ],
    tags: ["IEEE Leadership", "Executive Management", "Event Planning", "Technical Workshops"]
  },
  {
    id: "gdsc-lead",
    role: "Club Leader",
    organization: "Google Developer Student Club (GDSC) — BUC",
    location: "Cairo, Egypt",
    period: "2024 – 2025",
    type: "Leadership",
    image: "/images/gdsc_buc.jpg",
    images: [
      "/images/gdsc_buc.jpg"
    ],
    points: [
      "Led a active student community of 100+ members, organizing 10+ hands-on workshops in programming, AI, cloud computing, and emerging tech.",
      "Coordinated industry speakers, secured workshop logistics, and facilitated peer-to-peer coding sessions.",
      "Mentored junior engineering students in machine learning fundamentals and modern developer tools."
    ],
    tags: ["Google DSC Lead", "Community Building", "AI Workshops", "Mentorship"]
  },
  {
    id: "digital-fablab",
    role: "Digital Fabrication & Design Specialist",
    organization: "FabLab Creativa Innovation Hub (MCIT & IEEE BUC SB)",
    location: "Cairo, Egypt",
    period: "Nov 2025 – Dec 2025",
    type: "Leadership",
    image: "/images/fablab_mcit.jpg",
    images: [
      "/images/fablab_mcit.jpg"
    ],
    points: [
      "Participated in intensive 5-day Industry 4.0 digital fabrication workshop hosted by Egypt's Ministry of Communications and IT (MCIT).",
      "Hands-on operation of CNC routers, laser cutters, FDM 3D printers, slicer software optimization, and SolidWorks CAD capstone project execution."
    ],
    tags: ["Digital Fabrication", "Industry 4.0", "3D Printing", "CNC Machinery", "SolidWorks"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-classic-control",
    title: "Classic Control Systems (Grade: Excellent)",
    issuer: "HA Consulting Group (Automation Solutions)",
    date: "Aug 2025",
    hoursOrDuration: "3 Weeks",
    grade: "Excellent",
    description: "Industrial contactors, overload relays, DOL & star-delta motor starters, ladder schematic wiring, and control panel design.",
    badge: "Automation"
  },
  {
    id: "cert-plc-basic",
    title: "PLC Basic Programming (Grade: Excellent)",
    issuer: "HA Consulting Group (Automation Solutions)",
    date: "Sep 2025",
    hoursOrDuration: "3 Weeks",
    grade: "Excellent",
    description: "Siemens PLC hardware architecture, ladder logic (IEC 61131-3), TON/TOF timers, counters, data blocks, and safety interlocks.",
    badge: "PLC"
  },
  {
    id: "cert-motor-drive",
    title: "Electric Motor & Drive Programming (Grade: Excellent)",
    issuer: "HA Consulting Group (Automation Solutions)",
    date: "Sep 2025",
    hoursOrDuration: "2 Weeks",
    grade: "Excellent",
    description: "Three-phase induction motor theory, VFD drive parameter configuration, V/f control, acceleration ramps, and Modbus RTU communication.",
    badge: "VFD Drives"
  },
  {
    id: "cert-suez-steel",
    title: "Industrial Training – Electrical Maintenance",
    issuer: "Suez Steel Company (SSC), Attaka Industrial Zone",
    date: "Sep 2025",
    hoursOrDuration: "1 Month Apprenticeship",
    grade: "Apprenticeship Certificate",
    description: "High-voltage substation power distribution, Electric Arc Furnace automation, continuous casting machines, and rolling mill PLC systems.",
    badge: "Industrial"
  },
  {
    id: "cert-automotive",
    title: "Automotive Engineering Training Course",
    issuer: "Engovation & Mercedes-Benz Workshop (Syndicate Certified)",
    date: "Aug 2024",
    hoursOrDuration: "30 Training Hours",
    grade: "Syndicate Certified",
    description: "Vehicle electrical architecture, engine management units (ECUs), transmission drivetrains, and Mercedes-Benz OBD-II diagnostics.",
    badge: "Automotive"
  },
  {
    id: "cert-digital-fab",
    title: "Digital Fabrication & Engineering Design",
    issuer: "FabLab – Creativa Innovation Hub (MCIT & IEEE BUC SB)",
    date: "Dec 2025",
    hoursOrDuration: "5 Intensive Days",
    grade: "Completion Certificate",
    description: "CNC router operation, FDM 3D printing, slicer parameter configuration, laser cutting, and SolidWorks CAD capstone project.",
    badge: "FabLab"
  }
];

export const EDUCATION = {
  institution: "Badr University in Cairo (BUC)",
  faculty: "Faculty of Engineering",
  degree: "Bachelor of Mechatronics Engineering Technology (MET)",
  graduationDate: "June 2026",
  overallGrade: "Very Good",
  projectGrade: "A+ (RAVEN-X Subsurface Autonomous Rover)",
  location: "Cairo, Egypt",
  coursework: [
    "Industrial Automation & Control",
    "Siemens S7 PLC Programming",
    "Electrical Machines & Motor Drives",
    "Embedded Systems & IoT",
    "Artificial Intelligence & Machine Learning",
    "Deep Learning & Computer Vision",
    "Robotics & Autonomous Navigation",
    "SolidWorks Parametric CAD / CAM",
    "Power System Protection & High Voltage"
  ]
};
