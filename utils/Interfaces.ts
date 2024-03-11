export interface IHero {
  firstName: string;
  lastName: string;
  profession: string;
  schools: string[];
  aboutMe: IAboutMe;
  linkedInUrl: string;
  xTwitterUrl: string;
  googleScholarUrl: string;
  interest: string[];
  userAvatar: UserAvatar;
}

export interface IAboutMe {
  nodeType: string;
  data: Data;
  content: Content[];
}

export interface UserAvatar {
  fields: Fields2;
}

export interface Fields2 {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Data {}

export interface Content {
  nodeType: string;
  data: Data2;
  content: Content2[];
}

export interface Data2 {}

export interface Content2 {
  nodeType: string;
  value: string;
  marks: Mark[];
  data: Data3;
}

export interface Mark {
  type: string;
}

export interface Data3 {}

export interface UserInfo {
  firstName: string;
  lastName: string;
  profession: string;
  schools: string[];
  aboutMe: any;
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
  skillName: string;
  skillValues: string[];
  slug: string;
}
