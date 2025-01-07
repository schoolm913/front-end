export interface Menu{
    name: string,
    icon: string,
    path: string[],
    expanded: boolean | null,
    subMenu?: {
      name: string,
      icon: string,
      path: string[],
    }[],
    parentPath?: string;
  }