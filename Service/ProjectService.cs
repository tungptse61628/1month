﻿using System;
using System.CodeDom;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using Entity;
using Newtonsoft.Json.Linq;

namespace Service
{
    public class ProjectService
    {
        private readonly CmAgencyEntities db;


        public ProjectService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public IEnumerable<Project> GetAll()
        {
            return db.Projects.ToList();
        }

        public IEnumerable<Project> GetProjectChangeThisWeek()
        {
            var projects = db.Projects.ToList();
            List<Project> ProjectChangeThisWeek = new List<Project>();
            foreach (var project in projects)
            {
                if (IsProjectChangeThisWeek(project))
                {
                    ProjectChangeThisWeek.Add(project);
                }
            }

            return ProjectChangeThisWeek.ToList();
        }

        public bool IsProjectChangeThisWeek(Project project)
        {
            DateTime date = DateTime.Now.Date;
            DateTime weekFirstDay = date.AddDays(DayOfWeek.Sunday - date.DayOfWeek);
            DateTime weekLastDay = weekFirstDay.AddDays(6);
            if (project.ChangedTime != null)
            {
                if (project.ChangedTime >= weekFirstDay.Date && project.ChangedTime <= weekLastDay.Date)
                {
                    return true;
                }
            }

            return false;
        }

        public IEnumerable<Project> GetProjectOfUser(int userId)
        {
            return db.Projects
                .Where(
                    project => project.UserProjects
                        .Any(userProject => userProject.UserID == userId)
                )
                .ToList();
        }

        public IEnumerable<Project> GetProjectOfTeam(int teamId)
        {
            return db.Projects
                .Where(project => project.TeamProjects
                    .Any(userTeam => userTeam.TeamID == teamId)
                ).ToList();
        }

        public Project GetProjectOfList(int listId)
        {
            Project project = new Project();
            int projectId = db.Lists.Find(listId).ProjectID;
            return db.Projects.Find(projectId);
        }


        /// <summary>
        /// Create new project
        /// </summary>
        /// <param name="name"></param>
        /// <param name="description"></param>
        /// <param name="deadline"></param>
        /// <param name="startDate"></param>
        /// <param name="creator">creator id</param>
        /// <returns>new project with Id</returns>
        public Project CreateProject(string name, string description, DateTime? deadline, DateTime? startDate,
            User creator, string goal)
        {
            Project newProject = new Project
            {
                Name = name,
                Description = description,
                Deadline = deadline,
                StartDate = startDate,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now,
                Status = (int) ProjectStatus.NotStarted,
                Goal = goal
            };

            db.Projects.Add(newProject);
            db.SaveChanges();

            return newProject;
        }
        public Project CreateOnlineProject(string name, string description, DateTime? deadline, DateTime? startDate,
            User creator, string goal, int budget, string location, string keywords)
        {
            Project newProject = new Project
            {
                Name = name,
                Description = description,
                Deadline = deadline,
                StartDate = startDate,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now,
                Status = (int)ProjectStatus.NotStarted,
                Goal = goal,
                Budget = budget,
                Location = location,
                Keywords = keywords,
            };

            db.Projects.Add(newProject);
            db.SaveChanges();

            return newProject;
        }
        public Project CreateTvProject(string name, string description, DateTime? deadline, DateTime? startDate,
            User creator, string goal, int budget, int channelId, int timeVideo, String timeFrame)
        {
            Project newProject = new Project
            {
                Name = name,
                Description = description,
                Deadline = deadline,
                StartDate = startDate,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now,
                Status = (int)ProjectStatus.NotStarted,
                Goal = goal,
                Budget =  budget,
                ChannelID = channelId,
                TimeVideo = timeVideo, 
                TimeFrame = timeFrame
            };

            db.Projects.Add(newProject);
            db.SaveChanges();

            return newProject;
        }
        public Project CreateCustomProject(string name, string description, DateTime? deadline, DateTime? startDate,
            User creator, int budget, string goal)
        {
            Project newProject = new Project
            {
                Name = name,
                Description = description,
                Deadline = deadline,
                StartDate = startDate,
                CreatedBy = creator.ID,
                CreatedTime = DateTime.Now,
                Status = (int)ProjectStatus.NotStarted,
                Goal = goal,
                Budget = budget
            };

            db.Projects.Add(newProject);
            db.SaveChanges();

            return newProject;
        }

