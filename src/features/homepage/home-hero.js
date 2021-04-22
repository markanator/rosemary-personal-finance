//* image from @f7photo https://unsplash.com/photos/lhltMGdohc8
import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import useUser from '../../hooks/use-user';
import './home_hero.scss';

export default function HomeHero() {
  const userState = useUser();

  let contents;
  if (userState.isSignedIn) {
    contents = (
      <>
        <button
          type="button"
          className="--signup"
          onClick={userState.signOut}
          disabled={userState.isLoading}
        >
          {useState.isLoading ? 'Signing Out...' : 'Sign Out'}
        </button>
      </>
    );
  } else {
    contents = (
      <>
        <button
          type="button"
          className="--signup"
          onClick={userState.signIn}
          disabled={useState.isLoading}
        >
          {useState.issLoading ? 'Signing In...' : 'Sign In'}
        </button>
      </>
    );
  }

  let contents2;
  if (userState.isSignedIn) {
    contents2 = (
      <p className="--blurb">
        Welcome! Please navigate to your dashboard or transactions page to start
        managing your finances.
      </p>
    );
  } else {
    contents2 = (
      <p className="--blurb">
        Please sign in or create a new account to start your personal financing.
      </p>
    );
  }

  if (userState.error) {
    contents2 = (
      <p className="--blurb__error">
        There was an error when trying to log in or sign up. Please try again.
      </p>
    );
  }

  const [openModal, setOpenModal] = useState(false);
  return (
    <section>
      <div className="hero__main">
        <div className="hero__wrapper">
          <div className="left__side">
            <button type="button" onClick={() => setOpenModal(true)}>
              <img
                src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1295&q=80"
                className="hero__image"
                alt="jar with coins - piggy bank"
                width="635px"
                height="512px"
              />
              <FaPlayCircle className="play__icon" />
            </button>
          </div>
          <div className="right__side">
            <div>
              <p className="--about">About us</p>
              <h1 className="--header">
                Customized Personal Financial and Money Management
              </h1>
              {contents2}
              {/* <p className="--blurb">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </p> */}
              {contents}
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        controls={false}
        showinfo={false}
        autoplay={true}
        isOpen={openModal}
        videoId="MJy5H1cC0jw"
        onClose={() => setOpenModal(false)}
      />
    </section>
  );
}
