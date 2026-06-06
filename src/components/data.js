const data1 = {
    "Links": {
        resume:   "https://drive.google.com/file/d/1F3fl5pIlO54T317fTfvDWnlfk2kQ3ukQ/view?usp=sharing",
        github:   "https://github.com/ayush-raj8",
        linkedin: "https://linkedin.com/in/ayush-r-3427b71ab",
        medium:   "https://medium.com/@ayushraj763",
        email:    "ayushraj763@gmail.com",
    },
    "Experiences": [
        {
            "company": "Nutanix",
            "location": "Bengaluru, India",
            "title": "Member of Technical Staff 2",
            "time": "Aug 2025 – Present",
            "current": true,
            "bullets": [
                "Designed and extended backend policy resolution systems for dynamic entity groups across distributed microservices handling large-scale network security policies.",
                "Resolved production issues involving service crashes, memory leaks, race conditions, and concurrency bottlenecks in high-throughput telemetry pipelines.",
                "Improved reliability and observability of event-driven flow logging systems responsible for policy hitlog generation and auditability.",
                "Increased Go test coverage from 45% to 80%+, reducing release risk and improving platform stability.",
                "Implemented a full gRPC server and client for a new microservice with end-to-end task lifecycle management, achieving 21% latency improvement over the legacy Python service."
            ],
            "tags": ["Go", "gRPC", "Microservices", "Distributed Systems", "Telemetry", "Concurrency"]
        },
        {
            "company": "Nutanix",
            "location": "Bengaluru, India",
            "title": "Member of Technical Staff 1",
            "time": "Jul 2023 – Jul 2025",
            "current": false,
            "bullets": [
                "Enhanced Golang-based microservices powering security policy visualization across VPCs, VLANs, categories, and global entities.",
                "Designed and implemented CRUDL gRPC APIs in Python services for managing VMs, subnets, and VPC entity groups.",
                "Migrated a CLI platform into an interactive gRPC-driven experience supporting autocomplete, command history, and multi-command execution.",
                "Built BDD automation frameworks covering 100+ production scenarios, reducing QA-stage defects by 67%.",
                "Collaborated across distributed services and platform teams to improve scalability, reliability, and developer productivity."
            ],
            "tags": ["Go", "Python", "gRPC", "REST APIs", "BDD", "Kubernetes", "Helm"]
        },
        {
            "company": "Nritya",
            "location": "Goa, India (Remote)",
            "title": "Software Developer",
            "time": "Jan 2022 – Sep 2022",
            "current": false,
            "bullets": [
                "Built and scaled a 0-to-1 marketplace platform for dance studios, workshops, courses, and creators, supporting end-to-end booking and payment workflows.",
                "Designed backend architecture using Django, PostgreSQL, Redis, and Firebase; implemented APIs, authentication, authorization, search, notifications, and booking management.",
                "Implemented Role-Based Access Control (RBAC), JWT authentication, and creator/admin/user workflows across the platform.",
                "Built event-driven async workflows using Redis and Celery for booking confirmations, notifications, payment reconciliation, and background processing.",
                "Integrated Razorpay payment gateway and webhook processing for reliable booking, payment verification, and refund handling.",
                "Implemented real-time notifications using Server-Sent Events (SSE) and asynchronous messaging patterns."
            ],
            "tags": ["Django", "PostgreSQL", "Redis", "Celery", "Razorpay", "Firebase", "JWT", "SSE"]
        }
    ],
    "Skills": {
        "Languages": ["Golang", "Python", "SQL", "JavaScript"],
        "Backend & Distributed": ["Microservices", "REST APIs", "gRPC", "Apache Kafka", "Celery", "Event-Driven Systems", "WebSockets", "SSE", "Concurrency"],
        "Databases": ["PostgreSQL", "Redis", "Firebase Firestore"],
        "Infrastructure": ["Kubernetes", "Helm", "CI/CD", "Observability"],
        "Frameworks": ["Django", "React.js", "Next.js", "Pytest"],
        "Payments": ["Razorpay", "Payment Webhooks", "Booking Workflows"]
    },
    "Education": [
        {
            "title": "BITS Pilani, Goa Campus",
            "subtitle": "B.E. Computer Science + M.Sc. Chemistry",
            "summary": "CGPA: 8.55 / 10",
            "time": "Aug 2018 – May 2023",
            "location": "Goa, India"
        }
    ],
    "Projects": [
        {
            "title": "Event Listing & Booking Platform",
            "subtitle": "ReactJs, Redux, Context API, JWT, RBAC, Django, Firebase, Redis",
            "summary": "Full-stack marketplace where creators list dance classes and events; users can search, book free trials, and purchase tickets with QR-code verification. Includes JWT auth, RBAC, Redis caching, and scheduled cache updates.",
            "tags": ["React", "Redux", "Django", "Redis", "Firebase", "JWT", "RBAC"]
        },
        {
            "title": "Full-Text Search Engine with Filters",
            "subtitle": "Python, Django, Fuzzy Matching, Tokenization",
            "summary": "Implemented a full-text search engine in Django with typo tolerance via fuzzy matching, enhanced with multi-dimensional filter support.",
            "tags": ["Python", "Django", "Search", "Fuzzy Matching"]
        },
        {
            "title": "nuGarner – Multi-App Search Engine",
            "subtitle": "Flask, React.js, Python",
            "summary": "Hackathon project: aggregates search results from Jira, Confluence, and Slack into a single unified interface for Nutanix internal teams.",
            "tags": ["Flask", "React", "Python", "Hackathon"]
        },
        {
            "title": "Iris Classifier Android App",
            "subtitle": "Android, Machine Learning, Java, Python",
            "summary": "Android app that classifies Iris flowers from petal/sepal measurements using an ML model; persists classification history locally via SQLite.",
            "tags": ["Android", "Java", "Machine Learning", "SQLite"]
        }
    ],
    "Published Research Paper": [
        {
            "title": "Towards Efficient Emotion Self-report Collection Using Human-AI Collaboration: A Case Study on Smartphone Keyboard Interaction",
            "subtitle": "Active Learning · Association for Computing Machinery",
            "summary": "Using active learning, we reduced required self-reports by 46% compared to baselines while achieving an average emotion self-report detection F-score of 85%.",
            "url": "https://dl.acm.org/doi/10.1145/3596269"
        }
    ],
    "Published Articles": [
        {
            "title": "Object Creation in Java",
            "subtitle": "Java · Object Oriented Programming · Scaler",
            "summary": "A comprehensive article introducing classes, objects, and the importance of proper object creation in Java.",
            "url": "https://www.scaler.com/topics/object-creation-in-java/"
        },
        {
            "title": "Zombie and Orphan Process in OS",
            "subtitle": "Operating Systems · Process · C · Scaler",
            "summary": "Defines zombie and orphan processes with C code examples, covering how they arise and their impact on system resources.",
            "url": "https://www.scaler.com/topics/operating-system/zombie-and-orphan-process-in-os/"
        },
        {
            "title": "Mutex in OS",
            "subtitle": "Operating Systems · C · Mutex · Scaler",
            "summary": "Covers mutex definition, use cases, advantages, disadvantages, and the thundering-herd problem with solutions.",
            "url": "https://www.scaler.com/topics/operating-system/mutex-in-os/"
        },
        {
            "title": "Inter Process Communication (IPC)",
            "subtitle": "Operating Systems · C · Processes · Scaler",
            "summary": "Introduces IPC concepts and implements various mechanisms — pipes, message queues, shared memory, and sockets — in C.",
            "url": "https://www.scaler.com/topics/operating-system/inter-process-communication-in-os/"
        }
    ]
};

export default data1;
