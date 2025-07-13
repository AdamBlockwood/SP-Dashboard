import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Color Palette
const COLORS = {
  school: '#10B981',      // Green
  nonSchool: '#3B82F6',   // Blue
  accent: '#F59E0B',      // Orange
  neutral: '#6B7280',     // Gray
  training: '#8B5CF6',    // Violet for training
  ethics: '#EC4899',       // Pink for ethics
  risk: '#EF4444',         // Red for risks
  likert: {
    stronglyAgree: '#166534', // Dark Green
    agree: '#16A34A',         // Green
    somewhatAgree: '#84CC16',  // Lime
    neither: '#9CA3AF',       // Gray
    somewhatDisagree: '#F97316',// Orange
    disagree: '#EA580C',       // Dark Orange
    stronglyDisagree: '#C2410C'// Red-Orange
  }
};

// Data (Centralized for clarity)
// =============================================================================
const nonSchoolPsychName = 'Other Related Service Providers';

const schoolPsychDemographics = {
  ageStats: { mean: 43.05, median: 42.00, stdDev: 12.64, n: 111 },
  experienceStats: { mean: 16.07, median: 14.00, stdDev: 11.79, n: 111 },
  education: [
    { name: 'Education Specialist', value: 69.4 },
    { name: 'Masters', value: 18.0 },
    { name: 'Doctorate', value: 9.9 },
    { name: 'Other', value: 2.7 }
  ],
   gender: [
    { name: 'Woman', value: 87.4 },
    { name: 'Man', value: 11.7 },
    { name: 'Prefer not to answer', value: 0.9 },
  ],
  race: [
    { name: 'White or Caucasian', value: 91.9 },
    { name: 'Prefer not to answer', value: 3.6 },
    { name: 'Black or African American', value: 2.7 },
    { name: 'Asian', value: 0.9 },
    { name: 'Prefer to self-describe', value: 0.9 },
  ],
  workSettings: [
    { name: 'Traditional public school', value: 79.8 },
    { name: 'Private practice', value: 6.2 },
    { name: 'Private school', value: 6.2 },
    { name: 'Charter public school', value: 5.4 },
    { name: 'College/university', value: 2.3 },
    { name: 'Other', value: 1.6 },
  ],
   primaryWorkPosition: [
    { name: 'Physical Therapist', value: 25.7 },
    { name: 'Occupational Therapist', value: 24.2 },
    { name: 'Speech-language Pathologist', value: 19.5 },
    { name: 'Physical Therapist Assistant', value: 9.7 },
    { name: 'School Psychologist', value: 9.2 },
    { name: 'Occupational Therapy Assistant', value: 7.0 },
    { name: 'Counselor', value: 6.2 },
    { name: 'Other', value: 4.0 },
    { name: 'Nurse', value: 3.4 },
    { name: 'Audiologist', value: 0.2 },
  ],
};

const aiTasksData = [
    { task: 'Generate recommendations', '% of AI Users': 58.8, '% of Total Sample': 46.5 },
    { task: 'Generate summaries', '% of AI Users': 52.0, '% of Total Sample': 41.1 },
    { task: 'Generate accessible explanations', '% of AI Users': 39.2, '% of Total Sample': 31.0 },
    { task: 'Write reports', '% of AI Users': 38.2, '% of Total Sample': 30.2 },
    { task: 'Generate emails', '% of AI Users': 37.3, '% of Total Sample': 29.5 },
    { task: 'Answer work-related questions', '% of AI Users': 36.3, '% of Total Sample': 28.7 },
    { task: 'Interpret test results', '% of AI Users': 18.6, '% of Total Sample': 14.7 },
    { task: 'Generate content for presentations', '% of AI Users': 16.7, '% of Total Sample': 13.2 },
    { task: 'Generate list of treatments', '% of AI Users': 13.7, '% of Total Sample': 10.9 },
    { task: 'Other', '% of AI Users': 11.8, '% of Total Sample': 9.3 },
    { task: 'Transcribe sessions', '% of AI Users': 6.9, '% of Total Sample': 5.4 },
    { task: 'Translate materials', '% of AI Users': 6.9, '% of Total Sample': 5.4 },
    { task: 'Generate treatment goals', '% of AI Users': 5.9, '% of Total Sample': 4.7 },
    { task: 'Write a session or progress note', '% of AI Users': 4.9, '% of Total Sample': 3.9 },
    { task: 'Assist with billing/coding', '% of AI Users': 2.0, '% of Total Sample': 1.6 },
    { task: 'Generate treatment plans', '% of AI Users': 2.0, '% of Total Sample': 1.6 },
];


