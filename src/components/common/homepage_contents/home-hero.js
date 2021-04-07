//* image from @f7photo https://unsplash.com/photos/lhltMGdohc8
import React from 'react';
// import ModalVideo from 'react-modal-video';
// import { FaPlayCircle } from 'react-icons/fa';
import './home_hero.scss';

export default function HomeHero() {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <section>
      <div className="hero__main">
        <div className="hero__wrapper">
          <div className="left__side">
            {/* <button type="button" onClick={() => setOpenModal(true)}> */}
            <img
              src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1295&q=80"
              className="hero__image"
              alt="jar with coins - piggy bank"
              width="635px"
              height="512px"
            />
            {/* <FaPlayCircle className="play__icon" /> */}
            {/* </button> */}
          </div>
          <div className="right__side">
            <div>
              <p className="--about">About us</p>
              <h1 className="--header">
                Customized Personal Financial and Money Management
              </h1>
              <p className="--blurb">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </p>
              <button type="button" className="--signup">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <ModalVideo
        channel="youtube"
        controls={false}
        showinfo={false}
        autoplay={true}
        isOpen={openModal}
        videoId="MJy5H1cC0jw"
        onClose={() => setOpenModal(false)}
      /> */}
    </section>
  );
}
