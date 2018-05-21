using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
    public class TypeAdvertisingService
    {
        private readonly CmAgencyEntities db;

        public TypeAdvertisingService(CmAgencyEntities db)
        {
            this.db = db;
        }

        public TypeAdvertising GetById(int typeId)
        {
            return db.TypeAdvertisings.Find(typeId);
        }

        public IEnumerable<TypeAdvertising> GetByMethodAdvertising(int methodAdvertising)
        {
            return db.TypeAdvertisings.Where(x => x.MethodAdvertisingID == methodAdvertising);
        }
    }
}
