This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-green-50">
     
      <div className="m-10 flex-grow">
        <div className="max-w-full mx-auto p-8 pt-20 px-4 md:px-8"> {/* Added px-4 md:px-8 for padding */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center text-yellow-700 font-serif drop-shadow-md">
            {packageData.packageName}
          </h1>

          <div className="space-y-12 p-6 md:p-10">
            {packageData.places.map((place, index) => (
              <div
                key={place.id}
                className={`p-6 md:p-8 bg-white border border-gray-300 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105 ${index > 0 ? 'mt-8' : ''}`} // Added mt-8 for gap
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-900 font-serif">
                  {place.title}
                </h2>
                <p className="text-gray-800 text-center text-lg leading-relaxed mb-8 px-4 font-serif">
                  {place.description}
                </p>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {place.images.map((image, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-300 p-2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 bg-gray-100"
                    >
                      <img
                        src={image}
                        alt={`Place ${index + 1}`}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    
    </div>

    