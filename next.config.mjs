/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'w7.pngwing.com',
          pathname: '/pngs/556/616/png-transparent-logo-industry-design-company-logo-engineering.png',
        },
        {
            protocol:'https',
            hostname:'https://isinolsun.com',
            pathname:'/blog/wp-content/uploads/2024/02/oto-tamircisi-nedir.jpg'

        }
      ],
    },
  };
  
  export default nextConfig;
  