/**
 *  home page (user)
 *  my department
 *  my projects
 *  my tasks (assigned)
 *  my account (profile)
 *  update profile
 */

const staff_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Department',
    url: '/department/my',
    icon: 'icon-people'
  },
  {
    name: 'Projects',
    url: '/project',
    icon: 'icon-calendar'
  },
  {
    name: 'My tasks',
    url: '/task/mytasks',
    icon: 'icon-briefcase'
  },
  {
    name: 'Profile',
    url: '/account/profile',
    icon: 'icon-user',
  }
];

/**
 * home page (manager)
 * my department
 * my projects
 * my account (profile)
 * update profile
 */
const manager_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Department',
    url: '/department/my',
    icon: 'icon-people'
  },
  {
    name: 'Projects',
    url: '/project',
    icon: 'icon-calendar'
  },
  {
    name: 'Profile',
    url: '/account/profile',
    icon: 'icon-user',
  }
];

/**
 * home page (admin)
 * view account
 * create account
 * view department
 * view project
 * create project
 */
const admin_navigation = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer'
  },
  {
    name: 'Projects campaign',
    url: '/project',
    icon: 'icon-calendar',
    children: [
      {
        name: 'Create campaign',
        url: '/project/newCampaign',
        icon: 'icon-calendar',
      },

      {
        name: 'Create custom campaign',
        url: '/project/add',
        icon: 'icon-calendar',
      },
      {
        name: 'View campaigns',
        url: '/project',
        icon: 'icon-calendar',
      },

      
    ]
  },
  {
    name: 'Team',
    url: '/department/view',
    icon: 'icon-people',
    children: [
      {
        name: 'Create team',
        url: '/department/create',
        icon: 'icon-people',
      },
      {
        name: 'View teams',
        url: '/department/view',
        icon: 'icon-people',
      },
    ]
  },
  {
    name: 'Accounts',
    url: '/account/view',
    icon: 'icon-user',
    children: [
      {
        name: 'View accounts',
        url: '/account/view',
        icon: 'icon-user',

      },
      {
        name: 'Create account',
        url: '/account/create',
        icon: 'icon-user',
      },
      {
        name: 'My profile',
        url: '/account/profile',
        icon: 'icon-user',
      }
    ]
  },
  {
    name: 'Configuration',
    url: '/config',
    icon: 'icon-speedometer'
  },
];


export {
  admin_navigation,
  manager_navigation,
  staff_navigation
}
