import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Layout, Cpu, Cloud } from "lucide-react";
import { FaReact, FaGithub, FaLinux, FaFigma, FaSwift, FaAndroid } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiNetlify,
  SiKotlin,
  SiFlutter,
  SiSupabase,
  SiPostgresql,
  SiGraphql,
  SiStripe,
  SiRazorpay,
  SiPaypal,
  SiTwilio,
  SiOpenai,
  SiJira,
  SiTrello,
  SiAsana,
  SiClickup,
  SiSlack,
  SiNotion,
  SiConfluence,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode } from "react-icons/bs";

// Import official SVG logos as React components
import { ReactComponent as VueLogo } from "./logos/vue.svg";
import { ReactComponent as BootstrapLogo } from "./logos/bootstrap.svg";
import { ReactComponent as ExpressLogo } from "./logos/express.svg";
import { ReactComponent as DjangoLogo } from "./logos/django.svg";
import { ReactComponent as LaravelLogo } from "./logos/laravel.svg";
import { ReactComponent as RESTLogo } from "./logos/rest.svg";
import { ReactComponent as AndroidStudioLogo } from "./logos/android-studio.svg";
import { ReactComponent as XcodeLogo } from "./logos/xcode.svg";
import { ReactComponent as TeamsLogo } from "./logos/teams.svg";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index + 1}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Web & Frontend",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "Vue.js", icon: <VueLogo className="w-4 h-4" /> },
        { name: "Flutter (Web)", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Bootstrap", icon: <BootstrapLogo className="w-4 h-4" /> },
      ],
    },
    {
      icon: Database,
      title: "Backend & Data",
      color: "text-green-400",
      skills: [
        { name: "Express.js", icon: <ExpressLogo className="w-4 h-4" /> },
        { name: "Django", icon: <DjangoLogo className="w-4 h-4" /> },
        { name: "Laravel", icon: <LaravelLogo className="w-4 h-4" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "Supabase", icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
        { name: "REST APIs", icon: <RESTLogo className="w-4 h-4" /> },
      ],
    },
    {
      icon: Layout,
      title: "Mobile & Cross-Platform",
      color: "text-purple-400",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="w-4 h-4 text-[#02569B]" /> },
        { name: "React Native", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "iOS (SwiftUI/UIKit)", icon: <FaSwift className="w-4 h-4 text-[#F05138]" /> },
        { name: "Android (Jetpack Compose)", icon: <SiKotlin className="w-4 h-4 text-[#A97BFF]" /> },
      ],
    },
    {
      icon: Layout,
      title: "UI/UX & Prototyping",
      color: "text-pink-400",
      skills: [
        { name: "Figma", icon: <FaFigma className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Responsive Design", icon: <Layout className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Wireframing", icon: <BsGrid1X2 className="w-4 h-4 text-[#9CA3AF]" /> },
        { name: "Prototyping", icon: <BsGrid1X2 className="w-4 h-4 text-[#F59E0B]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & Deployment",
      color: "text-orange-400",
      skills: [
        { name: "Firebase Hosting", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
        { name: "Supabase", icon: <SiSupabase className="w-4 h-4 text-[#3ECF8E]" /> },
        { name: "Netlify", icon: <SiNetlify className="w-4 h-4 text-[#00C7B7]" /> },
        { name: "Vercel", icon: <SiVercel className="w-4 h-4 text-white" /> },
        { name: "Git & GitHub", icon: <FaGithub className="w-4 h-4 text-[#181717]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Tools & IDEs",
      color: "text-pink-400",
      skills: [
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Android Studio", icon: <AndroidStudioLogo className="w-4 h-4" /> },
        { name: "Xcode", icon: <XcodeLogo className="w-4 h-4" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Payments, Messaging & AI",
      color: "text-yellow-400",
      skills: [
        { name: "Stripe", icon: <SiStripe className="w-4 h-4 text-[#635BFF]" /> },
        { name: "PayPal", icon: <SiPaypal className="w-4 h-4 text-[#003087]" /> },
        { name: "Razorpay", icon: <SiRazorpay className="w-4 h-4 text-[#F50B00]" /> },
        { name: "Twilio / OneSignal", icon: <SiTwilio className="w-4 h-4 text-[#FF2C00]" /> },
        { name: "OpenAI APIs", icon: <SiOpenai className="w-4 h-4 text-[#412991]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Project Management & Collaboration",
      color: "text-cyan-400",
      skills: [
        { name: "Jira", icon: <SiJira className="w-4 h-4 text-[#0052CC]" /> },
        { name: "Trello", icon: <SiTrello className="w-4 h-4 text-[#0079BF]" /> },
        { name: "Asana", icon: <SiAsana className="w-4 h-4 text-[#273347]" /> },
        { name: "ClickUp", icon: <SiClickup className="w-4 h-4 text-[#7B68EE]" /> },
        { name: "Slack", icon: <SiSlack className="w-4 h-4 text-[#4A154B]" /> },
        { name: "Notion", icon: <SiNotion className="w-4 h-4 text-[#000000]" /> },
        { name: "Teams", icon: <TeamsLogo className="w-4 h-4" /> },
        { name: "Confluence", icon: <SiConfluence className="w-4 h-4 text-[#172B4D]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style>{`
        @keyframes shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .animate-shimmer { animation: shimmer 2s infinite; }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(100,100,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(100,100,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
