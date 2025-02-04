import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { Box} from '@chakra-ui/react';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <Box p={4}>
      <ReactQuill value={content} onChange={setContent} modules={modules} />
    </Box>
  );
};

export default RichTextEditor;
