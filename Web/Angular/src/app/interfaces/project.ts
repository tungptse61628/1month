import {User} from './user';
import {List} from './list';
import {Team} from './team';

export interface Project {
  id: number,
  name: string,
  description: string,
  deadline: string,
  createdTime: string,
  createdBy: User,
  startDate: string,
  changedTime: string,
  changedBy: User,
  status: number,
  keywords:string,
  goal: string,
  location: string,
  budget: number,
  timeVideo: number,
  typeAdID: number,
  timeFrame: string,

  statusText: string,
  lists: List[],
  teams: Team[],
  assignees: User[]
}
