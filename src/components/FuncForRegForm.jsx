import { useState } from "react";

export default function FuncForRegForm() {

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [stayTime, setStayTime] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [guestsCount, setGuestsCount] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {

    if (fullName === "" || phoneNumber === "" || stayTime === "" || bookingTime === "" || guestsCount === "") {
        alert("данные не корректны")
    }
    if(phoneNumber.length !== 10){
        alert("не корректный номер")
    }

    event.preventDefault();

    console.log('Form submitted:', { fullName, phoneNumber, stayTime, bookingTime, guestsCount, comment });
   
    setFullName('');
    setPhoneNumber('');
    setStayTime('');
    setBookingTime('');
    setGuestsCount('');
    setComment('');
  };

  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <label>
        ФИО:
        <br/>
        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </label>
      <label>
        Номер телефона:
        <br/>
        <input type="tel" placeholder="0 (555) 555 555" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <label>
        Время нахождения:
        <br/>
        <input type="text" placeholder="2 часа" value={stayTime} onChange={(e) => setStayTime(e.target.value)} />
      </label>
      <label>
        Время бронирования:
        <br/>
        <input type="text" placeholder="14:00" value={bookingTime} onChange={(e) => setBookingTime(e.target.value)} />
      </label>
      <label>
        Количество гостей:
        <br/>
        <input type="number" value={guestsCount} onChange={(e) => setGuestsCount(e.target.value)} />
      </label>
      <label>
        Комментарий:
        <br/>
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <br/>
      <button type="submit">Забронировать стол</button>
    </form>
    </div>
  );

};
