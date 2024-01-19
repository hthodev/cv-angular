import { replaceTagP } from "src/ultis/ultis"

export const practicalProjects = replaceDataProject([
  {
    title: 'Trudi',
    timeline: '03/2023 - present',
    company: 'NCC',
    contents: [
      {
        title: 'Contributor',
        content: '- ~150 people'
      },
      {
        title: 'Job position',
        content: '- Back-end NodeJS'
      },
      {
        title: 'Description',
        content: `- This system manages lease property between landlords and tenants
        \n - Through processing PMs can send mail, reiForm, and conversation in appMobile, desktop, website to notify PM's requests.`
      },
      {
        title: 'Technology',
        content: `- Express, MicroService, Twilio, SendGrid, chatGPT,...`
      }
    ]
  },
])

export const projectPersonals = replaceDataProject([
  {
    title: 'TimeSheet',
    timeline: '01/2022 - 09/2022',
    contents: [
      {
        title: 'Description',
        content: '- This system use to timesheet employees in the company'
      },
      {
        title: 'Feature',
        content: `- Manager process project
        \n - Manager salary, information, level of employees
        \n- Log timesheet
        \n- Request off fullday, half-day, leave late/leave early
        \n- Request change working hours`
      },
      {
        title: 'Technology used',
        content: `- ExpressJS, JWT, TypeScript, Passport, Multer
        \n- Database: NoSQL (MongoDB)
        \n- CI/CD pipeline automation Deploy`
      },
      {
        title: 'Link to project',
        content: `- link code: <a href='https://github.com/hthodev/timesheet' target="_blank"> GitHub </a>
        \n- link demo: <a href='http://timesheet.id.vn' target="_blank"> Web demo </a> 
        \n- account: admin/123qwe`
      },
    ]
  }
])

export const moreProjectPersonals = replaceTagP(`\n- In addition, there are other projects such as Schedule medical, Download Game Website, Payment Nodejs,... 
in my GitHub account at link: <a href="https://github.com/hthodev" target="_blank"> GitHub </a>`)


export const workExperiences = replaceDataExp([
  {
    skill: 'Specialized skill',
    contents: `
    - Proficient JavaScript, TypeScript
    \n- Deploy automation with CI/CD pipeline, microservice, have knowledge about AWS
    \n- Integrate 3th System into webapp as Gmail, VNPay
    \n- Login no password with passport, Auth0
    \n- Backend with framework ExpressJS, NestJS
    \n- ORM: Sequelize, Prisma,...
    \n- Strong about SQL (Postgres, mySQL), noSQL (MongoDB)
    \n- Knowledge about voicemail, SMS, send email with sendGird and Twilio
    \n- Ability to self-study and self-search well
    \n- Proficient management code with git (github, bitbucket)
    \n- Working with Agent/Scrum
    `
  },
  {
    skill: 'Soft Skill',
    contents: `
    - Good ability to work independently and in group
    \n- Able to read documents, ticket English
    \n- Communicate well with people around you`
  }
])

export const awards = `
  - Pascal Programming Consolation Award (2017)
  `

export const hobbies = replaceTagP(`
  - Learn more new technologies.
  \n- Playing table football
  \n- Playing League of Legends
`)

export const summaries = replaceTagP(
  `
  - Hi everyone, I'm back-end developer.
  \n- My short-term goal is to become a Junior Developer and continue honing my technical skills.
  \n- In the long run, I aspire to transition into a managerial role, enabling me to engage directly with clients on project discussions. Additionally, I have a strong desire to join an international team, fostering cross-cultural collaboration and expanding my horizons. My passion for coding, problem-solving abilities, and dedication to continuous learning drive me to pursue excellence in the field of software development. I look forward to embracing new challenges and opportunities in my journey toward professional growth and global collaboration.
`)

const today = new Date();
const myBirthday = new Date('2001-03-06');
let age = today.getFullYear() - myBirthday.getFullYear();
if (
  today.getMonth() < myBirthday.getMonth() ||
  (today.getMonth() === myBirthday.getMonth() && today.getDate() < myBirthday.getDate())
) {
  age--;
}

export const info = {
  position: 'Back-end Developer',
  myBirthday: '06/03/2001',
  age,
  email: 'hthodev@gmail.com',
  subject: 'mailto:hthodev@gmail.com?subject=Hi, Welcome to me!',
  facebook: 'Huu Tho Tran',
  linkFacebook: 'http://facebook.com/thientho.it',
  phone: '+84775589593',
  address: 'Quang Nam - Da Nang',
}

function replaceDataProject(data: dataProjectReplace[]) {
  return data.map(pp => {
    const contents = pp.contents.map(ct => {
      const content = replaceTagP(ct.content);
      return {
        ...ct,
        content
      }
    });
    
    return {
      ...pp,
      contents
    }
  })
};

function replaceDataExp(data: dataExpReplace[]) {
  return data.map(de => {
    const contents = replaceTagP(de.contents)    
    return {
      ...de,
      contents
    }
  })
}

interface dataProjectReplace {
  title: string,
  timeline: string,
  company?: string,
  contents: [
    {
      title: string,
      content: string
    },
    {
      title: string,
      content: string
    },
    {
      title: string,
      content: string
    },
    {
      title: string,
      content: string
    },
  ]
}

interface dataExpReplace {
  skill: string,
  contents: string
}