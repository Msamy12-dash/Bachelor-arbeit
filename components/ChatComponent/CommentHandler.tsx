import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import Quill from "react-quill";
import PromptList from "./PromptList";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

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

export default function CommentHandler({
  room,
  textSpecificComment,
  setRange,
  editor,
  
  promptList,
  setAIChanges
}: Readonly<{
  room: string;
  textSpecificComment: Comment | null;
  editor: Quill | null;
  setRange: Function;
  promptList: string[];
  setAIChanges: Function;
}>) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [showComments, setShowComments] = useState<boolean>(true);
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const fetchCurrentKey = async (): Promise<number> => {
    try {
      const response = await fetch('/api/get-key');
      if (!response.ok) {
        throw new Error('Failed to fetch key');
      }
      const data = await response.json();
      return data.currentKey;
    } catch (error) {
      console.error('Failed to fetch key:', error);
      return 0;
    }
  };
  
  const updateKey = async (newKey: number) => {
    try {
      const response = await fetch('/api/update-key', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentKey: newKey }),
      });      
      if (!response.ok) {
        throw new Error('Failed to update key');
      }
      const data = await response.json();
      console.log('Key updated successfully:', data);
    } catch (error) {
      console.error('Failed to update key:', error);
    }
  };

  const getNewKey = async (): Promise<number> => {
    const currentKey = await fetchCurrentKey();
    const newKey = currentKey + 1;
    await updateKey(newKey);
    return newKey;
  };

  // Function to save a new comment in MongoDB
  const saveComment = async (comment: Comment) => {
    try {
      const response = await fetch('/api/save-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });
      if (!response.ok) {
        throw new Error('Failed to save comment');
      }
      const data = await response.json();
      console.log('Comment saved successfully:', data);
    } catch (error) {
      console.error('Failed to save comment:', error);
    }
  };

  const addComment = async (comment: Comment) => {
    const newKey = await getNewKey();
    let canReply = true;

    // Check if it's a subsubcomment -> can't reply
    if (comment.parentKey !== null) {
      // Find the comment with the matching parentkey
      const parentKey = comment.parentKey;
      const parentComment = comments.find(comment => comment.key === parentKey);
      if (parentComment === undefined) {
        canReply = false;
      }
    }
    
    const newComment: Comment = {
      key: newKey,
      name: comment.name,
      content: comment.content,
      date: comment.date,
      upvotes: 0,
      isTextSpecific: comment.isTextSpecific,
      shortenedSelectedText: comment.shortenedSelectedText,
      index: comment.index,
      length: comment.length,
      history: [],
      replies: [],
      parentKey: comment.parentKey,
      canReply: canReply
    };

    // Save comment in Database
    saveComment(newComment);

    if (comment.parentKey === null) {
      // If parentkey is null, add the new comment as a root comment
      setComments(prevComments => [...prevComments, newComment]);
      // Save only main comments
    } else {
      const addReplyToComment = (commentsArray: Comment[], keyToFind: number, replyToAdd: Comment): Comment[] => {
        return commentsArray.map(comment => {
          if (comment.key === keyToFind) {
            // Add new comment as a reply to this comment
            return {
              ...comment,
              replies: [...comment.replies, replyToAdd],
            };
          } else if (comment.replies.length > 0) {
            // Recursively check in replies
            return {
              ...comment,
              replies: addReplyToComment(comment.replies, keyToFind, replyToAdd)
            };
          }
          return comment;
        });
      };
      const updatedComments = addReplyToComment(comments, comment.parentKey, newComment);
      setComments(updatedComments);
    } 
  };

  useEffect(() => {
    // Fetch comments from the API when the component mounts
    const fetchComments = async () => {
      try {
        const response = await fetch("/api/fetch-comments");
        if (!response.ok) {
          throw new Error("Failed to fetch comments");
        }
        const data = await response.json();
        setComments(data);
  
      } catch (error) {
  
      }
    };

    fetchComments();
  }, []);

  useEffect(() => {
    if (textSpecificComment != null) {
      addComment(textSpecificComment);
    }
  }, [textSpecificComment]);


  const incrementUpvote = async (IncrementComment: Comment) => {
    const updateUpvote = (comments: Comment[]): Comment[] => {
      return comments.map(comment => {
        if (comment.key === IncrementComment.key) {
          return {
            ...comment,
            upvotes: comment.upvotes + 1
          };
        } else if (comment.replies.length > 0) {
          return {
            ...comment,
            replies: updateUpvote(comment.replies)
          };
        }
        return comment;
      });
    };
    const updatedComments = updateUpvote(comments);
    setComments(updatedComments);

    try {
      // API call to update the comment in MongoDB
      const response = await fetch('/api/increment-comment', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment: IncrementComment }),
      });
      if (!response.ok) {
        throw new Error('Failed to update comment');
      }
      const data = await response.json();
      console.log('Comment updated successfully:', data);
    } catch (error) {
      console.error('Failed to update comment:', error);
    }
  };

  const deleteComment = async (DeleteComment: Comment) => {
    const removeComment = (comments: Comment[]): Comment[] => {
      return comments.reduce((acc, comment) => {
        if (comment.key === DeleteComment.key && comment.parentKey === DeleteComment.parentKey) {
          return acc;
        } else {
          const updatedReplies = comment.replies.length > 0 ? removeComment(comment.replies) : [];
          acc.push({
            ...comment,
            replies: updatedReplies
          });
          return acc;
        }
      }, [] as Comment[]);
    };
  
    const updatedComments = removeComment(comments);
    setComments(updatedComments);
    
    try {
      // API call to delete the comment in MongoDB
      const response = await fetch('/api/delete-comment', {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: DeleteComment }),
      });
      if (!response.ok) {
        throw new Error("Failed to delete comment");
      }
      const data = await response.json();
      console.log("Comment deleted successfully:", data);
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const editComment = async (EditComment: Comment, newContent: string) => {
    const updateComment = (comments: Comment[]): Comment[] => {
      return comments.map((comment) => {
        if (comment.key === EditComment.key && comment.parentKey === EditComment.parentKey) {
          return { ...comment, history: [...comment.history, comment.content], content: newContent };
        }
        if (comment.replies.length > 0) {
          return { ...comment, replies: updateComment(comment.replies) };
        }
        return comment;
      });
    };

    const updatedComments = updateComment(comments);
    setComments(updatedComments);  

    try {
      // API call to update the comment in MongoDB
      const response = await fetch('/api/update-comment', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ comment: EditComment, content: newContent }),
      });
      if (!response.ok) {
        throw new Error("Failed to update comment");
      }
      const data = await response.json();
      console.log("Comment updated successfully:", data);
    } catch (error) {
      console.error("Failed to update comment:", error);
    }
  };

  const getRange = (index: number, length: number) => {
    console.log(index, length);
    setRange({ index: index, length: length });
  };

  // Funktion zum Speichern eines neuen Kommentars in der MongoDB
  // const saveComment = async (comment: Comment) => {
  //   try {
  //     const response = await fetch("/api/save-comment", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ room, comment }),
  //     });
  //     if (!response.ok) {
  //       throw new Error("Failed to save comment");
  //     }
  //     const data = await response.json();
  //     console.log("Comment saved successfully:", data);
  //   } catch (error) {
  //     console.error("Failed to save comment:", error);
  //   }
  // };

  return (
    <div className="comments">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Comment" value="1" />
              <Tab label="Prompt List" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div>
              <div className="Comment-font">Comments</div>
              <button onClick={() => setShowComments(!showComments)}>
                {showComments ? "Hide Comments" : "Show Comments"}
              </button>
              {showComments && (
                <CommentList
                  addComment={addComment}
                  deleteComment={deleteComment}
                  editComment={editComment}
                  getRange={getRange}
                  comments={comments}
                  editor={editor}

                  incrementUpvote={incrementUpvote}
                  setAIChanges={setAIChanges}
                />
              )}
            </div>
          </TabPanel>
          <TabPanel value="2" style={{ padding: "10px 0px 10px 0px" }}>
            <PromptList promptList={promptList} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
