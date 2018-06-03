import { Component, OnInit, ViewChild } from "@angular/core";
import { ProjectService } from "../../../services/project.service";
import { Router, ActivatedRoute } from "@angular/router";
import { IMyDpOptions } from "mydatepicker";
import { BsModalService } from "ngx-bootstrap/modal";
import * as moment from "moment";
import { Project } from "app/interfaces/project";
import {
  CommentModalComponent,
  ConfirmModalComponent,
  ErrorModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from "../../../cmaComponents/modals";

@Component({
  selector: "app-new-campaign-detail",
  templateUrl: "./new-campaign-detail.component.html",
  styleUrls: ["./new-campaign-detail.component.scss"]
})
export class NewCampaignDetailComponent implements OnInit {
  methodSelectedId: number;
  typeSelectedId: number;

  myDatePickerOptions: IMyDpOptions = {
    showInputField: true,
    dateFormat: "dd/mm/yyyy"
  };
  @ViewChild("startDatePicker") startDatePicker;
  @ViewChild("deadlinePicker") deadlinePicker;

  nameCampaign: string;
  description: string;
  nameMethodAdvertising: string;
  nameTypeAdvertising: string;
  goal: string;
  location: string;
  keywords: string;
  budget: number;
  startDate: string;
  deadline: string;

  errors: {
    name: string;
    description: string;
    nameMethodAdvertising: string;
    nameTypeAdvertising: string;
    goal: string;
    location: string;
    keywords: string;
    budget: string;
    startDate: string;
    deadline: string;
  };

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private modalService: BsModalService,
    private route: ActivatedRoute
  ) {
    this.setErrorsNull();
  }

  ngOnInit() {
    this.methodSelectedId = Number(
      this.route.snapshot.paramMap.get("methodId")
    );
    this.typeSelectedId = Number(this.route.snapshot.paramMap.get("typeId"));

    this.setNameOfMethodAndType();
  }

  setNameOfMethodAndType() {
    this.projectService
      .getNameOfMethodAndType(this.methodSelectedId, this.typeSelectedId)
      .then(data => {
        this.nameMethodAdvertising = data[0].nameMethodAds;
        this.nameTypeAdvertising = data[0].nameTypeAds;
      })
      .catch(reason => {
        console.log(reason.Data);
      });
  }

  handleCreate() {
    this.setErrorsNull();
    const onConfirm = () => {
      //const formValue = this.projectForm.value;
      let startDate = moment(
        this.startDatePicker.selectionDayTxt,
        "DD/MM/YYYY"
      );
      let deadline = moment(this.deadlinePicker.selectionDayTxt, "DD/MM/YYYY");
      //this.isLoading = true;
      console.log("Goal" + this.goal);
      this.projectService
        .createOnlineProject(
          this.nameCampaign,
          this.description,
          this.nameMethodAdvertising,
          this.nameTypeAdvertising,
          this.goal, 
          this.location,
          this.keywords,
          this.budget,
          startDate.isValid()
            ? startDate.format("YYYY-MM-DD")
            : this.startDatePicker.selectionDayTxt,
          deadline.isValid()
            ? deadline.format("YYYY-MM-DD")
            : this.deadlinePicker.selectionDayTxt,

        )
        .then(value => {
          let newProject = value as Project;

          //this.isLoading = false;
          this.router.navigate(["project/" + newProject.id + "/detail"]);
        })
        .catch(reason => {
          //this.isLoading = false;
          this.setErrors(reason.Data);
        });
    };
    const initialState = {
      message: `Are you sure to create this project?`,
      confirmCallback: onConfirm
    };
    this.modalService.show(ConfirmModalComponent, {
      initialState,
      class: "modal-dialog"
    });
  }

  setErrorsNull(): void {
    this.errors = {
      name: "",
      description: "",
      nameMethodAdvertising: "",
      nameTypeAdvertising: "",
      goal: "",
      location: "",
      keywords: "",
      budget: "",
      startDate: "",
      deadline: ""
    };
  }

  setErrors(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      switch (fieldName) {
          case "Name":
          this.errors.name = errorMessage;
          break;
          case "Description":
          this.errors.name = errorMessage;
          break;
          case "Goal":
          this.errors.name = errorMessage;
          break;
          case "Location":
          this.errors.name = errorMessage;
          break;
          case "Keywords":
          this.errors.name = errorMessage;
          break;
          case "Budget":
          this.errors.name = errorMessage;
          break;
          case "StartDate":
          this.errors.startDate = errorMessage;
          break;
          case "Deadline":
          this.errors.deadline = errorMessage;
          break;
      }
    }
  }
}
