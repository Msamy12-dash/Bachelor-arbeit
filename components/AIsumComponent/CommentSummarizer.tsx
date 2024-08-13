import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card'; // Import Card component from your UI library
import { requestResponseForSum } from '@/Prompting/SumFunction';


interface Comment {
    key: number;
    name: string;
    content: string;
    date: string;
    upvotes: number;
    isTextSpecific: boolean;
    shortenedSelectedText: string;
    index: number;
    length: number;
    history: string[];
    replies: Comment[];
    parentKey: number | null;
    canReply: boolean;
  }

export default function CommentSummarizer({
    comments,
    selectedModel
}: Readonly<{
    comments: Comment[];
    selectedModel: string;
}>) {
    const [summarizedContent, setSummarizedContent] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSummarizeClick = async () => {
        
        setError(null);
        
        try {
            const response = await requestResponseForSum(selectedModel, comments);
            console.log('Response from requestResponseForSum:', response);

            if (typeof response === 'string') {
                setSummarizedContent(response);
            } else if (response && typeof response === 'object') {
                // Handle if response is an object
                setSummarizedContent(JSON.stringify(response));
            } else {
                setError('Unexpected response format.');
            }
        } catch (err) {
            setError('Failed to fetch summary.');
        }
    };

    return (
        <div>
            <Button onClick={handleSummarizeClick} variant="contained" color="primary">
                Summarize Comments
            </Button>

            {error && (
                <Card style={{ padding: '10px', fontSize: '0.8rem', color: 'red' }}>
                    <p><strong>Error:</strong> {error}</p>
                </Card>
            )}

            {summarizedContent && (
                <Card style={{ padding: '10px', fontSize: '0.8rem' }}>
                    <p><strong>Summarization Content</strong></p>
                    <p>{summarizedContent}</p>
                </Card>
            )}
        </div>
    );
}
