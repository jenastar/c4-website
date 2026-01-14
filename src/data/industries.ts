import { Building2, Heart, DollarSign, TrendingUp, Wrench, LucideIcon } from 'lucide-react';

export interface Industry {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  compliance: string[];
  useCases: string[];
  technologies: string[];
  caseStudyHighlight?: {
    title: string;
    result: string;
  };
}

export const industries: Industry[] = [
  {
    slug: 'saas-b2b',
    icon: Building2,
    title: 'SaaS & B2B Platforms',
    description: 'AI and data infrastructure for scaling SaaS companies. Build analytics, automation, and AI features that your customers demand.',
    challenges: [
      'Product analytics at scale',
      'Customer success automation',
      'Feature usage insights',
      'Churn prediction and prevention',
      'Multi-tenant data isolation',
      'Cost per customer optimization'
    ],
    solutions: [
      'Event streaming pipelines (Pub/Sub → BigQuery)',
      'AI-powered customer health scoring',
      'Automated usage reports and dashboards',
      'Predictive analytics for churn',
      'Embedded analytics for customers',
      'Usage-based pricing infrastructure'
    ],
    compliance: ['SOC 2', 'GDPR', 'Data residency', 'ISO 27001'],
    useCases: [
      'Product analytics platforms',
      'Customer success automation',
      'Usage-based billing systems',
      'AI-powered support chatbots',
      'Embedded analytics dashboards',
      'Multi-tenant SaaS architecture'
    ],
    technologies: ['BigQuery', 'Pub/Sub', 'GKE', 'Vertex AI', 'Cloud Run', 'Looker'],
    caseStudyHighlight: {
      title: 'B2B SaaS Platform: 10x Analytics Scale',
      result: 'Reduced query costs by 60% while improving dashboard performance'
    }
  },
  {
    slug: 'healthcare',
    icon: Heart,
    title: 'Healthcare & Life Sciences',
    description: 'HIPAA-compliant AI and data platforms for healthcare providers, payers, and life sciences companies.',
    challenges: [
      'HIPAA compliance requirements',
      'PHI data protection',
      'Clinical workflow integration',
      'Legacy system modernization',
      'Interoperability (FHIR, HL7)',
      'Provider and payer data exchange'
    ],
    solutions: [
      'HIPAA-compliant cloud architecture',
      'Secure RAG for clinical knowledge',
      'EHR integration pipelines',
      'Medical document intelligence',
      'Predictive analytics for patient outcomes',
      'Compliance automation and audit trails'
    ],
    compliance: ['HIPAA', 'HITRUST', 'FDA 21 CFR Part 11', 'GxP'],
    useCases: [
      'Clinical decision support systems',
      'Medical records search (RAG)',
      'Prior authorization automation',
      'Claims processing AI',
      'Population health analytics',
      'Drug discovery data platforms'
    ],
    technologies: ['Healthcare API', 'Vertex AI', 'BigQuery', 'Cloud Healthcare', 'Document AI', 'Secret Manager'],
    caseStudyHighlight: {
      title: 'Healthcare Provider: HIPAA-Compliant Knowledge Search',
      result: 'Reduced clinical staff search time from 30min to 2min with 100% HIPAA compliance'
    }
  },
  {
    slug: 'fintech',
    icon: DollarSign,
    title: 'Financial Services & Fintech',
    description: 'Secure, compliant infrastructure for banking, payments, and financial technology companies.',
    challenges: [
      'PCI DSS compliance',
      'Real-time fraud detection',
      'Transaction processing at scale',
      'Regulatory reporting',
      'Data encryption and key management',
      'Audit trails and compliance'
    ],
    solutions: [
      'PCI-compliant payment infrastructure',
      'Real-time fraud detection ML models',
      'Transaction data pipelines',
      'Automated regulatory reporting',
      'Secure multi-party computation',
      'Financial document automation'
    ],
    compliance: ['PCI DSS', 'SOC 2 Type II', 'GLBA', 'FFIEC', 'SOX'],
    useCases: [
      'Real-time fraud detection',
      'Payment processing platforms',
      'Credit risk modeling',
      'Anti-money laundering (AML)',
      'Trading analytics platforms',
      'Robo-advisor engines'
    ],
    technologies: ['Dataflow', 'Bigtable', 'Cloud KMS', 'Vertex AI', 'Cloud Armor', 'Chronicle Security'],
    caseStudyHighlight: {
      title: 'Fintech Startup: Real-time Fraud Detection',
      result: 'Detected fraud in <100ms with 99.5% accuracy, saving $2M annually'
    }
  },
  {
    slug: 'media-analytics',
    icon: TrendingUp,
    title: 'Media & Analytics',
    description: 'Data platforms and AI for media companies, publishers, and analytics providers.',
    challenges: [
      'High-volume data ingestion',
      'Real-time personalization',
      'Content recommendation at scale',
      'Ad targeting and optimization',
      'User engagement analytics',
      'Video and image processing'
    ],
    solutions: [
      'Event streaming architecture',
      'Real-time recommendation engines',
      'Content moderation AI',
      'Personalization platforms',
      'Video transcoding pipelines',
      'Audience analytics dashboards'
    ],
    compliance: ['GDPR', 'CCPA', 'COPPA'],
    useCases: [
      'Personalized content feeds',
      'Video recommendation systems',
      'Real-time audience analytics',
      'Programmatic ad optimization',
      'Content moderation automation',
      'Multi-platform attribution'
    ],
    technologies: ['Pub/Sub', 'Dataflow', 'BigQuery', 'Vertex AI', 'Transcoder API', 'Vision AI'],
    caseStudyHighlight: {
      title: 'Media Company: Real-time Personalization',
      result: 'Increased engagement by 35% with sub-100ms recommendation latency'
    }
  },
  {
    slug: 'operations',
    icon: Wrench,
    title: 'Operations & Manufacturing',
    description: 'IoT, automation, and predictive maintenance for manufacturing and operations-heavy businesses.',
    challenges: [
      'Equipment downtime costs',
      'Supply chain optimization',
      'Quality control at scale',
      'IoT data management',
      'Predictive maintenance',
      'Operational efficiency'
    ],
    solutions: [
      'IoT data pipelines',
      'Predictive maintenance ML models',
      'Computer vision quality inspection',
      'Supply chain optimization',
      'Real-time operational dashboards',
      'Anomaly detection systems'
    ],
    compliance: ['ISO 9001', 'ISO 27001', 'Industry-specific standards'],
    useCases: [
      'Predictive maintenance systems',
      'Quality inspection automation',
      'Supply chain analytics',
      'Equipment monitoring (IoT)',
      'Production optimization',
      'Defect detection with computer vision'
    ],
    technologies: ['IoT Core', 'Dataflow', 'BigQuery', 'Vertex AI', 'Vision AI', 'Time Series Insights'],
    caseStudyHighlight: {
      title: 'Manufacturing: Predictive Maintenance',
      result: 'Reduced unplanned downtime by 45% with ML-based early warning system'
    }
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find(industry => industry.slug === slug);
};
