import React from 'react';
import SearchForm from './SearchForm';
import RouteOptionCards from './RouteOptionCards';
// import MapSection from './MapSection';
import RouteInfoData from './fake_data';

interface MainSectionProps {
  // Define any props here
}
const onChooseRoute = (id: number) => {
  return;
}

const MainSection: React.FC<MainSectionProps> = (props) => {
  return (
    <main>
      <SearchForm onSearch={() => null} />
      <RouteOptionCards 
        routeInfoCollection={RouteInfoData}
        onChooseRoute={ onChooseRoute }
      />
      {/* <MapSection /> */}
    </main>
  );
};

export default MainSection;

