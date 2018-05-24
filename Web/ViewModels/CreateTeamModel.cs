using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class CreateTeamModel
    {
        [Required(ErrorMessage = "Name must not be empty")]
        [MaxLength(255)]
        public string Name { get; set; }
    }
}