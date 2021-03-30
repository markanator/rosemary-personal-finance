import React from 'react';

export default function HomeHero() {
  return (
    <section>
      <div className="hero__main">
        <div className="left__side">
          <img
            src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1295&q=80"
            alt="placeholder"
            width="635px"
            height="512px"
          />
        </div>
        <div className="right__side">
          <div>
            <p>About us</p>
            <h1>
              Customized Personal <br />
              Financial and Money
              <br />
              Management
            </h1>
            <p>
              Et has minim elitr intellegat. Mea aeterno eleifend antiopam ad,
              nam no suscipit quaerendum. At nam minimum ponderum. Est audiam
              animal molestiae te. Ex duo eripuit mentitum.
            </p>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
}
