import { $entity, $store } from '@jujulego/aegis';
import { $api } from '@jujulego/aegis-api';

// Types
export interface IQuote {
  anime: string;
  character: string;
  quote: string;
}

// Entity
export const $Quotes = $entity('Quotes', $store.localStorage(), (quote: IQuote) => quote.quote)
  .$queryList('random', $api.get`https://animechan.vercel.app/api/quotes`)
  .$queryList('byAnime', $api.get`https://animechan.vercel.app/api/quotes/anime?title=${'title'}`)
  .$queryList('byCharacter', $api.get`https://animechan.vercel.app/api/quotes/character?name=${'name'}`);
