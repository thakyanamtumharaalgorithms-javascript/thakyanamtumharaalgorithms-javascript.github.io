//export pt

var d99=[];
async function om99() {
    await db.pt.orderBy('id').each((v)=>{
     if(v.add||v.gst||v.mn1) {
      v.ods=[];
      d99.push(v);
     }
   })
// await d99.forEach(alo);
let pom = document.createElement('a');
let csvContent=JSON.stringify(d99); //here we load our csv data 
let blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
let url = URL.createObjectURL(blob);
pom.href = url;let d=new Date().toLocaleString();
pom.setAttribute('download', 'aa'+d+'.csv');
pom.click();
// async function alo(v,i) {
//     await db.pt.update(v.id, v);
//     // await console.log(v,i)
// }
}
om99(); 
////////////////////////////////////////////////////////

/// import pt
let d99=[{},{}];
    async function om99() {
    await db.pt.bulkAdd(d99);
}

om99();

////////////////////////////////////////////////////////
// import in sheet
let d99=[{},{}];
d99.forEach(omg99);

function omg99(v,i){
    d991+=(JSON.stringify(v)+'\n')
    // console.log(v.id,v+'\n')
}

let pom = document.createElement('a');
let csvContent=d991; //here we load our csv data 
let blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
let url = URL.createObjectURL(blob);
pom.href = url;let d=new Date().toLocaleString();
pom.setAttribute('download', 'aa'+d+'.csv');
pom.click();
////////////////////////////////////////////////////////