        public Project GetProjectOfTask(int taskId)
        {
            ListService listService = new ListService(db);
            return listService.GetListOfTask(taskId).Project;
        }

        //public bool CheckDuplicatedUsername(string username)
        //{
        //    var users = db.Users.Where(user => user.Username == username).ToList();
        //    return users.Count > 0;
        //}
        public bool CheckDuplicatedNameOfProject(string projectname)
        {
            var projects = db.Projects.Where(project => project.Name == projectname).ToList();
            return projects.Count > 0;
        }

        public Project UpdateProject(
            int id,
            string name,
            string description,
            DateTime? deadline,
            DateTime? startDate,
            int modifierId,
            string goal,
            int budget)
        {
            var modifier = db.Users.Find(modifierId);

            if (modifier == null)
            {
                throw new ObjectNotFoundException($"Can't find user with ID {modifierId}");
            }

            var foundProject = db.Projects.Find(id);
            if (foundProject != null)
            {
                foundProject.Name = name;
                foundProject.Description = description;
                foundProject.Deadline = deadline;
                foundProject.StartDate = startDate;
                foundProject.ChangedBy = modifier.ID;
                foundProject.ChangedTime = DateTime.Today;
                foundProject.Goal = goal;
                foundProject.Budget = budget;
                db.SaveChanges();
                return foundProject;
            }
            else
            {
                throw new ObjectNotFoundException($"Can't find project with ID {id}");
            }
        }

        public int CloseProject(int projectId, int modifierId)
        {
            var project = db.Projects.Find(projectId);
            var modifier = db.Users.Find(modifierId);
            if (project == null)
            {
                throw new ObjectNotFoundException($"Can't find project with ID {projectId}");
            }

            if (modifier == null)
            {
                throw new ObjectNotFoundException($"Can't find user with ID {modifierId}");
            }

            project.Status = (int) ProjectStatus.Finished;
            project.ChangedBy = modifier.ID;
            project.ChangedTime = DateTime.Today;

            db.SaveChanges();
            return projectId;
        }

        public Project GetProjectByID(int id)
        {
            return db.Projects.Find(id);
        }

        public IEnumerable<KeyValuePair<string, string>> GetStatuses()
        {
            List<KeyValuePair<string, string>> result = new List<KeyValuePair<string, string>>();
            foreach (ProjectStatus status in Enum.GetValues(typeof(ProjectStatus)))
            {
                result.Add(new KeyValuePair<string, string>(
                    ((int) status).ToString(),
                    DisplayCamelCaseString(status.ToString())));
            }

            return result;
        }

        public string DisplayCamelCaseString(string camelCase)
        {
            List<char> chars = new List<char> {camelCase[0]};
            foreach (char c in camelCase.Skip(1))
            {
                if (char.IsUpper(c))
                {
                    chars.Add(' ');
                    chars.Add(char.ToLower(c));
                }
                else
                    chars.Add(c);
            }

            return new string(chars.ToArray());
        }

        public Project AssignUsersToProject(int[] userIds, int projectId, int modifierId)
        {
            foreach (int userId in userIds)
            {
                AssignProject(userId, projectId, modifierId);
            }

            return GetProjectByID(projectId);
        }

        public UserProject AssignProject(int userId, int projectId, int modifierId)
        {
            User user = db.Users.Find(userId);
            Project project = db.Projects.Find(projectId);

            if (user == null)
                throw new ObjectNotFoundException($"User with ID {userId} not found");

            if (project == null)
                throw new ObjectNotFoundException($"Project with ID {projectId} not found");

            bool isUserAlreadyInProject = db.UserProjects
                .Any(userProject => userProject.UserID == userId && userProject.ProjectID == projectId);

            if (!isUserAlreadyInProject)
            {
                UserProject userProject = new UserProject
                {
                    ProjectID = project.ID,
                    UserID = user.ID
                };
                db.UserProjects.Add(userProject);
                project.ChangedBy = modifierId;
                project.ChangedTime = DateTime.Today;
                db.SaveChanges();
                return userProject;
            }

            throw new InvalidOperationException($"User {user.Name} already assigned to project {project.Name}");
        }

