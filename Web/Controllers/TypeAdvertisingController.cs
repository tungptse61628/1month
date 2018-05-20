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
        [Route("{id:int}")]
        [System.Web.Http.Authorize(Roles = "Admin")]
        public IHttpActionResult GetProjectById(int id)
        {
            using (CmAgencyEntities db = new CmAgencyEntities())
            {
                TypeAdvertisingService typeAdvertisingService = new TypeAdvertisingService(db);
                IEnumerable<TypeAdvertising> typeAdvertisingByMethod = typeAdvertisingService.GetByMethodAdvertising(id); ;
                JArray dataObject = new JArray();

                dataObject = JArray.Parse(JsonConvert.SerializeObject(typeAdvertisingByMethod));

                return Ok(ResponseHelper.GetResponse(dataObject)); ;
            }
        }

    }
}
