import SectionWrapper from "@components/SectionWrapper";

export default function NotFound() {
  return (
    <main>
      <SectionWrapper id="not-found">
        <div className="p-6 text-center">
          <h1 className="not-found-title text-gray-500">404</h1>
          <p className="text-gray-900 not-found-description">
            The page you requested could not be found
          </p>
        </div>
      </SectionWrapper>
    </main>
  );
}
