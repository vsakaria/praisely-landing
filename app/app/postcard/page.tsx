'use client';

import { useEffect } from 'react';

export default function PostcardPage() {
  useEffect(() => {
    const createRecipient = async () => {
      const formdata = new FormData();
      formdata.append("group_id", "401000");
      formdata.append("firstname", "James");
      formdata.append("lastname", "Wilson");
      formdata.append("address1", "123 Oak Street");
      formdata.append("city", "Manchester");
      formdata.append("postcode", "M1 4BT");
      formdata.append("country", "GB");

      const requestOptions = {
        method: "POST",
        body: formdata
    };

      try {
        const response = await fetch("https://api-eu1.stannp.com/v1/recipients/new?api_key=f4a0a8861bfa84c2477a374f", requestOptions);
        const result = await response.text();
        console.log('Recipient created:', result);
      } catch (error) {
        console.error('Error creating recipient:', error);
      }
    };

    createRecipient();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="mt-12 text-5xl font-extrabold mb-8 text-gray-800">
          Postcard Creator
        </h1>
        <div className="w-full max-w-md">
          <p className="text-gray-600">
            Welcome to the postcard creator! Content coming soon...
          </p>
        </div>
      </main>
    </div>
  );
} 

/*
curl "https://api-eu1.stannp.com/v1/recipients/new" \
import requests

data = {
    "group_id": "1",\n    "on_duplicate": "update",\n    "firstname": "Steve",\n    "lastname": "Parish",\n    "address1": "Unit 12 Taw Trade Park",\n    "city": "Barnstaple",\n    "postcode": "EX31 1JZ",\n    "country": "GB",\n
}

response = requests.post("https://api-eu1.stannp.com/v1/recipients/new?api_key={API_KEY}", data=data)
print(response.text)



curl "https://api-eu1.stannp.com/v1/user/info" \
-u f4a0a8861bfa84c2477a374fv:
*/

