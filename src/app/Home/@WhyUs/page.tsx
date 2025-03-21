"use client";
import YoutubePlayer from "@/components/YoutubePlayer";
import { useState } from "react";
import Select from "react-select";
const languageOptions = [
  { value: "hindi", label: "Hindi" },
  { value: "english", label: "English" },
];

export default function WhyUs() {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  return (
    <div className="flex flex-col justify-center px-[5vw] my-4">
      <h1 className="section-header mb-4">Why Choose Us?</h1>
      <div>
        <p className="mx-auto w-3/5 text-center">
          Because the right choice can make you happier
        </p>
        <div className="flex gap-4 items-center justify-center my-4">
          <p className="font-bold">
            Select your preferred language for our introduction videos:{" "}
          </p>
          <Select
            isSearchable={false}
            options={languageOptions}
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e ?? languageOptions[0])}
          />
        </div>
        <div>
          <div className="flex justify-center mt-4 mb-8 gap-4">
            {selectedLanguage?.value === "hindi" ? (
              <>
                <YoutubePlayer videoUrl="https://youtu.be/xKY-1Z9S_50?si=QEBtWkhwBj0B9BJ6" />
                <YoutubePlayer videoUrl="https://youtu.be/xKY-1Z9S_50?si=QEBtWkhwBj0B9BJ6" />
                <YoutubePlayer videoUrl="https://youtu.be/xKY-1Z9S_50?si=QEBtWkhwBj0B9BJ6" />
                <YoutubePlayer videoUrl="https://youtu.be/xKY-1Z9S_50?si=QEBtWkhwBj0B9BJ6" />
              </>
            ) : (
              <>
                <YoutubePlayer videoUrl="https://youtu.be/TCHaV8THnyE?si=oAsY9iASZuiUFo0h" />
                <YoutubePlayer videoUrl="https://youtu.be/TCHaV8THnyE?si=oAsY9iASZuiUFo0h" />
                <YoutubePlayer videoUrl="https://youtu.be/TCHaV8THnyE?si=oAsY9iASZuiUFo0h" />
                <YoutubePlayer videoUrl="https://youtu.be/TCHaV8THnyE?si=oAsY9iASZuiUFo0h" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
