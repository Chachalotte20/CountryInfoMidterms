import { Globe2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white py-6 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Globe2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Country Info</h1>
        </div>
      </div>
    </header>
  );
}