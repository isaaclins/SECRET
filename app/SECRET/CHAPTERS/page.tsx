"use client";
import CustomFooter from "@/components/custom/customFooter";
import CustomHeader from "@/components/custom/customHeader";
import CustomScrollBar from "@/components/custom/customScrollBar";

export default function Chapterssite() {
  return (
    <div className="container mx-auto">
      <CustomScrollBar></CustomScrollBar>
      <CustomHeader main={true} parents={["SECRET"]} child="CHAPTERS" />
      <div className="body">
        <div className="mt-4">
          <h1 className="text-4xl flex justify-center items-start">
            Chapters
          </h1>
          <div className="mt-2 p-4 border rounded-md shadow-md">
            <p className="text-lg text-center"></p>
            <h2 className="text-2xl font-bold">What is this about?</h2>
            <hr className="my-4" />
            <p>
              This is not just a story about physical recovery; it&apos;s a
              journey through the darkest corners of the human psyche, a battle
              against the demons of despair and loneliness. It&apos;s about
              finding light in the darkest of places, and finding strength in
              the most unlikely of places.
            </p>
            <hr className="my-4" />
            <a href="CHAPTERS/">CHAPTERS:</a>
          </div>
        </div>
      </div>
      <CustomFooter Lastpage="/SECRET" Nextpage="/example3" Feedback={true} />
    </div>
  );
}
