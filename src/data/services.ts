import { Bot, Database, Cloud, Shield, Gauge, LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  timeline: string;
  successMetrics: string[];
  technologies: string[];
  useCases: string[];
  color: string;
}

export const services: Service[] = [
  {
    slug: 'ai-automation',
    icon: Bot,
    title: 'AI & Automation',
    tagline: 'Production-ready AI systems that integrate with your workflows',
    description: 'Custom AI agents, document processing, and workflow automation powered by Vertex AI and Google\'s foundation models.',
    longDescription: 'Design and deliver AI solutions that integrate seamlessly with your existing systems—apps, data platforms, and workflows—with clear success metrics. We build production-grade AI systems that your team can own and operate.',
    features: [
      'AI copilots for internal teams',
      'Workflow automation (ticket triage, routing)',
      'Document intelligence with RAG',
      'Evaluation and monitoring frameworks',
      'LLM integration and fine-tuning',
      'Custom agent orchestration'
    ],
    deliverables: [
      'Working AI system in your environment',
      'Integration with existing tools',
      'Evaluation and governance plan',
      'Monitoring and alerting setup',
      'Handoff documentation',
      'Team training sessions'
    ],
    timeline: '4-8 weeks',
    successMetrics: [
      'Time saved per workflow',
      'Accuracy/precision targets',
      'User adoption rate',
      'ROI calculation',
      'System uptime and reliability'
    ],
    technologies: [
      'Vertex AI',
      'Gemini Models',
      'LangChain',
      'BigQuery',
      'Cloud Functions',
      'Pub/Sub'
    ],
    useCases: [
      'Customer support automation',
      'Engineering productivity tools',
      'Document processing pipelines',
      'Code review assistants',
      'Knowledge search systems'
    ],
    color: 'google-blue',
  },
  {
    slug: 'data-platforms',
    icon: Database,
    title: 'Data Platforms',
    tagline: 'Modern data infrastructure with BigQuery and real-time analytics',
    description: 'Modern data infrastructure with BigQuery, real-time analytics, and ML-ready data pipelines.',
    longDescription: 'Build scalable data platforms that power analytics, ML models, and business intelligence. We design architectures that grow with your data needs while maintaining performance and cost efficiency.',
    features: [
      'BigQuery data warehousing',
      'Real-time streaming pipelines',
      'ETL/ELT orchestration',
      'Data lake architecture',
      'ML feature stores',
      'Analytics dashboards'
    ],
    deliverables: [
      'Production data pipeline',
      'BigQuery schema design',
      'Dataflow streaming jobs',
      'dbt transformations',
      'Monitoring and alerting',
      'Documentation and runbooks'
    ],
    timeline: '6-10 weeks',
    successMetrics: [
      'Query performance (p95 latency)',
      'Data freshness SLAs',
      'Cost per query optimization',
      'Pipeline reliability (99.9% uptime)',
      'Data quality scores'
    ],
    technologies: [
      'BigQuery',
      'Dataflow',
      'Pub/Sub',
      'Cloud Composer',
      'dbt',
      'Looker'
    ],
    useCases: [
      'Product analytics platforms',
      'Customer data warehouses',
      'Event streaming architectures',
      'ML training pipelines',
      'Business intelligence systems'
    ],
    color: 'google-green',
  },
  {
    slug: 'cloud-foundations',
    icon: Cloud,
    title: 'Cloud Foundations',
    tagline: 'Production-ready GCP infrastructure with landing zones and DevOps automation',
    description: 'Production-ready GCP infrastructure with landing zones, networking, and DevOps automation.',
    longDescription: 'Establish secure, scalable cloud infrastructure using Google Cloud best practices. We build landing zones that support multiple teams and workloads while maintaining security and governance.',
    features: [
      'Landing zone architecture',
      'Multi-project organization',
      'Network design (VPC, subnets, firewall)',
      'CI/CD pipeline setup',
      'Infrastructure as Code (Terraform)',
      'Service mesh configuration'
    ],
    deliverables: [
      'Production-ready landing zone',
      'Network architecture documentation',
      'Terraform modules',
      'CI/CD pipelines',
      'Security controls implementation',
      'Runbook and procedures'
    ],
    timeline: '4-6 weeks',
    successMetrics: [
      'Deployment frequency',
      'Mean time to recovery',
      'Infrastructure cost per environment',
      'Security compliance score',
      'Time to provision new projects'
    ],
    technologies: [
      'Terraform',
      'Cloud Build',
      'GKE',
      'Cloud Run',
      'VPC',
      'Cloud Armor'
    ],
    useCases: [
      'Multi-tenant SaaS platforms',
      'Microservices architectures',
      'Development/staging/production environments',
      'Multi-region deployments',
      'Hybrid cloud setups'
    ],
    color: 'google-yellow',
  },
  {
    slug: 'security-governance',
    icon: Shield,
    title: 'Security & Governance',
    tagline: 'Enterprise security controls and compliance frameworks',
    description: 'Enterprise security controls, compliance frameworks, and identity management.',
    longDescription: 'Implement comprehensive security and governance frameworks that meet compliance requirements while enabling developer productivity. We balance security with usability.',
    features: [
      'IAM policy design',
      'Compliance automation (SOC 2, HIPAA, GDPR)',
      'Security monitoring and alerting',
      'Audit logging and trails',
      'Secrets management',
      'Zero-trust architecture'
    ],
    deliverables: [
      'IAM roles and policies',
      'Compliance framework documentation',
      'Security monitoring dashboards',
      'Incident response procedures',
      'Audit logging configuration',
      'Compliance report generation'
    ],
    timeline: '6-8 weeks',
    successMetrics: [
      'Security incidents detected',
      'Mean time to detect threats',
      'Compliance audit pass rate',
      'Policy violation rate',
      'Access review completion time'
    ],
    technologies: [
      'Cloud IAM',
      'Security Command Center',
      'Cloud Logging',
      'Secret Manager',
      'Binary Authorization',
      'Cloud KMS'
    ],
    useCases: [
      'SOC 2 compliance programs',
      'HIPAA-compliant healthcare apps',
      'Financial services security',
      'Multi-tenant security isolation',
      'Continuous compliance monitoring'
    ],
    color: 'google-red',
  },
  {
    slug: 'optimization',
    icon: Gauge,
    title: 'Optimization',
    tagline: 'Cost optimization and performance tuning for existing workloads',
    description: 'Cost optimization, performance tuning, and operational excellence for existing workloads.',
    longDescription: 'Optimize existing GCP workloads for cost, performance, and reliability. We analyze your infrastructure and implement improvements that deliver measurable results.',
    features: [
      'Cost analysis and reduction',
      'Performance profiling',
      'Resource right-sizing',
      'Architecture review',
      'Observability improvements',
      'Capacity planning'
    ],
    deliverables: [
      'Cost optimization report',
      'Performance improvement plan',
      'Implemented optimizations',
      'Monitoring improvements',
      'Capacity planning model',
      'ROI analysis'
    ],
    timeline: '2-4 weeks',
    successMetrics: [
      'Monthly cost reduction (%)',
      'Performance improvement (latency)',
      'System reliability (uptime)',
      'Resource utilization efficiency',
      'Waste elimination'
    ],
    technologies: [
      'Cloud Monitoring',
      'Cloud Trace',
      'Cloud Profiler',
      'Committed Use Discounts',
      'Cloud Functions',
      'Autoscaling'
    ],
    useCases: [
      'Runaway cloud costs',
      'Slow application performance',
      'Over-provisioned resources',
      'Legacy architecture modernization',
      'Multi-cloud cost optimization'
    ],
    color: 'google-blue',
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(service => service.slug === slug);
};
