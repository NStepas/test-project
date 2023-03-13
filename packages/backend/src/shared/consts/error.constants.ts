export const AUTH_ERRORS = {
  TOKEN_NOT_CREATED: 'Failed to create accessToken.',
  TOKEN_NOT_PROVIDED: 'Access token not provided.',

  WRONG_ACCESS_TOKEN: 'Cannot provide access token.',
  WRONG_AUTH_DATA: 'Wrong password or email.'
};

export const TASK_ERRORS = {
  TASK_NOT_CREATED: 'Failed to create task.',
  TASK_NOT_DELETED: 'Failed to delete task.',
  TASK_NOT_UPDATED: 'Failed to update task.',
  NOT_FOUND_TASK: 'Task not found.'
};

export const USER_ERROR = {
  THE_USER_IS_ALREADY_REGISTERED: 'Such user already exists.',
  FAILED_TO_CREATE_USER: 'Cannot create user, something went wrong, try again.',
  EXISTING_NAME: 'Name/email is already exist, please try another one',
  INVALID_PASSWORD: 'Failed to login! Invalid password.',
  NOT_FOUND_USER: 'Failed to login! User not found.'
};

export const SERVER_ERROR = {
  FAILED_TO_HASH_PASSWORD: 'Failed to hash password.',

  NOT_FOUND: 'Not found.'
};

export const COLUMN_ERROR = {
  THE_COLUMN_IS_ALREADY_EXIST: 'Failed to create column, maybe column name already used',
  FAILED_TO_GET_COLUMN: 'Failed to get column',
  FAILED_TO_DELETE_COLUMN: 'Failed to delete column',
  FAILED_TO_UPDATE_COLUMN: 'Failed to update column, maybe column name already used',
  FAILED_TO_CREATE_COLUMN: 'Failed to create column, please try again later',
  FAILED_TO_GET_COLUMN_COUNT:
    'Failed to get column count and update order for columns, please try again later',
  FAILED_TO_UPDATE_COLUMN_ORDER: 'Failed to update column order'
};

export const CARD_ERROR = {
  THE_CARD_IS_ALREADY_EXIST: 'Failed to create cart, maybe card name already used',
  FAILED_TO_GET_CARD: 'Failed to get card',
  FAILED_TO_DELETE_CARD: 'Failed to delete card',
  FAILED_TO_UPDATE_CARD: 'Failed to update card, maybe card name already used',
  FAILED_TO_UPDATE_CARD_COLUMN_ID: 'Failed to update card column Id',
  FAILED_TO_CREATE_CARD: 'Failed to create card, please try again later'
};
