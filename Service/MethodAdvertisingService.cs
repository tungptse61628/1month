using Entity;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class MethodAdvertisingService
    {
        private readonly CmAgencyEntities db;

        public MethodAdvertisingService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public IEnumerable<MethodAdvertising> GetAll()
        {
            return db.MethodAdvertisings.ToList();
        }

        public MethodAdvertising GetById(int methodId)
        {
            return db.MethodAdvertisings.Find(methodId);
        }

        public JObject ParseToJson(MethodAdvertising method)
        {
            UserService userService = new UserService(db);
            

            User creator = userService.GetUser(method.CreatedBy);
            var result = new JObject
            {
                ["id"] = method.ID,
                ["name"] = method.Name,
                ["description"] = method.Description,
                ["createdTime"] = method.CreatedTime,
                ["createdBy"] = userService.ParseToJson(creator),
                ["changedTime"] = method.ChangedTime,
                ["status"] = method.Status
            };

            return result;
        }
    }
}
