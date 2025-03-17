 <Navbar />
      <br/>
      <br/>
      <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-10 px-4 font-serif text-center">
        {/* Heading */}
        <h1 className="text-6xl font-bold text-blue-600 mb-10 mt-20">
          {packageData.packageName}
        </h1>
        <br/><br/>

        {/* Places */}
        <div className="space-y-12 w-full mx-auto pakediv">
          
          {packageData.places.map((place) => (
            <div
              key={place.id}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 "
            >
              {/* Place Title */}
              <h2 className="text-4xl font-bold text-blue-800 mb-6">
                {place.title}
              </h2>
              <br/><br/>
              {/* Place Description */}
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {place.description}
              </p>

              {/* Images Grid */}
              <div className=" pakeimgdiv">
                {place.images.map((image, index) => (
                  <div
                    key={index}
                    className=" h-90   rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
                  >
                      <br/><br/>
                    <img
                      src={image}
                      alt={`Place ${index + 1}`}
                      className="w-full h-76 object-cover object-fill"
                    />
                  </div>
                ))}
              </div>
              <br/><br/>
            </div>
            
          ))}
        
          
        </div>
      </div>
      <Footer />