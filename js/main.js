// change navbar scroll in nav

window.addEventListener('scroll' ,() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY >50)
})

// show question answer when clicked

const faqs = document.querySelectorAll('.faqs_article');
faqs.forEach(faqs_article =>{
    faqs_article.addEventListener('click', () =>{
        faqs_article.classList.toggle('faqs_question_answer_hidden');
    const icon = faqs_article.querySelector('.faqs_icons i');
    // change symbol when click in question
    if(icon.className === 'fa-solid fa-plus') {
        icon.className = "fa-solid fa-minus"
    } else{
        icon.className = "fa-solid fa-plus";
    }
    })
})

// show menu bars list when clicked

const menu = document.querySelector(".ul__menu");
const menuBtn = document.querySelector(".menu-btn");
const menuClose = document.querySelector(".menu-close");

menuBtn.addEventListener('click', () =>{
    menu.style.display = "flex";
    menuClose.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// show close bar list when clicked


const CloseNav = () =>{
    menu.style.display = "none";
    menuClose.style.display = "none";
    menuBtn.style.display = "inline-block";
}

menuClose.addEventListener('click', CloseNav)