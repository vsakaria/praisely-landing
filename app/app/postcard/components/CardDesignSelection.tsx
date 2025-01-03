import { useEffect, useState } from 'react';
import { storage } from '../../../../src/config/firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import { ImageData, StepProps } from './types'; 

interface CardDesignSelectionProps extends StepProps{
  setSelectedDesign: (design: ImageData) => void;
}

export function CardDesignSelection({ setSelectedDesign, nextStep, previousStep }: CardDesignSelectionProps) {
  const [imageList, setImageList] = useState<ImageData[]>([]);
  const [selectedImagePath, setSelectedImagePath] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const storageRef = ref(storage);
        const result = await listAll(storageRef);
        
        const imagesData = await Promise.all(
          result.items.map(async (item) => ({
            path: item.fullPath,
            url: await getDownloadURL(item)
          }))
        );
        setImageList(imagesData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Select a Card Design</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {imageList.map((image) => (
          <div 
            key={image.path}
            className={`relative aspect-[3/4] cursor-pointer hover:opacity-75 transition-opacity ${
              selectedImagePath === image.path ? 'ring-2 ring-blue-500' : ''
            }`}
            onClick={() => {
              setSelectedDesign(image);
              setSelectedImagePath(image.path);
            }}
          >
            <img
              src={image.url}
              alt={`Card design ${image.path}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      
      <div className="flex gap-4">
        <button
          onClick={previousStep}
          className="w-full py-3 px-4 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition-colors"
        >
          Previous Step
        </button>

        <button
          onClick={nextStep}
          disabled={!selectedImagePath}
          className={`w-full py-3 px-4 rounded-lg ${
            selectedImagePath 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          } transition-colors`}
        >
          Next Step
        </button>
      </div>
    </div>
  );
} 