const reportWritingUsageData = [
    { task: 'Write summary section', percent: 76.9 },
    { task: 'Write recommendations', percent: 64.1 },
    { task: 'Rewrite for comprehension', percent: 64.1 },
    { task: 'Summarize sections', percent: 48.7 },
    { task: 'Reduce jargon', percent: 46.2 },
    { task: 'Write background section', percent: 28.2 },
    { task: 'Write results section', percent: 28.2 },
    { task: 'Edit report text', percent: 28.2 },
    { task: 'Translate text', percent: 5.1 },
];

const reportWritingStats = {
    mean: 24.80,
    median: 15.00,
    stdDev: 24.71,
    n: 35
};

const promptTrainingData = [
    { type: 'Formal Training', percent: 37.2 },
    { type: 'No Training', percent: 34.1 },
    { type: 'Informal Training', percent: 24.8 },
    { type: 'Reviewing Examples', percent: 19.4 },
    { type: 'Unsure', percent: 1.6 },
];

const educationSourcesData = [
    { source: 'Colleagues/Co-workers', Used: 45.0, Desired: null },
    { source: 'Webinar/Online Training', Used: 42.6, Desired: 68.2 },
    { source: 'In-person Training', Used: 38.0, Desired: 55.0 },
    { source: 'Websites', Used: 28.7, Desired: 17.1 },
    { source: 'Social Media', Used: 21.7, Desired: 7.8 },
    { source: 'Journal Articles', Used: 20.2, Desired: 21.7 },
    { source: 'Videos', Used: null, Desired: 41.1 },
];

const ethicsPerceptionsData = [
    { task: 'Practitioners should be trained', 'Strongly Agree': 38.9, 'Agree': 31.9, 'Somewhat Agree': 20.4, 'Neither': 7.1, 'Somewhat Disagree': 0.9, 'Disagree': 0, 'Strongly Disagree': 0.9},
    { task: 'Use for intervention planning', 'Strongly Agree': 7.1, 'Agree': 36.3, 'Somewhat Agree': 30.1, 'Neither': 16.8, 'Somewhat Disagree': 7.1, 'Disagree': 1.8, 'Strongly Disagree': 0.9},
    { task: 'Use to write intervention goals', 'Strongly Agree': 7.1, 'Agree': 34.5, 'Somewhat Agree': 31.9, 'Neither': 15.0, 'Somewhat Disagree': 7.1, 'Disagree': 2.7, 'Strongly Disagree': 1.8},
    { task: 'Use to write reports', 'Strongly Agree': 6.2, 'Agree': 26.5, 'Somewhat Agree': 26.5, 'Neither': 18.6, 'Somewhat Disagree': 8.8, 'Disagree': 7.1, 'Strongly Disagree': 6.2},
    { task: 'Use to write session notes', 'Strongly Agree': 7.1, 'Agree': 29.5, 'Somewhat Agree': 15.2, 'Neither': 21.4, 'Somewhat Disagree': 14.3, 'Disagree': 9.8, 'Strongly Disagree': 2.7},
    { task: 'Use to interpret test scores', 'Strongly Agree': 2.7, 'Agree': 23.9, 'Somewhat Agree': 19.5, 'Neither': 16.8, 'Somewhat Disagree': 18.6, 'Disagree': 8.0, 'Strongly Disagree': 10.6},
];

const responsibilityData = [
    { name: 'The person using AI', percent: 82.0 },
    { name: 'Licensing boards/orgs', percent: 8.1 },
    { name: 'The AI creators', percent: 5.4 },
    { name: 'The company/district', percent: 4.5 },
];

const piiEntryData = [
    { name: 'No', value: 81.1 },
    { name: 'Yes', value: 11.1 },
    { name: 'Unsure', value: 7.8 },
];

const employerPolicyData = [
    { name: 'No Policy', value: 54.8 },
    { name: 'Unsure', value: 40.0 },
    { name: 'Yes, Has Policy', value: 5.2 },
];

