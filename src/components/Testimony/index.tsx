import { testimonies } from "@services/mock";
import SectionWrapper from "@components/SectionWrapper";
import ListWrapper from "@components/ListWrapper";
import Card from "@components/Card";

export default function Testimony() {
  return (
    <SectionWrapper id="testimonies">
      <h3>What they say about us?</h3>
      <ListWrapper>
        {testimonies.map((item, index) => (
          <Card key={index}>
            <img
              src={item.imgUrl}
              alt={item.name}
              style={{
                width: "65px",
                borderRadius: "50%",
                marginBottom: "16px",
              }}
            />
            <h4>{item.name}</h4>
            <p>{"⭐".repeat(Math.round(item.star))}</p>
            <p className="text-center">{item.comment}</p>
          </Card>
        ))}
      </ListWrapper>
    </SectionWrapper>
  );
}
