import { Country } from '../types/country';

interface CountryDetailsProps {
  country: Country;
  onBorderClick: (code: string) => void;
}

export default function CountryDetails({ country, onBorderClick }: CountryDetailsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{country.name.common}</h2>
          <p className="text-gray-600 italic">{country.name.official}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DetailItem label="Capital" value={country.capital?.join(', ')} />
            <DetailItem label="Region" value={country.region} />
            <DetailItem label="Subregion" value={country.subregion} />
            <DetailItem label="Population" value={country.population.toLocaleString()} />
            <DetailItem label="Area" value={`${country.area.toLocaleString()} km²`} />
            <DetailItem label="Coordinates" value={`${country.latlng.join(', ')}`} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Additional Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Timezones</h4>
            <ul className="list-disc list-inside text-gray-600">
              {country.timezones.map((timezone) => (
                <li key={timezone}>{timezone}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Languages</h4>
            <ul className="list-disc list-inside text-gray-600">
              {Object.values(country.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Currencies</h4>
            <ul className="list-disc list-inside text-gray-600">
              {Object.entries(country.currencies).map(([code, currency]) => (
                <li key={code}>
                  {currency.name} ({currency.symbol})
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Border Countries</h4>
            <div className="flex flex-wrap gap-2">
              {country.borders?.map((border) => (
                <button
                  key={border}
                  onClick={() => onBorderClick(border)}
                  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  {border}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-semibold text-gray-700">{label}: </span>
      <span className="text-gray-600">{value}</span>
    </div>
  );
}