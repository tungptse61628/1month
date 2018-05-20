import { Component, OnInit, ViewChild} from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Cursor, StoreService } from '../../../services/tree.service';
import { Location } from '@angular/common';
import * as moment from 'moment';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  CommentModalComponent,
  ConfirmModalComponent,
  ErrorModalComponent,
  SelectUsersModalComponent,
  SelectTeamsModalComponent,
  SelectMembersModalComponent
} from '../../../cmaComponents/modals';
import { Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { BsModalService } from 'ngx-bootstrap';
import { Project } from 'app/interfaces/project';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {
  myDatePickerOptions: IMyDpOptions = {
    showInputField: true,
    dateFormat: 'dd/mm/yyyy',
  };
  @ViewChild('startDatePicker') startDatePicker;
  @ViewChild('deadlinePicker') deadlinePicker;
  newCamForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  
}
