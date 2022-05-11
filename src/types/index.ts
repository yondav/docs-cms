interface IInteractedBy {
  id: string;
  name: string;
  picture: string;
}

interface IDescription {
  raw: any;
}

export interface IStoreContext {
  loading: boolean;
  error: any;
  data: { pages: [IPage] } | null;
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
export interface IActiveSIdeBar {
  page: string | undefined;
  section: string | undefined;
  subsection: string | undefined;
}

export interface IThemeContext {
  dark: boolean;
  sideBar: boolean;
  toggleDark?: () => void;
  toggleSideBar?: () => void;
}
