using System;
using System.Collections;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Entity;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json.Linq;
using Service;
using Web.Hubs;
using Web.ViewModels;

namespace Web.Controllers
{
    [RoutePrefix("api/project")]
    public class ProjectController : ApiController
    {
        [HttpGet]
        [Route("{methodId:int}/{typeId:int}")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetNameOfMethodAndType(int methodId, int typeId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    MethodAdvertisingService methodAdvertisingService = new MethodAdvertisingService(db);
                    TypeAdvertisingService typeAdvertisingService = new TypeAdvertisingService(db);

                    MethodAdvertising methodModel = methodAdvertisingService.GetById(methodId);
                    TypeAdvertising typeModel = typeAdvertisingService.GetById(typeId);
                    
                    JArray dataObject = new JArray();
                    dataObject.Add(projectService.ParseToObjectNameOfMethodAndType(methodModel, typeModel));

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("pp/{id:int}")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetProject(int id)
        {
            try
            {
                int currentUserId = Int32.Parse(User.Identity.GetUserId());

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);

                    Project project = projectService.GetProjectByID(id);
                    
                    return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJson(project)
                        ));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("all")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllProject()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var projects = projectService.GetAll().OrderBy(x => x.Status);

                    JArray dataObject = new JArray();
                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, avatarPath: AgencyConfig.AvatarPath));
                    }

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{id:int}/taskarchive")]
        [System.Web.Http.Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult GetProjectById(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    TaskService taskService = new TaskService(db);
                    TeamService teamService = new TeamService(db);
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    IQueryable<int> teamIds = db.TeamProjects.Where(x => x.ProjectID == id).Select(x => x.TeamID);
                    int tc = teamIds.Count();
                    if (db.Users.Find(userId).IsAdmin || teamService.IsManagerOfTeam(userId, teamIds))
                    {
                        var tasks = projectService.GetTasksOfProject(id);
                        var ArchiveTasks = tasks.Where(x => x.IsArchived == true);
                        var UnArchiveTasks = tasks.Where(x => x.IsArchived == false);
                        JArray dataObject1 = new JArray();
                        foreach (var task in ArchiveTasks)
                        {
                            dataObject1.Add(taskService.ParseToJson(task));
                        }

                        JArray dataObject2 = new JArray();
                        foreach (var task in UnArchiveTasks)
                        {
                            dataObject2.Add(taskService.ParseToJson(task));
                        }

                        JObject mainObject = new JObject
                        {
                            ["archiveTasks"] = dataObject1,
                            ["unArchiveTasks"] = dataObject2
                        };
                        return Ok(ResponseHelper.GetResponse(mainObject));
                    }

                    return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("recentchanged")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAdminDashboard()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    ProjectService projectService = new ProjectService(db);
                    JArray dataObject = new JArray();
                    var projects = projectService.GetProjectChangeThisWeek()
                        .Where(project => project.Status.HasValue &&
                                          (project.Status.Value == (int) ProjectStatus.NotStarted ||
                                           project.Status.Value == (int) ProjectStatus.Executing))
                        .OrderByDescending(x => x.ChangedTime);


                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, false, AgencyConfig.AvatarPath));
                    }


                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpGet]
        [Route("recentdeadline")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAdminDashboard1()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    ProjectService projectService = new ProjectService(db);
                    JArray dataObject = new JArray();
                    var projects = projectService.GetProjectsDeadlineInThisWeek()
                        .Where(project => project.Status.HasValue &&
                                          (project.Status.Value == (int)ProjectStatus.NotStarted ||
                                           project.Status.Value == (int)ProjectStatus.Executing))
                        .OrderByDescending(x => x.Deadline);
                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, false, AgencyConfig.AvatarPath));
                    }


                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpGet]
        [Route("recentdeadline")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAdminDashboard2()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    int userId = Int32.Parse(User.Identity.GetUserId());
                    ProjectService projectService = new ProjectService(db);
                    JArray dataObject = new JArray();
                    var projects = projectService.GetProjectsFinishedThisMonth()
                        .Where(project => project.Status.HasValue &&
                                          (project.Status.Value == (int)ProjectStatus.NotStarted ||
                                           project.Status.Value == (int)ProjectStatus.Executing))
                        .OrderByDescending(x => x.FinishedDate);
                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, false, AgencyConfig.AvatarPath));
                    }


                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{projecId:int}/members/assignable")]
        [System.Web.Http.Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult GetAssignableMember(int projecId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    TeamService teamService = new TeamService(db);
                    UserService userService = new UserService(db);
                    ProjectService projectService = new ProjectService(db);
                    IEnumerable<Team> teamsOfProject = teamService.GetTeamsOfProject(projecId);

                    List<User> userOfAllTeam = new List<User>();
                    foreach (Team team in teamsOfProject)
                    {
                        IEnumerable<User> users = userService.GetUsersOfTeam(team.ID);
                        userOfAllTeam.AddRange(users);
                    }

                    IEnumerable<User> projectAssignees = userService.GetUsersOfProject(projecId);
                    IEnumerable<User> assignableUser = userOfAllTeam.Except(projectAssignees);

                    IEnumerable<JObject> usersJson = assignableUser.Select(user => userService.ParseToJson(user));

                    return Ok(ResponseHelper.GetResponse(new JArray(usersJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("setteams")]
        [System.Web.Http.Authorize]
        public IHttpActionResult SetProjectToTeams(SetProjectToTeamsViewModel projectToTeamsViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);

                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);

                    Project project = projectService.SetProjectToTeams(
                        projectToTeamsViewModel.ProjectID,
                        projectToTeamsViewModel.TeamIDs,
                        currentUser.ID);

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    List<User> notifiedUsersList = new List<User>();
                    foreach (int teamId in projectToTeamsViewModel.TeamIDs)
                    {
                        NotificationSentence sentence = builder.SetDepartmentToProjectSentence(
                            currentUser.ID,
                            teamId,
                            project.ID);
                        IEnumerable<User> notifiedUsers =
                            notificationService.NotifyToUsersOfDepartment(teamId, sentence);
                        notifiedUsersList.AddRange(notifiedUsers);
                    }

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsersList.Select(user => user.ID)));
                    }


                    return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(project, true,
                        AgencyConfig.AvatarPath)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpGet]
        [Route("")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetMyProject()
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);

                    string userId = User.Identity.GetUserId();
                    IEnumerable<Project> projects = projectService.GetProjectOfUser(Int32.Parse(userId));
                    JArray dataObject = new JArray();

                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project));
                    }

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("dd/{id:int}")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetMyProjectinTeam(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    IEnumerable<Project> projects = projectService.GetProjectOfTeam(id);
                    JArray dataObject = new JArray();

                    foreach (var project in projects)
                    {
                        dataObject.Add(projectService.ParseToJson(project, isDetailed: false));
                    }

                    return Ok(ResponseHelper.GetResponse(dataObject));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{id:int}/list")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetListOfProject(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ListService listService = new ListService(db);
                    IEnumerable<List> lists = listService.GetListOfProject(id);
                    IEnumerable<JObject> listsJson = lists.Select(list => listService.ParseToJson(list));
                    return Ok(ResponseHelper.GetResponse(new JArray(listsJson)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpPost]
        [Route("custom")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CreateCustomProject(CreateCustomProjectModel createCustomProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        Boolean flag = true;
                        if (createCustomProjectModel.Name != null &&
                            projectService.CheckDuplicatedNameOfProject(createCustomProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Project name is taken");
                            flag = false;
                        }


                        if (createCustomProjectModel.StartDate.HasValue && createCustomProjectModel.Deadline.HasValue)
                        {
                            if (createCustomProjectModel.StartDate > createCustomProjectModel.Deadline)
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }

                            if (createCustomProjectModel.Deadline < createCustomProjectModel.StartDate)
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the start date");
                                flag = false;
                            }
                        }


                        if (flag == false)
                        {
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        }

                        UserService userService = new UserService(db);
                        ListService listService = new ListService(db);

                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);

                        Project newProject = projectService.CreateCustomProject(
                            createCustomProjectModel.Name,
                            createCustomProjectModel.Description,
                            createCustomProjectModel.Deadline,
                            createCustomProjectModel.StartDate,
                            creator,                            
                            (int)createCustomProjectModel.Budget,
                            createCustomProjectModel.Goal
                        );
                        JObject dataObject = projectService.ParseToJson(newProject);

                        return Ok(ResponseHelper.GetResponse(dataObject));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpPost]
        [Route("google")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CreateGoogleProject(CreateOnlineProjectModel createOnlineProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        Boolean flag = true;
                        if (createOnlineProjectModel.Name != null &&
                            projectService.CheckDuplicatedNameOfProject(createOnlineProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Project name is taken");
                            flag = false;
                        }


                        if (createOnlineProjectModel.StartDate.HasValue && createOnlineProjectModel.Deadline.HasValue)
                        {
                            if (createOnlineProjectModel.StartDate > createOnlineProjectModel.Deadline)
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }

                            if (createOnlineProjectModel.Deadline < createOnlineProjectModel.StartDate)
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the start date");
                                flag = false;
                            }
                        }


                        if (flag == false)
                        {
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        }

                        UserService userService = new UserService(db);
                        ListService listService = new ListService(db);

                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);

                        Project newProject = projectService.CreateOnlineProject(
                            createOnlineProjectModel.Name,
                            createOnlineProjectModel.Description,
                            createOnlineProjectModel.Deadline,
                            createOnlineProjectModel.StartDate,
                            creator,
                            createOnlineProjectModel.Goal,
                            (int)createOnlineProjectModel.Budget,
                            createOnlineProjectModel.Location,
                            createOnlineProjectModel.Keywords
                        );

                        newProject.TypeAdID = 10;
                        JObject dataObject = projectService.ParseToJson(newProject);

                        // Create List
                        List list1 = listService.CreateList(newProject.ID, "Read the summary request"); //Đọc yêu cầu tóm tắt
                        List list2 = listService.CreateList(newProject.ID, "Ideas");//Ý tưởng
                        List list3 = listService.CreateList(newProject.ID, "Product manufacturing");//Sản xuất sản phẩm

                        // Create task for list
                        int[] createTaskModel = null;// new int[0]; // Anh k biet cai nay la gi, nen tam thoi de trong
                        int priorityTmp = 1; // hard code
                        DateTime startDateTmp = DateTime.Now; // hard code
                        int duration = 6; // hard code
                        int effort = 32; // hard code

                        // Tasksfor List 1
                        CreateTaskForList("Request Summary", "Task1forList1 Description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Request analysis", "Task2forList1 Description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        // Tasks for List 2
                        CreateTaskForList("Build an creative & effective keyword ", "Task1forList2 Description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db); //Xây dựng ý tưởng từ khóa hiệu quả
                        CreateTaskForList("Ideas review phase of customer", "Task2forList2 Description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db); //Khách hàng review ý tưởng
                        CreateTaskForList("Edit", "Task3forList2 Description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        // Tasks for List 3
                        CreateTaskForList("Built the google adwords", "Task1forList3 Description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("SEO - Top key word", "Task2forList3 Description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db); //Seo top tu khoa

                        return Ok(ResponseHelper.GetResponse(dataObject));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
        [HttpPost]
        [Route("tvc")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CreateTvProject(CreateTVProjectModel createTVProjectModel
            )
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        Boolean flag = true;
                        if (createTVProjectModel.Name != null &&
                            projectService.CheckDuplicatedNameOfProject(createTVProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Project name is taken");
                            flag = false;
                        }


                        if (createTVProjectModel.StartDate.HasValue && createTVProjectModel.Deadline.HasValue)
                        {
                            if (createTVProjectModel.StartDate > createTVProjectModel.Deadline)
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }

                            if (createTVProjectModel.Deadline < createTVProjectModel.StartDate)
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the start date");
                                flag = false;
                            }
                        }


                        if (flag == false)
                        {
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        }

                        UserService userService = new UserService(db);
                        ListService listService = new ListService(db);

                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);

                        Project newProject = projectService.CreateTvProject(
                            createTVProjectModel.Name,
                            createTVProjectModel.Description,
                            createTVProjectModel.Deadline,
                            createTVProjectModel.StartDate,
                            creator,
                            createTVProjectModel.Goal,
                            (int)createTVProjectModel.Budget,
                            createTVProjectModel.ChannelId,
                            createTVProjectModel.TimeVideo,
                            createTVProjectModel.TimeFrame
                        );
                        newProject.TypeAdID = 8;
                        JObject dataObject = projectService.ParseToJson(newProject);

                        // Create List
                        List list1 = listService.CreateList(newProject.ID, "Client brief");
                        List list2 = listService.CreateList(newProject.ID, "Brainstorm Ideas");
                        List list3 = listService.CreateList(newProject.ID, "Present ideas/plans");
                        List list4 = listService.CreateList(newProject.ID, "Production");
                        List list5 = listService.CreateList(newProject.ID, "Launch");
                        List list6 = listService.CreateList(newProject.ID, "Monitor/Report");

                        // Create task for list
                        int[] createTaskModel = null;// new int[0]; // Anh k biet cai nay la gi, nen tam thoi de trong
                        int priorityTmp = 1; // hard code
                        DateTime startDateTmp = DateTime.Now; // hard code
                        int duration = 6; // hard code
                        int effort = 32; // hard code
                        // Tasksfor List 1
                        CreateTaskForList("Get customer's opinion", "Please input your specifically description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Client consultant", "Please input your specifically description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        // Tasksfor List 2
                        CreateTaskForList("Create a main ideal", "Please input your specifically description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Create a script ", "Please input your specifically description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        // Tasksfor List 3
                        CreateTaskForList("Planning the Presentation ", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Define the objective of the presentation", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Preparing the Content of the Presentation", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Your Presentation ", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        // Tasksfor List 5
                        CreateTaskForList("Test thoroughly before launch.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Invigorate team.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Prepare for an increase in sales.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Gather feedback after launch.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        // Tasksfor List 6
                        CreateTaskForList("Plan the Report", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Write the Report.", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Reference the source.", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Review.", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);


                        // Tasksfor List 4
                        CreateTaskForList("Build an ad script", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Reservation booking plan", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Get a TV advertising permit", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Get a TV ad code", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        return Ok(ResponseHelper.GetResponse(dataObject));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPost]
        [Route("facebook")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CreateFacebookProject(CreateOnlineProjectModel createOnlineProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        Boolean flag = true;
                        if (createOnlineProjectModel.Name != null &&
                            projectService.CheckDuplicatedNameOfProject(createOnlineProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Project name is taken");
                            flag = false;
                        }


                        if (createOnlineProjectModel.StartDate.HasValue && createOnlineProjectModel.Deadline.HasValue)
                        {
                            if (createOnlineProjectModel.StartDate > createOnlineProjectModel.Deadline)
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }

                            if (createOnlineProjectModel.Deadline < createOnlineProjectModel.StartDate)
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the start date");
                                flag = false;
                            }
                        }


                        if (flag == false)
                        {
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        }

                        UserService userService = new UserService(db);
                        ListService listService = new ListService(db);

                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);

                        Project newProject = projectService.CreateOnlineProject(
                            createOnlineProjectModel.Name,
                            createOnlineProjectModel.Description,
                            createOnlineProjectModel.Deadline,
                            createOnlineProjectModel.StartDate,
                            creator,
                            createOnlineProjectModel.Goal,
                            (int)createOnlineProjectModel.Budget,
                            createOnlineProjectModel.Location,
                            createOnlineProjectModel.Keywords
                        );
                        newProject.TypeAdID = 11;
                        JObject dataObject = projectService.ParseToJson(newProject);

                        // Create List
                        List list1 = listService.CreateList(newProject.ID, "Client brief");
                        List list2 = listService.CreateList(newProject.ID, "Brainstorm Ideas");
                        List list3 = listService.CreateList(newProject.ID, "Present ideas/plans");
                        List list4 = listService.CreateList(newProject.ID, "Production");
                        List list5 = listService.CreateList(newProject.ID, "Launch");
                        List list6 = listService.CreateList(newProject.ID, "Monitor/Report");

                        // Create task for list
                        int[] createTaskModel = null;// new int[0]; // Anh k biet cai nay la gi, nen tam thoi de trong
                        int priorityTmp = 1; // hard code
                        DateTime startDateTmp = DateTime.Now; // hard code
                        int duration = 6; // hard code
                        int effort = 32; // hard code

                        // Tasksfor List 1
                        CreateTaskForList("Get customer's opinion", "Please input your specifically description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Client consultant", "Please input your specifically description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        // Tasksfor List 2
                        CreateTaskForList("Create a main ideal", "Please input your specifically description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Create a script ", "Please input your specifically description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        // Tasksfor List 3
                        CreateTaskForList("Planning the Presentation ", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Define the objective of the presentation", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Preparing the Content of the Presentation", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Your Presentation ", "Please input your specifically description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        // Tasksfor List 5
                        CreateTaskForList("Test thoroughly before launch.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Invigorate team.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Prepare for an increase in sales.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Gather feedback after launch.", "Please input your specifically description", list5.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        // Tasksfor List 6
                        CreateTaskForList("Plan the Report", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Write the Report.", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Reference the source.", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Review.", "Please input your specifically description", list6.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);


                        // Tasksfor List 4
                        CreateTaskForList("Create a Marketing Campaign Page and Publish it to Facebook", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Create an Entry Popup to Drive Website Traffic to Facebook", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Create a Facebook Ad to Drive New Prospective Customers", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Use Email to Achieve the Campaign Objective", "Please input your specifically description", list4.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        return Ok(ResponseHelper.GetResponse(dataObject));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }



        [HttpPost]
        [Route("")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CreateProject(CreateProjectModel createProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        Boolean flag = true;
                        if (createProjectModel.Name != null &&
                            projectService.CheckDuplicatedNameOfProject(createProjectModel.Name))
                        {
                            ModelState.AddModelError("Name", "Project name is taken");
                            flag = false;
                        }


                        if (createProjectModel.StartDate.HasValue && createProjectModel.Deadline.HasValue)
                        {
                            if (createProjectModel.StartDate > createProjectModel.Deadline)
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }

                            if (createProjectModel.Deadline < createProjectModel.StartDate)
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the start date");
                                flag = false;
                            }
                        }


                        if (flag == false)
                        {
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));
                        }

                        UserService userService = new UserService(db);
                        ListService listService = new ListService(db);

                        string loginedUserId = User.Identity.GetUserId();
                        User creator = userService.GetUser(loginedUserId);

                        Project newProject = projectService.CreateProject(
                            createProjectModel.Name,
                            createProjectModel.Description,
                            createProjectModel.Deadline,
                            createProjectModel.StartDate,
                            creator,
                            createProjectModel.Goal
                        );
                        JObject dataObject = projectService.ParseToJson(newProject);

                        // Create List
                        List list1 = listService.CreateList(newProject.ID, "Read the summary request"); //Đọc yêu cầu tóm tắt
                        List list2 = listService.CreateList(newProject.ID, "Ideas");//Ý tưởng
                        List list3 = listService.CreateList(newProject.ID, "Product manufacturing");//Sản xuất sản phẩm

                        // Create task for list
                        int[] createTaskModel = null;// new int[0]; // Anh k biet cai nay la gi, nen tam thoi de trong
                        int priorityTmp = 1; // hard code
                        DateTime startDateTmp = DateTime.Now; // hard code
                        int duration = 6; // hard code
                        int effort = 32; // hard code

                        // Tasksfor List 1
                        CreateTaskForList("Request Summary", "Task1forList1 Description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("Request analysis", "Task2forList1 Description", list1.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        // Tasks for List 2
                        CreateTaskForList("Build an creative & effective keyword ", "Task1forList2 Description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db); //Xây dựng ý tưởng từ khóa hiệu quả
                        CreateTaskForList("Ideas review phase of customer", "Task2forList2 Description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db); //Khách hàng review ý tưởng
                        CreateTaskForList("Edit", "Task3forList2 Description", list2.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);

                        // Tasks for List 3
                        CreateTaskForList("Built the google adwords", "Task1forList3 Description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db);
                        CreateTaskForList("SEO - Top key word", "Task2forList3 Description", list3.ID, priorityTmp, startDateTmp, duration, effort, creator, createTaskModel, db); //Seo top tu khoa

                        return Ok(ResponseHelper.GetResponse(dataObject));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        private void CreateTaskForList(string taskName, string taskDescription, int listId, int priority,
            DateTime startDate, int duration, int effort, User creator, int[] createTaskModel, CmAgencyEntities db)
        {
            TaskService taskService = new TaskService(db);
            DependencyService dependencyService = new DependencyService(db);

            Task task = taskService.CreateTask(taskName, taskDescription, listId, priority, startDate, duration, effort, creator);

            if (createTaskModel != null)
            {
                foreach (int predecessor in createTaskModel)
                {
                    dependencyService.CreateDependency(predecessor, task.ID, creator.ID);
                }
            }
        }

        [HttpPut]
        [Route("")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult UpdateProject(UpdateProjectViewModel updateProjectViewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    DateTime? deadline = null;
                    DateTime? startdate = null;

                    DateTime tmp;
                    if (DateTime.TryParse(updateProjectViewModel.deadline, out tmp))
                    {
                        deadline = tmp;
                    }

                    if (DateTime.TryParse(updateProjectViewModel.startdate, out tmp))
                    {
                        startdate = tmp;
                    }

                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        UserService userService = new UserService(db);
                        TeamService teamService = new TeamService(db);
                        NotificationService notificationService = new NotificationService(db);

                        string userIdString = User.Identity.GetUserId();
                        User currentUser = userService.GetUser(userIdString);

                        Boolean flag = true;

                        if (updateProjectViewModel.startdate != null && updateProjectViewModel.deadline != null)
                        {
                            if (DateTime.Parse(updateProjectViewModel.startdate) >
                                DateTime.Parse(updateProjectViewModel.deadline))
                            {
                                ModelState.AddModelError("StartDate", "StartDate must be smaller than the deadline");
                                flag = false;
                            }


                            if (DateTime.Parse(updateProjectViewModel.deadline) <
                                DateTime.Parse(updateProjectViewModel.startdate))
                            {
                                ModelState.AddModelError("Deadline", "Deadline must be greater than the StartDate");
                                flag = false;
                            }
                        }


                        if (flag == false)
                            return Content(HttpStatusCode.BadRequest, ResponseHelper.GetExceptionResponse(ModelState));

                        var updatedProject = projectService.UpdateProject(
                            updateProjectViewModel.id,
                            updateProjectViewModel.name,
                            updateProjectViewModel.description,
                            deadline,
                            startdate,
                            currentUser.ID,
                            updateProjectViewModel.Goal,
                            (int)updateProjectViewModel.Budget
                        );


                        NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                        NotificationSentence sentence = builder.EditProjectSentence(
                            currentUser.ID,
                            updateProjectViewModel.id);
                        IEnumerable<User> notifiedUsers =
                            notificationService.NotifyToUsersOfProject(updateProjectViewModel.id, sentence);

                        IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                        if (context != null)
                        {
                            context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                        }

                        return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(updatedProject)));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpPut]
        [Route("close")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult CloseProject(DeleteProjectViewModel deleteProjectViewModel)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);

                    projectService.CloseProject(deleteProjectViewModel.id, currentUser.ID);

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    NotificationSentence sentence = builder.CloseProjectSentence(
                        currentUser.ID,
                        deleteProjectViewModel.id);
                    IEnumerable<User> notifiedUsers =
                        notificationService.NotifyToUsersOfProject(deleteProjectViewModel.id, sentence);

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsers.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse());
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpGet]
        [Route("{projectId:int}")]
        [System.Web.Http.Authorize]
        public IHttpActionResult GetProjectByID(int projectId)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    Project foundProject = projectService.GetProjectByID(projectId);
                    string userIdString = User.Identity.GetUserId();
                    User user = userService.GetUser(userIdString);

                    if (!user.IsAdmin)
                    {
                        IEnumerable<Project> projectsOfUser = projectService.GetProjectOfUser(user.ID).ToList();
                        if (!projectsOfUser.Any(project => project.ID.Equals(projectId)))
                        {
                            return Content(HttpStatusCode.Unauthorized,
                                ResponseHelper.GetExceptionResponse(
                                    $"You need to be a member of project {foundProject.Name} to view"));
                        }
                    }


                    if (foundProject != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJson(
                                foundProject,
                                avatarPath: AgencyConfig.AvatarPath,
                                isDetailed: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find project with ID {projectId}");
                    }
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        [HttpGet]
        [Route("{id:int}/report")]
        [System.Web.Http.Authorize(Roles = "Admin, Manager")]
        public IHttpActionResult GetProjectTotalReport(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var project = projectService.GetProjectByID(id);
                    if (project != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJsonTotalReport(project, isIncludeTask: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find project with ID {id}");
                    }
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }


        public IHttpActionResult GetReport(int id)
        {
            try
            {
                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    var project = projectService.GetProjectByID(id);
                    if (project != null)
                    {
                        return Ok(ResponseHelper.GetResponse(
                            projectService.ParseToJsonProjectReport(project, isIncludeTask: true)
                        ));
                    }
                    else
                    {
                        return Content(HttpStatusCode.BadRequest, $"Can't find project with ID {id}");
                    }
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("assign")]
        [System.Web.Http.Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult AssignProject(AssignProjectModel assignProjectModel)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }

                using (CmAgencyEntities db = new CmAgencyEntities())
                {
                    ProjectService projectService = new ProjectService(db);
                    UserService userService = new UserService(db);
                    NotificationService notificationService = new NotificationService(db);
                    string userIdString = User.Identity.GetUserId();
                    User currentUser = userService.GetUser(userIdString);
                    Project project = projectService.AssignUsersToProject(
                        assignProjectModel.UserIds,
                        assignProjectModel.ProjectId,
                        currentUser.ID
                    );

                    NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                    List<User> notifiedUsersList = new List<User>();
                    foreach (int userId in assignProjectModel.UserIds)
                    {
                        NotificationSentence sentence = builder.AssignMemberToProjectSentence(
                            currentUser.ID,
                            userId,
                            project.ID);
                        IEnumerable<User> notifiedUsers =
                            notificationService.NotifyToUsersOfProject(assignProjectModel.ProjectId, sentence);
                        notifiedUsersList.AddRange(notifiedUsers);
                    }

                    IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                    if (context != null)
                    {
                        context.Clients.All.updateNotification(new JArray(notifiedUsersList.Select(user => user.ID)));
                    }

                    return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(project,
                        true, AgencyConfig.AvatarPath)));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }

        [HttpPut]
        [Route("unassign")]
        [System.Web.Http.Authorize(Roles = "Admin,Manager")]
        public IHttpActionResult UnAssignProject(AssignProjectModel assignProjectModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    using (CmAgencyEntities db = new CmAgencyEntities())
                    {
                        ProjectService projectService = new ProjectService(db);
                        UserService userService = new UserService(db);
                        NotificationService notificationService = new NotificationService(db);

                        string userIdString = User.Identity.GetUserId();
                        User currentUser = userService.GetUser(userIdString);

                        foreach (var userId in assignProjectModel.UserIds)
                        {
                            UserProject NewUserProject = projectService.UnAssignProject(
                                userId,
                                assignProjectModel.ProjectId
                            );
                        }

                        Project project = projectService.GetProjectByID(assignProjectModel.ProjectId);


                        NotificationSentenceBuilder builder = new NotificationSentenceBuilder(db);
                        List<User> notifiedUsersList = new List<User>();
                        List<User> removedUserList = userService.GetUsers(assignProjectModel.UserIds).ToList();
                        foreach (int userId in assignProjectModel.UserIds)
                        {
                            NotificationSentence sentence = builder.UnAssignMemberFromProjectSentence(
                                currentUser.ID,
                                userId,
                                project.ID);
                            IEnumerable<User> notifiedUsers =
                                notificationService.NotifyToUsersOfProject(
                                    assignProjectModel.ProjectId,
                                    sentence,
                                    removedUserList);
                            notifiedUsersList.AddRange(notifiedUsers);
                        }

                        IHubContext context = GlobalHost.ConnectionManager.GetHubContext<EventHub>();
                        if (context != null)
                        {
                            context.Clients.All.updateNotification(
                                new JArray(notifiedUsersList.Select(user => user.ID)));
                        }

                        return Ok(ResponseHelper.GetResponse(projectService.ParseToJson(project, true,
                            AgencyConfig.AvatarPath)));
                    }
                }
                else
                {
                    return Content(HttpStatusCode.BadRequest,
                        ResponseHelper.GetExceptionResponse(ModelState));
                }
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.InternalServerError,
                    ResponseHelper.GetExceptionResponse(ex));
            }
        }
    }
}