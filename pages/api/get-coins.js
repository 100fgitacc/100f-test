const axios = require('axios');

const getLatestCryptoListings = async () => {
  try {
    const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c',
      },
    });
    // Успешный ответ
    return response.data;
  } catch (error) {
    // Обработка ошибок
    console.error(error);
    throw error;
  }
};

getLatestCryptoListings()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Ошибка при запросе данных:', error);
  });