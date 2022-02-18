import breast from './static/breast.jpg';
import titanic from './static/titanic.jpg';
import cerfrance from './static/cerfrance.jpg';


export const projects= [
    {
        id:1,
        name:'Breats Cancer',
        description: 'An end to end ML project, for breast cancer prediction',
        techno:['Python','SKlearn','MlFlow','React', 'FastAPI','Docker'],
        link:'https://github.com/ArilessTir/breast-pred',
        image:breast
    },
    {
        id:2,
        name:'Titanic',
        description: 'An end to end ML project, with the famous titanic dataset',
        techno:['Python','SKlearn','Flask', 'Grafana','Postgresql'],
        link:'https://github.com/ArilessTir/titanic-app',
        image:titanic
    },
    {
        id:3,
        name:'Cerfrance: Churn',
        description: 'ML enterprise, Project for Cerfrance NPDC & Marketing department',
        techno:['Python','Flask', 'Sklearn','Postgresql','Talend'],
        link:'',
        image:cerfrance
    }
    ,
    {
        id:3,
        name:'Cerfrance: financial risk analysis ',
        description: 'ML enterprise Project for Cerfrance NPDC & Accounting department',
        techno:['Python','Flask', 'Sklearn','Postgresql','Talend'],
        link:'',
        image:cerfrance
    }
]