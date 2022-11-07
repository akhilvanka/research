import type {Post} from './Post';
import {ensure} from '../types';

import {SenatorTrading} from './2022/SenatorTrading';

const ensurePosts = ensure<readonly Post[] | Post[]>();

export const posts = ensurePosts([
	new SenatorTrading(),
] as const);
