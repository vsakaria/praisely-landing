'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { StudentSelection } from './components/StudentSelection';
import { CardDesignSelection } from './components/CardDesignSelection';
import { CardMessageInput } from './components/CardMessageInput';
import { CardPreview } from './components/CardPreview';
import { Student, ImageData } from './components/types';

// Dynamically import StepWizard with SSR disabled
const StepWizard = dynamic(() => import('react-step-wizard'), {
  ssr: false,
});

export default function PostcardPage() {
  const [student, setStudent] = useState<Student | null>(null);
  const [selectedDesign, setSelectedDesign] = useState<ImageData | null>(null);
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center p-4">
        <h1 className="mt-12 text-5xl font-extrabold mb-8 text-gray-800">
          Postcard Creator
        </h1>
        <div className="w-full max-w-2xl">
          <StepWizard>
            <StudentSelection setStudent={setStudent} />
            <CardDesignSelection setSelectedDesign={setSelectedDesign} />
            <CardMessageInput setMessage={setMessage} />
            <CardPreview 
              student={student} 
              design={selectedDesign} 
              message={message} 
            />
          </StepWizard>
        </div>
      </main>
    </div>
  );
} 