//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class TaskDependency
    {
        public int ID { get; set; }
        public int SourceTaskID { get; set; }
        public int DestinationTaskID { get; set; }
        public Nullable<int> DependencyType { get; set; }
        public Nullable<int> ChangedBy { get; set; }
        public Nullable<int> CreatedBy { get; set; }
        public Nullable<System.DateTime> ChangedTime { get; set; }
        public Nullable<System.DateTime> CreatedTime { get; set; }
    
        public virtual Task Task { get; set; }
        public virtual Task Task1 { get; set; }
    }
}
