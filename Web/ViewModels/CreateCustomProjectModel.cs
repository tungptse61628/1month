using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Web.ViewModels
{
    public class CreateCustomProjectModel
    {
        [Required(ErrorMessage = "Name must not be empty")]
        [MaxLength(255)]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required(ErrorMessage = "Deadline must not be empty")]
        public DateTime? Deadline { get; set; }

        [Required(ErrorMessage = "Start date must not be empty")]
        public DateTime? StartDate { get; set; }
        [Required(ErrorMessage = "Goal must not be empty")]

        public string Goal { get; set; }
        public int? Budget { get; set; }
    }
}