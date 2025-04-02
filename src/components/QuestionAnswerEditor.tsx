import { useState, useEffect } from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";
import 'react-markdown-editor-lite/lib/index.css';
import MarkdownView from './MarkdownView';

// Custom theme styles that properly integrate with your design system
const editorThemeStyles = `
  .rme {
    --color-border: hsl(var(--input));
    --color-normal: hsl(var(--foreground));
    --color-primary: hsl(var(--primary));
    --color-secondary: hsl(var(--secondary));
    --color-active: hsl(var(--primary));
  }
  
  .rme-header {
    background: hsl(var(--muted)) !important;
    border-bottom: 1px solid hsl(var(--input)) !important;
  }
  
  .rme-toolbar {
    background: hsl(var(--muted)) !important;
  }
  
  .rme-toolbar button {
    color: hsl(var(--muted-foreground)) !important;
  }
  
  .rme-toolbar button:hover {
    background: hsl(var(--accent)) !important;
    color: hsl(var(--accent-foreground)) !important;
  }
  
  .rme-content .section-title {
    color: hsl(var(--foreground)) !important;
  }
  
  .rme-content .custom-html-style {
    color: hsl(var(--foreground)) !important;
    background: hsl(var(--accent)) !important;
  }
   .rme-content .custom-html-style code, .custom-html-style pre{
    background: hsl(var(--primary)) !important;
   }
`;

interface EnhancedQAEditorProps {
    initialQuestion?: string;
    initialAnswer?: string;
    onSave?: (question: string, answer: string) => void;
    onCancel?: () => void;
}

const mdParser = new MarkdownIt();

const EnhancedQAEditor: React.FC<EnhancedQAEditorProps> = ({
    initialQuestion = '',
    initialAnswer = '',
    onSave,
    onCancel,
}) => {
    const [question, setQuestion] = useState<string>(initialQuestion);
    const [answer, setAnswer] = useState<string>(initialAnswer || '');
    const { theme } = useTheme();

    // Inject our custom theme styles
    useEffect(() => {
        const styleElement = document.createElement('style');
        styleElement.innerHTML = editorThemeStyles;
        document.head.appendChild(styleElement);

        // Proper cleanup function that returns void
        return () => {
            document.head.removeChild(styleElement);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (question.trim() && answer.trim()) {
            if (onSave) {
                onSave(question, answer);
            }
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="mb-4">
                    <label htmlFor="question" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Question
                    </label>
                    <input
                        type="text"
                        id="question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        placeholder="Enter your question"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Answer (Markdown)
                    </label>
                    <div className={`
            border rounded-md overflow-hidden
            ${theme === 'dark' ? 'border-gray-600' : 'border-gray-300'}
          `}>
                        <MdEditor
                            value={answer}
                            style={{
                                height: '300px',
                                backgroundColor: 'hsl(var(--background))',
                                color: 'hsl(var(--foreground))'
                            }}
                            renderHTML={(text) => mdParser.render(text)}
                            onChange={({ text }) => setAnswer(text)}
                            config={{
                                view: {
                                    menu: true,
                                    md: true,
                                    html: true
                                },
                                theme: theme === 'dark' ? 'dark' : 'light'
                            }}
                            className={theme === 'dark' ? 'dark-editor' : ''}
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-2">
                    {onCancel && (
                        <Button
                            type="button"
                            variant="outline"
                            onClick={onCancel}
                        >
                            Cancel
                        </Button>
                    )}
                    <Button
                        type="submit"
                        variant="default"
                    >
                        Save Changes
                    </Button>
                </div>
            </form>

            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Markdown Preview</h2>
                <div className={`
          p-4 border rounded-md min-h-40
          ${theme === 'dark'
                        ? 'bg-background border-border'
                        : 'bg-gray-50 border-gray-200'
                    }`
                }>
                    {answer ? <MarkdownView content={answer} /> : <p className="text-gray-400 dark:text-gray-500">Markdown preview will appear here</p>}
                </div>
            </div>
        </div>
    );
};

export default EnhancedQAEditor;