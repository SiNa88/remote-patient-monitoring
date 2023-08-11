import { writable } from 'svelte/store';
import type { GraphQLClient } from 'graphql-request';
import type {
	Project,
	DockerRegistryCredential,
	DryRun,
	SampleFile,
	DryRunMetrics
} from '../types.js';

export const graphQLClient = writable<GraphQLClient>();

export const projectsList = writable<Project[] | undefined>();
export const filesList = writable<SampleFile[] | undefined>();
export const stepsList = writable<DryRunMetrics[] | undefined>();
export const selectedProject = writable<Project | undefined>();
export const dryRunsList = writable<DryRun[] | undefined>();
export const credentialsList = writable<DockerRegistryCredential[] | undefined>();
export const clickedProjectId = writable<string>('');
// need separate list in frontend as argo stores suspended runs in state 'Running'
export const pausedDryRuns = writable<string[]>([]);

export const username = writable<string>('username');