const practitionerSentimentsData = [
    { sentiment: 'Helpful in my practice', 'Strongly Agree': 18.9, 'Agree': 21.6, 'Somewhat Agree': 36.0, 'Neither': 15.3, 'Somewhat Disagree': 3.6, 'Disagree': 1.8, 'Strongly Disagree': 2.7 },
    { sentiment: 'Will become over-reliant on AI', 'Strongly Agree': 20.7, 'Agree': 0, 'Somewhat Agree': 52.3, 'Neither': 0, 'Somewhat Disagree': 21.6, 'Disagree': 0, 'Strongly Disagree': 5.4 },
    { sentiment: 'Will lead to privacy breaches', 'Strongly Agree': 14.5, 'Agree': 0, 'Somewhat Agree': 53.6, 'Neither': 0, 'Somewhat Disagree': 28.2, 'Disagree': 0, 'Strongly Disagree': 3.6 },
    { sentiment: 'Will experience loss of clinical skills', 'Strongly Agree': 9.9, 'Agree': 0, 'Somewhat Agree': 44.1, 'Neither': 0, 'Somewhat Disagree': 31.5, 'Disagree': 0, 'Strongly Disagree': 14.4 },
    { sentiment: 'I worry my job will become obsolete', 'Strongly Agree': 9.9, 'Agree': 0, 'Somewhat Agree': 33.3, 'Neither': 0, 'Somewhat Disagree': 25.2, 'Disagree': 0, 'Strongly Disagree': 31.5 },
    { sentiment: 'AI will perpetuate bias', 'Strongly Agree': 9.3, 'Agree': 0, 'Somewhat Agree': 32.4, 'Neither': 0, 'Somewhat Disagree': 44.4, 'Disagree': 0, 'Strongly Disagree': 13.9 },
];

const personalUsageData = [
  { frequency: "Haven't used", 'School Psychologists': 25.6, [nonSchoolPsychName]: 31.9 },
  { frequency: "&lt;1x/month", 'School Psychologists': 10.9, [nonSchoolPsychName]: 16.9 },
  { frequency: "1x/month", 'School Psychologists': 10.1, [nonSchoolPsychName]: 9.9 },
  { frequency: "2x/month", 'School Psychologists': 12.4, [nonSchoolPsychName]: 6.6 },
  { frequency: "3x/month", 'School Psychologists': 8.5, [nonSchoolPsychName]: 9.1 },
  { frequency: "Weekly", 'School Psychologists': 23.3, [nonSchoolPsychName]: 18.1 },
  { frequency: "Daily", 'School Psychologists': 9.3, [nonSchoolPsychName]: 7.4 },
];

const workUsageData = [
  { frequency: "Haven't used", 'School Psychologists': 20.9, [nonSchoolPsychName]: 46.7 },
  { frequency: "&lt;1x/month", 'School Psychologists': 14.0, [nonSchoolPsychName]: 13.0 },
  { frequency: "1x/month", 'School Psychologists': 7.8, [nonSchoolPsychName]: 8.0 },
  { frequency: "2x/month", 'School Psychologists': 7.8, [nonSchoolPsychName]: 6.5 },
  { frequency: "3x/month", 'School Psychologists': 6.2, [nonSchoolPsychName]: 6.1 },
  { frequency: "Weekly", 'School Psychologists': 25.6, [nonSchoolPsychName]: 14.6 },
  { frequency: "Daily", 'School Psychologists': 17.8, [nonSchoolPsychName]: 5.1 },
];

// Helper Components
// =============================================================================

