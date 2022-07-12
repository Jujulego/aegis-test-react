import { $entity, $store } from '@jujulego/aegis';
import { $api } from '@jujulego/aegis-api';

// Types
export interface IQuote {
  anime: string;
  character: string;
  quote: string;
}

// Entity
export const $Quotes = $entity('Quotes', $store.memory(), (quote: IQuote) => quote.quote)
  .$protocol(({ $list }) => ({
    random: $list.query($api.get`https://animechan.vercel.app/api/quotes`),
    byAnime: $list.query($api.get`https://animechan.vercel.app/api/quotes/anime?title=${'title'}`, 'replace'),
    byCharacter: $list.query($api.get`https://animechan.vercel.app/api/quotes/character?name=${'name'}`)
  }));
