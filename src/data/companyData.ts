export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'candidates' | 'employers' | 'both';
  icon: string;
  highlights: string[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  designation: string;
  isPlaceholder?: boolean;
  message?: string;
  introduction: string;
  responsibilities: string[];
  photoPlaceholderText: string;
  image?: string;
}

export interface AchievementHighlight {
  id: string;
  metric: string;
  label: string;
  description: string;
  isEditableNote?: string;
}

export interface IndustryServed {
  name: string;
  icon: string;
  description: string;
}

export const COMPANY_DATA = {
  name: "ONPOINT EMPLOYMENT SERVICES",
  tagline: "Your Trusted Hiring Partner",
  subheading: "Empowering Careers. Connecting Talent. Building Professional Futures.",
  heroDescription:
    "Onpoint Employment Services is committed to bridging the gap between talented individuals and organizations through professional recruitment support, employment services, and career guidance.",
  aboutDescription:
    "Onpoint Employment Services is a recruitment and employment support organization based in Narhe, Pune, Maharashtra. We are focused on connecting job seekers with suitable employment opportunities while supporting organizations in finding capable talent. Our approach emphasizes professional recruitment coordination, placement assistance, candidate support, and meaningful connections between individuals and employers.",
  
  contact: {
    director: "Shalan Hingmire",
    phone: "+91 9359710076",
    phoneDisplay: "+91 93597 10076",
    callUrl: "tel:+919359710076",
    email: "onpointemployments@gmail.com",
    emailUrl: "mailto:onpointemployments@gmail.com",
    whatsappUrl: "https://wa.me/919359710076?text=Hello%20Onpoint%20Employment%20Services,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
    location: "Narhe, Pune, Maharashtra, India",
    address: "Shop No 6, Deepraj Angan, Zeal College Rd, Narhe, Pune, Maharashtra 411041",
    addressFull: "Shop No 6, Deepraj Angan, Zeal College Rd, Narhe, Pune, Maharashtra 411041",
    landmark: "Zeal College Road, Deepraj Angan",
    industry: "Recruitment, Employment Services and Placement Consultancy",
    workingHours: "Monday - Saturday: 9:30 AM to 6:30 PM",
    mapUrl: "https://www.google.com/maps/place/Onpoint+Employment+Services/@18.4467273,73.8264297,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2959527c133f9:0x85b0720b52ed226f!8m2!3d18.4467273!4d73.8264297!16s%2Fg%2F11y6sbfw34",
    mapEmbedUrl: "https://maps.google.com/maps?q=18.4467273,73.8264297+(Onpoint+Employment+Services)&t=&z=17&ie=UTF8&iwloc=B&output=embed",
    suggestedDomain: "www.onpointemployments.com",
  },

  socialLinks: {
    linkedin: "https://www.linkedin.com/company/onpoint-employment-services",
    facebook: "https://facebook.com/onpointemploymentservices", // Editable placeholder
    instagram: "https://www.instagram.com/onpoint_employment_services/",
    twitter: "https://twitter.com/onpointservices", // Editable placeholder
  },

  leadership: {
    director: {
      id: "director",
      name: "Shalan Hingmire",
      designation: "Director",
      isPlaceholder: false,
      introduction:
        "As Director of Onpoint Employment Services, Shalan Hingmire leads the consultancy's strategic vision with a commitment to integrity, professional excellence, and ethical placement standards in Pune's vibrant employment ecosystem.",
      message:
        "At Onpoint Employment Services, we believe that the right opportunity can transform an individual's future. Our focus is to connect talented individuals with meaningful opportunities and support organizations in finding the right talent through trust, transparency, and professional service.",
      responsibilities: [
        "Strategic leadership and organizational direction",
        "Client relationship management and corporate partnerships",
        "Commitment to ethical recruitment and candidate empowerment",
        "Ensuring service quality and transparent placement coordination"
      ],
      photoPlaceholderText: "Director Shalan Hingmire"
    } as LeadershipMember,

    hiringManager: {
      id: "hiring-manager",
      name: "Pratiksha Kanunje",
      designation: "Hiring Manager",
      isPlaceholder: false,
      introduction:
        "Responsible for coordinating recruitment activities, understanding employer requirements, candidate shortlisting, interview coordination, and supporting recruitment operations.",
      responsibilities: [
        "Coordinating recruitment and placement activities",
        "Understanding employer job specifications and talent requirements",
        "Candidate screening, profile review, and initial shortlisting",
        "Scheduling and coordinating interview processes",
        "End-to-end recruitment operations support"
      ],
      photoPlaceholderText: "Hiring Manager Pratiksha Kanunje"
    } as LeadershipMember
  },

  services: [
    {
      id: "job-placement-assistance",
      title: "Job Placement Assistance",
      shortDesc: "End-to-end support for candidates to identify suitable job openings aligned with their qualifications and career goals.",
      fullDesc: "We provide comprehensive placement assistance to help job seekers discover opportunities that match their skills, educational background, and long-term career aspirations across Pune and Maharashtra.",
      category: "candidates",
      icon: "Briefcase",
      highlights: ["Personalized job matching", "Industry-aligned role mapping", "Continuous support until onboarding"]
    },
    {
      id: "fresher-recruitment",
      title: "Fresher Recruitment",
      shortDesc: "Specialized pathways and guidance tailored for fresh graduates starting their professional journey.",
      fullDesc: "Bridging the gap between academic education and corporate readiness. We guide fresh graduates through initial screening, skill mapping, and entry-level recruitment opportunities.",
      category: "candidates",
      icon: "GraduationCap",
      highlights: ["Entry-level career mapping", "Campus-to-corporate orientation", "Clear career path counseling"]
    },
    {
      id: "experienced-candidate-recruitment",
      title: "Experienced Candidate Recruitment",
      shortDesc: "Career advancement opportunities and targeted placement for experienced working professionals.",
      fullDesc: "Connecting mid to senior-level candidates with organizations that value their domain expertise, leadership capabilities, and track record of performance.",
      category: "candidates",
      icon: "UserCheck",
      highlights: ["Confidential career exploration", "Mid & senior-level roles", "Salary & domain growth guidance"]
    },
    {
      id: "internship-assistance",
      title: "Internship Assistance",
      shortDesc: "Facilitating structured internship opportunities for students to gain vital real-world industry experience.",
      fullDesc: "Practical exposure is critical for career success. We help students and aspiring professionals secure meaningful internships with structured learning environments.",
      category: "candidates",
      icon: "Award",
      highlights: ["Practical corporate exposure", "Skill enhancement opportunities", "Pathways to full-time roles"]
    },
    {
      id: "resume-preparation-guidance",
      title: "Resume Preparation Guidance",
      shortDesc: "Professional consultation to craft impactful, industry-standard resumes that stand out to employers.",
      fullDesc: "Your resume is your first impression. We offer personalized guidance to format, structure, and highlight achievements in line with modern corporate hiring expectations.",
      category: "candidates",
      icon: "FileText",
      highlights: ["ATS-friendly layout guidance", "Keyword & skill structuring", "Clear impact statements"]
    },
    {
      id: "interview-preparation",
      title: "Interview Preparation",
      shortDesc: "Comprehensive coaching on interview techniques, communication, and confidence building.",
      fullDesc: "Prepare with confidence through guided mock question scenarios, behavioral interview tips, and professional communication standards tailored to industry norms.",
      category: "candidates",
      icon: "MessageSquare",
      highlights: ["Mock interview sessions", "HR & technical discussion tips", "Body language & confidence building"]
    },
    {
      id: "career-guidance",
      title: "Career Guidance",
      shortDesc: "Informed career counseling to help individuals identify their strengths and navigate career choices.",
      fullDesc: "Expert counseling sessions to analyze personal strengths, understand market trends, and choose the most promising professional pathways with long-term potential.",
      category: "candidates",
      icon: "Compass",
      highlights: ["One-on-one counseling", "Market trend analysis", "Long-term career roadmap"]
    },
    {
      id: "corporate-recruitment",
      title: "Corporate Recruitment",
      shortDesc: "Reliable talent acquisition services for businesses seeking qualified and verified personnel.",
      fullDesc: "We assist organizations in sourcing, screening, and shortlisting qualified professionals who fit technical requirements and organizational culture seamlessly.",
      category: "employers",
      icon: "Building2",
      highlights: ["Tailored candidate sourcing", "Thorough initial screening", "Fast turnaround for open mandates"]
    },
    {
      id: "hr-recruitment-solutions",
      title: "HR Recruitment Solutions",
      shortDesc: "Flexible, scalable hiring solutions designed to streamline hiring cycles for emerging & established enterprises.",
      fullDesc: "From niche skill requirements to volume hiring, we partner with HR teams to reduce hiring overheads and deliver verified candidate shortlists efficiently.",
      category: "employers",
      icon: "Users",
      highlights: ["Custom hiring drives", "Pre-screened talent pipeline", "Dedicated recruitment coordination"]
    },
    {
      id: "employment-consultancy",
      title: "Employment Consultancy",
      shortDesc: "Strategic consulting for both employers and job seekers on workforce trends, compensation, and hiring.",
      fullDesc: "Providing valuable market insights on salary benchmarks, industry skill demands, and talent retention strategies to create productive employer-employee relationships.",
      category: "both",
      icon: "CheckCircle2",
      highlights: ["Compensation benchmarking", "Workforce advisory", "Transparent consultation"]
    }
  ] as ServiceItem[],

  whyChooseUs: [
    {
      title: "Professional Recruitment Support",
      description: "Structured, systematic approach to matching talent with legitimate organizational opportunities.",
      icon: "ShieldCheck"
    },
    {
      title: "Candidate-Focused Approach",
      description: "Dedicated attention to individual aspirations, skills, and ethical guidance without unrealistic claims.",
      icon: "HeartHandshake"
    },
    {
      title: "Career Guidance",
      description: "Practical mentoring on resume design, interview presence, and industry-specific market demands.",
      icon: "TrendingUp"
    },
    {
      title: "Recruitment Coordination",
      description: "Seamless liaison between candidates and hiring organizations for smooth interview workflows.",
      icon: "Shuffle"
    },
    {
      title: "Transparent Communication",
      description: "Clear expectations, honest feedback, and regular updates throughout the recruitment journey.",
      icon: "Search"
    },
    {
      title: "Dedicated Support",
      description: "Personalized assistance rooted right in Narhe, Pune, accessible for in-person and digital support.",
      icon: "Headphones"
    }
  ],

  achievements: {
    heading: "Our Journey of Connecting Talent With Opportunities",
    subheading: "Building professional futures through dedication, ethical recruitment, and meaningful industry connections in Pune and beyond.",
    
    // Transparent & Verified milestones (editable data)
    stats: [
      {
        metric: "10+",
        label: "Recruitment Services",
        description: "Specialized services covering freshers, experienced talent, resume guidance, and corporate hiring."
      },
      {
        metric: "6+",
        label: "Key Industry Verticals",
        description: "Active placement facilitation across IT, Manufacturing, Banking, Customer Support, and Retail."
      },
      {
        metric: "100%",
        label: "Dedicated Human Support",
        description: "Personalized guidance and direct communication for every candidate and employer partner."
      },
      {
        metric: "Pune",
        label: "Strategic Location",
        description: "Operating from Narhe, a central hub connecting key academic and industrial clusters."
      }
    ],

    industriesServed: [
      {
        name: "Information Technology & Software",
        icon: "Laptop",
        description: "Software developers, QA testers, technical support, and IT infrastructure professionals."
      },
      {
        name: "Manufacturing & Engineering",
        icon: "Cog",
        description: "Production supervisors, quality control engineers, CAD designers, and technical staff."
      },
      {
        name: "Banking, Financial Services & Insurance",
        icon: "Landmark",
        description: "Financial analysts, accountants, relationship officers, and back-office associates."
      },
      {
        name: "Customer Operations & BPO",
        icon: "PhoneCall",
        description: "Customer experience executives, technical support, and voice/non-voice specialists."
      },
      {
        name: "Healthcare & Pharmaceuticals",
        icon: "Activity",
        description: "Administrative staff, medical representatives, pharmacy associates, and operations."
      },
      {
        name: "Retail, Logistics & Sales",
        icon: "ShoppingBag",
        description: "Supply chain coordinators, retail store managers, sales executives, and field staff."
      }
    ] as IndustryServed[],

    candidateSuccessThemes: [
      {
        title: "Fresh Graduate Career Kickstarts",
        description: "Guided engineering and commerce graduates from Pune colleges through resume refinement and successful placement interviews."
      },
      {
        title: "Mid-Career Growth Transitions",
        description: "Facilitated smooth domain transitions for experienced professionals seeking better compensation and organizational culture."
      },
      {
        title: "Targeted Corporate Staffing",
        description: "Helped growing small and medium businesses in Maharashtra quickly onboard pre-screened, dependable team members."
      }
    ],

    corporateNetworkNote: "Companies Where Our Candidates Have Found Opportunities: Placement facilitation across diverse regional employers and enterprise organizations. Specific company affiliations and partner logos are updated periodically based on verified placement relationships."
  },

  missionVision: {
    mission: "To bridge the gap between talented individuals and organizations through professional recruitment support, ethical placement guidance, and personalized candidate care that fosters long-term professional growth.",
    vision: "To become Pune's most trusted and respected employment consultancy, recognized for our transparency, commitment to candidate empowerment, and dependability for corporate hiring.",
    coreValues: [
      {
        title: "Integrity & Ethics",
        description: "We operate with total honesty, transparent communication, and strict adherence to ethical recruitment standards."
      },
      {
        title: "Candidate-Centricity",
        description: "We respect every candidate's unique skills and aspirations, providing constructive guidance tailored to their reality."
      },
      {
        title: "Corporate Dependability",
        description: "We understand that our client employers depend on quality talent, ensuring careful screening and genuine candidate fit."
      },
      {
        title: "Continuous Empowerment",
        description: "Beyond job openings, we empower individuals with resume skills, interview readiness, and workplace confidence."
      }
    ],
    approachSteps: [
      {
        step: "01",
        title: "Understanding Requirements",
        desc: "Deep analysis of candidate strengths and employer job expectations."
      },
      {
        step: "02",
        title: "Profile Assessment & Mapping",
        desc: "Thorough review of qualifications, skills, and industry suitability."
      },
      {
        step: "03",
        title: "Skill & Interview Guidance",
        desc: "Constructive feedback on resume presentation and interview confidence."
      },
      {
        step: "04",
        title: "Placement Coordination",
        desc: "Organizing interview schedules and facilitating transparent communication until joining."
      }
    ]
  }
};