        public UserProject UnAssignProject(int userId, int projectId)
        {
            User user = db.Users.Find(userId);
            if (user == null)
                throw new ObjectNotFoundException($"User with ID {userId} not found");

            Project project = db.Projects.Find(projectId);
            if (project == null)
                throw new ObjectNotFoundException($"Project with ID {projectId} not found");

            var choosedUserProject = db.UserProjects.Where(x => x.UserID == userId && x.ProjectID == projectId)
                .FirstOrDefault();
            if (choosedUserProject == null)
                throw new ObjectNotFoundException($"User with ID {userId} not have in project with ID {projectId}");
            List<Task> tasksOfProject = GetTasksOfProject(projectId).Where(x => x.Status != (int)TaskStatus.Done).ToList();
            IEnumerable<UserTask> UsertasksInTaskList = GetUserTaskFromTasksOfProject(tasksOfProject, projectId);
            IEnumerable<UserTask> taskListsOfUser = db.UserTasks.Where(x => x.UserID == userId);
            List<int> UsertaskIdsOfUserInProject =
                UsertasksInTaskList.Intersect(taskListsOfUser).Select(x => x.ID).ToList();
            int count = 0;
            foreach (var taskIdOfUserInProject in UsertaskIdsOfUserInProject)
            {
                var a = db.UserTasks.Find(taskIdOfUserInProject);
                if (!a.IsAssigned)
                {
                    count = count + 1;
                }
            }

            if (UsertasksInTaskList.Intersect(taskListsOfUser).Count() == 0 ||
                UsertaskIdsOfUserInProject.Count() == count)
            {
                db.UserProjects.Remove(choosedUserProject);
                db.SaveChanges();
                return choosedUserProject;
            }
            else
            {
                throw new ObjectNotFoundException(
                    $"User {user.Username} still have task in this project {project.Name}");
            }
        }

        public List<UserTask> GetUserTaskFromTasksOfProject(List<Task> tasksOfProject, int projectId)
        {
            IEnumerable<int> taskIdsOfProject = tasksOfProject.Select(x => x.ID);
            List<UserTask> UserTasksInTaskList = new List<UserTask>();
            foreach (var taskIdOfProject in taskIdsOfProject)
            {
                var UserTasksInTask = db.UserTasks.Where(x => x.TaskID == taskIdOfProject);
                UserTasksInTaskList.AddRange(UserTasksInTask);
            }

            return UserTasksInTaskList;
        }

        public bool IsDateRangeInBoundOfProject(DateTime startDate, int duration, int projectId)
        {
            Project project = GetProjectByID(projectId);
            if (project == null)
            {
                throw new ObjectNotFoundException($"Project with id {projectId} not found");
            }

            bool isInBound = true;

            if (startDate < project.StartDate)
            {
                isInBound = false;
            }

            DateTime endDate = startDate.AddDays(duration);
            if (endDate > project.FinishedDate)
            {
                isInBound = false;
            }

            return isInBound;
        }


        public Project SetProjectToTeams(int projectId, int[] newTeamIds, int modifierId)
        {
            Project project = GetProjectByID(projectId);
            if (project == null)
            {
                throw new ObjectNotFoundException($"Project with id {projectId} not found");
            }

            IEnumerable<int> oldTeamIds = db.TeamProjects
                .Where(teamProject => teamProject.ProjectID == projectId)
                .Select(teamProject => teamProject.TeamID);

            List<int> teamIdsToRemove = oldTeamIds.Except(newTeamIds).ToList();
            List<int> teamIdsToAdd = newTeamIds.Except(oldTeamIds).ToList();

            IEnumerable<TeamProject> teamProjectToRemove = db.TeamProjects
                .Where(teamProject => teamIdsToRemove.Contains(teamProject.TeamID));
            IEnumerable<TeamProject> teamProjectToAdd = teamIdsToAdd
                .Select(teamIdToAdd => new TeamProject
                {
                    ProjectID = projectId,
                    TeamID = teamIdToAdd
                });


            List<Team> nonRemovableTeams = teamProjectToRemove
                .Where(teamProject => IsTeamsHaveMemberInProject(teamProject.Team, project))
                .Select(teamProject => teamProject.Team)
                .Distinct(new TeamEqualComparer())
                .ToList();

            if (!nonRemovableTeams.Any())
            {
                db.TeamProjects.AddRange(teamProjectToAdd);
                db.TeamProjects.RemoveRange(teamProjectToRemove);

                SetManagerOfTeamsIntoProject(teamIdsToAdd, project, modifierId);

                project.ChangedBy = modifierId;
                project.ChangedTime = DateTime.Today;
                db.SaveChanges();
                return project;
            }
            else
            {
                IEnumerable<string> invalidTeamNames = nonRemovableTeams.Select(team => team.Name);

                throw new InvalidOperationException(
                    $"Can not remove {string.Join(",", invalidTeamNames)} since it's member still in project {project.Name}"
                );
            }
        }

