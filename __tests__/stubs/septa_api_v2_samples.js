const ALERT_STUB = [
    {
      "alert_id": "D4624",
      "routes": ["23", "45"],
      "type": "DETOUR",
      "subject": "Construction",
      "message": "until 12/31/24, SB discontinued transit stop, 12th & Locust.",
      "status": "NORMAL",
      "cause": "CONSTRUCTION",
      "effect": "DETOUR",
      "severity": "WARNING",
      "trains": [],
      "blocks": [],
      "trips": [],
      "stops": [],
      "start": "2024-04-25 17:28:00",
      "end": "2024-12-31 00:00:00"
    },
    {
      "alert_id": "D12490",
      "routes": ["45"],
      "type": "DETOUR",
      "subject": "Construction",
      "message": "until 6/30/25, SB near side transit stop, discontinued at 12th & Vine., Board passengers SB far, side stop 12th & Vine at the, layover until further notice.",
      "status": "NORMAL",
      "cause": "CONSTRUCTION",
      "effect": "DETOUR",
      "severity": "WARNING",
      "trains": [],
      "blocks": [],
      "trips": [],
      "stops": [],
      "start": "2022-10-17 09:33:00",
      "end": "2025-06-30 06:00:00"
    }
  ]
  
  const ALERT_SB_DISCONTINUED_ONE_ALERT = ALERT_STUB[0];

  const LOCATION_STUB = [
    {
      "route_id": "45",
      "trip_id": "966023",
      "direction_id": 0,
      "trip_headsign": "Broad-Oregon",
      "block_id": 7060,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Southbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966106",
      "direction_id": 1,
      "trip_headsign": "Noble-12th",
      "block_id": 7060,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Northbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966029",
      "direction_id": 0,
      "trip_headsign": "Broad-Oregon",
      "block_id": 7060,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Southbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966111",
      "direction_id": 1,
      "trip_headsign": "Noble-12th",
      "block_id": 7060,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Northbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966032",
      "direction_id": 0,
      "trip_headsign": "Broad-Oregon",
      "block_id": 7060,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Southbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966115",
      "direction_id": 1,
      "trip_headsign": "Noble-12th",
      "block_id": 7060,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Northbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966036",
      "direction_id": 0,
      "trip_headsign": "Broad-Oregon",
      "block_id": 7060,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Southbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966038",
      "direction_id": 0,
      "trip_headsign": "Broad-Oregon",
      "block_id": 7065,
      "vehicle_id": "8442",
      "lat": "39.937599",
      "lon": "-75.163022",
      "heading": 191.07,
      "delay": -2.6,
      "next_stop_id": "16502",
      "next_stop_name": "12th St & Bainbridge St",
      "next_stop_sequence": 12,
      "trip_completion": "28",
      "seat_availability": "NOT_AVAILABLE",
      "timestamp": 1726970987,
      "direction_name": "Southbound",
      "status": "EARLY"
    },
    {
      "route_id": "45",
      "trip_id": "966107",
      "direction_id": 1,
      "trip_headsign": "Noble-12th",
      "block_id": 7066,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Northbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966030",
      "direction_id": 0,
      "trip_headsign": "Broad-Oregon",
      "block_id": 7066,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Southbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966112",
      "direction_id": 1,
      "trip_headsign": "Noble-12th",
      "block_id": 7066,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Northbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966033",
      "direction_id": 0,
      "trip_headsign": "Broad-Oregon",
      "block_id": 7066,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Southbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966116",
      "direction_id": 1,
      "trip_headsign": "Noble-12th",
      "block_id": 7066,
      "vehicle_id": null,
      "lat": null,
      "lon": null,
      "heading": null,
      "delay": 999,
      "next_stop_id": null,
      "next_stop_name": null,
      "next_stop_sequence": null,
      "trip_completion": "-1",
      "seat_availability": null,
      "timestamp": 63240,
      "direction_name": "Northbound",
      "status": "CANCELED"
    },
    {
      "route_id": "45",
      "trip_id": "966118",
      "direction_id": 1,
      "trip_headsign": "Noble-12th",
      "block_id": 7254,
      "vehicle_id": "3554",
      "lat": "39.940996",
      "lon": "-75.160670",
      "heading": 9.42,
      "delay": 1.6,
      "next_stop_id": "16836",
      "next_stop_name": "11th St & Fitzwater St",
      "next_stop_sequence": 26,
      "trip_completion": "67",
      "seat_availability": "MANY_SEATS_AVAILABLE",
      "timestamp": 1726970987,
      "direction_name": "Northbound",
      "status": "ON-TIME"
    }
  ];
  
const EARLY_BUS_12TH_BAINBRIDGE  = LOCATION_STUB[7];
const MAGIC_VALUE_LOCATION = LOCATION_STUB[0];

export { ALERT_SB_DISCONTINUED_ONE_ALERT, ALERT_STUB,
  LOCATION_STUB, EARLY_BUS_12TH_BAINBRIDGE, MAGIC_VALUE_LOCATION
}