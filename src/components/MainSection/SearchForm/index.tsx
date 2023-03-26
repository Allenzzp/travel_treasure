import React from "react";
import "./SearchForm.css";

interface SearchFormProps {
  onSearch: (formData: FormData) => void;
}

interface FormData {
  departPlace: string;
  destination: string;
  preferences: string[];
}

const SearchForm = ({ onSearch }: SearchFormProps) => {
  //Set states
  const [departPlace, setDepartPlace] = React.useState("");
  const [destination, setDestination] = React.useState('');
  const [preferences, setPreferences] = React.useState<string[]>([]);

  //handle user inputs
  const handleDepartPlaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDepartPlace(event.target.value);
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDestination(event.target.value);
  };

  const handlePreferenceChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value.trim();
    if (event.key === "Enter" && value) {
      setPreferences((prevPreferences) => [...prevPreferences, value]);
      event.currentTarget.value = "";
      event.preventDefault();
    }
  };

  //handle user search
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = {
      departPlace,
      destination,
      preferences,
    }
    onSearch(formData);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="departPlace">Depart Place</label>
            <input
              type="text"
              id="departPlace"
              name="departPlace"
              value={departPlace}
              onChange={handleDepartPlaceChange}
              placeholder="Enter Depart Place"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="destination">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={destination}
              onChange={handleDestinationChange}
              placeholder="Enter Destination"
              required
            />
          </div>
        </div>
        <div className="form-group preferences">
          <label htmlFor="preferences">Preferences</label>
          <input
            type="text"
            id="preferences"
            name="preferences"
            onKeyDown={handlePreferenceChange}
            placeholder="Enter Preferences"
          />
          <ul>
            {preferences.map((preference) => (
              <li key={preference}>{preference}</li>
            ))}
          </ul>
        </div>
        <button type="submit">Go</button>
      </form>
    </div>
  );
};

export default SearchForm;
