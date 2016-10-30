class GoogleMapsController < ApplicationController
  def index
    @location = "San Francisco, CA, United States"
    @parks_call = Yelp.client.search(@location, { term: 'park', limit: 16 }).businesses
    @parks_locations = @parks_call.map { |park| park.location.display_address[0] }
    @parks_longlat = @parks_call.map { |park| [park.location.coordinate.longitude, park.location.coordinate.latitude] }

  end
end
