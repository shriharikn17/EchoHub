'use client';
import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import '../../../styles/TribePage.css';
import Link from 'next/link';
import { tribes, posts } from '../../mockdata';
import DNavbar from '../../../components/DNavbar';

export default function TribePage({ params }) {
  const { tribeId } = use(params);
  const router = useRouter();
  const initialPosts = posts
    .filter(post => post.tribeId === parseInt(tribeId))
    .map(post => ({
      ...post,
      comments: [...post.comments]
    }));
  const [tribePosts, setTribePosts] = useState(initialPosts);
  const [error, setError] = useState(null);
  const [commentInputs, setCommentInputs] = useState({});

  const tribe = tribes.find(t => t.id === parseInt(tribeId)) || {
    id: tribeId,
    name: "Unknown Tribe",
    icon: "/resources/default-icon.png"
  };

  const handleCreatePost = (e) => {
    e.preventDefault();
    setError(null);

    const content = e.target.parentNode.querySelector('#post-content').value;
    const mediaInput = e.target.parentNode.querySelector('#post-media');
    const mediaFile = mediaInput.files[0];
    let media = null;

    if (mediaFile) {
      const fileExtension = mediaFile.name.split('.').pop().toLowerCase();
      const validImageExtensions = ['jpg', 'jpeg', 'png', 'gif'];
      const validVideoExtensions = ['mp4', 'webm'];
      if (validImageExtensions.includes(fileExtension)) {
        media = `/resources/post-image-${posts.length + 1}.${fileExtension}`;
      } else if (validVideoExtensions.includes(fileExtension)) {
        media = `/resources/post-video-${posts.length + 1}.${fileExtension}`;
      } else {
        setError('Invalid file type. Please upload an image (.jpg, .png, .gif) or video (.mp4, .webm).');
        console.error('Invalid file type:', mediaFile.name);
        return;
      }
    }

    if (!content.trim() && !media) {
      setError('Post must contain text or media.');
      console.error('Post content and media empty');
      return;
    }

    const newPost = {
      id: posts.length + 1,
      tribeId: parseInt(tribeId),
      author: "John Doe",
      content,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      comments: [],
      media
    };

    setTribePosts([newPost, ...tribePosts]);
    posts.push(newPost);
    setError(null);
    e.target.parentNode.querySelector('#post-content').value = '';
    mediaInput.value = '';
  };

  const handleLike = (postId) => {
    const updatedPosts = tribePosts.map(post =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setTribePosts(updatedPosts);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) posts[postIndex].likes += 1;
  };

  const handleComment = (postId, e) => {
    e.preventDefault();
    const content = commentInputs[postId] || '';
    if (!content.trim()) {
      setError('Comment cannot be empty.');
      console.error('Comment content empty');
      return;
    }

    const newComment = {
      id: Math.max(...posts.flatMap(p => p.comments.map(c => c.id)), 0) + 1,
      author: "John Doe",
      content,
      date: new Date().toISOString().split('T')[0]
    };

    const updatedPosts = tribePosts.map(post =>
      post.id === postId ? { ...post, comments: [...post.comments, newComment] } : post
    );
    setTribePosts(updatedPosts);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex !== -1) posts[postIndex].comments.push(newComment);

    setCommentInputs({ ...commentInputs, [postId]: '' });
    setError(null);
  };

  const handleCommentInputChange = (postId, value) => {
    setCommentInputs({ ...commentInputs, [postId]: value });
  };

  const handleLeaveTribe = () => {
    if (!tribes) {
      setError('Tribe data is unavailable. Please try again later.');
      console.error('tribes is undefined in handleLeaveTribe');
      return;
    }

    try {
      const tribeIndex = tribes.findIndex(t => t.id === parseInt(tribeId));
      if (tribeIndex !== -1) {
        tribes.splice(tribeIndex, 1);
        console.log(`Left tribe with id ${tribeId}`);
        router.push('/dashboard');
      } else {
        setError('Tribe not found.');
        console.error(`Tribe with id ${tribeId} not found`);
      }
    } catch (err) {
      console.error('Error leaving tribe:', err);
      setError('Failed to leave tribe. Please try again.');
    }
  };

  return (
    <div className="trb-page-container">
      <DNavbar />
      <div className="trb-content">
        <aside className="trb-sidebar">
          <div className="trb-sidebar-section">
            <h3 className="trb-sidebar-title">Tribe Info</h3>
            <div className="trb-tribe-info">
              <img src={tribe.icon} alt={tribe.name} className="trb-icon" />
              <h4>{tribe.name}</h4>
            </div>
          </div>
          <div className="trb-sidebar-section">
            <Link href="/dashboard" className="trb-back-button">Back to Dashboard</Link>
            <button className="trb-leave-tribe-button" onClick={handleLeaveTribe}>Leave Tribe</button>
          </div>
        </aside>

        <main className="trb-main">
          <h2 className="trb-title">{tribe.name} Posts</h2>
          {error && <p className="trb-error-message">{error}</p>}
          <div className="trb-create-post-section">
            <h3 className="trb-create-post-title">Create a Post</h3>
            <div className="trb-create-post-form">
              <textarea
                id="post-content"
                className="trb-post-input"
                placeholder="Share your thoughts..."
              ></textarea>
              <div className="trb-form-group">
                <label htmlFor="post-media" className="trb-form-label">Add Photo or Video (Optional)</label>
                <input
                  type="file"
                  id="post-media"
                  className="trb-form-file"
                  accept="image/jpeg,image/png,image/gif,video/mp4,video/webm"
                />
              </div>
              <button className="trb-post-button" onClick={handleCreatePost}>Post</button>
            </div>
          </div>

          <div className="trb-posts-list">
            {tribePosts.length > 0 ? (
              tribePosts.map(post => (
                <div key={post.id} className="trb-post-card">
                  <div className="trb-post-header">
                    <span className="trb-post-author">{post.author}</span>
                    <span className="trb-post-date">{post.date}</span>
                  </div>
                  {post.media && (
                    <div className="trb-post-media">
                      {post.media.endsWith('.mp4') || post.media.endsWith('.webm') ? (
                        <video
                          src={post.media}
                          controls
                          className="trb-post-video"
                        />
                      ) : (
                        <img
                          src={post.media}
                          alt="Post media"
                          className="trb-post-image"
                        />
                      )}
                    </div>
                  )}
                  {post.content && <p className="trb-post-content">{post.content}</p>}
                  <div className="trb-post-actions">
                    <span className="trb-post-likes">{post.likes} Likes</span>
                    <button className="trb-action-button" onClick={() => handleLike(post.id)}>Like</button>
                    <button className="trb-action-button">Comment</button>
                  </div>
                  <div className="trb-comments-section">
                    <h4 className="trb-comments-title">Comments</h4>
                    {post.comments.length > 0 ? (
                      <ul className="trb-comments-list">
                        {post.comments.map(comment => (
                          <li key={comment.id} className="trb-comment-item">
                            <span className="trb-comment-author">{comment.author}</span>: {comment.content} <span className="comment-date">({comment.date})</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="trb-no-comments">No comments yet.</p>
                    )}
                    <div className="trb-comment-form">
                      <textarea
                        className="trb-comment-input"
                        placeholder="Add a comment..."
                        value={commentInputs[post.id] || ''}
                        onChange={(e) => handleCommentInputChange(post.id, e.target.value)}
                      ></textarea>
                      <button className="trb-comment-button" onClick={(e) => handleComment(post.id, e)}>Submit Comment</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="trb-no-posts">No posts yet. Be the first to share!</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}