import axios from "axios";

export const url="https://www.nosyapi.com/apiv2/service/";
export const key="ac0393ZwukYTJbbgE0aP8xT3P7sXku3xAifzMxpBHO1dm6LWdc0SAMZWehdv";

//Şehirler İçin
export const GetCities= async() => {
  
  try {
    const response=await axios.get(`${url}pharmacies-on-duty/cities`,
        {headers:{Authorization:`Bearer ${key}`}}
    )
    
    console.log("Çalıştı",response.data)
    return response.data
  } catch (error) {
    console.log("Şehir alırken Hata Olustu")
  }
}

//Eczane İçin

export const GetPharmacies = async (city, district) => {
  try {
    const formattedCity = city.trim().toLowerCase();
    const formattedDistrict = district.trim().toLowerCase();

    console.log("Gönderilen Şehir:", formattedCity);
    console.log("Gönderilen İlçe:", formattedDistrict);

    const response = await axios.get(`${url}pharmacies-on-duty`, {
      headers: { Authorization: `Bearer ${key}` },
      params: { city: formattedCity, district: formattedDistrict }, // 🔥 Burada district küçük harf
    });

    console.log("API Yanıtı:", response.data);
    return response.data;
  } catch (error) {
    console.log("Eczane Listesi Çekilemedi", error.response?.data || error.message);
  }
};

