import ImageForSevenPage from "../images/sevenPage.png"
import FuncForRegForm from "./FuncForRegForm"

export default function SevenPage() {
    
    return (
        <>
        <div className="sevenPage">
            <div>
                <img src={ImageForSevenPage} alt="" />
            </div>
            <div className="sevenPageInfo">
                <span>Мы открыты с 10:00 до 02:00</span>
                <span>Работаем в будни и выходные дни с 10:00 до 02:00.<br />
                Бронируйте столики по телефону: <br />
                <a href="">+996 0220140866</a> <br />
                <a href="">+996 0220140866</a></span>
                <br />
                <span>С нетерпением ждем вас</span>
                <span>на улице Сухэ-Батора, 17 <br />
                      6-й мк-р, Октябрьский район, <br />
                      столица Бишкек,</span>
                      <a href="">inst</a>
                      <a href="">2gis</a>
            </div>
        </div>
        <br />
            <br />
            <FuncForRegForm/>
        </>
    )

};
