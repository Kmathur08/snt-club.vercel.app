// memberPost = Faculty_Coordinator, Student_Coordinator, Student_Head, Student_Team

import {
  sharda_soni,
  vinay_marwal,
  garvit,
  aman,
  puru,
  priyansh,
  prakhar,
  prashant,
  yatharth,
  sagar
} from './assets/index';

const sntTeamMember = [
  // Faculty Coordinators
  {
    memberName: 'Dr. Sharda Soni',
    memberPost: 'Faculty_Coordinator',
    memberTeam: '',
    memberPhoto: sharda_soni,
    memberRole: 'Head of Department',
    memberDepartment: 'Chemistry',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: '',
  },
  {
    memberName: 'Mr. Vinay Marwal',
    memberPost: 'Faculty_Coordinator',
    memberTeam: '',
    memberPhoto: vinay_marwal,
    memberRole: 'Associate Professor',
    memberDepartment: 'Department of Mechanical Engineering',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: '',
  },
  // Student Coordinators
  {
    memberName: 'Yatharth Bajaj',
    memberPost: 'Student_Coordinator',
    memberTeam: '',
    memberPhoto: yatharth,
    memberRole: 'Student Coordinator',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'IT',
    memberInsta: 'https://www.instagram.com/yatharth_bajaj/',
    memberLinkedin: 'https://www.linkedin.com/in/yatharth-bajaj-77aa22261/',
  },
  {
    memberName: 'Sagar Agrawal',
    memberPost: 'Student_Coordinator',
    memberTeam: '',
    memberPhoto: sagar,
    memberRole: 'Student Coordinator',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'CSE',
    memberInsta: 'https://www.instagram.com/sagar_1644/',
    memberLinkedin: 'https://www.linkedin.com/in/sagar-agrawal-12276b21a/',
  },
  {
    memberName: 'Aman Sharma',
    memberPost: 'Student_Head',
    memberTeam: '',
    memberPhoto: aman,
    memberRole: 'Tutor Head',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'CSE',
    memberInsta: 'https://www.instagram.com/official_aman.bhardwaj',
    memberLinkedin: 'https://www.linkedin.com/in/amansharma1609?',
  },
  {
    memberName: 'Garvit Singhal',
    memberPost: 'Student_Head',
    memberTeam: '',
    memberPhoto: garvit,
    memberRole: 'Development Head',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'CSE',
    memberInsta: 'https://www.instagram.com/garvitsinghal305/',
    memberLinkedin: 'https://www.linkedin.com/in/garvit-singhal-aa58b0254/',
  },
  {
    memberName: 'Prakhar Singhal',
    memberPost: 'Student_Head',
    memberTeam: '',
    memberPhoto: prakhar,
    memberRole: 'Management Head',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'CSE',
    memberInsta: 'https://www.instagram.com/prakharsinghal52?',
    memberLinkedin: 'https://www.linkedin.com/in/prakhar-singhal-16536a25a',
  },
  {
    memberName: 'Prashant Singh',
    memberPost: 'Student_Head',
    memberTeam: '',
    memberPhoto: prashant,
    memberRole: 'Design Head',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'CSE-IOT',
    memberInsta: 'https://www.instagram.com/web_with_prashant/',
    memberLinkedin: 'https://www.linkedin.com/in/prashantsingh29/',
  },
  {
    memberName: 'Priyansh',
    memberPost: 'Student_Head',
    memberTeam: '',
    memberPhoto: priyansh ,
    memberRole: 'Social Media/PR Head',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'CSE',
    memberInsta: 'https://www.instagram.com/priyanshh.77?',
    memberLinkedin: 'https://www.linkedin.com/in/priyansh-agrawal-6486b1260',
  },
  {
    memberName: 'Puru Bhatt',
    memberPost: 'Student_Head',
    memberTeam: '',
    memberPhoto: puru,
    memberRole: 'Content Head',
    memberDepartment: '',
    memberYear: 'III yr',
    memberBranch: 'CSE',
    memberInsta: 'https://www.instagram.com/puru.bhatt',
    memberLinkedin: 'https://www.linkedin.com/in/puru-bhatt-96056a27a/',
  },
  // Student Team
  // Development Team
  {
    memberName: 'Kshitij Mathur',
    memberPost: 'Student_Team',
    memberTeam: 'Development_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/kshitij-mathur-b8b257288',
  },
  {
    memberName: 'Mayank Sharma',
    memberPost: 'Student_Team',
    memberTeam: 'Development_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/mayanksharma2003/',
  },
  // Tutor Team
  {
    memberName: 'Nitesh Kumar',
    memberPost: 'Student_Team',
    memberTeam: 'Tutor_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/niteshkumar75',
  },
  {
    memberName: 'Rishita Agrawal',
    memberPost: 'Student_Team',
    memberTeam: 'Tutor_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: ' https://www.linkedin.com/in/rishita-agrawal-2031692b1',
  },
  {
    memberName: 'Yash Agrawal',
    memberPost: 'Student_Team',
    memberTeam: 'Tutor_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: ' www.linkedin.com/in/yash-agarwal-5280242a7',
  },
  // Design Team
  {
    memberName: 'Palak Soni',
    memberPost: 'Student_Team',
    memberTeam: 'Design_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: ' https://www.linkedin.com/in/palak-soni-98854b279?',
  },
  {
    memberName: 'Somya Roy',
    memberPost: 'Student_Team',
    memberTeam: 'Design_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/somya-roy-69bb262aa?',
  },
  {
    memberName: 'Mehul Dangda',
    memberPost: 'Student_Team',
    memberTeam: 'Design_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/mehuldangda',
  },
  {
    memberName: 'Yash Bansal',
    memberPost: 'Student_Team',
    memberTeam: 'Design_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/yash-bansal-9663a623b',
  },
  // Content Team
  {
    memberName: 'Aaditya Bansal',
    memberPost: 'Student_Team',
    memberTeam: 'Content_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/aaditya-bansal-aadityabansal111/',
  },
  {
    memberName: 'Aastha Sharma',
    memberPost: 'Student_Team',
    memberTeam: 'Content_Team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://linkedin.com/in/aastha-sharma-556aba243',
  },
  // PR team
  {
    memberName: 'Sarafat Khan',
    memberPost: 'Student_Team',
    memberTeam: 'PR_social_media',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/sarafat-khan/',
  },
  // event team
  {
    memberName: 'Diya Vaswani',
    memberPost: 'Student_Team',
    memberTeam: 'event_team',
    memberPhoto: '',
    memberRole: '',
    memberDepartment: '',
    memberYear: '',
    memberBranch: '',
    memberInsta: '',
    memberLinkedin: 'https://www.linkedin.com/in/diya-vaswani',
  },

];

export { sntTeamMember };
