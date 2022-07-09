import { FC } from 'react';
import { $hook } from '@jujulego/aegis-react';

import { $Quotes } from './quote.entity';

// Hooks
const useRandomQuotes = $hook($Quotes).list('random');

// Component
export const App: FC = () => {
  const { data: quotes } = useRandomQuotes('home-random');

  console.log(quotes);

  return (
    <code>
      {JSON.stringify(quotes, null, 2)}
    </code>
  );
};
