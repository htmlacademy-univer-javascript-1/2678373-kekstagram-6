import { COMMENTS_TO_RENDER } from '../constants/constants.js';

function calculateCommentsToRender(currentCommentAmount, commentsDataLength) {
  return Math.min(currentCommentAmount + COMMENTS_TO_RENDER, commentsDataLength);
}

function normalizeCommentsToRenderRange(startComment, endComment, commentsTotalAmount) {
  if (endComment === null || endComment === undefined) {
    endComment = commentsTotalAmount > COMMENTS_TO_RENDER ? COMMENTS_TO_RENDER : commentsTotalAmount;
  }
  if (startComment === null || startComment === undefined) {
    startComment = 0;
  }
  return {startComment, endComment};
}

export {calculateCommentsToRender, normalizeCommentsToRenderRange};
