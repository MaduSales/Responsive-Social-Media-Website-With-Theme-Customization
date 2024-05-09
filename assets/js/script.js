const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme'); //<- aba do tema


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
        // Ao clicar em um novo item, ele remove a classe "active" do item anteriormente selecionado e logo em seguida, atribui a classe "active" para o item novo
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';// a informação em vermelho ao lado do sino deverá sumir
        } // se o ID for diferente do selecionado, nada ocorrerá, porém se for igual, aparecerá o popup de notificação
    
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
    messagesNotification.querySelector('.notification-count').style.display = 'none'; // a informação em vermelho ao lado do envelope deverá sumir
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000); // selecionamos a caixa de mensagem para ficar com uma sombra roxa quando clicarmos em cima da aba, mas ele deverá sumir após 2 segundos com o setTimeOut
})


const openThemeModal = () => {
    themeModal.style.display = 'grid';
} // ^ serve para abrir a aba de temas

const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none'
    } // ^ serve para fechar a aba de temas ao clicar fora dela
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
        } // se o tamanho que selecionarmos conter "font-size-1", a fonte deverá mudar para 10px. E assim por diante.
    
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

    // Função para alterar o tema com base na opção selecionada
    const changeTheme = (lightness, darkLightness, whiteLightness) => {
        const root = document.documentElement;
        root.style.setProperty('--light-color-lightness', lightness);
        root.style.setProperty('--dark-color-lightness', darkLightness);
        root.style.setProperty('--white-color-lightness', whiteLightness);
    };

    // Adicionar event listener a cada opção de tema
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remover classe 'active' de todas as opções
            themeOptions.forEach(opt => opt.classList.remove('active'));

            // Adicionar classe 'active' à opção selecionada
            option.classList.add('active');

            // Determinar o tema com base na opção selecionada
            if (option.classList.contains('bg-1')) {
                // Tema Claro
                changeTheme('95%', '17%', '100%');
            } else if (option.classList.contains('bg-2')) {
                // Tema Dim
                changeTheme('15%', '95%', '20%');
            } else if (option.classList.contains('bg-3')) {
                // Tema Escuro
                changeTheme('0%', '95%', '10%');
            }
        });
    });
});



