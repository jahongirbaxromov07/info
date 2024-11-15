// netlify/functions/get-ip.js

exports.handler = async (event, context) => {
    // Foydalanuvchining IP manzilini olish
    const ip = event.headers['x-real-ip'] || event.headers['x-forwarded-for'] || 'IP manzili mavjud emas';
  
    return {
      statusCode: 200,
      body: JSON.stringify({ ip }),
    };
  };
  