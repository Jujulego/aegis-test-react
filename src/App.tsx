import { $hook } from '@jujulego/aegis-react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { $Quotes } from './quote.entity';

// Hooks
const useRandomQuotes = $hook.list($Quotes.byAnime);

// Component
export const App: FC = () => {
  const { register, watch } = useForm({
    defaultValues: { title: 'naruto' }
  });

  const title = watch('title');
  const { data: quotes } = useRandomQuotes('home-random', { title });

  return (
    <div>
      <input {...register('title')} />
      <code>
        {JSON.stringify(quotes, null, 2)}
      </code>
    </div>
  );
};
