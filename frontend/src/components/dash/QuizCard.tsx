import { useNavigate } from "react-router-dom";

interface QuizCardProps {
title: string;
description?: string;
onStart: () => void;
}

export function QuizCard({ title, description, onStart }: QuizCardProps) {
const navigate = useNavigate();

return ( <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"> <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>

```
  {description && (
    <p className="text-sm text-gray-600 mb-4">{description}</p>
  )}

  <button
    onClick={onStart}
    className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all shadow-md"
  >
    Inizia
  </button>
</div>

);
}
