class GoogleMapsController < ApplicationController
  def index
    @location = "San Francisco, CA, United States"

    @parks_call = Yelp.client.search(@location, { term: 'park', limit: 15 }).businesses
    
    @parks_locations = @parks_call.map { |park| park.location.display_address[0] }
    # @p_locations = []
    # @parks_call.each {|location| @p_locations << [location.name, location.image_url]}
    @parks_longlat = @parks_call.map { |park| [park.location.coordinate.longitude, park.location.coordinate.latitude] }

    @farmers_call = Yelp.client.search(@location, { term: 'farmers market', limit: 15 }).businesses

    @farmers_locations = @farmers_call.map { |farmer| farmer.location.display_address[0] }

    @farmers_longlat = @farmers_call.map {|market| [market.location.coordinate.longitude, market.location.coordinate.latitude]}
  end
end
