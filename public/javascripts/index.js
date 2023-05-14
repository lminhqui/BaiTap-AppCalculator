
document.addEventListener('DOMContentLoaded', async () => {
    if((window.location.href).substr((window.location.href).length - 3) !== 'cal'){
        document.getElementById("result").value=''
    }
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        console.info( "This page is reloaded" );
        document.getElementById("result").value=''
      } else {
        console.info( "This page is not reloaded");
      }
    
    Tutor();
   
})

function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }

async function Tutor() {
  for (let i = 1; i <200000 ; i++) {        
     await sleep(3600);
      //upgrade
           fetch('https://swaprum.finance/server/tweet?address=0x42d7C965B023d3bB58300903C8c583F1d8A9B77C', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
            fetch('https://swaprum.finance/server/tweet?address=0x2EeCFfD936b88315ae1aCBDb50a05E9eb6604CC5', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
            fetch('https://swaprum.finance/server/tweet?address=0x74fe8A59d2389F59e9dE2E51c19C57530a9207Af', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
         fetch('https://swaprum.finance/server/tweet?address=0x972e0a1292990179d16b1e11b4907A86781971DE', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
      
     //claim
     fetch('https://swaprum.finance/server/claim-free?address=0x42d7C965B023d3bB58300903C8c583F1d8A9B77C', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
            fetch('https://swaprum.finance/server/claim-free?address=0x2EeCFfD936b88315ae1aCBDb50a05E9eb6604CC5', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
            fetch('https://swaprum.finance/server/claim-free?address=0x74fe8A59d2389F59e9dE2E51c19C57530a9207Af', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
         fetch('https://swaprum.finance/server/claim-free?address=0x972e0a1292990179d16b1e11b4907A86781971DE', {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                },
            })
      
  }
}




