import { useState } from 'react';
import { Header } from '../components';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = () => {

  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
       <Header category="App" title="Editor" />
      <ReactQuill 
        value={editorHtml}
        onChange={handleEditorChange}
        modules={{ toolbar: true }} // Enable the toolbar for formatting option
      />
    </div>
  );
};

export default Editor;







