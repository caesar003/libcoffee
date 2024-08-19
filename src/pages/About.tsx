import SectionWrapper from "@components/SectionWrapper";
import aboutSections from "@constants/about";

export default function About() {
  return (
    <main>
      <SectionWrapper id="header">
        <h2 className="m-4">About Us</h2>
      </SectionWrapper>
      {aboutSections.map((story, idx) => {
        const isEven: boolean = idx % 2 === 0;
        return (
          <SectionWrapper key={idx} id={`about-${story.title}`}>
            <div className="testimony-segment">
              <div
                className="thumbnail-wrapper"
                style={{ order: isEven ? 1 : 2 }}
              >
                <img
                  className="thumbnail-image"
                  src={`/images/${story?.imgUrl}`}
                  alt={story.title}
                />
              </div>

              <div className="story-wrapper" style={{ order: isEven ? 2 : 1 }}>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
              </div>
            </div>
          </SectionWrapper>
        );
      })}
    </main>
  );
}
