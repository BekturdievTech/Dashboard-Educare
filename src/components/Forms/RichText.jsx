import { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import { RiErrorWarningFill } from "react-icons/ri";

export default function RichText({error}) {
  const [richtext, SetRichtext] = useState("");

  return (
    <div>
      <div className="font-semibold mb-1">RichText</div>
      <div id="etidor" className={`${error?.RichText && "FroalaError"} max-w-[975px] froalaContainer`}>
        <FroalaEditor
          model={richtext}
          onModelChange={(e) => SetRichtext(e)}
          config={{
            placeholderText: "Create Your Content Here!",
            charCounterCount: true,
          }}
          tag="textarea"
        />
      </div>
      <input type="hidden" name="RichText" value={richtext}/>
      <div className="flex justify-between items-center w-full">
        {error?.RichText && (
        <>
          <span className=" text-[14px] text-[#F45B69]">
            {error.RichText}
          </span>
          <RiErrorWarningFill size={26} color="#f45b69" className="" />
        </>
         )}
      </div>
    </div>
  );
}
