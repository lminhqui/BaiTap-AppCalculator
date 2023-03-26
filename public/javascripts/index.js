
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
})




