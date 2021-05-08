//window.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('DOMContentLoaded', function() {
  
    const tabs = document.querySelectorAll('.tabheader__items'), //ToWere(.)=class
          tabsContent = document.querySelectorAll('.tabcontent'), //  ""||' ?
          tabsParent = document.querySelectorAll('.tabheader__items');
     
          
          
    function hideTabContent() { 
        tabsContent.forEach(item => {
            item.style.display = 'none';/// Lets Hide Content
        });
    }  
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active'); /// LetsHideClickedBold
    });


    
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block'; /// Lets Show Content
        tabs[i].classList.add('tabheader__item_active')/// LetsSHOW_BOLD_ClickedBold

        
    }

    hideTabContent(); //Вызвать Запустить
    showTabContent(); //Вызвать Запустить

    // tabsParent.addEventListener('click', (event) => {
    //     const target = event.target;

    //     if (target && target.classList.contains('tabheader__items')) {
    //         tabs.forEach((item, i) => {
    //             if (target == item){
    //                 hideTabContent();  
    //                 showTabContent(i);  
    //             }
    //         });
    //     }

    // });

    tabsParent.addEventListener('click', function(event) {
		const target = event.target;
		if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
		}
	});
});
