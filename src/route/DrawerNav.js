import React from 'react';

import BasicInfo from '../screen/Profile/BasicInfo';
import Dashboard from '../screen/Dashboard/Dashboard';
import DateWiseAttendance from '../screen/timeSheets/DateWiseAttendances';

import {createDrawerNavigator} from '@react-navigation/drawer';

import {drawerItemsMain, drawerItemsSubMain} from './Drawer/DrawerItemsMain';
import CustomDrawerContent from './Drawer/CustomDrawerContent';
import CustomHeader from './Drawer/CustomHeader';
import Attendances from '../screen/timeSheets/Attendances';
import MonthlyAttendances from '../screen/timeSheets/MonthlyAttendances';
import ApproveEmployeeLeaves from '../screen/timeSheets/ApproveEmployeeLeaves';
import Announcements from '../screen/organization/Announcements';
import CompanyPolicy from '../screen/organization/CompanyPolicy';
import HrCalenders from '../screen/HrCalendars/HrCalenders';
import DetailsScreen from '../screen/detailsScreen/DetailsScreen';
import SocialProfile from '../screen/Profile/SocialProfile';
import Assets from '../screen/Assets/Assets';
import Immigration from '../screen/Profile/Immigration';
import EmergencyContacts from '../screen/Profile/EmergencyContacts';
import Document from '../screen/Profile/Document';
import Qualification from '../screen/Profile/Qualification';
import SalaryBankAccount from '../screen/Profile/SalaryBankAccount';
import WorkExperience from '../screen/Profile/WorkExperience';
import TotalSalary from '../screen/Salary/TotalSalary';
import SalaryComponent from '../screen/Salary/Component';
import Commission from '../screen/Salary/Commission';
import Loan from '../screen/Salary/Loan';
import StatutoryDeduction from '../screen/Salary/StatutoryDeduction';
import OtherAllowance from '../screen/Salary/OtherAllowance';
import Overtime from '../screen/Salary/Overtime';
import SalaryPension from '../screen/Salary/SalaryPension';
import MobileBill from '../screen/Salary/MobileBill';
import TADA from '../screen/Salary/TADA';
import Leave from '../screen/Leave';
import Projects from '../screen/Projects/Projects';
import Tasks from '../screen/Tasks/Tasks';
import PaySlips from '../screen/PaySlips/PaySlips';
import Notifications from '../screen/Notifications/Notification';
import SupportTicket from '../screen/SupportTicket';
import Award from '../screen/CoreHr/Award';
import Travel from '../screen/CoreHr/Travel';
import Transfer from '../screen/CoreHr/Transfer';
import Warning from '../screen/CoreHr/Warning';
import Promotion from '../screen/CoreHr/Promotion';
import Complaints from '../screen/CoreHr/Complaints';
import Termination from '../screen/CoreHr/Termination';
import ChangePassword from '../screen/Profile/ChangePassword';
import ProfilePicture from '../screen/ProfilePicture/ProfilePicture';
import SupportTicketOrganization from '../screen/SupportTicketsOrganized';
import Basic from '../screen/Profile/basic';
import Details from '../screen/detailsScreen/Details';
import {useSelector} from 'react-redux';

import ApproveTravel from '../screen/CoreHr/ApproveTravel';
import ApproveLeave from '../screen/Leave/ApproveLeaves';
import DashboardTicket from '../screen/SupportTicket/Ticket';
import UpcomingHolidays from '../screen/UpcomingHolidays';
import Supervisor from '../screen/Supervisor/SupervisorEmployee';
import SuperVisorAttendanceList from '../screen/Supervisor/SuperVisorAttendanceList';
import SupervisorDatewise from '../screen/Supervisor/SupervisorDatewise';

const Drawer = createDrawerNavigator();

const getHeaderTitle = (options, name) => {
  let returnName = [];
  for (let i = 0; i < name.length; i++) {
    if (i === 0) {
      returnName.push(name[i]);
    } else {
      if (name[i] === name[i].toUpperCase()) {
        returnName.push(' ');
        returnName.push(name[i]);
      } else {
        returnName.push(name[i]);
      }
    }
  }

  let data = returnName.toString();

  let result = '';

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== ',') {
      result += data[i];
    }
  }

  return result;
};