const Card = ({ title, n, children, className = '' }) => (
  <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-200 ${className}`}>
    <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        {n && <span className="text-sm font-medium text-gray-500">N = {n}</span>}
    </div>
    {children}
  </div>
);

const QuestionWording = ({ questions }) => (
    <div className="bg-gray-100 p-5 rounded-lg border border-gray-200 mt-8">
        <h4 className="font-semibold text-gray-700 mb-3 text-lg">Survey Questions</h4>
        <div className="space-y-4">
            {questions.map((q, index) => (
                <div key={index}>
                    <h5 className="font-semibold text-gray-600">{q.title}</h5>
                    <p className="text-sm text-gray-500 italic mt-1" dangerouslySetInnerHTML={{ __html: q.text }} />
                </div>
            ))}
        </div>
    </div>
);

const FindingsBox = ({ title, items, color = 'emerald' }) => {
  const colorClasses = {
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', bullet: 'text-emerald-700' },
    sky: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', bullet: 'text-sky-700' },
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', bullet: 'text-amber-700' },
    slate: { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-800', bullet: 'text-slate-700' },
    fuchsia: { bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-800', bullet: 'text-fuchsia-700' },
    violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-800', bullet: 'text-violet-700' },
    pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-800', bullet: 'text-pink-700' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', bullet: 'text-red-700' },
  };
  const selectedColor = colorClasses[color] || colorClasses.emerald;

  return (
    <div className={`${selectedColor.bg} p-5 rounded-lg border ${selectedColor.border}`}>
      <h4 className={`font-semibold ${selectedColor.text} mb-2`}>{title}</h4>
      <ul className={`${selectedColor.bullet} space-y-1 list-disc list-inside`}>
        {items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
};

const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
    const RADIAN = Math.PI / 180;
    
    if (percent * 100 < 8) { 
        const radius = outerRadius + 25; 
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        const sx = cx + (outerRadius + 8) * Math.cos(-midAngle * RADIAN);
        const sy = cy + (outerRadius + 8) * Math.sin(-midAngle * RADIAN);

        return (
            <g>
                <path d={`M${sx},${sy}L${x},${y}`} stroke={COLORS.neutral} fill="none" />
                <circle cx={x} cy={y} r={2} fill={COLORS.neutral} />
                <text x={x + (x > cx ? 1 : -1) * 5} y={y} textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fill={COLORS.neutral} fontSize="12px">
                    {`${name.replace("Prefer not to answer", "No Answer")} (${(percent * 100).toFixed(1)}%)`}
                </text>
            </g>
        );
    }

    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize="14px" fontWeight="bold">
            {`${(percent * 100).toFixed(1)}%`}
        </text>
    );
};


// Tab Components
// =============================================================================

const DemographicsTab = () => {
  const PIE_COLORS_GENDER = [COLORS.school, COLORS.nonSchool, COLORS.neutral];
  const PIE_COLORS_EDUCATION = [COLORS.school, COLORS.accent, COLORS.nonSchool, COLORS.neutral];
 
  const questions = [
      { title: "Primary Work Position", text: "What is your primary work position?" },
      { title: "Age & Experience", text: "What is your age? / How many years have you worked as a school psychologist?" },
      { title: "Degree, Gender, Race, & Work Settings", text: "What is the highest degree that you have earned? / Which most closely describes your gender? / What is your race? / In what setting(s) do you work?"}
  ];

  return (
    <div className="space-y-8">
      <Card title="About This Data">
          <p className="text-gray-700">
              The data presented in this dashboard is a focused analysis of the <strong>School Psychologist</strong> subset (N=129) from a larger research sample of 1,399 related service providers. The chart below shows the professional breakdown of the full sample. All subsequent tabs in this dashboard refer specifically to the school psychologist group unless otherwise noted.
          </p>
      </Card>

       <Card title="Primary Work Position (Full Sample)" n="1399">
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={schoolPsychDemographics.primaryWorkPosition.sort((a,b) => b.value-a.value)} layout="vertical" margin={{top: 20, right: 30, left: 180, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number" unit="%"/>
                <YAxis type="category" dataKey="name" width={180}/>
                <Tooltip formatter={(value) => [`${value}%`, "of Full Sample"]}/>
                <Bar dataKey="value">
                    {schoolPsychDemographics.primaryWorkPosition.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.name === 'School Psychologist' ? COLORS.accent : COLORS.neutral} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
      </Card>
      <h2 className="text-2xl font-bold text-gray-800 tracking-tight border-t pt-8 mt-8">School Psychologist Demographics (N=129)</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Age Statistics" n={schoolPsychDemographics.ageStats.n}>
          <div className="space-y-2">
            <div className="flex justify-between"><span className="text-gray-600">Mean</span><span className="font-semibold">{schoolPsychDemographics.ageStats.mean.toFixed(2)} years</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Median</span><span className="font-semibold">{schoolPsychDemographics.ageStats.median.toFixed(2)} years</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Standard Deviation</span><span className="font-semibold">{schoolPsychDemographics.ageStats.stdDev.toFixed(2)}</span></div>
          </div>
        </Card>
        <Card title="Years of Experience" n={schoolPsychDemographics.experienceStats.n}>
          <div className="space-y-2">
            <div className="flex justify-between"><span className="text-gray-600">Mean</span><span className="font-semibold">{schoolPsychDemographics.experienceStats.mean.toFixed(2)} years</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Median</span><span className="font-semibold">{schoolPsychDemographics.experienceStats.median.toFixed(2)} years</span></div>
            <div className="flex justify-between"><span className="text-gray-600">Standard Deviation</span><span className="font-semibold">{schoolPsychDemographics.experienceStats.stdDev.toFixed(2)}</span></div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card title="Highest Degree Earned" n="111">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={schoolPsychDemographics.education} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={CustomPieLabel}>
                  {schoolPsychDemographics.education.map((entry, index) => <Cell key={`cell-${index}`} fill={PIE_COLORS_EDUCATION[index % PIE_COLORS_EDUCATION.length]} />)}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Card>
          <Card title="Gender" n="111">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
                    <Pie data={schoolPsychDemographics.gender} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} labelLine={false} label={CustomPieLabel}>
                         {schoolPsychDemographics.gender.map((entry, index) => <Cell key={`cell-${index}`} fill={PIE_COLORS_GENDER[index % PIE_COLORS_GENDER.length]} />)}
                    </Pie>
                    <Tooltip formatter={(value,name) => [`${value}%`, name]}/>
                    <Legend/>
                </PieChart>
            </ResponsiveContainer>
          </Card>
      </div>
       <Card title="Work Settings" n="129">
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={schoolPsychDemographics.workSettings.sort((a,b) => b.value - a.value)} layout="vertical" margin={{top: 20, right: 30, left: 150, bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis type="number" unit="%"/>
                <YAxis type="category" dataKey="name" width={150}/>
                <Tooltip formatter={(value) => [`${value}%`, "Work Setting"]}/>
                <Bar dataKey="value" fill={COLORS.school}/>
            </BarChart>
        </ResponsiveContainer>
      </Card>
       <Card title="Race/Ethnicity" n="111">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={schoolPsychDemographics.race.sort((a,b) => b.value-a.value)} layout="vertical" margin={{top: 20, right: 30, left: 150, bottom: 5}}>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis type="number" unit="%"/>
                    <YAxis type="category" dataKey="name" width={150}/>
                    <Tooltip formatter={(value) => [`${value}%`, "Race/Ethnicity"]}/>
                    <Bar dataKey="value" fill={COLORS.neutral}/>
                </BarChart>
            </ResponsiveContainer>
        </Card>
      <QuestionWording questions={questions} />
    </div>
  );
};

const AiTasksTab = () => (
    <div className="space-y-8">
        <Card title="School Psychologist AI Task Usage Comparison" n="102 (AI Users) vs. 129 (Total Sample)">
            <p className="text-gray-600 mb-4 -mt-2 text-sm">This chart compares the percentage of AI users who perform a task against the percentage of the total sample.</p>
            <ResponsiveContainer width="100%" height={600}>
                 <BarChart data={aiTasksData.sort((a,b) => b['% of AI Users'] - a['% of AI Users'])} layout="vertical" margin={{ top: 20, right: 30, left: 200, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" unit="%" />
                    <YAxis type="category" dataKey="task" width={200} style={{ fontSize: '12px' }}/>
                    <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                    <Legend />
                    <Bar dataKey="% of AI Users" fill={COLORS.school} />
                    <Bar dataKey="% of Total Sample" fill={COLORS.nonSchool} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
        <QuestionWording questions={[{title: "AI Task Application", text: "Based on the data provided for a sample of 102 AI users, the following table details how they have used AI to facilitate their practice in the past six months. The table includes the frequency for each use, the percentage within the AI user group, and the percentage relative to the total sample size of 129."}]} />

    </div>
);

const ReportWritingTab = () => (
    <div className="space-y-8">
        <Card title="AI-Generated Report Content" n={reportWritingStats.n}>
             <div className="text-center">
                <p className="text-5xl font-bold text-fuchsia-600">{reportWritingStats.mean.toFixed(1)}%</p>
                <p className="text-lg text-gray-500">Average AI Contribution</p>
            </div>
            <div className="mt-6 space-y-2 max-w-xs mx-auto">
                <div className="flex justify-between"><span className="text-gray-600">Median</span><span className="font-semibold">{reportWritingStats.median.toFixed(1)}%</span></div>
                <div className="flex justify-between"><span className="text-gray-600">Std. Deviation</span><span className="font-semibold">{reportWritingStats.stdDev.toFixed(1)}</span></div>
            </div>
        </Card>
        <Card title="AI Use in Report Writing Tasks" n="39">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={reportWritingUsageData} layout="vertical" margin={{ top: 20, right: 30, left: 150, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" unit="%" domain={[0, 100]} />
                    <YAxis type="category" dataKey="task" width={150} style={{ fontSize: '12px' }} />
                    <Tooltip formatter={(value) => [`${value}%`, "Used By"]} />
                    <Bar dataKey="percent" fill={COLORS.accent} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
        <FindingsBox
            title="Report Writing Insights"
            color="fuchsia"
            items={[
                "Among those who use AI for reports, it generates an average of 25% of the content.",
                "Writing summaries (76.9%) and recommendations (64.1%) are the most common AI-assisted report writing tasks.",
                "The high standard deviation (24.7) for AI contribution indicates a very wide range of reliance among users.",
                "Lower-level tasks like translation (5.1%) and basic editing (28.2%) show less AI utilization.",
            ]}
        />
        <QuestionWording questions={[
            {title: "AI Contribution", text: "During the past 6 months, please estimate what percentage of the time you used AI to help generate reports? - Percentage of report text and tables that are AI generated"},
            {title: "Report Writing Tasks", text: "During the past 6 months, have you used AI for the following tasks in the context of report writing? Select all that apply."}
        ]}/>
    </div>
);

const TrainingTab = () => (
    <div className="space-y-8">
        <Card title="AI Prompt Development Training Completed" n="129">
            <p className="text-gray-600 mb-4 -mt-2 text-sm">Respondents could select all that apply.</p>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={promptTrainingData.sort((a, b) => b.percent - a.percent)} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" angle={-45} textAnchor="end" height={100} interval={0}/>
                    <YAxis unit="%" />
                    <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, 'Respondents']} />
                    <Bar dataKey="percent" name="Percentage of Respondents" fill={COLORS.training} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
         <Card title="AI Education: Current Sources vs. Desired Resources" n="129">
             <ResponsiveContainer width="100%" height={400}>
                 <BarChart data={educationSourcesData.sort((a,b) => b.Used - a.Used)} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="source" angle={-45} textAnchor="end" height={100} interval={0}/>
                     <YAxis unit="%" />
                     <Tooltip formatter={(value) => [`${value !== null ? value.toFixed(1) : 'N/A'}%`, 'Respondents']} />
                     <Legend verticalAlign="top" />
                     <Bar dataKey="Used" fill={COLORS.nonSchool} />
                     <Bar dataKey="Desired" fill={COLORS.school} />
                 </BarChart>
             </ResponsiveContainer>
         </Card>
        <FindingsBox
            title="Training Insights"
            color="violet"
            items={[
                "Learning from colleagues (45%) and formal online training (42.6%) are the most common ways professionals educate themselves about AI.",
                "There is a significant demand for more online (68.2% desired) and in-person (55.0% desired) training.",
                "A notable portion of professionals (34.1%) report having no specific training in prompt development, highlighting a key area for growth.",
            ]}
        />
        <QuestionWording questions={[
            {title: "Prompt Training", text: "Prompts are a way for a human to interact with a generative AI tool. It can be a question, text, code snippet, image, or example that communicates to the AI what response is wanted.Have you participated in any training related to AI prompt development, including training focused on the development of prompts to enhance the content generated by AI? Select all that you have completed."},
            {title: "AI Education Sources", text: "Which of the following sources have you used to educate yourself about the practical use of AI in practice? Select all that apply. <br/><em>(Note: 'Videos' was not an option for this question.)</em>"},
            {title: "Desired Training Resources", text: "What types of training or resources would you like to have provided to you to help learn to better use AI in your work? <br/><em>(Note: 'Colleagues/Co-workers' was not an option for this question.)</em>"}
        ]}/>
    </div>
);

const EthicsTab = () => {
    return (
    <div className="space-y-8">
        <Card title="Perceived Ethics of AI Use in Practice" n="113">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={ethicsPerceptionsData} layout="vertical" margin={{ top: 20, right: 30, left: 150, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" unit="%" domain={[0, 100]} stacked={true} />
                    <YAxis type="category" dataKey="task" width={150} style={{ fontSize: '12px' }}/>
                    <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                    <Legend wrapperStyle={{fontSize: "10px"}}/>
                    <Bar dataKey="Strongly Agree" stackId="a" fill={COLORS.likert.stronglyAgree} />
                    <Bar dataKey="Agree" stackId="a" fill={COLORS.likert.agree} />
                    <Bar dataKey="Somewhat Agree" stackId="a" fill={COLORS.likert.somewhatAgree} />
                    <Bar dataKey="Neither" stackId="a" fill={COLORS.likert.neither} />
                    <Bar dataKey="Somewhat Disagree" stackId="a" fill={COLORS.likert.somewhatDisagree} />
                    <Bar dataKey="Disagree" stackId="a" fill={COLORS.likert.disagree} />
                    <Bar dataKey="Strongly Disagree" stackId="a" fill={COLORS.likert.stronglyDisagree} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
        <Card title="Who is Most Responsible for AI Content?" n="111">
             <ResponsiveContainer width="100%" height={300}>
                <BarChart data={responsibilityData} margin={{ top: 20, right: 30, left: 20, bottom: 90 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} interval={0} />
                    <YAxis unit="%" />
                    <Tooltip formatter={(value) => [`${value}% of respondents ranked as #1`, 'Most Responsible']} />
                    <Bar dataKey="percent" fill={COLORS.ethics} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
        <QuestionWording questions={[
            { title: "Ethical Perceptions", text: "Please respond to the following items. For these questions, ‘ethical’ means consistent with your professional organization's (e.g., NASP) ethical code."},
            { title: "Responsibility", text: "Who is most responsible to ensure that AI-generated content is correct and suitable when it is used in reports, treatment plans, or for other work-related tasks? Please rank the parties by responsibility from most (1) to least (5)."}
        ]}/>
    </div>
    )
};

