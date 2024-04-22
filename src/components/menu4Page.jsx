import imgFood from "../images/1.png"

export default function MenuPage(){
    

    return (
        <div className="fourthPage">
            <h1>
            Меню
            </h1>
            <br/>
            <div className="boxsFood">
                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>
                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>
                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>
                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>

                <br />

                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>
                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>
                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>
                <div className="innerBox">
                    <div><img src={imgFood} alt="" /></div>
                    <span>Японская кухня</span>
                </div>
            </div>
        </div>
    )
}