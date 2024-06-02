import React from "react";
import withFadeIn from "@functional/withFadeIn";
import Button from "@ui/Button";

function Biography() {
  const biographyButtons: {
    type: "main";
    content: string;
    onClick?: () => void;
  }[] = [
    {
      type: "main",
      content: "LinkedIn Profile",
      onClick: () =>
        window.open(
          "https://www.linkedin.com/in/zoriel-bucris-724177273/",
          "_blank"
        ),
    },
  ];

  return (
    <div
      data-testid="Biography"
      id="Biography"
      className="biography max-w-5xl py-20 h-full select-none border-b border-slate-700
        mx-6
        md:mx-20
        lg:mx-40
    "
    >
      <div
        className="biography-text flex 
            flex-col
            md:flex-row
            "
      >
        <div
          className="biography-text-col1 text-base
                md:mr-10
                "
        >
          <p className="text-xl">
            <strong className="text-2xl">Academic Journey</strong> <br />
            Completing my diploma was a pivotal milestone in my journey. As an
            <em> FullStack developer </em> I believe that for creating
            meaningful solution, that can stand for a long time, you have to
            hold both tools: technological thinking and understanding social
            human behavior. <br />
          </p>

          <div className="text-base my-4">
            {biographyButtons.map((button, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <span className="divider mx-1 opacity-50 select-none">/</span>
                )}
                <Button
                  type={button.type}
                  content={button.content}
                  onClick={button.onClick}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withFadeIn(Biography);
// export default Biography;
