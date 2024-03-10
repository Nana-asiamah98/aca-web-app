export interface IHero {
  imageURL?: string;
  userInfo?: UserInfo;
  socials: Socials;
  interest?: string[];
  education?: Education[];
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  profession: string;
  schools: string[];
  aboutMe: string;
}

export interface Socials {
  linkedInURL: string;
  googleScholarURL: string;
  xTwitterURL: string;
}

export interface Education {
  course: string;
  year: string;
  university: string;
}

export interface ISkill {
  skills: ISkills;
}

export interface ISkills {
  programming: Programming;
  brains: Brains;
  languages: Languages;
}

export interface Programming {
  skillName: string;
  skillValues: string[];
}

export interface Brains {
  skillName: string;
  skillValues: string[];
}

export interface Languages {
  skillName: string;
  skillValues: string[];
}
