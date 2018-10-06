"usestrict";

let tabList = document.querySelectorAll('.tabTitle');

for (let i = 0; i < tabList.length; i++){
    tabList[i].addEventListener('click', function(){
        document.querySelector('.tabTitle.active').classList.remove("active");

        let indexTitle = this.getAttribute("data-index");

        document.querySelector(`[data-index="${indexTitle}"]`).classList.add('active');

    });
}
