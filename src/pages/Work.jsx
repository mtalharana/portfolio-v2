import React from 'react';
import CaseStudy from '../components/CaseStudy';

const caseStudies = [
  {
    title: 'Streamlining Operations for a Global Logistics Firm',
    challenge: 'A leading logistics company was struggling with fragmented data systems, leading to operational inefficiencies and delayed decision-making.',
    solution: 'We developed a unified digital platform that integrated disparate data sources into a single, intuitive dashboard, providing real-time visibility and actionable insights.',
    impact: 'The new system reduced administrative overhead by 30%, improved delivery accuracy by 25%, and empowered leadership with data-driven strategic capabilities.',
  },
  {
    title: 'Enhancing User Engagement for a Health & Wellness App',
    challenge: 'A promising wellness app faced low user retention rates due to a confusing interface and lack of personalized content.',
    solution: 'We redesigned the product experience from the ground up, focusing on a clean, intuitive UI and an AI-powered recommendation engine for personalized user journeys.',
    impact: 'The revamped app achieved a 50% increase in daily active users, a 40% improvement in user retention, and overwhelmingly positive feedback from the community.',
  },
  {
    title: 'Driving Growth for a Sustainable E-commerce Brand',
    challenge: 'An innovative e-commerce startup needed a robust growth strategy to scale its impact without compromising its commitment to sustainability.',
    solution: 'We implemented a multi-channel growth strategy, combining targeted digital marketing with an automated supply chain solution to ensure sustainable and efficient scaling.',
    impact: 'The brand experienced a 200% growth in revenue within the first year, expanded its customer base to three new markets, and solidified its position as a leader in sustainable e-commerce.',
  },
];

const Work = () => {
  return (
    <div className="bg-accent py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">Our Work</h1>
        </div>
        <div>
          {caseStudies.map((study, index) => (
            <CaseStudy key={index} {...study} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
