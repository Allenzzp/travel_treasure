import { RouteInfo } from "./RouteOptionCards/RouteOptionCards.type";

const RouteInfoData: RouteInfo[] = [
  {
    id: 1,
    start_time: '9:00 AM',
    end_time: '10:30 AM',
    transportation: ['Bus', 'Subway', 'Walk'],
    estimated_price: 5.5,
    steps: [
      {
        transport_mode: 'Bus',
        start_location: '123 Main St',
        end_location: '456 1st St',
        duration: 20,
        instructions: 'Take bus #12 from 123 Main St to 789 Elm St',
      },
      {
        transport_mode: 'Subway',
        start_location: '789 Elm St',
        end_location: '101 Maple Ave',
        duration: 30,
        instructions: 'Take subway line 1 from 789 Elm St to 101 Maple Ave',
      },
      {
        transport_mode: 'Walk',
        start_location: '101 Maple Ave',
        end_location: '105 Oak St',
        duration: 10,
        instructions: 'Walk from 101 Maple Ave to 105 Oak St',
      },
    ],
  },
  {
    id: 2,
    start_time: '10:00 AM',
    end_time: '11:15 AM',
    transportation: ['Taxi', 'Walk'],
    estimated_price: 15.0,
    steps: [
      {
        transport_mode: 'Taxi',
        start_location: '123 Main St',
        end_location: '456 1st St',
        duration: 15,
        instructions: 'Take a taxi from 123 Main St to 456 1st St',
      },
      {
        transport_mode: 'Walk',
        start_location: '456 1st St',
        end_location: '105 Oak St',
        duration: 10,
        instructions: 'Walk from 456 1st St to 105 Oak St',
      },
    ],
  },
  {
    id: 3,
    start_time: '10:30 AM',
    end_time: '11:00 AM',
    transportation: ['Bus', 'Walk'],
    estimated_price: 3.0,
    steps: [
      {
        transport_mode: 'Bus',
        start_location: '123 Main St',
        end_location: '789 Elm St',
        duration: 20,
        instructions: 'Take bus #12 from 123 Main St to 789 Elm St',
      },
      {
        transport_mode: 'Walk',
        start_location: '789 Elm St',
        end_location: '105 Oak St',
        duration: 10,
        instructions: 'Walk from 789 Elm St to 105 Oak St',
      },
    ],
  },
];

export default RouteInfoData;
