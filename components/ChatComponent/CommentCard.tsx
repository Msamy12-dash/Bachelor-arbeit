import React, { Component, ChangeEvent } from 'react';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import HistoryIcon from '@mui/icons-material/History';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

interface CommentCardProps {
    name: string;
    date: string; // oder `Date`, je nach Format
    content: string;
    upvotes: number;
    history: string[]; // oder den genauen Typ angeben, wenn bekannt
    onEdit: (newContent: string) => void;
    onDelete: () => void;
    onIncrement: () => void;
}

interface CommentCardState {
    hasBeenEdited: boolean;
    isEditing: boolean;
    editContent: string;
    oldContent: string;
    showHistory: boolean;
}

class CommentCard extends Component<CommentCardProps, CommentCardState> {
    state: CommentCardState = { 
        hasBeenEdited: false,
        isEditing: false, 
        editContent: this.props.content,
        oldContent: this.props.content,
        showHistory: false,
    } 

    enableEditMode = () => {
        this.setState({ isEditing: true });
    }

    handleContentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ editContent: event.target.value });
    }

    saveEdit = () => {
        if(this.state.oldContent !== this.state.editContent) {
            this.props.onEdit(this.state.editContent);
            this.setState({ 
                oldContent: this.state.editContent, 
                isEditing: false, 
                hasBeenEdited: true 
            });
        }
    }

    cancelEdit = () => {
        this.setState({ isEditing: false, editContent: this.state.oldContent });
    }

    toggleHistory = () => {
        this.setState((prevState) => ({
            showHistory: !prevState.showHistory,
        }));
    }

    render() { 
        return (
            <div className="card">
                <div className="card-body">
                    <div className='card-top'>
                        <div className="NameDate">
                            <h5 className="card-title">{this.props.name}</h5>
                            <p className='comment-date'>{this.props.date}</p>
                        </div>
                        <div className="EditDeleteHistory">
                            {!this.state.isEditing && (
                                <>
                                <IconButton onClick={this.enableEditMode}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={this.props.onDelete}>
                                    <DeleteIcon />
                                </IconButton>
                                </>
                            )}
                            {this.state.hasBeenEdited && !this.state.isEditing && (
                                <IconButton onClick={this.toggleHistory}>
                                    <HistoryIcon />
                                </IconButton>
                            )}
                        </div>
                    </div>
                    {this.state.isEditing ? (
                        <div>
                            <textarea
                                className="edit-textarea"
                                value={this.state.editContent}
                                onChange={this.handleContentChange}
                            />
                            <button onClick={this.saveEdit} className="btn-save">Save</button>
                            <button onClick={this.cancelEdit} className="btn-cancel">Cancel</button>
                        </div>
                    ) : (
                        <div>
                            <p className="card-text">{this.state.editContent}</p>
                            <div className='card-bottom'>
                                <IconButton onClick={this.props.onIncrement}>
                                    <ThumbUpIcon />
                                </IconButton>
                                <p className='upvotes'>Upvotes: {this.props.upvotes}</p>
                            </div>
                        </div>
                    )}
                    {this.state.showHistory && (
                        <div className="comment-history">
                            <h6>History:</h6>
                            <ul>
                                {this.props.history.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default CommentCard;
