export const roles = ['Founder','Admin','Manager','Team Lead','Employee','Intern'];

export const rolePermissions = {
  Founder: ['*'],
  Admin: ['*'],
  Manager: ['dashboard:view','tasks:view_department','tasks:manage_department','employees:view','reports:view','attendance:view','calendar:view'],
  'Team Lead': ['dashboard:view','tasks:view_team','tasks:manage_team','attendance:view_team','calendar:view'],
  Employee: ['dashboard:view','tasks:view_own','tasks:update_own','attendance:own','calendar:view'],
  Intern: ['dashboard:view','tasks:view_own','tasks:update_own','attendance:own']
};

export const businesses = [
  { id:'b1', name:'SIA Jewels', status:'Active' },
  { id:'b2', name:'SBX Media', status:'Active' },
  { id:'b3', name:'Westory', status:'Planning' }
];

export const departments = [
  { id:'d1', name:'Graphic Design', businessId:'b1', managerId:'u5' },
  { id:'d2', name:'Video Editing', businessId:'b2', managerId:'u5' },
  { id:'d3', name:'Social Media', businessId:'b1', managerId:'u5' },
  { id:'d4', name:'Finance', businessId:'b2', managerId:'u1' },
  { id:'d5', name:'Operations', businessId:'b2', managerId:'u1' }
];

export const users = [
  { id:'u1', name:'Sandhya', email:'founder@hridhiyam.com', role:'Founder', departmentId:'d5', teamLeadId:null, avatar:'S' },
  { id:'u2', name:'Rahul', email:'rahul@hridhiyam.com', role:'Employee', departmentId:'d1', teamLeadId:'u4', avatar:'R' },
  { id:'u3', name:'Aman', email:'aman@hridhiyam.com', role:'Employee', departmentId:'d2', teamLeadId:'u4', avatar:'A' },
  { id:'u4', name:'Neha', email:'neha@hridhiyam.com', role:'Team Lead', departmentId:'d3', teamLeadId:null, avatar:'N' },
  { id:'u5', name:'Priya', email:'priya@hridhiyam.com', role:'Manager', departmentId:'d5', teamLeadId:null, avatar:'P' },
  { id:'u6', name:'Riya', email:'riya@hridhiyam.com', role:'Intern', departmentId:'d3', teamLeadId:'u4', avatar:'I' }
];

export const taskLibrary = [
  { id:'tl1', code:'SIA-GD-DAY-001', name:'Design Instagram Feed Post', businessId:'b1', departmentId:'d1', role:'Graphic Designer', frequency:'Daily', priority:'High', estimatedMinutes:45, dependsOn:'-', sop:'https://example.com/sop/feed-post', tags:['design','instagram'], checklist:['Collect product photo','Create design','Export JPG','Submit for review'] },
  { id:'tl2', code:'SIA-GD-DAY-002', name:'Design Instagram Story', businessId:'b1', departmentId:'d1', role:'Graphic Designer', frequency:'Daily', priority:'Medium', estimatedMinutes:25, dependsOn:'-', sop:'https://example.com/sop/story', tags:['story'], checklist:['Pick template','Add offer','Export 1080x1920'] },
  { id:'tl3', code:'SBX-VE-DAY-001', name:'Edit Client Reel', businessId:'b2', departmentId:'d2', role:'Video Editor', frequency:'Daily', priority:'High', estimatedMinutes:60, dependsOn:'-', sop:'https://example.com/sop/reel', tags:['video','client'], checklist:['Import footage','Add captions','Color correction','Export'] },
  { id:'tl4', code:'SIA-SMM-DAY-001', name:'Reply Instagram DMs', businessId:'b1', departmentId:'d3', role:'SMM', frequency:'Daily', priority:'High', estimatedMinutes:30, dependsOn:'-', sop:'https://example.com/sop/dm', tags:['support','sales'], checklist:['Open unread DMs','Reply with saved replies','Tag hot leads'] },
  { id:'tl5', code:'OPS-WEEK-001', name:'Weekly Operations Review', businessId:'b2', departmentId:'d5', role:'Manager', frequency:'Weekly', priority:'High', estimatedMinutes:90, dependsOn:'-', sop:'https://example.com/sop/ops-review', tags:['review'], checklist:['Check pending tasks','Check attendance','Prepare action list'] }
];

export const tasks = [
  { id:'t1', number:'TASK-000001', title:'Design Instagram Feed Post', businessId:'b1', departmentId:'d1', assigneeIds:['u2'], watcherIds:['u4','u1'], status:'Ready', priority:'High', dueDate:'2026-07-09', estimatedMinutes:45, actualMinutes:0, progress:0, parentId:null, sop:'https://example.com/sop/feed-post', checklist:[{text:'Collect product photo',done:true},{text:'Create design',done:false},{text:'Submit for review',done:false}], comments:[], activity:[{by:'Sandhya',text:'Task created',at:'Today'}], archived:false, deleted:false },
  { id:'t2', number:'TASK-000002', title:'Edit Client Reel', businessId:'b2', departmentId:'d2', assigneeIds:['u3'], watcherIds:['u5'], status:'In Progress', priority:'High', dueDate:'2026-07-09', estimatedMinutes:60, actualMinutes:25, progress:35, parentId:null, sop:'https://example.com/sop/reel', checklist:[{text:'Import footage',done:true},{text:'Add captions',done:true},{text:'Export',done:false}], comments:[{by:'Aman',text:'First cut in progress'}], activity:[{by:'Aman',text:'Started timer',at:'Today'}], archived:false, deleted:false },
  { id:'t3', number:'TASK-000003', title:'Reply Instagram DMs', businessId:'b1', departmentId:'d3', assigneeIds:['u4','u6'], watcherIds:['u1'], status:'Review', priority:'Medium', dueDate:'2026-07-09', estimatedMinutes:30, actualMinutes:32, progress:80, parentId:null, sop:'https://example.com/sop/dm', checklist:[{text:'Reply unread DMs',done:true},{text:'Tag hot leads',done:false}], comments:[], activity:[{by:'Neha',text:'Moved to review',at:'Today'}], archived:false, deleted:false },
  { id:'t4', number:'TASK-000004', title:'Weekly Operations Review', businessId:'b2', departmentId:'d5', assigneeIds:['u5'], watcherIds:['u1'], status:'Ready', priority:'High', dueDate:'2026-07-11', estimatedMinutes:90, actualMinutes:0, progress:0, parentId:null, sop:'https://example.com/sop/ops-review', checklist:[{text:'Check pending tasks',done:false}], comments:[], activity:[], archived:false, deleted:false }
];

export const attendance = [
  { id:'a1', userId:'u2', date:'2026-07-09', checkIn:'09:58', breakMinutes:30, checkOut:'18:10', workingHours:'7h 42m', status:'Present' },
  { id:'a2', userId:'u3', date:'2026-07-09', checkIn:'10:16', breakMinutes:45, checkOut:'18:00', workingHours:'6h 59m', status:'Late' },
  { id:'a3', userId:'u4', date:'2026-07-09', checkIn:'09:45', breakMinutes:20, checkOut:'18:30', workingHours:'8h 25m', status:'Present' }
];
