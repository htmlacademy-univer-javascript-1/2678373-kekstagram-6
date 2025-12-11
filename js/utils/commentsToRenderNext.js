import { COMMENTS_TO_RENDER } from "../constants/constants.js";

function commentsToRenderIncrement(currentCommentAmount, commentsDataLength) {
  if (commentsDataLength - currentCommentAmount < COMMENTS_TO_RENDER) {
    return currentCommentAmount + (commentsDataLength - currentCommentAmount);
  }
  return currentCommentAmount + COMMENTS_TO_RENDER;
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

export {commentsToRenderIncrement, normalizeCommentsToRenderRange};