        public void SetManagerOfTeamsIntoProject(IEnumerable<int> teamIds, Project project, int modifierId)
        {
            TeamService teamService = new TeamService(db);
            foreach (int teamId in teamIds)
            {
                User manager = teamService.GetManager(teamId);
                if (manager != null)
                {
                    bool isAlreadyInProject = project.UserProjects
                        .Select(userProject => userProject.UserID)
                        .Contains(manager.ID);

                    if (!isAlreadyInProject)
                    {
                        AssignProject(manager.ID, project.ID, modifierId);
                    }
                }
            }
        }

        public bool IsTeamsHaveMemberInProject(Team team, Project project)
        {
            IEnumerable<int> userIdsInProject = GetUsersInProject(project.ID).Select(user => user.ID);
            IEnumerable<int> userIdsInTeam = team.Users.Select(user => user.ID);

            return userIdsInProject.Intersect(userIdsInTeam).Any();
        }


        public IEnumerable<User> GetUsersInProject(int projectId)
        {
            var usersInProject = db.UserProjects.Where(x => x.ProjectID == projectId).Select(x => x.User);
            return usersInProject;
        }

        public List<Task> GetTasksOfProject(int projectId)
        {
            List<Task> tasksInProject = new List<Task>();
            var listIdsWithProjectID = db.Lists.Where(x => x.ProjectID == projectId).Select(x => x.ID).ToList();
            foreach (var listId in listIdsWithProjectID)
            {
                var tasksInList = db.Tasks.Where(x => x.ListID == listId);
                foreach (var taskInList in tasksInList)
                {
                    tasksInProject.Add(taskInList);
                }
            }

            return tasksInProject;
        }

        public List<User> GetNoTaskUsersInProject(int projectId)
        {
            var usersInProject = db.UserProjects.Where(x => x.ProjectID == projectId).Select(x => x.User);
            var userIdsInProject = usersInProject.Select(x => x.ID);
            List<User> noTaskUser = new List<User>();
            foreach (var userId in userIdsInProject)
            {
                var users = db.UserTasks.Where(x => x.UserID == userId && x.IsAssigned == false).Select(x => x.User)
                    .ToList();
                noTaskUser.AddRange(users);
            }

            return noTaskUser;
        }

        public JArray GetTaskExpireThisWeek(int projectId)
        {
            TaskService taskService = new TaskService(db);
            List<Task> tasks = new List<Task>();
            var listIdsWithProjectID = db.Lists.Where(x => x.ProjectID == projectId).Select(x => x.ID).ToList();
            foreach (var listId in listIdsWithProjectID)
            {
                var tasksInList = db.Tasks.Where(x => x.ListID == listId);
                foreach (var taskInList in tasksInList)
                {
                    tasks.Add(taskInList);
                }
            }

            List<Task> TasksFinishedThisWeek = new List<Task>();
            foreach (var task in tasks)
            {
                if (taskService.IsTaskDeadlineInThisWeek(task))
                {
                    TasksFinishedThisWeek.Add(task);
                }
            }

            var tasksJArray = new JArray();
            foreach (var task in TasksFinishedThisWeek)
            {
                tasksJArray.Add(taskService.ParseToJson(task));
            }

            return tasksJArray;
        }

        public Project UpdateProjectStatus(int projectId, int? modifierId = null)
        {
            var project = db.Projects.Find(projectId);

            if (project == null)
            {
                throw new ObjectNotFoundException($"Project with id {projectId} not found");
            }

            if (modifierId.HasValue)
            {
                project.ChangedBy = modifierId.Value;
                project.ChangedTime = DateTime.Today;
            }

            if (project.Status == (int) ProjectStatus.NotStarted && project.StartDate >= DateTime.Today)
            {
                project.Status = (int) ProjectStatus.Executing;
            }

            return project;
        }

