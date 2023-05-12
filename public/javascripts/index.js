
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
    let check = true;
    while(check){
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
    }
    sleep(36000)
})




