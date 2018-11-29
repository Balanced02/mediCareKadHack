export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "fa fa-line-chart fa-2x",
      userType: "super",
    },
    {
      name: "Departments",
      url: "/department",
      icon: "fa fa-users fa-2x",
      userType: "super",
    },
    {
      name: "Doctor",
      url: "/doctor",
      icon: "fa fa-user-md fa-2x",
      userType: "super",
    },
    {
      name: "Patient",
      url: "/dashboard",
      icon: "fa fa-user fa-2x",
      userType: "super",
    },
    {
      name: "Human Resources",
      url: "/dashboard",
      icon: "fa fa-user-secret fa-2x",
      userType: "super",
      children: [
        {
          name: "Recruitment",
          url: "/recruitment",
          userType: "super",
        }
      ],
    },
    {
      name: "Financial Activities",
      url: "/dashboard",
      icon: "fa fa-bar-chart fa-2x",
      userType: "super",
      children: [{
        name: "Payroll",
        url: "/payroll",
        userType: "super",
      }]
    },
    {
      name: "Medcine",
      url: "/dashboard",
      icon: "fa fa-adjust fa-2x",
      userType: "super",
      children: [{
        name: "Inventory",
        url: "/medcineInventory",
        userType: "super",
      }]
    },
    {
      name: "Donor",
      url: "/donor",
      icon: "fa fa-gift fa-2x",
      userType: "super",
      children: [{
        name: "Donate Blood",
        url: "/donateBlood",
        userType: "super",
      }]
    },
    {
      name: "Bed",
      url: "/bed",
      icon: "fa fa-bed fa-2x",
      userType: "super",
      children: [{
        name: "Allocate BedSpace",
        url: "/allocateBed",
        userType: "super",
      }]
    },
    {
      name: "Report",
      url: "/report",
      icon: "fa fa-flag fa-2x",
      userType: "super",
      children: [{
        name: "Doctors Report",
        url: "/doctorsReport",
        userType: "super",
      }]
    },
    {
      name: "Feedback",
      url: "/feedback",
      icon: "fa fa-cogs fa-2x",
      userType: "super",
    },
    {
      name: "Settings",
      url: "/settings",
      icon: "fa fa-cogs fa-2x",
      userType: "super",
    },
    {
      name: "Profile",
      url: "/profile",
      icon: "fa fa-user fa-2x",
      userType: "super",
    },
  ]
};
