const lang = {
    en: {
        mainTitle: 'We build universes',
        mainText: 'We are a studio that creates a concept from scratch in a team of pros',
    },
    ru: {
        mainTitle: 'Мы строим вселенные',
        mainText: 'Мы - студия, которая создает концепцию с нуля в команде профессионалов',
    },
};

function chooseLang(lang) {
    localStorage.setItem('lang', lang);
    window.location.reload();
}

const words = () => {
    if (localStorage.getItem('lang') === 'en') return lang.en;
    if (localStorage.getItem('lang') === 'ru') return lang.ru;
};

export default words;