const RisksAndSentimentsTab = () => {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card title="Formal AI Policies in the Workplace" n="115">
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
                             <Pie data={employerPolicyData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} labelLine={false} label={CustomPieLabel}>
                                <Cell fill={COLORS.risk} />
                                <Cell fill={COLORS.neutral} />
                                <Cell fill={COLORS.school} />
                            </Pie>
                            <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
                <Card title="Have Practitioners Entered PII into AI?" n="90">
                     <ResponsiveContainer width="100%" height={300}>
                        <PieChart margin={{ top: 40, right: 40, bottom: 40, left: 40 }}>
                             <Pie data={piiEntryData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} labelLine={false} label={CustomPieLabel}>
                                <Cell fill={COLORS.school} />
                                <Cell fill={COLORS.risk} />
                                <Cell fill={COLORS.neutral} />
                            </Pie>
                             <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                        </PieChart>
                    </ResponsiveContainer>
                </Card>
            </div>
            <Card title="Practitioner Sentiments and Concerns" n="111">
                 <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={practitionerSentimentsData} layout="vertical" margin={{ top: 20, right: 30, left: 180, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" unit="%" domain={[0, 100]} stacked={true} />
                        <YAxis type="category" dataKey="sentiment" width={180} style={{ fontSize: '12px' }}/>
                        <Tooltip formatter={(value, name) => [`${value.toFixed(1)}%`, name]} />
                        <Legend wrapperStyle={{fontSize: "10px"}}/>
                        <Bar dataKey="Strongly Agree" stackId="a" fill={COLORS.likert.stronglyAgree} />
                        <Bar dataKey="Agree" stackId="a" fill={COLORS.likert.agree} />
                        <Bar dataKey="Somewhat Agree" stackId="a" fill={COLORS.likert.somewhatAgree} />
                        <Bar dataKey="Neither" stackId="a" fill={COLORS.likert.neither} />
                        <Bar dataKey="Somewhat Disagree" stackId="a" fill={COLORS.likert.somewhatDisagree} />
                        <Bar dataKey="Disagree" stackId="a" fill={COLORS.likert.disagree} />
                        <Bar dataKey="Strongly Disagree" stackId="a" fill={COLORS.likert.stronglyDisagree} />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
            <FindingsBox
                title="Risks & Sentiments"
                color="red"
                items={[
                    "A significant majority of employers (54.8%) have no formal, written policies on AI use, and 40% of practitioners are unsure if a policy exists.",
                    "Despite confidentiality concerns, 11.1% of practitioners admit to having entered Personally Identifiable Information (PII) into an AI tool.",
                    "The top concern is practitioners becoming over-reliant on AI (73% agree), followed by fears of privacy breaches (68.1% agree).",
                    "While most (76.6%) find AI helpful in their practice, there's significant division on whether it will perpetuate bias or make jobs obsolete.",
                ]}
            />
            <QuestionWording questions={[
                { title: "Workplace Policies", text: "Does your employer have formal, written policies on the use of AI at work? (if self-employed do you have a policy?)"},
                { title: "PII Entry", text: "Have you ever entered Personal Identifiable Information (PII) of a student or other stakeholder as part of a prompt for AI?"},
                { title: "Sentiments & Concerns", text: "How much do you agree or disagree with each of the following statements about the use of AI technology in practice?"}
            ]}/>
        </div>
    );
};

const AiUsageTab = () => (
    <div className="space-y-8">
        <Card title="AI Usage Frequency for Work Tasks" n="129 (School Psych) vs 1270 (Other Providers)">
             <ResponsiveContainer width="100%" height={400}>
                <BarChart data={workUsageData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="frequency" interval={0} />
                    <YAxis unit="%" />
                    <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, 'Percentage']} />
                    <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: '20px' }}/>
                    <Bar dataKey="School Psychologists" fill={COLORS.school} />
                    <Bar dataKey={nonSchoolPsychName} fill={COLORS.nonSchool} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
         <Card title="AI Usage Frequency for Personal Tasks" n="129 (School Psych) vs 1270 (Other Providers)">
             <ResponsiveContainer width="100%" height={400}>
                <BarChart data={personalUsageData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="frequency" interval={0} />
                    <YAxis unit="%" />
                    <Tooltip formatter={(value) => [`${value.toFixed(1)}%`, 'Percentage']} />
                    <Legend verticalAlign="top" wrapperStyle={{ paddingBottom: '20px' }}/>
                    <Bar dataKey="School Psychologists" fill={COLORS.school} />
                    <Bar dataKey={nonSchoolPsychName} fill={COLORS.nonSchool} />
                </BarChart>
            </ResponsiveContainer>
        </Card>
        <FindingsBox
            title="Usage Comparison Insights"
            color="sky"
            items={[
                `The most dramatic difference is in work-related AI adoption, where ${nonSchoolPsychName} are more than twice as likely to have never used AI.`,
                "Conversely, school psychologists are more than twice as likely to use AI frequently (weekly/daily) for work.",
                "Differences in personal usage are smaller but consistently show higher adoption and more frequent use among school psychologists.",
            ]}
        />
        <QuestionWording questions={[
            {title: "Usage Frequency", text: "During the past 6 months, how often have you used AI to complete tasks related to your work OR outside of work for any personal reason?"}
        ]}/>
    </div>
);


// Main Dashboard Component
// =============================================================================

const App = () => {
  const [activeTab, setActiveTab] = useState('demographics');

  const tabs = [
    { id: 'demographics', label: 'Demographics', component: <DemographicsTab /> },
    { id: 'aitasks', label: 'AI Tasks', component: <AiTasksTab /> },
    { id: 'usage', label: 'AI Usage', component: <AiUsageTab /> },
    { id: 'reportwriting', label: 'AI for Report Writing', component: <ReportWritingTab /> },
    { id: 'training', label: 'Training', component: <TrainingTab /> },
    { id: 'ethics', label: 'Ethics', component: <EthicsTab /> },
    { id: 'risks', label: 'Risks & Sentiments', component: <RisksAndSentimentsTab /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 tracking-tight">AI in School Psychology</h1>
          <p className="text-lg text-gray-500 mt-1">A comparative analysis of AI adoption patterns</p>
        </header>

        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-6 overflow-x-auto" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap py-3 px-2 border-b-2 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400
                  ${activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <main className="mt-8">
          {tabs.find(tab => tab.id === activeTab)?.component}
        </main>
      </div>
    </div>
  );
};

export default App;