        public JObject ParseToJsonProjectReport(Project project, bool isIncludeTask = false)
        {
            var result = new JObject
            {
                ["id"] = project.ID,
                ["name"] = project.Name,
                ["userNumberInProject"] = GetUsersInProject(project.ID).Count(),
                ["userNumberNotInTask"] = GetNoTaskUsersInProject(project.ID).Count()
            };
            if (isIncludeTask)
            {
                result["taskExpireThisWeek"] = GetTaskExpireThisWeek(project.ID);
            }

            return result;
        }

        public JObject ParseToJsonTotalReport(Project project, bool isIncludeTask = false)
        {
            List<Task> tasks = new List<Task>();
            var lists = db.Lists.Where(x => x.ProjectID == project.ID);
            var listIds = db.Lists.Where(x => x.ProjectID == project.ID).Select(x => x.ID).ToList();
            foreach (var listId in listIds)
            {
                var tasksInList = db.Tasks.Where(x => x.ListID == listId);
                foreach (var taskInList in tasksInList)
                {
                    tasks.Add(taskInList);
                }
            }

            int taskNumber = tasks.Count;
            if (taskNumber != 0)
            {
                List<JObject> calculatedResult = new List<JObject>();
                foreach (TaskStatus status in Enum.GetValues(typeof(TaskStatus)))
                {
                    int taskStatusCount = tasks.Where(x => x.Status == (int) status).Count();
                    calculatedResult.Add(new JObject
                    {
                        ["key"] = DisplayCamelCaseString(status.ToString()),
                        ["value"] = (decimal) (taskStatusCount * 100) / taskNumber
                    });
                }

                var result = new JObject
                {
                    ["id"] = project.ID,
                    ["name"] = project.Name,
                    ["taskCount"] = tasks.Count(),
                    ["userNumberInProject"] = GetUsersInProject(project.ID).Count(),
                    ["userNumberNotInTask"] = GetNoTaskUsersInProject(project.ID).Count(),
                    ["taskStatusReport"] = new JArray(calculatedResult),
                };
                if (isIncludeTask)
                {
                    result["taskExpireThisWeek"] = GetTaskExpireThisWeek(project.ID);
                }

                return result;
            }
            else
            {
                List<JObject> calculatedResult = new List<JObject>();
                foreach (TaskStatus status in Enum.GetValues(typeof(TaskStatus)))
                {
                    int taskStatusCount = tasks.Where(x => x.Status == (int) status).Count();
                    calculatedResult.Add(new JObject
                    {
                        ["key"] = DisplayCamelCaseString(status.ToString()),
                        ["value"] = 0 //(decimal)(taskStatusCount * 100) 
                    });
                }

                var result = new JObject
                {
                    ["id"] = project.ID,
                    ["name"] = project.Name,
                    ["taskCount"] = tasks.Count(),
                    ["userNumberInProject"] = GetUsersInProject(project.ID).Count(),
                    ["userNumberNotInTask"] = GetUsersInProject(project.ID).Count(),
                    ["taskStatusReport"] = new JArray(calculatedResult),
                };
                if (isIncludeTask)
                {
                    result["taskExpireThisWeek"] = new JArray();
                }

                return result;
            }
        }

