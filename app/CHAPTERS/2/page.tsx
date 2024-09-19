"use client";
import CustomFooter from "@/components/custom/customFooter";
import CustomHeader from "@/components/custom/customHeader";
import CustomScrollBar from "@/components/custom/customScrollBar";

export default function Templatesite() {
  return (
    <div className="border sticky p-5 m-1">
      <div className="container mx-auto">
        <CustomScrollBar></CustomScrollBar>
        <CustomHeader
          main={true}
          parents={["SECRET", "CHAPTERS"]}
          child="2"
        />
        <div className="body">
          <div className="mt-4">
            <h1 className="text-4xl flex justify-center items-start">
              TEMPLATE
            </h1>
            <div className="mt-2 p-4 border rounded-md shadow-md">
              <p className="text-lg text-center"></p>
              <h2 className="text-2xl font-bold">HTML Features</h2>
              <p>
                This is an example of <strong>strong text</strong> and
                <em>italic text</em>.
                to other pages.
              </p>
              <div className="REMOVEME">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
        <CustomFooter
          Lastpage="/example1"
          Nextpage="/example3"
          Feedback={true}
        />
      </div>
    </div>
  );
}
