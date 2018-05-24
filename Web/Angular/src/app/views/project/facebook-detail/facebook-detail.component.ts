import { Component, OnInit, ViewChild} from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import {BsModalService} from 'ngx-bootstrap/modal';
import * as moment from 'moment';
import { Project } from 'app/interfaces/project';
import {
  CommentModalComponent,
  ConfirmModalComponent,
  ErrorModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from '../../../cmaComponents/modals';

@Component({
  selector: 'app-facebook-detail',
  templateUrl: './facebook-detail.component.html',
  styleUrls: ['./facebook-detail.component.scss']
})
export class FacebookDetailComponent implements OnInit {
  methodSelectedId: number;
  typeSelectedId: number;

  myDatePickerOptions: IMyDpOptions = {
    showInputField: true,
    dateFormat: 'dd/mm/yyyy',
  };
  @ViewChild('startDatePicker') startDatePicker;
  @ViewChild('deadlinePicker') deadlinePicker;

  nameCampaign: string;
  description: string;
  goal: string;
  location: string;
  keywords: string;
  budget: string;
  
  nameMethodAdvertising: string;
  nameTypeAdvertising: string;

  errors: {
    name: string,
    startDate: string,
    deadline: string,
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
    this.methodSelectedId = Number(this.route.snapshot.paramMap.get('methodId'));;
    this.typeSelectedId = Number(this.route.snapshot.paramMap.get('typeId'));;

    this.setNameOfMethodAndType();
  }

  setNameOfMethodAndType()
  {
    this.projectService.getNameOfMethodAndType(this.methodSelectedId, this.typeSelectedId)
    .then(data => {
      this.nameMethodAdvertising = data[0].nameMethodAds;
      this.nameTypeAdvertising = data[0].nameTypeAds;
    })
    .catch(reason => {
      console.log(reason.Data)
    });
  }

  handleCreate() {
    this.setErrorsNull();
    const onConfirm = () => {
      //const formValue = this.projectForm.value;
      let startDate = moment(this.startDatePicker.selectionDayTxt, 'DD/MM/YYYY');
      let deadline = moment(this.deadlinePicker.selectionDayTxt, 'DD/MM/YYYY');
      //this.isLoading = true;
      this.projectService.createProject(
        this.nameCampaign,
        this.description,
        startDate.isValid() ? startDate.format('YYYY-MM-DD') : this.startDatePicker.selectionDayTxt,
        deadline.isValid() ? deadline.format('YYYY-MM-DD') : this.deadlinePicker.selectionDayTxt,
      )
        .then(value => {
          let newProject= value as Project;
          
          //this.isLoading = false;
          this.router.navigate(['project/'+newProject.id+'/detail']);
        })
        .catch(reason => {
          //this.isLoading = false;
          this.setErrors(reason.Data);
        })
    };
    const initialState = {
      message: `Are you sure to create this project?`,
      confirmCallback: onConfirm
    };
    this.modalService.show(ConfirmModalComponent, { initialState, class: 'modal-dialog' });
  }

  setErrorsNull(): void {
    this.errors = {
      name: '',
      startDate: '',
      deadline: '',
    };
  }

  setErrors(errors: any[]) {
    for (let error of errors) {
      const fieldName = error.key;
      const errorMessage = error.message;
      switch (fieldName) {
        case 'Name':
          this.errors.name = errorMessage;
          break;
        case 'Deadline':
          this.errors.deadline = errorMessage;
          break;
        case 'StartDate':
          this.errors.startDate = errorMessage;
          break;
      }
    }
  }
}
