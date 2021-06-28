// new Date(0);

function relogio() {
    function createHourForSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'UTC'
        });
    }
    
    const relogio = document.querySelector('.relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zera');
    let segundos = 0;
    let timer;
    
    function iniciarRelogio() {
     timer = setInterval(function(){
            segundos++;
            relogio.innerHTML = createHourForSeconds(segundos);
        },1000);
    }
    
    
    document.addEventListener('click',function(e) {
        const el = e.target;
        if (el.classList.contains('zera')) {
            relogio.classList.remove('pausado');
            clearInterval(timer)
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarRelogio();
            }
        if (el.classList.contains('pausar')) {
            relogio.classList.add('pausado');
            clearInterval(timer);
              }
    });
    
}

relogio();

