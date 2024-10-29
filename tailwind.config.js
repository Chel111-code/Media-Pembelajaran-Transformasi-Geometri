/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans'],
        lato: ['Lato', 'sans'],
      },

      backgroundImage: {
        'custom-image': "url('img/bocilduduk.png')",
      },

      colors: {
        primary: '#22577A',
        secondary: '#5F6C7B',

        ungu: '#6A6AFF',

        hijau: '#079292',
        coklat: '#C8A5A5',
        hijauMuda: '#57CC99',
      },
    },
  },
  plugins: [],
};