        public JObject ParseToObjectNameOfMethodAndType(MethodAdvertising methodAds, TypeAdvertising typeAds)
        {
            var result = new JObject
            {
                ["nameMethodAds"] = methodAds != null ? methodAds.Name : string.Empty,
                ["nameTypeAds"] = typeAds != null ? typeAds.Name : string.Empty
            };

            return result;
        }
        public bool IsProjectDeadlineInThisWeek(Project project)
        {
            DateTime date = DateTime.Now.Date;
            DateTime weekFirstDay = date.AddDays(DayOfWeek.Sunday - date.DayOfWeek);
            DateTime weekLastDay = weekFirstDay.AddDays(7);
            DateTime deadline = project.Deadline.Value;
            if (project.StartDate != null&&deadline!= null)
            {
                if (deadline.Date >= weekFirstDay.Date && deadline.Date <= weekLastDay.Date)
                {
                    return true;
                }
            }
            return false;
        }
        public List<Project> GetProjectsDeadlineInThisWeek() {
            List<Project> list = new List<Project>();
            foreach (var item in db.Projects)
            {
                if (IsProjectDeadlineInThisWeek(item))
                {
                    list.Add(item);
                }
            }
            return list;
        }
        public bool IsProjectFinishedThisMonth(Project Project)
        {
            if (!Project.FinishedDate.HasValue) return false;

            DateTime finishedTime = Project.FinishedDate.Value;
            DateTime currentSystemTime = DateTime.Now;

            return finishedTime.Year == currentSystemTime.Year &&
                   finishedTime.Month == currentSystemTime.Month;
        }
        public List<Project> GetProjectsFinishedThisMonth()
        {
            List<Project> list = new List<Project>();
            foreach (var item in db.Projects)
            {
                if (IsProjectFinishedThisMonth(item))
                {
                    list.Add(item);
                }
            }
            return list;
        }
        public double GetProjectRemainingTime(Project project)
        {
            if (!project.FinishedDate.HasValue || !project.StartDate.HasValue || !project.Deadline.HasValue)
            {
                throw new InvalidOperationException("Finish date, Deadline and start date must have value");
            }

            DateTime finishedDate = project.FinishedDate.Value;
            DateTime deadline = project.Deadline.Value;
            TimeSpan remainingTime = deadline - finishedDate;
            return remainingTime.TotalDays;
        }



        public JObject ParseToJson(Project project, bool isDetailed = false, string avatarPath = null)
        {
            UserService userService = new UserService(db);
            ListService listService = new ListService(db);
            
            var updatedProject = UpdateProjectStatus(project.ID);
            User creator = userService.GetUser(updatedProject.CreatedBy);
            var result = new JObject
            {
                ["id"] = updatedProject.ID,
                ["name"] = updatedProject.Name,
                ["description"] = updatedProject.Description,
                ["deadline"] = updatedProject.Deadline,
                ["createdTime"] = updatedProject.CreatedTime,
                ["createdBy"] = userService.ParseToJson(creator, avatarPath),
                ["startDate"] = updatedProject.StartDate,
                ["changedTime"] = updatedProject.ChangedTime,
                ["status"] = updatedProject.Status,
                ["goal"] = updatedProject.Goal,
                ["keywords"] = updatedProject.Keywords,
                ["budget"] = updatedProject.Budget,
                ["timeVideo"] = updatedProject.TimeVideo,
                ["typeAdID"] = updatedProject.TypeAdID,
                ["timeFrame"] = updatedProject.TimeFrame,
                ["location"] = updatedProject.Location,
                ["channelID"] = updatedProject.ChannelID,
                

            };

            if (updatedProject.Status.HasValue)
            {
                var statusText = ((ProjectStatus)updatedProject.Status.Value).ToString();
                result["statusText"] = DisplayCamelCaseString(statusText);
            }
            if (updatedProject.ChannelID.HasValue)
            {
                var channelText = ((TvChanel)updatedProject.ChannelID.Value).ToString();
                result["channelText"] = DisplayCamelCaseString(channelText);
            }

            if (updatedProject.ChangedBy.HasValue)
            {
                var changer = userService.GetUser(updatedProject.ChangedBy.Value);
                result["changedBy"] = userService.ParseToJson(changer, avatarPath);
            }

            if (isDetailed)
            {
                TeamService teamservice = new TeamService(db);
                IEnumerable<List> lists = listService.GetListOfProject(updatedProject.ID);
                JArray listJArray = new JArray();
                foreach (List list in lists)
                {
                    listJArray.Add(listService.ParseToJson(list));
                }

                result["lists"] = listJArray;

                var users = userService.GetUsersOfProject(
                    updatedProject.ID
                );

                var jArray = new JArray();
                foreach (User user in users)
                {
                    jArray.Add(userService.ParseToJson(user, avatarPath));
                }

                result["assignees"] = jArray;

                IEnumerable<Team> teams = teamservice.GetTeamsOfProject(updatedProject.ID);
                IEnumerable<JObject> teamJson = teams
                    .Select(team => teamservice.ParseToJson(team, avatarPath: avatarPath, includeUsers: true));

                result["teams"] = new JArray(teamJson);
            }

            return result;
        }
    }
}