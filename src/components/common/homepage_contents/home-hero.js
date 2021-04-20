//* image from @f7photo https://unsplash.com/photos/lhltMGdohc8
import React, { useState } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import ModalVideo from 'react-modal-video';
import { auth, provider } from '../../../data/firebase';
import './home_hero.scss';

export default function HomeHero() {
  const [userState, setUserState] = useState({
    user: null,
    isLoading: false,
    isSigningIn: false,
    error: null
  })


  const signIn = async () => {
    try {
      const credentials = await auth.signInWithPopup(provider);
      console.log("Signed in");
      console.log(credentials);

      const {displayName, uid} = credentials.user;
      console.log(`Welcome ${displayName} ${uid}`);
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("signed out");
    } catch (error) {
      console.error(error);
    }
  };

  let contents;
  if (userState.isSignedIn) {
    constents = (
      <>
      <button type="button" className="--signup" onClick={signOut}>
        {userState.isLoading ? "Signing Out..." : "Sign Out"}
      </button>
      </>
    )
  } else { 
    constents = (
      <>
      <button type="button" className="--signup" onClick={signIn}>
        Sign In
      </button>
      </>
    )
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
              <p className="--blurb">
                Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
                nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
                animal molestiae te. Ex duo eripuit mentitum.
              </p>
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
