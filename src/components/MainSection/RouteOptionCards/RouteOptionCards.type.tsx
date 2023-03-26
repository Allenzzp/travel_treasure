export interface RouteInfo {
    id: number;
    start_time: string;
    end_time: string;
    transportation: string[];
    estimated_price: number;
    steps: {
      transport_mode: string;
      start_location: string;
      end_location: string;
      duration: number;
      instructions: string;
    }[];
  };