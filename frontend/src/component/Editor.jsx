import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";

const LICENSE_KEY = import.meta.env.VITE_LICENSE_KEY;

function Editor({answer , setAnswer}) {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
  const editorWordCountRef = useRef(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);
  const cloud = useCKEditorCloud({ version: "44.1.0" });

  useEffect(() => {
    setIsLayoutReady(true);

    return () => setIsLayoutReady(false);
  }, []);

  const { ClassicEditor, editorConfig } = useMemo(() => {
    if (cloud.status !== "success" || !isLayoutReady) {
      return {};
    }

    const {
      ClassicEditor,
      Autosave,
      BalloonToolbar,
      BlockQuote,
      BlockToolbar,
      Bold,
      Essentials,
      FullPage,
      GeneralHtmlSupport,
      Heading,
      HtmlComment,
      HtmlEmbed,
      Indent,
      IndentBlock,
      Italic,
      Link,
      Paragraph,
      ShowBlocks,
      SourceEditing,
      SpecialCharacters,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableProperties,
      TableToolbar,
      TextPartLanguage,
      Title,
      Underline,
      WordCount,
    } = cloud.CKEditor;

    return {
      ClassicEditor,
      editorConfig: {
        toolbar: {
          items: [
            "sourceEditing",
            "showBlocks",
            "textPartLanguage",
            "|",
            "heading",
            "|",
            "bold",
            "italic",
            "underline",
            "|",
            "specialCharacters",
            "link",
            "insertTable",
            "blockQuote",
            "htmlEmbed",
            "|",
            "outdent",
            "indent",
          ],
          shouldNotGroupWhenFull: true,
        },
        plugins: [
          Autosave,
          BalloonToolbar,
          BlockQuote,
          BlockToolbar,
          Bold,
          Essentials,
          FullPage,
          GeneralHtmlSupport,
          Heading,
          HtmlComment,
          HtmlEmbed,
          Indent,
          IndentBlock,
          Italic,
          Link,
          Paragraph,
          ShowBlocks,
          SourceEditing,
          SpecialCharacters,
          Table,
          TableCaption,
          TableCellProperties,
          TableColumnResize,
          TableProperties,
          TableToolbar,
          TextPartLanguage,
          Title,
          Underline,
          WordCount,
        ],
        balloonToolbar: ["bold", "italic", "|", "link"],
        blockToolbar: [
          "bold",
          "italic",
          "|",
          "link",
          "insertTable",
          "|",
          "outdent",
          "indent",
        ],
        heading: {
          options: [
            {
              model: "paragraph",
              title: "Paragraph",
              class: "ck-heading_paragraph",
            },
            {
              model: "heading1",
              view: "h1",
              title: "Heading 1",
              class: "ck-heading_heading1",
            },
            {
              model: "heading2",
              view: "h2",
              title: "Heading 2",
              class: "ck-heading_heading2",
            },
            {
              model: "heading3",
              view: "h3",
              title: "Heading 3",
              class: "ck-heading_heading3",
            },
            {
              model: "heading4",
              view: "h4",
              title: "Heading 4",
              class: "ck-heading_heading4",
            },
            {
              model: "heading5",
              view: "h5",
              title: "Heading 5",
              class: "ck-heading_heading5",
            },
            {
              model: "heading6",
              view: "h6",
              title: "Heading 6",
              class: "ck-heading_heading6",
            },
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: /^.*$/,
              styles: true,
              attributes: true,
              classes: true,
            },
          ],
        },
        licenseKey: LICENSE_KEY,
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: "https://",
          decorators: {
            toggleDownloadable: {
              mode: "manual",
              label: "Downloadable",
              attributes: {
                download: "file",
              },
            },
          },
        },
        placeholder: "Type or paste your content here!",
        table: {
          contentToolbar: [
            "tableColumn",
            "tableRow",
            "mergeTableCells",
            "tableProperties",
            "tableCellProperties",
          ],
        },
      },
    };
  }, [cloud, isLayoutReady]);

  return (
    <div className="w-full my-auto">
      <div className="[&_.ck.ck-editor]:max-w-full [&_.ck.ck-editor__main>.ck-editor__editable]:min-h-[150px] [&_.ck.ck-editor__main>.ck-editor__editable]:border [&_.ck.ck-editor__main>.ck-editor__editable]:border-gray-200 [&_.ck.ck-editor__main>.ck-editor__editable]:shadow-sm [&_.ck.ck-editor__main>.ck-editor__editable]:bg-white [&_.ck.ck-editor__main>.ck-editor__editable:focus]:border-blue-500 [&_.ck.ck-editor__main>.ck-editor__editable:focus]:ring-1 [&_.ck.ck-editor__main>.ck-editor__editable:focus]:ring-blue-500 [&_.ck.ck-toolbar]:border [&_.ck.ck-toolbar]:border-gray-200 [&_.ck.ck-toolbar]:border-b-0 [&_.ck.ck-toolbar]:rounded-t-lg [&_.ck.ck-toolbar]:bg-white [&_.ck.ck-toolbar]:p-2 [&_.ck.ck-editor__main>.ck-editor__editable]:rounded-b-lg [&_.ck.ck-editor__main>.ck-editor__editable]:p-4 [&_.ck.ck-toolbar__items]:flex-wrap [&_.ck.ck-toolbar>.ck-toolbar__items>*]:m-1 sm:[&_.ck.ck-editor__main>.ck-editor__editable]:p-4">
        <div ref={editorRef}>
          {ClassicEditor && editorConfig && (
            <CKEditor

              initialData={answer}
              onAfterDestroy={() => {
                Array.from(editorWordCountRef.current.children).forEach(
                  (child) => child.remove()
                );
              }}
              editor={ClassicEditor}
              config={editorConfig}
              onChange={(EventInfo, Editor) => {
                // console.log("EventInfoName : ", EventInfo.name);
                // console.log("Data : ", Editor.getData());
                setAnswer(Editor.getData());
              }}
            />
          )}
        </div>
      </div>
      {/* <div
        className="editor_container__word-count"
        ref={editorWordCountRef}
      ></div> */}
    </div>
  );
}

export default Editor;
