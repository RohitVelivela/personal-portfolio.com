// Project types

export interface Skill {
  name: string
  proficiency: number
  icon: JSX.Element
}

export interface SkillCategory {
  name: string
  skills: Skill[]
}

export interface Experience {
  title: string
  company: string
  location: string
  date: string
  description: string[]
  // icon: JSX.Element
  iconBackground: string
}

export interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  link?: string
  github?: string
}

export interface Education {
  institution: string
  degree: string
  field: string
  date: string
  logo: string
  location: string
  description?: string[]
}

export interface SocialLink {
  name: string
  url: string
  // icon: JSX.Element
}

export interface NavItem {
  name: string
  href: string
}
