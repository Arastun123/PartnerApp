import CarouselComp from '../Carousel/Carousel';
import './Partner.css';

function Partner() {
  const divStyle = { backgroundImage: "url(assests/img/mainbg.jpg)" };
  return (
    <div className="partners">
      <div className='header'>
        <div className="container">
          <nav className='d-flex'>
            <div><h3>Azersun</h3></div>
            <div className='menu'>
              <ul className=' d-flex'>
                <li> <a href='https://www.figma.com/file/MgiHkPM32arPX7ngjppqag/Untitled?type=design&node-id=88-1125&mode=design&t=K7H03cQdN2OpI8SA-0'> Мой кабинет </a> </li>
                <li> <a href='https://www.figma.com/file/MgiHkPM32arPX7ngjppqag/Untitled?type=design&node-id=88-1125&mode=design&t=K7H03cQdN2OpI8SA-0'> Подписки </a> </li>
                <li> <a href='https://www.figma.com/file/MgiHkPM32arPX7ngjppqag/Untitled?type=design&node-id=88-1125&mode=design&t=K7H03cQdN2OpI8SA-0'>Товары </a> </li>
                <li> <a href='https://www.figma.com/file/MgiHkPM32arPX7ngjppqag/Untitled?type=design&node-id=88-1125&mode=design&t=K7H03cQdN2OpI8SA-0'> Партнёры </a> </li>
                <li> <a href='https://www.figma.com/file/MgiHkPM32arPX7ngjppqag/Untitled?type=design&node-id=88-1125&mode=design&t=K7H03cQdN2OpI8SA-0'> Настройки </a> </li>
              </ul>
            </div>
            <div>
              <button className='btn'> bell </button>
              <button className='btn'>home</button>
            </div>
          </nav>
        </div>
      </div>
      <div className='imgBox' style={divStyle}>
        <div className="desc d-flex">
          <div className='img'>
            <img src="assests/img/circule.jpg" alt='' />
          </div>
          <div className='info d-flex'>
            <div>
              <p id='name'>Azersun</p>
              <p className='status'>В сети</p>
            </div>
            <div>
              <button>Fav</button>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='about'>
          <h2>Об Azersun</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
        </div>
        <div>
          <h5>Дополнительные данные</h5>
          <div className='data d-flex-desktop'>
            <p>4 года сотрудничества</p>
            <p>150 сотрудников</p>
            <p>120,000 успешных сделок</p>
            <p>Подтверждённый поставщик</p>
          </div>
          <div className='rating'>
            <ul className='d-flex'>
              <li>star</li>
              <li>star</li>
              <li>star</li>
              <li>star</li>
              <li>star</li>
            </ul>
            <div className='text'>
              <p> Рейтинг поставщика 4.5/5</p>
            </div>
          </div>
        </div>
        <div className='corusel'>
          <h5>Popular prodcuts</h5>
          <CarouselComp />
        </div>
        <div id='ceo'>
          <h2>CEO</h2>
          <div className='d-flex-desktop'>
            <img src="assests/img/ceo.jpg" alt='' />
            <div className='info'>
              <h4>Mr. Joshgun Agayev</h4>
              <div>
                <p> <span>Должность: </span> Менеджер</p>
                <p> <span> Город: </span> Баку</p>
              </div>
            </div>
            <div className='contact'>
              <h5>Контакты</h5>
              <div>
                <p> <a href='tel:+994551234567'>+994 55 123 45 67 </a>  г.,Баку</p>
                <p> <a href='tel:+994551234567'>+994 55 123 45 67 </a>  г.,Баку</p>
                <p> <a href='tel:+994551234567'>+994 55 123 45 67 </a>  г.,Хачмаз</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
