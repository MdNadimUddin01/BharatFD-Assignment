import React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import { CKEditor, useCKEditorCloud } from "@ckeditor/ckeditor5-react";

const LICENSE_KEY = import.meta.env.VITE_LICENSE_KEY;

function Editor({answer, setAnswer}) {
  const editorContainerRef = useRef(null);
  const editorRef = useRef(null);
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
      Essentials,
      Bold,
      Italic,
      Underline,
      Link,
      Paragraph,
      Heading,
      GeneralHtmlSupport,
      SourceEditing,
      Table,
      TableToolbar,
      TableProperties,
      TableCellProperties,
      TableColumnResize,
      Indent,
      IndentBlock,
      BlockQuote,
      SpecialCharacters,
      HtmlEmbed,
    } = cloud.CKEditor;

    return {
      ClassicEditor,
      editorConfig: {
        toolbar: {
          items: [
            'sourceEditing',
            '|',
            'heading',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'link',
            'specialCharacters',
            'insertTable',
            'blockQuote',
            'htmlEmbed',
            '|',
            'outdent',
            'indent'
          ],
          shouldNotGroupWhenFull: true,
        },
        plugins: [
          Essentials,
          Bold,
          Italic,
          Underline,
          Link,
          Paragraph,
          Heading,
          GeneralHtmlSupport,
          SourceEditing,
          Table,
          TableToolbar,
          TableProperties,
          TableCellProperties,
          TableColumnResize,
          Indent,
          IndentBlock,
          BlockQuote,
          SpecialCharacters,
          HtmlEmbed,
        ],
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph',
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2',
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3',
            }
          ],
        },
        htmlSupport: {
          allow: [
            {
              name: /.*/,
              attributes: true,
              classes: true,
              styles: true
            }
          ],
          disallow: []
        },
        autoParagraph: false,
        removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload'],
        licenseKey: LICENSE_KEY,
        placeholder: 'Start typing your content here...',
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells',
            'tableProperties',
            'tableCellProperties'
          ],
        },
      },
    };
  }, [cloud, isLayoutReady]);

  return (
    <div className="w-full my-auto">
      <div className="[&_.ck.ck-editor]:max-w-full [&_.ck.ck-editor__main>.ck-editor__editable]:min-h-[150px] [&_.ck.ck-editor__main>.ck-editor__editable]:border [&_.ck.ck-editor__main>.ck-editor__editable]:border-gray-200 [&_.ck.ck-editor__main>.ck-editor__editable]:shadow-sm [&_.ck.ck-editor__main>.ck-editor__editable]:bg-white [&_.ck.ck-editor__main>.ck-editor__editable:focus]:border-blue-500 [&_.ck.ck-editor__main>.ck-editor__editable:focus]:ring-1 [&_.ck.ck-editor__main>.ck-editor__editable:focus]:ring-blue-500 [&_.ck.ck-toolbar]:border [&_.ck.ck-toolbar]:border-gray-200 [&_.ck.ck-toolbar]:border-b-0 [&_.ck.ck-toolbar]:rounded-t-lg [&_.ck.ck-toolbar]:bg-white [&_.ck.ck-toolbar]:p-2 [&_.ck.ck-editor__main>.ck-editor__editable]:rounded-b-lg [&_.ck.ck-editor__main>.ck-editor__editable]:p-4 [&_.ck.ck-toolbar__items]:flex-wrap [&_.ck.ck-toolbar>.ck-toolbar__items>*]:m-1">
        <div ref={editorRef}>
          {ClassicEditor && editorConfig && (
            <CKEditor
              initialData={answer}
              editor={ClassicEditor}
              config={editorConfig}
              onChange={(_, editor) => {
                setAnswer(editor.getData());
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Editor;
