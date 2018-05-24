using Entity;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Web.Controllers
{
    [RoutePrefix("api/methodadvertising")]
    public class MethodAdvertisingController : ApiController
    {
        [HttpGet]
        [Route("all")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetAllProject()
        {
            using (CmAgencyEntities db = new CmAgencyEntities())
            {
                MethodAdvertisingService methodAdvertisingService = new MethodAdvertisingService(db);
                IEnumerable<MethodAdvertising> methodAdvertisings = methodAdvertisingService.GetAll().OrderBy(x => x.Status);
                JArray dataObject = new JArray();

                dataObject = JArray.Parse(JsonConvert.SerializeObject(methodAdvertisings, Formatting.Indented,
    new JsonSerializerSettings()
    {
        ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
    }));

                return Ok(ResponseHelper.GetResponse(dataObject)); ;
            }
        }
    }
}
