import logoFooter from "../images/footerLogo.png"

export default function EightPage() {


    return(
        <>
        <footer>
            <div className="boxFooter">
                <img src={logoFooter} alt="" />
            </div>
            <div className="boxFooter">
            <h3>/ Адрес:</h3>
            <ul>
                <li>карта 2гис</li>
                <li>Карта Google</li>
                <li>Доставка</li>
            </ul>
            </div>
            <div className="boxFooter">
            <h3>/ Позвоните нам:</h3>
            <ul>
                <li>+996 501 06 55 05</li>
                <li>+996 501 06 55 05</li>
                <li>+996 501 06 55 05</li>
            </ul>
            </div>
            <div className="boxFooter">
            <h3>/ Пишите нам:</h3>
            <ul>
                <li>боно2gmail.com</li>
                <li>боно2gmail.com</li>
                <li>боно2gmail.com</li>
            </ul>
            </div>
            <div className="boxFooter">
            <h3>/ Навигации по <br /> страницам:</h3>
            <ul>
                <li>Главный экран</li>
                <li>О нас</li>
                <li>Меню</li>
                <li>Контакты</li>
                <li>Бронь столика</li>
            </ul>
            </div>
            <br />
            <br />
            <hr />
        </footer>
        <span>© 2024 год, Bono bar . Все права защищены. </span>
        </>
    )

};
