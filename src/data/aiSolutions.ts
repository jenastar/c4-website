export interface AISolution {
  slug: string;
  title: string;
  category: 'Automation' | 'Intelligence' | 'Analytics' | 'Infrastructure';
  tagline: string;
  description: string;
  benefits: string[];
  technicalApproach: string;
  useCases: string[];
  technologies: string[];
  timeline: string;
  relatedServices: string[];
}

export const aiSolutions: AISolution[] = [
  {
    slug: 'ai-copilots',
    title: 'Internal AI Copilots',
    category: 'Automation',
    tagline: 'Accelerate engineering, operations, and support work with guardrails',
    description: 'AI assistants that help your teams work faster while maintaining security and compliance. Built on Vertex AI with custom knowledge bases.',
    benefits: [
      'Reduce repetitive tasks by 40-60%',
      'Faster onboarding for new team members',
      'Consistent quality across team',
      'Built-in governance and audit trails',
      'Context-aware suggestions',
      'Searchable conversation history'
    ],
    technicalApproach: 'Vertex AI + Gemini models with RAG (Retrieval-Augmented Generation) over internal documentation. Fine-tuned for domain-specific terminology and workflows. Integrated with existing tools via APIs.',
    useCases: [
      'Code review assistance for engineering teams',
      'Support ticket summarization and routing',
      'Documentation generation from code',
      'Technical writing assistance',
      'Onboarding knowledge base queries',
      'Incident response playbook recommendations'
    ],
    technologies: ['Vertex AI', 'Gemini Pro', 'LangChain', 'BigQuery', 'Cloud Functions', 'Vector Search'],
    timeline: '6-8 weeks',
    relatedServices: ['ai-automation', 'data-platforms'],
  },
  {
    slug: 'knowledge-search',
    title: 'Knowledge Search (RAG)',
    category: 'Intelligence',
    tagline: 'Enterprise search powered by AI with source citations',
    description: 'Semantic search across all your documents, wikis, and knowledge bases with AI-powered understanding and accurate source citations.',
    benefits: [
      'Find information in seconds, not hours',
      '95%+ search accuracy with citations',
      'Works across multiple data sources',
      'Automatic knowledge graph generation',
      'Compliance-ready audit trails',
      'Continuous learning from usage'
    ],
    technicalApproach: 'RAG architecture using Vertex AI Embeddings for semantic search, BigQuery for structured data, and Cloud Storage for documents. Custom ranking algorithms balance relevance and recency.',
    useCases: [
      'Internal documentation search',
      'Customer support knowledge bases',
      'Legal document research',
      'Technical spec discovery',
      'Policy and procedure lookup',
      'Competitive intelligence research'
    ],
    technologies: ['Vertex AI Embeddings', 'BigQuery Vector Search', 'Cloud Storage', 'Gemini', 'Pub/Sub'],
    timeline: '4-6 weeks',
    relatedServices: ['ai-automation', 'data-platforms'],
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation',
    category: 'Automation',
    tagline: 'AI-powered automation for repetitive business processes',
    description: 'Automate complex workflows that require judgment and decision-making, not just rule-based logic. Reduce manual work while maintaining human oversight.',
    benefits: [
      'Automate 60-80% of routine tasks',
      'Consistent decision quality',
      'Audit trail for all actions',
      'Human-in-the-loop for edge cases',
      'Scales with workload growth',
      'Continuous improvement from feedback'
    ],
    technicalApproach: 'Event-driven architecture using Pub/Sub for workflow orchestration. Vertex AI for decision-making. Cloud Functions for task execution. BigQuery for analytics and monitoring.',
    useCases: [
      'Support ticket triage and routing',
      'Invoice processing and approval',
      'Customer onboarding automation',
      'Data validation and cleansing',
      'Report generation and distribution',
      'Compliance workflow automation'
    ],
    technologies: ['Pub/Sub', 'Cloud Functions', 'Workflows', 'Vertex AI', 'BigQuery', 'Cloud Run'],
    timeline: '6-10 weeks',
    relatedServices: ['ai-automation', 'cloud-foundations'],
  },
  {
    slug: 'document-intelligence',
    title: 'Document Intelligence',
    category: 'Intelligence',
    tagline: 'Extract structured data from documents using AI',
    description: 'Process invoices, contracts, forms, and other documents automatically. Extract key information with high accuracy and integrate with your systems.',
    benefits: [
      '99%+ extraction accuracy',
      'Process 100x faster than manual',
      'Custom extraction templates',
      'Multi-language support',
      'Confidence scores and validation',
      'Human review for exceptions'
    ],
    technicalApproach: 'Document AI for OCR and entity extraction. Custom processors trained on your document types. Cloud Functions for post-processing and validation. BigQuery for data storage and analysis.',
    useCases: [
      'Invoice data extraction',
      'Contract analysis and review',
      'Form processing automation',
      'ID and compliance document verification',
      'Receipt and expense processing',
      'Medical records extraction'
    ],
    technologies: ['Document AI', 'Cloud Vision API', 'Cloud Functions', 'BigQuery', 'Cloud Storage'],
    timeline: '4-6 weeks',
    relatedServices: ['ai-automation', 'data-platforms'],
  },
  {
    slug: 'predictive-analytics',
    title: 'Predictive Analytics',
    category: 'Analytics',
    tagline: 'ML models that forecast business outcomes',
    description: 'Build and deploy machine learning models that predict customer behavior, demand, churn, and other key business metrics.',
    benefits: [
      'Forecast accuracy improvement',
      'Early warning for at-risk accounts',
      'Data-driven decision making',
      'Automated model retraining',
      'Explainable predictions',
      'Real-time scoring'
    ],
    technicalApproach: 'Vertex AI AutoML or custom models using TensorFlow. BigQuery ML for feature engineering. Continuous training pipelines with Cloud Composer. Model monitoring with Vertex AI Model Monitoring.',
    useCases: [
      'Customer churn prediction',
      'Demand forecasting',
      'Lead scoring and conversion',
      'Fraud detection',
      'Inventory optimization',
      'Dynamic pricing models'
    ],
    technologies: ['Vertex AI', 'BigQuery ML', 'TensorFlow', 'Cloud Composer', 'Dataflow'],
    timeline: '8-12 weeks',
    relatedServices: ['data-platforms', 'ai-automation'],
  },
  {
    slug: 'chatbots-assistants',
    title: 'Chatbots & Assistants',
    category: 'Automation',
    tagline: 'Conversational AI for customer and employee support',
    description: 'Deploy intelligent chatbots that handle common questions, route complex issues, and provide 24/7 support with natural language understanding.',
    benefits: [
      'Handle 70%+ of common questions',
      '24/7 availability',
      'Consistent response quality',
      'Multi-language support',
      'Seamless human handoff',
      'Continuous learning'
    ],
    technicalApproach: 'Dialogflow CX for conversation management. Vertex AI for natural language understanding. Integration with existing support systems via APIs. BigQuery for analytics and training data.',
    useCases: [
      'Customer support automation',
      'IT helpdesk assistance',
      'Sales qualification',
      'FAQ answering',
      'Order status tracking',
      'Appointment scheduling'
    ],
    technologies: ['Dialogflow CX', 'Vertex AI', 'Cloud Functions', 'BigQuery', 'Contact Center AI'],
    timeline: '6-8 weeks',
    relatedServices: ['ai-automation', 'data-platforms'],
  },
  {
    slug: 'anomaly-detection',
    title: 'Anomaly Detection',
    category: 'Analytics',
    tagline: 'Automatically detect unusual patterns and outliers',
    description: 'Monitor systems, transactions, and user behavior to identify anomalies in real-time. Catch issues before they become problems.',
    benefits: [
      'Early problem detection',
      'Reduce false positives',
      'Automated alerting',
      'Root cause analysis',
      'Continuous baseline learning',
      'Multi-metric correlation'
    ],
    technicalApproach: 'Statistical models and ML algorithms for anomaly detection. Cloud Monitoring for metric collection. Pub/Sub for real-time event processing. BigQuery for historical analysis and model training.',
    useCases: [
      'Fraud detection in transactions',
      'System performance monitoring',
      'Security threat detection',
      'Quality assurance in manufacturing',
      'Network anomaly detection',
      'User behavior monitoring'
    ],
    technologies: ['Vertex AI', 'Cloud Monitoring', 'Pub/Sub', 'BigQuery', 'Dataflow'],
    timeline: '6-8 weeks',
    relatedServices: ['data-platforms', 'security-governance'],
  },
  {
    slug: 'recommendation-engines',
    title: 'Recommendation Engines',
    category: 'Intelligence',
    tagline: 'Personalized recommendations that drive engagement',
    description: 'Build recommendation systems that suggest products, content, or actions based on user behavior and preferences. Increase engagement and conversion.',
    benefits: [
      'Increase conversion rates',
      'Boost user engagement',
      'Personalized experiences',
      'Cold-start handling',
      'Real-time recommendations',
      'A/B testing built-in'
    ],
    technicalApproach: 'Vertex AI Recommendations or custom collaborative filtering. BigQuery for user behavior data. Cloud Functions for real-time serving. Continuous model updates based on new interactions.',
    useCases: [
      'E-commerce product recommendations',
      'Content discovery platforms',
      'Next-best-action for sales',
      'Learning path suggestions',
      'Cross-sell and upsell',
      'Personalized marketing'
    ],
    technologies: ['Vertex AI Recommendations', 'BigQuery', 'Cloud Functions', 'Memorystore', 'Dataflow'],
    timeline: '8-10 weeks',
    relatedServices: ['data-platforms', 'ai-automation'],
  },
];

export const getAISolutionBySlug = (slug: string): AISolution | undefined => {
  return aiSolutions.find(solution => solution.slug === slug);
};

export const getAISolutionsByCategory = (category: AISolution['category']): AISolution[] => {
  return aiSolutions.filter(solution => solution.category === category);
};
