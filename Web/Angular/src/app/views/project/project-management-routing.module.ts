import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectManagementComponent } from './view/project-management.component';
import { ProjectSchedulingComponent } from './project-scheduling/project-scheduling.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectUpdateComponent } from './project-update/project-update.component';
import { ProjectTaskComponent } from './project-task/project-task.component';
import { ReportComponent } from './report/report.component';
import { ArchiveComponent } from './archive/archive.component';
import {NewCampaignComponent} from './new-campaign/new-campaign.component';
import {NewCampaignDetailComponent} from './new-campaign-detail/new-campaign-detail.component';
import {FacebookDetailComponent} from './facebook-detail/facebook-detail.component';
import { TvcDetailComponent } from './tvc-detail/tvc-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Project'
    },
    children: [
      {
        path: '',
        component: ProjectManagementComponent,
        data: {
          title: 'View campaigns'
        }
      },
      {
        path: ':id/schedule',
        component: ProjectSchedulingComponent,
        data: {
          title: 'View project schedule'
        }
      },
      {
        path: ':id/detail',
        component: ProjectDetailComponent,
        data: {
          title: 'Project detail'
        }
      },
      {
        path: 'create',
        component: AddProjectComponent,
        data: {
          title: 'Create custom campaign'
        }
      },
      {
        path: 'createCampaign',
        component: NewCampaignComponent,
        data: {
          title: 'Create campaign'
        }
      },
      {
        path: 'google/:methodId/:typeId',
        component: NewCampaignDetailComponent,
        data: {
          title: 'Create google campaign detail'
        }
      },
      {
        path: 'facebook/:methodId/:typeId',
        component: FacebookDetailComponent,
        data: {
          title: 'Create facebook campaign detail'
        }
      },
      {
        path: 'tvc/:methodId/:typeId',
        component: TvcDetailComponent,
        data: {
          title: 'Create tvc campaign detail'
        }
      },
      {
        path: ':id/update',
        component: ProjectUpdateComponent,
        data: {
          title: 'Update project'
        }
      },
      {
        path: ':id/task',
        component: ProjectTaskComponent,
        data: {
          title: 'View tasks'
        }
      },
      {
        path: ':id/report',
        component: ReportComponent,
        data: {
          title: 'View report'
        }
      },
      {
        path: ':id/taskarchive',
        component: ArchiveComponent,
        data: {
          title: 'View archives'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectManagementRoutingModule {
}
