//sendd(urli,od,'type')
async function sendd(urld,d9,b) {
  await fetch(urld, {
    method: 'POST',
    mode: 'no-cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    redirect: 'follow',
    body: JSON.stringify(d9)
  })
    .then((res) => {
      console.log(b+' data send ', d9 ,res)
    })
    .catch((error) => {
      if(localStorage.gr5!='hi2'){
      alert('error in '+b+' sendd fn- '+JSON.stringify(d9)+' '+error+'\nTake a screenshot for Onkar');}
      console.log('error in '+b+' sendd fn- '+JSON.stringify(d9)+error);
      let kl=JSON.parse(localStorage.getItem('pend2'));
      kl['pendingPinData']=d9; // change pendingPinData to od24+'type' type(0,1,2,3,4,5,10)
      localStorage.setItem("pend2", JSON.stringify(kl));  
    });
}




