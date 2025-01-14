(function(){"use strict";var x=(n=>(n[n.Open=1]="Open",n[n.Progress=2]="Progress",n[n.Done=3]="Done",n))(x||{}),u=(n=>(n.list="list",n.dateRange="dateRange",n.tomorrow="tomorrow",n.today="today",n.upcoming="upcoming",n.habits="habits",n.archived="archived",n))(u||{});const o={Lists:"lists",Tasks:"tasks",Settings:"appSettings",Reports:"reports",TaskRecords:"taskRecords"};class B{constructor(e){this.db=e}async deleteList(e){await this.db.lists.remove(e),await this.db.tasks.removeTasksByListId(e)}async getList(e){return await this.db.lists.get(e)}async getAllList(e,t){return await this.db.lists.getAll({type:"valid",offset:e,limit:t})}async getTaskForList(e,t,s,r=!1,i=!1){return await this.db.tasks.getAll({type:u.list,listId:e,offset:t,limit:s,sortByPriority:r,sortByCompletion:i})}async getHabits(e,t,s=!1){return await this.db.tasks.getAll({type:u.habits,offset:e,limit:t,sortByPriority:s})}async getTask(e){return await this.db.tasks.get(e)}async getTodaysList(e,t,s=!1,r=!1){return await this.db.tasks.getAll({type:u.today,offset:e,limit:t,sortByPriority:s,sortByCompletion:r})}async getTomorrowsList(e,t,s=!1){return await this.db.tasks.getAll({type:u.tomorrow,offset:e,limit:t,sortByPriority:s})}async getUpcoming(e,t,s=!1){return await this.db.tasks.getAll({type:u.upcoming,offset:e,limit:t,sortByPriority:s})}async deleteTask(e){await this.db.tasks.remove(e)}async updateTask(e,t=!1){if(t){const s=await this.db.tasks.updateTaskRecord({id:e.statusRecordId,status:e.status||x.Open,taskId:e.id,timestamp:e.statusUpdatedAt});return await this.db.tasks.update({...e,statusRecordId:s.id,statusUpdatedAt:s.timestamp})}return await this.db.tasks.update(e)}async updateList(e){await this.db.lists.update(e),await this.db.tasks.updateAllTasksForList(e)}getRecentLists(){return this.db.lists.getAll({type:"recent"})}async addTask(e){return await this.db.tasks.add(e)}async addList(e){return await this.db.lists.add(e)}cleanOldRecords(){return Promise.all([this.db.cleanup.cleanupLists(),this.db.cleanup.cleanupTasks()])}async getSettings(){return await this.db.settings.get()}async updateSettings(e){const s={...await this.getSettings(),...e};return await this.db.settings.update(s)}async addSettings(e){return await this.db.settings.add(e)}}class l extends Error{}class M extends Error{}class N extends Error{}const I={RECORD:"RECORD",TASK:"TASK"};class A extends Error{constructor(e,t,s,r){super(t,s),this.key=e,this.data=r}}const L=60*60*24*1e3;function v(n){const e=n.getMonth()+1,t=n.getDate();return`${n.getFullYear()}-${e<10?"0"+e:e}-${t<10?"0"+t:t}`}const f=()=>v(new Date),q=()=>v(new Date(Date.now()+L)),j=(n,e)=>{const t=e?new Date(e).getTime():Date.now();return v(new Date(t+L*n))},K=(n,e={},t)=>(n=n instanceof Date?n:new Date(n),new Intl.DateTimeFormat("en-US",e).format(n)),O=(n,e)=>{const t=new Set;let s=n;for(;s<=e;){const r=K(s,{weekday:"short"}).toLowerCase();if(t.add(r),s=j(1,s),t.size===7)break}return t};class U{constructor(e){this.indexRequest=e}getAllCount(e="valid"){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Lists],"readwrite").objectStore(o.Lists).index("createdDate").getAll();r.onerror=()=>{s(new l("Failed to retreive list count"))},r.onsuccess=()=>{const i=r.result;e==="valid"&&t(i.filter(a=>e==="valid"&&a.isDeleted!==!1&&a.endDate>=f()).length),e==="archived"&&t(i.filter(a=>e==="archived"&&a.isArchived&&!a.isDeleted).length)}})}getAll(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Lists],"readwrite").objectStore(o.Lists).index("createdDate").openCursor(null,"prev");r.onerror=()=>{s(new Error("Failed to get lists"))};const i={data:[],pagination:{page:0,totalPages:0,itemsPerPage:0,total:0}},a=e.offset||0,c=e.limit||50;let h=0,d=a>0,g=0;r.onsuccess=async w=>{const y=w.target?.result;if(y&&d){d=!1,y.advance(a+1);return}if(y&&!d){e.type==="recent"&&h===4&&t(i);const p=y.value;let D=(p.isArchived||p.endDate>=f())&&!p.isDeleted;D&&e.type==="archived"&&(D=p.isArchived),D=D&&(!e.getOnlyActive||e.getOnlyActive&&p.startDate>f()),D&&(h<c&&(i.data.push(p),h++),g++),y.continue()}else i.pagination.page=a?Math.ceil(g/a):1,i.pagination.total=g,i.pagination.itemsPerPage=c,i.pagination.totalPages=Math.ceil(g/c),t(i)}})}add(e){return new Promise((t,s)=>{const r=Object.assign({},e,{createdDate:Date.now(),lastModifiedDate:Date.now(),isArchived:!1,isDeleted:!1});(!r.endDate||!r.startDate||r.startDate>r.endDate)&&s(new M("Start and end dates are required and should be valid"));const i=this.indexRequest.result.transaction([o.Lists],"readwrite").objectStore(o.Lists).add(r);i.onerror=()=>{s(new Error("Failed to get lists"))},i.onsuccess=()=>{t({...r,id:i.result})}})}async update(e){const t=Object.assign({},await this.get(e.id),{lastModifiedDate:String(Date.now())},e);return new Promise((s,r)=>{const i=this.indexRequest.result.transaction([o.Lists],"readwrite").objectStore(o.Lists).put(t);i.onerror=()=>{r(new Error("Failed to update list"))},i.onsuccess=()=>{s(i.result)}})}get(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Lists],"readwrite").objectStore(o.Lists).get(e);r.onerror=()=>{s(new Error("Failed to get lists"))},r.onsuccess=()=>{t(r.result)}})}remove(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Lists],"readwrite").objectStore(o.Lists).delete(e);r.onerror=()=>{s(new Error("Failed to remove list"))},r.onsuccess=()=>{t(null)}})}}function E(n,e){const t=new Set,s=[];for(const r of n)t.add(r);for(const r of e)t.has(r)&&s.push(r);return s}const F=n=>n.status===x.Open&&n.carryOver&&n.startDate<f()||!!n.days.length&&(!n.endDate||!!n.endDate&&n.endDate>=f())||!n.days.length&&n.startDate>=f(),k={[u.habits]:n=>!!n.days.length,[u.archived]:n=>n.isArchived,[u.list]:(n,e)=>n.listId===e,[u.today]:n=>{const e=n.status===x.Open&&n.carryOver&&n.startDate<f();return!n.listId&&(e||n.startDate===f()&&!n.days.length||!!n.days.length&&!!E([...O(f(),f())],n.days).length)},[u.tomorrow]:n=>!n.listId&&(n.startDate===q()||!!n.days.length&&!!E([...O(q(),q())],n.days).length),[u.upcoming]:n=>!n.listId&&n.startDate>=j(2),[u.dateRange]:(n,e)=>!n.listId&&(n.startDate>=e.from||n.startDate<=e.to)};class ${constructor(e){this.indexRequest=e}get(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Tasks],"readonly").objectStore(o.Tasks).get(e);r.onerror=()=>{s(new l("Failed to get task"))},r.onsuccess=()=>{t(r.result)}})}async add(e){const t=Object.assign({},e,{createdDate:Date.now(),lastModifiedDate:Date.now(),status:x.Open});if(t.listId){const s=await this.getListDates(t.listId);t.startDate=s.from,t.endDate=s.to}return new Promise((s,r)=>{t.startDate||(t.startDate=f());const i=this.indexRequest.result.transaction([o.Tasks],"readwrite").objectStore(o.Tasks).add(t);i.onerror=()=>{r(new l("Failed to add new task"))},i.onsuccess=()=>{s({...t,id:i.result})}})}async update(e){const t=Object.assign({},await this.get(e.id),{lastModifiedDate:String(Date.now())},e);if(t.listId){const s=await this.getListDates(t.listId);t.startDate=s.from,t.endDate=s.to}return new Promise((s,r)=>{const i=this.indexRequest.result.transaction([o.Tasks],"readwrite").objectStore(o.Tasks).put(t);i.onerror=()=>{r(new Error("Failed to update task"))},i.onsuccess=()=>{s({...t,id:i.result})}})}getListDates(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Lists]).objectStore(o.Lists).get(e);r.onerror=()=>{s(new Error("Failed to get list for task"))},r.onsuccess=()=>{const i=r.result;t({from:i.startDate,to:i.endDate})}})}remove(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Tasks],"readwrite").objectStore(o.Tasks).delete(e);r.onerror=()=>{s(new l("Failed to remove task"))},r.onsuccess=()=>{t(null)}})}async getAll(e){let t=e.sortByPriority?"priority":"createdDate",s=e.sortByPriority?"next":"prev";e.sortByCompletion&&(t="status",s="next");const r=[],a=await new Promise((h,d)=>{const g=this.indexRequest.result.transaction([o.Tasks],"readwrite").objectStore(o.Tasks).index(t).openCursor(null,s);g.onerror=()=>{d(new l("Failed to get tasks"))};const w={data:[],pagination:{page:0,totalPages:0,itemsPerPage:0,total:0}};let y=0;const p=e.offset||0,D=e.limit||50;let R=0,P=p;g.onsuccess=Y=>{const T=Y.target?.result;if(T){const m=T.value;let b=!!m.listId||m.isArchived||F(m);b&&(e.type===u.dateRange?b=k.dateRange(m,e.dateRange||{from:"",to:""}):e.type===u.list?b=k.list(m,e.listId||0):b=k[e.type](m)),b&&P>0?(R++,P--,r.push(m.id)):b&&P===0&&(y<D&&(w.data.push(m),y++),r.push(m.id),R++),T.continue()}else w.pagination.page=p?Math.ceil(R/p):1,w.pagination.total=R,w.pagination.itemsPerPage=D,w.pagination.totalPages=Math.ceil(R/D),h(w)}}),c=await this.getAllTaskRecords(e.type,a.data,r.sort((h,d)=>h-d),e.activeList);return a.data=c.result,a.pagination.completed=c.completed,a}async getAllTaskRecords(e,t,s,r=!1){if(!t.length||![u.today,u.list].includes(e)||u.list===e&&!r)return{result:t,completed:0};const a=await new Promise((d,g)=>{const w=this.indexRequest.result.transaction([o.TaskRecords],"readonly").objectStore(o.TaskRecords).index("taskId").getAll(IDBKeyRange.upperBound(s[s.length-1]));w.onerror=()=>{g(new Error("Failed to add task record"))},w.onsuccess=()=>{d(w.result)}});let c=0;return{result:t.map(d=>{let g;return e===u.today?g=a.find(w=>w.taskId===d.id&&w.timestamp===f()):e===u.list&&(g=a.find(w=>w.taskId===d.id&&!!d.listId)),g?(d.status=g.status,d.statusUpdatedAt=g.timestamp,d.statusRecordId=g.id,g.status===x.Done&&c++):(d.status=x.Open,d.statusUpdatedAt=void 0,d.statusRecordId=void 0),d}),completed:c}}updateTaskRecord(e){if(!e.id)return delete e.id,e.timestamp||(e.timestamp=f()),new Promise((t,s)=>{try{const r=this.indexRequest.result.transaction([o.TaskRecords],"readwrite").objectStore(o.TaskRecords).add(e);r.onerror=()=>{s(new Error("Failed to add task record"))},r.onsuccess=()=>{t({...e,id:r.result})}}catch(r){throw console.error(r),r}});if(!e.timestamp)throw new l("invalid timestamp");return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.TaskRecords],"readwrite").objectStore(o.TaskRecords).put(e);r.onerror=()=>{s(new Error("Failed to update task record"))},r.onsuccess=()=>{t(e)}})}getAllByListId(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Tasks],"readwrite").objectStore(o.Tasks).index("createdDate").openCursor(),i=[];r.onerror=()=>{s(new l(`Failed to tasks for id ${e}`))},r.onsuccess=a=>{const c=a.target.result;c?(c.value.listId===e&&i.push(c.value),c.continue()):t(i)}})}async removeTasksByListId(e){let t=!1;const s=[];try{const r=await this.getAllByListId(e);for(const i of r)try{await this.remove(i.id),s.push(i.id)}catch{t=!0}t&&new A(I.TASK,"Failed to remove some tasks from the list",{},s)}catch{}return s}updateAllTasksForList(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Tasks],"readwrite").objectStore(o.Tasks).index("createdDate").openCursor(),i=[];r.onerror=()=>{s(new l("Failed to update tasks for list"))},r.onsuccess=a=>{const c=a.target.result;if(c){const h=c.value;if(h.listId===e.id){i.push(c.value);const d={};e.endDate&&(d.endDate=e.endDate),e.startDate&&(d.startDate=e.endDate),c.update({...h,...d})}c.continue()}else t(null)}})}}class V{constructor(e){this.indexRequest=e}add(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Reports],"readwrite").objectStore(o.Reports).add(e);r.onerror=()=>{if(r.error?.message.includes("constraint")||r.error?.message==="Key already exists in the object store."){s(new N(r.error?.message));return}s(new l("Failed to add new report"))},r.onsuccess=()=>{t(e)}})}async get(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Reports]).objectStore(o.Reports).get(e);r.onerror=()=>{s(new l("Failed to get report"))},r.onsuccess=()=>{t(r.result)}})}}class C{constructor(e){this.indexRequest=e,this.objectNames=o}objectNames}class z extends C{get(){return new Promise((e,t)=>{const s=this.indexRequest.result.transaction(this.objectNames.Settings,"readonly").objectStore(this.objectNames.Settings).getAll();s.onerror=()=>{t(new l("Error retrieving settings"))},s.onsuccess=()=>{e(s.result[0])}})}add(e){return new Promise((t,s)=>{e.lastModifiedDate=Date.now();const r=this.indexRequest.result.transaction(this.objectNames.Settings,"readwrite").objectStore(this.objectNames.Settings).add(e);r.onerror=()=>{s(new l("Error saving settings"))},r.onsuccess=()=>{t({...e,id:r.result})}})}update(e){return new Promise((t,s)=>{e.lastModifiedDate=Date.now();const r=this.indexRequest.result.transaction(this.objectNames.Settings,"readwrite").objectStore(this.objectNames.Settings).put(e);r.onerror=()=>{s(new l("Error saving settings"))},r.onsuccess=()=>{t(e)}})}}class H extends C{async cleanupLists(){let e=!0,t=0;const s=await this.getAllInvalidLists();try{for(const r of s)try{t+=await this.cleanupTasks(r)}catch{e=!0}e&&new A(I.TASK,"Failed to remove some tasks from the list",{})}catch{}return e||await this.deleteLists(s),{deletedLists:s.length,deletedTasks:t}}deleteLists(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction(this.objectNames.Lists,"readwrite").objectStore(this.objectNames.Lists).delete(e);r.onerror=()=>{s(new l("Failed to clean up old list"))},r.onsuccess=()=>{t(r.result)}})}async cleanupTasks(e){const t=await this.getAllInvalidTasks(e);return new Promise((s,r)=>{const i=this.indexRequest.result.transaction(this.objectNames.Tasks,"readwrite").objectStore(this.objectNames.Tasks).delete(t);i.onerror=()=>{r(new l("Error retrieving settings"))},i.onsuccess=()=>{s(t.length)}})}getAllInvalidTasks(e){return new Promise((t,s)=>{const r=this.indexRequest.result.transaction([o.Tasks],"readonly").objectStore(o.Tasks).index("createdDate").openCursor();r.onerror=()=>{s(new Error("Failed to get invalid tasks"))};const i=[];r.onsuccess=a=>{const c=a.target?.result;if(c){const h=c.value;(e&&e===h.listId||!e&&!h.listId&&!F(h)&&!h.isArchived)&&i.push(h),c.continue()}else t(i.map(h=>h.id))}})}getAllInvalidLists(){return new Promise((e,t)=>{const s=this.indexRequest.result.transaction([o.Lists],"readonly").objectStore(o.Lists).index("createdDate").openCursor();s.onerror=()=>{t(new Error("Failed to get lists"))};const r=[];s.onsuccess=i=>{const a=i.target?.result;if(a){const c=a.value;(c.isDeleted||c.endDate<f()&&!c.isArchived)&&r.push(a.value),a.continue()}else e(r.map(c=>c.id))}})}}class S{tasks;lists;indexRequest;reports;cleanup;settings;static instance;async hasDatabase(){return new Promise((e,t)=>{if(!this.indexRequest){t(new l("Database does not exist"));return}try{const s=this.indexRequest.result.transaction([o.Settings]).objectStore(o.Settings).getAll();s.onerror=()=>{t(new l("Error retrieving settings"))},s.onsuccess=()=>{e(!!s.result.length)}}catch(s){if(s.message.includes("The database connection is closing")){e(!1);return}t(new l(s.message))}})}start(){return this.indexRequest?Promise.resolve(this.indexRequest):new Promise((e,t)=>{const s=indexedDB.open("personalPlanner",13);s.onerror=()=>{t(new l("Cannot use IndexDB"))},s.onsuccess=()=>{const r=s.result;r.onerror=i=>{t(new l(`Database error: ${i.target?.errorCode}`))},this.indexRequest=s,e(s)},s.onupgradeneeded=r=>{const i=s.result;if(!i.objectStoreNames.contains(o.Lists)){const a=i.createObjectStore(o.Lists,{autoIncrement:!0,keyPath:"id"});a.createIndex("description","description"),a.createIndex("createdDate","createdDate"),a.createIndex("lastModifiedDate","lastModifiedDate"),a.createIndex("startDate","startDate"),a.createIndex("endDate","endDate"),a.createIndex("isDeleted","isDeleted"),a.createIndex("isArchived","isArchived")}if(!i.objectStoreNames.contains(o.TaskRecords)){const a=i.createObjectStore(o.TaskRecords,{autoIncrement:!0,keyPath:"id"});a.createIndex("taskId","taskId"),a.createIndex("status","status"),a.createIndex("timestamp","timestamp")}if(r.oldVersion,i.objectStoreNames.contains(o.Reports)||i.createObjectStore(o.Reports,{keyPath:"date"}).createIndex("count","count"),!i.objectStoreNames.contains(o.Settings)){const a=i.createObjectStore(o.Settings,{keyPath:"id",autoIncrement:!0});a.createIndex("archive","archive"),a.createIndex("archiveFor","archiveFor"),a.createIndex("image","image"),a.createIndex("name","name"),a.createIndex("lastModifiedDate","lastModifiedDate"),a.createIndex("theme","theme")}if(!i.objectStoreNames.contains(o.Tasks)){const a=i.createObjectStore(o.Tasks,{autoIncrement:!0,keyPath:"id"});a.createIndex("listId","listId"),a.createIndex("description","description"),a.createIndex("note","note"),a.createIndex("startTime","startTime"),a.createIndex("endTime","endTime"),a.createIndex("priority","priority"),a.createIndex("status","status"),a.createIndex("days","days"),a.createIndex("carryOver","carryOver"),a.createIndex("createdDate","createdDate"),a.createIndex("lastModifiedDate","lastModifiedDate"),a.createIndex("startDate","startDate"),a.createIndex("endDate","endDate"),a.createIndex("isDeleted","isDeleted"),a.createIndex("isArchived","isArchived")}}})}repositories(){if(!this.indexRequest)throw new l;return{tasks:this.tasks||new $(this.indexRequest),cleanup:this.cleanup||new H(this.indexRequest),lists:this.lists||new U(this.indexRequest),reports:this.reports||new V(this.indexRequest),settings:this.settings||new z(this.indexRequest)}}static async getInstance(){return this.instance||(this.instance=new S,await this.instance.start()),this.instance}async clear(e){this.indexRequest&&this.indexRequest.result.transaction([e],"readwrite").objectStore(e).clear()}async delete(){return new Promise((e,t)=>{this.indexRequest?.result.close();const s=indexedDB.deleteDatabase("personalPlanner");s.onerror=()=>{t(new l("Error deleting database."))},s.onsuccess=()=>{this.indexRequest=void 0,e(null)},s.onblocked=()=>{t(new l("Request is blocked"))}})}}onmessage=async function(n){console.info(n.data);const e=await S.getInstance();try{await new B(e.repositories()).cleanOldRecords(),this.postMessage("clean up completed")}catch{}}})();