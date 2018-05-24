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
    [RoutePrefix("api/typeadvertising")]
    public class TypeAdvertisingController : ApiController
    {
        [HttpGet]
        [Route("{methodId:int}")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetProjectById(int methodId)
        {
            using (CmAgencyEntities db = new CmAgencyEntities())
            {
                TypeAdvertisingService typeAdvertisingService = new TypeAdvertisingService(db);
                IEnumerable<TypeAdvertising> typeAdvertisingByMethod = typeAdvertisingService.GetByMethodAdvertising(methodId); ;
                JArray dataObject = new JArray();

                dataObject = JArray.Parse(JsonConvert.SerializeObject(typeAdvertisingByMethod, Formatting.Indented,
    new JsonSerializerSettings()
    {
        ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
    }));

                return Ok(ResponseHelper.GetResponse(dataObject)); ;
            }
        }

    }
}
