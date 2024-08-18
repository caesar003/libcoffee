import SectionWrapper from "@components/SectionWrapper";

export default function About() {
  return (
    <main>
      <SectionWrapper id="about-us">
        <h3>Our story</h3>
        <div>
          <div className="flex gap-4">
            <div className="flex-1 p-4">
              <h4 className="m-1">How we started</h4>
              <p>
                Ipsum lobortis ipsum, eget facilisis ante nisi eget lectus. Sed
                a est. Aliquam nec felis eu sem euismod viverra. Suspendisse
                felis mi, dictum id, convallis ac, mattis non, nibh. Donec
                sagittis quam eu mauris. Phasellus et leo at quam dapibus
                pellentesque. In non lacus. Nullam tristique nunc ut arcu
                scelerisque aliquam. Nullam viverra magna vitae leo. Vestibulum
                in lacus sit amet lectus tempus aliquet. Duis cursus nisl ac
                orci. Donec non nisl. Mauris lacus sapien, congue a, facilisis
                at, egestas vel, quam. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae. Phasellus ipsum
                odio, suscipit nec, fringilla at.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/images/img_9336a867.jpg"
                style={{ maxWidth: "450px", borderRadius: "4px" }}
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <img
                src="/images/img_9336a867.jpg"
                style={{ maxWidth: "450px", borderRadius: "4px" }}
              />
            </div>
            <div className="flex-1">
              <h4>How we started</h4>
              <p>
                Ipsum lobortis ipsum, eget facilisis ante nisi eget lectus. Sed
                a est. Aliquam nec felis eu sem euismod viverra. Suspendisse
                felis mi, dictum id, convallis ac, mattis non, nibh. Donec
                sagittis quam eu mauris. Phasellus et leo at quam dapibus
                pellentesque. In non lacus. Nullam tristique nunc ut arcu
                scelerisque aliquam. Nullam viverra magna vitae leo. Vestibulum
                in lacus sit amet lectus tempus aliquet. Duis cursus nisl ac
                orci. Donec non nisl. Mauris lacus sapien, congue a, facilisis
                at, egestas vel, quam. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia Curae. Phasellus ipsum
                odio, suscipit nec, fringilla at.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
