export const drawerItemsMain = [
  {
    key: 'Home',
    title: 'Home',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
    icon: 'home',
  },
  {
    key: 'TimeSheets',
    title: 'Time Sheets',
    routes: [
      {nav: 'MainDrawer', routeName: 'Attendances', title: 'Attendances'},
      {
        nav: 'MainDrawer',
        routeName: 'DateWiseAttendances',
        title: 'Date Wise Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'MonthlyAttendances',
        title: 'Monthly Attendances',
      },
      {
        nav: 'MainDrawer',
        routeName: 'ApproveEmployeeLeaves',
        title: 'Approve Employee Leaves',
      },
    ],
    icon: 'clock',
  },
  {
    key: 'Organization',
    title: 'Organization',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'Announcements',
        title: 'Announcements',
      },
      {
        nav: 'MainDrawer',
        routeName: 'CompanyPolicy',
        title: 'Company Policy',
      },
    ],
    icon: 'globe',
  },
  {
    key: 'SupportTicketOrganization',
    title: 'Support Ticket',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'SupportTicketOrganization',
        title: 'Support Ticket',
      },
    ],
    icon: 'calendar-alt',
  },
  {
    key: 'HrCalenders',
    title: 'HR Calenders',
    routes: [
      {nav: 'MainDrawer', routeName: 'HrCalenders', title: 'HR Calenders'},
    ],
    icon: 'calendar-alt',
  },
  {
    key: 'Assets',
    title: 'Assets',
    routes: [{nav: 'MainDrawer', routeName: 'Assets', title: 'Assets'}],
    icon: 'archive',
  },
  {
    key: 'Supervisor',
    title: 'Supervisor Menu',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'SupervisorEmpolyee',
        title: 'Supervisor Empolyee',
      },
      {
        nav: 'MainDrawer',
        routeName: 'SupervisorAttendanceList',
        title: 'Supervisor Attendance list',
      },
      {
        nav: 'MainDrawer',
        routeName: 'SupervisorAttendancelistDateWise',
        title: 'Supervisor Attendance list Datewise',
      },
    ],
    icon: 'glasses',
  },
];

export const drawerItemsSubMain = [
  {
    key: 'Home',
    title: 'Dashboard',
    routes: [{nav: 'MainDrawer', routeName: 'Home', title: 'Home'}],
    icon: 'th',
  },
  {
    key: 'ProfilePicture',
    title: 'Profile Picture',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'ProfilePicture',
        title: 'Profile Picture',
      },
    ],
    icon: 'camera',
  },
  {
    key: 'Profile',
    title: 'General',
    routes: [
      {nav: 'BasicInfo', routeName: 'BasicInfo', title: 'Basic Info'},
      {
        nav: 'Immigration',
        routeName: 'Immigration',
        title: 'Immigration',
      },
      {
        nav: 'EmergencyContacts',
        routeName: 'EmergencyContacts',
        title: 'Emergency Contacts',
      },
      {
        nav: 'SocialProfile',
        routeName: 'SocialProfile',
        title: 'Social Profile',
      },
      {
        nav: 'Document',
        routeName: 'Document',
        title: 'Document',
      },
      {
        nav: 'Qualification',
        routeName: 'Qualification',
        title: 'Qualification',
      },
      {
        nav: 'WorkExperience',
        routeName: 'WorkExperience',
        title: 'Work Experience',
      },

      {
        nav: 'SalaryBankAccount',
        routeName: 'SalaryBankAccount',
        title: 'Salary Bank Account',
      },
      {
        nav: 'ChangePassword',
        routeName: 'ChangePassword',
        title: 'Change Password',
      },
      {
        nav: 'AppointmentLetter',
        routeName: 'AppointmentLetter',
        title: 'Appointment Letter',
      },
      {
        nav: 'DownloadLatestIDCard',
        routeName: 'DownloadLatestIDCard',
        title: 'Download Latest ID Card',
      },
    ],
    icon: 'user-alt',
  },
  {
    key: 'Salary',
    title: 'Salary',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'TotalSalary',
        title: 'Total Salary',
      },
      {
        nav: 'MainDrawer',
        routeName: 'Components',
        title: 'Components',
      },
      {
        nav: 'MainDrawer',
        routeName: 'Commission',
        title: 'Commission',
      },
      {
        nav: 'MainDrawer',
        routeName: 'Loan',
        title: 'Loan',
      },
      {
        nav: 'MainDrawer',
        routeName: 'Statutory',
        title: 'Statutory Deduction',
      },
      {
        nav: 'MainDrawer',
        routeName: 'OtherAllowance',
        title: 'Other Allowance',
      },
      {
        nav: 'MainDrawer',
        routeName: 'Overtime',
        title: 'Overtime',
      },
      {
        nav: 'MainDrawer',
        routeName: 'SalaryPension',
        title: 'Salary Pension',
      },
      {
        nav: 'MainDrawer',
        routeName: 'MobileBill',
        title: 'Mobile Bill',
      },
      {
        nav: 'MainDrawer',
        routeName: 'TADA',
        title: 'TA/DA',
      },
    ],
    icon: 'money-bill-alt',
  },

  {
    key: 'CoreHR',
    title: 'Core HR',
    routes: [
      {nav: 'Award', routeName: 'Award', title: 'Award'},
      {
        nav: 'ApproveTravel',
        routeName: 'ApproveTravel',
        title: 'Approve Travel',
      },
      {
        nav: 'Training',
        routeName: 'Training',
        title: 'Training',
      },
      {
        nav: 'Transfer',
        routeName: 'Transfer',
        title: 'Transfer',
      },
      {
        nav: 'Termination',
        routeName: 'Termination',
        title: 'Termination',
      },
      {
        nav: 'Promotion',
        routeName: 'Promotion',
        title: 'Promotion',
      },
      {
        nav: 'Complaints',
        routeName: 'Complaints',
        title: 'Complaints',
      },

      {
        nav: 'Warning',
        routeName: 'Warning',
        title: 'Warning',
      },
    ],
    icon: 'user-check',
  },
  {
    key: 'SupportTicket',
    title: 'Support Ticket',
    routes: [
      {nav: 'MainDrawer', routeName: 'SupportTicket', title: 'Support Ticket'},
    ],
    icon: 'ticket-alt',
  },
  {
    key: 'ApproveLeaveDetails',
    title: 'Approve Leave Details',
    routes: [
      {
        nav: 'MainDrawer',
        routeName: 'ApproveLeaveDetails',
        title: 'Approve Leave Details',
      },
    ],
    icon: 'calendar-minus',
  },
  {
    key: 'PaySlips',
    title: 'Pay Slips',
    routes: [{nav: 'MainDrawer', routeName: 'PaySlips', title: 'Pay Slips'}],
    icon: 'file-invoice',
  },
  {
    key: 'Projects',
    title: 'Projects',
    routes: [{nav: 'MainDrawer', routeName: 'Projects', title: 'Projects'}],
    icon: 'project-diagram',
  },
  {
    key: 'Tasks',
    title: 'Tasks',
    routes: [{nav: 'MainDrawer', routeName: 'Tasks', title: 'Tasks'}],
    icon: 'tasks',
  },
];
