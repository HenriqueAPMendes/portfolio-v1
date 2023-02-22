const data = {
    "pt": {
        home: "Início",
        aboutMe: "Sobre Mim",
        projects: "Projetos",
        contact: "Contato",
        nav: '<li><a href="#home">Início</a></li><li><a href="#about-me">Sobre mim<a></li><li><a href="#projects">Projetos</a></li><li><a href="#contact">Contato</a></li> ',
        home: "<p>Olá, sou o Henrique.</p> <p> Sou desenvolvedor e atualmente trabalho com as seguintes tecnologias: </p>",
        about: "<p>Cursei meu ensino Fundamental e Médio no Colégio da Polícia Militar do Paraná (CPMPR), em Curitiba, Brasil. </p><p>Atualmente cursando Engenharia de Computação na Universidade Tecnológica Federal do Paraná (UTFPR).</p><p> Sempre fui apaixonado por tecnologia e aprender a construir coisas.</p>",
        curriculum: "Baixe meu currículo em PDF",
        submit: "Enviar",
        placeholders: [
            "Seu nome",
            "Seu e-mail",
            "Assunto",
            "Mensagem"
        ],
        readMore: "Saiba mais",
        sourceCode: "Código fonte"
    },
    "en": {
        home: "Home",
        aboutMe: "About me",
        projects: "Projects",
        contact: "Contact",
        nav: '<li><a href="#home">Home</a></li><li><a href="#about-me">About me<a></li><li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li>',

        home: "<p>Hello, I'm Henrique.</p> <p>I'm a software developer currently working with these technologies: </p>",
        about: " <p>I attended elementary and high school at Colégio da Polícia Militar do Paraná (CPMPR), in Curitiba, Brazil. </p> <p> Nowadays, I'm studying Computer Engineering at Universidade Tecnológica Federal do Paraná (UTFPR). </p><p> I've always been in love with technology and learning to build things. </p>",
        curriculum: "Download my CV",
        submit: "Submit",
        placeholders: [
            "Your name",
            "Your e-mail",
            "Subject",
            "Message"
        ],
        readMore: "Read more",
        sourceCode: "Source code"
    }
};

const switcher = document.querySelector('.switcher');
const homeText = document.querySelector('.home-text');
const aboutMeText = document.querySelector('.about-me-text');
const cvText = document.querySelector('.download-cv a');
const nav = document.querySelector('nav ul');
const readMoreBtns = document.querySelectorAll('.saiba-mais');
const sourceCodeBtns = document.querySelectorAll('.card button a');
const aboutMeTitle = document.querySelector('#about-me h2');
const projectsTitle = document.querySelector('#projects h2');
const contactTitle = document.querySelector('#contact h2');
const placeholders = document.querySelectorAll('.input-box .input ~ span');
const submitBtn = document.querySelector('form button');

export function listenSwitch() {
    switcher.addEventListener('click', () => {
        const lang = switcher.checked ? "pt" : "en";

        homeText.innerHTML = data[lang].home;
        aboutMeText.innerHTML = data[lang].about;

        aboutMeTitle.innerText = data[lang].aboutMe.toUpperCase();
        projectsTitle.innerText = data[lang].projects.toUpperCase();
        contactTitle.innerText = data[lang].contact.toUpperCase();

        cvText.innerHTML = data[lang].curriculum;
        nav.innerHTML = data[lang].nav;
        readMoreBtns.forEach(el => {
            el.innerHTML = data[lang].readMore;
        });
        sourceCodeBtns.forEach(el => {
            el.innerHTML = data[lang].sourceCode;
        });
        placeholders.forEach((el, i) => {
            el.innerHTML = data[lang].placeholders[i];
        });
        submitBtn.innerHTML = data[lang].submit;
    });
}