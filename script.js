// Script for Exact Replica Portfolio Page with Floating Project Brief Modals

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. COMPREHENSIVE PROJECT DATABASE (From "info for portfolio" overviews)
    // ==========================================================================
    const PROJECTS_DATA = {
        'dynamic-loss': {
            title: 'Dynamic Homoscedastic Multi-Task Loss Weighting',
            category: 'AI / ML Research & PyTorch',
            tagline: 'Architectural refinement for the Brain-Environment Cross Attention (BECA) framework at VIGIL Lab, IIT Hyderabad.',
            summary: 'An architectural refinement for the Brain-Environment Cross Attention (BECA) framework. This project introduces Dynamic Homoscedastic Multi-Task Loss Weighting (Kendall et al., CVPR 2018) to dynamically learn task-uncertainty parameters during backpropagation. It eliminates manual hyperparameter tuning, automatically balances task gradients across multi-site fMRI datasets, and improves model generalization for disease classification, sex classification, and age regression tasks.',
            screenshots: [],
            techStack: {
                'Framework': ['PyTorch', 'Python 3', 'CUDA Acceleration'],
                'Domain': ['Brain Connectome (fMRI)', 'Graph Neural Networks', 'Neuroimaging AI'],
                'Optimization': ['Multi-Task Learning', 'Homoscedastic Uncertainty', 'Dynamic Gradient Balancing']
            },
            features: [
                {
                    title: 'Dynamic Gradient Balancing',
                    desc: 'Assigns a learnable noise variance parameter to each task, dynamically weighting losses based on task uncertainty during backpropagation.',
                    icon: 'fa-scale-balanced'
                },
                {
                    title: 'Zero Manual Tuning',
                    desc: 'Completely eliminates heuristic static weight tuning and trial-and-error grid searches across multi-dataset pretraining scripts.',
                    icon: 'fa-sliders'
                },
                {
                    title: 'Improved Generalization',
                    desc: 'Prevents high-magnitude regression loss from dominating gradients and suppressing disease classification performance.',
                    icon: 'fa-brain'
                },
                {
                    title: 'Low Effort & High Reliability',
                    desc: 'Implemented with minimal, surgical code changes (under 25 lines) and zero computational latency overhead during inference.',
                    icon: 'fa-bolt'
                }
            ],
            contributions: [
                'Identified and diagnosed gradient dominance issues caused by static manual loss weighting in the existing BECA connectome repository.',
                'Formulated and implemented a dynamic homoscedastic multi-task objective function in PyTorch.',
                'Designed a mathematical solution that adapts to dataset heterogeneity (varying noise levels across ADNI, PPMI, ABIDE, HCPA).',
                'Authored a comprehensive research proposal detailing the mathematical formulation, loss weighting intuition, and empirical benefits.'
            ],
            metrics: [
                { val: 'IIT Hyderabad', label: 'VIGIL Lab Research' },
                { val: 'Zero Latency', label: 'Inference Overhead' },
                { val: 'Multi-Site fMRI', label: 'ADNI, PPMI, ABIDE, HCPA' },
                { val: '< 25 Lines', label: 'Surgical PyTorch Code' }
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/AP24110010250/Dynamic-Homoscedastic-Multi-Task-Loss-Weighting.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'rbw-ecommerce': {
            title: 'Rajyalaxmi Binding Works (RBW) — Wholesale E-Commerce Platform',
            category: 'Full-Stack B2B E-Commerce & Payments',
            tagline: 'Production-grade wholesale wedding invitations & cards e-commerce platform serving real customers.',
            summary: 'Rajyalaxmi Binding Works (RBW) is a production-grade, full-stack B2B wholesale e-commerce platform built for a real business that sells wedding invitations, cards, and binding products. The platform features a complete shopping workflow — product catalog, cart, Razorpay payment integration, order tracking, push notifications, and a comprehensive admin dashboard. This is a real-world, deployed application serving actual customers.',
            screenshots: [
                { url: 'info for portfolio/rbw-website/01_homepage_hero.png', caption: 'Homepage hero with promotional banners and call-to-action buttons' },
                { url: 'info for portfolio/rbw-website/02_homepage_content.png', caption: 'Featured product categories (Wedding Invitations, Cards, Binding Products)' },
                { url: 'info for portfolio/rbw-website/03_homepage_content_2.png', caption: 'Customer testimonials section and new arrival announcements feed' },
                { url: 'info for portfolio/rbw-website/04_shop_page.png', caption: 'Wholesale product catalog with category filters and dynamic search' },
                { url: 'info for portfolio/rbw-website/05_shop_page_2.png', caption: 'Product catalog grid with responsive layout and live stock badges' },
                { url: 'info for portfolio/rbw-website/06_product_details.png', caption: 'Product details page with Cloudinary imagery, pricing tiers, and cart actions' },
                { url: 'info for portfolio/rbw-website/07_contact_page.png', caption: 'Wholesale customer inquiry and contact form' },
                { url: 'info for portfolio/rbw-website/08_login_page.png', caption: 'Secure JWT authentication with OTP-based password recovery' }
            ],
            techStack: {
                'Frontend': ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'QRCode.react', 'Lucide Icons'],
                'Backend': ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Bcrypt'],
                'Payments': ['Razorpay SDK', 'HMAC SHA256 Verification'],
                'Media & Cloud': ['Cloudinary CDN', 'Vercel', 'PDFKit (Server Invoicing)', 'Web Push (VAPID)'],
                'Security': ['Helmet', 'express-rate-limit', 'mongo-sanitize']
            },
            features: [
                {
                    title: 'B2B Wholesale Catalog',
                    desc: 'Multi-category filtering, instant search, and bulk order quantity adjustments tailored for wholesale purchasing.',
                    icon: 'fa-boxes-stacked'
                },
                {
                    title: 'Razorpay Payment Gateway',
                    desc: 'End-to-end checkout with order generation and cryptographic HMAC SHA256 signature verification.',
                    icon: 'fa-credit-card'
                },
                {
                    title: 'Real-Time Web Push Alerts',
                    desc: 'Browser service worker integration with VAPID keys notifying customers in real-time when orders change status.',
                    icon: 'fa-bell'
                },
                {
                    title: 'Dynamic PDF Invoicing & QR',
                    desc: 'Server-side PDF invoice generation using PDFKit with scannable QR verification codes.',
                    icon: 'fa-file-pdf'
                },
                {
                    title: 'Full-Featured Admin Dashboard',
                    desc: 'Comprehensive dashboard for catalog CRUD, Cloudinary uploads, order status updates, and subscriber announcements.',
                    icon: 'fa-gauge-high'
                },
                {
                    title: 'Enterprise Security Hardening',
                    desc: 'Hardened HTTP headers via Helmet, API rate limiting against brute force, and mongo-sanitize against NoSQL injection.',
                    icon: 'fa-shield-halved'
                }
            ],
            contributions: [
                'Designed and developed a complete B2B wholesale platform from scratch across frontend, backend, and deployment.',
                'Integrated Razorpay payment gateway with cryptographic signature verification for secure monetary transactions.',
                'Engineered a real-time Web Push notification system using VAPID keys and Service Workers for automated order tracking.',
                'Implemented automated PDF invoice generation server-side using PDFKit and dynamic QR code generation.',
                'Set up an optimized Cloudinary media pipeline for scalable, high-resolution product imagery.',
                'Deployed frontend on Vercel and backend with cloud-hosted MongoDB database.'
            ],
            metrics: [
                { val: '14+ Pages', label: 'Full Store & Admin' },
                { val: '8 API Groups', label: 'Modular REST API' },
                { val: 'Razorpay HMAC', label: 'Cryptographic Security' },
                { val: 'Real Clients', label: 'Active Wholesale Store' }
            ],
            links: [
                { label: 'Live Website', url: 'https://rbwfrontend.vercel.app/', type: 'live', icon: 'fa-solid fa-arrow-up-right-from-square' },
                { label: 'Frontend Repo', url: 'https://github.com/rajyalaxmiidsolutions/rbwfrontend.git', type: 'code', icon: 'fa-brands fa-github' },
                { label: 'Backend Repo', url: 'https://github.com/rajyalaxmiidsolutions/rbwbackend.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'mern-news': {
            title: 'MERN Stack News Application',
            category: 'Full-Stack MERN Application',
            tagline: 'Real-time news platform featuring live India headlines, JWT auth, and bookmarking.',
            summary: 'A full-stack, responsive news platform built with the MERN stack (MongoDB, Express, React, Node.js). It features a dynamic article feed, live India headlines via NewsData.io, user and admin authentication, and a "Watch Later" saving functionality.',
            screenshots: [],
            techStack: {
                'Frontend': ['React.js', 'CSS3 (Custom Theme)', 'Axios', 'Responsive Grid'],
                'Backend': ['Node.js', 'Express.js', 'RESTful API'],
                'Database': ['MongoDB', 'Mongoose ODM'],
                'Auth & Security': ['JWT (JSON Web Tokens)', 'Bcrypt Password Hashing', 'RBAC'],
                'External API': ['NewsData.io API', 'SMTP Nodemailer']
            },
            features: [
                {
                    title: 'Live News Feed',
                    desc: 'Dynamic article feed with category filtering, keyword search, and graceful local fallback if external APIs are unreachable.',
                    icon: 'fa-newspaper'
                },
                {
                    title: 'Real-Time Headlines Integration',
                    desc: 'Direct integration with NewsData.io for streaming live national and international breaking news headlines.',
                    icon: 'fa-rss'
                },
                {
                    title: 'Role-Based Authentication',
                    desc: 'Secure JWT user sessions with role distinction between general readers and authorized news publishers.',
                    icon: 'fa-user-lock'
                },
                {
                    title: 'Watch Later Bookmarking',
                    desc: 'Authenticated readers can save stories to their personal reading list with single-click bookmarking.',
                    icon: 'fa-bookmark'
                },
                {
                    title: 'Admin Publishing Studio',
                    desc: 'Dedicated publisher interface for admins to compose, edit, categorize, and push stories directly to MongoDB.',
                    icon: 'fa-pen-to-square'
                },
                {
                    title: 'Account Recovery Flow',
                    desc: 'Password recovery mechanism with secure token generation and optional SMTP email dispatch.',
                    icon: 'fa-envelope-open-text'
                }
            ],
            contributions: [
                'Architected a complete MERN stack application with clean MVC separation and REST API design.',
                'Implemented secure JWT-based authentication with role-based access control (Admin vs. User).',
                'Integrated NewsData.io third-party API with robust error handling and database caching.',
                'Built an accessible, responsive React frontend designed for distraction-free reading.',
                'Created database seeding scripts for rapid local environment initialization.'
            ],
            metrics: [
                { val: 'MERN Stack', label: 'Full Stack Architecture' },
                { val: 'NewsData.io', label: 'Live Headline Feeds' },
                { val: 'JWT & RBAC', label: 'Role-Based Access' },
                { val: 'Watch Later', label: 'Personalized Bookmarks' }
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/AP24110010250/mern-stack-news-application.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'inventory-sales-cli': {
            title: 'Inventory & Sales Management System (CLI)',
            category: 'Systems & Python CLI Tool',
            tagline: 'Terminal-based business operating system with automated restock forecasting algorithms.',
            summary: 'The Inventory and Sales Management System is a robust, terminal-based Python application designed to streamline business operations. It tracks inventory levels, processes sales transactions, and features a unique "Restock Prediction" module to forecast when products will run out. This CLI tool provides an efficient, distraction-free environment for managing small business stock data.',
            screenshots: [], // Screenshots removed as requested
            techStack: {
                'Language': ['Python 3'],
                'Interface': ['Command Line Interface (CLI)', 'Formatted Tabulated Output'],
                'Storage': ['Local Persistent Storage (JSON / CSV)'],
                'Data Logic': ['Predictive Velocity Algorithms', 'Core Python Data Structures']
            },
            features: [
                {
                    title: 'Live Inventory Tracking',
                    desc: 'Monitor stock counts in real-time with automatic alerts whenever items fall below critical reorder thresholds.',
                    icon: 'fa-boxes-stacked'
                },
                {
                    title: 'Automated Sales Deductions',
                    desc: 'Process customer sales transactions and automatically calculate prices, totals, and deduct sold stock quantities.',
                    icon: 'fa-cash-register'
                },
                {
                    title: 'Intelligent Restock Forecasting',
                    desc: 'Analyzes historical sales velocity and consumption rates to predict the exact number of days until stockouts.',
                    icon: 'fa-chart-line'
                },
                {
                    title: 'Reorder Quantity Recommender',
                    desc: 'Recommends optimized batch purchase sizes based on lead times and projected customer demand.',
                    icon: 'fa-truck-ramp-box'
                },
                {
                    title: 'Persistent Data Integrity',
                    desc: 'Guarantees seamless data preservation between sessions using structured JSON/CSV serialization.',
                    icon: 'fa-hard-drive'
                },
                {
                    title: 'Distraction-Free Terminal UI',
                    desc: 'Blazing fast, 100% keyboard-navigated workflow with formatted tables and defensive input validation.',
                    icon: 'fa-terminal'
                }
            ],
            contributions: [
                'Built a fully functional CLI business operating system using Python 3 and standard libraries.',
                'Designed and coded a custom mathematical forecasting algorithm for inventory depletion prediction.',
                'Implemented persistent data storage mechanisms allowing systems to maintain state across reboots.',
                'Engineered modular code separating inventory tracking, sales processing, and prediction logic.'
            ],
            metrics: [
                { val: '3 Core Modules', label: 'Stock, Sales, Prediction' },
                { val: 'Terminal Native', label: '100% Keyboard Driven' },
                { val: 'Predictive Logic', label: 'Automated Stockout Alert' },
                { val: 'Zero Lag', label: 'Instant CLI Execution' }
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/AP24110010250/inventory-and-sales-management-system.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'cpp-auth-system': {
            title: 'Secure CLI Authentication System (C++)',
            category: 'Systems, C++ & Cybersecurity',
            tagline: 'Robust terminal-based user authentication engine implementing file handling and input sanitization.',
            summary: 'Secure CLI Authentication System is a lightweight, terminal-based user authentication application built in C++. It simulates a real-world authentication workflow, featuring account creation, secure login, password management, and account deletion. Data is persistently stored using a flat-file database approach, making it an excellent demonstration of foundational security concepts and file I/O operations in C++.',
            screenshots: [], // Screenshots removed as requested
            techStack: {
                'Language': ['C++ (C++17)', 'Standard Template Library (STL)'],
                'Storage': ['Flat-File Database (`users.db`)', 'File Streams (std::fstream)'],
                'Security': ['Input Sanitization', 'String Obfuscation', 'Buffer Overflow Defense'],
                'Design': ['Modular OOP Architecture', 'Header / Source Separation']
            },
            features: [
                {
                    title: 'Account Registration Engine',
                    desc: 'Registers new users with strict uniqueness verification to prevent username collisions.',
                    icon: 'fa-user-plus'
                },
                {
                    title: 'Persistent Flat-File Storage',
                    desc: 'Saves credentials to a local flat-file database (users.db) with structured file stream serialization.',
                    icon: 'fa-database'
                },
                {
                    title: 'Secure Authentication & Sessions',
                    desc: 'Validates login credentials against stored records and initiates authenticated user sessions.',
                    icon: 'fa-key'
                },
                {
                    title: 'Password Management',
                    desc: 'Allows authenticated users to securely update their passwords with confirmation verification.',
                    icon: 'fa-lock'
                },
                {
                    title: 'Clean Account Removal',
                    desc: 'Safely scrubs user credentials and references from the persistent database file upon account deletion.',
                    icon: 'fa-user-xmark'
                },
                {
                    title: 'Crash-Proof Error Handling',
                    desc: 'Comprehensive defensive input validation preventing infinite loops and bad input crashes.',
                    icon: 'fa-shield-halved'
                }
            ],
            contributions: [
                'Developed a complete terminal application using modern C++ and the Standard Template Library (STL).',
                'Implemented custom file stream I/O handling to reliably create, read, update, and delete user records.',
                'Designed a modular codebase separating authentication, password changes, and account deletion into distinct modules.',
                'Engineered defensive input sanitizers preventing application crashes caused by unexpected character sequences.'
            ],
            metrics: [
                { val: '100% C++ STL', label: 'Zero External Frameworks' },
                { val: 'Full CRUD', label: 'Create, Read, Update, Delete' },
                { val: 'Modular Design', label: 'Separated Headers & Sources' },
                { val: 'Crash-Resistant', label: 'Defensive Input Guards' }
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/AP24110010250/authentication-system.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'esona-ai': {
            title: 'Esona AI — The Sound of Understanding',
            category: 'AI / Voice Emotion Analysis & Wellness',
            tagline: 'AI-powered voice emotion analyzer, personalized mood companion, and conversational wellness therapist.',
            summary: 'Esona AI is an AI-powered emotional wellness web application that acts as a personal mental health companion. Users can record their voice or upload audio files, and Esona analyzes the tone, pitch, and energy to generate personalized mood reports, calming suggestions, and music recommendations. It also includes a fully functional AI chatbot powered by OpenAI for empathetic conversations.',
            screenshots: [], // Screenshots removed as requested
            techStack: {
                'Frontend': ['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide React'],
                'Backend & APIs': ['Node.js', 'Express.js Proxy Server', 'OpenAI GPT API', 'YouTube Data API v3'],
                'Audio Engine': ['Web Audio API (MediaRecorder)', 'Browser Voice Processing'],
                'Database & Storage': ['Supabase (PostgreSQL + Auth + Storage)']
            },
            features: [
                {
                    title: 'Browser-Based Voice Recording',
                    desc: 'Real-time microphone audio capture using the HTML5 MediaRecorder API with pre-recorded audio upload options.',
                    icon: 'fa-microphone'
                },
                {
                    title: 'AI Speech Emotion Analysis',
                    desc: 'Extracts acoustic and verbal emotion indicators to deliver structured mood scores, energy levels, and analytical insights.',
                    icon: 'fa-brain'
                },
                {
                    title: 'Empathetic AI Companion Chat',
                    desc: 'OpenAI GPT integration equipped with empathetic therapist system prompts and safety guardrails.',
                    icon: 'fa-comments'
                },
                {
                    title: 'Mood-Tailored Music Engine',
                    desc: 'YouTube Data API v3 integration dynamically streaming curated calming and uplifting audio tracks.',
                    icon: 'fa-music'
                },
                {
                    title: 'Interactive Wellness Exercises',
                    desc: 'Guided breathing pacing, gratitude journaling prompts, and somatic relaxation micro-activities.',
                    icon: 'fa-heart-pulse'
                },
                {
                    title: 'Historical Mood Tracking',
                    desc: 'Chronological timeline of past recordings stored securely in Supabase PostgreSQL for mental wellness monitoring.',
                    icon: 'fa-chart-simple'
                }
            ],
            contributions: [
                'Built a full-stack AI wellness application using React, TypeScript, and Supabase cloud infrastructure.',
                'Integrated OpenAI GPT API through a secure Node.js proxy server with empathetic personality conditioning.',
                'Implemented in-browser voice recording and audio upload processing via the MediaRecorder API.',
                'Created a multi-faceted wellness recommendation engine connected to the YouTube Data API.',
                'Configured Supabase PostgreSQL database tables with Row Level Security for private mood histories.'
            ],
            metrics: [
                { val: '7 Page Views', label: 'Full Wellness Suite' },
                { val: 'OpenAI GPT', label: 'Empathetic AI Engine' },
                { val: 'Web Audio API', label: 'In-Browser Speech' },
                { val: 'Supabase DB', label: 'Real-Time Cloud Storage' }
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/AP24110010250/esona-ai.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'jambavan': {
            title: 'Jambavan — Lost Skill Reviver',
            category: 'Generative AI & Mythological Web App',
            tagline: 'Mythology-inspired AI mentor delivering structured 7-day revival plans via Groq LLaMA 3.3 70B.',
            summary: 'Jambavan (named after the mythological bear king who reminded Hanuman of his forgotten powers) is an AI-powered web application that helps users revive skills they once learned but abandoned over time. Users describe their forgotten skill, how long it\'s been, and why they want to regain it — and Jambavan generates a personalized, emotionally motivating 7-day revival plan using Groq\'s large language models. The interface features a dark, warm, mythological aesthetic with glassmorphism cards and animated progress tracking.',
            screenshots: [
                { url: 'info for portfolio/jambavan/01_input_form.jpg', caption: 'Dark glassmorphism input form with custom animated dropdowns and glowing action button' },
                { url: 'info for portfolio/jambavan/02_revival_plan.jpg', caption: 'AI-generated 7-day revival plan with animated glowing Gada (mace) progress milestones' }
            ],
            techStack: {
                'AI Model': ['Groq API', 'LLaMA 3.3 70B Versatile Model'],
                'Frontend': ['Pure HTML5', 'Custom CSS3 (Glassmorphism)', 'Vanilla JavaScript'],
                'Backend': ['Python', 'Flask', 'python-dotenv'],
                'Deployment': ['Render Cloud Platform']
            },
            features: [
                {
                    title: 'Ancient Guide Persona Prompting',
                    desc: 'Custom system prompts coaching the user as Jambavan with warm, deeply motivating, reminder-focused phrasing.',
                    icon: 'fa-feather-pointed'
                },
                {
                    title: 'Custom Dark Glassmorphism UI',
                    desc: 'Hand-crafted backdrop filters, radial gradients, and custom select dropdowns without bulky front-end libraries.',
                    icon: 'fa-palette'
                },
                {
                    title: 'Sequential Day-by-Day Unlocking',
                    desc: 'Interactive gamified progress flow where each day card unveils only after completing the previous task.',
                    icon: 'fa-calendar-check'
                },
                {
                    title: 'Animated Gada (Mace) Milestones',
                    desc: 'Custom SVG progress indicators that scale up and radiate glowing red upon milestone completion.',
                    icon: 'fa-shield'
                },
                {
                    title: 'Deterministic JSON Output',
                    desc: 'Constrained Groq AI inference enforcing valid JSON output for zero-error front-end rendering.',
                    icon: 'fa-code'
                },
                {
                    title: 'Crown Completion Finale',
                    desc: 'Reward screen celebrating full 7-day mastery with the affirmation: "Your power was never lost."',
                    icon: 'fa-crown'
                }
            ],
            contributions: [
                'Conceived and designed an emotionally compelling application inspired by Indian epic lore.',
                'Developed a lightweight Flask backend integrating high-speed Groq API LLaMA 3.3 70B inference.',
                'Built an ultra-fast, zero-dependency glassmorphism frontend using pure HTML, CSS, and Vanilla JS.',
                'Engineered precise AI prompt architectures to guarantee reliable, structured JSON responses.',
                'Implemented sequential unlock mechanics with SVG keyframe animations.'
            ],
            metrics: [
                { val: 'LLaMA 3.3 70B', label: 'Groq High-Speed AI' },
                { val: '0 Dependencies', label: 'Pure Vanilla Web' },
                { val: '7-Day Plan', label: 'Gamified Skill Journey' },
                { val: 'Custom UI', label: 'Dark Glassmorphism' }
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/AP24110010250/jambavan.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'crossroads-restaurant': {
            title: 'Cross Roads Restaurant & Sweets — Vijayawada',
            category: 'Full-Stack Restaurant Web & Vibe Coding',
            tagline: 'Premium, animated restaurant web application with GSAP scroll effects, menu management, and Cloudinary media.',
            summary: 'Cross Roads Restaurant & Sweets is a premium, full-stack web application built for a real restaurant chain in Vijayawada. The project delivers a visually stunning, animated, and fully responsive website with a complete backend API for menu management, gallery uploads, and admin operations. The site features scroll-triggered GSAP animations, smooth Lenis scrolling, and a Framer Motion-powered experience.',
            screenshots: [
                { url: 'info for portfolio/crossroads-restaurant/01_homepage_hero.png', caption: 'Full-screen hero section with branding and entrance animations' },
                { url: 'info for portfolio/crossroads-restaurant/02_homepage_sections_1.png', caption: 'Interactive GSAP-animated milestone timeline (2016 → Present)' },
                { url: 'info for portfolio/crossroads-restaurant/03_homepage_sections_2.png', caption: 'Signature Thali showcase & visual menu highlights' },
                { url: 'info for portfolio/crossroads-restaurant/04_homepage_sections_3.png', caption: 'Bestseller dishes carousel with Cloudinary food photography' },
                { url: 'info for portfolio/crossroads-restaurant/05_homepage_sections_4.png', caption: 'Tollywood celebrity visit photo wall and branch directory' },
                { url: 'info for portfolio/crossroads-restaurant/06_homepage_sections_5.png', caption: 'Confectionery and traditional sweet delicacies showcase' },
                { url: 'info for portfolio/crossroads-restaurant/07_homepage_footer.png', caption: 'Online table reservation booking form and footer' },
                { url: 'info for portfolio/crossroads-restaurant/08_menu_page.png', caption: 'Menu page with interactive category filter tabs' },
                { url: 'info for portfolio/crossroads-restaurant/09_menu_page_2.png', caption: 'Menu item cards grid with INR price formatting' },
                { url: 'info for portfolio/crossroads-restaurant/10_about_page.png', caption: 'About page with restaurant backstory and culinary philosophy' },
                { url: 'info for portfolio/crossroads-restaurant/11_about_page_2.png', caption: 'Chef spotlights and kitchen hygiene commitment' },
                { url: 'info for portfolio/crossroads-restaurant/12_gallery_page.png', caption: 'Photo gallery grid with lightbox image viewer' },
                { url: 'info for portfolio/crossroads-restaurant/13_gallery_page_2.png', caption: 'Interior ambience, dining halls, and event photography' },
                { url: 'info for portfolio/crossroads-restaurant/14_contact_page.png', caption: 'Contact form and interactive Google Maps integration' },
                { url: 'info for portfolio/crossroads-restaurant/15_contact_page_2.png', caption: 'Branch addresses (Labbipet, Ashok Nagar, Benz Circle) and details' }
            ],
            techStack: {
                'Frontend': ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Lenis Smooth Scroll', 'Lucide'],
                'Backend': ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Cloudinary CDN', 'JWT', 'Bcrypt'],
                'Deployment': ['Frontend: Netlify', 'Backend: Cloud Hosted API']
            },
            features: [
                {
                    title: 'GSAP & Lenis Motion Experience',
                    desc: 'Buttery-smooth inertia scrolling coupled with scroll-triggered timeline reveals and parallax image effects.',
                    icon: 'fa-film'
                },
                {
                    title: 'Live Table Reservation Engine',
                    desc: 'Interactive booking module capturing guest counts, preferred times, special occasions, and branch selections.',
                    icon: 'fa-utensils'
                },
                {
                    title: 'Dynamic Cloudinary Menu',
                    desc: 'Cloud-hosted high-resolution menu with real-time category filtering (Starters, Biryani, Sweets).',
                    icon: 'fa-bowl-food'
                },
                {
                    title: 'Comprehensive Admin Dashboard',
                    desc: '85KB dedicated administrative portal for live menu CRUD, gallery uploads, and customer reservation triage.',
                    icon: 'fa-sliders'
                },
                {
                    title: 'Multi-Branch Directory & Maps',
                    desc: 'Embedded location maps and branch contact cards across Labbipet, Ashok Nagar, and Benz Circle.',
                    icon: 'fa-map-location-dot'
                },
                {
                    title: 'Celebrity Showcase & Lightbox',
                    desc: 'Interactive photo gallery celebrating high-profile dining visits with pop-up lightbox viewing.',
                    icon: 'fa-star'
                }
            ],
            contributions: [
                'Designed and developed the full restaurant frontend with React, GSAP animations, and Lenis smooth scrolling.',
                'Built a robust Express.js REST API with MongoDB and Cloudinary for media asset management.',
                'Implemented JWT-based authentication for a secure admin suite handling full menu and gallery CRUD.',
                'Configured Netlify deployment with continuous integration and image asset caching.'
            ],
            metrics: [
                { val: '6 Pages', label: 'Comprehensive Website' },
                { val: '15+ Animations', label: 'GSAP & Lenis Scroll' },
                { val: '85KB Admin', label: 'Full Management Suite' },
                { val: 'Live on Netlify', label: 'Production Deployed' }
            ],
            links: [
                { label: 'Live Website', url: 'https://crossroadsrestaurants.netlify.app/', type: 'live', icon: 'fa-solid fa-arrow-up-right-from-square' },
                { label: 'Frontend Repo', url: 'https://github.com/AP24110010250/crossroads_frontend.git', type: 'code', icon: 'fa-brands fa-github' },
                { label: 'Backend Repo', url: 'https://github.com/AP24110010250/ccrossroads_backend.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        },

        'sales-inventory-flask': {
            title: 'Smart QR-Based Sales & Inventory System (Flask)',
            category: 'Full-Stack Flask & Computer Vision',
            tagline: 'Automated inventory management with OpenCV QR camera scanning, live billing, and PDF invoices.',
            summary: 'A complete Flask web application for inventory tracking, QR-based stock updates, QR-powered billing, dashboards, and PDF invoice generation. It features auto-generated QR codes for every product and allows mobile devices to use the camera directly for scanning.',
            screenshots: [], // Screenshots removed as requested
            techStack: {
                'Backend': ['Python', 'Flask Framework', 'SQLite'],
                'Computer Vision': ['OpenCV', 'Pyzbar', 'qrcode Generator Library'],
                'Frontend': ['HTML5', 'CSS3', 'Bootstrap 5', 'Chart.js'],
                'Invoicing': ['ReportLab (Automated PDF Generation)']
            },
            features: [
                {
                    title: 'Automated Product QR Generation',
                    desc: 'Generates unique printable QR codes for all inventory items, ready for physical product labeling.',
                    icon: 'fa-qrcode'
                },
                {
                    title: 'Mobile Camera QR Scanner',
                    desc: 'Decodes QR barcodes in real-time from phone cameras or webcams via OpenCV and Pyzbar.',
                    icon: 'fa-camera'
                },
                {
                    title: 'Instant QR Bill Checkout',
                    desc: 'Scan items directly into a dynamic cart; automatically reduces database stock upon completing the sale.',
                    icon: 'fa-cart-shopping'
                },
                {
                    title: 'Automated PDF Invoices',
                    desc: 'Compiles and generates print-ready professional PDF customer invoices using ReportLab.',
                    icon: 'fa-file-invoice-dollar'
                },
                {
                    title: 'Chart.js Visual Dashboards',
                    desc: 'Real-time analytics graphs tracking hourly revenues, top-selling inventory, and restock alerts.',
                    icon: 'fa-chart-pie'
                },
                {
                    title: 'Lightweight SQLite Backend',
                    desc: 'Fast, portable database architecture with transactional integrity during multi-item checkouts.',
                    icon: 'fa-database'
                }
            ],
            contributions: [
                'Developed a full-stack Flask application integrated with an SQLite relational database.',
                'Integrated OpenCV and Pyzbar for real-time QR code stream decoding and inventory lookups.',
                'Built a session-based point-of-sale checkout system with automatic stock updates.',
                'Engineered interactive analytics dashboards utilizing Chart.js for business trend visualization.',
                'Automated PDF invoice generation and downloadable receipts with ReportLab.'
            ],
            metrics: [
                { val: 'OpenCV Vision', label: 'Real-Time QR Decoding' },
                { val: 'ReportLab PDF', label: 'Automated Invoicing' },
                { val: 'Chart.js', label: 'Hourly Sales Analytics' },
                { val: 'Flask & SQLite', label: 'Full-Stack System' }
            ],
            links: [
                { label: 'GitHub Repository', url: 'https://github.com/AP24110010250/sales-and-inventory-with-flask-and-gui.git', type: 'code', icon: 'fa-brands fa-github' }
            ]
        }
    };

    // ==========================================================================
    // 2. FLOATING MODAL CONTROLLER & GALLERY ENGINE
    // ==========================================================================
    const projectModal = document.getElementById('projectModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalContentContainer = document.getElementById('modalContentContainer');
    
    // Lightbox Elements
    const imageLightbox = document.getElementById('imageLightbox');
    const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');

    let currentProject = null;
    let currentScreenshotIdx = 0;

    function openProjectModal(projectId) {
        const project = PROJECTS_DATA[projectId];
        if (!project) return;

        currentProject = project;
        currentScreenshotIdx = 0;

        renderModalContent(project);

        projectModal.classList.add('active');
        projectModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    }

    function closeProjectModal() {
        projectModal.classList.remove('active');
        projectModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Unlock background scrolling
        currentProject = null;
    }

    function openLightbox(imgSrc, captionText) {
        if (!imageLightbox || !lightboxImg) return;
        lightboxImg.src = imgSrc;
        lightboxCaption.textContent = captionText || '';
        imageLightbox.classList.add('active');
        imageLightbox.setAttribute('aria-hidden', 'false');
    }

    function closeLightbox() {
        if (!imageLightbox) return;
        imageLightbox.classList.remove('active');
        imageLightbox.setAttribute('aria-hidden', 'true');
    }

    function renderModalContent(project) {
        let galleryHtml = '';

        if (project.screenshots && project.screenshots.length > 0) {
            const firstImg = project.screenshots[0];
            const hasMultiple = project.screenshots.length > 1;

            let thumbsHtml = '';
            project.screenshots.forEach((shot, idx) => {
                thumbsHtml += `
                    <div class="gallery-thumb-item ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="${shot.caption}">
                        <img src="${shot.url}" alt="Screenshot ${idx + 1}" loading="lazy">
                    </div>
                `;
            });

            galleryHtml = `
                <div class="modal-gallery-wrapper">
                    <div class="gallery-main-container">
                        <span class="gallery-zoom-hint"><i class="fa-solid fa-magnifying-glass-plus"></i> Click image to zoom</span>
                        <img id="galleryMainImage" class="gallery-main-img" src="${firstImg.url}" alt="${firstImg.caption}">
                        ${hasMultiple ? `
                            <button type="button" class="gallery-nav-btn gallery-prev-btn" id="galleryPrevBtn" aria-label="Previous screenshot"><i class="fa-solid fa-chevron-left"></i></button>
                            <button type="button" class="gallery-nav-btn gallery-next-btn" id="galleryNextBtn" aria-label="Next screenshot"><i class="fa-solid fa-chevron-right"></i></button>
                        ` : ''}
                        <div class="gallery-caption-badge" id="galleryCaptionBadge">
                            <span class="caption-index" id="galleryCaptionIndex">1 / ${project.screenshots.length}</span>
                            <span id="galleryCaptionText">${firstImg.caption}</span>
                        </div>
                    </div>
                    ${hasMultiple ? `
                        <div class="gallery-thumbs-strip" id="galleryThumbsStrip">
                            ${thumbsHtml}
                        </div>
                    ` : ''}
                </div>
            `;
        }

        // Action Links
        let actionLinksHtml = '';
        if (project.links && project.links.length > 0) {
            project.links.forEach(link => {
                const btnClass = link.type === 'live' ? 'modal-btn-live' : 'modal-btn-code';
                actionLinksHtml += `
                    <a href="${link.url}" target="_blank" class="modal-btn ${btnClass}">
                        <i class="${link.icon}"></i> ${link.label}
                    </a>
                `;
            });
        }

        // Tech Stack
        let techStackHtml = '';
        if (project.techStack) {
            techStackHtml = '<div class="modal-tech-grid">';
            for (const [layer, items] of Object.entries(project.techStack)) {
                techStackHtml += `
                    <div class="modal-tech-card">
                        <span class="modal-tech-layer">${layer}</span>
                        <div class="modal-tech-pills">
                            ${items.map(item => `<span class="modal-tech-pill">${item}</span>`).join('')}
                        </div>
                    </div>
                `;
            }
            techStackHtml += '</div>';
        }

        // Key Features
        let featuresHtml = '';
        if (project.features && project.features.length > 0) {
            featuresHtml = '<div class="modal-features-list">';
            project.features.forEach(feat => {
                featuresHtml += `
                    <div class="modal-feature-item">
                        <div class="modal-feature-icon"><i class="fa-solid ${feat.icon}"></i></div>
                        <div class="modal-feature-content">
                            <h5>${feat.title}</h5>
                            <p>${feat.desc}</p>
                        </div>
                    </div>
                `;
            });
            featuresHtml += '</div>';
        }

        // Contributions ("What I Did")
        let contributionsHtml = '';
        if (project.contributions && project.contributions.length > 0) {
            contributionsHtml = '<ul class="modal-contributions-list">';
            project.contributions.forEach(item => {
                contributionsHtml += `<li>${item}</li>`;
            });
            contributionsHtml += '</ul>';
        }

        // Metrics
        let metricsHtml = '';
        if (project.metrics && project.metrics.length > 0) {
            metricsHtml = '<div class="modal-metrics-grid">';
            project.metrics.forEach(m => {
                metricsHtml += `
                    <div class="modal-metric-card">
                        <div class="modal-metric-val">${m.val}</div>
                        <div class="modal-metric-label">${m.label}</div>
                    </div>
                `;
            });
            metricsHtml += '</div>';
        }

        // Assemble Full Modal HTML
        modalContentContainer.innerHTML = `
            <div class="modal-header">
                <span class="modal-badge">${project.category}</span>
                <h2 class="modal-title" id="modalProjectTitle">${project.title}</h2>
                <p class="modal-tagline">${project.tagline}</p>
            </div>

            ${actionLinksHtml ? `<div class="modal-action-bar">${actionLinksHtml}</div>` : ''}

            ${galleryHtml}

            <!-- PROJECT SUMMARY -->
            <div class="modal-section">
                <h4 class="modal-section-title"><i class="fa-solid fa-align-left text-yellow"></i> Project Overview</h4>
                <div class="modal-text-block">
                    <p>${project.summary}</p>
                </div>
            </div>

            <!-- TECH STACK -->
            <div class="modal-section">
                <h4 class="modal-section-title"><i class="fa-solid fa-layer-group text-yellow"></i> Technologies & Architecture</h4>
                ${techStackHtml}
            </div>

            <!-- KEY FEATURES -->
            <div class="modal-section">
                <h4 class="modal-section-title"><i class="fa-solid fa-star text-yellow"></i> Key Features & Capabilities</h4>
                ${featuresHtml}
            </div>

            <!-- CONTRIBUTIONS -->
            <div class="modal-section">
                <h4 class="modal-section-title"><i class="fa-solid fa-code-branch text-yellow"></i> Engineering Highlights & Implementation</h4>
                ${contributionsHtml}
            </div>

            <!-- METRICS -->
            <div class="modal-section">
                <h4 class="modal-section-title"><i class="fa-solid fa-chart-column text-yellow"></i> Key Project Milestones</h4>
                ${metricsHtml}
            </div>
        `;

        // Bind Gallery Interactive Events
        bindGalleryEvents(project);
    }

    function bindGalleryEvents(project) {
        if (!project.screenshots || project.screenshots.length === 0) return;

        const mainImg = document.getElementById('galleryMainImage');
        const prevBtn = document.getElementById('galleryPrevBtn');
        const nextBtn = document.getElementById('galleryNextBtn');
        const captionIndex = document.getElementById('galleryCaptionIndex');
        const captionText = document.getElementById('galleryCaptionText');
        const thumbs = document.querySelectorAll('.gallery-thumb-item');

        function updateGalleryImage(idx) {
            if (idx < 0) idx = project.screenshots.length - 1;
            if (idx >= project.screenshots.length) idx = 0;
            currentScreenshotIdx = idx;

            const shot = project.screenshots[currentScreenshotIdx];
            if (mainImg) {
                mainImg.src = shot.url;
                mainImg.alt = shot.caption;
            }
            if (captionIndex) captionIndex.textContent = `${currentScreenshotIdx + 1} / ${project.screenshots.length}`;
            if (captionText) captionText.textContent = shot.caption;

            thumbs.forEach((t, i) => {
                if (i === currentScreenshotIdx) {
                    t.classList.add('active');
                    t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                } else {
                    t.classList.remove('active');
                }
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateGalleryImage(currentScreenshotIdx - 1);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                updateGalleryImage(currentScreenshotIdx + 1);
            });
        }

        thumbs.forEach(thumb => {
            thumb.addEventListener('click', (e) => {
                e.stopPropagation();
                const idx = parseInt(thumb.getAttribute('data-index'), 10);
                updateGalleryImage(idx);
            });
        });

        // Click image to zoom in lightbox
        if (mainImg) {
            mainImg.addEventListener('click', () => {
                const shot = project.screenshots[currentScreenshotIdx];
                openLightbox(shot.url, shot.caption);
            });
        }
    }

    // Modal Close Triggers
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                closeProjectModal();
            }
        });
    }

    // Lightbox Close Triggers
    if (lightboxCloseBtn) {
        lightboxCloseBtn.addEventListener('click', closeLightbox);
    }

    if (imageLightbox) {
        imageLightbox.addEventListener('click', (e) => {
            if (e.target === imageLightbox || e.target.classList.contains('lightbox-content')) {
                closeLightbox();
            }
        });
    }

    // Global Keydown Listeners (ESC, Arrow keys for gallery)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (imageLightbox && imageLightbox.classList.contains('active')) {
                closeLightbox();
            } else if (projectModal && projectModal.classList.contains('active')) {
                closeProjectModal();
            }
        } else if (e.key === 'ArrowLeft' && projectModal && projectModal.classList.contains('active') && currentProject && currentProject.screenshots?.length > 1) {
            const prevBtn = document.getElementById('galleryPrevBtn');
            if (prevBtn) prevBtn.click();
        } else if (e.key === 'ArrowRight' && projectModal && projectModal.classList.contains('active') && currentProject && currentProject.screenshots?.length > 1) {
            const nextBtn = document.getElementById('galleryNextBtn');
            if (nextBtn) nextBtn.click();
        }
    });

    // Attach Click Event to Project Cards & Brief Buttons
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // If user clicked directly on an <a> tag link (like GitHub or Live), don't intercept unless it's a brief modal trigger
            if (e.target.closest('a')) {
                return;
            }
            const projectId = card.getAttribute('data-project-id');
            if (projectId && PROJECTS_DATA[projectId]) {
                openProjectModal(projectId);
            }
        });
    });

    document.querySelectorAll('[data-open-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = btn.getAttribute('data-open-modal');
            if (projectId && PROJECTS_DATA[projectId]) {
                openProjectModal(projectId);
            }
        });
    });

    // ==========================================
    // 3. PROJECT FILTERING & SHOW MORE FUNCTIONALITY
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const toggleProjectsBtn = document.getElementById('btn-toggle-projects');
    
    let currentFilter = 'all';
    let isExpanded = false;
    const INITIAL_LIMIT = 6;

    function renderProjects() {
        if (currentFilter === 'all') {
            projectCards.forEach((card, index) => {
                if (isExpanded || index < INITIAL_LIMIT) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });

            if (toggleProjectsBtn) {
                toggleProjectsBtn.style.display = 'inline-block';
                if (isExpanded) {
                    toggleProjectsBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> SHOW LESS PROJECTS';
                } else {
                    toggleProjectsBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> MORE PROJECTS';
                }
            }
        } else {
            // Category filter active - show all matching projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category') || '';
                const categories = category.split(' ');
                
                if (categories.includes(currentFilter)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 200);
                }
            });

            if (toggleProjectsBtn) {
                toggleProjectsBtn.style.display = 'none';
            }
        }
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            currentFilter = btn.getAttribute('data-filter');
            renderProjects();
        });
    });

    if (toggleProjectsBtn) {
        toggleProjectsBtn.addEventListener('click', () => {
            isExpanded = !isExpanded;
            renderProjects();
        });
    }

    // Initial render
    renderProjects();

    // ==========================================
    // 4. SKILLS TAB SWITCHING (TECHNICAL / SOFT)
    // ==========================================
    const skillsTabBtns = document.querySelectorAll('.skills-subtab-btn');
    const techSkillsGrid = document.getElementById('tech-skills-grid');
    const softSkillsGrid = document.getElementById('soft-skills-grid');

    skillsTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            skillsTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const tab = btn.getAttribute('data-skills-tab');
            if (tab === 'technical') {
                if (techSkillsGrid) techSkillsGrid.style.display = 'grid';
                if (softSkillsGrid) softSkillsGrid.style.display = 'none';
            } else if (tab === 'soft') {
                if (techSkillsGrid) techSkillsGrid.style.display = 'none';
                if (softSkillsGrid) softSkillsGrid.style.display = 'grid';
            }
        });
    });

    // ==========================================
    // 5. CERTIFICATIONS SHOW MORE FUNCTIONALITY (6 Initial limit)
    // ==========================================
    const certCards = Array.from(document.querySelectorAll('.cert-card'));
    const toggleCertsBtn = document.getElementById('btn-toggle-certs');
    let isCertsExpanded = false;
    const INITIAL_CERTS_LIMIT = 6; // 6 displayed initially as requested

    function renderCertifications() {
        certCards.forEach((card, index) => {
            if (isCertsExpanded || index < INITIAL_CERTS_LIMIT) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 200);
            }
        });

        if (toggleCertsBtn) {
            if (isCertsExpanded) {
                toggleCertsBtn.innerHTML = '<i class="fa-solid fa-chevron-up"></i> SHOW LESS CERTIFICATIONS';
            } else {
                toggleCertsBtn.innerHTML = '<i class="fa-solid fa-chevron-down"></i> MORE CERTIFICATIONS';
            }
        }
    }

    if (toggleCertsBtn) {
        toggleCertsBtn.addEventListener('click', () => {
            isCertsExpanded = !isCertsExpanded;
            renderCertifications();
        });
    }

    renderCertifications();

    // ==========================================
    // 6. CONTACT FORM MAILTO REDIRECT
    // ==========================================
    const contactForm = document.getElementById('portfolioContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('contactName')?.value || '';
            const email = document.getElementById('contactEmail')?.value || '';
            const subject = document.getElementById('contactSubject')?.value || 'Portfolio Contact Inquiry';
            const message = document.getElementById('contactMessage')?.value || '';

            const emailBody = `Hi Koushik,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            const mailtoUrl = `mailto:koushikchava77@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

            window.location.href = mailtoUrl;
        });
    }

    // ==========================================
    // 7. NAV LINK HIGHLIGHTING ON SCROLL
    // ==========================================
    const sections = document.querySelectorAll('section, header, footer');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let currentSectionId = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        if (currentSectionId) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

});
