import { bin, name, repository } from '../../package';

export const APP_NAME = Object.keys(bin).pop() || name;
export const REPOSITORY = repository;

export const DEPLOYMENT_STATUSES = {
  SUCCESS: 'success',
  ERROR: 'error',
  IN_PROGRESS: 'in_progress',
  INACTIVE: 'inactive',
  QUEUED: 'queued',
};
