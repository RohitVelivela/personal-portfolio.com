import { 
  SiPowerbi, SiMicrosoftexcel, SiMicrosoftword, SiMysql, 
  SiPython, SiMatlab, SiReact
} from 'react-icons/si';
import { GiCircuitry } from 'react-icons/gi';
import { MdOutlineFactory, MdOutlineMonitorHeart } from 'react-icons/md';
import { VscServerProcess } from 'react-icons/vsc';
import { TbBrandVscode } from 'react-icons/tb';
import { FiBarChart2, FiActivity, FiTool, FiUsers, FiShoppingBag, FiCpu, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { SkillCategory, Experience, Project, Education, SocialLink, NavItem } from '@/types';

// Navigation items
export const navItems: NavItem[] = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' }
];

// Skills data
export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming',
    skills: [
      { name: 'SCADA and HMI Programming', proficiency: 95, icon: () => <MdOutlineFactory className="w-6 h-6" /> },
      { name: 'Hardware Description Languages', proficiency: 85, icon: () => <GiCircuitry className="w-6 h-6" /> },
      { name: 'System Verilog', proficiency: 80, icon: () => <GiCircuitry className="w-6 h-6" /> },
      { name: 'Verilog', proficiency: 85, icon: () => <GiCircuitry className="w-6 h-6" /> },
      { name: 'Embedded Simulation & Design', proficiency: 80, icon: () => <GiCircuitry className="w-6 h-6" /> },
      { name: 'MATLAB', proficiency: 75, icon: () => <SiMatlab className="w-6 h-6" /> },
      { name: 'MASM', proficiency: 70, icon: () => <FiCpu className="w-6 h-6" /> },
      { name: 'PyCharm', proficiency: 80, icon: () => <SiPython className="w-6 h-6" /> },
    ]
  }
];

// Experience data
export const experiences: Experience[] = [
  {
    title: "Senior Performance Analyst",
    company: "Nova source Power Services",
    location: "Sydney, Australia",
    date: "March 2024 - December 2024",
    description: [
      "Produces monthly reports using advanced Excel spreadsheet functions",
      "Creates various Excel documents to assist with pulling metrics data and presenting information to stakeholders."
    ],
    icon: () => <FiBarChart2 />,
    iconBackground: "#0a192f"
  }
];

// Social links
export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/ramyashree-velivela",
    icon: () => <FiLinkedin />
  },
  {
    name: "GitHub",
    url: "https://github.com/ramyashree-velivela",
    icon: () => <FiGithub />
  },
  {
    name: "Email",
    url: "mailto:ramyashree.velivela@example.com",
    icon: () => <FiMail />
  }
];