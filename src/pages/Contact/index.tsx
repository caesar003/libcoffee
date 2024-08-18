import SectionWrapper from "@components/SectionWrapper";
import "./style.css";

export default function Contact() {
  return (
    <main>
      <SectionWrapper id="contact">
        <h3>We&apos;re thrilled to hear what you&apos;re about to say</h3>

        <form>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-gray-800" htmlFor="name">
                Name<sup>*</sup>:
              </label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-800" htmlFor="email">
                Email<sup>*</sup>:
              </label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-gray-800" htmlFor="message">
                Message<sup>*</sup>:
              </label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <input type="submit" value="Send Message" />
          </div>
        </form>
      </SectionWrapper>
    </main>
  );
}
