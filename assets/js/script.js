const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme'); 


const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');


const changeActiveItem = () =>{
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');

        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    
    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        const h5Element = chat.querySelector('h5');
        if (h5Element && h5Element.textContent) {
            let name = h5Element.textContent.toLowerCase();
            if (name.includes(val)) {
                chat.style.display = 'flex';
            } else {
                chat.style.display = 'none';
            }
        }
    });
};

messageSearch.addEventListener('keyup', searchMessage);



messagesNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none'; 
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000); 
})


const openThemeModal = () => {
    themeModal.style.display = 'grid';
} 

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    } 
}

themeModal.addEventListener('click', closeThemeModal)

theme.addEventListener('click', openThemeModal);

const removeSizeSelector = () =>{
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
    
    size.addEventListener('click', () =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px'
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');

        } else  if(size.classList.contains('font-size-2')){
            fontSize = '13px'
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');

        } else if (size.classList.contains('font-size-3')){
            fontSize = '16px'
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');

        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');

        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        } 
    
        document.querySelector('html').style.fontSize = fontSize;
    })
})

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () =>{
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        } 
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
});

document.addEventListener('DOMContentLoaded', () => {
    const themeOptions = document.querySelectorAll('.choose-bg > div');

    
    const changeTheme = (lightness, darkLightness, whiteLightness) => {
        const root = document.documentElement;
        root.style.setProperty('--light-color-lightness', lightness);
        root.style.setProperty('--dark-color-lightness', darkLightness);
        root.style.setProperty('--white-color-lightness', whiteLightness);
    };

    
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            
            themeOptions.forEach(opt => opt.classList.remove('active'));

            
            option.classList.add('active');

            
            if (option.classList.contains('bg-1')) {
               
                changeTheme('95%', '17%', '100%');
            } else if (option.classList.contains('bg-2')) {
               
                changeTheme('15%', '95%', '20%');
            } else if (option.classList.contains('bg-3')) {
               
                changeTheme('0%', '95%', '10%');
            }
        });
    });
});



