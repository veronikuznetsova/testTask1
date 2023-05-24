export interface IProject {
  id: string;
  name: string;
  modified: number;
}

export interface IProjectById {
  id: string;
  name: string;
  width: number;
  height: number;
  items: IProjectItem[];
}

export interface IProjectItem {
  id: string,
  type: 'rectange' | 'ellipse',            
  color: string,
  rotation: number,
  x: number,
  y: number,
  width: number,
  height: number
}

export interface IProjectState {
  project?: IProject;
  projectById?: IProjectById;
  getProjectLoading: boolean;
  getProjectByIdLoading: boolean;
}
