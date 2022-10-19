import { useEffect, useState } from 'react';
import User from '../User';

export function useFetch<T>(url: string): T[] {
  const [items, setItems] = useState<T[]>([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [url]);

  return items;
}

const Fetch: React.FC = () => {
  const items = useFetch<User>('/users');
  return (
    <div>
      {items.map((item) => (
        <div data-testid="firstname" key={item.id}>
          {item.firstname}
        </div>
      ))}
    </div>
  );
};

export default Fetch;
