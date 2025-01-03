export const createRecipient = async () => {
  const formdata = new FormData();
  formdata.append("group_id", "401000");
  formdata.append("firstname", "Bob");
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
    const response = await fetch(`https://api-eu1.stannp.com/v1/recipients/new?api_key=${process.env.NEXT_PUBLIC_STANNP_API_KEY}`, requestOptions);
    const result = await response.text();
    console.log('Recipient created:', result);
    return result;
  } catch (error) {
    console.error('Error creating recipient:', error);
    throw error;
  }
}; 
