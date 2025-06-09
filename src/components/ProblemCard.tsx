
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, RefreshCw, ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface Problem {
  id: string;
  question: string;
  answer: string;
  solution: string;
}

interface ProblemCardProps {
  problem: Problem;
  index: number;
  onRegenerate: () => void;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem, index, onRegenerate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleListen = () => {
    setIsPlaying(true);
    // Simulate audio playback
    setTimeout(() => {
      setIsPlaying(false);
    }, 3000);
  };

  return (
    <Card className="border-l-4 border-l-blue-500 shadow-md hover:shadow-lg transition-shadow bg-white">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Problem Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-2">Soal {index}</h3>
              <p className="text-gray-700 leading-relaxed">{problem.question}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleListen}
              disabled={isPlaying}
              className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700"
            >
              <Volume2 className="w-4 h-4 mr-1" />
              {isPlaying ? 'Sedang Memutar...' : 'Dengarkan'}
            </Button>
            
            <Button
              variant="outline"
              size="sm"
              onClick={onRegenerate}
              className="bg-orange-50 hover:bg-orange-100 border-orange-200 text-orange-700"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              Buat Ulang
            </Button>
          </div>

          {/* Teacher Answer Section */}
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-between p-3 bg-green-50 hover:bg-green-100 text-green-800 border border-green-200 rounded-lg"
              >
                <span className="font-medium">Lihat Jawaban & Pembahasan (Untuk Guru)</span>
                {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-3 mt-3 p-4 bg-green-50 rounded-lg border border-green-200">
              <div>
                <h4 className="font-semibold text-green-800 mb-1">Jawaban:</h4>
                <p className="text-green-700 font-medium">{problem.answer}</p>
              </div>
              <div>
                <h4 className="font-semibold text-green-800 mb-1">Langkah Penyelesaian:</h4>
                <div className="text-green-700 whitespace-pre-line">{problem.solution}</div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </CardContent>
    </Card>
  );
};
