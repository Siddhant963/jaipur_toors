// app/packages/[id]/page.js (Server Component)
import React from 'react';
import PackageDetails from '@/Components/PackageDetails'; // Your Client Component
import packagesData from '../../../data/all_pakeges_data.json'; // Adjust the path

export default async function Page({ params }) {
  const { id } = await  params; // Destructure `id` from `params`

  // Find the package data based on the packageId
  const packageData = packagesData.packages.find(
    (pkg) => pkg.packageId === parseInt(id)
  );

  if (!packageData) {
    return <div className="text-center text-red-500 text-2xl font-semibold mt-10">Package not found!</div>;
  }

  return <PackageDetails packageData={packageData} />;
}