function MainDrawerNavigation() {
  const drawerMode = useSelector(state => state.setting.drawerMode);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: ({navigation, route, options}) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <CustomHeader
              title={title}
              navigation={navigation}
              onPress={() => navigation.navigate('Notifications')}
            />
          );
        },
      }}
      drawerContent={props => (
        <CustomDrawerContent
          drawerItems={drawerMode ? drawerItemsMain : drawerItemsSubMain}
          {...props}
        />
      )}>
      <Drawer.Screen name="Home" component={Dashboard} />
      <Drawer.Screen name="BasicInfo" component={Basic} />
      <Drawer.Screen name="MonthlyAttendances" component={MonthlyAttendances} />
      <Drawer.Screen
        name="ApproveEmployeeLeaves"
        component={ApproveEmployeeLeaves}
      />
      <Drawer.Screen name="Attendances" component={Attendances} />
      <Drawer.Screen
        name="DateWiseAttendances"
        component={DateWiseAttendance}
      />
      <Drawer.Screen name="Announcements" component={Announcements} />
      <Drawer.Screen name="CompanyPolicy" component={CompanyPolicy} />
      <Drawer.Screen name="HrCalenders" component={HrCalenders} />
      <Drawer.Screen name="Details" component={DetailsScreen} />
      <Drawer.Screen name="Assets" component={Assets} />
      <Drawer.Screen name="SocialProfile" component={SocialProfile} />
      <Drawer.Screen name="Immigration" component={Immigration} />
      <Drawer.Screen name="EmergencyContacts" component={EmergencyContacts} />
      <Drawer.Screen name="Document" component={Document} />
      <Drawer.Screen name="Qualification" component={Qualification} />
      <Drawer.Screen name="SalaryBankAccount" component={SalaryBankAccount} />
      <Drawer.Screen name="WorkExperience" component={WorkExperience} />
      <Drawer.Screen name="TotalSalary" component={TotalSalary} />
      <Drawer.Screen name="Components" component={SalaryComponent} />
      <Drawer.Screen name="Commission" component={Commission} />
      <Drawer.Screen name="Loan" component={Loan} />
      <Drawer.Screen name="Statutory" component={StatutoryDeduction} />
      <Drawer.Screen name="OtherAllowance" component={OtherAllowance} />
      <Drawer.Screen name="Overtime" component={Overtime} />
      <Drawer.Screen name="SalaryPension" component={SalaryPension} />
      <Drawer.Screen name="MobileBill" component={MobileBill} />
      <Drawer.Screen name="TADA" component={TADA} />
      <Drawer.Screen name="Leaves" component={Leave} />
      <Drawer.Screen name="SupportTicket" component={SupportTicket} />
      <Drawer.Screen name="Projects" component={Projects} />
      <Drawer.Screen name="Tasks" component={Tasks} />
      <Drawer.Screen name="PaySlips" component={PaySlips} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="Award" component={Award} />
      <Drawer.Screen name="Travel" component={Travel} />
      <Drawer.Screen name="Transfer" component={Transfer} />
      <Drawer.Screen name="Warning" component={Warning} />
      <Drawer.Screen name="Promotion" component={Promotion} />
      <Drawer.Screen name="Complaints" component={Complaints} />
      <Drawer.Screen name="Termination" component={Termination} />
      <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      <Drawer.Screen name="ProfilePicture" component={ProfilePicture} />
      <Drawer.Screen name="DetailsNew" component={Details} />
      <Drawer.Screen
        name="SupportTicketOrganization"
        component={SupportTicketOrganization}
      />

      <Drawer.Screen name="ApproveTravel" component={ApproveTravel} />
      <Drawer.Screen name="UpcomingHolidays" component={UpcomingHolidays} />
      <Drawer.Screen name="ApproveLeaveDetails" component={ApproveLeave} />
      <Drawer.Screen name="Ticket" component={DashboardTicket} />
      <Drawer.Screen name="SupervisorEmpolyee" component={Supervisor} />
      <Drawer.Screen name="SupervisorAttendanceList" component={SuperVisorAttendanceList} />
      <Drawer.Screen name="SupervisorAttendancelistDateWise" component={SupervisorDatewise}/>
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigation;
