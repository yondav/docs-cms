interface IInteractedBy {
  id: string;
  name: string;
  picture: string;
}

interface IDescription {
  html: string;
  markdown: string;
}

export interface IPage {
  id: string;
  slug: string;
  createdAt: string;
  createdBy: IInteractedBy;
  updatedAt: string;
  updatedBy: IInteractedBy;
  title: string;
  description: IDescription;
  sections: [ISection];
}

export interface ISection {
  id: string;
  slug: string;
  createdAt: string;
  createdBy: IInteractedBy;
  updatedAt: string;
  updatedBy: IInteractedBy;
  title: string;
  description: IDescription;
  subSections: [ISubSection];
}

export interface ISubSection {
  id: string;
  slug: string;
  createdAt: string;
  createdBy: IInteractedBy;
  updatedAt: string;
  updatedBy: IInteractedBy;
  title: string;
  description: IDescription;
}
