import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-campaign',
  templateUrl: './new-campaign.component.html',
  styleUrls: ['./new-campaign.component.scss']
})
export class NewCampaignComponent implements OnInit {

  methodAdvertisings: any;
  typeAdvertisings : any;

  methodSelectedId: number;
  typeSelectedId: number;

  constructor(
    private projectService: ProjectService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.projectService.getAllMethodAdvertising()
      .then(data => {
        this.methodAdvertisings = data;
        this.methodSelectedId = this.methodAdvertisings[0].ID;
        this.getTypeAdvertising(this.methodSelectedId);
      })
      .catch(reason => {
        console.debug('NewCampaignComponent', reason);
      })
  }

  getTypeAdvertising(methodAdsId : number)
  {
    this.projectService.getTypeAdvertising(methodAdsId)
      .then(data => {
        this.typeAdvertisings = data;
        this.typeSelectedId = this.typeAdvertisings[0].ID;
      })
      .catch(reason => {
        console.debug('NewCampaignComponent', reason);
      })
  }

  onChangeMethod(methodAdsId: any){
    this.methodSelectedId = methodAdsId;
    this.getTypeAdvertising(methodAdsId);
  }

  onChangeType(typeSelectedId: any){
    this.methodSelectedId = typeSelectedId;
  }

  goToDetail()
  {
    //this.router.navigate(['project/'+newProject.id+'/detail']);
    this.router.navigate(['project/createCampaignDetail/' + this.methodSelectedId + '/' + this.typeSelectedId]);
    
  }
}
