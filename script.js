let buttons = document.querySelectorAll('.tab-links button');
let content = document.querySelectorAll('.tab-content div');

for(let btn of buttons){
    btn.addEventListener('click',function(){
        let active = document.querySelector('.active');
        this.classList.add('active');
        active.classList.remove('active');

        let index = this.getAttribute('data-index');

        for(let div of content){
            if(div.getAttribute('onur') === index){
                div.classList.remove('d-none');
            }else{
                div.classList.add('d-none');
            }
        }
    })
}