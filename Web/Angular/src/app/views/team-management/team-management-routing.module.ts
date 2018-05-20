import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamManagePageComponent} from './team-management.component';
import {CreateTeamComponent} from './create-team/create-team.component';
import {UpdateTeamComponent} from './update-team/update-team.component';
import { DetailTeamComponent } from './detail-team/detail-team.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Team'
    },
    children: [
      {
        path: 'view',
        component: TeamManagePageComponent,
        data: {
          title: 'View teams'
        }
      },
      {
        path: ':id/detail',
        component: DetailTeamComponent,
        data: {
          title: 'Team detail'
        }
      },
      {
        path: 'my',
        component: DetailTeamComponent,
        data: {
          title: 'Team detail'
        }
      },
      {
        path: 'create',
        component: CreateTeamComponent,
        data: {
          title: 'Create team'
        }
      },
      {
        path: ':id/update',
        component: UpdateTeamComponent,
        data: {
          title: 'Update team'
        }
      },
      
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagementRoutingModule {
}
