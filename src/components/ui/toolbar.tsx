import { type Editor } from '@tiptap/react';
import { Bold, Strikethrough, Italic, List, ListOrdered, Heading2 } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';

const Toolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) return null;

  return (
    <div className='rounded-md space-x-1 inline-flex'>
      <Toggle
        pressed={editor.isActive('heading')}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        size={'sm'}
      >
        <Heading2 className='w-4 h-4' />
      </Toggle>
      <Toggle
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
        size={'sm'}
      >
        <Bold className='w-4 h-4' />
      </Toggle>
      <Toggle
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
        size={'sm'}
      >
        <Italic className='w-4 h-4' />
      </Toggle>
      <Toggle
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        size={'sm'}
      >
        <Strikethrough className='w-4 h-4' />
      </Toggle>
      <Toggle
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        size={'sm'}
      >
        <ListOrdered className='w-4 h-4' />
      </Toggle>
      <Toggle
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
        size={'sm'}
      >
        <List className='w-4 h-4' />
      </Toggle>
    </div>
  );
};

export default Toolbar;
