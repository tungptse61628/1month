import { Injectable } from '@angular/core';
import { Cursor, StoreService } from './tree.service';
import { get, put, post } from 'superagent';
import { serverPath } from '../_serverPath';
import * as _ from 'lodash';

@Injectable()
export class ProjectService {
  private tokenCursor;
  private projectsCursor: Cursor;
  private projectStatusCursor: Cursor;

  constructor(private store: StoreService) {
    this.tokenCursor = this.store.select(['token', 'access_token']);
    this.projectsCursor = this.store.select(['projects']);
    this.projectStatusCursor = this.store.select(['projectStatuses']);
  }

  public getNameOfMethodAndType(methodId: number, typeId: number): Promise<any>{
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getNameMethodAndTypeCampaign(methodId, typeId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public getTypeAdvertising(methodAdsId: number) : Promise<any>{
    console.log("methodid" + methodAdsId)
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getTypeADvertising(methodAdsId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public getAllMethodAdvertising(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getMethodAdvertisingList)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public setTeamToProject(projectId: number, teamIds: number[]): Promise<any> {
    const objData = {
      ProjectID: projectId,
      TeamIDs: teamIds
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.setProjectToTeams)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public assignUsersToProject(projectId: number, userIds: number[]): Promise<any> {
    const objData = {
      ProjectId: projectId,
      UserIds: userIds
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.assignUsersToProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public unAssignUsersFromProject(projectId: number, userIds: number[]): Promise<any> {
    const objData = {
      ProjectID: projectId,
      UserIds: userIds
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.unAssignUsersFromProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public getListOfProject(projectId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getProjectList(projectId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public getReport(projectId) {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getReport(projectId))
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public getMyProjects(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.myProject)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public getAllProjects(force: boolean = false): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      let projects = this.projectsCursor.get();
      // if (projects && !force) {
      //   resolve(projects);
      // } else {
      get(serverPath.allProject)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            this.projectsCursor.set(content.Data);
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
      // }
    });
  }

  public getRecentProjects(force: boolean = false): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.recentProject)
        .set('token', this.tokenCursor.get())
        .then(res => {
          const content = res.body;
          if (content.IsSuccess) {
            this.projectsCursor.set(content.Data);
            resolve(content.Data);
          } else {
            reject(content.Message);
          }
        })
        .catch(reason => reject(reason.response.body));
      // }
    });
  }

  public getProjectStatus() {
    return new Promise<any>((resolve, reject) => {
      post(serverPath.createProject)
        .set('token', this.tokenCursor.get())
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }

  public createProject(
    name: string,
    description: string,
    goal: string,
    budget: number,
    startdate: string,
    deadline: string,

  ): Promise<any> {
    const objData = {
      name: name,
      description: description,
      goal: goal,
      budget : budget,
      startdate: startdate,
      deadline: deadline,


    };
    return new Promise<any>((resolve, reject) => {
      post(serverPath.createProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }

  public createCustomProject(
    name: string,
    description: string,
    goal: string,
    budget: number,
    startdate: string,
    deadline: string,

  ): Promise<any> {
    const objData = {
      name: name,
      description: description,
      goal: goal,
      budget : budget,
      startdate: startdate,
      deadline: deadline,


    };
    return new Promise<any>((resolve, reject) => {
      post(serverPath.createCustomProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }
  public createOnlineProject(
    name: string,
    description: string,
    nameMethodAdvertising: string,
    nameTypeAdvertising: string,
    goal: string,
    location: string,
    keywords: string,
    budget: number,
    startdate: string,
    deadline: string,

  ): Promise<any> {
    const objData = {
      name: name,
      description: description,
      nameMethodAdvertising: nameMethodAdvertising,
      nameTypeAdvertising: nameTypeAdvertising,
      goal: goal,
      location: location,
      keywords: keywords,
      budget : budget,
      startdate: startdate,
      deadline: deadline,


    };
    return new Promise<any>((resolve, reject) => {
      post(serverPath.createGoogleProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }

  public createFacebookProject(
    name: string,
    description: string,
    nameMethodAdvertising: string,
    nameTypeAdvertising: string,
    goal: string,
    location: string,
    budget: number,
    startdate: string,
    deadline: string,

  ): Promise<any> {
    const objData = {
      name: name,
      description: description,
      nameMethodAdvertising: nameMethodAdvertising,
      nameTypeAdvertising: nameTypeAdvertising,
      goal: goal,
      location: location,

      budget : budget,
      startdate: startdate,
      deadline: deadline,


    };
    return new Promise<any>((resolve, reject) => {
      post(serverPath.createFacebookProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }

  public createTVCProject(
    name: string,
    description: string,
    nameMethodAdvertising: string,
    nameTypeAdvertising: string,
    goal: string,
    budget: number,
    ChannelId: number,
    timeVideo: number,
    timeFrame: string,
    startdate: string,
    deadline: string,
  ): Promise<any> {
    const objData = {
      name: name,
      description: description,
      nameMethodAdvertising: nameMethodAdvertising,
      nameTypeAdvertising: nameTypeAdvertising,
      goal: goal,
      budget : budget,
      ChannelId: ChannelId,
      timeVideo: timeVideo,
      timeFrame: timeFrame,
      startdate: startdate,
      deadline: deadline,

    };
    return new Promise<any>((resolve, reject) => {
      post(serverPath.createTVCProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }



  public updateProject(
    projectId: number,
    name: string,
    description: string,
    budget: number,
    startdate: string,
    deadline: string
  ): Promise<any> {
    const objData = {
      id: projectId,
      name: name,
      budget: budget,
      description: description,
      startdate: startdate,
      deadline: deadline
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.updateProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }

  public getProject(projectId: number): Promise<any> {
    const objData = {
      id: projectId
    };
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getProject(projectId))
        .set('token', this.tokenCursor.get())
        .send(objData)
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public getAssignableUser(projectId: number): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      get(serverPath.getAssignableUser(projectId))
        .set('token', this.tokenCursor.get())
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    });
  }

  public closeProject(
    projectId: number
  ): Promise<any> {
    const objData = {
      id: projectId
    };
    return new Promise<any>((resolve, reject) => {
      put(serverPath.closeProject)
        .set('token', this.tokenCursor.get())
        .send(objData)
        .type('form')
        .then((res) => {
          const content = res.body;
          if (content.IsSuccess) {
            resolve(content.Data);
          } else {
            reject(content);
          }
        })
        .catch(reason => reject(reason.response.body));
    })
  }
}
