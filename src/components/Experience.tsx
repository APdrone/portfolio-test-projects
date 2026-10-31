// src/components/Experience.tsx
import React from 'react';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Award, Building2 } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  client?: string;
  period: string;
  current?: boolean;
  impactMetrics: string[];
  description: string[];
  coreTech: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Lead SDET',
    company: 'EPAM Systems',
    client: 'Cox Automotive (DRiP Platform)',
    period: 'Oct 2021 – Present',
    current: true,
    impactMetrics: ['-30% Release Validation Time', '70% Regression Coverage', '+25% API Speedup', 'GenAI RAGAS Guardrails'],
    description: [
      'Architected and owned end-to-end automation for Cox Automotive’s mission-critical DRiP platform using Playwright (UI), Pytest + requests (API), and Allure reports integrated into GitHub Actions.',
      'Engineered scalable regression suites cutting release cycle validation by 30% while expanding automated test coverage from 45% to 70%.',
      'Orchestrated distributed performance & load testing with Artillery, identifying key bottlenecks and improving API response times by ~25%.',
      'Embedded Splunk, Datadog, and New Relic APM telemetry directly into QA pipelines for instant triage and root-cause observability.',
      'Designed validation guardrails for GenAI applications utilizing LangChain + RAGAS to benchmark prompt accuracy and prevent hallucinations.',
      'Mentored QA engineers across distributed teams, established coding frameworks, and instituted peer-review quality standards.',
    ],
    coreTech: ['Playwright', 'Pytest', 'Python', 'Artillery', 'GitHub Actions', 'LangChain', 'RAGAS', 'Datadog'],
  },
  {
    title: 'Senior Associate QA',
    company: 'Publicis Sapient',
    client: 'GreenSky Lending & Plan Viewer',
    period: 'Oct 2019 – Oct 2021',
    impactMetrics: ['Bravo Award Winner', '-40% Script Duplication', '-20% Defect Leakage'],
    description: [
      'Delivered full-stack QA automation for GreenSky’s fintech lending platform and Plan Viewer using Cypress, WebdriverIO, and Appium across responsive web and native mobile.',
      'Built and maintained enterprise CI/CD workflows in Jenkins and GitHub Actions with centralized analytics in ReportPortal.',
      'Designed and published reusable Cypress custom command and component libraries, slashing script duplication across teams by 40%.',
      'Partnered closely with product management and dev teams during design sprints, reducing production defect leakage by 20%.',
      'Honored with company-wide Bravo awards for outstanding technical automation delivery and QA mentorship.',
    ],
    coreTech: ['Cypress', 'WebdriverIO', 'Appium', 'Jenkins', 'ReportPortal', 'TypeScript'],
  },
  {
    title: 'Senior Software QA',
    company: 'RSK Business Solutions',
    client: 'Vistra Client Portal',
    period: 'Nov 2018 – Oct 2019',
    impactMetrics: ['-35% Manual QA Time', '60% Smoke Automated'],
    description: [
      'Led test automation architecture for Vistra’s global Client Portal, implementing Selenium + Cucumber BDD frameworks with Java + TestNG.',
      'Automated 60% of recurring smoke and regression suites, slashing manual testing cycles by 35% per release sprint.',
      'Engineered API contract and regression suites using Rest Assured and Postman to ensure backend transaction and data integrity.',
      'Configured Jenkins CI pipelines with Maven for continuous multi-environment regression triggers.',
    ],
    coreTech: ['Java', 'Selenium', 'Cucumber BDD', 'TestNG', 'Rest Assured', 'Jenkins', 'Maven'],
  },
  {
    title: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    client: 'CitiDirect Banking Suite',
    period: 'Aug 2014 – Oct 2018',
    impactMetrics: ['-40% Regression Cycle', 'JAWS Accessibility QA'],
    description: [
      'Developed and scaled automated regression test suites for CitiDirect corporate banking applications using Selenium WebDriver, Java, and TestNG.',
      'Pioneered automated accessibility testing workflows using JAWS screen reader and axe-core to ensure strict banking compliance.',
      'Optimized framework design and parallel grid execution, reducing overall regression execution time by 40%.',
      'Collaborated seamlessly across global onshore/offshore teams, mentoring junior engineers in automation best practices.',
    ],
    coreTech: ['Selenium WebDriver', 'Java', 'TestNG', 'JAWS Accessibility', 'SQL', 'SVN/Git'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            Career Journey & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            10+ Years of Enterprise QA Impact
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Proven history of driving test automation excellence for Fortune 500 enterprises, automotive leaders, and tier-1 fintech institutions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-8 w-0.5 bg-gradient-to-b from-indigo-500 via-indigo-300 to-slate-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20 group">
                
                {/* Timeline node icon */}
                <div
                  className={`absolute left-0 sm:left-4 -translate-x-1/2 top-1.5 w-8 h-8 rounded-full border-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-sm ${
                    exp.current
                      ? 'bg-indigo-600 border-indigo-100 text-white shadow-indigo-300'
                      : 'bg-white border-indigo-200 text-indigo-600'
                  }`}
                >
                  {exp.current ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                  ) : (
                    <Briefcase className="w-3.5 h-3.5" />
                  )}
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 bg-slate-50/70 hover:bg-white rounded-2xl border border-slate-200/80 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
                  
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 mt-1 text-sm font-medium">
                        <span className="text-indigo-600 font-bold flex items-center gap-1">
                          <Building2 className="w-4 h-4 inline" /> {exp.company}
                        </span>
                        {exp.client && (
                          <>
                            <span className="text-slate-300">•</span>
                            <span className="text-slate-600 font-medium">Client: {exp.client}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shrink-0 self-start sm:self-auto shadow-2xs">
                      <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Impact Metrics Badges */}
                  <div className="flex flex-wrap gap-2 my-4">
                    {exp.impactMetrics.map((metric, mi) => (
                      <span
                        key={mi}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200"
                      >
                        <TrendingUp className="w-3 h-3 text-emerald-600" />
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Description Points */}
                  <ul className="space-y-2.5 text-sm sm:text-base text-slate-600 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Core Tech Stack */}
                  <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-500 mr-2">Key Tech:</span>
                    {exp.coreTech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-xs font-mono bg-white text-slate-700 border border-slate-200 shadow-2xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

