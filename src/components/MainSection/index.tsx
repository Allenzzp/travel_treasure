import React from 'react';
import SearchForm from './SearchForm';
// import RouteOptions from './RouteOptions';
// import MapSection from './MapSection';

interface MainSectionProps {
  // Define any props here
}

const MainSection: React.FC<MainSectionProps> = (props) => {
  return (
    <main>
      <SearchForm onSearch={() => null} />
      {/* <RouteOptions />
      <MapSection /> */}
    </main>
  );
};

export default MainSection;

