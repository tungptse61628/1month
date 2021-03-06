const serverPath = {
  token: '/token',
  // User
  user: '/api/user',
  getNoTeamUser: `/api/user/freeUser`,
  allUser: '/api/user/all',
  createUser: '/api/user',
  updateUser: '/api/user/update',
  updateProfile: '/api/user/profile/update',
  leaderBoard: '/api/user/leaderboard',
  getUserOfProject: (projectId) => `/api/user/project/${projectId}`,
  getUserOfTeam: (teamId) => `/api/user/team/${teamId}`,
  getLateTaskOfUser: '/api/user/latetasks',
  getNearExpireTaskOfUser: '/api/user/expiresoon',
  resetPassword: userId => `/api/user/${userId}/resetpassword`,
  //Compaign
  getMethodAdvertisingList: '/api/methodadvertising/all',
  getTypeADvertising: (methodId : number) => `/api/typeadvertising/${methodId}`,
  getNameMethodAndTypeCampaign: (methodId: number, typeId: number) => `/api/project/${methodId}/${typeId}`,
  // Project
  allProject: '/api/project/all',
  getProject: (projectId) => `/api/project/${projectId}`,
  myProject: '/api/project',
  setProjectToTeams: '/api/project/setteams',
  getProjectList: (projectId: number) => `/api/project/${projectId}/list`,
  updateProject: '/api/project',
  createProject: '/api/project',
  createCustomProject:'/api/project/custom',
  createGoogleProject:'/api/project/google',
  createFacebookProject:'/api/project/facebook',
  createTVCProject:'/api/project/tvc',
  closeProject: '/api/project/close',
  recentProject: '/api/project/recentchanged',
  getProjectStatus: '/api/project/statuses',
  assignUsersToProject: '/api/project/assign',
  unAssignUsersFromProject: '/api/project/Unassign',
  getReport: (projectid) => `/api/project/${projectid}/report`,
  // List
  createList: '/api/list',
  updateList: '/api/list/update',
  deleteList: '/api/list',
  // Team
  allTeam: '/api/team/all',
  deleteTeam: '/api/team',
  assignTeam: '/api/team/assign',
  unAssignTeam: '/api/team/unassign',
  setTeamRole: (userId, teamId) => `/api/team/${teamId}/assign/manager/${userId}`,
  getTeamDetail: (teamId) => `/api/team/${teamId}`,
  getNeedReviewTasks: (teamId) => `/api/team/${teamId}/tasks/needreview`,
  getLateTasks: (teamId) => `/api/team/${teamId}/tasks/late`,
  getAssignableUser: (projecId) => `/api/project/${projecId}/members/assignable`,
  // Task
  getTask: taskId => `/api/task/${taskId}`,
  createTask: '/api/task',
  editTask: '/api/task',
  setStatus: `/api/task/setstatus`,
  getPriority: '/api/task/priority',
  getStatus: '/api/task/status',
  getMyTask: '/api/task/myTask',
  assignTask: '/api/task/assign',
  unassignTask: `/api/task/unassign`,
  finishTask: taskID => `/api/task/${taskID}/finishTask`,
  archiveTask: `/api/task/archive`,
  unArchiveTask: `/api/task/unarchive`,
  // Dependency
  getDependenciesOfProject: projectId => `/api/project/${projectId}/dependency`,
  // Comment
  createComment: '/api/comment/create', // POST
  updateComment: '/api/comment/update', // PUT
  // Check list
  createChecklist: '/api/checklist', // POST
  deleteChecklist: (checkListId) => `/api/checklist/${checkListId}`, // DELETE
  editChecklist: (checkListId) => `/api/checklist/${checkListId}`, // PUT
  createChecklistItem: `/api/checklist/item`, // POST
  deleteChecklistItem: (checkListId, checkListItemId) => `/api/checklist/${checkListId}/item/${checkListItemId}`, // DELETE
  editChecklistItem: (checkListId, checkListItemId) => `/api/checklist/${checkListId}/item/${checkListItemId}`, // PUT
  checkCheckListItem: (checkListId, checkListItemId) => `/api/checklist/${checkListId}/checkitem/${checkListItemId}`, // PUT
  // File
  uploadAvatar: userId => `/api/file/user/${userId}/avatar`,
  uploadAttachment: taskID => `/api/file/task/${taskID}/attachment`,
  deleteAttachment: attachmentId => `/api/file/attachment/${attachmentId}/delete`,
  // Config
  updateConfig: 'api/config', // PUT
  config: '/api/config',
  // Notification
  getMyNotification: '/api/notification',
  checkin: '/api/notification/checkin',
  // Report
  reportStatistic: (projectId) => `/api/report/project/${projectId}/statistic`,
  reportProgress: (projectId) => `/api/report/project/${projectId}/progress`,
};

export {
  serverPath
}
