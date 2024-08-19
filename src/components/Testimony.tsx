import { useEffect, useState } from "react";

import { Testimony as TestimonyInterface } from "@utils/types";
import instance from "@services/instance";
import SectionWrapper from "@components/SectionWrapper";
import ListWrapper from "@components/ListWrapper";
import Card from "@components/Card";

export default function Testimony() {
  const [testimonies, setTestimonies] = useState<TestimonyInterface[]>([]);
  const getTestimonies = async () => {
    try {
      const { data } = await instance.get("/api/testimony?limit=5");
      setTestimonies(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTestimonies();
  }, []);

  return (
    <SectionWrapper id="testimonies">
      <h3>What they say about us?</h3>
      <ListWrapper>
        {testimonies.map((item, index) => (
          <Card key={index}>
            <img className="avatar" src={item.imgUrl} alt={item.name} />
            <div className="flex-1 flex flex-col items-center justify-start gap-2">
              <h4>{item.name}</h4>
              <p>{"⭐".repeat(Math.round(item.star))}</p>
              <p className="text-center">{item.comment}</p>
            </div>
          </Card>
        ))}
      </ListWrapper>
    </SectionWrapper>
  );
}
